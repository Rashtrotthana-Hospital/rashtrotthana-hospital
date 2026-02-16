import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type DayName = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
interface Availability {

  id: number;
  day: DayName;
  availableFrom: string; // Change here to use a single field
  slotDuration: number;
  updatedAt?: string;
  doctorId?: number;
  availableFromArray?: [''],


}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-new-doctor-page',
  templateUrl: './new-doctor-page.component.html',
  styleUrl: './new-doctor-page.component.css'
})
export class NewDoctorPageComponent {

  date: any
  minDate: any
  // disabledDays: any;
  expertiseCol1: string[] = [];
  expertiseCol2: string[] = [];
  expertise2Col1: any[] = [];
  expertise2Col2: any[] = [];
  availableTimes: { name: string }[] = [];
  filteredDoctor: any;
  unavailableSlotsForDate: any[] = [];
  contactForm: any = FormGroup;
  clicked: boolean = true;
  // apiUrl: string = 'http://localhost:3000/api'
  // apiUrl: string = 'https://rashtrotthana-backend-812956739285.us-east4.run.app/api';
  apiUrl: string = 'https://docmindsjmrh.imapps.in/api'
  @ViewChild('formSection') formSection!: ElementRef;

  doctorFAQs: FAQ[] = [];
  activeFAQ: number | null = null;
  intervalId: any;
  isFlipping = false;



  scrollToForm() {
    this.formSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient,
    private fb: FormBuilder,
    private metaService: Meta,
    private titleService: Title,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      console.log(slug)
      this.loadDoctorBySlug(slug);
    });

    this.updateVisibleInsurances();

    this.intervalId = setInterval(() => {
      this.nextInsuranceSet();
    }, 5000);

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^[a-zA-Z.\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      time: ['', Validators.required],
      message: ['', Validators.required],
      date_appointment: ['', Validators.required],
    });
    this.minDate = new Date();

  }
  loadDoctorBySlug(slug: string) {
    // Replace with actual data source (e.g., service or static list)
    const doctor = this.allDoctors.find(doc =>
      doc.name
        .toLowerCase()
        .replace(/[().]/g, '')      // remove dots and parentheses
        .replace(/\s+/g, '-')       // replace spaces with hyphens
        .replace(/-+/g, '-')        // replace multiple hyphens with single
        .replace(/^-|-$/g, '')     // trim hyphens from start/end   // Replace spaces with hyphens
      === slug
    );
    console.log(doctor)

    if (doctor) {
      this.filteredDoctor = doctor;
      this.doctorFAQs = doctor.faqs || [];

      // START counter animation
      if (doctor.happyPatients && !this.hasAnimated) {
        this.hasAnimated = true;

        // Convert "12000+" → 12000
        const numericValue = parseInt(
          doctor.happyPatients.toString().replace(/\D/g, ''),
          10
        );

        this.animateCount(numericValue);
      }
      console
      const expertise = doctor.areasOfExpertise || [];
      const expertise2 = doctor.areasOfExpertise2 || [];
      const mid = Math.ceil(expertise.length / 2);
      this.expertiseCol1 = expertise.slice(0, mid);
      this.expertiseCol2 = expertise.slice(mid);

      const mid2 = Math.ceil(expertise2.length / 2);
      this.expertise2Col1 = expertise2.slice(0, mid2);
      this.expertise2Col2 = expertise2.slice(mid2);

      console.log(this.expertise2Col1, "expertise2Col1 log")
      console.log(this.expertise2Col2, "expertise2Col2 log")

      this.titleService.setTitle(this.filteredDoctor.title || this.filteredDoctor.name);
      this.metaService.updateTag({ name: 'description', content: this.filteredDoctor.description || this.filteredDoctor.about });
      this.getDoctorById(this.filteredDoctor.id).subscribe(
        (response) => {
          const allUpdatedAtNull = response.availability?.every(avail => !avail.updatedAt);
          let latestTimestamp: string | null = null;
          if (!allUpdatedAtNull) {
            const validUpdatedAts = response.availability
              .filter(avail => avail.updatedAt)
              .map(avail => new Date(avail.updatedAt!).getTime());

            // Find the maximum timestamp
            const maxTimestamp = Math.max(...validUpdatedAts);

            // Convert the max timestamp back to an ISO string
            latestTimestamp = new Date(maxTimestamp).toISOString();

          }

          const latestAvailability = allUpdatedAtNull
            ? response.availability
            : response.availability?.filter(avail => avail.updatedAt === latestTimestamp);

          const validatedAvailability: Availability[] = latestAvailability?.map(avail => ({
            ...avail,
            day: avail.day.toLowerCase() as DayName,
          })) || [];

          this.updateDisabledDays(validatedAvailability);
        },
        (error) => {
          console.error('Error fetching doctor availability:', error);
        }
      );
    }

  }

  displayCount = 0;
  hasAnimated = false;

  animateCount(target: number) {
    const duration = 4000;
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = target / steps;

    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        this.displayCount = target;
        clearInterval(timer);
      } else {
        this.displayCount = Math.floor(current);
      }
    }, stepTime);
  }


  allDoctors = [
    {
      name: 'Col (Dr) Anand Shankar K',
      image: 'assets/Doc-Inv-Page/Dr-(Col)Anand-Shankar.png',
      department: 'ER HEAD, ICU, ANAESTHESIA',
      about: 'Col (Dr) Anand Shankar K is an alumnus of the prestigious Armed Forces Medical College, Pune. He served in field areas prior to pursuing postgraduation in the field of Anaesthesiology and Intensive Care at AFMC pune. Thereafter he qualified the European Diploma in Intensive Care Medicine. He has an overall experience of more than 31 years, 27 of those years serving with the Armed Forces. He has served within the country and in foreign missions with the United Nations. He also had the unique opportunity to serve as accompanying doctor to the President of India. He has been serving with Rashtrotthana Hospital since its inception in Dec 2022.',
      speciality: ['ANAESTHESIOLOGY', 'EMERGENCY MEDICINE'],
      areasOfExpertise: ['Anaesthesiology', 'Emergency Care', 'Labour Analgesia', 'Pain Medicine', 'Intensive Care Medicine'],
      expertise: '32+',
      qualification: 'MBBS, MD (ANAESTHESIOLOGY), EDIC',
      date: 'Monday-Saturday',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      alt: 'Dr. (Col) Anand Shankar | Best Anesthesiology Doctor in Bangalore | Rashtrotthana Hospital',
      id: 46,
      title: 'Dr. Anand Shankar | Anesthesiologist in RR Nagar',
      description: 'Consult Dr. Anand Shankar, ICU and emergency care expert in RR Nagar with 31+ years of experience in anesthesiology and intensive care. Book now.',
      faqs: [
        {
          question: 'Who is Col (Dr) Anand Shankar K at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Col (Dr) Anand Shankar K is the Medical Director and a highly experienced specialist in Anesthesiology, Emergency Medicine and Critical Care at Rashtrotthana Hospital, RR Nagar, Bangalore. He brings over three decades of expertise in managing complex surgical and critical care cases.'
        },
        {
          question: 'What medical services does Col (Dr) Anand Shankar K provide at Rashtrotthana Hospital?',
          answer: 'At Rashtrotthana Hospital, Col (Dr) Anand Shankar K oversees anesthesia for surgeries, emergency resuscitation, and ICU management, ensuring patient safety before, during, and after procedures. His role is crucial in handling high-risk and critical patients.'
        },
        {
          question: 'When should I consult Col (Dr) Anand Shankar K at Rashtrotthana Hospital, Bangalore?',
          answer: 'You may need consultation if you are scheduled for surgery requiring anesthesia, have critical medical conditions needing ICU care, or require emergency medical stabilization. Col (Dr) Anand Shankar K plays a key role in decision-making for complex and emergency cases at Rashtrotthana Hospital.'
        },
        {
          question: 'How should patients prepare for anesthesia under Col (Dr) Anand Shankar K at Rashtrotthana Hospital?',
          answer: 'Patients are advised to follow fasting instructions, disclose existing medical conditions, allergies, and current medications during the pre-anesthesia evaluation. This helps Col (Dr) Anand Shankar K plan safe and personalized anesthesia care at Rashtrotthana Hospital.'
        },
        {
          question: 'Is anesthesia safe for elderly or high-risk patients at Rashtrotthana Hospital?',
          answer: 'Yes, anesthesia is carefully planned and monitored, especially for elderly and high-risk patients, under the supervision of Col (Dr) Anand Shankar K. Advanced monitoring and ICU backup at Rashtrotthana Hospital ensure maximum patient safety.'
        },
        {
          question: 'Does Col (Dr) Anand Shankar K handle emergency and ICU cases at Rashtrotthana Hospital, RR Nagar?',
          answer: 'As the head of Emergency and Critical Care services, Col (Dr) Anand Shankar K leads the management of life-threatening emergencies and ICU patients round-the-clock at Rashtrotthana Hospital, RR Nagar, Bangalore.'
        },
        {
          question: 'How can I book an appointment with Col (Dr) Anand Shankar K at Rashtrotthana Hospital?',
          answer: `You can book an appointment with Col (Dr) Anand Shankar K by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital’s front desk, or booking online through the official Rashtrotthana Hospital website, depending on your consultation or treatment requirement.`
        },
      ],
      departmentSlug: '/specialities/best-anesthesiology-hospital-in-india',
      expertiseIcons: [
        'assets/icons/AN-1.png',
        'assets/icons/AN-2.png',
        'assets/icons/AN-3.png',
        'assets/icons/AN-4.png',
        'assets/icons/AN-5.png'
      ],
      happyPatients: '12000+'
    },
    {
      name: 'Dr. H. N. Shyla',
      image: 'assets/Doc-Inv-Page/Dr-H-N-Shyla.png',
      department: 'DENTAL SCIENCES',
      about: 'An alumini of the prestigious Government Dental college, Bengaluru with a teaching experience of more than 15 yrs with expertise in the field of trauma and implants specially',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ["Dentist", 'Oral And MaxilloFacial Surgeon', 'Implantologist', 'Cosmetic/Aesthetic Dentist'],
      expertise: '28+',
      qualification: 'BDS, MDS',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. H. N. Shyla | Best Dental Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 34,
      title: 'Dr. H. N. Shyla | Dentist & Implantologist in RR Nagar',
      description: 'Book with Dr. H. N. Shyla, senior dentist in RR Nagar Bangalore with 27+ years of experience in implants, maxillofacial surgery, and cosmetic dentistry.',
      faqs: [
        {
          question: 'Who is Dr. H. N. Shyla, Dental and Oral & Maxillofacial Surgery Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. H. N. Shyla is a senior Dental Specialist and Oral & Maxillofacial Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. She is experienced in diagnosing and treating a wide range of dental, jaw, and facial conditions with a patient-focused approach.'
        },
        {
          question: 'What dental and oral surgery services does Dr. H. N. Shyla provide at Rashtrotthana Hospital?',
          answer: 'Dr. H. N. Shyla offers comprehensive care including tooth extractions, impacted wisdom tooth removal, oral surgery, jaw-related procedures, and advanced dental treatments at Rashtrotthana Hospital. She manages both routine and complex dental conditions safely.'
        },
        {
          question: 'When should I consult Dr. H. N. Shyla at Rashtrotthana Hospital, Bangalore?',
          answer: 'You should consult Dr. H. N. Shyla if you experience persistent tooth pain, gum infections, impacted teeth, jaw pain, facial swelling, or oral lesions. Early consultation helps prevent complications and ensures timely treatment.'
        },
        {
          question: 'How are surgical dental procedures performed by Dr. H. N. Shyla at Rashtrotthana Hospital?',
          answer: 'Surgical dental procedures are carried out using modern techniques, proper pain control, and strict safety protocols. Dr. H. N. Shyla ensures patient comfort, minimal discomfort, and clear post-procedure care instructions.'
        },
        {
          question: 'Is oral and maxillofacial surgery safe with Dr. H. N. Shyla at Rashtrotthana Hospital, RR Nagar?',
          answer: 'Yes, oral and maxillofacial surgeries are safely performed under expert supervision with appropriate anesthesia support and hospital infrastructure. Rashtrotthana Hospital provides a controlled clinical environment for safe recovery.'
        },
        {
          question: 'How can I book an appointment with Dr. H. N. Shyla at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. H. N. Shyla by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        },
        {
          question: 'What should I expect during my first consultation with Dr. H. N. Shyla at Rashtrotthana Hospital?',
          answer: 'During your first visit, Dr. H. N. Shyla will evaluate your dental and oral health, review your medical history, and recommend the most suitable treatment plan. The consultation focuses on clear communication, comfort, and long-term oral health.'
        }
      ],
      departmentSlug: '/specialities/best-dental-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/DETS-1.png',
        'assets/icons/DETS-2.png',
        'assets/icons/DETS-3.png',
        'assets/icons/DETS-4.png',
        'assets/icons/DETS-5.png'
      ],
      happyPatients: '12000+'

    },

    {
      name: 'Dr. Latha Venkataram',
      image: 'assets/Doc-Inv-Page/Dr-Latha-Venkataram.png',
      department: 'OBSTETRICS & GYNECOLOGY',
      about: 'Maternity Unit at Rashtrotthana Hospital is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman. Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years of experience & specialises in Vaginal deliveries & High Risk Pregnancy. The aim is to provide high quality service at affordable cost. The team of OBGYN run super speciality services through specialised clinics involving many specialists available under one roof jointly in a single clinic for comprehensive care of women striving for the vision.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['Vaginal Delivery',
        'High Risk Pregnancy',
        'Diabetes & Pregnancy',
        'Medical Disorders in Pregnancy',
        'Recurrent Pregnancy loss treatment',
        'Emergency Obstetric care',
        'Vaginal Surgeries, Management of menopause related issues',],
      expertise: '35+',
      qualification: 'MBBS, MRCOG(UK), MRCP(I), FRCOG(UK)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date: 'Tuesday',
      alt: 'Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 14,
      title: 'Dr. Latha Venkataram | High-Risk Pregnancy & Delivery Expert in RR Nagar Bangalore',
      description: 'Consult Dr. Latha Venkataram, senior gynecologist in RR Nagar with 32+ years of experience in high-risk pregnancy, delivery, and women’s health care.',
      faqs: [
        {
          question: 'Who is Dr. Latha Venkataram and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Latha Venkataram is a senior Obstetrician and Gynaecologist at Rashtrotthana Hospital, RR Nagar, Bangalore, with over 32 years of clinical experience in women’s health, pregnancy care, and childbirth. She is widely trusted for her experience-driven and compassionate approach.'
        },
        {
          question: 'What pregnancy and gynaecology services does Dr. Latha Venkataram offer at Rashtrotthana Hospital?',
          answer: 'With 32+ years of experience, Dr. Latha Venkataram provides antenatal care, normal delivery care, C-section planning, high-risk pregnancy management, and gynaecological consultations for women across different age groups.'
        },
        {
          question: 'When should I consult Dr. Latha Venkataram for pregnancy-related concerns in Bangalore?',
          answer: 'You should consult Dr. Latha Venkataram if you are planning a pregnancy, newly pregnant, or facing issues such as gestational diabetes, high blood pressure, abnormal scans, or previous pregnancy complications. Early consultation allows timely intervention and safer outcomes.'
        },
        {
          question: 'Does Dr. Latha Venkataram manage high-risk pregnancies at Rashtrotthana Hospital, RR Nagar?',
          answer: 'Dr. Latha Venkataram has over three decades of experience managing high-risk pregnancies, including cases involving diabetes, hypertension, thyroid disorders, advanced maternal age, and previous C-sections, with close monitoring throughout pregnancy.'
        },
        {
          question: 'What delivery options are available under Dr. Latha Venkataram’s care at Rashtrotthana Hospital?',
          answer: 'Dr. Latha Venkataram supports normal vaginal delivery whenever medically suitable and plans C-sections only when necessary for the safety of the mother or baby. Her long-standing experience helps guide balanced and well-informed delivery decisions.'
        },
        {
          question: 'What tests and preparations are included in antenatal care with Dr. Latha Venkataram?',
          answer: 'Antenatal care includes regular check-ups, ultrasound scans, blood tests, blood pressure monitoring, and guidance on nutrition and lifestyle, structured around protocols refined through Dr. Latha Venkataram’s 32+ years of obstetric practice.'
        },
        {
          question: 'How can I book an appointment with Dr. Latha Venkataram at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Latha Venkataram by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OG-1.png',
        'assets/icons/OG-2.png',
        'assets/icons/OG-3.png',
        'assets/icons/OG-4.png',
        'assets/icons/OG-5.png'
      ],
      happyPatients: '25000+'

    },
    {
      name: 'Dr. Shekar Patil',
      image: 'assets/Doc-Inv-Page/Dr-Shekar-Patil.png',
      department: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      about: 'Dr. Shekar Patil is a Medical Oncologist in Bangalore. He has been practising medicine for 39 years including over 25 years in medical oncology. He treats conventional and high dose chemotherapy for both solid and haematological malignancies. Dr. Patil s knowledge and expertise spans a vast area including: Intraperitoneal Chemotherapy as consolidation in advanced Ovarian Cancers Concurrent radiation and chemotherapy (BIP) in Carcinoma Cervix Bone Marrow Transplantation Oral recombinant human lactoferrin with Carboplatin Chemotherapy in Gynaecological Malignancies Treatment of Lymphomas Treatment of Acute Myeloid Leukaemia.',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy', 'immuno-oncology'],
      expertise: '36+',
      qualification: 'MBBS, MD, DM',
      time: '09:00-09:15,09:15-09:30,09:30-09:45,09:45:10:00',
      date: 'Friday',
      alt: 'Dr. Shekar Patil | Best Medical Oncologist Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      title: 'Dr. Shekar Patil | Medical Oncologist in RR Nagar Bangalore',
      description: 'Consult Dr. Shekar Patil, senior medical oncologist in RR Nagar with 35+ years of experience in treating adult cancers, precision oncology, and immunotherapy.',
      faqs: [
        {
          question: 'Who is Dr. Shekar Patil and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Shekar Patil is a senior Medical Oncologist at Rashtrotthana Hospital, RR Nagar, Bangalore, with over 35 years of experience in cancer diagnosis and treatment. He is known for his vast clinical expertise and patient-focused approach to cancer care.'
        },
        {
          question: 'What types of cancer does Dr. Shekar Patil treat at Rashtrotthana Hospital?',
          answer: 'With 35+ years of oncology experience, Dr. Shekar Patil treats a wide range of cancers, including breast cancer, ovarian cancer, lung cancer, gastrointestinal cancers, and blood cancers such as leukemia and lymphoma, using evidence-based medical oncology treatments.'
        },
        {
          question: 'When should I consult Dr. Shekar Patil for cancer symptoms or diagnosis?',
          answer: 'You should consult Dr. Shekar Patil if you notice persistent lumps, unexplained weight loss, prolonged pain, abnormal bleeding, fatigue, or changes in bowel or bladder habits. Early consultation with an experienced medical oncologist can help in timely diagnosis and better treatment outcomes.'
        },
        {
          question: 'What cancer treatments are offered by Dr. Shekar Patil at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Shekar Patil provides advanced cancer treatments including chemotherapy, immunotherapy, targeted therapy, and hormonal therapy, based on the type and stage of cancer. Treatment plans are individualized to balance effectiveness and quality of life.'
        },
        {
          question: 'How does Dr. Shekar Patil support patients undergoing chemotherapy at Rashtrotthana Hospital?',
          answer: 'Patients undergoing chemotherapy receive close monitoring, side-effect management, nutritional guidance, and supportive care, backed by Dr. Shekar Patil’s 35+ years of clinical experience in managing complex oncology cases.'
        },
        {
          question: 'What should patients expect during their first oncology consultation with Dr. Shekar Patil?',
          answer: 'During the first consultation, Dr. Shekar Patil reviews medical reports, confirms diagnosis and staging, explains treatment options clearly, and addresses patient concerns to help them make informed decisions about cancer care.'
        },
        {
          question: 'How can I book an appointment with Dr. Shekar Patil at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Shekar Patil by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-oncology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ONC-1.png',
        'assets/icons/ONC-2.png',
        'assets/icons/ONC-3.png',
        'assets/icons/ONC-4.png',
        ' assets/icons/ONC-5.svg'
      ],
      happyPatients: '10000+'

    },
    {
      name: 'Dr. Pramod S. Chinder',
      image: 'assets/Doc-Inv-Page/Dr-Pramod-Cinder.png',
      department: 'ORTHOPEDIC ONCOSURGEON',
      about: '',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['Limb salvage surgeries with Biological reconstruction',
        '3D Printing - Navigation in Oncology',
        'Use of Fresh Frozen Allograft',
        'Microsurgical reconstruction',
        'Virtual Reality in Physiotherapy',
        'Robotic pelvic surgeries -Davinci',
        'Complex Pelvic tumours and reconstructions for Chondrosarcomas, Osteosarcomas and Ewings sarcoma',
        'Use of molecular and targeted agents in the management of massive tumours (Denosumab in Giant cell tumours)',
        'CATS ( Computer Assisted Tumour Surgery )',
        'Stem cell and regenerative therapy'],
      expertise: '20',
      qualification: 'MBBS, MS(ORTHO), FHRM, FMSO',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00',
      date: 'Friday',
      alt: 'Dr. Pramod S. Chinder | Best Orthopaedic Oncosurgeon in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      title: 'Dr. Pramod S. Chinder | Bone Cancer Surgeon in RR Nagar',
      description: 'Consult Dr. Pramod Chinder, orthopedic oncosurgeon in RR Nagar with 20+ years of expertise in bone tumor surgery, limb salvage, and complex reconstructions.',
      faqs: [
        {
          question: 'Who is Dr. Pramod S. Chinder and what is his expertise at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Pramod S. Chinder is a highly specialised Orthopaedic Onco Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in treating complex bone and soft-tissue tumours. He is known for limb-preserving surgeries using advanced reconstruction and precision technologies.'
        },
        {
          question: 'What is limb salvage surgery with biological reconstruction, and does Dr. Pramod S. Chinder perform it at Rashtrotthana Hospital?',
          answer: 'Limb salvage surgery aims to remove bone tumours while preserving the limb instead of amputation. Dr. Pramod S. Chinder specialises in biological reconstruction techniques, including bone grafts and advanced fixation, helping patients retain function and mobility.'
        },
        {
          question: 'How does Computer Assisted Tumour Surgery (CATS) improve bone tumour treatment at Rashtrotthana Hospital?',
          answer: 'CATS allows surgeons to plan and execute tumour removal with high precision using computer guidance. Dr. Pramod S. Chinder uses Computer Assisted Tumour Surgery to achieve accurate tumour margins while preserving healthy bone and joints.'
        },
        {
          question: 'Does Dr. Pramod S. Chinder use advanced reconstruction techniques like allografts and microsurgery?',
          answer: 'Yes, Dr. Pramod S. Chinder performs microsurgical reconstruction and Fresh Frozen Allograft procedures to restore bone structure after tumour removal. These techniques support better stability, healing, and long-term limb function.'
        },
        {
          question: 'What types of complex bone tumours does Dr. Pramod S. Chinder treat at Rashtrotthana Hospital?',
          answer: 'He treats complex conditions such as chondrosarcoma, osteosarcoma, Ewing’s sarcoma, giant cell tumours, and pelvic bone tumours, including cases requiring extensive reconstruction and joint preservation.'
        },
        {
          question: 'Are targeted therapies and advanced technology used in tumour management by Dr. Pramod S. Chinder?',
          answer: 'Yes, Dr. Chinder integrates molecular and targeted agents like Denosumab for giant cell tumours, along with 3D printing navigation, robotic pelvic surgery (Da Vinci), and Virtual Reality-assisted physiotherapy to improve surgical accuracy and rehabilitation outcomes.'
        },
        {
          question: 'How can I book a consultation with Dr. Pramod S. Chinder at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Pramod S. Chinder by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-oncology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ONC-1.png',
        'assets/icons/ONC-2.png',
        'assets/icons/ONC-3.png',
        'assets/icons/ONC-4.png',
        ' assets/icons/ONC-5.svg'
      ],
      happyPatients: '7000+'

    },
    {
      name: 'Dr. Nagaraj Rao',
      image: 'assets/Doc-Inv-Page/Dr-Nagaraj-Rao.png',
      department: 'UROLOGY',
      about: 'After obtaining urology training from prestigious PGIMER, Chandigarh, worked in St John\'s medical college hospital for 16 years at different capacities.Headed the department of urology between 2011-2015 Has vast experience in managing day to day as well as complex urological problems both medically and surgically.Now has been associated with various hospitals in Bengaluru as a senior consultant.Has been DNB and MCh examiner for various universities',
      speciality: 'UROLOGY',
      areasOfExpertise: ['EndoUrology', 'Uro Oncology', 'Stone Disease', 'Genito-urinary reconstruction'],
      expertise: '27+',
      qualification: 'MBBS, MS, MCH',
      time: '12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date: 'Tuesday and Thursday',
      alt: 'Dr. Nagaraj Rao | Best Urologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 18,
      title: 'Dr. Nagaraj Rao | Senior Urologist in RR Nagar Bangalore',
      description: 'Consult Dr. Nagaraj Rao, urologist in RR Nagar with 26+ years of expertise in endourology, stone disease, uro-oncology, and complex genito-urinary care.',
      faqs: [
        {
          question: 'Who is Dr. Nagaraj Rao and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Nagaraj Rao is a senior Urologist at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in treating complex urinary and genital conditions. His clinical focus includes advanced urology procedures and cancer-related urological care.'
        },
        {
          question: 'What urological conditions does Dr. Nagaraj Rao treat at Rashtrotthana Hospital?',
          answer: 'Dr. Nagaraj Rao treats conditions such as kidney stones, urinary tract obstruction, prostate problems, urological cancers, and reconstructive urinary issues. His approach combines minimally invasive techniques with long-term functional outcomes.'
        },
        {
          question: 'What is EndoUrology and how does Dr. Nagaraj Rao use it in treatment?',
          answer: 'EndoUrology involves minimally invasive procedures performed through natural urinary pathways to treat stones and blockages. Dr. Nagaraj Rao uses EndoUrology techniques to reduce pain, hospital stay, and recovery time for patients at Rashtrotthana Hospital.'
        },
        {
          question: 'Does Dr. Nagaraj Rao treat kidney stone disease at Rashtrotthana Hospital, Bangalore?',
          answer: 'Yes, Dr. Nagaraj Rao has significant experience in managing kidney, ureter and bladder stones using modern techniques such as endoscopic stone removal. Treatment is selected based on stone size, location, and patient comfort.'
        },
        {
          question: 'What urological cancers are managed by Dr. Nagaraj Rao at Rashtrotthana Hospital?',
          answer: 'Dr. Nagaraj Rao provides expert care for urological cancers, including prostate, bladder, kidney, and ureteric cancers. His uro-oncology care focuses on early diagnosis, precise treatment, and preserving urinary function wherever possible.'
        },
        {
          question: 'What is genito-urinary reconstruction and when is it required?',
          answer: 'Genito-urinary reconstruction is performed to restore normal urinary function after injury, obstruction, infection, or cancer treatment. Dr. Nagaraj Rao performs reconstructive procedures to improve quality of life and long-term urinary control.'
        },
        {
          question: 'How can I book an appointment with Dr. Nagaraj Rao at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Nagaraj Rao by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-urology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/U-1.png',
        'assets/icons/U-2.png',
        'assets/icons/U-3.png',
        'assets/icons/U-4.png',
        'assets/icons/U-5.png'
      ],
      happyPatients: '12000+'

    },
    {
      name: 'Dr. H. M. Krishnamurthy',
      image: 'assets/Doc-Inv-Page/Dr-H-M-Krishnamurthy.png',
      department: 'Consultant - Internal Medicine',
      about: 'Dr. H. M. Krishnamurthy is a Doctor in Bangalore and has an experience of 40 years in this field. Dr. H. M. Krishnamurthy practices at Various hospitals in Bangalore and He completed MBBS from Bangalore University in 1984.(First Rank to Bangalore University both MBBS & MD) Fellowship in Diabetes- Arhus University Denmark,Been a faculty in Regional & National clinical meetings Authored book.  Diabetes - Patient Education Have Conducted - Multiple patient education programs. under the auspices of Friends of Diabetes Group.',
      speciality: 'INTERNAL MEDICINE',
      areasOfExpertise: ['Metabolic Disorders', 'Infectious Diseases', 'Geriatrics', 'Non Interventional- Respiratory Diseses', 'Diabetes- Thyroid', 'All Adult Chronic Diseases', 'KIDNEY/CLINICAL CARDIOLOGY'],
      expertise: '37+',
      qualification: 'MBBS, MD',
      time: '18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt: 'Dr. H. M. Krishnamurthy | Consultant - Internal Medicine in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 3,
      title: 'Dr. H. M. Krishnamurthy | Internal Medicine Doctor Bangalore',
      description: 'Consult Dr. H. M. Krishnamurthy, internal medicine expert in Bangalore with 36+ years experience in diabetes, thyroid, geriatric care and chronic diseases.',
      faqs: [
        {
          question: 'Who is Dr. H. M. Krishnamurthy and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. H. M. Krishnamurthy is a senior Physician and Internal Medicine Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore, with decades of experience in managing complex adult medical conditions. He is widely consulted for chronic diseases, metabolic disorders, and geriatric care.'
        },
        {
          question: 'What medical conditions does Dr. H. M. Krishnamurthy treat at Rashtrotthana Hospital?',
          answer: 'Dr. H. M. Krishnamurthy treats a wide range of conditions including diabetes, thyroid disorders, metabolic diseases, infections, respiratory illnesses, kidney-related issues, and clinical cardiology conditions. His approach focuses on long-term disease control and overall patient wellbeing.'
        },
        {
          question: 'Can I consult Dr. H. M. Krishnamurthy for diabetes and thyroid problems in Bangalore?',
          answer: 'Yes, Dr. H. M. Krishnamurthy has extensive experience in managing diabetes, thyroid imbalance, and other hormonal and metabolic disorders. Treatment includes medication optimisation, lifestyle guidance, and regular monitoring to prevent complications.'
        },
        {
          question: 'Does Dr. H. M. Krishnamurthy treat elderly patients and age-related health problems?',
          answer: 'Yes, he specialises in geriatric care, managing multiple chronic conditions commonly seen in older adults such as diabetes, heart disease, kidney issues, and infections. His care focuses on improving quality of life while minimizing medication-related risks.'
        },
        {
          question: 'What infectious diseases are treated by Dr. H. M. Krishnamurthy at Rashtrotthana Hospital?',
          answer: 'Dr. H. M. Krishnamurthy treats common and complex infectious diseases, including prolonged fever, respiratory infections, urinary infections, and systemic infections, with accurate diagnosis and evidence-based treatment.'
        },
        {
          question: 'Can Dr. H. M. Krishnamurthy help with chronic respiratory and heart-related conditions?',
          answer: 'Yes, he manages non-interventional respiratory diseases such as asthma, COPD, and chronic cough, along with clinical cardiology conditions like hypertension and heart-related risk factors, ensuring coordinated medical care without invasive procedures.'
        },
        {
          question: 'How can I book an appointment with Dr. H. M. Krishnamurthy at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. H. M. Krishnamurthy by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/internal-medicine-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/IM-1.png',
        'assets/icons/IM-2.png',
        'assets/icons/IM-3.png',
        'assets/icons/IM-4.png',
        'assets/icons/IM-5.png'
      ],
      happyPatients: '10000+'

    },
    // {
    //   name: 'Dr. Rajeev Vijayakumar',
    //   image: 'assets/Doc-Inv-Page/Dr-Rajeev-Vijayakumar.png',
    //   department: 'Oncologist',
    //   about: 'Dr. Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology and Bone Marrow Transplant ensures that your confidence in his ...',
    //   speciality: 'ONCOLOGY',
    //   areasOfExpertise: ['Medical Oncology', 'Hemato- Oncology', 'Bone Marrow Transplant'],
    //   expertise: 'Years of Experience: 20',
    //   qualification: 'MBBS, DNB (Gen Medicine) DNB (Medical Oncology) MRCP (UK)',
    //   time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
    //   date: 'Monday and Wednesday',
    //   alt: 'Dr. Rajeev Vijayakumar | Best Medical Oncologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
    //   id: 53,
    //   title:'Dr. Rajeev Vijayakumar | Medical Oncologist in RR Nagar Bangalore',
    //   description:'Book with Dr. Rajeev Vijayakumar, oncologist in RR Nagar with 20+ years of experience in medical oncology, hemato-oncology, and bone marrow transplant care.'
    // },
    // {
    //   name: 'Dr. Shashidhar',
    //   image: 'assets/Doc-Inv-Page/Dr-Shashidhar.png',
    //   department: 'Anaesthesia',
    //   about: ' Dr. Shashidhar, our esteemed anesthesiologist with over 20 years of dedicated experience in the field. With qualifications including MBBS and DA, Dr. Shashidhar specializes in intensive care, emergency care and anesthesiology. His expertise ensures the safe and effective management of anesthesia for various medical procedures, providing essential support in critical and emergency situations. Trust him for expert care in anesthesia at every stage of your medical journey.',
    //   speciality: 'ANAESTHESIOLOGY',
    //   expertise: 'Years of Experience: 20+',
    //   time: 'No-slot',
    //   date: 'Monday-Saturday',
    //   qualification: 'MBBS, DA',
    //   areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology'],
    //   alt: 'Dr. Shashidhar | Best Anesthesiologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
    //   title:'Dr. Shashidhar | Anesthesiologist & ICU Care in RR Nagar',
    //   description:'Consult Dr. Shashidhar, anesthesiologist in RR Nagar with 20+ years’ experience in intensive care, emergency management, and safe anesthesia procedures.'
    // },

    {
      name: 'Dr. Mahesh Kulkarni',
      image: 'assets/Doc-Inv-Page/Dr-Mahesh-Kulkarni.png',
      department: 'Orthopaedics',
      about: 'Prof Dr. Mahesh Kulkarni is a highly experienced and compassionate Orthopaedic Surgeon with over 15 years of expertise in diagnosing and treating a wide range of conditions related to Musculoskeletal affections. He completed his medical degree at prestigious BMC&RI and pursued specialized training in Orthopaedics at KMC Chennai. Further he has gained advanced skills in Arthroplasty, Arthoscopy, spine surgery and Complex trauma at various centers of excellence.He has been working in prestigious medical colleges as a faculty and contributes actively in imparting quality medical education to the Undergarduate ( MBBS ) and  Postgraduate (MS orthopaedics) students.',
      speciality: 'ORTHOPEDICS',
      expertise: '16+',
      time: '18:30-18:50,18:50-19:10,19:10-19:30',
      date: 'Monday-Saturday',
      qualification: `MS Ortho, DNB Ortho, <br>
      Fellowship in Arthroplasty/ Arthoscopy/ Spine surgery/ <br>  Complex trauma`,
      areasOfExpertise: ['Joint preservation', 'Limb preservation', 'Deformity correction', 'Pelviacetabular fractures', 'Sports injuries', 'Spine affections'],
      alt: 'Dr. Mahesh Kulkarni | Best Ortho Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 7,
      title: 'Dr. Mahesh Kulkarni | Orthopedic Surgeon in RR Nagar Bangalore',
      description: 'Consult Dr. Mahesh Kulkarni, orthopedic surgeon in RR Nagar with 15+ years’ experience in joint preservation, spine surgery, trauma, and sports injuries.',
      faqs: [
        {
          question: 'Who is Dr. Mahesh Kulkarni and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Mahesh Kulkarni is a senior Orthopaedic Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in managing complex bone, joint and spine conditions. His practice focuses on preserving natural joints and limbs wherever possible.'
        },
        {
          question: 'What orthopaedic conditions does Dr. Mahesh Kulkarni treat at Rashtrotthana Hospital?',
          answer: 'Dr. Mahesh Kulkarni treats conditions such as joint degeneration, limb deformities, complex fractures, sports injuries, and spine-related problems. His treatment approach emphasizes function preservation and long-term mobility.'
        },
        {
          question: 'What is joint preservation treatment and when should I consult Dr. Mahesh Kulkarni?',
          answer: 'Joint preservation aims to delay or avoid joint replacement surgery by correcting alignment, cartilage damage, or early arthritis. Dr. Mahesh Kulkarni recommends joint preservation techniques for patients with joint pain who are young or physically active.'
        },
        {
          question: 'Does Dr. Mahesh Kulkarni manage limb preservation and deformity correction surgeries?',
          answer: 'Yes, Dr. Mahesh Kulkarni has significant experience in limb preservation and deformity correction, helping patients regain alignment, stability, and function after injury, infection, or congenital deformities. These procedures aim to restore movement while maintaining limb integrity.'
        },
        {
          question: 'Are pelvic and acetabular fractures treated by Dr. Mahesh Kulkarni at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Mahesh Kulkarni specializes in managing pelviacetabular fractures, which are complex injuries involving the hip and pelvis. Treatment is planned carefully to restore joint stability and enable safe recovery.'
        },
        {
          question: 'Can I consult Dr. Mahesh Kulkarni for sports injuries and spine problems in Bangalore?',
          answer: 'Dr. Mahesh Kulkarni treats sports-related injuries such as ligament tears and overuse injuries, as well as spine affections including back pain and degenerative spine conditions. Care focuses on accurate diagnosis, rehabilitation, and prevention of recurrence.'
        },
        {
          question: 'How can I book an appointment with Dr. Mahesh Kulkarni at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Mahesh Kulkarni by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-orthopaedics-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/O-1.png',
        'assets/icons/O-2.png',
        'assets/icons/O-3.png',
        'assets/icons/O-4.png',
        'assets/icons/O-5.png'
      ],
      happyPatients: '10000+'

    },

    {
      name: 'Dr. Geethanjali K. G',
      image: 'assets/Doc-Inv-Page/Dr-Geethanjali-K-G.png',
      department: 'DENTAL SURGERY',
      about: ' Dr. Geethanjali KG is a dynamic and skilled dentist. She is currently working   as Consultant-Dental Sciences unit at Jayadeva Memorial hospital R.R. Nagar Bengaluru. She has 18 years of clinical experience in the field of dentistry. She is specialised in endodontics and conservative dentistry, general dentistry, minor surgical procedure like extraction and biopsy under LA. Dr. Geethanjali is graduated from KVG dental College Sullia. RGUHS. She also did Post Graduate Certificate in Endodontics and Post Graduate Certificate in Oral Implanting. ',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ['General Dentistry', 'Endodontics', 'Cosmetic dentistry'],
      expertise: '20+',
      qualification: 'BDS, PGCE, PGCO',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Geethanjali K. G | Best Dental Surgery Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 35,
      title: 'Dr. Geethanjali K. G | Dentist & Endodontist in RR Nagar Bangalore',
      description: 'Book with Dr. Geethanjali K. G, dentist in RR Nagar with 20+ years’ experience in endodontics, general dentistry, cosmetic procedures, and smile correction.',
      faqs: [
        {
          question: 'Who is Dr. Geethanjali K. G and what is her dental specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Geethanjali K. G is an experienced Dental Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore, with expertise in general dentistry, endodontics, and cosmetic dentistry. She focuses on preserving natural teeth while improving oral health and smile aesthetics.'
        },
        {
          question: 'What general dental treatments does Dr. Geethanjali K. G provide at Rashtrotthana Hospital?',
          answer: 'Dr. Geethanjali K. G offers comprehensive general dentistry services, including dental check-ups, fillings, scaling, gum care, and preventive dental treatments. These services help maintain long-term oral hygiene and prevent future dental problems.'
        },
        {
          question: 'Can Dr. Geethanjali K. G treat tooth pain and infections with root canal treatment?',
          answer: 'Yes, Dr. Geethanjali K. G specialises in endodontic treatments, including root canal therapy for infected or severely decayed teeth. Root canal treatment helps relieve pain, remove infection, and save the natural tooth.'
        },
        {
          question: 'Is cosmetic dentistry available with Dr. Geethanjali K. G at Rashtrotthana Hospital, Bangalore?',
          answer: 'Yes, Dr. Geethanjali K. G provides cosmetic dentistry treatments such as teeth whitening, smile correction, and aesthetic restorations. These treatments are designed to improve the appearance of teeth while maintaining proper dental function.'
        },
        {
          question: 'When should I consult Dr. Geethanjali K. G for dental problems?',
          answer: 'You should consult Dr. Geethanjali K. G if you experience tooth pain, sensitivity, bleeding gums, broken or discoloured teeth, or cosmetic concerns about your smile. Early dental consultation helps prevent complications and more extensive treatment later.'
        },
        {
          question: 'What is the recovery like after dental procedures with Dr. Geethanjali K. G?',
          answer: 'Most dental procedures involve minimal downtime, and patients can usually return to daily activities quickly. Dr. Geethanjali K. G provides clear post-treatment care instructions to ensure comfort and proper healing.'
        },
        {
          question: 'How can I book an appointment with Dr. Geethanjali K. G at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Geethanjali K. G by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-dental-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/DETS-1.png',
        'assets/icons/DETS-2.png',
        'assets/icons/DETS-3.png',
        'assets/icons/DETS-4.png',
        'assets/icons/DETS-5.png'
      ],
      happyPatients: '10000+'

    },
    {
      name: 'Dr. Santhosh S',
      image: 'assets/Doc-Inv-Page/Dr-Santhosh-S.png',
      department: 'CONSULTANT NEPHROLOGIST & TRANSPLANT PHYSICIAN',
      about: 'Dr. Santhosh S is graduated from AJIMS, MANAGALORE in 2008. He finished his post graduation (MD Internal medicine) from KIMS HUBLI. He has also completed DNB Nephrology from MANIPAL HOSPITAL BENGALURU in 2018.',
      speciality: 'NEPHROLOGY',
      areasOfExpertise: ['General nephrology,', 'Diabetic kidney disease', 'Kidney transplantation', 'Glomerular diseases', 'Hemodialysis', 'Resistant hypertension', 'Pregnancy and kidney disease'],
      expertise: '14',
      qualification: 'MBBS, MD, DM(NEPHROLOGY)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00,20:00-20:20,20:20-20:40,20:40-21:00,21:00-21:20,21:20-21:40,21:40-22:00,22:00-22:20,22:20-22:40,22:40-23:00,23:00-23:15,23:15-23:30',
      date: 'Monday-Saturday',
      alt: 'Dr. Santhosh S | Best Nephrologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 20,
      title: 'Dr. Santhosh S | Nephrologist & Kidney Specialist in RR Nagar',
      description: 'Consult Dr. Santhosh S, nephrologist in RR Nagar with 14+ years’ experience in kidney transplantation, dialysis, diabetic kidney disease, and hypertension care.',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''

    },
    {
      name: 'Dr. Sowmya S. Bhat',
      image: 'assets/Doc-Inv-Page/Dr-Sowmya-Bhat-S.png',
      department: 'OPHTHALMOLOGIST',
      about: 'Dr. Sowmya S Bhat has completed her basic Medical Education from St. John’s Medical College, Bangalore She has received post graduate training in ophthalmology from the prestigious Aravind Eye Hospital, Madurai and received the Dr. G. Venkataswamy Gold Medal for standing first in Ophthalmology. She has obtained the long term fellowship degree for super specialising in Phacoemulsification surgery and refractive surgeries from Rajiv Gandhi University of Medical Science, Bangalore and received the best outgoing Fellow Award.',
      speciality: 'Ophthalmology',
      areasOfExpertise: ['Cataract surgery with IOL implantation ( MSICS, Phacoemulsification and Advanced MICS )', 'REFRACTIVE SURGERY (PRK, LASIK, SMILE) ', 'GENERAL OPHTHALMOLOGY'],
      expertise: '16+',
      qualification: 'MBBS, DO, DNB, FPRS, FICO',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date: 'Tuesday and Friday',
      alt: 'Dr. Sowmya S. Bhat | Best Ophthalmologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 36,
      title: 'Dr. Sowmya S. Bhat | Cataract & LASIK Eye Surgeon in RR Nagar',
      description: 'Consult Dr. Sowmya S. Bhat, eye specialist in RR Nagar with 16+ years’ experience in cataract surgery, LASIK, SMILE, and comprehensive ophthalmic care.',
      faqs: [
        {
          question: 'Who is Dr. Sowmya S. Bhat and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sowmya S. Bhat is an experienced Ophthalmologist (Eye Specialist) at Rashtrotthana Hospital, RR Nagar, Bangalore, with expertise in cataract surgery, refractive vision correction, and general eye care. She is known for combining advanced surgical techniques with patient-centric care.'
        },
        {
          question: 'What types of cataract surgery does Dr. Sowmya S. Bhat perform at Rashtrotthana Hospital?',
          answer: 'Dr. Sowmya S. Bhat performs cataract surgery with IOL implantation, including MSICS, Phacoemulsification, and Advanced MICS. The choice of technique depends on eye condition, cataract density, and visual requirements, ensuring safe surgery and faster recovery.'
        },
        {
          question: 'Is LASIK or other refractive surgery available with Dr. Sowmya S. Bhat in Bangalore?',
          answer: 'Yes, Dr. Sowmya S. Bhat offers refractive surgery options such as PRK, LASIK, and SMILE for suitable candidates. These procedures help reduce or eliminate dependency on glasses or contact lenses after proper evaluation.'
        },
        {
          question: 'When should I consult Dr. Sowmya S. Bhat for eye problems?',
          answer: 'You should consult Dr. Sowmya S. Bhat if you experience blurred vision, difficulty seeing at night, eye strain, headaches, frequent change of glasses, or age-related vision changes. Early consultation helps prevent progression of eye conditions.'
        },
        {
          question: 'What is the recovery time after cataract or refractive surgery with Dr. Sowmya S. Bhat?',
          answer: 'Most patients experience quick visual improvement within a few days, with minimal discomfort after surgery. Dr. Sowmya S. Bhat provides detailed post-operative care instructions to support smooth healing and optimal vision outcomes.'
        },
        {
          question: 'Does Dr. Sowmya S. Bhat provide general ophthalmology care at Rashtrotthana Hospital?',
          answer: 'Yes, she offers comprehensive general ophthalmology services, including routine eye check-ups, vision testing, diagnosis of eye infections, dry eye treatment, and long-term eye health monitoring for all age groups.'
        },
        {
          question: 'How can I book an appointment with Dr. Sowmya S. Bhat at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Sowmya S. Bhat by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-eye-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OPTH-1.png',
        'assets/icons/OPTH-2.png',
        'assets/icons/OPTH-3.png',
        'assets/icons/OPTH-4.png',
        'assets/icons/OPTH-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: 'Dr. Suhas Raj S',
      image: 'assets/Doc-Inv-Page/DR-SUHAS-RAJ-S.png',
      department: 'CARDIOLOGY',
      about: 'Dr. Suhas Raj is graduate from Govt. Stanely Medical College and Hospital,Chennai in 2015. He did his post graduation (MD GENERAL MEDICINE) from KANYAKUMARI GOVT. MEDICAL COLLEGE AND HOSPITAL in 2019. He also completed DM Cardiology in 2022.His precious moment is he got two gold medal in MD GENERAL MEDICINE (2019) & DM Cardiology (2022).',
      speciality: 'CARDIAC SCIENCES',
      areasOfExpertise: ['Heart attack- Interventional Cardiology - Primary Angioplasty', 'High risk PCI', 'Heart failure', 'Electrophysiology', '  Peripheral Vascular diseases Hypertension '],
      expertise: '10+',
      qualification: 'MBBS, MD(GEN MEDICINE), DM(CARDIOLOGY)',
      time: '18:00-18:20,18:20-18:40,18:40-19:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore',
      id: 25,
      title: 'Dr. Suhas Raj S | Interventional Cardiologist in RR Nagar',
      description: 'Consult Dr. Suhas Raj, interventional cardiologist in RR Nagar with 10+ years’ experience in angioplasty, high-risk PCI, heart failure, and hypertension care.',
      faqs: [
        {
          question: 'Who is Dr. Suhas Raj S and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Suhas Raj S is an experienced Interventional Cardiologist at Rashtrotthana Hospital, RR Nagar, Bangalore, with expertise in managing heart attacks, complex coronary artery disease, and advanced cardiac conditions. He is known for handling high-risk cardiac procedures with precision and timely intervention.'
        },
        {
          question: 'Does Dr. Suhas Raj S treat heart attacks with primary angioplasty at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Suhas Raj S specializes in primary angioplasty for heart attack (myocardial infarction), a life-saving procedure that restores blood flow to the heart quickly. Early angioplasty significantly reduces heart muscle damage and improves survival outcomes.'
        },
        {
          question: 'What is high-risk PCI and when is it recommended by Dr. Suhas Raj S?',
          answer: 'High-risk PCI (Percutaneous Coronary Intervention) is performed in patients with complex blockages, weak heart function, or multiple medical conditions. Dr. Suhas Raj S performs high-risk PCI using advanced techniques and close monitoring at Rashtrotthana Hospital.'
        },
        {
          question: 'Can I consult Dr. Suhas Raj S for heart failure management in Bangalore?',
          answer: 'Yes, Dr. Suhas Raj S provides comprehensive care for heart failure, including medication optimisation, lifestyle guidance, and long-term monitoring. Early management helps reduce hospital admissions and improves quality of life.'
        },
        {
          question: 'Does Dr. Suhas Raj S treat heart rhythm problems and electrophysiology conditions?',
          answer: 'Dr. Suhas Raj S evaluates and manages electrophysiology conditions such as abnormal heart rhythms, palpitations, and unexplained fainting. Treatment plans are based on accurate diagnosis and individual patient risk.'
        },
        {
          question: 'Are peripheral vascular diseases and hypertension treated by Dr. Suhas Raj S at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Suhas Raj S treats peripheral vascular diseases affecting blood vessels outside the heart, along with hypertension (high blood pressure). Proper management helps prevent complications like stroke, heart attack, and limb circulation problems.'
        },
        {
          question: 'How can I book an appointment with Dr. Suhas Raj S at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Suhas Raj S by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-cardiology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/CS-1.png',
        'assets/icons/CS-2.png',
        'assets/icons/CS-3.png',
        'assets/icons/CS-4.png',
        'assets/icons/CS-5.png'
      ],
      happyPatients: '6000+'
    },

    {
      name: 'Dr. Atmaram D. C',
      image: 'assets/Doc-Inv-Page/Dr-Atmaram-D-C.png',
      department: 'SURGEON/ LAPAROSCOPY/ GASTROENTEROLOGIST',
      about: 'A dedicated surgeon with 20+ years of experience specializing in laparoscopy, proctologist, gastroenterology and oncology. My medical journey began at MS Ramaiah Medical College in Bangalore, where I developed a strong foundation in surgical techniques and patient care. Over the years, I have honed my skills in minimally invasive procedures, which allow for quicker recoveries and reduced patient discomfort.I strongly believe in the existence of divinity, which inspires my approach to medicine. The immense trust my patients place in me is a driving force behind my commitment to serve them better every day. I am passionate about providing compassionate care and fostering trusting relationships with those I treat.',
      speciality: 'GENERAL SURGERY',
      areasOfExpertise: ['Laparoscopy', 'Gastroenterology', 'Oncology', 'Proctology'],
      expertise: '20+',
      qualification: 'MBBS, MS',
      time: '16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 9,
      title: 'Dr. Atmaram D. C | Laparoscopic & GI Surgeon in RR Nagar',
      description: 'Book with Dr. Atmaram D. C, laparoscopic and GI surgeon in RR Nagar with 20+ years’ experience in gastroenterology, proctology, and minimally invasive care.',
      faqs: [
        {
          question: 'Who is Dr. Atmaram D. C and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Atmaram D. C is a senior Laparoscopic and Gastrointestinal Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in treating abdominal, colorectal, and gastrointestinal conditions. He is also involved in surgical oncology and proctology care.'
        },
        {
          question: 'What laparoscopic surgeries does Dr. Atmaram D. C perform at Rashtrotthana Hospital?',
          answer: 'Dr. Atmaram D. C performs minimally invasive laparoscopic surgeries for various abdominal and gastrointestinal conditions, which involve smaller cuts, reduced pain, and faster recovery compared to open surgery. These procedures are planned based on patient condition and safety.'
        },
        {
          question: 'Can I consult Dr. Atmaram D. C for gastroenterology-related surgical problems?',
          answer: 'Yes, Dr. Atmaram D. C treats gastrointestinal conditions such as abdominal pain, digestive tract disorders, intestinal obstructions, and surgically manageable GI diseases. Early evaluation helps in accurate diagnosis and timely treatment.'
        },
        {
          question: 'Does Dr. Atmaram D. C manage cancer-related surgical conditions at Rashtrotthana Hospital?',
          answer: 'Dr. Atmaram D. C is involved in oncology-related surgeries, including the surgical management of gastrointestinal and abdominal cancers. Treatment planning focuses on safe tumour removal, recovery, and coordination with other cancer care specialists when required.'
        },
        {
          question: 'What proctology conditions are treated by Dr. Atmaram D. C?',
          answer: 'Dr. Atmaram D. C treats proctology conditions such as piles (haemorrhoids), fissures, fistula, and other anorectal problems. These conditions are managed using modern surgical techniques to reduce discomfort and improve long-term outcomes.'
        },
        {
          question: 'What is the recovery time after laparoscopic or proctology surgery with Dr. Atmaram D. C?',
          answer: 'Recovery time varies by procedure, but laparoscopic and minimally invasive proctology surgeries usually allow quicker recovery and shorter hospital stays. Dr. Atmaram D. C provides clear post-operative guidance to support smooth healing.'
        },
        {
          question: 'How can I book an appointment with Dr. Atmaram D. C at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Atmaram D. C by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-general-surgery-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/GS-1.png',
        'assets/icons/GS-2.png',
        'assets/icons/GS-3.png',
        'assets/icons/GS-4.png',
        'assets/icons/GS-5.png'
      ],
      happyPatients: '8000+'

    },
    {
      name: 'Dr. Kolla Vinod',
      image: 'assets/Doc-Inv-Page/Dr-Kolla-Vinod.png',
      department: 'Pulmonary and sleep medicine',
      about: 'Dr. Kolla Vinod is a professor in Pulmonary medicine for over a decade. His education, training and extensive experience given special expertise in the diagnosis, treatment and management of disorders of the pulmonary diseases. He has achieved state 2nd rank during his post-graduation. He strives to stay current with medical knowledge and interventional skills in order to provide his patients with the best, up- to-date care available. He is interested in new interventions (Bronchoscopy, Throcoscopy, cryobiopsy rigid bronchoscopy) The majority of his early education was in Lawrence school Ooty, he completed his Pre-University in Lawrence school Ooty. He finished MBBS, MD in Pulmonary Medicine obtained from Narayana Medical College, Nellore. His post- doctoral studies included a critical care, Interventional pulmonology. Dr. Kolla Vinod authored or co- authored peer-reviewed abstracts/articles. He holds multiple Journals and case reports in his field in various Indian and International journals. Upon his return to Bangalore.',
      speciality: 'PULMONOLOGY',
      areasOfExpertise: ['Copd', 'Pneumonia', 'Tuberculosis', 'Interstitial lung disease', 'Pleural effusion', 'Lung cancer', 'Sleep medicine', 'Flu and allergic bronchitis', 'Pulmonary rehabilitation', 'Interventional pulmonology (Bronchoscopy, Throcoscopy, Cryobiopsy, Rigid bronchoscopy) Asthama'],
      expertise: '20+',
      qualification: 'MBBS, MD PULMONOLOGY MEDICINE',
      time: '16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:10,18:10-18:30',
      id: 21,
      date: 'Monday-Saturday',
      alt: 'Dr. Kolla Vinod | Best Pulmonologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Kolla Vinod | Pulmonologist & Sleep Medicine Expert',
      description: 'Dr. Kolla Vinod is an expert in pulmonary and sleep medicine with 20+ years of experience in bronchoscopy, COPD, asthma, lung cancer, and ILD care.',
      faqs: [
        {
          question: 'Who is Dr. Vinod Kolla and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Vinod Kolla is a senior Consultant Pulmonologist and Sleep Medicine Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He has extensive experience in diagnosing and treating complex lung diseases using advanced interventional pulmonology techniques.'
        },
        {
          question: 'What lung conditions does Dr. Vinod Kolla treat at Rashtrotthana Hospital?',
          answer: 'Dr. Vinod Kolla treats a wide range of respiratory conditions including asthma, COPD, pneumonia, tuberculosis, interstitial lung disease (ILD), pleural effusion, lung cancer, flu, and allergic bronchitis. His treatment plans focus on accurate diagnosis, symptom control, and long-term lung health.'
        },
        {
          question: 'What is interventional pulmonology and how does Dr. Vinod Kolla use it in treatment?',
          answer: 'Interventional pulmonology involves advanced procedures such as bronchoscopy, thoracoscopy, cryobiopsy, and rigid bronchoscopy to diagnose and manage lung diseases. Dr. Vinod Kolla uses these minimally invasive techniques to achieve precise diagnosis and targeted treatment.'
        },
        {
          question: 'Can Dr. Vinod Kolla help manage asthma and COPD long term?',
          answer: 'Yes, Dr. Vinod Kolla has significant experience in managing chronic respiratory conditions like asthma and COPD, including medication optimisation, inhaler guidance, trigger control, and pulmonary rehabilitation to improve breathing and quality of life.'
        },
        {
          question: 'Does Dr. Vinod Kolla treat sleep-related breathing disorders at Rashtrotthana Hospital?',
          answer: 'Yes, as a Sleep Medicine Specialist, Dr. Vinod Kolla evaluates and treats sleep-related breathing disorders such as sleep apnea, snoring-related breathing issues, and sleep-related respiratory problems that affect daytime alertness and heart health.'
        },
        {
          question: 'What role does pulmonary rehabilitation play in treatment under Dr. Vinod Kolla?',
          answer: 'Pulmonary rehabilitation includes breathing exercises, physical conditioning, and lifestyle guidance to help patients with chronic lung diseases breathe better and stay active. Dr. Vinod Kolla integrates rehabilitation into long-term care for conditions like COPD and ILD.'
        },
        {
          question: 'How can I book an appointment with Dr. Vinod Kolla at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Vinod Kolla by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-pulmonology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PUL-1.png',
        'assets/icons/PUL-2.png',
        'assets/icons/PUL-3.png',
        'assets/icons/PUL-4.png',
        'assets/icons/PUL-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: 'Dr. Meena H. B',
      image: 'assets/Doc-Inv-Page/Dr-Meena-H-B.png',
      department: 'DERMATOLOGIST',
      about: 'Dr. Meena H. B is a highly dedicated dermatologist with extensive knowledge in treating various skin, hair and nail conditions. She graduated with an MBBS from MS Ramiah Medical College in 1987 and completed her MD Dermatology at KIMS Bengaluru in 2014, currently working at ESI Hospital Indiranagar as Senior Specialist in Dermatology. She worked as  Cosmetologist at JonRic Oomph International Medispa, Koramangala and as a consultant at Medihope Multispeciality Hospital. Hands-on experience with Lasers, PRP, Chemical peels, Skintag and Wart removal, Nanopore for acne scar and pigmentation, Botox, Fillers and Threadlift. She has Publications in esteemed journals like JCDR, JEMDS.With a patient-centred approach, Dr. Meena ensures her patients receive comprehensive care for long term skin and hair health.',
      speciality: 'DERMATOLOGY',
      areasOfExpertise: ['chemical peels for acne', 'pigmentation and skin rejuvenation', 'laser for hair removal', 'acne scar and pigmentation', 'PRP for hair and face', 'Derma-roller', 'Nanopore for skin brightening', 'pigmentation and acne scar microdermabrasion', 'Clinical dermatology and various procedures like skin tag removal', 'DPN removal, wart removal, corn and callosity'],
      expertise: ' 30+',
      time: '18:00:18:15,18:15-18:30,18:30-18:45,18:45-19:00',
      qualification: 'MBBS, MD(DERMATOLOGY)',
      date: 'Tuesday, Thursday and Saturday',
      alt: 'Dr. Meena H. B | Best Skin Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 42,
      title: 'Dr. Meena H. B | Dermatologist & Skin Specialist in RR Nagar',
      description: 'Consult Dr. Meena H. B, dermatologist in RR Nagar with 30+ years’ experience in acne scars, pigmentation, PRP therapy, chemical peels, and laser hair removal.',
      faqs: [
        {
          question: 'Who is Dr. Meena H. B and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Meena H. B is an experienced Dermatologist at Rashtrotthana Hospital, RR Nagar, Bangalore, specialising in clinical dermatology and advanced aesthetic skin procedures. She treats a wide range of skin, hair, and cosmetic concerns with a patient-focused approach.'
        },
        {
          question: 'What skin conditions are treated by Dr. Meena H. B at Rashtrotthana Hospital?',
          answer: 'Dr. Meena H. B treats common and chronic skin conditions such as acne, pigmentation, skin tags, warts, DPN, corns, callosities, and acne scars. Her treatments focus on improving skin health while maintaining safety and natural results.'
        },
        {
          question: 'Does Dr. Meena H. B provide acne and acne scar treatments in Bangalore?',
          answer: 'Yes, Dr. Meena H. B offers chemical peels, microdermabrasion, derma-roller, PRP therapy, and advanced skin rejuvenation procedures to treat acne and acne scars. Treatment plans are selected based on skin type, severity, and recovery expectations.'
        },
        {
          question: 'Is laser hair removal available with Dr. Meena H. B at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Meena H. B provides laser hair removal for unwanted hair with a focus on safety, skin suitability, and long-term hair reduction. Proper evaluation ensures effective results with minimal discomfort.'
        },
        {
          question: 'What treatments are available for pigmentation and skin brightening with Dr. Meena H. B?',
          answer: 'Dr. Meena H. B offers treatments such as chemical peels, nanopore skin brightening, PRP therapy, and pigmentation-focused microdermabrasion. These procedures help improve skin tone, texture, and overall radiance.'
        },
        {
          question: 'Can Dr. Meena H. B help with hair fall and hair thinning problems?',
          answer: 'Yes, Dr. Meena H. B provides PRP therapy for hair loss, which helps stimulate hair growth and improve hair thickness. Treatment suitability is decided after scalp and hair evaluation.'
        },
        {
          question: 'How can I book an appointment with Dr. Meena H. B at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Meena H. B by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/icons/DER-1.png',
        'assets/icons/DER-2.png',
        'assets/icons/DER-3.png',
        'assets/icons/DER-4.png',
        'assets/icons/DER-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Dr. Kishan G. N",
      image: "assets/dr-kishan-g-n.png",
      department: 'Ayurveda (Panchakarma and Ayurvedic Medicine)',
      speciality: 'AYURVEDA',
      desgination: 'Ayurveda (Panchakarma and Ayurvedic Medicine)',
      about: "Dr. Kishan G. N is an experienced Ayurvedic practitioner with over a decade of expertise in Panchakarma and holistic healthcare. He has served as a consultant across reputed Ayurvedic institutions, conducted extensive clinical documentation and research, and trained hundreds of therapists in therapeutic practices. His work includes participation in national and international seminars, representing Ayurveda at global platforms and integrating traditional knowledge with modern healthcare approaches.",
      areasOfExpertise: ["Specialized in Panchakarma therapies (detoxification and rejuvenation treatments)", "Ayurvedic management of chronic, lifestyle-related conditions", "Uttarabasti", ' Autoimmune disorders', 'Gastrointestinal disorders,', 'Neuro-Musculoskeletal disorders', "Training and mentoring Ayurvedic therapists and students"],
      expertise: " 15+",
      qualification: "CCPT, PGCPK, BAMS",
      time: "",
      date: "",
      id: '',
      alt: 'Dr. Kishan G. N – Ayurveda, Rashtrotthana Hospital Bangalore',
      title: 'Dr. Kishan G. N - Expert in Ayurveda & Panchakarma Care',
      description: 'Consult Dr. Kishan G. N for holistic healing, detox therapies, and lifestyle care rooted in Ayurveda.',
      faqs: [
        {
          question: 'Who is Dr. Kishan G N and what is his specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Kishan G N is an Ayurvedic physician at Rashtrotthana Hospital, Bangalore, specialising in Panchakarma therapies and chronic disease management. He is experienced in combining classical Ayurveda with structured therapeutic protocols for long-term health improvement.'
        },
        {
          question: 'What Panchakarma treatments are offered by Dr. Kishan G N at Rashtrotthana Hospital?',
          answer: 'Dr. Kishan G N specialises in Panchakarma detoxification and rejuvenation therapies, designed to cleanse toxins and restore balance in the body. These therapies are customised based on the patient’s constitution, condition, and recovery goals.'
        },
        {
          question: 'Can Dr. Kishan G N treat chronic lifestyle-related diseases through Ayurveda?',
          answer: 'Yes, Dr. Kishan G N provides Ayurvedic management for chronic lifestyle disorders such as stress-related illnesses, metabolic imbalances, and long-standing health conditions. Treatment focuses on root-cause correction, diet guidance, and sustainable lifestyle changes.'
        },
        {
          question: 'Does Dr. Kishan G N manage autoimmune and gastrointestinal disorders?',
          answer: 'Yes, Dr. Kishan G N treats autoimmune disorders and gastrointestinal conditions using Ayurveda-based protocols that aim to reduce inflammation and improve digestion. Panchakarma and internal therapies are planned carefully to support long-term remission and symptom control.'
        },
        {
          question: 'Can I consult Dr. Kishan G N for neuro-musculoskeletal problems?',
          answer: 'Yes, he manages neuro-musculoskeletal disorders such as joint pain, nerve-related conditions, and mobility issues through Ayurvedic therapies. Treatments may include Panchakarma, external therapies, and corrective lifestyle guidance.'
        },
        {
          question: 'What is Uttarabasti and when is it recommended by Dr. Kishan G N?',
          answer: 'Uttarabasti is a specialised Ayurvedic procedure used for certain urogenital and reproductive health conditions. Dr. Kishan G N recommends it only after detailed evaluation to ensure safety, effectiveness, and suitability for the patient.'
        },
        {
          question: 'Why choose Dr. Kishan G N at Rashtrotthana Hospital for Ayurvedic treatment?',
          answer: 'Dr. Kishan G N brings clinical experience in Panchakarma and chronic disease care, along with expertise in training Ayurvedic therapists. At Rashtrotthana Hospital, patients benefit from authentic Ayurvedic care delivered in a medically supervised hospital environment.'
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/icons/AY-1.png',
        'assets/icons/AY-2.png',
        'assets/icons/AY-3.png',
        'assets/icons/AY-4.png',
        'assets/icons/AY-5.png'
      ],
      happyPatients: '3000+'

    },

    // {
    //   name: 'Dr. Sindhu P. Madanshetty',
    //   image: 'assets/Doc-Inv-Page/Dr-Sindhu-P-Madanshetty.png',
    //   department: 'INTERNAL MEDICINE',
    //   about: 'Dr Sindhu has built a reputable career as a recognised expert with superb patient care and medical knowledge. She completed her MBBS from Hubli, then MD in general medicine from Bangalore Medical College and research institute in 2018. She has been a gold medallist in her undergraduate. She has worked in both Internal Medicine and Intensive care and contributed in patient care at BGS global hospitals. Special interest is in critical care, Infection diseases, diabetology, metabolic diseases.',
    //   speciality: 'INTERNAL MEDICINE',
    //   areasOfExpertise: ['Critical Care', 'Diabetology', 'Hypertensions', 'Thyroid illness', 'Infectious diseases like Dengue', 'pneumonia', 'UTI'],
    //   expertise: 'Years of Experience: 7',
    //   qualification: 'MBBS, MD INTERNAL MEDICINE, IDCCM',
    //   time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
    //   date: 'Monday-Saturday',
    //   alt: 'Dr. Sindhu P. Madanshetty | Best Physician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
    //   id: 1,
    //   title:'Dr. Sindhu P. Madanshetty | Internal Medicine in RR Nagar',
    //   description:'Book with Dr. Sindhu P. Madanshetty, RR Nagar-based internal medicine doctor with 7+ years’ experience in critical care, diabetes, thyroid, and infections.'
    // },


    {
      name: 'Dr. Sujayendra D. M',
      image: 'assets/Doc-Inv-Page/Dr-Sujayendra-D-M.png',
      department: 'ORTHOPEDICS',
      about: "Dr. Sujayendra D. M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities, he gained wide exposure to hand surgeries, paediatric Orthopaedics, spine surgeries, Arthroscopy, Arthroplasty and complex trauma surgeries. After senior residency at St. John's Medical College and KMC, Manipal, he was promoted to Assistant Professor of Orthopaedics at KMC, Manipal. Having completed the basic, advanced and master's course from A.O, he has acquired extensive training in Orthopaedics Trauma. He is also a National Faculty (as table instructor) for AO Trauma India. He was awarded a Fellowship in Arthroplasty (joint replacement surgery) by the India Orthopaedic Association.",
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Fracture care', 'Joint replacement surgeries and Arthroscopy (keyhole) surgeries'],
      expertise: '13+',
      qualification: `MBBS, MS (ORTHO), DNB (Ortho), <br>
       Diploma SICOT, Fellowship in Arthroplasty`,
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30',
      date: 'Tuesday,Thursday and Saturday',
      alt: "Dr. Sujayendra D. M | Best Orthopaedic Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore",
      id: 5,
      title: 'Dr. Sujayendra D. M | Orthopedic Surgeon & Joint Specialist RR Nagar',
      description: 'Book with Dr. Sujayendra D. M, orthopedic surgeon in RR Nagar with 13+ years’ experience in fracture care, arthroscopy, trauma surgery, and joint replacement.',
      faqs: [
        {
          question: 'Who is Dr. Sujayendra D. M and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sujayendra D. M is an experienced Orthopaedic Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in fracture care, joint replacement surgeries, and minimally invasive arthroscopy (keyhole) procedures.'
        },
        {
          question: 'What types of fractures does Dr. Sujayendra D. M treat at Rashtrotthana Hospital?',
          answer: 'Dr. Sujayendra D. M manages simple and complex fractures, including injuries from falls, road traffic accidents, and sports trauma. Treatment is planned to ensure proper bone healing, alignment, and early return to function.'
        },
        {
          question: 'Does Dr. Sujayendra D. M perform joint replacement surgery in Bangalore?',
          answer: 'Yes, Dr. Sujayendra D. M performs joint replacement surgeries for conditions like advanced knee or hip arthritis when conservative treatments fail. The goal is to relieve pain, restore movement, and improve quality of life.'
        },
        {
          question: 'What is arthroscopy and when is it recommended by Dr. Sujayendra D. M?',
          answer: 'Arthroscopy is a keyhole surgical technique used to diagnose and treat joint problems with smaller incisions and faster recovery. Dr. Sujayendra D. M commonly recommends arthroscopy for ligament injuries, meniscus tears, and persistent joint pain.'
        },
        {
          question: 'How long is recovery after fracture treatment or orthopaedic surgery with Dr. Sujayendra D. M?',
          answer: 'Recovery time depends on the injury or procedure, but arthroscopy and modern fracture fixation techniques usually allow quicker rehabilitation. Dr. Sujayendra D. M provides structured post-treatment guidance to support safe and steady recovery.'
        },
        {
          question: 'When should I consult Dr. Sujayendra D. M for orthopaedic problems?',
          answer: 'You should consult Dr. Sujayendra D. M if you experience severe joint pain, swelling, difficulty walking, suspected fractures, or limited joint movement. Early orthopaedic evaluation helps prevent complications and long-term damage.'
        },
        {
          question: 'How can I book an appointment with Dr. Sujayendra D. M at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Sujayendra D. M by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-orthopaedics-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/O-1.png',
        'assets/icons/O-2.png',
        'assets/icons/O-3.png',
        'assets/icons/O-4.png',
        'assets/icons/O-5.png'
      ],
      happyPatients: '5000+'

    },


    {
      name: 'Dr. Manasa N. A',
      image: 'assets/Doc-Inv-Page/Dr-Manasa-N-A.png',
      department: 'ENT, HEAD & NECK SURGERY',
      about: 'Dr. Manasa. N. A Consultant ENT, Head & Neck Surgeon comes with a vast experience of 10 years. She has done her MBBS from the prestigious M.S. Ramaiah Medical College. She did her post-graduation from JJM medical college, Davangere. She procured her higher studies from Tata Main Hospital.She is immensely knowledgeable, compassionate and skilled in her field of expertise. She is your one stop solutions to all your Ear, nose, throat and Head & Neck related issues. Other than the routine ENT work she also specialises in endoscopic adenoidectomy and endoscopic endonasal sinus surgeries, microscopic hearing restoration surgeries, voice restoration surgery and Head and tumour surgeries.',
      speciality: 'ENT SPECIALITY',
      areasOfExpertise: ['Tonsillectomy', 'Adenoidectomy', 'Myringotomy', 'Septoplasty', 'Endoscopic sinus surgery', 'Management of vocal cord and voice disorders', 'Diagnosis and treatment of Head and neck tumors', 'Tracheotomy and airway surgeries', 'Polytrauma management', 'Snoring evaluation and Management of Obstructive sleep apnea', 'Micro ear surgery for hearing restoration',],
      expertise: '16+',
      qualification: 'MBBS, DLO, DNB(ENT)',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30',
      date: 'Monday,Wednesday,Friday and Saturday',
      alt: 'Dr. Manasa N. A | Best ENT Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 32,
      title: 'Dr. Manasa N. A | ENT Head & Neck Surgeon in RR Nagar Bangalore',
      description: 'Consult Dr. Manasa N. A, expert ENT doctor in RR Nagar, Bangalore. Skilled in endoscopic sinus surgery, tonsillectomy, voice & sleep apnea treatment.',
      faqs: [
        {
          question: 'Who is Dr. Manasa N. A and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Manasa N. A is an experienced ENT and Head & Neck Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in ear, nose, throat, voice, airway, and head-neck tumour management with a strong surgical background.'
        },
        {
          question: 'Does Dr. Manasa N. A perform micro ear surgery for hearing loss at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Manasa N. A performs micro ear surgery for hearing restoration, including procedures like myringotomy and middle ear surgeries. These surgeries aim to improve hearing while preserving ear structure and function.'
        },
        {
          question: 'When is septoplasty or endoscopic sinus surgery recommended by Dr. Manasa N. A?',
          answer: 'Septoplasty is recommended for deviated nasal septum causing breathing difficulty, while endoscopic sinus surgery is advised for chronic sinusitis not responding to medication. Dr. Manasa N. A uses minimally invasive techniques for faster recovery and better outcomes.'
        },
        {
          question: 'Can Dr. Manasa N. A treat voice problems and vocal cord disorders?',
          answer: 'Yes, Dr. Manasa N. A diagnoses and manages vocal cord and voice disorders such as hoarseness, voice strain, and vocal cord lesions. Treatment may include medical management, voice therapy, or surgery depending on the cause.'
        },
        {
          question: 'Does Dr. Manasa N. A treat head and neck tumors at Rashtrotthana Hospital?',
          answer: 'Dr. Manasa N. A is experienced in the diagnosis and surgical management of head and neck tumours, including throat, neck, and oral region growths. Early evaluation helps in accurate diagnosis and timely treatment planning.'
        },
        {
          question: 'Is snoring and sleep apnea treatment available with Dr. Manasa N. A in Bangalore?',
          answer: 'Yes, Dr. Manasa N. A provides snoring evaluation and management of obstructive sleep apnea, including airway assessment and surgical options when required. Proper treatment helps improve sleep quality and overall health.'
        },
        {
          question: 'How can I book an appointment with Dr. Manasa N. A at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Manasa N. A by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-ent-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ENT-1.png',
        'assets/icons/ENT-2.png',
        'assets/icons/ENT-3.png',
        'assets/icons/ENT-4.png',
        'assets/icons/ENT-5.png'
      ],
      happyPatients: '7000+'

    },


    {
      name: 'Dr. Madhu S. N',
      image: 'assets/Doc-Inv-Page/Dr-Madhu-S-N.png',
      department: 'UROLOGIST & ANDROLOGIST',
      speciality: 'UROLOGY',
      about: 'Worked as Assistant prof. in the department of urology at St. John’s Medical Collage hospital, a premier high volume territory care hospital in Bangalore.',
      areasOfExpertise: ['Endourology', 'Andrology', 'Kidney Transplantation', 'Reconstructive Urology', 'Uro Oncology', 'Laproscopic urology', 'Uro Gynecology', 'Pediatric Urology', 'Stone Disease'],
      expertise: '15+',
      qualification: 'MBBS, MS(GEN. SURGERY), MCH(UROLOGY)',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10',
      date: 'Monday-Saturday',
      alt: 'Dr. Madhu S. N | Best Urologist & Andrologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 19,
      title: 'Dr. Madhu S. N | Urologist & Andrologist in Bangalore',
      description: 'Dr. Madhu S. N is a senior urologist with 15+ years of experience in endourology, kidney transplant, laparoscopic uro oncology, and stone disease care.',
      faqs: [
        {
          question: 'Who is Dr. Madhu S. N and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Madhu S. N is a senior Urologist and Renal Transplant Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in endourology, kidney transplantation, and complex urological conditions. He is known for managing both adult and pediatric urology cases.'
        },
        {
          question: 'What urological conditions does Dr. Madhu S. N treat at Rashtrotthana Hospital?',
          answer: 'Dr. Madhu S. N treats a wide range of conditions including kidney stones, urinary obstruction, prostate disorders, male infertility issues, urological cancers, and reconstructive urology problems. His approach focuses on minimally invasive and organ-preserving treatments.'
        },
        {
          question: 'Does Dr. Madhu S. N perform kidney stone treatment using minimally invasive methods?',
          answer: 'Yes, Dr. Madhu S. N specialises in endourology and laparoscopic urology for kidney, ureter, and bladder stones. These techniques allow stone removal with smaller incisions, less pain, and faster recovery compared to open surgery.'
        },
        {
          question: 'Can I consult Dr. Madhu S. N for kidney transplantation at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Madhu S. N is experienced in kidney transplantation, including pre-transplant evaluation, surgical planning, and post-transplant care. He works closely with a multidisciplinary team to ensure long-term graft function and patient safety.'
        },
        {
          question: 'Does Dr. Madhu S. N treat male infertility and sexual health problems?',
          answer: 'Dr. Madhu S. N provides expert care in andrology, treating conditions such as male infertility, erectile dysfunction, and hormonal urological disorders. Treatment plans are personalised based on detailed evaluation and patient goals.'
        },
        {
          question: 'Are urological cancers and reconstructive urology managed by Dr. Madhu S. N?',
          answer: 'Yes, Dr. Madhu S. N treats uro-oncology conditions involving the kidney, bladder, prostate, and urinary tract. He also performs reconstructive urology surgeries to restore urinary function after injury, obstruction, or cancer treatment.'
        },
        {
          question: 'How can I book an appointment with Dr. Madhu S. N at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Madhu S. N by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-urology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/U-1.png',
        'assets/icons/U-2.png',
        'assets/icons/U-3.png',
        'assets/icons/U-4.png',
        'assets/icons/U-5.png'
      ],
      happyPatients: '5000+'

    },


    {
      name: 'Dr. Jaidev S',
      image: 'assets/Doc-Inv-Page/Dr-Jaidev-S.png',
      department: 'Neuro Science',
      speciality: 'NEUROSCIENCES',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow. Specialised in brain and spine sugery, endovascular surgery.',
      areasOfExpertise: ['Spine surgery', 'Brain surgery', 'Treatment of Neck pain', 'Back pain', 'Stroke', 'Neuropathy', 'Endovascular intervention'],
      expertise: ' 7+',
      time: '17:00-17:15,17:15-17:30,17:30-17:45,17:45-18:00',
      qualification: 'MBBS, MS, MCH(NEURO SURGERY)',
      date: 'Monday-Saturday',
      alt: 'Dr. Jaidev S | Best Neurosurgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 26,
      title: 'Dr. Jaidev S | Neurosurgeon in RR Nagar Bangalore',
      description: 'Consult Dr. Jaidev S, expert neurosurgeon in RR Nagar, Bangalore. Specialised in spine surgery, brain surgery, stroke care, and endovascular interventions.',
      faqs: [
        {
          question: 'Who is Dr. Jaidev S and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Jaidev S is a highly experienced Neurosurgeon at Rashtrotthana Hospital, RR Nagar, Bangalore, specialising in brain surgery, spine surgery, and endovascular interventions. He is known for managing complex neurological conditions with advanced surgical and minimally invasive techniques.'
        },
        {
          question: 'What brain and spine conditions does Dr. Jaidev S treat at Rashtrotthana Hospital?',
          answer: 'Dr. Jaidev S treats conditions such as brain tumours, spinal disorders, slipped discs, nerve compression, traumatic brain injury, and degenerative spine diseases. Treatment is planned to relieve symptoms, protect nerve function, and improve quality of life.'
        },
        {
          question: 'When should I consult Dr. Jaidev S for neck pain or back pain?',
          answer: 'You should consult Dr. Jaidev S if you have persistent neck pain, back pain, radiating pain to arms or legs, numbness, weakness, or difficulty walking. Early neurosurgical evaluation helps determine whether medical management or surgery is required.'
        },
        {
          question: 'Does Dr. Jaidev S treat stroke and blood vessel-related brain conditions?',
          answer: 'Yes, Dr. Jaidev S is experienced in stroke management and endovascular interventions, including minimally invasive procedures to treat blood vessel blockages and abnormalities in the brain. Early treatment plays a crucial role in reducing long-term disability.'
        },
        {
          question: 'What is endovascular intervention and how does Dr. Jaidev S use it?',
          answer: 'Endovascular intervention involves minimally invasive treatment through blood vessels to manage stroke and other vascular brain conditions. Dr. Jaidev S uses these techniques to reduce surgical risk, hospital stay, and recovery time.'
        },
        {
          question: 'Can Dr. Jaidev S help with neuropathy and nerve-related problems?',
          answer: 'Yes, Dr. Jaidev S evaluates and treats neuropathy and nerve-related disorders, including numbness, tingling, and weakness caused by nerve compression or damage. Treatment focuses on identifying the cause and preventing further nerve injury.'
        },
        {
          question: 'How can I book an appointment with Dr. Jaidev S at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Jaidev S by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-neurology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/NUS-1.png',
        'assets/icons/NUS-2.png',
        'assets/icons/NUS-3.png',
        'assets/icons/NUS-4.png',
        'assets/icons/NUS-5.png'
      ],
      happyPatients: '2000+'


    },

    {
      name: 'Dr. Nishanth Lakshmikantha',
      image: 'assets/Doc-Inv-Page/Dr-Nishanth-Lakshmikantha.png',
      department: 'General, GI and Robotic Surgery',
      speciality: 'GENERAL SURGERY',
      about: ' Dr. Nishanth Lakshmikantha is a highly skilled surgeon known for excellence in both clinical practice and academic achievement. Having secured a rank in the Surgery university exams he has built a reputation for precision, dedication and innovation in the surgical field.His excellent grasp in communication and clinical examination of patients ensures they receive the most effective treatments available.  His forward-thinking approach and commitment to mastering advanced surgical techniques made him embrace laparoscopic surgery early in his career and has made significant strides in the field of minimally invasive procedures such as Laparoscopic and Robotic surgeries.',
      areasOfExpertise: [' Laparoscopic & Robotic surgery', 'Laser proctology '],
      expertise: '10+',
      qualification: 'MBBS, MS, FMAS, FIAGES,FARIS',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10',
      date: 'Monday-Saturday',
      alt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 8,
      title: 'Dr. Nishanth Lakshmikantha | GI & Laparoscopic Surgeon',
      description: 'Consult Dr. Nishanth Lakshmikantha, experienced GI and robotic surgeon in Bangalore. Specialised in laparoscopic surgery and laser proctology.',
      faqs: [
        {
          question: 'Who is Dr. Nishanth Lakshmikantha and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Nishanth Lakshmikantha is an experienced Laparoscopic and Robotic Surgeon with expertise in Laser Proctology at Rashtrotthana Hospital, RR Nagar, Bangalore. He focuses on minimally invasive surgical techniques that offer faster recovery and reduced post-operative discomfort.'
        },
        {
          question: 'What conditions are treated by Dr. Nishanth Lakshmikantha using laparoscopic and robotic surgery?',
          answer: 'Dr. Nishanth Lakshmikantha treats a range of abdominal and colorectal conditions using laparoscopic and robotic surgery, which allow precise treatment through small incisions. These techniques help reduce pain, hospital stay, and recovery time.'
        },
        {
          question: 'What is laser proctology and when is it recommended by Dr. Nishanth Lakshmikantha?',
          answer: 'Laser proctology is a modern, minimally invasive treatment used for piles (haemorrhoids), fissures, fistula, and other anorectal conditions. Dr. Nishanth Lakshmikantha recommends laser procedures for eligible patients to ensure minimal bleeding, less pain, and quicker return to daily activities.'
        },
        {
          question: 'Is laser treatment for piles and fistula safe at Rashtrotthana Hospital?',
          answer: 'Yes, laser proctology procedures performed by Dr. Nishanth Lakshmikantha are considered safe and effective when done after proper evaluation. The hospital’s advanced surgical setup ensures high safety standards and patient comfort.'
        },
        {
          question: 'What is the recovery time after laparoscopic or laser proctology surgery with Dr. Nishanth Lakshmikantha?',
          answer: 'Most patients experience faster recovery and shorter hospital stays after laparoscopic or laser procedures compared to conventional surgery. Dr. Nishanth Lakshmikantha provides clear post-operative guidance to support smooth healing.'
        },
        {
          question: 'When should I consult Dr. Nishanth Lakshmikantha for proctology or abdominal surgery problems?',
          answer: 'You should consult Dr. Nishanth Lakmikantha if you have persistent rectal pain, bleeding, swelling, difficulty passing stools, or abdominal symptoms that may require surgical evaluation. Early consultation helps prevent complications.'
        },
        {
          question: 'How can I book an appointment with Dr. Nishanth Lakshmikantha at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Nishanth Lakshmikantha by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-general-surgery-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/GS-1.png',
        'assets/icons/GS-2.png',
        'assets/icons/GS-3.png',
        'assets/icons/GS-4.png',
        'assets/icons/GS-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: 'Dr. Sameer M. Halageri',
      image: 'assets/Doc-Inv-Page/Dr-Sameer-M-Halageri.png',
      department: 'Plastic and Reconstructive Surgery',
      speciality: 'PLASTIC SURGERY',
      about: ' Dr. Sameer M Halageri is a highly skilled Consultant Plastic Surgeon with extensive experience in aesthetic and reconstructive surgeries. Dedicated to providing the highest standards of patient care, he specializes in various advanced procedures aimed at enhancing both form and function. With a strong commitment to continuous learning and innovation in his field, Dr. Halageri is known for his meticulous approach and compassionate patient care. His practice integrates the latest techniques and technologies to deliver exceptional results tailored to individual needs.',
      areasOfExpertise: ['Microvascular surgery and onco reconstruction',
        'Hand and brachial plexus surgery',
        'Breast and lymphedema surgery',
        'Cleft and craniofacial surgery',
        'Diabetic foot and complex wound management',
        'Cosmetic surgery', 'Burns and trauma reconstruction'],
      expertise: '12+',
      qualification: 'MBBS, MS, MCH',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Sameer M. Halageri | Best Consultant Plastic Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 48,
      title: 'Dr. Sameer Halageri | Plastic and Reconstructive Surgeon',
      description: 'Consult Dr. Sameer Halageri, expert plastic surgeon in Bangalore. Skilled in microvascular, cosmetic, cleft, diabetic foot, and trauma reconstruction.',
      faqs: [
        {
          question: 'Who is Dr. Sameer M. Halageri and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sameer M. Halageri is a highly experienced Plastic, Reconstructive, and Microvascular Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in complex reconstructive surgeries, limb salvage, and functional restoration following trauma, cancer, and chronic wounds.'
        },
        {
          question: 'What is microvascular surgery and how does Dr. Sameer M. Halageri use it in reconstruction?',
          answer: 'Microvascular surgery involves reconnecting tiny blood vessels using advanced techniques to restore tissue circulation. Dr. Sameer M. Halageri uses microvascular surgery for onco-reconstruction, limb salvage, and complex wound coverage, helping achieve better healing and functional outcomes.'
        },
        {
          question: 'Does Dr. Sameer M. Halageri treat diabetic foot and non-healing wounds at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Sameer M. Halageri is experienced in diabetic foot care and complex wound management, including limb-saving procedures. Early intervention helps prevent infections, amputations, and long-term disability.'
        },
        {
          question: 'Can I consult Dr. Sameer M. Halageri for hand injuries and brachial plexus problems?',
          answer: 'Dr. Sameer M. Halageri treats hand injuries, nerve damage, and brachial plexus injuries caused by trauma or compression. Surgical treatment focuses on restoring movement, sensation, and hand function.'
        },
        {
          question: 'Is breast reconstruction and lymphedema treatment available with Dr. Sameer M. Halageri?',
          answer: 'Yes, Dr. Sameer M. Halageri provides breast reconstruction after cancer surgery and treatment for lymphedema, helping improve both physical function and quality of life. Care is planned in coordination with oncology teams when required.'
        },
        {
          question: 'Does Dr. Sameer M. Halageri perform cleft, craniofacial, and trauma reconstruction surgeries?',
          answer: 'Yes, he performs cleft lip and palate surgeries, craniofacial reconstruction, and burns or trauma reconstruction, focusing on both functional recovery and aesthetic improvement. These procedures often require staged and specialised surgical care.'
        },
        {
          question: 'How can I book an appointment with Dr. Sameer M. Halageri at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Sameer M. Halageri by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/icons/PLS-1.png',
        'assets/icons/PLS-2.png',
        'assets/icons/PLS-3.png',
        'assets/icons/PLS-4.png',
        'assets/icons/PLS-5.png'
      ],
      happyPatients: '4000+'

    },
    // {
    //   name: 'Dr. Valli Kiran',
    //   image: 'assets/Dr-Latha-Venkataram7.png',
    //   department: 'PSYCHIATRY',
    //   speciality: 'PSYCHIATRY',
    //   about: 'Dr. Valli Kiran M is graduate from MYSORE UNIVERSITY in 2001. He did DIPLOMA IN PSYCHIATRY in 2005',
    //   areasOfExpertise: ['Entire Spectrum of Psychological Disorders'],
    //   expertise: 'Years of Experience: 20',
    //   qualification:'MBBS, DPM',
    //   time:'16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:10',
    //   date:'Tuesday,Thursday,Saturday'
    // },
    {
      name: 'Dr. Vishnuvardhan V',
      image: 'assets/Doc-Inv-Page/Dr-Vishnuvardhan-V.png',
      department: 'Ortho Dontics',
      speciality: 'DENTAL SCIENCES',
      about: 'Dr. Vishnu Vardhan has completed BDS and MDS from DAPM RV DENTAL COLLEGE affiliated to Rajiv Gandhi University Bangalore having about 10+ years overall experience. Life Member of the Indian Orthodontic Society. Senior Consultant orthodontist. Specialist in metal, ceramic, invisible, lingual and surgical orthodontics.',
      areasOfExpertise: ['Metal and ceramic braces', 'Lingual braces', 'Myofunctional appliances', 'Invisible alligner treatment'],
      expertise: '10+',
      qualification: 'BDS, MDS',
      time: '15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Vishnuvardhan V | Best Orthodontics in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Vishnuvardhan V | Best Orthodontist in Bangalore',
      description: 'Meet Dr. Vishnuvardhan V, expert orthodontist in Bangalore. Skilled in metal, ceramic, invisible, lingual braces, and surgical orthodontics.',
      faqs: [
        {
          question: 'Who is Dr. Vishnuvardhan V and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Vishnuvardhan V is an experienced Orthodontist at Rashtrotthana Hospital, RR Nagar, Bangalore, specialising in corrective dental alignment and bite correction. He offers modern orthodontic solutions for children, teenagers, and adults.'
        },
        {
          question: 'What types of braces are available with Dr. Vishnuvardhan V at Rashtrotthana Hospital?',
          answer: 'Dr. Vishnuvardhan V provides metal braces, ceramic braces, and lingual braces, depending on the patient’s dental condition and aesthetic preference. Each option is chosen to ensure effective alignment with comfort and durability.'
        },
        {
          question: 'Is invisible aligner treatment available with Dr. Vishnuvardhan V in Bangalore?',
          answer: 'Yes, Dr. Vishnuvardhan V offers invisible aligner treatment for patients looking for a discreet way to straighten teeth. Aligners are removable, comfortable, and suitable for mild to moderate alignment issues after proper evaluation.'
        },
        {
          question: 'What are myofunctional appliances and who needs them?',
          answer: 'Myofunctional appliances are used in growing children to correct jaw growth issues and bite problems early. Dr. Vishnuvardhan V recommends these appliances to reduce the need for complex orthodontic treatment later in life.'
        },
        {
          question: 'How long does orthodontic treatment take with Dr. Vishnuvardhan V?',
          answer: 'Treatment duration varies based on the complexity of the case, but most orthodontic treatments take 12 to 24 months. Dr. Vishnuvardhan V explains the expected timeline clearly during consultation and monitors progress regularly.'
        },
        {
          question: 'Is orthodontic treatment painful and what is recovery like?',
          answer: 'Orthodontic treatment may cause temporary discomfort during initial placement or adjustments, which usually settles within a few days. Patients can continue normal daily activities while following care instructions provided by Dr. Vishnuvardhan V.'
        },
        {
          question: 'How can I book an appointment with Dr. Vishnuvardhan V at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Vishnuvardhan V by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-dental-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/DETS-1.png',
        'assets/icons/DETS-2.png',
        'assets/icons/DETS-3.png',
        'assets/icons/DETS-4.png',
        'assets/icons/DETS-5.png'
      ],
      happyPatients: '2000+'

    },
    {
      name: 'Dr. Prakruthi',
      image: 'assets/Doc-Inv-Page/Dr-Prakruthi.png',
      department: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Prakruthi is a dedicated obstetrician and gynecologist committed to enhancing patient safety and care quality in both normal and high-risk pregnancies. With a strong focus on labor ward management, fetal medicine and academic excellence, she strives to promote exceptional standards in maternity services.She has made significant contributions to the field through her research, including publications on recurrent fetal hydrops and the successful management of Guillain-Barre syndrome in pregnancy. Her work emphasizes the importance of genetic testing and innovative treatment strategies and has been featured in prominent medical journals.Dr. Prakruthi has also presented her findings at national conferences, highlighting her commitment to advancing obstetric care and improving patient safety. Known for her strong interpersonal and communication skills, she fosters trusting relationships with her patients and colleagues, ensuring a supportive environment for all those in her care.',
      areasOfExpertise: ['Labour ward management', 'Development of protocols', 'High risk pregnancy management', 'Fetal Scans'],
      expertise: '19+',
      qualification: 'MBBS, DGO, DNB, FELLOWSHIP IN MATERNAL FETAL MEDICINE',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10',
      date: 'Saturday',
      alt: 'Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 16,
      title: 'Dr. Prakruthi | High-Risk Pregnancy Expert | 19+ Years',
      description: 'Dr. Prakruthi is an experienced obstetrician and gynecologist with expertise in high-risk pregnancy care, fetal medicine, and labor ward management.',
      faqs: [
        {
          question: 'Who is Dr. Prakruthi and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Prakruthi is a skilled Obstetrician at Rashtrotthana Hospital, RR Nagar, Bangalore, with focused experience in labour ward management and high-risk pregnancy care. She is known for structured clinical protocols that ensure maternal and fetal safety.'
        },
        {
          question: 'What pregnancy and maternity services does Dr. Prakruthi provide at Rashtrotthana Hospital?',
          answer: 'Dr. Prakruthi provides comprehensive antenatal care, labour ward management, delivery planning, and fetal monitoring, ensuring safe and well-coordinated maternity care. Her approach emphasises timely decision-making and evidence-based protocols.'
        },
        {
          question: 'Does Dr. Prakruthi manage high-risk pregnancies at Rashtrotthana Hospital, Bangalore?',
          answer: 'Yes, Dr. Prakruthi specialises in high-risk pregnancy management, including conditions such as gestational diabetes, pregnancy-induced hypertension, thyroid disorders, and previous pregnancy complications. Close monitoring helps reduce risks for both mother and baby.'
        },
        {
          question: 'What is labour ward management and why is it important during delivery?',
          answer: 'Labour ward management involves continuous monitoring of the mother and baby during labour, timely interventions, and emergency preparedness. Dr. Prakruthi’s experience ensures safe progression of labour and prompt response to complications.'
        },
        {
          question: 'Are fetal scans and pregnancy monitoring done under Dr. Prakruthi’s care?',
          answer: 'Yes, Dr. Prakruthi oversees fetal scans and pregnancy monitoring to assess the baby’s growth, wellbeing, and placental health. These scans help detect potential issues early and guide delivery planning.'
        },
        {
          question: 'How does Dr. Prakruthi ensure safe delivery outcomes at Rashtrotthana Hospital?',
          answer: 'Dr. Prakruthi follows standardised clinical protocols and multidisciplinary coordination in the labour ward to ensure safe normal delivery or timely intervention when required. This structured approach improves outcomes and patient confidence.'
        },
        {
          question: 'How can I book an appointment with Dr. Prakruthi at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Prakruthi by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OG-1.png',
        'assets/icons/OG-2.png',
        'assets/icons/OG-3.png',
        'assets/icons/OG-4.png',
        'assets/icons/OG-5.png'
      ],
      happyPatients: '7000+'

    },
    {
      name: 'Dr. Ravi T',
      image: 'assets/Doc-Inv-Page/Dr-Ravi-T.png',
      department: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      speciality: 'ONCOLOGY',
      about: 'Dr. Ravi Thippeswamy Senior Medical Oncologist With 17+ years of invaluable experience, Dr. Ravi Thippeswamy is a distinguished Medical Oncologist in Bangalore. He is committed to delivering comprehensive care to his patients and maintains affiliations with several hospitals throughout the city. He completed his MBBS from Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) in 2004, his DNB in Medical Oncology from the National Board of Examination in 2012 and his MD in Pediatrics from the University of Mumbai in 2008.As a member of the Karnataka Medical Council, Dr. Thippeswamy specializes in various aspects of Medical Oncology, including Hemato Oncology and Pediatric Oncology. With 11 years of specialization, he brings a wealth of knowledge and expertise to his practice, ensuring the best possible outcomes for his patients.',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy', 'immuno-oncology'],
      expertise: '17+',
      qualification: 'MBBS, MD, DM',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00',
      date: 'Friday',
      alt: 'Dr. Ravi T | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Ravi Thippeswamy | Medical Oncologist in Bangalore',
      description: 'Dr. Ravi Thippeswamy is a senior oncologist with 17+ years of experience in adult cancers, precision oncology, immuno-oncology & hemato oncology.',
      faqs: [
        {
          question: 'Who is Dr. Ravi T and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Ravi T is an experienced Medical Oncologist at Rashtrotthana Hospital, RR Nagar, Bangalore, specialising in the treatment of adult cancers with a special focus on precision oncology and immuno-oncology. His approach combines advanced cancer therapies with personalised treatment planning.'
        },
        {
          question: 'What types of cancer does Dr. Ravi T treat at Rashtrotthana Hospital?',
          answer: 'Dr. Ravi T treats all adult cancers, including breast cancer, lung cancer, gastrointestinal cancers, genitourinary cancers, and blood-related malignancies. Treatment is tailored based on cancer type, stage, and individual patient factors.'
        },
        {
          question: 'What is precision oncology and how does Dr. Ravi T use it in cancer treatment?',
          answer: 'Precision oncology involves targeted cancer treatment based on genetic and molecular profiling of the tumour. Dr. Ravi T uses this approach to select therapies that are more effective and may cause fewer side effects compared to conventional treatments.'
        },
        {
          question: 'Does Dr. Ravi T provide immunotherapy for cancer at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Ravi T has special expertise in immuno-oncology, which uses the body’s immune system to fight cancer. Immunotherapy may be recommended for selected cancers depending on tumour biology and patient suitability.'
        },
        {
          question: 'When should I consult Dr. Ravi T for cancer evaluation or treatment?',
          answer: 'You should consult Dr. Ravi T if you have a confirmed cancer diagnosis, suspicious biopsy report, persistent symptoms like unexplained weight loss or lumps, or if you are seeking advanced treatment options or a second opinion.'
        },
        {
          question: 'What should patients expect during the first consultation with Dr. Ravi T?',
          answer: 'During the first consultation, Dr. Ravi T reviews medical reports, explains the diagnosis clearly, discusses available treatment options, and outlines a personalised cancer care plan. Patients and families are encouraged to ask questions and understand each step of treatment.'
        },
        {
          question: 'How can I book an appointment with Dr. Ravi T at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Ravi T by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-oncology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ONC-1.png',
        'assets/icons/ONC-2.png',
        'assets/icons/ONC-3.png',
        'assets/icons/ONC-4.png',
        ' assets/icons/ONC-5.svg'
      ],
      happyPatients: '5000+'

    },
    {
      name: 'Dr. Suvarnini Konale',
      image: 'assets/Doc-Inv-Page/Dr-Suvarnini-Konale.png',
      department: 'LIFESTYLE/ YOGA & NATUROPATHY',
      about: 'Her 15 years of experience includes teaching BNYS students and treating thousands of clients through yoga and Naturopathy. She has worked in different hospitals and online fitness firms as a Yoga, Naturopathy and Lifestyle consultant. People from a wide range of socio-economic status and professions, across all age groups, have benefitted from her advice. She follows a holistic approach of lifestyle management and therapy through the principles of Yoga & Naturpathy.',
      speciality: ['YOGA SCIENCE', 'LIFESTYLE MEDICINE'],
      areasOfExpertise: [''],
      expertise: '15',
      qualification: 'BNYS',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Suvarnini Konale | Best Lifestyle Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Suvarnini Konale | Expert in Yoga & Naturopathy Therapy',
      description: 'BNYS doctor with 15 years of experience in yoga, naturopathy and lifestyle therapy, helping patients manage health holistically across all age groups.',
      faqs: [
        {
          question: 'Who is Dr. Suvarnini Konale and what is her role at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Suvarnini Konale is a Yoga and Naturopathy Consultant at Rashtrotthana Hospital, RR Nagar, Bangalore, with over 15 years of experience in holistic health and lifestyle management. She has treated thousands of individuals across all age groups using evidence-based yoga and naturopathy principles.'
        },
        {
          question: 'What health conditions does Dr. Suvarnini Konale treat through yoga and naturopathy?',
          answer: 'Dr. Suvarnini Konale helps manage conditions such as stress, obesity, lifestyle disorders, diabetes, thyroid issues, digestive problems, joint pain, and sleep disturbances. Her treatment focuses on addressing the root cause through lifestyle correction rather than symptom control alone.'
        },
        {
          question: 'How does yoga and naturopathy help in managing chronic lifestyle diseases?',
          answer: 'Yoga and naturopathy support long-term control of chronic conditions by improving metabolism, reducing stress, enhancing immunity, and promoting mind–body balance. Dr. Suvarnini Konale designs personalised plans combining yoga practices, diet guidance, and daily routine modifications.'
        },
        {
          question: 'Can I consult Dr. Suvarnini Konale for stress management and mental wellbeing?',
          answer: 'Yes, Dr. Suvarnini Konale has extensive experience in stress management, anxiety reduction, and mental wellbeing using therapeutic yoga, breathing techniques, and relaxation practices. These methods help improve focus, sleep quality, and emotional balance.'
        },
        {
          question: 'Does Dr. Suvarnini Konale provide lifestyle counselling along with therapy?',
          answer: 'Yes, lifestyle counselling is a core part of her approach, covering diet habits, physical activity, sleep patterns, and work–life balance. Her holistic guidance is suitable for people from diverse professions and age groups.'
        },
        {
          question: 'Is yoga and naturopathy safe for elderly patients and beginners?',
          answer: 'Yes, Dr. Suvarnini Konale customises yoga and naturopathy programs based on age, medical history, and physical ability, making them safe for elderly individuals and beginners. Sessions are designed to be gentle, progressive, and sustainable.'
        },
        {
          question: 'How can I book an appointment with Dr. Suvarnini Konale at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Suvarnini Konale by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''

    },
    {
      name: 'Dr. Vishwanath Sanagoudar',
      image: 'assets/Doc-Inv-Page/Dr-Vishwanth-Sanagoudar.png',
      department: 'PAEDIATRIC & NEONATOLOGY',
      about: 'Dr Vishwanath, Paediatrician, has also done fellowship in Paediatric critical care from IGICH, Bangalore. He is trained in treating sick children requiring ICU stay. He has received Bopaiah award for paper presentation at state Paediatric conference. He has also served as visiting mentor for paediatric critical care training program under ECRP-2, NHM, govt of Karnataka. He has mentored the PICU at KRIMS, Karwar. He has been serving in Rashtrotthana hospital since its inception in Dec 2022 .',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['GENERAL PAEDIATRICS', 'NEWBORN CARE', 'PAEDIATRIC EMERGENCIES & PAEDIATRIC CRITICAL CARE'],
      expertise: '9',
      qualification: 'MBBS, MD, FELLOWSHIP IN PAEDIATRIC INTENSIVE CARE (IGICH)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Vishwanath Sanagoudar | Best Paediatrician and Neonatologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 12,
      title: 'Dr. Vishwanath Sanagoudar | Pediatric & NICU Expert Bangalore',
      description: 'With 9 years of experience, Dr. Vishwanath Sanagoudar specializes in pediatric ICU, newborn care, and child emergencies with fellowship from IGICH.',
      faqs: [
        {
          question: 'Who is Dr. Vishwanath Sanagoudar and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Vishwanath Sanagoudar is an experienced Paediatrician at Rashtrotthana Hospital, RR Nagar, Bangalore, specialising in general paediatrics, newborn care, and paediatric emergencies. He is known for his calm, evidence-based approach to child healthcare.'
        },
        {
          question: 'What paediatric conditions does Dr. Vishwanath Sanagoudar treat at Rashtrotthana Hospital?',
          answer: 'Dr. Vishwanath Sanagoudar treats common childhood illnesses such as fever, infections, respiratory problems, digestive issues, growth concerns, and nutritional deficiencies. He also manages long-term paediatric health and development.'
        },
        {
          question: 'Does Dr. Vishwanath Sanagoudar provide newborn care at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Vishwanath Sanagoudar offers comprehensive newborn care, including feeding guidance, growth monitoring, vaccination support, and early identification of neonatal health issues. Early newborn care plays a key role in healthy development.'
        },
        {
          question: 'When should parents consult Dr. Vishwanath Sanagoudar for paediatric emergencies?',
          answer: 'You should seek immediate consultation if a child has high fever, breathing difficulty, seizures, dehydration, severe infections, or sudden worsening of health. Dr. Vishwanath Sanagoudar is experienced in managing paediatric emergencies and critical care.'
        },
        {
          question: 'Does Dr. Vishwanath Sanagoudar handle paediatric critical care cases at Rashtrotthana Hospital?',
          answer: 'Yes, he is trained in paediatric critical care, managing serious illnesses that require close monitoring and intensive treatment. Care is provided in coordination with advanced hospital support systems to ensure child safety.'
        },
        {
          question: 'Can Dr. Vishwanath Sanagoudar guide parents on child growth, nutrition, and vaccination?',
          answer: 'Yes, Dr. Vishwanath Sanagoudar provides guidance on child growth milestones, nutrition planning, immunisation schedules, and preventive healthcare. This helps parents support their child’s physical and developmental wellbeing.'
        },
        {
          question: 'How can I book an appointment with Dr. Vishwanath Sanagoudar at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Vishwanath Sanagoudar by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''

    },
    {
      name: 'Dr. Niveditha C',
      image: 'assets/Doc-Inv-Page/Dr-Niveditha-C.png',
      department: 'PAEDIATRICS & NEONATOLOGY',
      about: 'Consultation Paediatrician and Neonatologist with expertise in management of Paediatric and Neonates including extreme preterm, birth asphyxia, advanced ventilation and critical interventional procedures.',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['General paediatrics', 'Critical Newborn and Paediatric care', 'Paediatric Nutrition', 'Advanced Neonatology '],
      expertise: '7.5',
      qualification: 'MBBS, MD, Fellowship in Neonatology (NNFI),Early Nutrition Specialist (ENS),Fellowship in Paediatric Nutrition(ongoing)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Niveditha C | Best Pediatrician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 13,
      title: 'Dr. Niveditha C | Pediatric & Neonatal Nutrition Expert',
      description: 'Dr. Niveditha C specializes in neonatology, critical newborn care, and pediatric nutrition with 7.5 years of experience and multiple fellowships in child care.',
      faqs: [
        {
          question: 'Who is Dr. Niveditha C and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Niveditha C is an experienced Paediatrician and Neonatologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in general paediatrics, advanced neonatology, and critical newborn and paediatric care, with a strong focus on evidence-based treatment.'
        },
        {
          question: 'What paediatric conditions does Dr. Niveditha C treat at Rashtrotthana Hospital?',
          answer: 'Dr. Niveditha C manages common childhood illnesses such as fever, infections, respiratory and digestive problems, along with growth and developmental concerns. She also provides ongoing care for children requiring closer medical supervision.'
        },
        {
          question: 'Does Dr. Niveditha C provide advanced newborn and neonatal care?',
          answer: 'Yes, Dr. Niveditha C is trained in advanced neonatology, offering specialised care for premature babies, low birth-weight infants, and newborns with medical complications. Early, expert neonatal care plays a key role in improving long-term outcomes.'
        },
        {
          question: 'When should parents seek critical paediatric or newborn care with Dr. Niveditha C?',
          answer: 'Parents should seek immediate care if a child or newborn shows breathing difficulty, feeding problems, seizures, high fever, lethargy, or sudden health deterioration. Dr. Niveditha C is experienced in handling paediatric and neonatal emergencies.'
        },
        {
          question: 'Can Dr. Niveditha C help with paediatric nutrition and growth concerns?',
          answer: 'Yes, Dr. Niveditha C provides guidance on paediatric nutrition, including feeding practices, weight gain issues, and dietary planning for infants and children. Nutritional counselling is tailored to the child’s age and medical needs.'
        },
        {
          question: 'What makes Dr. Niveditha C’s approach to child care at Rashtrotthana Hospital unique?',
          answer: 'Her approach combines clinical expertise, careful monitoring, and family-centred communication, ensuring parents understand every step of their child’s care. This helps build confidence and supports healthy child development.'
        },
        {
          question: 'How can I book an appointment with Dr. Niveditha C at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Niveditha C by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''

    },
    {
      name: 'Dr. Nikhil Hegde',
      image: 'assets/Doc-Inv-Page/Dr-Nikhil-Hegde.png',
      department: 'ORTHOPEDICS',
      about: 'Specialised training in sports medicine, Arthroplasty and trauma',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Sports Medicine', 'Artgroplasty', 'Arthroscopy & Trauma'],
      expertise: '8+',
      qualification: 'MBBS, MS Orthopaedicss',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30',
      date: 'Monday,Wednesday and Friday',
      alt: 'Dr. Nikhil Hegde | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 6,
      title: 'Dr. Nikhil Hegde | Sports Injury & Trauma Orthopedic Surgeon',
      description: 'Dr. Nikhil Hegde is an orthopedic surgeon with 8+ years of experience, specializing in sports medicine, arthroplasty, arthroscopy, and trauma care.',
      faqs: [
        {
          question: 'Who is Dr. Nikhil Hegde and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Nikhil Hegde is an experienced Orthopaedic Surgeon and Sports Medicine Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in managing sports injuries, joint problems, arthroscopy procedures, and orthopaedic trauma with a focus on restoring mobility and function.'
        },
        {
          question: 'What sports injuries are treated by Dr. Nikhil Hegde at Rashtrotthana Hospital?',
          answer: 'Dr. Nikhil Hegde treats ligament injuries, meniscus tears, muscle injuries, tendon problems, and overuse injuries commonly seen in athletes and active individuals. Treatment plans are designed to help patients return safely to sports and daily activities.'
        },
        {
          question: 'What is arthroscopy and when is it recommended by Dr. Nikhil Hegde?',
          answer: 'Arthroscopy is a minimally invasive keyhole surgery used to diagnose and treat joint problems such as ligament tears and cartilage damage. Dr. Nikhil Hegde recommends arthroscopy when conservative treatments fail to relieve pain or restore joint stability.'
        },
        {
          question: 'Does Dr. Nikhil Hegde perform joint replacement (arthroplasty) surgery in Bangalore?',
          answer: 'Yes, Dr. Nikhil Hegde performs arthroplasty (joint replacement) surgeries for conditions like advanced knee or hip arthritis. These procedures help relieve chronic pain and significantly improve joint movement and quality of life.'
        },
        {
          question: 'Can I consult Dr. Nikhil Hegde for fracture and orthopaedic trauma care?',
          answer: 'Yes, Dr. Nikhil Hegde manages orthopaedic trauma, including fractures caused by accidents, falls, or sports injuries. Timely treatment ensures proper bone healing and prevents long-term complications.'
        },
        {
          question: 'What is the recovery time after arthroscopy or joint surgery with Dr. Nikhil Hegde?',
          answer: 'Recovery depends on the procedure, but arthroscopy usually allows faster recovery, while joint replacement requires structured rehabilitation. Dr. Nikhil Hegde provides clear post-treatment and physiotherapy guidance for safe recovery.'
        },
        {
          question: 'How can I book an appointment with Dr. Nikhil Hegde at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Nikhil Hegde by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-orthopaedics-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/O-1.png',
        'assets/icons/O-2.png',
        'assets/icons/O-3.png',
        'assets/icons/O-4.png',
        'assets/icons/O-5.png'
      ],
      happyPatients: '1000+'

    },
    {
      name: 'Dr. Neelam Saraswat',
      image: 'assets/Doc-Inv-Page/Dr-Neelam-Saraswat.png',
      department: 'OBSTETRICS & GYNECOLOGY',
      about: 'A skilled obstetrician and gynaecologist.MBBS from KMC, Mangalore and DNB from railway hospital kolkata. She  cleared MRCOG (london) and also worked in NHS  (U.K) briefly..she believes that all women should be cared with highest quality of medical care and should be supported all through out their journey...a keen yoga practitioner herself she would also like to explore field of yoga to help women especially pregnant women. She believes training future generation with evidence based protocols and practices is going to have significant impact in coming years.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Pregnancy', 'Adolescent care', 'Integrated medicine Protocols', 'Role of yoga in Women s Health care'],
      expertise: '12+',
      qualification: 'MBBS, DNB, MRCOG(U.K)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 15,
      title: 'Dr. Neelam Saraswat | Expert in High-Risk Pregnancy & Women\'s Health',
      description: 'Dr. Neelam Saraswat is a gynecologist with 12+ years’ experience in high-risk pregnancy, adolescent care, yoga in women’s health, and integrative care.',
      faqs: [
        {
          question: 'Who is Dr. Neelam Saraswat and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Neelam Saraswat is an experienced Obstetrician and Women’s Health Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. She is known for managing high-risk pregnancies, adolescent health concerns, and integrating yoga and lifestyle practices into women’s healthcare.'
        },
        {
          question: 'Does Dr. Neelam Saraswat manage high-risk pregnancies at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Neelam Saraswat has extensive experience in high-risk pregnancy management, including cases with gestational diabetes, hypertension, thyroid disorders, anemia, and previous pregnancy complications. Care focuses on close monitoring and safe maternal–fetal outcomes.'
        },
        {
          question: 'What adolescent health issues are treated by Dr. Neelam Saraswat?',
          answer: 'Dr. Neelam Saraswat provides specialised adolescent care for concerns such as irregular periods, hormonal changes, anemia, nutritional issues, and menstrual pain. Early guidance helps young girls build a strong foundation for long-term reproductive health.'
        },
        {
          question: 'What are integrated medicine protocols in women’s healthcare?',
          answer: 'Integrated medicine protocols combine modern medical treatment with lifestyle, nutrition, and supportive therapies for holistic care. Dr. Neelam Saraswat uses this approach to improve overall wellbeing while managing pregnancy and gynecological concerns safely.'
        },
        {
          question: 'How does yoga help in women’s health and pregnancy care?',
          answer: 'Yoga plays an important role in stress reduction, posture improvement, hormonal balance, and pregnancy comfort. Dr. Neelam Saraswat incorporates yoga-based guidance where appropriate to support both physical and emotional health in women.'
        },
        {
          question: 'When should I consult Dr. Neelam Saraswat for pregnancy or women’s health issues?',
          answer: 'You should consult Dr. Neelam Saraswat if you are planning pregnancy, experiencing high-risk pregnancy symptoms, menstrual irregularities, adolescent health concerns, or looking for holistic women’s healthcare. Early consultation allows better planning and prevention of complications.'
        },
        {
          question: 'How can I book an appointment with Dr. Neelam Saraswat at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Neelam Saraswat by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OG-1.png',
        'assets/icons/OG-2.png',
        'assets/icons/OG-3.png',
        'assets/icons/OG-4.png',
        'assets/icons/OG-5.png'
      ],
      happyPatients: '4000+'

    },
    {
      name: 'Dr. Ashwitha Gundmi',
      image: 'assets/Doc-Inv-Page/Dr-Ashwitha-Gundmi.png',
      department: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Working as a consultant in WMN private Ltd. With MS ObGyn and MRCOG (UK), her qualifications reflect her dedication to patient well-being.  She is an experienced Obstetrics and gynaecology Consultant with expertise in managing various pregnancy-related disorders, including medical, genetic conditions, promoting vaginal birth to ensure optimal maternal and foetal health.She is a Gynaecologist with expertise in colposcopy for early detection and intervention of cervical abnormalities, awareness about cervical cancer vaccination and cervical screening, gynaecological surgeries including Minimally Invasive Surgeries including Laparoscopy and Hysteroscopy. Focusing on improving patients\' quality of life by addressing diverse gynaecological conditions.Has worked as faculty in medical College with active participation in research activities and academics of UG and PG students. Played a key role in medical camps and health awareness programmes .Believes in Evidence based practice. Is excellent in verbal and written communication. ',
      areasOfExpertise: ['High Risk Obstetrics', 'Protocol based management', 'Gynaecological Surgeries - MIS', 'Fertility Related issues', 'Family planning & Contraception'],
      expertise: '9+',
      qualification: 'MBBS, MS OBG, MRCOG(London)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 17,
      title: 'Dr. Ashwitha Gundmi | High-Risk Pregnancy & MIS Specialist',
      description: 'Dr. Ashwitha Gundmi is an experienced gynecologist skilled in high-risk obstetrics, MIS surgeries, cervical care, and fertility solutions.',
      faqs: [
        {
          question: 'Who is Dr. Ashwitha Gundmi and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Ashwitha Gundmi is an experienced Obstetrician and Gynaecologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She is known for managing high-risk pregnancies, performing minimally invasive gynaecological surgeries, and providing protocol-based women’s healthcare.'
        },
        {
          question: 'Does Dr. Ashwitha Gundmi manage high-risk pregnancies at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Ashwitha Gundmi specialises in high-risk obstetrics, including pregnancies complicated by diabetes, hypertension, thyroid disorders, previous pregnancy complications, and advanced maternal age. Her care focuses on close monitoring and safe maternal–fetal outcomes.'
        },
        {
          question: 'What is protocol-based pregnancy and gynaecology management?',
          answer: 'Protocol-based management follows standardised, evidence-based clinical guidelines to ensure safe and consistent care. Dr. Ashwitha Gundmi uses this approach to minimise risks and improve outcomes during pregnancy and gynaecological treatment.'
        },
        {
          question: 'What gynaecological surgeries does Dr. Ashwitha Gundmi perform?',
          answer: 'Dr. Ashwitha Gundmi performs minimally invasive (MIS) gynaecological surgeries, including laparoscopic procedures for uterine, ovarian, and pelvic conditions. These techniques offer smaller incisions, less pain, and faster recovery.'
        },
        {
          question: 'Can I consult Dr. Ashwitha Gundmi for fertility-related issues?',
          answer: 'Yes, Dr. Ashwitha Gundmi evaluates and treats fertility-related concerns, including irregular cycles, ovulation issues, and hormonal imbalances. She provides personalised guidance and treatment planning based on individual needs.'
        },
        {
          question: 'Does Dr. Ashwitha Gundmi provide family planning and contraception counselling?',
          answer: 'Yes, she offers comprehensive family planning and contraception services, helping women choose suitable birth-control options based on health, lifestyle, and future pregnancy plans. Counselling ensures informed and safe decision-making.'
        },
        {
          question: 'How can I book an appointment with Dr. Ashwitha Gundmi at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Ashwitha Gundmi by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OG-1.png',
        'assets/icons/OG-2.png',
        'assets/icons/OG-3.png',
        'assets/icons/OG-4.png',
        'assets/icons/OG-5.png'
      ],
      happyPatients: '10000+'

    },
    {
      name: 'Dr. Vinita Udupa',
      image: 'assets/Doc-Inv-Page/Dr-Vinita-Udupa.png',
      department: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Vinita Udupa is an obstetrician specialised in Maternal and Fetal medicine. She has been trained in prestigious institutions like JIPMER Pondicherry, CMC Vellore and Fernandez hospital, Hyderabad. She believes that every pregnant woman and her fetus deserve high standards of care which is possible by practicing evidence based medicine. Dr. Vinita was the topper of OBG in MBBS. She also has a paper publication and several presentations in National and international conferences to her credit.',
      areasOfExpertise: ['High Risk Pregnancy', ' obstetric medicine', 'fetal medicine'],
      expertise: '10+',
      qualification: 'MBBS, MS, DNB, FNB, MRCOG(UK)',
      time: '11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10',
      date: 'Tuesday',
      alt: 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Vinita Udupa | High-Risk Pregnancy & Fetal Medicine Expert',
      description: 'Dr. Vinita Udupa is an expert in maternal and fetal medicine, specializing in high-risk pregnancies and evidence-based obstetric care.',
      faqs: [
        {
          question: 'Who is Dr. Vinita Udupa and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Vinita Udupa is an experienced Obstetrician and Fetal Medicine Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. She is known for managing high-risk pregnancies and complex medical conditions during pregnancy with a strong focus on maternal and fetal safety.'
        },
        {
          question: 'Does Dr. Vinita Udupa treat high-risk pregnancies at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Vinita Udupa specialises in high-risk pregnancy management, including cases involving diabetes, hypertension, thyroid disorders, heart disease, and previous pregnancy complications. Close monitoring helps reduce risks and improve pregnancy outcomes.'
        },
        {
          question: 'What is obstetric medicine and how does Dr. Vinita Udupa help pregnant women with medical conditions?',
          answer: 'Obstetric medicine focuses on managing medical disorders during pregnancy. Dr. Vinita Udupa treats conditions such as anemia, hypertension, diabetes, and autoimmune disorders while ensuring the safety of both mother and baby.'
        },
        {
          question: 'What fetal medicine services are provided by Dr. Vinita Udupa at Rashtrotthana Hospital?',
          answer: 'Dr. Vinita Udupa provides advanced fetal medicine services, including detailed fetal assessments, growth monitoring, and evaluation of fetal wellbeing. Early detection helps guide pregnancy care and delivery planning.'
        },
        {
          question: 'When should a pregnant woman consult Dr. Vinita Udupa?',
          answer: 'You should consult Dr. Vinita Udupa if you have a high-risk pregnancy, abnormal scan findings, existing medical illness, or concerns about fetal growth and development. Early specialist care helps prevent complications.'
        },
        {
          question: 'How does Dr. Vinita Udupa ensure safe outcomes in complex pregnancies?',
          answer: 'Dr. Vinita Udupa follows evidence-based protocols and multidisciplinary coordination, ensuring timely interventions and continuous monitoring throughout pregnancy. This structured approach improves safety for both mother and baby.'
        },
        {
          question: 'How can I book an appointment with Dr. Vinita Udupa at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Vinita Udupa by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OG-1.png',
        'assets/icons/OG-2.png',
        'assets/icons/OG-3.png',
        'assets/icons/OG-4.png',
        'assets/icons/OG-5.png'
      ],
      happyPatients: '4000+'

    },
    {
      name: 'Dr. Anusha Mutalik Desai',
      image: 'assets/Doc-Inv-Page/Dr-Anusha-Mutalik-Desai.png',
      department: 'Homeopathy',
      speciality: 'HOMEOPATHY',
      about: 'With 12+ years of experience and strong foundation in homeopathic principles, I integrate classical homeopathy with modern insights to deliver personalized care.I believe in treating the whole person, not just the symptoms, to achieve optimal wellness.My goal is to educate and inspire patients to embrace a holistic lifestyle, promoting long-term health and wellness.',
      areasOfExpertise: ['Hypothyroidism', 'DM', 'HTN', 'Gastritis ', 'Haemorrhoids', 'Migraine', 'Anxiety disorders', 'Depression', 'Asthma', 'PCOD', 'Rheumatoid arthritis'],
      expertise: ' 12+',
      qualification: 'BHMS, MD (HOM)',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Anusha Mutalik Desai | Best Homeopathy Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 28,
      title: 'Dr. Anusha Mutalik Desai | Best Homeopathy Specialist ',
      description: 'Dr. Anusha Desai blends classical homeopathy with modern care to treat conditions like hypothyroidism, PCOD, asthma, and mental wellness.',
      faqs: [
        {
          question: 'Who is Dr. Anusha Mutalik Desai and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Anusha Mutalik Desai is an experienced Physician and Internal Medicine Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. She manages a wide range of adult medical conditions with a holistic, patient-centred approach focused on long-term health.'
        },
        {
          question: 'What chronic medical conditions does Dr. Anusha Mutalik Desai treat at Rashtrotthana Hospital?',
          answer: 'Dr. Anusha Mutalik Desai treats diabetes (DM), hypertension (HTN), hypothyroidism, PCOD, rheumatoid arthritis, asthma, and gastritis. Her care focuses on accurate diagnosis, medication optimisation, and lifestyle modification.'
        },
        {
          question: 'Can I consult Dr. Anusha Mutalik Desai for thyroid and hormonal problems like hypothyroidism and PCOD?',
          answer: 'Yes, Dr. Anusha Mutalik Desai has extensive experience in managing hypothyroidism and PCOD, including symptom control, hormonal balance, and long-term follow-up. Early treatment helps prevent complications such as weight gain, fatigue, and menstrual irregularities.'
        },
        {
          question: 'Does Dr. Anusha Mutalik Desai treat anxiety, depression, and migraine?',
          answer: 'Yes, she manages anxiety disorders, depression, and migraine with a combination of medical treatment, counselling guidance, and lifestyle support. Early intervention helps improve daily functioning and quality of life.'
        },
        {
          question: 'Is treatment available for piles (haemorrhoids) and digestive issues like gastritis?',
          answer: 'Dr. Anusha Mutalik Desai evaluates and treats haemorrhoids and gastritis, focusing on symptom relief, dietary advice, and preventing recurrence. Patients are guided on when medical management is sufficient and when referral is needed.'
        },
        {
          question: 'Can Dr. Anusha Mutalik Desai help manage asthma and long-term breathing problems?',
          answer: 'Yes, she provides ongoing care for asthma, including medication planning, trigger control, and monitoring to prevent frequent attacks. Proper asthma management helps maintain normal daily activity.'
        },
        {
          question: 'How can I book an appointment with Dr. Anusha Mutalik Desai at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Anusha Mutalik Desai by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/homeopathy-treatment-bangalore',
      expertiseIcons: [
        'assets/icons/HOM-1.png',
        'assets/icons/HOM-2.png',
        'assets/icons/HOM-3.png',
        'assets/icons/HOM-4.png',
        'assets/icons/HOM-5.png'
      ],
      happyPatients: '2000+'

    },
    {
      name: 'Dr. Ajay N',
      image: 'assets/Doc-Inv-Page/Dr-Ajay-N.png',
      department: 'GASTRO SCIENCES',
      speciality: 'GASTRO SCIENCES',
      about: 'Dr. Ajay N is a dedicated surgeon specializing in gastrosciences, known for their expertise and compassionate care. With years of experience, Dr. Ajay N has mastered advanced surgical techniques, focusing on gastrointestinal disorders and innovative treatment approaches. Their commitment to patient outcomes is evident in their meticulous attention to detail and ability to foster trust with patients and families. Outside the operating room, Dr. Ajay N participates in community outreach programs, promoting awareness of gastrointestinal health. Dr. Ajay N continues to make significant impacts in the lives of those they serve.',
      areasOfExpertise: ['Laparoscopic surgery', 'Proctology', 'General Surgery'],
      qualification: 'MBBS, MS(General Surgery)',
      expertise: ' 4',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Ajay N | Best Gastro Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      title: 'Dr. Ajay N | Best Gastro Surgeon in Bangalore ',
      description: 'Dr. Ajay N is a skilled gastro surgeon in Bangalore specializing in laparoscopic surgery, proctology, and GI care with a patient-first approach.',
      departmentSlug: '',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''
    },
    {
      name: 'Dr. Varsha P',
      image: 'assets/Doc-Inv-Page/Dr-Varsha-P.png',
      department: 'LIFESTYLE MEDICINE',
      speciality: 'LIFESTYLE MEDICINE',
      qualification: 'BAMS, MD, YIC',
      about: "As a dedicated Ayurveda doctor with four years of experience as a Lifestyle Consultant, I specialise in Integrating traditional Ayurvedic principles with modern wellness practices. My qualifications include a Bachelor of Ayurvedic Medicine and Surgery (BAMS), a Master's Degree in Ayurveda (MD) and certification as a Yoga Instructor (YIC). I offer personalised lifestyle and wellness consultations, focusing on holistic approaches to health that emphasise diet, lifestyle modifications and natural therapies. My goal is to empower individuals to achieve balance and well-being through tailored Ayurvedic solutions and mindful living. Passionate about promoting sustainable health practices, I'm committed to help lead healthier lives by aligning their daily habits with their unique constitutional needs.",
      areasOfExpertise: [
        'Lifestyle diseases like Diabetes, Hypertension, Thyroid disorders, etc.',
        'Preventive measures for all diseases',
        'Healthy lifestyle guidelines, Diet counselling.'
      ],
      expertise: '7+',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Varsha P | Best Yoga & Lifestyle Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 23,
      title: 'Dr. Varsha P | Ayurvedic Lifestyle Doctor in Bangalore',
      description: 'Dr. Varsha P offers Ayurvedic lifestyle care for diabetes, hypertension, thyroid disorders, diet counselling & preventive health in Bangalore.',
      departmentSlug: '/specialities/lifestyle-medicine-bangalore',
      expertiseIcons: [
        'assets/icons/LIFE-1.png',
        'assets/icons/LIFE-2.png',
        'assets/icons/LIFE-3.png',
        'assets/icons/LIFE-4.png',
        'assets/icons/LIFE-5.png'
      ],
      faqs: [
        {
          question: 'Who is Dr. Varsha P and what is her specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Varsha P is a Lifestyle Medicine and Ayurveda Specialist at Rashtrotthana Hospital, Bangalore, with 7+ years of experience in managing lifestyle-related health conditions. She combines Ayurvedic principles, diet counselling, and yoga-based approaches to support long-term wellness.'
        },
        {
          question: 'Can Dr. Varsha P help with diabetes, hypertension, and thyroid disorders at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Varsha P provides lifestyle-based management for diabetes, high blood pressure, thyroid disorders, and other metabolic conditions. Her approach focuses on diet changes, daily routine corrections, and natural therapies to improve overall health.'
        },
        {
          question: 'What lifestyle diseases are commonly treated by Dr. Varsha P in Bangalore?',
          answer: 'Dr. Varsha P treats lifestyle-related conditions such as diabetes, obesity, hypertension, thyroid imbalance, and stress-related disorders. Treatment plans are designed to improve metabolism, energy levels, and overall quality of life.'
        },
        {
          question: 'Does Dr. Varsha P provide diet counselling and preventive health guidance?',
          answer: 'Yes, Dr. Varsha P offers personalised diet counselling and preventive lifestyle guidance based on Ayurvedic principles. The goal is to prevent disease progression and support sustainable, long-term health habits.'
        },
        {
          question: 'Is yoga and natural therapy included in treatment with Dr. Varsha P?',
          answer: 'As a certified Yoga Instructor (YIC), Dr. Varsha P integrates yoga, breathing techniques, and natural therapies into her treatment plans. These methods help improve stress levels, metabolism, and overall physical and mental wellbeing.'
        },
        {
          question: 'When should I consult Dr. Varsha P for lifestyle or preventive health care?',
          answer: 'You should consult Dr. Varsha P if you have early-stage lifestyle diseases, weight issues, thyroid imbalance, fatigue, or stress-related symptoms. Early lifestyle correction can help prevent long-term complications.'
        },
        {
          question: 'Why choose Dr. Varsha P at Rashtrotthana Hospital for lifestyle medicine?',
          answer: 'Dr. Varsha P brings 7+ years of experience and a holistic approach that combines Ayurveda, diet counselling, and yoga-based wellness. At Rashtrotthana Hospital, patients receive structured, preventive, and natural lifestyle care under expert guidance.'
        },

      ],
      happyPatients: '2000+'
    },

    {
      name: 'Dr. Rohith K. R',
      image: 'assets/Doc-Inv-Page/Dr-Rohith-K-R.png',
      department: 'AYURVEDA',
      speciality: 'AYURVEDA',
      about: 'Dr. Rohit K. R is graduate from P N Panicker Souhruda Ayurveda Medical College, Kerala. He has one year experience at HOUSE SURGEON.',
      areasOfExpertise: ['Ayurveda'],
      expertise: '7+',
      qualification: 'BAMS',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Rohith K. R | Ayurveda doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 39,
      title: 'Dr. Rohith K. R | Ayurveda Doctor in Bangalore',
      description: 'Dr. Rohith K. R is an Ayurveda doctor with 3+ years of experience, offering holistic treatments for wellness and lifestyle diseases in Bangalore.',
      faqs: [
        {
          question: 'Who is Dr. Rohith K. R and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Rohith K. R is a qualified Ayurveda Physician at Rashtrotthana Hospital, RR Nagar, Bangalore, with training in traditional Ayurvedic practice, wellness, and holistic disease management. He focuses on natural treatment strategies to support long-term health and wellbeing.'
        },
        {
          question: 'What health conditions does Dr. Rohith K. R treat at Rashtrotthana Hospital?',
          answer: 'Dr. Rohith K. R treats a range of chronic and lifestyle-related conditions such as stress, digestive disorders, chronic pain, arthritis, skin issues, and metabolic imbalance using Ayurvedic therapies tailored to individual constitution and symptoms.'
        },
        {
          question: 'Can Dr. Rohith K. R help with digestive problems and gastritis using Ayurveda?',
          answer: 'Yes, Dr. Rohith K. R provides Ayurvedic care for digestive problems including gastritis, bloating, and irregular bowel habits, combining herbal formulations, diet advice, and lifestyle changes to restore digestive balance and comfort.'
        },
        {
          question: 'Is Dr. Rohith K. R experienced in managing stress, anxiety, and lifestyle-related health concerns?',
          answer: 'Dr. Rohith K. R uses Ayurvedic lifestyle counselling, therapeutic herbs, and mind–body approaches to help manage stress, anxiety, and other lifestyle-related issues, promoting overall wellness in coordination with daily habits.'
        },
        {
          question: 'What Ayurvedic treatments are available at Rashtrotthana Hospital with Dr. Rohith K. R?',
          answer: 'At Rashtrotthana Hospital, Dr. Rohith K. R offers herbal therapies, panchakarma procedures, personalised diet plans, and lifestyle guidance aimed at addressing the root cause of illness and supporting natural healing.'
        },
        {
          question: 'How long does it take to see results from Ayurvedic treatment with Dr. Rohith K. R?',
          answer: 'Results vary by condition and individual factors, but many patients notice gradual improvement within a few weeks of consistent treatment and lifestyle changes, with deeper benefits often unfolding with ongoing care.'
        },
        {
          question: 'How can I book an appointment with Dr. Rohith K. R at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Rohith K. R by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or using the online appointment options on the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/ayurvedic-treatment-bangalore',
      expertiseIcons: [
        'assets/icons/AY-1.png',
        'assets/icons/AY-2.png',
        'assets/icons/AY-3.png',
        'assets/icons/AY-4.png',
        'assets/icons/AY-5.png'
      ],
      happyPatients: '3000+'

    },
    // {
    //   name: 'Dr. Alekhya R',
    //   image: 'assets/doctor-40.png',
    //   department: 'AYURVEDA',
    //   speciality: 'AYURVEDA',
    //   qualification:'BAMS',
    //   about: 'Dr. Alekhya R is graduate from INDIAN INSITUTE OF AYURVEDIC MEDICINE AND RESEARCH in 2021',
    //   areasOfExpertise: ['Gastric related issues','Sinusitis, Allergic rhinitis','Vatavyadi'],
    //   expertise: 'Years of Experience: 2',
    //   time:'09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
    //   date:'Monday-Saturday'
    // },
    {
      name: 'Dr. Narendranath A',
      image: 'assets/Doc-Inv-Page/Dr-Narendranath-A.png',
      department: 'Consultant, ENT Head & Neck surgery',
      speciality: 'ENT SPECIALITY',
      about: 'Dr. Narendranath A is graduate from RAJAH MUTHIAH MEDICAL COLLEGE,TAMIL NADU in 2010. He completed his post graduation MS (ENT) from vijayanagar insititute of medical sciences, bellary in 2015.Otology/ tympanoplasty and mastoidectomy surgeries, myringotomy and grommet surgery, FESS (nasal polyp surgery)/sinus surgeries, nasal septum correction surgery, Adenoid and tonsil surgeries, surgeries related to vocal cords (voice box), thyroid and parotid surgeries, tracheostomy.   ',
      areasOfExpertise: ['Otology and rhinology', 'Otology/ tympanoplasty', 'Mastoidectomy surgeries', 'Myringotomy and grommet surgery', 'Thyroid and parotid surgeries', 'FESS (nasal polyp surgery)/sinus surgeries', 'Nasal septum correction surgery', 'Adenoid and tonsil surgeries, surgeries related to vocal cords (voice box)', '* Tracheostomy'],
      expertise: '11+',
      qualification: 'MBBS, MS(ENT)',
      time: '13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30',
      date: 'Monday,Wednesday,Thursday and Friday',
      alt: 'Dr. Narendranath A | Best ENT Doctor in Bangalore | Rashtrotthana Hospita | Rajarajeshwari Nagar Bangalore',
      id: 31,
      title: 'Dr. Narendranath A | ENT Head & Neck Surgeon Bangalore',
      description: 'Dr. Narendranath A is an ENT and Head & Neck Surgeon with 10+ years of experience in advanced ENT surgeries, sinus, voice box, and thyroid procedures.',
      faqs: [
        {
          question: 'Who is Dr. Narendranath A and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Narendranath A is an experienced ENT (Otorhinolaryngology) Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in otology and rhinology, managing complex ear, nose, throat, and airway conditions with advanced surgical care.'
        },
        {
          question: 'What ear surgeries does Dr. Narendranath A perform at Rashtrotthana Hospital?',
          answer: 'Dr. Narendranath A performs tympanoplasty, mastoidectomy, myringotomy, and grommet insertion surgeries for chronic ear infections and hearing problems. These procedures aim to control infection, restore hearing, and prevent complications.'
        },
        {
          question: 'Does Dr. Narendranath A treat sinus problems and nasal polyps?',
          answer: 'Yes, Dr. Narendranath A performs FESS (functional endoscopic sinus surgery) for chronic sinusitis and nasal polyps not responding to medication. He also treats nasal blockage through nasal septum correction (septoplasty) to improve breathing.'
        },
        {
          question: 'When is nasal septum correction surgery recommended by Dr. Narendranath A?',
          answer: 'Nasal septum correction is recommended for patients with deviated nasal septum causing breathing difficulty, snoring, recurrent sinus infections, or headaches. Surgery helps restore proper airflow and nasal function.'
        },
        {
          question: 'Does Dr. Narendranath A perform tonsil, adenoid and voice box surgeries?',
          answer: 'Yes, he performs adenoidectomy, tonsillectomy, and surgeries related to the vocal cords (voice box) for conditions like recurrent throat infections, sleep-related breathing issues, and voice disorders. Early treatment helps prevent long-term complications.'
        },
        {
          question: 'Are thyroid, parotid, and tracheostomy procedures handled by Dr. Narendranath A?',
          answer: 'Dr. Narendranath A is experienced in thyroid and parotid gland surgeries, as well as tracheostomy procedures for airway management in emergency or long-term breathing conditions. These surgeries require precise planning and specialised ENT expertise.'
        },
        {
          question: 'How can I book an appointment with Dr. Narendranath A at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Narendranath A by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-ent-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ENT-1.png',
        'assets/icons/ENT-2.png',
        'assets/icons/ENT-3.png',
        'assets/icons/ENT-4.png',
        'assets/icons/ENT-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Dr. Harshith K. S",
      image: "assets/Dr-Harshith-K-S-doc-page.png",
      department: 'Internal Medicine',
      speciality: 'INTERNAL MEDICINE',
      about: "Dr. Harshith K. S is an experienced consultant physician specializing in internal medicine, with nearly two decades of expertise in comprehensive diagnosis and management of adult medical conditions. His clinical interests include managing complex cases, diabetes care and diabetic foot risk assessment, with his thesis presented at a national diabetic conference. He is known for his commitment to patient care, evidence-based practice and dedication to continuous learning in general medicine.",
      areasOfExpertise: ['Hand injuries', 'Ganglion cyst', 'Hemochromatosis', 'Toxic hepatitis', 'Marfan syndrome', 'Vaccination/immunization', 'Hyperhidrosis', 'Capsule endoscopy', 'MMR vaccination'],
      expertise: "20+",
      qualification: "MBBS, MD in General Medicine ",
      time: "",
      date: "",
      id: 74,
      alt: 'Dr. Harshith K. S | Best Internal Medicine Doctor in Bangalore | Rashtrotthan Hospital',
      ttitle: 'Dr. Harshith K.S. | Consultant Physician in Bangalore',
      description: 'Book a consultation with Dr. Harshith K.S., expert in internal medicine, diabetes care and adult chronic disease management in Bangalore.',
      faqs: [
        {
          question: 'Who is Dr. Harshith K S and what is his specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Harshith K S is a General Physician at Rashtrotthana Hospital, RR Nagar, Bangalore, with experience in managing a wide range of medical conditions, preventive care, and vaccinations. His practice combines clinical evaluation with evidence-based treatment and patient education.'
        },
        {
          question: 'Can I consult Dr. Harshith K S for hand injuries and ganglion cysts?',
          answer: 'Yes, Dr. Harshith K S evaluates and manages hand injuries, including soft-tissue injuries and ganglion cysts, and guides patients on conservative care or further intervention when required. Early assessment helps prevent long-term discomfort or functional limitation.'
        },
        {
          question: 'Does Dr. Harshith K S provide vaccination and immunization services at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Harshith K S offers vaccination and immunization services, including MMR vaccination, following recommended safety protocols. He also counsels patients and families on vaccine schedules, benefits, and possible side effects.'
        },
        {
          question: 'Can Dr. Harshith K S treat excessive sweating (hyperhidrosis)?',
          answer: 'Yes, Dr. Harshith K S evaluates hyperhidrosis (excessive sweating) to identify underlying causes and provides medical management options. Treatment focuses on symptom control and improving daily comfort and quality of life.'
        },
        {
          question: 'Does Dr. Harshith K S manage rare or metabolic conditions like Marfan syndrome and hemochromatosis?',
          answer: 'Yes, Dr. Harshith K S is experienced in the evaluation and long-term medical management of conditions such as Marfan syndrome and hemochromatosis. He emphasizes regular monitoring, lifestyle guidance, and coordinated care when specialist input is required.'
        },
        {
          question: 'When is capsule endoscopy advised, and does Dr. Harshith K S handle such cases?',
          answer: 'Capsule endoscopy is advised for evaluating unexplained gastrointestinal symptoms or bleeding when routine tests are inconclusive. Dr. Harshith K S assesses patients for suitability and coordinates appropriate diagnostic pathways.'
        },
        {
          question: 'Can I consult Dr. Harshith K S for liver-related conditions like toxic hepatitis?',
          answer: 'Yes, Dr. Harshith K S treats toxic hepatitis and other liver-related conditions, focusing on identifying triggers, medical treatment, and recovery monitoring. Timely care helps prevent complications and supports liver healing.'
        }
      ],
      departmentSlug: '/specialities/internal-medicine-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/IM-1.png',
        'assets/icons/IM-2.png',
        'assets/icons/IM-3.png',
        'assets/icons/IM-4.png',
        'assets/icons/IM-5.png'
      ],
      happyPatients: '4000+'

    },
    // {
    //   name: 'Dr. Ashika Bagaria',
    //   image: 'assets/doctor-34.png',
    //   department: 'ENT and head and neck',
    //   speciality: 'ENT SPECIALITY',
    //   about: 'Dr Ashika Bagaria has completed her MBBS from Rajarajeshwari medical college and Hospital in 2019 and then pursued her MS in Otolarhinoyngology from Kempegowda Institute of Medical Sciences. She also has a specialised expertise in diagnosing and managing conditions related to vertigo and balance disorder which is crucial for comprehensive ENT care.',
    //   areasOfExpertise: ['Vertigo related disorders', 'Septoplasty', 'fess', 'tympanolasty', 'tracheostomy', 'Adenoidectomy', 'tonsillectomy'],
    //   expertise: 'Years of Experience: 4',
    //   qualification:'MBBS, MS(ENT)',
    //   time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00',
    //   date:'Tuesday,Thursday and Saturday'
    // },
    // {
    //   name: 'Dr. Harshitha R',
    //   image: 'assets/doctor-46.png',
    //   department: 'Consultant Internal Medicine',
    //   about: 'Internal medicine specialist. Finished undergraduation from Sri devaraj urs medical college with a university gold medal and postgraduate from JSS University. A strong believer of prevention is better than cure with keen interest in lifestyle diseases , diabetes , obesity , women health and adult vaccination. Good communication skills with efficient patient education skills. Holistic approach towards  patient\'s health and medical conditions.',
    //   speciality: 'INTERNAL MEDICINE',
    //   areasOfExpertise: ['Diabetes, dyslipidemia and other metabolic diseases','Thyroid disorders',' Hypertension','  Infectious diseases','Adult vaccination','Diabetes and life style patient education'],
    //   expertise: 'Years of Experience: 3',
    //   qualification:'MBBS, MD',
    //   time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
    //   date:'Sunday'
    // },

    // {
    //   name: 'Dr. Bhavya',
    //   image: 'assets/Doc-Inv-Page/Dr-Bhavya.png',
    //   department: 'Consultant Internal Medicine',
    //   about: 'Dr. Bhavya N is a consultant physician and Diabetologist with practicing experience of 7 years in the field of Internal Medicine. She is a gold medalist and state rank holder in MD Internal medicine in RGUHS. She has sound knowledge in her field and practices evidence-based medicine providing patient centred care. Being a female physician she has an extra mile of interest in women and family health care. She has keen interest in research and is updated on newer aspects and recent advancements in treatment modalities.',
    //   speciality: 'INTERNAL MEDICINE',
    //   areasOfExpertise: ['Diabetes', 'Diabetes Reversal', 'Thyroid related illness', 'Blood related disorders', 'Critical illness', 'Hypertension', 'Infectious disease'],
    //   expertise: 'Years of Experience: 9',
    //   qualification: 'MBBS, MD',
    //   time: '09:00-09:20,09:20-09:40,09:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
    //   date: 'Monday-Saturday',
    //   alt: 'Dr. Bhavya | Best Diabetologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
    //   id: 2,
    //   title:'Dr. Bhavya N | Consultant Physician & Diabetologist Bangalore',
    //   description:'Dr. Bhavya N is a gold medalist physician and diabetologist in Bangalore, experienced in diabetes reversal, thyroid care, and internal medicine.'
    // },

    {
      name: 'Dr. Shamantha S',
      image: 'assets/Doc-Inv-Page/Dr-Shamantha-S.png',
      department: 'LIFESTYLE MEDICINE',
      about: 'Dr. Shamantha S is a Lifestyle Medicine practitioner at Rashtrotthana Hospital, Bangalore, with a BAMS qualification and 6 years of clinical experience. She focuses on managing lifestyle-related health concerns through natural, preventive, and holistic approaches. Her treatment philosophy combines Ayurvedic principles, diet guidance, and daily routine corrections to help patients achieve sustainable health and long-term wellness.',
      speciality: 'LIFESTYLE MEDICINE',
      areasOfExpertise: ['Lifestyle diseases'],
      qualification: 'BAMS',
      expertise: '6+',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Shamantha S | Lifestyle Specialist in Bangalore | Rashtrotthana Hospita | Rajarajeshwari Nagar Bangalore',
      id: 24,
      title: 'Dr. Shamantha S | Lifestyle Medicine Specialist Bangalore',
      description: 'Dr. Shamantha S is an Ayurveda and lifestyle medicine doctor in Bangalore offering holistic care through diet, preventive wellness, and natural therapies.',
      departmentSlug: '/specialities/lifestyle-medicine-bangalore',
      expertiseIcons: [
        'assets/icons/LIFE-1.png',
        'assets/icons/LIFE-2.png',
        'assets/icons/LIFE-3.png',
        'assets/icons/LIFE-4.png',
        'assets/icons/LIFE-5.png'
      ],
 faqs: [
        {
          question: 'Who is Dr. Shamantha S and what is her specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Shamantha S is a Lifestyle Medicine doctor at Rashtrotthana Hospital with 6 years of experience in managing lifestyle related health conditions. She focuses on preventive care using Ayurvedic principles, diet, and routine modifications.'
        },
        {
          question: 'What conditions does Dr. Shamantha S treat at Rashtrotthana Hospital?',
          answer: 'Dr. Shamantha S treats lifestyle diseases such as diabetes, hypertension, thyroid disorders, obesity, and stress related conditions. Her approach aims to correct the root causes through lifestyle and dietary changes.'
        },
        {
          question: 'Dr. Shamantha S is a Lifestyle Medicine practitioner at Rashtrotthana Hospital, Bangalore?',
          answer: 'with a BAMS qualification and 6 years of clinical experience. She focuses on managing lifestyle related health concerns through natural, preventive, and holistic approaches. Her treatment philosophy combines Ayurvedic principles, diet guidance, and daily routine corrections to help patients achieve sustainable health and long-term wellness.'
        },
      ],

      happyPatients: '2000+'
    },
    // {
    //   name: 'Dr. Kavyashree Kulamarva',
    //   image: 'assets/Doc-Inv-Page/Dr-Kavyashree-Kulamarva.png',
    //   department: 'Ayurvedic Psychiatry Consultant',
    //   about: 'Dr. Kavyashree is a seasoned researcher specializing in Ayurveda, Integrative Medicine and Neurology. With a robust background in clinical practice and research, Doctor has published several papers in reputed international journals. She served as a Senior Resident at the National Institute of Mental Health and Neurosciences (NIMHANS) for 3.5 years, contributing significantly to mental health and neurological research. Additionally, she worked as a Senior Research Fellow at the Central Council for Research in Ayurvedic Sciences (CCRAS), which involved several community health surveys and medical camps. Her work aims to bridge ancient wisdom with contemporary science for holistic patient care.',
    //   speciality: 'AYURVEDA',
    //   qualification: 'MD, PDF',
    //   areasOfExpertise: [' Anxiety disorder and Depression', 'Child psychiatric disorders (ASD, ADHD)', 'Add on Ayurveda for Schizophrenia', 'Motor Neuron Disease', 'Parkinson s disease', 'Muscular dystrophy', 'Stroke rehab', 'Multiple Sclerosis', 'Dementia'],
    //   expertise: 'Years of Experience: 6',
    //   time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:10',
    //   date: 'Monday-Saturday',
    //   alt: 'Dr. Kavyashree Kulamarva | Ayurvedic Psychiatry Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
    //   id: 40,
    //   title: 'Dr. Kavyashree Kulamarva | Ayurvedic Psychiatry Expert',
    //   description: 'Dr. Kavyashree Kulamarva is an Ayurvedic Psychiatry Consultant with expertise in integrative care for mental health and neurological disorders.'
    // },
    {
      name: 'Ms. Archana Karthick',
      image: 'assets/Doc-Inv-Page/Ms-Archana-Karthick.png',
      department: 'Senior Clinical Dietician',
      about: ' Ms. Archana Karthick has more than 19+ years of experience in the field of Clinical Nutrition, dietetics and food service management. Prior Joining to Jaydev memorial Rashtrotthana Hospital she worked as Clinical Nutrition consultant in Cloudnine Hospital Kanakapura Road Bangalore.  Earlier to this she has over 10 years of experience from UAE -as Dubai health authority licensed Paediatric Nutrition & Dietetics from JCI accredited hospital -Al Jalila children’s speciality hospital and as clinical Nutrition & Dietician International Modern Maternity Hospital Dubai, UAE. She also holds life membership of Indian Dietetics association and IAPEN India Association for Parenteral and Enteral nutrition',
      speciality: 'NUTRITION & DIETETICS',
      areasOfExpertise: ['Prenatal and Post-natal Nutrition', 'Paediatric and geriatric nutrition', 'Enteral nutrition ', 'Diabetic management'],
      expertise: ' 19+',
      qualification: `
      M.Sc. in Dietetics and Food Service Management <br>
      B.Sc. in Clinical Nutrition and Dietetics <br>
      PG Certificate in Diabetes Education <br> (International Diabetes Federation) <br>
      MICYAN – Indian Institute of Public Health, Delhi`,
      time: '12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:30',
      date: 'Monday-Saturday',
      alt: 'Ms. Archana Karthick | Best Clinical Dietician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 41,
      title: 'Ms. Archana Karthick | Senior Clinical Dietician',
      description: 'Ms. Archana Karthick is a Senior Clinical Dietician with 19+ years of expertise in pediatric, prenatal, diabetic, and enteral nutrition management.',
      faqs: [
        {
          question: 'Who is Ms. Archana Karthick and what is her role at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Ms. Archana Karthick is a Clinical Nutritionist at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in medical nutrition therapy for different age groups, supporting recovery, disease management, and overall health through evidence-based dietary planning.'
        },
        {
          question: 'Does Ms. Archana Karthick provide prenatal and post-natal nutrition counselling?',
          answer: 'Yes, Ms. Archana Karthick offers prenatal and post-natal nutrition guidance to support maternal health, fetal growth, and post-delivery recovery. Diet plans are customised to meet nutritional needs during pregnancy and breastfeeding.'
        },
        {
          question: 'Can I consult Ms. Archana Karthick for paediatric and geriatric nutrition?',
          answer: 'Yes, she provides specialised paediatric nutrition for growth, immunity, and development, as well as geriatric nutrition to manage age-related concerns such as weakness, poor appetite, and chronic illnesses.'
        },
        {
          question: 'What is enteral nutrition, and when does Ms. Archana Karthick recommend it?',
          answer: 'Enteral nutrition is recommended when patients are unable to meet nutritional needs through regular oral intake. Ms. Archana Karthick plans and monitors enteral feeding to ensure adequate nutrition and prevent complications.'
        },
        {
          question: 'Does Ms. Archana Karthick help with diabetic diet planning and sugar control?',
          answer: 'Yes, she plays a key role in diabetic management, creating personalised diet plans to help control blood sugar levels. Her approach supports medication effectiveness and reduces the risk of diabetes-related complications.'
        },
        {
          question: 'When should I consult a clinical nutritionist like Ms. Archana Karthick at Rashtrotthana Hospital?',
          answer: 'You should consult her if you have medical conditions requiring dietary support, pregnancy-related nutrition needs, diabetes, poor appetite, or recovery after illness or surgery. Early nutritional intervention improves outcomes and recovery.'
        },
        {
          question: 'How can I book an appointment with Ms. Archana Karthick at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `Appointments with Ms. Archana Karthick can be booked by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/facility/nutrition-dietetics-services-bangalore',

      expertiseIcons: [
        'assets/icons/ND-1.png',
        'assets/icons/ND-2.png',
        'assets/icons/ND-3.png',
        'assets/icons/ND-4.png',
        'assets/icons/ND-5.png'
      ],
      happyPatients: '3000+'
    },
    {
      name: 'Dr. Gopal Das C M',
      image: 'assets/Doc-Inv-Page/Dr-Gopal-DAS-Cm.png',
      department: 'Consultant Psychiatrist',
      about: 'Dr. Gopal Das C M is a distinguished Consultant Psychiatrist with extensive experience in treating a wide range of mental health conditions. His expertise includes managing stress, anxiety, depression, severe mental disorders and addiction issues. Specializing in child and adolescent psychiatry, he also addresses psychiatric concerns in the elderly. Dr. Das employs advanced treatments like ECT, TMS and TDCS, alongside psychotherapies and lifestyle. Dedicated to enhancing mental well-being, he offers comprehensive care tailored to individual needs.',
      speciality: 'PSYCHIATRY',
      areasOfExpertise: ['Stress and lifestyle induced psychological distress and disorders', 'Common mental illnesses like Anxiety and depression', 'Sleep disorders due to psychological causes and primary insomnia.', ' Relationship issues, marital and sexual disorders', ' Consultations for Positive mental health and Well being', 'Severe mental disorders like Schizophrenia and psychotic disorders, bipolar disorders, OCD, personality disorders, dissociative disorders etc.', 'Addictive disorders like smoking/tobacco addiction, alcohol use disorders and other drug addictions, behavioral addictions like Internet, gaming and smartphone or technology addiction, Pathological  gambling and others', 'Mental health issues arising in the course of various medical disorders/psychosomatic disorders ', 'Child and adolescent behavioral and psychological problems including ADHD etc', 'Psychiatric disorders in elderly like cognitive impairment/dementia etc.', 'Comprehensive evaluation and treatment for suicidal tendencies and self harm behaviors '],
      expertise: '15+',
      qualification: 'MD Psychiatry, MBBS',
      time: '18:00-18:30,18:30-19:00,19:00-19:30',
      date: 'Monday-Saturday',
      alt: 'Dr. Gopal Das C M | Best Psychiatrist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 22,
      title: 'Dr. Gopal Das C M | Consultant Psychiatrist in Bangalore',
      description: 'Dr. Gopal Das C M is an experienced psychiatrist treating anxiety, depression, schizophrenia, addictions, and elderly mental health concerns in Bangalore.',
      faqs: [
        {
          question: 'Who is Dr. Gopal Das C. M and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Gopal Das C. M is an experienced Psychiatrist at Rashtrotthana Hospital, RR Nagar, Bangalore. He provides comprehensive evaluation and treatment for a wide range of mental health conditions across all age groups.'
        },
        {
          question: 'What mental health conditions does Dr. Gopal Das C. M commonly treat?',
          answer: 'Dr. Gopal Das C. M treats anxiety disorders, depression, stress-related psychological distress, OCD, bipolar disorder, schizophrenia, and other psychotic disorders. His approach combines accurate diagnosis, medication management, and supportive therapy.'
        },
        {
          question: 'Does Dr. Gopal Das C. M help with addiction and substance use disorders?',
          answer: 'Yes, he has extensive experience in managing alcohol dependence, smoking and tobacco addiction, drug use disorders, and behavioural addictions such as internet, gaming, and smartphone addiction. Treatment focuses on recovery, relapse prevention, and long-term mental wellbeing.'
        },
        {
          question: 'Can Dr. Gopal Das C. M treat sleep problems and insomnia caused by stress or anxiety?',
          answer: 'Yes, Dr. Gopal Das C. M evaluates and treats sleep disorders related to psychological causes, including primary insomnia. Proper management helps improve sleep quality, mood, and daily functioning.'
        },
        {
          question: 'Does Dr. Gopal Das C. M manage mental health issues in children, adolescents, and the elderly?',
          answer: 'Yes, he treats child and adolescent behavioural problems including ADHD, as well as psychiatric conditions in the elderly such as cognitive impairment and dementia. Care plans are age-appropriate and family-oriented.'
        },
        {
          question: 'Can I consult Dr. Gopal Das C. M for relationship, marital, or sexual health concerns?',
          answer: 'Yes, Dr. Gopal Das C. M provides professional support for relationship issues, marital conflicts, sexual disorders, and emotional distress. Early psychiatric consultation can help improve communication, mental health, and quality of life.'
        },
        {
          question: 'How can I book an appointment with Dr. Gopal Das C. M at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Gopal Das C. M by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-pshychiatry-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PSYC-1.png',
        'assets/icons/PSYC-2.png',
        'assets/icons/PSYC-3.png',
        'assets/icons/PSYC-4.png',
        'assets/icons/PSYC-5.png'
      ],
      happyPatients: '3000+'

    },
    // {
    //   name: 'Dr. Nishitha A',
    //   image: 'assets/Doc-Inv-Page/Dr-Nishitha-A.png',
    //   department: 'Radiologist',
    //   about: 'Dr. Nishitha A is a recent addition to our  dedicated team of radiologists with a special interest in  women\'s imaging . She graduated summa cum laude in her  M.D Radio-Diagnosis(2023) examinations. Dr. Nishitha has completed her Senior Residency at BGS GIMS Hospital and is currently,  pursuing a fellowship in Fetal Medicine at ADI Advanced Care for Fetal Studies, Bangalore . Dr. Nishitha has  numerous paper presentations at State, national and international conferences to her credit with a Gold medal for the best paper in KCACON-2013 . Outside of her professional work, she is a trained Carnatic vocalist and Bharatanatyam dancer, reflecting her diverse talents and interests.',
    //   speciality: 'RADIOLOGY',
    //   areasOfExpertise: ['Women\'s Imaging'],
    //   expertise: 'Years of Experience: 1+',
    //   qualification: 'MBBS, MD',
    //   time: '16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:00',
    //   date: 'Monday-Thursday',
    //   alt: 'Dr. Nishitha A | Radiologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
    //   title: 'Dr. Nishitha A | Women’s Imaging Radiologist Bangalore',
    //   description: 'Dr. Nishitha A is a radiologist in Bangalore with expertise in women’s imaging and fetal medicine, currently pursuing a fellowship in fetal studies.'
    // },
    {
      name: 'Dr. Nagesh R',
      image: 'assets/Doc-Inv-Page/dr-nagesh.png',
      department: 'Radiologist',
      about: 'Dr. Nagesh R is an accomplished radiology consultant in jaydev rashtrotthana Hospital, with over a decade of experience in the field. He holds a medical degree in MBBS, DMRD and DNB and he is going to be a Fellow of the Royal College of Radiologists (FRCR), a highly esteemed qualification in the field of radiology. He is an active member of the Indian Radiology and Imaging Association.Dr. Nagesh R is an expert in general radiology and has a special interest in cardiovascular imaging, as well as performing USG and CT-guided interventions. He is highly skilled in interpreting medical images and diagnosing a wide range of medical conditions, from the most common to the most complex.',
      speciality: 'RADIOLOGY',
      areasOfExpertise: ['Routine USG Neurosonogram', 'MSK ultrasounds', 'Paediatric hip scans', 'High Resolution Ultrasound', 'Transrectal and Trans vaginal ultrasound', 'All types of dopplers'],

      areasOfExpertise2: [
        {
          title: 'USG :',
          items: [
            'Routine USG Neurosonogram',
            'MSK ultrasounds',
            'Paediatric hip scans',
            'High Resolution Ultrasound',
            'Transrectal and Trans vaginal ultrasound',
            'All types of dopplers'
          ]
        },
        {
          title: 'Ultrasound and CT Guided Interventions',
          items: [
            'FNAC, Biopsy',
            'Pigtail Drainage',
            'Mallicot Drainage',
            'TRUS Prostate Biopsy',
            'Neural Foraminal Injections',
            'Shoulder Joint / Bursal injections'
          ]
        },
        {
          title: 'Special Interest',
          items: [
            'Cardiovascular imaging (Coronary angiogram, aortogram, venograms)',
            'CT and MRI abdomino-pelvic imaging',
            'Thoracic imaging',
            'Neuro imaging',
            'MSK imaging'
          ]
        }
      ],



      expertise: '16+',
      qualification: 'MBBS, DMRD, DNB',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:00',
      date: 'Monday-Friday',
      alt: 'Dr. Nagesh R | Radiology Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 43,
      title: 'Dr. Nagesh R | Senior Radiologist in Bangalore',
      description: 'Dr. Nagesh R is a radiologist in Bangalore with 16+ years of expertise in USG, CT-guided interventions, and cardiovascular imaging.',
      faqs: [
        {
          question: 'Who is Dr. Nagesh R and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Nagesh R is an experienced Radiologist and Imaging Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in advanced ultrasound, CT, MRI imaging, and image-guided diagnostic and interventional procedures.'
        },
        {
          question: 'What types of ultrasound (USG) scans does Dr. Nagesh R perform?',
          answer: 'Dr. Nagesh R performs routine ultrasound, high-resolution ultrasound, neurosonogram, paediatric hip scans, MSK ultrasound, transrectal (TRUS) and transvaginal ultrasound, ensuring accurate diagnosis across age groups and conditions.'
        },
        {
          question: 'Does Dr. Nagesh R perform Doppler studies and cardiovascular imaging?',
          answer: 'Yes, he performs all types of Doppler studies, including vascular Dopplers, to assess blood flow and vessel health. He also has special interest in cardiovascular imaging such as coronary angiograms, aortograms, and venograms.'
        },
        {
          question: 'Are image-guided procedures like FNAC and biopsy done by Dr. Nagesh R?',
          answer: 'Yes, Dr. Nagesh R performs ultrasound- and CT-guided FNACs, biopsies, and drainage procedures, including pigtail and Mallicot drainage. These minimally invasive procedures help in accurate diagnosis and effective treatment planning.'
        },
        {
          question: 'Does Dr. Nagesh R perform TRUS prostate biopsy and pain-relief injections?',
          answer: 'Yes, he is experienced in TRUS-guided prostate biopsy for prostate evaluation. He also performs neural foraminal injections and shoulder joint or bursal injections under imaging guidance for precise pain management.'
        },
        {
          question: 'What advanced imaging services are available with Dr. Nagesh R at Rashtrotthana Hospital?',
          answer: 'Dr. Nagesh R specialises in CT and MRI imaging of the abdomen and pelvis, thoracic imaging, neuro imaging, and musculoskeletal (MSK) imaging. These scans play a crucial role in accurate diagnosis and treatment monitoring.'
        },
        {
          question: 'How can I book an appointment or imaging procedure with Dr. Nagesh R at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book imaging services or consultation with Dr. Nagesh R by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the radiology department, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/facility/top-diagnostics-multi-speciality-hospital-bangalore',
      expertiseIcons: [
        'assets/icons/RAD-1.png',
        'assets/icons/RAD-2.png',
        'assets/icons/RAD-3.png',
        'assets/icons/RAD-4.png',
        'assets/icons/RAD-5.png'
      ],
      happyPatients: '10000+'

    },
    {
      name: 'Dr. Sapna S',
      image: 'assets/dr-sapna.png',
      department: 'AYURVEDA',
      about: 'Dr. Sapna S. is an experienced Ayurvedic professional with over 20 years of teaching and practice in Ayurveda, specializing in Rasashastra, Bhaishajya Kalpana and Panchakarma therapies. She holds an MD from SDM College, Udupi, along with additional qualifications such as a Postgraduate Diploma in Yoga and a Diploma in Medical Astrology. Dr. Sapna has been instrumental in shaping Ayurvedic education, working at renowned institutions including Sushruta Ayurvedic Medical College and Kalabahairaveshwara Ayurvedic Medical College in Bangalore and most recently, as a professor at Sanskriti Ayurvedic Medical College, Mathura.Her 20-year career includes 17 years in Bangalore and 3 years at Sanskriti Ayurvedic College, where she has dedicated herself to making Ayurvedic knowledge engaging and accessible for students. ',
      speciality: 'AYURVEDA',
      areasOfExpertise: ['Rasa Shastra and Bhaishajya Kalpana', 'Cancer therapy in Ayurveda', 'Medical Astrology (Daiva Vyapashraya Chikitsa)', 'Chronic skin diseases', 'Infertility cases', 'Geriatric care', 'PCOD', 'Obesity', 'Hypothyroidism'],
      expertise: '20',
      qualification: 'MD (Ayu) in Rasa Shastra and Bhaishajya Kalpana from SDM College, Udupi PG Dip (Yoga) Diploma in Medical Astrology',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday,Sunday',
      alt: 'Dr. Sapna S | Best Ayurveda Specialist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 37,
      title: 'Dr. Sapna S | Senior Ayurveda Doctor in Bangalore',
      description: 'Dr. Sapna S is a senior Ayurveda specialist with 20+ years of expertise in Rasashastra, Panchakarma, and medical astrology-based therapies.',
      departmentSlug: '',
      expertiseIcons: [
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png',
        'assets/list.png'
      ],
      happyPatients: ''
    },
    {
      name: 'Dr. Venkatesh H. S',
      image: 'assets/dr-venkatesh-h-s.png',
      department: 'AYURVEDA',
      about: 'Dr. H. S Venkatesh is the founder and chief physician of the foundation. After graduating from Bangalore University and earning a BAMS degree from Taranath Govt. Ayurvedic Medical College in Bellary in 1985, he has spent over 25 years practicing Ayurveda. Dr. Venkatesh has conducted extensive research, particularly focusing on thyroid disorders and his work has demonstrated the efficacy of Ayurvedic treatments for conditions like thyroid imbalance and arthritis. He has been awarded fellowships and titles for his contributions, including "Ayurveda Chikitsa Praveena" and "Vaidya Bhaskara." He is also a respected educator, columnist and speaker on Ayurveda, regularly engaging with Ayurvedic colleges, medical journals and media outlets.',
      speciality: 'AYURVEDA',
      areasOfExpertise: ['Ayurveda Endocrinology', 'Thyroid Disorders', 'Arthritis', 'Ayurvedic Treatment and Research'],
      expertise: '26+',
      qualification: 'BSc, BAMS, FAHO, FAGE',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date: 'Wednesday and Friday',
      alt: 'Dr. Venkatesh H. S | Best Ayurveda Endocrinologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 38,
      title: 'Dr. Venkatesh H. S | Senior Ayurveda Expert in Bangalore',
      description: 'Dr. Venkatesh H. S is a senior Ayurveda specialist with 26+ years of experience in thyroid disorders, arthritis, and Ayurvedic endocrinology.',
      faqs: [
        {
          question: 'Who is Dr. Venkatesh H. S and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Venkatesh H. S is an experienced Ayurveda Endocrinology Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He focuses on managing hormonal and metabolic disorders using evidence-based Ayurvedic principles and research-oriented care.'
        },
        {
          question: 'What thyroid disorders are treated by Dr. Venkatesh H. S with Ayurveda?',
          answer: 'Dr. Venkatesh H. S treats hypothyroidism and hyperthyroidism using personalised Ayurvedic treatment plans that address metabolism, digestion, and hormonal balance. Care is aimed at symptom control and long-term regulation.'
        },
        {
          question: 'Can Ayurveda help in managing arthritis under Dr. Venkatesh H. S?',
          answer: 'Yes, Dr. Venkatesh H. S provides Ayurvedic care for arthritis and joint pain, focusing on inflammation control, pain relief, and improved mobility. Treatment may include herbal medicines, lifestyle guidance, and supportive therapies.'
        },
        {
          question: 'How does Ayurveda endocrinology differ from conventional hormone treatment?',
          answer: 'Ayurveda endocrinology focuses on root-cause correction, balancing body systems rather than only replacing hormones. Dr. Venkatesh H. S combines clinical experience with Ayurvedic research to offer holistic, sustainable outcomes.'
        },
        {
          question: 'Is Ayurvedic treatment suitable for long-term thyroid and metabolic conditions?',
          answer: 'Yes, Ayurvedic treatment under Dr. Venkatesh H. S is designed for safe long-term management with regular monitoring. Patients are guided on diet, lifestyle, and therapy adjustments to maintain hormonal stability.'
        },
        {
          question: 'Does Dr. Venkatesh H. S follow a research-based approach in Ayurvedic treatment?',
          answer: 'Yes, Dr. Venkatesh H. S has a strong interest in Ayurvedic treatment and research, ensuring therapies are scientifically aligned and clinically relevant. This helps improve treatment precision and patient outcomes.'
        },
        {
          question: 'How can I book an appointment with Dr. Venkatesh H. S at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Venkatesh H. S by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/ayurvedic-treatment-bangalore',
      expertiseIcons: [
        'assets/icons/AY-1.png',
        'assets/icons/AY-2.png',
        'assets/icons/AY-3.png',
        'assets/icons/AY-4.png',
        'assets/icons/AY-5.png'
      ],
      happyPatients: '10000+'

    },
    {
      name: 'Dr. Sunil Kumar C',
      image: 'assets/Doc-Inv-Page/Dr-Sunil.png',
      department: 'ENT, Head and Neck',
      about: 'Dr. Sunil Kumar has extensive experience in ENT and head/neck surgeries, including laser and thyroid procedures. He specializes in anti-aging, hair transplantation and facial trauma treatment. He has led various awareness programs in collaboration with WHO, and his insights on hearing loss have been featured on WHO\'s site.',
      speciality: 'ENT SPECIALITY',
      areasOfExpertise: ['Vertigo treatment', 'Laser surgery', 'Emergency ENT procedures', 'Coablation surgery', 'Vocal cord surgery', 'Thyroid surgery', 'Cosmetic ENT surgery', 'Endoscopic sinus surgery', 'Microscopic ear surgery', 'Ear, nose, throat (ENT) and head/neck surgery'],
      expertise: '14+',
      qualification: ' MS ENT, DHM, IFAAM',
      time: '18:30-18:50,18:50-19:10,19:10-19:30',
      date: 'Tuesday,Thursday and Saturday',
      alt: 'Dr. Sunil Kumar C | Best  ENT, Head and Neck Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 33,
      title: 'Dr. Sunil Kumar C | Expert ENT & Head-Neck Surgeon Bangalore',
      description: 'Dr. Sunil Kumar C brings over 14+ years of expertise in ENT, thyroid, laser, cosmetic and facial trauma surgeries with global recognition.',
      faqs: [
        {
          question: 'Who is Dr. Sunil Kumar C and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sunil Kumar C is a highly experienced ENT and Head–Neck Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. He manages a wide range of ear, nose, throat, voice, and head–neck conditions using advanced surgical techniques.'
        },
        {
          question: 'Does Dr. Sunil Kumar C provide treatment for vertigo and balance disorders?',
          answer: 'Yes, Dr. Sunil Kumar C specialises in vertigo evaluation and treatment, identifying inner ear and balance-related causes. Proper diagnosis helps reduce dizziness, imbalance, and associated symptoms effectively.'
        },
        {
          question: 'What sinus and nasal surgeries are performed by Dr. Sunil Kumar C?',
          answer: 'He performs endoscopic sinus surgery (FESS) for chronic sinusitis and nasal blockages not responding to medication. These minimally invasive procedures help improve breathing and reduce recurrent infections.'
        },
        {
          question: 'Is laser and coblation surgery available with Dr. Sunil Kumar C at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Sunil Kumar C performs laser surgery and coblation surgery for various ENT conditions, including tonsils, nasal tissues, and throat disorders. These techniques allow precise treatment with less pain and faster recovery.'
        },
        {
          question: 'Does Dr. Sunil Kumar C treat voice problems and perform vocal cord surgery?',
          answer: 'Yes, he treats voice disorders and performs vocal cord surgeries for hoarseness, voice strain, and structural vocal cord issues. Early treatment helps restore voice quality and prevent long-term damage.'
        },
        {
          question: 'Are thyroid, cosmetic ENT, and emergency ENT surgeries handled by Dr. Sunil Kumar C?',
          answer: 'Dr. Sunil Kumar C is experienced in thyroid surgeries, cosmetic ENT procedures, and emergency ENT interventions. He also performs microscopic ear surgeries for chronic ear infections and hearing-related conditions.'
        },
        {
          question: 'How can I book an appointment with Dr. Sunil Kumar C at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Sunil Kumar C by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-ent-hospital-in-bangalore',

      expertiseIcons: [
        'assets/icons/ENT-1.png',
        'assets/icons/ENT-2.png',
        'assets/icons/ENT-3.png',
        'assets/icons/ENT-4.png',
        'assets/icons/ENT-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Dr. Man Mohan U. S",
      image: "assets/Doc-Inv-Page/Dr-Man-Mohan-U-S.png",
      department: "Gastroenterologist",
      about: `<p>Dr. Manmohan U S is a consultant in Gastroenterology with comprehensive clinical and academic experience. He completed his MBBS from M.S. Ramaiah Medical College, followed by an MD in General Medicine from AIMS, and super-speciality training (DM) in Gastroenterology from Madras Medical Mission Hospital, Chennai.</p> 
                <p>He has also completed an observership at CMC Vellore and worked in Vellore for two years. Additionally, he served as an Assistant Professor at the Institute of Gastroenterology and Organ Transplant, Victoria Hospital campus. He has presented more than six papers at national and international conferences and has served as faculty at two national and two international gastroenterology conferences.</p>`,
      speciality: "GASTRO SCIENCES",
      areasOfExpertise: [
        "Clinical Gastroenterology",
        "Motility Disorders",
        "Advanced Endoscopy",
        "Manometry",
        "Inflammatory bowel disease",
        "Acid Reflux / GERD, Gastritis & Peptic Ulcer Disease",
        "Celiac Disease, Ulcerative Colitis & Crohn's Disease",
        "Inflammatory Bowel Disorders (IBD), Irritable Bowel Syndrome (IBS)",
        "Chronic Constipation, Diarrhea",
        "Colitis & Colon Polyps, Chronic Polyps / Cancer",
        "Bleeding Per Rectum, GI-Related Malignancy",
        "Fatty Liver Disease, Alcoholic Liver Disease",
        "Cirrhosis & Liver Fibrosis, Liver-Related Issues",
        "Pancreatitis, Gallstones & Biliary Disorders",
        "Abdominal Pain, Bloating & Nausea, Hepatitis & Liver Disorders",
      ],

      expertise: " 10+",
      qualification: "MBBS, MD (G. MEDICINE); DrNB(Med Gastro); MNAMS",
      time: "",
      date: "Monday, Wednesday and Saturday",
      alt: "Dr. Man Mohan U. S | Best Gastroenterologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore",
      id: 47,
      title: 'Dr. Man Mohan U. S | Expert Gastroenterologist in Bangalore',
      description: 'Dr. Man Mohan U. S is a leading gastroenterologist in Bangalore with 8+ years of experience in liver, bowel and gastrointestinal disorders.',
      faqs: [
        {
          question: 'Who is Dr. Man Mohan U. S and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Man Mohan U. S is an experienced Gastroenterologist at Rashtrotthana Hospital, RR Nagar, Bangalore. He manages a wide spectrum of digestive, liver, pancreatic, and bowel disorders with advanced diagnostic and endoscopic care.'
        },
        {
          question: 'Does Dr. Man Mohan U. S treat acid reflux (GERD), gastritis, and peptic ulcer disease?',
          answer: 'Yes, Dr. Man Mohan U. S treats acid reflux/GERD, gastritis, and peptic ulcer disease, focusing on accurate diagnosis, medication optimisation, and lifestyle guidance to control symptoms and prevent recurrence.'
        },
        {
          question: 'Can I consult Dr. Man Mohan U. S for chronic constipation, diarrhea, or IBS?',
          answer: 'Yes, Dr. Man Mohan U. S evaluates and treats chronic constipation, chronic diarrhea, irritable bowel syndrome (IBS), and motility disorders, using targeted investigations to identify the cause and tailor treatment.'
        },
        {
          question: 'Does Dr. Man Mohan U. S manage inflammatory bowel diseases like ulcerative colitis and Crohn’s disease?',
          answer: 'Yes, he has extensive experience in managing ulcerative colitis, Crohn’s disease, and other inflammatory bowel disorders (IBD). Care includes long-term disease control, flare prevention, and advanced endoscopic assessment when needed.'
        },
        {
          question: 'Are liver conditions like fatty liver, cirrhosis, and hepatitis treated by Dr. Man Mohan U. S?',
          answer: 'Dr. Man Mohan U. S treats fatty liver disease, alcoholic liver disease, cirrhosis, liver fibrosis, and hepatitis with a comprehensive approach that includes lifestyle modification, medical management, and regular monitoring.'
        },
        {
          question: 'What advanced endoscopy services are available with Dr. Man Mohan U. S at Rashtrotthana Hospital?',
          answer: 'He performs advanced endoscopy, including evaluation for colon polyps, GI bleeding, suspected malignancy, and specialised tests such as manometry. These procedures help in early diagnosis and precise treatment planning.'
        },
        {
          question: 'How can I book an appointment with Dr. Man Mohan U. S at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Man Mohan U. S by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-gastroenterology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/GAS-1.png',
        'assets/icons/GAS-2.png',
        'assets/icons/GAS-3.png',
        'assets/icons/GAS-4.png',
        'assets/icons/GAS-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Dr. Kalyani Dilip Karkare",
      image: "assets/Doc-Inv-Page/Dr-Kalyani-Karkare.png",
      department: 'Neuro Science',
      speciality: 'NEUROSCIENCES',
      about: "Dr. Kalyani Karkare, a Gold Medalist in DM Neurology from NIMHANS, Bangalore (2010), is an expert in epilepsy and EEG. After gaining experience at Medanta The Medicity Hospital, she pursued a fellowship in EEG at SCTIMST, Thiruvananthapuram (2013). From 2015 to 2018, she worked with the epilepsy surgery team at Nicklaus Children's Hospital, Miami, USA, specializing in advanced techniques like subdural and stereoEEG. She has also set up epilepsy labs in leading hospitals. In addition to epilepsy, she is proficient in acute stroke management, including IV thrombolysis and mechanical thrombectomy, and she emphasizes comprehensive stroke care with rehabilitation. With numerous publications, academic presentations and teaching experience, she combines deep knowledge, empathy and attentive care for her patients.",
      areasOfExpertise: ["Epilepsy", "Stroke", "Neuropathy"],
      expertise: " 16+",
      qualification: "MBBS, DM Neurology, PDF EEG",
      time: "",
      date: "Monday",
      alt: 'Dr. Kalyani Dilip Karkare | Best Neurologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 29,
      title: 'Dr. Kalyani Karkare | Expert Neurologist for Epilepsy & Stroke',
      description: 'Dr. Kalyani Karkare is a senior neurologist with 16+ years of experience in epilepsy care, stroke treatment, neuropathy, and EEG interpretation.',
      faqs: [
        {
          question: 'Who is Dr. Kalyani Dilip Karkare and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Kalyani Dilip Karkare is an experienced Neurologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in diagnosing and managing complex neurological conditions with a patient-centred, evidence-based approach.'
        },
        {
          question: 'Does Dr. Kalyani Dilip Karkare treat epilepsy and seizure disorders?',
          answer: 'Yes, Dr. Kalyani Dilip Karkare has extensive experience in treating epilepsy and seizure disorders, including medication optimisation and long-term monitoring. Early diagnosis and proper treatment help reduce seizure frequency and improve quality of life.'
        },
        {
          question: 'Can I consult Dr. Kalyani Dilip Karkare for stroke evaluation and recovery care?',
          answer: 'Yes, she provides comprehensive care for stroke patients, including early diagnosis, post-stroke management, and guidance for rehabilitation to reduce the risk of recurrence.'
        },
        {
          question: 'What types of nerve problems and neuropathy does Dr. Kalyani Dilip Karkare manage?',
          answer: 'Dr. Kalyani Dilip Karkare treats peripheral neuropathy, including nerve damage caused by diabetes, vitamin deficiencies, and other medical conditions. Treatment focuses on symptom relief, nerve protection, and addressing the underlying cause.'
        },
        {
          question: 'When should I see a neurologist like Dr. Kalyani Dilip Karkare?',
          answer: 'You should consult her if you experience recurrent seizures, sudden weakness, numbness, tingling, difficulty speaking, or unexplained neurological symptoms. Early neurological evaluation helps prevent complications.'
        },
        {
          question: 'Does Dr. Kalyani Dilip Karkare provide long-term care for chronic neurological conditions?',
          answer: 'Yes, she offers ongoing care for chronic neurological disorders such as epilepsy and neuropathy, focusing on symptom control, medication management, and regular follow-up for stable outcomes.'
        },
        {
          question: 'How can I book an appointment with Dr. Kalyani Dilip Karkare at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Kalyani Dilip Karkare by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-neurology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/NUS-1.png',
        'assets/icons/NUS-2.png',
        'assets/icons/NUS-3.png',
        'assets/icons/NUS-4.png',
        'assets/icons/NUS-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Dr. Vivekanand",
      image: "assets/Doc-Inv-Page/Dr-Vivek.png",
      department: 'Consultant Vascular Surgeon',
      speciality: 'GENERAL SURGERY',
      about: "Dr. Vivekanand is a highly experienced vascular surgeon with over two decades of expertise in vascular and endovascular surgery. Currently serving as the Head of the Department at the Jain Institute of Vascular Sciences, Bhagwan Mahaveer Jain Hospital, he has been instrumental in advancing vascular care. He is a recognized leader, having served as the President of the Vascular Surgeons Association of Karnataka and President Elect of the Vascular Society of India. With a strong commitment to education, Dr. Vivekanand has mentored numerous fellows and postgraduates and has authored multiple publications and textbook chapters in vascular surgery and dermatology.",
      areasOfExpertise: ["Prevention and management of diabetic foot infections and limb preservation.", "Awareness and treatment of Deep Vein Thrombosis (DVT) and thrombotic events.", "Advanced wound healing techniques.", "Management of thrombosis and hemostasis disorders."],
      expertise: " 26+",
      qualification: "MBBS, MS(General Surgery), FVES",
      time: "",
      date: "",
      alt: 'Dr. Vivekanand | Consultant Vascular Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore',
      id: 50,
      title: 'Dr. Vivekanand | Senior Vascular Surgeon with 26+ Years',
      description: 'Dr. Vivekanand is a renowned vascular surgeon with 26+ years of expertise in diabetic foot infections, DVT care, wound healing, and thrombosis management.',
      faqs: [
        {
          question: 'Who is Dr. Vivekanand and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Vivekanand is an experienced Vascular and Wound Care Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He focuses on limb preservation, thrombosis management, and advanced wound healing for complex vascular conditions.'
        },
        {
          question: 'Does Dr. Vivekanand treat diabetic foot infections and help prevent amputations?',
          answer: 'Yes, Dr. Vivekanand specialises in the prevention and management of diabetic foot infections, with a strong focus on limb preservation. Early intervention and advanced wound care help reduce infection spread and avoid amputations.'
        },
        {
          question: 'Can I consult Dr. Vivekanand for Deep Vein Thrombosis (DVT) and blood clot problems?',
          answer: 'Yes, Dr. Vivekanand has extensive experience in the diagnosis and treatment of Deep Vein Thrombosis (DVT) and other thrombotic events. Timely treatment is critical to prevent complications like pulmonary embolism.'
        },
        {
          question: 'What advanced wound healing techniques are available with Dr. Vivekanand?',
          answer: 'Dr. Vivekanand uses advanced wound healing techniques, including specialised dressings and vascular-focused care, for chronic and non-healing wounds. These methods promote faster healing and reduce the risk of infection.'
        },
        {
          question: 'Does Dr. Vivekanand manage thrombosis and hemostasis disorders?',
          answer: 'Yes, he provides comprehensive care for thrombosis and hemostasis disorders, focusing on clot prevention, safe blood flow, and long-term vascular health. Treatment is customised based on individual risk factors.'
        },
        {
          question: 'When should I see a vascular specialist like Dr. Vivekanand?',
          answer: 'You should consult Dr. Vivekanand if you have diabetic foot ulcers, leg pain or swelling, non-healing wounds, suspected blood clots, or a history of thrombosis. Early vascular evaluation helps prevent serious complications.'
        },
        {
          question: 'How can I book an appointment with Dr. Vivekanand at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Vivekanand by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-vascular-surgery-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/VS-1.png',
        'assets/icons/VS-2.png',
        'assets/icons/VS-3.png',
        'assets/icons/VS-4.png',
        'assets/icons/VS-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: "Dr. Dhanyatha Muninarayan",
      image: "assets/Doc-Inv-Page/Dr-Dhanyatha-Muninarayan.png",
      department: 'Consultant Paediatrician',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      about: "Dr. Dhanyatha Muninarayan is a compassionate and skilled paediatrician with an MD in Paediatrics from Rajarajeswari Medical College, Bengaluru. With extensive experience in General Paediatrics, Neonatology, and Paediatric Haematology-Oncology, she has worked in reputed hospitals including Cloud Nine, St. John’s Medical College, ESI Medical College and Sakra World Hospital. Currently serving as a Consultant at Belanus Champion Hospital, she is proficient in managing neonatal and paediatric cases, performing critical procedures and mentoring medical students. Her research contributions include award-winning presentations and publications on neonatal and paediatric health issues, reflecting her dedication to advancing paediatric care.",
      areasOfExpertise: ["General Paediatrics and Neonatology", "Medical Student Coaching and Interactive Teaching", "Managing Outpatients and Inpatients", "Resuscitation of Normal and High-Risk Patients", "Patient Counselling", "Medical Procedures: Intubation, Lumbar Puncture, Bone Marrow Aspirations"],
      expertise: "11+",
      qualification: "MBBS, (MD) Paediatrics",
      time: "",
      date: 'Monday-Saturday',
      alt: 'Dr. Dhanyatha Muninarayan  | Consultant Paediatrician in Bangalore | Rajarajeshwari Nagar Bangalore',
      id: 51,
      title: 'Dr. Dhanyatha Muninarayan | Best Paediatrician in Bangalore',
      description: 'Experienced paediatrician in neonatology, patient counselling and critical procedures with 7+ years in child care and medical student mentorship.',
      faqs: [
        {
          question: 'Who is Dr. Dhanyatha Muninarayan and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Dhanyatha Muninarayan is an experienced Paediatrician and Neonatologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She provides comprehensive medical care for newborns, infants, children, and adolescents with a strong focus on safety and family counselling.'
        },
        {
          question: 'Does Dr. Dhanyatha Muninarayan treat newborns and high-risk babies?',
          answer: 'Yes, she specialises in neonatal care, including the management and resuscitation of normal and high-risk newborns. Early intervention and close monitoring help ensure better outcomes for vulnerable babies.'
        },
        {
          question: 'Can I consult Dr. Dhanyatha Muninarayan for my child’s routine illnesses and hospital care?',
          answer: 'Yes, Dr. Dhanyatha Muninarayan manages both paediatric outpatients and inpatients, treating common childhood illnesses as well as more serious medical conditions requiring hospital admission.'
        },
        {
          question: 'Is emergency resuscitation and critical care provided by Dr. Dhanyatha Muninarayan?',
          answer: 'Yes, she is trained in paediatric and neonatal resuscitation, handling emergency situations involving critically ill children and newborns. Prompt, skilled care is crucial during such life-saving interventions.'
        },
        {
          question: 'What medical procedures does Dr. Dhanyatha Muninarayan perform for children?',
          answer: 'She is experienced in performing medical procedures such as intubation, lumbar puncture, and bone marrow aspiration when clinically indicated. These procedures are done with strict safety protocols and parental counselling.'
        },
        {
          question: 'Does Dr. Dhanyatha Muninarayan provide counselling for parents and caregivers?',
          answer: 'Yes, patient and parent counselling is a key part of her practice. She helps parents understand their child’s condition, treatment plan, and follow-up care in a clear and reassuring manner.'
        },
        {
          question: 'How can I book an appointment with Dr. Dhanyatha Muninarayan at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Dhanyatha Muninarayan by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-paediatric-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PN-1.png',
        'assets/icons/PN-2.png',
        'assets/icons/PN-3.png',
        'assets/icons/PN-4.png',
        'assets/icons/PN-5.png'
      ],
      happyPatients: '4000+'

    },
    // {
    //   name: "Dr. Sunil Shenvi",
    //   image : "assets/Dr-Sunil-Shenvi.png",
    //   department: 'General Sugery',
    //   speciality: 'GASTRO SCIENCES',
    //   about : "Dr. Sunil Shenvi is a distinguished Senior Consultant in Hepato-Biliary-Pancreatic (HPB) Surgery and Multiorgan Transplantation, offering his expertise at Jayadev Memorial Rashtrotthana Hospital and Research Centre in Bengaluru. With extensive experience, he specializes in liver transplantation, including living and deceased donor transplants, blood group-incompatible transplants and positive cross-match transplants. He is also skilled in pancreas transplantation, surgeries for benign pancreatic conditions like acute and chronic pancreatitis and advanced procedures for cancers of the bile duct and gallbladder. Additionally, he performs complex vascular access surgeries for hemodialysis, providing comprehensive care for patients with organ failure and related complications.",
    //   areasOfExpertise : ["Jaundice","Hepatitis","Liver Fibrosis","Acute Liver Failure","Alcoholic Liver Disease","Autoimmune Liver Disease","Blood Vomiting","Ascites (Swelling in Abdomen & Feet)","Portal Hypertension","Wilson’s Disease","Biliary Atresia","Pancreas","Bile Duct Gastro Cancer","Liver Cirrhosis","Liver Cancer"],
    //   expertise : "Years of Experience: 15+",
    //   qualification : "MBBS, MS - General Sugery, MCh - Surgical Gastroenterology, FASTS (Fellow of American Society of Transplant Surgeons)",
    //   time : "",
    //   date : "",
    //   alt : 'Dr. Sunil Shenvi | Best General Surgery and Gastroenterology doctor in Bngalore | Rajarajeshwari Nagar'
    // },
    // {
    //   name: "Dr. Hemanth Kumar Venkatesh",
    //   image: "assets/Doc-Inv-Page/Dr-Hemanth-kumar-Venkatesh.png",
    //   department: 'ORTHOPEDICS',
    //   speciality: 'ORTHOPEDICS',
    //   about: "<p>With over 20 years of experience in Trauma and Orthopaedics, Dr. Hemanth Kumar Venkatesh is a highly skilled consultant orthopaedic surgeon specializing in hip and knee joint replacement surgeries, robotic arthroplasty, knee sports surgery and joint preservation techniques. He provides comprehensive care for a wide range of musculoskeletal conditions.</p><p>He is adept at managing complex cases, including primary and revision arthroplasty, shoulder and ankle sports injuries, diabetic foot limb salvage and hand and wrist surgeries. His expertise is complemented by contributions to research and leadership roles in healthcare projects.</p><p>Having worked at renowned institutions like University Hospitals of Plymouth NHS Trust and North West Anglia Foundation Trust, he brings advanced knowledge and a patient-centered approach to his practice. His dedication to exceptional care is supported by extensive training and fellowship experience in both the UK and India.</p>",
    //   areasOfExpertise: ["Primary & Revision joint replacement surgery of Hip  & Knee", "Robotic Joint Replacement Surgery", "Soft Tissue Knee Surgery - ACL reconstruction / multi-ligament reconstruction surgery / Meniscus repair/cartilage preservation surgery", "Joint preservation surgery of Knee", "Sports surgery of Shoulder & Ankle", "Complex Diabetic foot limb salvage surgery", "Elective Foot & ankle surgery, Hand & Wrist surgery", "Chronic pain management and Elective Spine Surgery", "Limb Reconstruction surgery"],
    //   expertise: "Years of Experience: 20",
    //   qualification: "MBBS, DNB Ortho, FRCS Edin T&O, MCh Ortho UK, CCT UK",
    //   time: "",
    //   date: 'Monday-Saturday',
    //   alt: 'Dr. Hemanth Kumar Venkatesh | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital',
    //   id: 56,
    //   title:'Dr. Hemanth Kumar Venkatesh | Orthopaedic Surgeon',
    //   description:'Expert in joint replacement, robotic surgery, ACL reconstruction, sports injuries, diabetic limb salvage, spine care and limb reconstruction with 20+ years experience.'
    // },
    {
      name: "Dr. Matam Sri Anusha",
      image: "assets/dummy-doc-female.svg",
      department: 'Rheumatology',
      speciality: 'RHEUMATOLOGY',
      about: "<p>Dr. Matam Sri Anusha is a compassionate and experienced Rheumatologist specializing in the diagnosis and treatment of a wide range of inflammatory and autoimmune conditions. She provides expert care for conditions such as rheumatoid arthritis, psoriatic arthritis, lupus, spondyloarthritis and osteoporosis, as well as recurrent pregnancy losses and vasculitis.</p<p>She offers personalized treatment plans using the latest advancements in rheumatology to help patients manage chronic pain, joint issues and systemic inflammatory disorders. If you're experiencing symptoms like joint pain, swelling, stiffness, skin rashes, fatigue, or unexplained weight loss, Dr. Anusha is dedicated to providing the care and support you need for improved health and well-being.</p>",
      areasOfExpertise: ["Inflammatory arthritis", "Vasculitis", "Gout", "Sarcoidosis", "Osteoporosis", "Recurrent pregnancy losses", "Connective tissue diseases (Lupus, Sjogren's, Systemic sclerosis)"],
      expertise: "11+",
      qualification: "Qualification: MBBS, MD (Internal Medicine) DM (Clinical Immunology and Rheumatology) MRCP-SCE (UK) Rheumatology, EULAR Fellow",
      time: "",
      date: "Monday, Wednesday and Friday",
      alt: '',
      id: 57,
      title: 'Dr. Matam Sri Anusha | Rheumatologist in Bangalore',
      description: 'Expert in inflammatory arthritis, lupus, vasculitis, connective tissue diseases, osteoporosis, gout & autoimmune conditions with 8 years of experience.',
      faqs: [
        {
          question: 'Who is Dr. Matam Sri Anusha and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Matam Sri Anusha is an experienced Rheumatologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in diagnosing and managing autoimmune and inflammatory joint disorders with evidence-based, long-term care.'
        },
        {
          question: 'Does Dr. Matam Sri Anusha treat inflammatory arthritis and chronic joint pain?',
          answer: 'Yes, Dr. Matam Sri Anusha treats inflammatory arthritis, helping patients control pain, stiffness, and swelling. Early diagnosis and disease-modifying treatment can prevent joint damage and improve quality of life.'
        },
        {
          question: 'Can I consult Dr. Matam Sri Anusha for lupus, Sjögren’s syndrome, or systemic sclerosis?',
          answer: 'Yes, she has extensive experience managing connective tissue diseases such as lupus, Sjögren’s syndrome, and systemic sclerosis, focusing on symptom control, organ protection, and regular monitoring.'
        },
        {
          question: 'Does Dr. Matam Sri Anusha manage vasculitis and rare autoimmune conditions?',
          answer: 'Yes, she evaluates and treats vasculitis and other complex autoimmune disorders, which require careful assessment and specialist-guided therapy. Timely treatment helps reduce complications and disease progression.'
        },
        {
          question: 'Can recurrent pregnancy loss be related to autoimmune disease, and does Dr. Matam Sri Anusha treat it?',
          answer: 'Yes, certain autoimmune conditions can contribute to recurrent pregnancy losses. Dr. Matam Sri Anusha evaluates underlying immune causes and works with a multidisciplinary team to improve pregnancy outcomes.'
        },
        {
          question: 'Does Dr. Matam Sri Anusha treat osteoporosis, gout, and sarcoidosis?',
          answer: 'Yes, she manages osteoporosis to reduce fracture risk, treats gout to control uric acid levels, and provides specialised care for sarcoidosis. Treatment plans are individualised based on disease severity and patient needs.'
        },
        {
          question: 'How can I book an appointment with Dr. Matam Sri Anusha at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Matam Sri Anusha by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/rheumatology-hospital-bangalore',
      expertiseIcons: [
        'assets/icons/REHUM-1.png',
        'assets/icons/REHUM-2.png',
        'assets/icons/REHUM-3.png',
        'assets/icons/REHUM-4.png',
        'assets/icons/REHUM-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Dr. C Rajendran",
      image: "assets/Doc-Inv-Page/Dr-Rajendran.png",
      department: 'INTERNAL MEDICINE',
      speciality: 'INTERNAL MEDICINE',
      about: "<p>Dr. C Rajendran is a highly experienced physician with 29+ years of medical practice, including 19 years post post-graduation. A graduate of the prestigious Armed Forces Medical College and a postgraduate from Mumbai University, he is well-versed in treating a broad spectrum of medical conditions.</p><p>His expertise lies in Diabetes management, Infectious Diseases and General Medicine, with a strong focus on hypertension, asthma, COPD, thyroid disorders and fever management. Known for his exceptional patient communication skills, he believes in dedicating ample time to listen and understand his patient's concerns thoroughly. He is proficient in managing a wide range of conditions, including diabetes, hypertension, asthma, arthritis, anemia and various infections.</p>",
      areasOfExpertise: ["General Medicine", "Diabetes Management", "Infectious Diseases", "Hypertension", "Asthma", "COPD", "Thyroid Disorders", "Fever Management"],
      expertise: "29+",
      qualification: `MD (General Medicine), 
        MBBS, Fellowship in Diabetology,
         Fellowship in Infectious Diseases`,
      time: "",
      date: "Sunday-Tuesday",
      alt: 'Dr-Rajendran.png | Best Internal Medicine Doctor in Bangalore | Rashtrotthana Hospital',
      id: 58,
      title: 'Dr. C Rajendran | Internal Medicine Doctor in Bangalore',
      description: '29+ years experience in diabetes management, general medicine, infectious diseases, hypertension, asthma, thyroid care and fever treatment.',
      faqs: [
        {
          question: 'Who is Dr. C. Rajendran and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. C. Rajendran is a senior General Physician at Rashtrotthana Hospital, RR Nagar, Bangalore, with extensive experience in managing adult medical conditions. He focuses on accurate diagnosis, holistic care, and long-term disease control.'
        },
        {
          question: 'Does Dr. C. Rajendran provide diabetes management at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. C. Rajendran offers comprehensive diabetes management, including blood sugar control, medication planning, and lifestyle guidance. Early and consistent care helps prevent diabetes-related complications.'
        },
        {
          question: 'Can I consult Dr. C. Rajendran for fever and infectious diseases?',
          answer: 'Yes, he evaluates and treats fever of unknown origin and infectious diseases, ensuring timely diagnosis and appropriate treatment. Prompt care is essential to avoid complications and speed recovery.'
        },
        {
          question: 'Does Dr. C. Rajendran treat hypertension and thyroid disorders?',
          answer: 'Yes, Dr. C. Rajendran manages hypertension and thyroid disorders with regular monitoring and personalised treatment plans. Proper control helps reduce long-term cardiovascular and metabolic risks.'
        },
        {
          question: 'Is treatment available for asthma and COPD under Dr. C. Rajendran?',
          answer: 'Yes, Dr. C. Rajendran provides ongoing care for asthma and COPD, focusing on symptom control, inhaler optimisation, and prevention of acute attacks. Long-term management improves breathing and daily activity.'
        },
        {
          question: 'When should I consult a general physician like Dr. C. Rajendran?',
          answer: 'You should consult Dr. C. Rajendran if you have persistent fever, breathing problems, high blood sugar, high blood pressure, thyroid symptoms, or multiple ongoing health concerns. Early medical evaluation leads to better outcomes.'
        },
        {
          question: 'How can I book an appointment with Dr. C. Rajendran at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. C. Rajendran by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/internal-medicine-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/IM-1.png',
        'assets/icons/IM-2.png',
        'assets/icons/IM-3.png',
        'assets/icons/IM-4.png',
        'assets/icons/IM-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: "Dr. Sushmitha Raj R",
      image: "assets/Doc-Inv-Page/Dr-Sushmitha-Raj-R.png",
      department: 'Dental Surgery',
      speciality: 'DENTAL SCIENCES',
      about: "A dedicated and compassionate dentist with 7+ years of experience in general dentistry, restorative procedures, and minor oral extractions. Proficient in diagnosing and treating a wide range of dental conditions while prioritizing patient-centered care. Known for excellent communication and interpersonal skills, ensuring a positive patient experience for individuals of all ages.",
      areasOfExpertise: ["General Dentistry", "Endodontics", "Cosmetic Dentistry"],
      expertise: "7+",
      qualification: "BDS, FRCD",
      time: "",
      date: 'Monday-Saturday',
      alt: 'Dr. Sushmitha Raj R | Best Dentist in Bangalore | Rashtrotthana Hospital',
      id: 55,
      title: 'Dr. Sushmitha Raj R | Dentist in RR Nagar Bangalore',
      description: 'Experienced in general, cosmetic, and restorative dentistry. Skilled in endodontics, extractions, and patient-centered dental care for all age groups.',
      faqs: [
        {
          question: 'Who is Dr. Sushmitha Raj R and what dental services does she offer at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sushmitha Raj R is an experienced Dentist at Rashtrotthana Hospital, RR Nagar, Bangalore, providing comprehensive general dentistry, endodontic care, and cosmetic dental treatments. She focuses on precise diagnosis and comfortable, patient-centred care.'
        },
        {
          question: 'Does Dr. Sushmitha Raj R perform root canal treatment (RCT)?',
          answer: 'Yes, Dr. Sushmitha Raj R specialises in endodontics, including root canal treatment for tooth pain, infection, and deep decay. RCT helps save the natural tooth and relieve pain effectively.'
        },
        {
          question: 'What cosmetic dentistry treatments are available with Dr. Sushmitha Raj R?',
          answer: 'She offers cosmetic dentistry options such as teeth whitening, smile enhancement, and aesthetic restorations. Treatments are planned to improve appearance while maintaining oral health and function.'
        },
        {
          question: 'Can I visit Dr. Sushmitha Raj R for routine dental check-ups and preventive care?',
          answer: 'Yes, Dr. Sushmitha Raj R provides routine dental check-ups, scaling, fillings, and preventive advice to maintain healthy teeth and gums and prevent future dental problems.'
        },
        {
          question: 'Is root canal treatment painful, and how is recovery managed?',
          answer: 'Modern root canal treatment is typically comfortable with local anaesthesia. Dr. Sushmitha Raj R ensures proper post-procedure guidance so patients can recover quickly with minimal discomfort.'
        },
        {
          question: 'When should I consult Dr. Sushmitha Raj R for dental problems?',
          answer: 'You should consult her if you experience tooth pain, sensitivity, swelling, cavities, gum issues, or cosmetic concerns. Early dental care helps avoid complications and preserves natural teeth.'
        },
        {
          question: 'How can I book an appointment with Dr. Sushmitha Raj R at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Sushmitha Raj R by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-dental-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/DETS-1.png',
        'assets/icons/DETS-2.png',
        'assets/icons/DETS-3.png',
        'assets/icons/DETS-4.png',
        'assets/icons/DETS-5.png'
      ],
      happyPatients: '5000+'
    },
    // {
    //   name: "Dr. S K Ranjani",
    //   image : "assets/dummy-doc-female.svg",
    //   department: 'ENT (Ear, Nose, and Throat) ',
    //   speciality: 'ENT SPECIALITY',
    //   about : "Dr. S K Ranjani specializes in both general and complex ENT conditions, with a particular focus on airway disorders in children. She is committed to providing comprehensive care for a range of airway issues, including allergies, obstructive sleep apnea and voice alterations.",
    //   areasOfExpertise : ["Airway disorders, particularly in the pediatric age group","Allergy-related airway issues","Obstructive sleep apnea","Altered voice conditions","General ear, nose and throat complaints (both medical and surgical treatment)"],
    //   expertise : "Years of Experience: 2",
    //   qualification : "MBBS, MS ENT, Fellowship in Pediatric Otolaryngology (RGUHS)  ",
    //   time : "",
    //   date : "Tuesday,Thursday and Saturday",
    //   alt : ''
    // },
    {
      name: "Dr. G. V. Giri",
      image: "assets/Doc-Inv-Page/Dr-Giri.png",
      department: 'Medical Oncologist',
      speciality: 'ONCOLOGY',
      about: "Dr. G. V. Giri graduated with an MBBS from JN Medical College, Belgaum and completed his MD in Internal Medicine from JJM Medical College, Davangere. He further specialized with a DM in Medical Oncology from Kidwai Cancer Institute. With 10 years of experience as an oncologist in the public sector, he is also a published author in national and international journals.",
      areasOfExpertise: ["Head and Neck Cancer", "Lung Cancer", "Breast Cancer", "Gastrointestinal Cancer", "Genito-Urinary Cancer"],
      expertise: "15+",
      qualification: "MBBS, MD, DM",
      time: "",
      date: "Monday, Wednesday and Friday",
      alt: 'Dr. G. V. Giri | Best Oncologist Bangalore | Rashtrotthana Hospital',
      id: 61,
      title: 'Dr. G. V. Giri | Cancer Specialist in RR Nagar Bangalore',
      description: 'Expert in head, neck, lung, breast, GI, and genitourinary cancers. 15+ years of oncology experience with DM in Medical Oncology from Kidwai Institute.',
      faqs: [
        {
          question: 'Who is Dr. G. V. Giri and what cancers does he treat at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. G. V. Giri is an experienced Medical Oncologist at Rashtrotthana Hospital, RR Nagar, Bangalore. He treats head and neck cancer, lung cancer, breast cancer, gastrointestinal cancers, and genito-urinary cancers with evidence-based, personalised care.'
        },
        {
          question: 'Does Dr. G. V. Giri treat head and neck cancers at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. G. V. Giri manages head and neck cancers, including cancers of the oral cavity, throat, and related regions. Treatment plans are individualised based on cancer stage, patient health, and response to therapy.'
        },
        {
          question: 'Can I consult Dr. G. V. Giri for lung cancer diagnosis and treatment?',
          answer: 'Yes, Dr. G. V. Giri provides comprehensive care for lung cancer, from evaluation and staging to systemic therapy and long-term follow-up. Early diagnosis and appropriate treatment significantly improve outcomes.'
        },
        {
          question: 'Is breast cancer treatment available with Dr. G. V. Giri at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. G. V. Giri treats breast cancer using modern oncology protocols. Care focuses on effective disease control while maintaining quality of life through tailored treatment strategies.'
        },
        {
          question: 'Does Dr. G. V. Giri manage gastrointestinal and genito-urinary cancers?',
          answer: 'Yes, Dr. G. V. Giri treats gastrointestinal cancers such as stomach and colorectal cancers, as well as genito-urinary cancers including prostate and bladder cancers. Management includes systemic therapy, monitoring, and supportive care.'
        },
        {
          question: 'When should I see a medical oncologist like Dr. G. V. Giri?',
          answer: 'You should consult Dr. G. V. Giri if you have a confirmed cancer diagnosis, suspected malignancy, or need guidance on cancer treatment options and follow-up care. Early oncology consultation helps plan timely and effective treatment.'
        },
        {
          question: 'How can I book an appointment with Dr. G. V. Giri at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. G. V. Giri by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-oncology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ONC-1.png',
        'assets/icons/ONC-2.png',
        'assets/icons/ONC-3.png',
        'assets/icons/ONC-4.png',
        ' assets/icons/ONC-5.svg'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Dr. Kavya N",
      image: "assets/Doc-Inv-Page/Dr-Kavya-N.png",
      department: 'Ayurveda',
      speciality: 'AYURVEDA',
      about: "Dr. Kavya has completed her BAMS and MD in Dravyaguna Vijnana from Government Ayurveda Medical College, Bengaluru. She has garnered rich clinical experience for over 15 years and specialized in treating various metabolic disorders, diseases of the gut, bone and joint disorders, diseases of the spine, skin health and gynecological wellness. Dr. Kavya comes in with 10 years of experience in Ayurveda and Integrative research from the prestigious Central Council for Research in Ayurvedic Sciences, Ministry of Ayush, Govt of India. She has to her credit a number of publications and has been a reviewer for many reputed peer reviewed journals, multiple awards and recognitions and presentations at National and International conferences. She is well known for her oratory skills and has addressed a wide range of both scientific and general audiences at various occasions.",
      areasOfExpertise: ["Metabolic disorders", "Diseases of the gut", "Skin diseases", "Arthritis", "Diseases of the spine", "Gynecological problems"],
      expertise: "17+",
      qualification: "BAMS, MD (Ay), (PhD)",
      time: "",
      date: "Thursday",
      alt: '',
      id: 78,
      title: 'Dr. Kavya N | Ayurvedic Specialist in Metabolic & Gut Disorders',
      description: 'Expert in Ayurveda for metabolic disorders, gut health, skin conditions, arthritis, spine care & gynecological issues with 15+ years of clinical experience.',
      faqs: [
        {
          question: 'Who is Dr. Kavya N and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Kavya N is an experienced Physician at Rashtrotthana Hospital, RR Nagar, Bangalore, with expertise in managing a wide range of medical conditions affecting metabolism, gut health, skin, joints, spine, and women’s health.'
        },
        {
          question: 'Does Dr. Kavya N treat metabolic disorders like diabetes and hormonal imbalance?',
          answer: 'Yes, Dr. Kavya N treats metabolic disorders, including diabetes and related hormonal imbalances. Her approach focuses on accurate diagnosis, medical management, and lifestyle guidance to achieve long-term control.'
        },
        {
          question: 'Can I consult Dr. Kavya N for digestive and gut-related problems?',
          answer: 'Yes, she manages diseases of the gut, such as acidity, indigestion, bloating, constipation, and chronic abdominal discomfort, with a structured evaluation and treatment plan.'
        },
        {
          question: 'Does Dr. Kavya N treat skin diseases and chronic skin conditions?',
          answer: 'Yes, Dr. Kavya N treats common and chronic skin diseases, addressing both symptoms and underlying medical causes. Early treatment helps prevent recurrence and long-term skin damage.'
        },
        {
          question: 'Is treatment available for arthritis and spine-related pain under Dr. Kavya N?',
          answer: 'Yes, Dr. Kavya N provides care for arthritis and diseases of the spine, focusing on pain relief, inflammation control, and improving mobility. Management is personalised based on the severity and cause of symptoms.'
        },
        {
          question: 'Can Dr. Kavya N help with gynecological problems?',
          answer: 'Yes, she evaluates and treats gynecological problems such as menstrual irregularities, hormonal issues, and related systemic symptoms, offering coordinated and patient-centred care.'
        },
        {
          question: 'How can I book an appointment with Dr. Kavya N at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Kavya N by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/ayurvedic-treatment-bangalore',
      expertiseIcons: [
        'assets/icons/AY-1.png',
        'assets/icons/AY-2.png',
        'assets/icons/AY-3.png',
        'assets/icons/AY-4.png',
        'assets/icons/AY-5.png'
      ],
      happyPatients: '4000+'

    },
    {
      name: "Dr. Sandhya S. Patil",
      image: "assets/dr-sandhaya.png",
      department: 'ENT and Head & Neck Surgery',
      speciality: 'ENT',
      about: "Dr. Sandhya S. Patil is a skilled ENT and Head & Neck Surgeon with over a decade of experience in managing a wide range of ENT conditions. She has trained at prestigious institutions such as KEM Hospital, Pune, and St. John's Medical College, Bengaluru. Her clinical expertise spans endoscopic sinus surgeries, pediatric ENT procedures, allergy management, and complex head and neck surgeries. Dr. Sandhya Patil currently practices as a Consultant at multiple reputed hospitals in Bengaluru and also runs her own ENT clinic, Swasthya ENT Centre. She is known for her thorough patient care, surgical precision and commitment to academic excellence.",
      areasOfExpertise: ['Septoplasty', 'Turbinectomy', 'Turbinoplasty', 'Functional Endoscopic Sinus Surgery (FESS)', 'Nasal Endoscopy and Biopsy', 'Skin Prick Test', 'Allergen Immunotherapy', 'Tympanoplasty', 'Cortical Mastoidectomy', 'Modified Radical Mastoidectomy', 'Auroplasty', 'Myringotomy and Grommet Insertion', 'Tonsillectomy', 'Coblation Adenoidectomy', 'Conventional Adenoidectomy', 'Direct Laryngoscopy', 'Microlaryngeal Surgery', 'Tracheostomy', 'Incision and Drainage', 'Submandibular Gland Excision', 'Hemithyroidectomy', 'Total Thyroidectomy', 'Diagnosis and Management of Head and Neck Oncologic Surgeries'],
      expertise: "12+",
      qualification: "MBBS, DLO, DNB (ENT), AASC",
      time: "",
      date: "",
      alt: 'Dr. Sandhya S. Patil | Best ENT Consultant in Bangalore | Rashtrotthana Hospital',
      title: 'Dr. Sandhya S. Patil | ENT Specialist & Head-Neck Surgeon in Bengaluru',
      id: 68,
      description: 'Consult Dr. Sandhya S. Patil, ENT & Head-Neck Surgeon in Bengaluru. Expert in sinus surgery, pediatric ENT, allergy care, and thyroid surgeries.',
      faqs: [
        {
          question: 'Who is Dr. Sandhya S. Patil and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Sandhya S. Patil is an experienced ENT and Head–Neck Surgeon at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in advanced nasal, ear, throat, and head–neck surgeries with a strong focus on precision and patient safety.'
        },
        {
          question: 'Does Dr. Sandhya S. Patil perform septoplasty and sinus surgery for nasal blockage?',
          answer: 'Yes, Dr. Sandhya S. Patil performs septoplasty, turbinectomy, turbinoplasty, and Functional Endoscopic Sinus Surgery (FESS) for chronic nasal blockage and sinusitis. These procedures help improve breathing and reduce recurrent infections.'
        },
        {
          question: 'Is allergy testing and immunotherapy available with Dr. Sandhya S. Patil?',
          answer: 'Yes, she offers skin prick testing and allergen immunotherapy for patients with allergic rhinitis and nasal allergies. This helps identify triggers and reduce long-term dependency on medications.'
        },
        {
          question: 'What ear surgeries are treated by Dr. Sandhya S. Patil at Rashtrotthana Hospital?',
          answer: 'Dr. Sandhya S. Patil performs tympanoplasty, cortical and modified radical mastoidectomy, myringotomy with grommet insertion, and auralplasty. These surgeries address chronic ear infections, hearing loss, and middle ear disease.'
        },
        {
          question: 'Does Dr. Sandhya S. Patil treat tonsil, adenoid, and voice box disorders?',
          answer: 'Yes, she performs tonsillectomy, coblation and conventional adenoidectomy, as well as direct laryngoscopy and microlaryngeal surgery for voice disorders. Early treatment helps prevent speech and breathing complications.'
        },
        {
          question: 'Are thyroid, salivary gland, and tracheostomy procedures handled by Dr. Sandhya S. Patil?',
          answer: 'Dr. Sandhya S. Patil is experienced in submandibular gland excision, hemithyroidectomy, total thyroidectomy, and tracheostomy procedures. These surgeries require specialised ENT and head–neck surgical expertise.'
        },
        {
          question: 'Does Dr. Sandhya S. Patil manage head and neck cancer surgeries?',
          answer: 'Yes, she is involved in the diagnosis and management of head and neck oncologic surgeries, providing comprehensive surgical care in coordination with oncology teams. Early diagnosis and expert surgical planning are crucial for optimal outcomes.'
        }
      ],
      departmentSlug: '/specialities/best-ent-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ENT-1.png',
        'assets/icons/ENT-2.png',
        'assets/icons/ENT-3.png',
        'assets/icons/ENT-4.png',
        'assets/icons/ENT-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: "Dr. Dona Susan John",
      image: "assets/dr-dona-susan-john.png",
      department: 'Ophthalmology',
      speciality: 'OPHTHALMOLOGY',
      about: "<p>Graduation (MBBS) from Govt Medical College, Thiruvananthapuram. (1996-2002)   `Post graduation(DNB Ophthal) and medical retina from Chaitanya Eye Hospital and research institute, Thiruvananthapuram. (2003-2006)<p> <p>Worked in Mulamoottil Eye Hospital, Kozhencherry, Kerala for 5 years.(2007-2012 April)</p> <p>Worked in Vasan Eye Care, Bangalore for 6 years. (2012 may-2018 feb) Self employed in Move &Shine orthopaedic wellness and eye clinic, Uttarahalli Bangalore from 2018 till now.</p>",
      areasOfExpertise: ['Medical Retina', 'General Ophthalmology', 'Diabetic Retinopathy Screening and Treatment', 'Age related Macular Degeneration Screening and Treatment', 'Lasers and Intravitreal injections'],
      expertise: "21+",
      qualification: "MBBS, DNB Ophthal, FICO",
      time: "",
      date: "",
      alt: '',
      id: 65,
      title: 'Dr. Dona Susan John | Senior Eye doctor in Bangalore',
      description: 'Consult Dr. Dona Susan John, experienced ophthalmologist in Bangalore with 18 years in treating retinal conditions. Trusted care for your eye health.',
      faqs: [
        {
          question: 'Who is Dr. Dona Susan John and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Dona Susan John is an experienced Medical Retina Specialist and Ophthalmologist at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in diagnosing and treating retinal diseases with advanced medical and laser-based therapies.'
        },
        {
          question: 'Does Dr. Dona Susan John treat diabetic retinopathy at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Dona Susan John provides diabetic retinopathy screening and treatment, including regular eye evaluations for diabetic patients. Early detection and timely treatment help prevent vision loss and long-term eye complications.'
        },
        {
          question: 'Can I consult Dr. Dona Susan John for age-related macular degeneration (AMD)?',
          answer: 'Yes, she offers screening and treatment for age-related macular degeneration (AMD), focusing on preserving vision and slowing disease progression through timely medical intervention.'
        },
        {
          question: 'What medical retina conditions are treated by Dr. Dona Susan John?',
          answer: 'Dr. Dona Susan John treats a wide range of medical retina conditions, including diabetic eye disease, macular disorders, and retinal vascular problems. Her approach combines accurate diagnosis with evidence-based treatment.'
        },
        {
          question: 'Are laser treatments and intravitreal injections performed by Dr. Dona Susan John?',
          answer: 'Yes, she performs retinal laser treatments and intravitreal injections for conditions such as diabetic retinopathy and macular degeneration. These procedures help control disease progression and protect vision.'
        },
        {
          question: 'When should I see a medical retina specialist like Dr. Dona Susan John?',
          answer: 'You should consult Dr. Dona Susan John if you have diabetes, blurred vision, sudden vision changes, floaters, or age-related vision issues. Early retinal evaluation is key to preserving eyesight.'
        },
        {
          question: 'How can I book an appointment with Dr. Dona Susan John at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Dona Susan John by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-eye-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OPTH-1.png',
        'assets/icons/OPTH-2.png',
        'assets/icons/OPTH-3.png',
        'assets/icons/OPTH-4.png',
        'assets/icons/OPTH-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: "Dr. Nithin J",
      image: "assets/dr-nithin-j.png",
      department: 'Nephrology',
      speciality: 'NEPHROLOGY',
      about: "<p>Dr. Nithin J is a skilled and experienced nephrologist known for his precision in renal procedures and holistic approach to kidney care. He has independently performed over 1000 renal biopsies, inserted more than 1000 uncuffed jugular and femoral catheters and over 200 cuffed jugular catheters - demonstrating his strong procedural expertise.</p> <p>He has managed the complete workup and post-transplant care of more than 300 renal transplant recipients, including complex cases involving post-transplant complications. His technical proficiency is complemented by a deep clinical interest in glomerular diseases, dialysis management and transplant nephrology.</p> <p>Dr. Nithin has actively contributed to nephrology research, with several national presentations and a publication in an international journal. His academic involvement includes studies on idiopathic membranous nephropathy, drug-induced nephrotoxicity and individualized dialysis strategies. Through his hands-on skills and research-driven approach, he remains committed to delivering comprehensive, high-quality renal care.</p>",
      areasOfExpertise: ['Clinical nephrology', 'Renal transplantation (pre- and post-operative care)', 'Hemodialysis and peritoneal dialysis', 'Management of glomerular diseases', 'Renal biopsies and catheter placements', 'Post-transplant complication management'],
      expertise: "15+",
      qualification: " MBBS, MD in General Medicine, DM in Nephrology",
      time: "",
      date: "",
      id: 71,
      alt: 'Dr. Nithin J | Best Nephrology doctor in Bangalore | Rashtrotthana Hospital',
      title: 'Dr. Nithin J | Trusted Nephrologist for Transplant & Dialysis',
      description: 'Expert in renal biopsies, dialysis, glomerular diseases, and transplant care. 1000+ procedures performed. Trusted nephrologist with 13+ years of experience.',
      faqs: [
        {
          question: 'Who is Dr. Nithin J and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Nithin J is an experienced Nephrologist at Rashtrotthana Hospital, RR Nagar, Bangalore. He specialises in kidney diseases, dialysis care, and comprehensive pre- and post-renal transplant management.'
        },
        {
          question: 'Does Dr. Nithin J treat chronic kidney disease and other renal disorders?',
          answer: 'Yes, Dr. Nithin J provides expert care for chronic kidney disease (CKD), acute kidney injury, and glomerular diseases. Early diagnosis and regular monitoring help slow disease progression and reduce complications.'
        },
        {
          question: 'Can I consult Dr. Nithin J for dialysis treatment at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Nithin J manages both hemodialysis and peritoneal dialysis, ensuring safe dialysis planning, access care, and long-term monitoring tailored to each patient’s condition.'
        },
        {
          question: 'Does Dr. Nithin J handle kidney transplant care before and after surgery?',
          answer: 'Yes, he has extensive experience in renal transplantation, providing thorough evaluation before transplant and close follow-up after surgery. Post-transplant care focuses on graft health, infection prevention, and medication management.'
        },
        {
          question: 'Are renal biopsies and catheter placements performed by Dr. Nithin J?',
          answer: 'Yes, Dr. Nithin J performs renal biopsies and dialysis catheter placements when required for diagnosis or treatment. These procedures are done with strict safety protocols and careful patient counselling.'
        },
        {
          question: 'Can Dr. Nithin J manage complications after kidney transplantation?',
          answer: 'Yes, he specialises in post-transplant complication management, including rejection, infections, and medication-related issues. Timely intervention helps protect kidney function and improve long-term transplant outcomes.'
        },
        {
          question: 'How can I book an appointment with Dr. Nithin J at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Nithin J by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-nephrology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/N-1.png',
        'assets/icons/N-2.png',
        'assets/icons/N-3.png',
        'assets/icons/N-4.png',
        'assets/icons/N-5.png'
      ],
      happyPatients: '4000+'

    },
    {
      name: "Dr. Dhruva Ithal",
      image: "assets/dr-dhruva-ithal.png",
      department: 'Psychiatry',
      speciality: 'PSYCHIATRY',
      about: "<p>Dr. Dhruva Ithal is a highly accomplished psychiatrist with extensive experience across clinical care, academic research and mental health training. A graduate of NIMHANS with an MD and Ph.D. in Psychiatry, he has also held a prestigious Research Training Fellowship from the Wellcome Trust-DBT India Alliance. His expertise spans a wide range of psychiatric conditions, with a strong focus on treatment-resistant schizophrenia, adolescent mental health, substance use disorders and neurostimulation therapies such as ECT and TMS.</p> <p>Dr. Dhruva has been associated with leading institutions including NIMHANS and Harvard Medical School (as a visiting research scholar), and has contributed to several national and international research projects. He integrates neuroscience, psychotherapy and holistic practices like yoga and art therapy into patient care. Passionate about advancing mental health awareness and evidence-based treatment, he is also actively involved in training young professionals and engaging with the community through public education initiatives.</p>",
      areasOfExpertise: ['General & Adult Psychiatry', 'Schizophrenia', 'Adolescent Psychiatry', 'Perinatal Psychiatry', 'Brain Stimulation Techniques (ECT, TMS)', 'Neuroimaging and Functional MRI', 'Substance Use Disorders', 'Psychotherapy (CBT, Psychodynamic, Trauma-focused)', 'Dance, Art, and Yoga-based therapies'],
      expertise: "15+",
      qualification: "MBBS, MD (NIMHANS), Ph.D. in Psychiatry (NIMHANS)",
      time: "",
      date: "",
      alt: 'Dr. Dhruva Ithal - Expert Psychiatrist in Bangalore',
      title: 'Dr. Dhruva Ithal - Expert Psychiatrist in Bangalore',
      id: 69,
      description: 'Dr. Dhruva Ithal specializes in schizophrenia, adolescent psychiatry, neurostimulation therapies, and psychotherapy with 13+ years of clinical experience.',
      faqs: [
        {
          question: 'Who is Dr. Dhruva Ithal and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Dhruva Ithal is an experienced Psychiatrist at Rashtrotthana Hospital, RR Nagar, Bangalore. He provides comprehensive care for adult and adolescent mental health conditions using medication, psychotherapy, and advanced brain-stimulation techniques.'
        },
        {
          question: 'Does Dr. Dhruva Ithal treat schizophrenia and severe mental illnesses?',
          answer: 'Yes, Dr. Dhruva Ithal specialises in treating schizophrenia and other severe mental disorders, offering structured evaluation and long-term management. Early intervention and consistent follow-up help improve functioning and quality of life.'
        },
        {
          question: 'Are brain stimulation treatments like ECT and TMS available with Dr. Dhruva Ithal?',
          answer: 'Yes, he offers brain stimulation techniques such as ECT (Electroconvulsive Therapy) and TMS (Transcranial Magnetic Stimulation) for selected conditions like severe depression and treatment-resistant illness. These therapies are delivered under strict safety protocols.'
        },
        {
          question: 'Can I consult Dr. Dhruva Ithal for substance use and addiction-related problems?',
          answer: 'Yes, Dr. Dhruva Ithal treats substance use disorders, including alcohol and drug dependence, with evidence-based treatment plans focused on recovery, relapse prevention, and mental wellbeing.'
        },
        {
          question: 'Does Dr. Dhruva Ithal provide psychotherapy and counselling?',
          answer: 'Yes, he offers psychotherapy, including CBT, psychodynamic therapy, and trauma-focused approaches, based on individual needs. Therapy helps patients develop coping skills and address underlying emotional difficulties.'
        },
        {
          question: 'Is care available for adolescents and mental health concerns during pregnancy or after delivery?',
          answer: 'Yes, Dr. Dhruva Ithal provides specialised care in adolescent psychiatry and perinatal psychiatry, addressing emotional, behavioural, and psychological concerns during adolescence, pregnancy, and the post-partum period.'
        },
        {
          question: 'How can I book an appointment with Dr. Dhruva Ithal at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Dhruva Ithal by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-pshychiatry-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PSYC-1.png',
        'assets/icons/PSYC-2.png',
        'assets/icons/PSYC-3.png',
        'assets/icons/PSYC-4.png',
        'assets/icons/PSYC-5.png'
      ],
      happyPatients: '2000+'

    },
    {
      name: "Dr. Limesh M",
      image: "assets/dr-limesh.png",
      department: 'Nephrology',
      speciality: 'NEPHROLOGY',
      about: "<p>Dr. Limesh M is a nephrologist and transplant physician with a strong foundation in both clinical care and academic nephrology. His core strengths include vascular access procedures, kidney biopsies and the comprehensive management of transplant patients. He has a keen interest in CKD prevention, acute kidney injury in critical care settings and post-transplant immunosuppression monitoring.</p> <p>posters presented at reputed national forums on topics such as CRBSI incidence, the safety of ACE inhibitors in CKD, MMF level monitoring and rare conditions like Dent’s disease and nephrogenic systemic fibrosis. Known for his systematic and patient-centered approach, Dr. Limesh integrates evidence-based medicine with procedural expertise to support high-quality kidney care.</p>",
      areasOfExpertise: ['Management of chronic kidney disease (CKD) and acute kidney injury (AKI)', 'Critical care nephrology and ICU monitoring', 'Kidney transplantation (live and cadaveric)', 'Renal biopsies and vascular access procedures', 'Catheterization techniques (jugular and femoral)', 'Post-transplant care and immunosuppressive therapy monitoring', 'Nephrology-related emergency and casualty care'],
      expertise: "16+",
      qualification: "MBBS, MD in General Medicine, DNB (Nephrology)",
      time: "",
      date: "",
      id: 70,
      alt: 'Dr. Limesh M | Nephrologist & Transplant Physician Bangalore',
      title: 'Dr. Limesh M | Nephrologist & Transplant Physician',
      description: 'Dr. Limesh M offers expert care in CKD, AKI, dialysis, renal biopsies, and kidney transplantation. 15+ years of experience in nephrology and ICU care.',
      faqs: [
        {
          question: 'Who is Dr. Limesh M and what is his specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Limesh M is an experienced Nephrologist and Renal Transplant Specialist at Rashtrotthana Hospital, RR Nagar, Bangalore. He manages complex kidney diseases, dialysis care, and kidney transplantation with a strong focus on critical care nephrology.'
        },
        {
          question: 'Does Dr. Limesh M treat chronic kidney disease (CKD) and acute kidney injury (AKI)?',
          answer: 'Yes, Dr. Limesh M specialises in the management of CKD and AKI, including early diagnosis, medical stabilisation, and long-term monitoring. Timely treatment helps slow disease progression and prevent complications.'
        },
        {
          question: 'Is critical care nephrology and ICU kidney monitoring available with Dr. Limesh M?',
          answer: 'Yes, Dr. Limesh M provides critical care nephrology services, closely monitoring kidney function in ICU patients with severe illness, sepsis, or multi-organ involvement. This expertise is crucial in life-threatening situations.'
        },
        {
          question: 'Does Dr. Limesh M perform kidney transplantation and post-transplant care?',
          answer: 'Yes, he is experienced in live and cadaveric kidney transplantation, offering complete pre- and post-transplant care. Post-transplant management includes immunosuppressive therapy monitoring to protect graft function.'
        },
        {
          question: 'Are renal biopsies and dialysis access procedures done by Dr. Limesh M?',
          answer: 'Yes, Dr. Limesh M performs renal biopsies and vascular access procedures, including jugular and femoral catheterisation. These procedures help in accurate diagnosis and safe initiation of dialysis.'
        },
        {
          question: 'Can Dr. Limesh M manage kidney-related emergencies?',
          answer: 'Yes, he provides nephrology-related emergency and casualty care, including sudden kidney failure, electrolyte imbalances, and dialysis emergencies. Rapid intervention is essential for patient stabilisation.'
        },
        {
          question: 'How can I book an appointment with Dr. Limesh M at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Limesh M by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/best-nephrology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/N-1.png',
        'assets/icons/N-2.png',
        'assets/icons/N-3.png',
        'assets/icons/N-4.png',
        'assets/icons/N-5.png'
      ],
      happyPatients: '2000+'

    },
    {
      name: "Dr. Shruti Suresh",
      image: "assets/dr-shruti-suresh.png",
      speciality: 'Internal Medicine',
      department: 'INTERNAL MEDICINE',
      about: "Compassionate and skilled physician with over 12 years of experience in providing high-quality care in General Medicine. Adept at diagnosing and treating a variety of conditions while building strong relationships with patients. Committed to continuous learning and advancing medical knowledge.",
      areasOfExpertise: ['Communicable and non comminacable diseases', 'particularly Diabetes Mellitus'],
      expertise: "20+",
      qualification: "MBBS, DNB (Internal Medicine)",
      time: "",
      date: "",
      id: 73,
      alt: 'Dr. Shruti Suresh| Nephrologist & Transplant Physician Bangalore',
      title: 'Dr. Shruti Suresh - Experienced General Physician in Bangalore',
      description: 'Consult Dr. Shruti Suresh for expert care in general medicine and long-term health management in Rajarajeshwari Nagar.',
      faqs: [
        {
          question: 'Who is Dr. Shruti Suresh and what is her specialty at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: 'Dr. Shruti Suresh is an experienced General Physician at Rashtrotthana Hospital, RR Nagar, Bangalore. She specialises in the management of communicable and non-communicable diseases, with a strong clinical focus on Diabetes Mellitus.'
        },
        {
          question: 'Does Dr. Shruti Suresh treat diabetes at Rashtrotthana Hospital?',
          answer: 'Yes, Dr. Shruti Suresh provides comprehensive diabetes management, including blood sugar control, medication planning, lifestyle counselling, and long-term monitoring. Early and consistent care helps prevent diabetes-related complications.'
        },
        {
          question: 'Can I consult Dr. Shruti Suresh for fever, infections, and communicable diseases?',
          answer: 'Yes, she evaluates and treats communicable diseases, including fever and common infections, ensuring timely diagnosis and appropriate treatment to support quick recovery.'
        },
        {
          question: 'Does Dr. Shruti Suresh manage lifestyle-related non-communicable diseases?',
          answer: 'Yes, Dr. Shruti Suresh treats non-communicable diseases such as diabetes and related metabolic conditions. Her approach combines medical treatment with preventive guidance to improve long-term health outcomes.'
        },
        {
          question: 'When should I see Dr. Shruti Suresh for diabetes-related symptoms?',
          answer: 'You should consult Dr. Shruti Suresh if you experience frequent urination, excessive thirst, unexplained weight changes, fatigue, or abnormal blood sugar reports. Early evaluation helps achieve better glucose control.'
        },
        {
          question: 'Does Dr. Shruti Suresh provide preventive health advice along with treatment?',
          answer: 'Yes, preventive care is an important part of her practice. She guides patients on diet, physical activity, infection prevention, and regular health monitoring to reduce disease risk and recurrence.'
        },
        {
          question: 'How can I book an appointment with Dr. Shruti Suresh at Rashtrotthana Hospital, RR Nagar, Bangalore?',
          answer: `You can book an appointment with Dr. Shruti Suresh by calling Rashtrotthana Hospital’s appointment helpline at <a href="tel:+918069239999">080 6923 9999</a>, visiting the hospital reception, or booking online through the official Rashtrotthana Hospital website.`
        }
      ],
      departmentSlug: '/specialities/internal-medicine-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/IM-1.png',
        'assets/icons/IM-2.png',
        'assets/icons/IM-3.png',
        'assets/icons/IM-4.png',
        'assets/icons/IM-5.png'
      ],
      happyPatients: '6000+'

    },
    {
      name: "Dr. Manasa M. G.",
      image: "assets/dr-manasa-m-g-doc-page.png",
      department: 'Endocrinology',
      speciality: 'ENDOCRINOLOGY',
      about: "Dr. Manasa M. G. is an accomplished endocrinologist-in-training with extensive experience in managing complex hormonal disorders. She completed her M.D. in Internal Medicine as the university topper and secured an All India 3rd rank in NEET-SS for DM Endocrinology. She has presented and won awards at national conferences on topics ranging from hypothyroid myopathy to pituitary disorders, and has published multiple case reports in reputed journals. She is skilled in a wide range of diagnostic and interventional procedures, committed to evidence-based endocrine care, and dedicated to advancing her expertise to provide comprehensive management for patients with endocrine and metabolic diseases.",
      areasOfExpertise: ["Diabetes and thyroid disorders", "Hypertension with hormonal causes", "Adrenal and pituitary diseases", "Bone metabolism and osteoporosis", "Rare endocrine syndromes", "General endocrine care"],
      expertise: " 10+",
      qualification: "MBBS, MD Internal Medicine, DM Endocrinology",
      time: "",
      date: "",
      id: 75,
      alt: 'Dr. Manasa M. G. | Best Endocrinology Doctor in Bangalore | Rashtrotthan Hospital',
      title: 'Dr. Manasa M. G. | Endocrinologist - Hormone & Diabetes Expert',
      description: 'Meet Dr. Manasa M. G., expert in endocrine care with research-backed experience in treating hormonal and metabolic disorders in Bangalore.',
      faqs: [
        {
          question: 'Who is Dr. Manasa M G and what is her specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Manasa M G is an Endocrinologist at Rashtrotthana Hospital, Bangalore, specialising in the diagnosis and management of hormonal and metabolic disorders. She is experienced in treating both common and complex endocrine conditions with a structured, patient-centric approach.'
        },
        {
          question: 'Can I consult Dr. Manasa M G for diabetes and thyroid disorders?',
          answer: 'Yes, Dr. Manasa M G provides comprehensive care for diabetes and thyroid disorders, including hypothyroidism, hyperthyroidism, and long-term diabetes management. Treatment focuses on accurate diagnosis, medication optimisation, and lifestyle guidance.'
        },
        {
          question: 'Does Dr. Manasa M G treat hormonal causes of high blood pressure?',
          answer: 'Yes, Dr. Manasa M G evaluates and manages hypertension caused by hormonal imbalances, such as adrenal or endocrine-related conditions. Identifying the root cause helps in achieving better blood pressure control and preventing complications.'
        },
        {
          question: 'What adrenal and pituitary disorders are treated by Dr. Manasa M G?',
          answer: 'She treats adrenal and pituitary diseases, including hormonal excess or deficiency states that affect growth, metabolism, and blood pressure. Early diagnosis and targeted treatment are key components of her endocrine care.'
        },
        {
          question: 'Can Dr. Manasa M G help with osteoporosis and bone metabolism disorders?',
          answer: 'Yes, Dr. Manasa M G manages bone metabolism disorders, including osteoporosis, focusing on fracture prevention and bone health. Treatment plans may include hormonal evaluation, medications, and nutritional guidance.'
        },
        {
          question: 'Does Dr. Manasa M G treat rare endocrine syndromes?',
          answer: 'Yes, Dr. Manasa M G has experience in diagnosing and managing rare endocrine syndromes, which often require detailed hormonal evaluation and long-term follow-up. Care is individualised based on the patient’s condition and overall health.'
        },
        {
          question: 'When should I see an endocrinologist like Dr. Manasa M G at Rashtrotthana Hospital?',
          answer: 'You should consult Dr. Manasa M G if you have uncontrolled diabetes, thyroid problems, unexplained weight changes, hormonal blood pressure issues, or bone health concerns. Early endocrine evaluation helps prevent long-term complications.'
        }
      ],
      departmentSlug: '/specialities/best-endocrinology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/ENDO-1.png',
        'assets/icons/ENDO-2.png',
        'assets/icons/ENDO-3.png',
        'assets/icons/ENDO-4.png',
        'assets/icons/ENDO-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Ms. Samarchitha S",
      image: "assets/ms-samarchitha-s.png",
      department: 'Clinical Psychology',
      speciality: 'PSYCHIATRY',
      desgination: 'Clinical Psychologist',
      about: "Ms. Samarchitha S is a trained clinical psychologist with over six years of experience, specializing in the assessment and treatment of a wide range of psychological and neuropsychological conditions. Her professional journey includes working with diverse patient populations across age groups - including children, adults and the elderly - in both psychiatric and neurological settings.",
      areasOfExpertise: ["Mood disorders", "Obsessive-compuslive disorder", "Anxiety disorders", "Dissociative and conversion disorders", "Sleep disorders", "Personality disorders", "Substance-related disorders", "Neurodevelopmental disorders (Autism, ADHD,IDD)", "Neurodegenerative disorders"],
      expertise: "7+",
      qualification: "MSc. Clinical Psychology, M.Phil Clinical Psychology, Fellowship in Clinical Neuropsychology(NIMHANS)",
      time: "",
      date: "",
      id: 84,
      alt: 'Ms. Samarchitha S | Best Psychology Hospital in Bangalore | Rashtrotthana Hospital',
      title: 'Ms. Samarchitha S | Clinical Psychologist in Bangalore',
      description: 'Ms. Samarchitha S, Clinical Psychologist at Rashtrotthana Hospital Bangalore, offers expert care for mood, anxiety, sleep and personality disorders.',
      faqs: [
        {
          question: 'Who is Ms. Samarchitha S and what mental health conditions does she treat at Rashtrotthana Hospital, Bangalore?',
          answer: 'Ms. Samarchitha S is a Mental Health Specialist at Rashtrotthana Hospital, Bangalore, with experience in treating mood disorders, anxiety disorders, OCD, sleep disorders, and neurodevelopmental conditions. She follows evidence-based, patient-centred mental healthcare.'
        },
        {
          question: 'Can I consult Ms. Samarchitha S for depression, mood swings, or bipolar disorder?',
          answer: 'Yes, Ms. Samarchitha S provides structured care for mood disorders, including depression and bipolar spectrum conditions. Treatment focuses on symptom control, emotional stability, and long-term mental wellbeing.'
        },
        {
          question: 'Does Ms. Samarchitha S treat anxiety disorders and OCD?',
          answer: 'Yes, Ms. Samarchitha S offers comprehensive treatment for anxiety disorders and obsessive-compulsive disorder (OCD). Care plans may include psychotherapy, behavioural strategies, and medical management when required.'
        },
        {
          question: 'Is treatment available for sleep disorders and stress-related conditions?',
          answer: 'Yes, she manages sleep disorders, including insomnia linked to psychological causes and stress. Early assessment helps improve sleep quality and overall mental health.'
        },
        {
          question: 'Can Ms. Samarchitha S help with substance-related and addiction disorders?',
          answer: 'Yes, Ms. Samarchitha S treats substance-related disorders, including alcohol and behavioural addictions, with a focus on recovery and relapse prevention. Treatment is supportive, confidential, and individualised.'
        },
        {
          question: 'Does she treat autism, ADHD, and other neurodevelopmental disorders?',
          answer: 'Yes, Ms. Samarchitha S has experience managing neurodevelopmental disorders such as Autism Spectrum Disorder, ADHD, and intellectual developmental disorders (IDD). Care includes assessment, counselling, and long-term behavioural support.'
        },
        {
          question: 'Why choose Ms. Samarchitha S at Rashtrotthana Hospital for mental health care?',
          answer: 'Ms. Samarchitha S brings clinical experience across a wide range of psychiatric and neuropsychiatric conditions, including personality and neurodegenerative disorders. At Rashtrotthana Hospital, patients receive compassionate mental healthcare in a safe, multidisciplinary hospital environment.'
        }
      ],
      departmentSlug: '/specialities/best-pshychiatry-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PSYC-1.png',
        'assets/icons/PSYC-2.png',
        'assets/icons/PSYC-3.png',
        'assets/icons/PSYC-4.png',
        'assets/icons/PSYC-5.png'
      ],
      happyPatients: '1000+'

    },
    {
      name: "Dr. Sandeep K. M",
      image: "assets/dr-sandeep-k-m.png",
      department: 'Orthopedics',
      speciality: 'ORTHOPEDICS',
      desgination: 'Consultant - Orthopaedic Surgeon',
      about: "Dr. Sandeep K M is an experienced orthopedic surgeon with over a decade of clinical expertise in trauma care, joint replacement (arthroplasty), and arthroscopy. He completed his MBBS from Mysore Medical College and MS in Orthopedics from Bangalore Medical College & Research Institute. He further specialized with a Fellowship in Joint Replacement at Sparsh Hospital, Bangalore. Dr. Sandeep has previously worked at Apollo Hospital, Bangalore, and currently serves as an Associate Professor at RajaRajeswari Medical College, alongside his clinical practice.",
      areasOfExpertise: ["Trauma", "Arthroplasty", "Arthroscopy", "Rheumatology"],
      expertise: "13+",
      qualification: "MBBS, MS (Orthopedics), Fellowship in Joint Replacemen",
      time: "",
      date: "",
      id: 85,
      alt: 'Dr. Sandeep K M, top orthopedic surgeon in Bangalore | Rashtrotthana Hospital',
      title: 'Dr. Sandeep K M | Expert Orthopedic Surgeon in Bangalore',
      description: 'Expert orthopedic care by Dr. Sandeep K M, with 13+ years in trauma, joint replacement, and arthroscopy. MBBS, MS, Fellowship-trained. At Rashtrotthana Hospital, restoring mobility. Book now!',
      faqs: [
        {
          question: 'Who is Dr. Sandeep K M and what is his specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Sandeep K M is an Orthopaedic specialist at Rashtrotthana Hospital, Bangalore, with expertise in trauma care, joint replacement (arthroplasty), arthroscopy, and rheumatology. He is experienced in managing both acute injuries and long-term joint conditions.'
        },
        {
          question: 'Can Dr. Sandeep K M treat fractures and accident-related injuries?',
          answer: 'Yes, Dr. Sandeep K M specialises in orthopaedic trauma care, including fractures, dislocations, and complex accident-related injuries. Treatment focuses on restoring bone alignment, joint stability, and early functional recovery.'
        },
        {
          question: 'Does Dr. Sandeep K M perform joint replacement surgeries (arthroplasty)?',
          answer: 'Yes, Dr. Sandeep K M performs arthroplasty procedures for patients with severe joint damage due to arthritis or degeneration. Joint replacement helps relieve chronic pain and significantly improves mobility and quality of life.'
        },
        {
          question: 'What conditions are treated using arthroscopy by Dr. Sandeep K M?',
          answer: 'Dr. Sandeep K M uses arthroscopy (keyhole surgery) to treat knee, shoulder, and other joint problems such as ligament injuries, meniscus tears, and cartilage damage. Arthroscopic surgery usually allows faster recovery and smaller incisions.'
        },
        {
          question: 'Can I consult Dr. Sandeep K M for arthritis and rheumatology-related problems?',
          answer: 'Yes, Dr. Sandeep K M manages rheumatological conditions, including inflammatory and degenerative arthritis. Treatment plans are personalised to control pain, reduce inflammation, and preserve joint function.'
        },
        {
          question: 'When should I see Dr. Sandeep K M for joint pain or movement problems?',
          answer: 'You should consult Dr. Sandeep K M if you experience persistent joint pain, stiffness, swelling, limited movement, or difficulty walking. Early orthopaedic evaluation can prevent further joint damage and improve long-term outcomes.'
        },
        {
          question: 'Why choose Dr. Sandeep K M at Rashtrotthana Hospital for orthopaedic care?',
          answer: 'Dr. Sandeep K M combines clinical experience in trauma, arthroplasty, arthroscopy, and rheumatology with a patient-focused approach. At Rashtrotthana Hospital, patients receive comprehensive orthopaedic care supported by advanced diagnostics and rehabilitation services.'
        }
      ],
      departmentSlug: '/specialities/best-orthopaedics-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/O-1.png',
        'assets/icons/O-2.png',
        'assets/icons/O-3.png',
        'assets/icons/O-4.png',
        'assets/icons/O-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Dr. Pooja Prasad",
      image: "assets/Doc-Inv-Page/Dr-Pooja.png",
      department: 'Radiologist',
      // speciality: 'ORTHOPEDICS',
      desgination: 'Consultant - Radiologist',
      about: "",
      areasOfExpertise: ["Diagnostic Radiologist", "CT and MRI interpretation", "Ultrasound & Doppler imaging", "X-ray", "Neuroimaging (Brain & Spine)", "Mammography / Sonography / Ultrasound / MRI Or CT", "Musculoskeletal imaging", "Chest imaging", "Abdominal & pelvic imaging", "Emergency & trauma imaging", "Obstetric ultrasound (routine & growth scans)"],
      expertise: "2+",
      qualification: "MBBS , MD, DNB Radiology",
      time: "",
      date: "",
      alt: 'Dr.Pooja Prasad, top Radiologist surgeon in Bangalore | Rashtrotthana Hospital',
      title: 'Dr.Pooja Prasad | Expert Radiologist Surgeon in Bangalore',
      // description:'Expert orthopedic care by Dr. Sandeep K M, with 11+ years in trauma, joint replacement, and arthroscopy. MBBS, MS, Fellowship-trained. At Rashtrotthana Hospital, restoring mobility. Book now!',
      faqs: [
        {
          question: 'Who is Dr. Pooja Prasad and what is her role at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Pooja Prasad is a Diagnostic Radiologist at Rashtrotthana Hospital, Bangalore, with experience in advanced medical imaging. She specialises in accurate interpretation of CT, MRI, ultrasound, Doppler, X-ray, and mammography studies to support timely diagnosis and treatment.'
        },
        {
          question: 'What imaging services are handled by Dr. Pooja Prasad at Rashtrotthana Hospital?',
          answer: 'Dr. Pooja Prasad reports CT scans, MRI scans, ultrasound, Doppler studies, X-rays, and mammography. Her work plays a crucial role in diagnosing neurological, abdominal, chest, musculoskeletal, and emergency conditions.'
        },
        {
          question: 'Can Dr. Pooja Prasad interpret CT and MRI scans for brain and spine problems?',
          answer: 'Yes, she has expertise in neuroimaging, including brain and spine CT and MRI, used to detect stroke, tumors, spine disorders, and nerve-related conditions. Accurate imaging interpretation helps clinicians plan appropriate treatment quickly.'
        },
        {
          question: 'Does Dr. Pooja Prasad perform and report ultrasound and Doppler scans?',
          answer: 'Yes, Dr. Pooja Prasad performs and interprets ultrasound and Doppler imaging, including abdominal, pelvic, vascular, and soft tissue scans. Doppler studies are especially useful for evaluating blood flow and vascular conditions.'
        },
        {
          question: 'Is obstetric ultrasound and pregnancy scan reporting done by Dr. Pooja Prasad?',
          answer: 'Yes, she reports obstetric ultrasounds, including routine pregnancy scans and fetal growth assessments. These scans help monitor fetal development and identify concerns early during pregnancy.'
        },
        {
          question: 'Can Dr. Pooja Prasad help in emergency and trauma imaging?',
          answer: 'Yes, Dr. Pooja Prasad plays an important role in emergency and trauma imaging, including CT and X-ray evaluation of injuries. Rapid and accurate imaging helps doctors make critical decisions in emergency situations.'
        },
        {
          question: 'Why choose Dr. Pooja Prasad at Rashtrotthana Hospital for diagnostic imaging?',
          answer: 'Dr. Pooja Prasad combines clinical experience across multiple imaging modalities with attention to detail and diagnostic accuracy. At Rashtrotthana Hospital, her imaging expertise supports comprehensive, multidisciplinary patient care.'
        }
      ],
      departmentSlug: '/facility/top-diagnostics-multi-speciality-hospital-bangalore',
      expertiseIcons: [
        'assets/icons/RAD-1.png',
        'assets/icons/RAD-2.png',
        'assets/icons/RAD-3.png',
        'assets/icons/RAD-4.png',
        'assets/icons/RAD-5.png'
      ],
      happyPatients: '1000+'

    },
    {
      name: "Dr. Srinivas Siddeshwar",
      image: "assets/new-doctor-imgs/dr-srinivas-siddeshwar.png",
      department: 'Emergency Medicine',
      speciality: 'EMERGENCY MEDICINE',
      // desgination: 'Emergency Medicine',
      about: "",
      areasOfExpertise: ['Emergency Medicine'],
      expertise: "8+",
      qualification: "MBBS, Fellowship in Emergency Medicine",
      time: "",
      date: "",
      alt: 'Emergency Medicine Doctor | Bangalore ',
      title: 'Dr. Srinivas Siddeshwar | Emergency Medicine Doctor',
      description: 'Dr. Srinivas Siddeshwar is an experienced Emergency Medicine doctor with 8+ years of expertise, providing advanced emergency care at Rashtrotthana Hospital, Bengaluru.',
      faqs: [
        {
          question: 'Who is Dr. Srinivas Siddeshwar and what is his role at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Srinivas Siddeshwar is an Emergency Medicine Specialist at Rashtrotthana Hospital, Bangalore, trained to manage medical and surgical emergencies round the clock. He brings strong clinical experience in rapid assessment, stabilisation, and life-saving interventions.'
        },
        {
          question: 'What types of emergencies does Dr. Srinivas Siddeshwar treat?',
          answer: 'He treats heart attacks, strokes, trauma, accidents, breathing emergencies, severe infections, and poisoning cases. Prompt decision-making and coordinated care help improve outcomes during critical situations.'
        },
        {
          question: 'Can Dr. Srinivas Siddeshwar manage accident and trauma cases?',
          answer: 'Yes, Dr. Srinivas Siddeshwar is experienced in trauma and accident management, including fractures, head injuries, and polytrauma. Early stabilisation, pain control, and swift referral to specialty teams are prioritised.'
        },
        {
          question: 'Does Dr. Srinivas Siddeshwar handle cardiac and respiratory emergencies?',
          answer: 'Yes, Dr. Srinivas Siddeshwar manages acute chest pain, heart attacks, severe asthma, COPD exacerbations, and respiratory distress. Immediate interventions and continuous monitoring are key parts of emergency care.'
        },
        {
          question: 'What should patients expect during an emergency visit under Dr. Srinivas Siddeshwar’s care?',
          answer: 'Patients receive rapid triage, immediate investigations, and prompt treatment based on the severity of their condition. Care is streamlined to minimise delays and ensure patient safety.'
        },
        {
          question: 'Is emergency care available 24/7 with Dr. Srinivas Siddeshwar at Rashtrotthana Hospital?',
          answer: 'Yes, 24/7 emergency services are available at Rashtrotthana Hospital, supported by Dr. Srinivas Siddeshwar and a trained emergency team. This ensures continuous readiness for all medical emergencies.'
        },
        {
          question: 'Why choose Dr. Srinivas Siddeshwar for emergency treatment at Rashtrotthana Hospital?',
          answer: 'Dr. Srinivas Siddeshwar combines hands-on emergency medicine experience with a calm, patient-focused approach during critical moments. Rashtrotthana Hospital provides advanced emergency infrastructure and multidisciplinary support for comprehensive care.'
        }
      ],
      departmentSlug: '/specialities/best-emergency-medicine-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/EM-1.png',
        'assets/icons/EM-2.png',
        'assets/icons/EM-3.png',
        'assets/icons/EM-4.png',
        'assets/icons/EM-5.png'
      ],
      happyPatients: '2000+'

    },
    {
      name: "Dr. Sushma A",
      image: "assets/new-doctor-imgs/dr-sushma.png",
      department: 'Ophthalmology & Oculoplasty',
      speciality: 'OPHTHALMOLOGY',
      designation: 'Ophthalmology',
      about: "",
      areasOfExpertise: ['Eyelid disorders', 'Orbital diseases', 'Thyroid eye disease', 'Facial aesthetics', 'Lacrimal surgery'],
      expertise: " 12+",
      qualification: "MBBS, MS, FGEI, FAICO (Oculoplasty)",
      time: "",
      date: "",
      alt: 'Dr. Sushma A, Ophthalmologist and Oculoplasty specialist at Rashtrotthana Hospital, Bengaluru',
      title: 'Dr. Sushma A | Ophthalmologist & Oculoplasty Surgeon',
      description: 'Dr. Sushma A is a skilled Ophthalmologist and Oculoplasty specialist with 12+ years of experience, treating eye and eyelid disorders at Rashtrotthana Hospital, Bengaluru.',
      id: 90,
      faqs: [
        {
          question: 'Who is Dr. Sushma A and what is her specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Sushma A is an Ophthalmology and Oculoplasty specialist at Rashtrotthana Hospital, Bangalore, with focused expertise in eyelid disorders, orbital diseases, lacrimal surgery, and facial aesthetics. She brings extensive clinical experience in managing both functional and cosmetic eye conditions.'
        },
        {
          question: 'What eyelid problems are treated by Dr. Sushma A at Rashtrotthana Hospital?',
          answer: 'Dr. Sushma A treats droopy eyelids (ptosis), eyelid malpositions, eyelid swellings, and eyelid infections. Treatment aims to restore eye function, comfort, and appearance through precise medical or surgical care.'
        },
        {
          question: 'Can Dr. Sushma A manage thyroid eye disease (TED)?',
          answer: 'Yes, Dr. Sushma A has experience in treating thyroid eye disease, including eye bulging, eyelid retraction, and discomfort related to thyroid disorders. Management focuses on protecting vision, reducing inflammation, and improving eye alignment and appearance.'
        },
        {
          question: 'What orbital diseases are treated by Dr. Sushma A?',
          answer: 'She manages orbital diseases such as orbital inflammation, tumors, and trauma-related conditions affecting the eye socket. Accurate diagnosis and timely intervention help preserve vision and eye movement.'
        },
        {
          question: 'Does Dr. Sushma A perform lacrimal (tear duct) surgery?',
          answer: 'Yes, Dr. Sushma A performs lacrimal surgeries for patients with excessive tearing due to blocked tear ducts. These procedures help restore proper tear drainage and improve daily comfort.'
        },
        {
          question: 'Is facial aesthetics treatment available under Dr. Sushma A’s care?',
          answer: 'Dr. Sushma A offers facial aesthetic procedures related to the eye and peri-ocular region, focusing on natural, balanced results. Treatments are planned carefully to maintain both eye health and facial harmony.'
        },
        {
          question: 'Why choose Dr. Sushma A at Rashtrotthana Hospital for eye and eyelid care?',
          answer: 'Dr. Sushma A combines specialised oculoplasty expertise with a patient-centred approach to care. At Rashtrotthana Hospital, patients benefit from advanced diagnostics, surgical precision, and comprehensive ophthalmic support.'
        }
      ],
      departmentSlug: '/specialities/best-eye-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/OPTH-1.png',
        'assets/icons/OPTH-2.png',
        'assets/icons/OPTH-3.png',
        'assets/icons/OPTH-4.png',
        'assets/icons/OPTH-5.png'
      ],
      happyPatients: '3000+'

    },
    {
      name: "Dr. Mahesh M",
      image: "assets/new-doctor-imgs/dr-mahesh.png",
      department: 'UROLOGY',
      designation: 'Urologist',
      speciality: 'UROLOGY',
      about: "",
      areasOfExpertise: ['Andrology', 'Endo-Urology', 'Reconstructive Urology', 'Uro-Oncology', 'Female Urology', 'Urinary Stone Endoscopic Surgeries', 'Laparoscopic and Reconstructive Urology', 'Renal Transplantation', 'Laser Surgery in Prostate / Urolithiasis / Urology'],
      expertise: "25+ ",
      qualification: `MBBS, MS, M.Ch (Urology), <br> MRCS (Edinburgh), Diploma in Laparoscopy (Strasbourg, France)`,
      time: "",
      date: "",
      alt: 'Dr. Mahesh M, senior urologist with 25+ years of experience at Rashtrotthana Hospital, Bengaluru',
      title: 'Dr. Mahesh M | Senior Urologist in Bengaluru',
      description: 'Dr. Mahesh M is a senior Urologist with 25+ years of experience, specializing in laparoscopic, laser and reconstructive urology at Rashtrotthana Hospital, Bengaluru.',
      id: 95,
      faqs: [
        {
          question: 'Who is Dr. Mahesh M and what is his specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Mahesh M is a Urologist at Rashtrotthana Hospital, Bangalore, with experience in managing complex urological conditions. His expertise spans endo-urology, reconstructive urology, uro-oncology, and renal transplantation.'
        },
        {
          question: 'Can I consult Dr. Mahesh M for urinary stone treatment and laser surgery?',
          answer: 'Yes, Dr. Mahesh M specialises in endoscopic and laser surgeries for urinary stones, offering minimally invasive treatment options. These procedures help achieve faster recovery with reduced pain and hospital stay.'
        },
        {
          question: 'Does Dr. Mahesh M treat prostate problems using laser surgery?',
          answer: 'Dr. Mahesh M performs laser surgery for prostate enlargement (BPH) and related urinary symptoms. Laser techniques provide effective relief with minimal bleeding and quicker return to daily activities.'
        },
        {
          question: 'What andrology and male reproductive problems are treated by Dr. Mahesh M?',
          answer: 'He treats andrology-related conditions such as male infertility, erectile dysfunction, and other reproductive health issues. Treatment is personalised, focusing on both medical and surgical solutions when required.'
        },
        {
          question: 'Does Dr. Mahesh M manage female urology and urinary incontinence?',
          answer: 'Yes, Dr. Mahesh M provides care for female urological conditions, including urinary incontinence and bladder disorders. Management aims to improve quality of life through accurate diagnosis and targeted treatment.'
        },
        {
          question: 'Can Dr. Mahesh M treat urological cancers at Rashtrotthana Hospital?',
          answer: 'Dr. Mahesh M has experience in uro-oncology, including cancers of the kidney, bladder, prostate, and urinary tract. Care is coordinated with oncology teams to ensure comprehensive cancer management.'
        },
        {
          question: 'Why choose Dr. Mahesh M at Rashtrotthana Hospital for urology care?',
          answer: 'Dr. Mahesh M combines advanced surgical expertise in laparoscopic, reconstructive, and laser urology with a patient-centred approach. At Rashtrotthana Hospital, patients benefit from modern urology infrastructure and multidisciplinary support.'
        }
      ],
      departmentSlug: '/specialities/best-urology-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/U-1.png',
        'assets/icons/U-2.png',
        'assets/icons/U-3.png',
        'assets/icons/U-4.png',
        'assets/icons/U-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Major (Dr.) Ashish S. Mallige",
      image: "assets/new-doctor-imgs/dr-ashis.png",
      department: 'PAEDIATRICS AND NEONATOLOGY',
      designation: 'Consultant – Paediatrics',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      about: "",
      areasOfExpertise: ['Pediatric Intensive Care (PICU)', 'Management of critically ill neonates and children', 'Pediatric infections and sepsis', 'Pediatric respiratory and cardiac emergencies', 'Neonatal and pediatric resuscitation', 'Care of very low birth weight (VLBW) infants'],
      expertise: "15",
      qualification: `MBBS, MD (Pediatrics), <br> Fellowship in Pediatric Intensive Care (PICU)`,
      time: "",
      date: "",
      alt: 'Major Dr. Ashish S. Mallige, senior paediatrician and PICU specialist at Rashtrotthana Hospital, Bengaluru',
      title: 'Dr. Ashish S. Mallige | Paediatrician & PICU Specialist',
      description: 'Dr. Ashish S. Mallige is an experienced Paediatrician and PICU specialist with 15 years of expertise in critical pediatric care at Rashtrotthana Hospital, Bengaluru.',
      id: 92,
      faqs: [
        {
          question: 'Who is Major Dr. Ashish S Mallige and what is his specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Major Dr. Ashish S Mallige is a Pediatric Intensivist at Rashtrotthana Hospital, Bangalore, with extensive experience in pediatric and neonatal critical care. He specialises in managing critically ill newborns, infants, and children in intensive care settings.'
        },
        {
          question: 'What conditions are treated by Major Dr. Ashish S Mallige in the Pediatric ICU (PICU)?',
          answer: 'He treats severe infections, sepsis, respiratory failure, cardiac emergencies, and multi-organ conditions in children. Care focuses on continuous monitoring, advanced life support, and timely interventions.'
        },
        {
          question: 'Can Major Dr. Ashish S Mallige manage critically ill newborns and premature babies?',
          answer: 'Yes, he has strong experience in the care of critically ill neonates, including very low birth weight (VLBW) infants. Treatment involves specialised neonatal support, infection control, and careful growth monitoring.'
        },
        {
          question: 'Does Major Dr. Ashish S Mallige treat pediatric infections and sepsis?',
          answer: 'Major Dr. Ashish S Mallige specialises in the management of pediatric infections and sepsis, which require urgent and coordinated critical care. Early diagnosis and aggressive treatment help improve survival and recovery.'
        },
        {
          question: 'Is emergency resuscitation for children and newborns handled by Major Dr. Ashish S Mallige?',
          answer: 'Yes, he is trained in neonatal and pediatric resuscitation, managing life-threatening emergencies at birth and during childhood. Rapid response and stabilisation are key components of his care approach.'
        },
        {
          question: 'Can he manage pediatric respiratory and cardiac emergencies?',
          answer: 'Major Dr. Ashish S Mallige treats acute respiratory distress, severe pneumonia, asthma attacks, and pediatric cardiac emergencies. Advanced ventilatory and cardiac support is provided when required.'
        },
        {
          question: 'Why choose Major Dr. Ashish S Mallige at Rashtrotthana Hospital for pediatric critical care?',
          answer: 'Major Dr. Ashish S Mallige brings extensive clinical experience in pediatric and neonatal intensive care, supported by Rashtrotthana Hospital’s advanced PICU infrastructure. Parents can trust a structured, compassionate, and evidence-based approach to critical child care.'
        }
      ],
      departmentSlug: '/specialities/best-paediatric-hospital-in-bangalore',
      expertiseIcons: [
        'assets/icons/PN-1.png',
        'assets/icons/PN-2.png',
        'assets/icons/PN-3.png',
        'assets/icons/PN-4.png',
        'assets/icons/PN-5.png'
      ],
      happyPatients: '5000+'

    },
    {
      name: "Dr. Madhurya P. K",
      image: "assets/new-doctor-imgs/dr-madhurya.png",
      department: 'DERMATOLOGY',
      designation: 'Consultant Dermatologist',
      speciality: 'DERMATOLOGY',
      about: "",
      areasOfExpertise: ['Clinical dermatology including acne, pigmentary disorders, hair and nail disorders', 'Dermatophytosis and other fungal infections', 'Venereology and leprosy', 'Cosmetology and aesthetic dermatology', 'Trichology and androgenetic alopecia', 'Lasers and energy-based devices', 'Minor dermatological procedures'],
      expertise: "7+",
      qualification: "MBBS, MD (Dermatology, Venereology & Leprosy)",
      time: "",
      date: "",
      alt: 'Dr. Madhurya P. K, Consultant Dermatologist treating skin, hair and nail disorders at Rashtrotthana Hospital, Bengaluru',
      title: 'Dr. Madhurya P. K | Consultant Dermatologist in Bengaluru',
      description: 'Dr. Madhurya P. K is a Consultant Dermatologist with 7+ years of experience, offering advanced care for skin, hair and nail conditions at Rashtrotthana Hospital, Bengaluru.',
      id: 94,
      faqs: [
        {
          question: 'Who is Dr. Madhurya P K and what is her specialty at Rashtrotthana Hospital, Bangalore?',
          answer: 'Dr. Madhurya P K is a Dermatologist at Rashtrotthana Hospital, Bangalore, with clinical experience in medical dermatology, cosmetology, trichology, and aesthetic procedures. She manages a wide range of skin, hair, and nail disorders with evidence-based care.'
        },
        {
          question: 'Can I consult Dr. Madhurya P K for acne, pigmentation, and skin infections?',
          answer: 'Yes, Dr. Madhurya P K treats acne, pigmentary disorders, fungal skin infections (dermatophytosis), and chronic skin conditions. Treatment is personalised based on skin type, severity, and long-term skin health.'
        },
        {
          question: 'Does Dr. Madhurya P K treat hair fall and scalp disorders?',
          answer: 'Dr. Madhurya P K specialises in trichology, including treatment for hair fall, androgenetic alopecia, and scalp disorders. Management may include medical therapy, procedural treatments, and lifestyle guidance.'
        },
        {
          question: 'Are cosmetic and aesthetic skin treatments available with Dr. Madhurya P K?',
          answer: 'Yes, she provides cosmetology and aesthetic dermatology services, focusing on skin rejuvenation, acne scar treatment, pigmentation correction, and overall skin health. Treatments aim for natural and safe results.'
        },
        {
          question: 'Does Dr. Madhurya P K perform laser treatments and advanced skin procedures?',
          answer: 'Dr. Madhurya P K uses lasers and energy-based devices for selected skin and hair concerns. These advanced treatments are planned after proper evaluation to ensure safety and effectiveness.'
        },
        {
          question: 'Can Dr. Madhurya P K manage sexually transmitted infections and leprosy?',
          answer: 'Yes, she treats venereological conditions, including sexually transmitted infections and leprosy, following standard clinical protocols. Care is confidential, sensitive, and medically supervised.'
        },
        {
          question: 'Why choose Dr. Madhurya P K at Rashtrotthana Hospital for dermatology care?',
          answer: 'Dr. Madhurya P K combines clinical dermatology expertise with aesthetic skill, offering both medical and cosmetic skin care under one roof. Rashtrotthana Hospital provides a safe, well-equipped environment for comprehensive dermatology treatment.'
        }
      ],
      departmentSlug: '',
      expertiseIcons: [
        'assets/icons/DER-1.png',
        'assets/icons/DER-2.png',
        'assets/icons/DER-3.png',
        'assets/icons/DER-4.png',
        'assets/icons/DER-5.png'
      ],
      happyPatients: '2000+'

    },
    // {
    //   name: "",
    //   image: "", 
    //   department: '',
    //   speciality: '',
    //   about: "",
    //   areasOfExpertise: [],
    //   expertise: "",
    //   qualification: "",
    //   time: "",
    //   date: "",
    //   alt: '',
    //   title:'',
    //   description:''
    // },
  ]
  onDateChange(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = this.formatDate(selectedDate);

    this.getAvailableSlots(this.filteredDoctor.id, formattedDate).subscribe({

      next: (availability) => {
        console.log('Available slots:', availability);
        // this.availableTimes = availableSlots.map((time: string) => ({ name: time }));
        if (availability && availability.availableFrom) {
          const [start, end] = availability.availableFrom.split('-');
          const slotDuration = availability.slotDuration;
          this.availableTimes = this.generateTimeSlots(start, end, slotDuration);

          // Remove any already booked slots for that day

        } else {
          this.availableTimes = [];
        }

      }
    });

    // Fetch unavailable dates using the doctor ID
    this.getUnavailableDates(this.filteredDoctor.id).subscribe({
      next: (unavailableDates) => {
        const unavailableDatesList = unavailableDates.map((entry) => {
          return this.formatDate(new Date(entry.date));
        });

        // Check if the selected date is in the unavailable dates list
        if (unavailableDatesList.includes(formattedDate)) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Doctor Unavailable',
            detail: 'The doctor is not available on the selected date. Please choose another date.',
          });
          this.availableTimes = []; // Clear available times since the doctor is unavailable
          return;
        }

        // If the doctor is available on the selected date, fetch booked slots
        this.getBookedSlots(this.filteredDoctor.id, formattedDate).subscribe({
          // next: (bookedSlots) => {

          //   this.filterAvailableTimes(bookedSlots, selectedDate);
          next: (bookedSlots: { time: string; complete: boolean }[]) => {
            // Define the function before using it
            const formatSlotIfNeeded = (slot: string): string => {
              // Determine if the slot is in 12-hour format
              return slot.includes('AM') || slot.includes('PM') ? slot : this.convertTo12HourFormat(slot);
            };

            // Filter out the incomplete slots and convert them if needed
            const nonCompleteBookedSlots = bookedSlots.filter(slot => !slot.complete).map(slot => slot.time);
            const formattedBookedSlots = nonCompleteBookedSlots.map((bookedSlot) => formatSlotIfNeeded(bookedSlot.split('-')[0]));

            // Use the formatted slots in your filter function
            this.filterAvailableTimes(formattedBookedSlots, selectedDate);
          },
          error: (error) => {
            console.error('Error fetching booked slots:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to fetch booked slots.',
            });
          },
        });
      },
      error: (error) => {
        console.error('Error fetching unavailable dates:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch unavailable dates. Please try again later.',
        });
      },
    });
    const date = this.formatDate(selectedDate);
    this.getUnavailableSlots(this.filteredDoctor.id).subscribe({
      next: (unavailableSlots: { [date: string]: string[] }) => {
        this.unavailableSlotsForDate = unavailableSlots[date] || [];
        const formatSlotIfNeeded = (slot: string): string => {
          // Determine if the slot is already in 12-hour format
          return slot.includes('AM') || slot.includes('PM') ? slot : this.convertTo12HourFormat(slot);
        };
        // console.log('Unavailable slots:', unavailableSlots);
        this.unavailableSlotsForDate = this.unavailableSlotsForDate.map(slot => formatSlotIfNeeded(slot));

        console.log('Unavailable slots for date:', formattedDate, this.unavailableSlotsForDate);

      },
      error: (error) => {
        console.error('Error fetching unavailable slots:', error);
      },
    });
  }



  filterAvailableTimes(bookedSlots: string[], selectedDate: Date) {
    // let allTimes = this.filteredDoctor.time.split(',').map((time: string) => ({ name: time }));

    if (selectedDate.toDateString() === new Date().toDateString()) {
      console.log('availableTime', this.availableTimes)
      // Filter past times if the date is today
      this.availableTimes = this.filterPastTimes(this.availableTimes, selectedDate);
      console.log('availableTime', this.availableTimes)
    }
    // console.log('All times:', allTimes);
    // Filter out the booked times
    console.log('bookedSlots', bookedSlots)
    this.availableTimes = this.availableTimes.filter(
      (timeObj: any) => ((!bookedSlots.includes(timeObj.name) && !this.unavailableSlotsForDate.includes(timeObj.name)))
    );




    console.log('Available times:', this.availableTimes);

  }
  getBookedSlots(doctorId: number, date: string): Observable<{ time: string; complete: boolean }[]> {
    const bookedSlotsUrl = `${this.apiUrl}/doctors/booked-slots?doctorId=${doctorId}&date=${date}`;
    return this.http.get<{ time: string; complete: boolean }[]>(bookedSlotsUrl);
  }
  getUnavailableDates(doctorId: number): Observable<{ date: string }[]> {
    return this.http.get<{ date: string }[]>(`${this.apiUrl}/doctors/unavailable-dates?doctorId=${doctorId}`);
  }
  getUnavailableSlots(doctorId: number): Observable<{ [date: string]: string[] }> {
    return this.http.get<{ [date: string]: string[] }>(`${this.apiUrl}/doctors/${doctorId}/unavailableSlots`);
  }
  getAvailableSlots(doctorId: number, date: string): Observable<any> {
    const availabilityUrl = `${this.apiUrl}/doctors/availability?doctorId=${doctorId}&date=${date}`;
    return this.http.get<any>(availabilityUrl);
  }
  getDoctorById(id: number): Observable<{ availability: { day: string; id: number; availableFrom: string; slotDuration: number; updatedAt?: string }[] }> {
    return this.http.get<{ availability: { day: string; id: number; availableFrom: string; slotDuration: number; updatedAt?: string }[] }>(`${this.apiUrl}/doctors/${id}`);
  }

  generateTimeSlots(startTime: string, endTime: string, slotDuration: number): { name: string }[] {
    const slots: { name: string }[] = [];
    let current = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);

    while (current < end) {
      const slotStart = this.convertTo12HourFormat(current.toTimeString().substring(0, 5));
      slots.push({ name: slotStart }); // Only add the start time in 12-hour format
      current = new Date(current.getTime() + slotDuration * 60000);
    }
    console.log(slots)
    return slots;
  }

  convertTo12HourFormat(time: string): string {
    let [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set to 12 (for 12 AM/PM)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
  filterPastTimes(times: { name: string }[], selectedDate: Date): { name: string }[] {
    const today = new Date();

    if (selectedDate.toDateString() === today.toDateString()) {
      const currentTimeInMinutes = today.getHours() * 60 + today.getMinutes();

      return times.filter(timeObj => {
        const [time, period] = timeObj.name.split(' ');
        let [startHour, startMinute] = time.split(':').map(Number);

        // Convert 12-hour time to 24-hour equivalent in minutes
        if (period === 'PM' && startHour !== 12) {
          startHour += 12;
        } else if (period === 'AM' && startHour === 12) {
          startHour = 0; // Handle 12 AM as midnight
        }

        const timeInMinutes = startHour * 60 + startMinute;

        return timeInMinutes > currentTimeInMinutes;
      });
    }

    return times;
  }


  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  disabledDays: number[] = [0, 6]; // Indices of disabled days

  private updateDisabledDays(availability: Availability[]): void {
    // Map short day names to their respective indices
    const dayNameToIndex: Record<DayName, number> = {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
    };

    // Convert available days to indices
    const availableDays = availability.map((avail) => dayNameToIndex[avail.day]);

    // Determine disabled days by excluding available days
    this.disabledDays = Object.values(dayNameToIndex).filter(
      (index) => !availableDays.includes(index)
    );


    console.log('Disabled Days (by index):', this.disabledDays);
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.clicked = false;
      const dateObj = this.contactForm.value.date_appointment;
      const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
      const firstName = this.contactForm.value.firstName;
      const lastName = this.contactForm.value.lastName;
      this.contactForm.value.contactNumber.startsWith('91') ? this.contactForm.value.contactNumber : '91' + this.contactForm.value.contactNumber;
      // Combine first and last names
      const patientName = `${firstName} ${lastName}`;
      const emailParams = {
        doctorName: this.filteredDoctor.name,
        doctorDesignation: this.filteredDoctor.desgination,
        patientName: patientName,
        patientEmail: this.contactForm.value.email,
        patientContact: this.contactForm.value.contactNumber,
        appointmentTime: this.contactForm.value.time.name,
        appointmentDate: appointmentDate,
        message: this.contactForm.value.message
      };
      // const emailRequest = {
      //   to: 'patientservices@rashtrotthanahospital.com',
      //   // to: 'keerthanasaminathan0805@gmail.com',
      //   status: 'frontoffice',
      //   appointmentDetails: emailParams,
      // };

      const emailRequest = {
        to: ['patientservices@rashtrotthanahospital.com', 'frontoffice@rashtrotthanahospital.com'],
        status: 'frontoffice',
        appointmentDetails: emailParams,
      };

      // Fetch the doctor ID by name
      this.http.post(`${this.apiUrl}/email/send-email`, emailRequest)
        .subscribe({
          next: (emailResponse) => {
            console.log('Email sent successfully:', emailResponse);
          },
          error: (emailError) => {
            console.error('Error sending email:', emailError);
          },
        });
      const appointmentData = {
        patientName: patientName,
        phoneNumber: this.contactForm.value.contactNumber,
        email: this.contactForm.value.email,
        doctorName: this.filteredDoctor.name,
        department: Array.isArray(this.filteredDoctor.speciality)
          ? this.filteredDoctor.speciality.join(', ')
          : this.filteredDoctor.speciality, // Convert array to string if necessary, // Assuming `speciality` is the department
        date: appointmentDate,
        time: this.contactForm.value.time.name,
        requestVia: 'Online',
        status: 'pending',
        smsSent: false,
        emailSent: false,
        doctorId: this.filteredDoctor.id,
      };
      // Reset the form and close dialog after the appointment has been successfully saved
      this.contactForm.reset();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Thank you, we have received your request and will get back to you shortly.',
      });
      this.router.navigate(['/thank-you'])
      this.http.post<any>(`${this.apiUrl}/appointments`, appointmentData)
        .subscribe({
          next: (appointmentResult) => {
            console.log('Appointment successfully created:', appointmentResult);
          },
          error: (appointmentError) => {
            console.error('Error creating appointment:', appointmentError);
          }
        });

      const appointmentDetails = {
        ...appointmentData,
        patientPhoneNumber: '91' + appointmentData.phoneNumber,
        status: 'received'
      }
      this.http.post(`${this.apiUrl}/whatsapp/send`, appointmentDetails)
        .subscribe({
          next: (whatsappResponse) => {
            console.log('WhatsApp message sent:', whatsappResponse);
          },
          error: (whatsappError) => {
            console.error('Error sending WhatsApp message:', whatsappError);
          },
        });
      this.http.post(`${this.apiUrl}/sms/send-sms`, appointmentDetails)
        .subscribe({
          next: (smsResponse) => {
            console.log('SMS message sent:');
          },
          error: (whatsappError) => {
            console.error('Error sending WhatsApp message:', whatsappError);
          },
        });

      this.http.post(`${this.apiUrl}/email/send-email`, emailRequest)
        .subscribe({
          next: (emailResponse) => {
            console.log('Email sent successfully:', emailResponse);
          },
          error: (emailError) => {
            console.error('Error sending email:', emailError);
          },
        });

    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  // activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }

  getQualifications(): string[] {
    return this.filteredDoctor?.qualification
      ?.split(',')
      .map((q: string) => q.trim()) || [];
  }

  formatDepartment(text: string): string {
    return text
      .toLowerCase()
      .split(',')
      .map(dept =>
        dept
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(', ');
  }

  showExpertisePopup = false;

  /* ---------- CARD LOGIC ---------- */

  get firstFiveExpertise(): string[] {
    return this.filteredDoctor?.areasOfExpertise?.slice(0, 5) || [];
  }

  get hasMoreThanFive(): boolean {
    return (this.filteredDoctor?.areasOfExpertise?.length || 0) > 5;
  }

  get expertiseGroups() {
    if (this.filteredDoctor?.areasOfExpertise2?.length) {
      return this.filteredDoctor.areasOfExpertise2;
    }

    // fallback for doctors with only string array
    if (this.filteredDoctor?.areasOfExpertise?.length) {
      return [
        {
          // title: 'Specialized Treatments',
          items: this.filteredDoctor.areasOfExpertise
        }
      ];
    }

    return [];
  }




  getDoctorIcon(index: number): string {
    return this.filteredDoctor?.expertiseIcons?.[index]
      || 'assets/icons/default.png';
  }


  /* ---------- POPUP 2-COLUMN SPLIT ---------- */
  get expertiseColumn1(): string[] {
    const all = this.filteredDoctor?.areasOfExpertise || [];
    return all.slice(0, Math.ceil(all.length / 2));
  }
  get expertiseColumn2(): string[] {
    const all = this.filteredDoctor?.areasOfExpertise || [];
    return all.slice(Math.ceil(all.length / 2));
  }


  insuranceList: string[] = [
    'Aditya Birla Health',
    'Bajaj Allianz',
    'Chola MS',
    'FHPL',
    'Future Generali',
    'Good Health TPA',
    'Digit',
    'HDFC Ergo',
    'Health India',
    'Heritage Health',
    'Health Insurance TPA of India Ltd',
    'ICICI Lombard',
    'IFFCO Tokio',
    'Liberty',
    'MD India',
    'Manipal Cigna',
    'MedSave',
    'Niva',
    'Paramount Health',
    'Oriental Insurance Company Limited',
    'Reliance',
    'United Healthcare',
    'United India',
    'Universal Sompo',
    'Vidal Health',
    'Care Health Insurance',
    'National Insurance',
    'Raksha'
  ];


  visibleInsurances: string[] = [];
  currentIndex = 0;
  itemsPerPage = 8;


  updateVisibleInsurances() {
    this.visibleInsurances = [];

    for (let i = 0; i < this.itemsPerPage; i++) {
      const index = (this.currentIndex + i) % this.insuranceList.length;
      this.visibleInsurances.push(this.insuranceList[index]);
    }
  }

  nextInsuranceSet() {
    this.isFlipping = true;

    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex + this.itemsPerPage) %
        this.insuranceList.length;

      this.updateVisibleInsurances();

      this.isFlipping = false;
    }, 300);
  }


  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


  doctorPhone = '918904943673'; // fixed number (no +)

  openWhatsApp() {

    if (!this.filteredDoctor?.name) return;

    const message = `Hello, I would like to book an appointment with ${this.filteredDoctor.name}. Please share available appointment slots.`;

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${this.doctorPhone}?text=${encodedMessage}`;

    window.open(url, '_blank');
  }

  showFullQualification = false;

  get qualificationLines(): string[] {
    if (!this.filteredDoctor?.qualification) return [];
    return this.filteredDoctor.qualification.split('<br>');
  }

  get showViewMore(): boolean {
    return this.qualificationLines.length > 2;
  }

  get displayedQualification(): string {
    if (this.showFullQualification) {
      return this.filteredDoctor?.qualification || '';
    }

    return this.qualificationLines.slice(0, 2).join('<br>');
  }





}
