import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { MessageService } from 'primeng/api';
import { ContactFormService } from '../contact-form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-layout',
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.css'
})
export class DoctorLayoutComponent {
  countries: any[] | undefined;
  selectedDoctorAppoint: any = null;
  selectedCity: any;
  showAppointmentForm: boolean = false;
  selectedSpeciality: string = '';
  // selectedSubject: any;
  // selectedGeneralMedicineOption: any;
  // generalMedicineOptions: any[];
  subjects: any[] | undefined;
  selectedSubject: any;
  nameFilter: string = '';
  filteredDoctors: any[] = [];
  selectedDoctor: any = null;
  visibleDoctors: any[] = [];
  private currentIndex: number = 0;
  private readonly batchSize: number = 8;
  increment = 10;
  startIndex = 0;

  private itemsPerPage = 8; // Number of items to show per scroll
  private currentPage = 0;

  value: string = "";
  contactForm: any = FormGroup;
  // subjects = [
  //   { name: 'General Medicine' },
  //   { name: 'Yoga' },
  //   { name: 'AYURVEDA' },
  //   { name: 'Homeopathy' },
  //   { name: 'Naturopathy' },
  // ];
  doctors = [
    {
      name: 'Dr. (Col)Anand Shankar',
      image: 'assets/Dr-Anand-Shankar.png',
      desgination: 'ER HEAD, ICU, ANAESTHESIA',
      about: 'Col (Dr) Anand Shankar K is an alumnus of the prestigious Armed Forces Medical College, Pune. He served in field areas prior to pursuing postgraduation in the field of Anaesthesiology and Intensive Care at AFMC pune. Thereafter he qualified the European Diploma in Intensive Care Medicine. He has an overall experience of more than 31 years, 27 of those years serving with the Armed Forces. He has served within the country and in foreign missions with the United Nations. He also had the unique opportunity to serve as accompanying doctor to the President of India. He has been serving with Rashtrotthana Hospital since its inception in Dec 2022.',
      speciality: ['ANAESTHESIOLOGY', 'EMERGENCY MEDICINE'],
      areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology'],
      expertise: 'Years of Experience: 31',
      qualification: 'MBBS, MD (ANAESTHESIOLOGY), EDIC',
      date: 'Monday-Saturday',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      alt: 'Dr. (Col) Anand Shankar | Best Anesthesiology Doctor in Bangalore | Rashtrotthana Hospital',
    },
    {
      name: 'Dr. H. N. Shyla',
      image: 'assets/Dr-H-N-Shyla.png',
      desgination: 'DENTAL SCIENCES',
      about: 'An alumini of the prestigious Government Dental college,Bengaluru with a teaching experience of more than 15 yrs with expertise in the field of trauma and implants specially',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ["Dentist", 'Oral And MaxilloFacial Surgeon', 'Implantologist', 'Cosmetic/Aesthetic Dentist'],
      expertise: 'Years of Experience: 27',
      qualification: 'MDS',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. H. N. Shyla | Best Dental Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },

    {
      name: 'Dr. Latha Venkataram',
      image: 'assets/Dr-Latha-Venkataram.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Maternity Unit at Rashtrotthana Hospital is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman. Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years of experience & specialises in Vaginal deliveries & High Risk Pregnancy. The aim is to provide high quality service at affordable cost. The team of OBGYN run super speciality services through specialised clinics involving many specialists available under one roof jointly in a single clinic for comprehensive care of women striving for the vision.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['Vaginal Delivery',
        'High Risk Pregnancy',
        'Diabetes & Pregnancy',
        'Medical Disorders in Pregnancy',
        'Recurrent Pregnancy loss treatment',
        'Emergency Obstetric care',
        'Vaginal Surgeries, Management of menopause related issues',],
      expertise: 'Years of Experience: 32',
      qualification: 'MBBS, MRCOG(UK), MRCP(I), FRCOG(UK)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date: 'Tuesday',
      alt : 'Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    {
      name: 'Dr. Shekar Patil',
      image: 'assets/Dr-Shekar-Patil.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      about: 'Dr. Shekar Patil is a Medical Oncologist in Bangalore. He has been practising medicine for 39 years including over 25 years in medical oncology. He treats conventional and high dose chemotherapy for both solid and haematological malignancies. Dr. Patil s knowledge and expertise spans a vast area including: Intraperitoneal Chemotherapy as consolidation in advanced Ovarian Cancers Concurrent radiation and chemotherapy (BIP) in Carcinoma Cervix Bone Marrow Transplantation Oral recombinant human lactoferrin with Carboplatin Chemotherapy in Gynaecological Malignancies Treatment of Lymphomas Treatment of Acute Myeloid Leukaemia.',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy', 'immuno-oncology'],
      expertise: 'Years of Experience: 35',
      qualification: 'MBBS, MD, DM',
      time: '09:00-09:15,09:15-09:30,09:30-09:45,09:45:10:00',
      date: 'Friday',
      alt: 'Dr. Shekar Patil | Best Medical Oncologist Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'

    },
    // {
    //   name: 'Dr. Ravishankar. D',
    //   image: 'assets/doctor-6.png',
    //   desgination: 'Orthopedic surgeon',
    //   about: 'Dr. Ravishankar D, our esteemed orthopedic surgeon at Rashtrotthana Hospital. With 38 years of experience overall and 31 years as a specialist, Dr. Ravishankar is highly skilled in his field. He completed his MBBS from Bangalore University, India, in 1985 and his DNB in Orthopedics/Orthopedic Surgery from the DNB Board, New Delhi, in 1989.As a member of the Karnataka Medical Council, Dr. Ravishankar offers a range of services including Joint Replacement Surgery, Hip Replacement, Fracture Treatment and Joint Dislocation Treatment.Trust Dr. Ravishankar D at Rashtrotthana Hospital for top-notch orthopedic care. With decades of experience and a dedication to patient well-being, you are in the best hands for all your orthopedic needs.',
    //   speciality: 'ORTHOPEDICS',
    //   areasOfExpertise: ['Joint Replacement Surgery', 'Hip Replacement', 'Fracture Treatment', 'Joint Dislocation Treatment'],
    //   expertise: 'Years of Experience: 38',
    //   time:''
    // },
    {
      name: 'Dr. Pramod S. Chinder',
      image: 'assets/Dr-Pramod-S-Chinder.png',
      desgination: 'ORTHOPEDIC ONCOSURGEON',
      about: '',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['Limb salvage surgeries with Biological reconstruction',
        'CATS ( Computer Assisted Tumour Surgery )',
        'Use of Fresh Frozen Allograft',
        'Microsurgical reconstruction',
        'Complex Pelvic tumours and reconstructions for Chondrosarcomas, Osteosarcomas and Ewings sarcoma',
        'Use of molecular and targeted agents in the management of massive tumours (Denosumab in Giant cell tumours)',
        'Virtual Reality in Physiotherapy',
        'Robotic pelvic surgeries -Davinci',
        '3D Printing - Navigation in Oncology',
        'Stem cell and regenerative therapy'],
      expertise: 'Years of Experience: 20',
      qualification: 'MBBS, MS(ORTHO), FHRM, FMSO',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00',
      date: 'Friday',
      alt: 'Dr. Pramod S. Chinder | Best Orthopaedic Oncosurgeon in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    {
      name: 'Dr. Nagaraj Rao',
      image: 'assets/doctor-31.png',
      desgination: 'UROLOGY',
      about: 'After obtaining urology training from prestigious PGIMER, Chandigarh, worked in St John\'s medical college hospital for 16 years at different capacities.Headed the department of urology between 2011-2015 Has vast experience in managing day to day as well as complex urological problems both medically and surgically.Now has been associated with various hospitals in Bengaluru as a senior consultant.Has been DNB and MCh examiner for various universities',
      speciality: 'UROLOGY',
      areasOfExpertise: ['EndoUrology', 'Uro Oncology', 'Stone Disease', 'Genito-urinary reconstruction'],
      expertise: 'Years of Experience: 26',
      qualification: 'MBBS, MS, MCH',
      time: '12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date: 'Tuesday and Thursday',
      alt: 'Dr. Nagaraj Rao | Best Urologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    {
      name: 'Dr. H. M. Krishnamurthy',
      image: 'assets/Dr-H-M-Krishnamurthy.png',
      desgination: 'Consultant - Internal Medicine',
      about: 'Dr. H. M. Krishnamurthy is a Doctor in Bangalore and has an experience of 40 years in this field. Dr. H. M. Krishnamurthy practices at Various hospitals in Bangalore and He completed MBBS from Bangalore University in 1984.(First Rank to Bangalore University both MBBS & MD) Fellowship in Diabetes- Arhus University Denmark,Been a faculty in Regional & National clinical meetings Authored book.  Diabetes - Patient Education Have Conducted - Multiple patient education programs. under the auspices of Friends of Diabetes Group.',
      speciality: 'INTERNAL MEDICINE',
      areasOfExpertise: ['Metabolic Disorders', 'Infectious Diseases', 'Geriatrics', 'Non Interventional- Respiratory Diseses', 'Diabetes- Thyroid', 'All Adult Chronic Diseases', 'KIDNEY/CLINICAL CARDIOLOGY'],
      expertise: 'Years of Experience: 36',
      qualification: 'MBBS, MD',
      time: '18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt: 'Dr. H. M. Krishnamurthy | Consultant - Internal Medicine in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    // {
    //   name: 'Brig (Dr) S. Shashivadhanan',
    //   image: 'assets/Dr-S-Shashivadhanan.png',
    //   desgination: 'Professor & Consultant Neurosurgery',
    //   speciality: 'NEUROSCIENCES',
    //   about: 'Professor Dr (Brig) Shashivadhanan, a senior consultant Neurospine Surgeon with more than 30 years’ experience in Health Care with expertise in Neuro and spine surgery. His main field of interest is minimally invasive interventions for pain management.  Neurotrauma includes spinal cord injury. Carried out research in studying role stem cells in spinal cord injury.  Currently working on Minimally invasive spine surgery, Dynamic Lumbar fusion & Spinal deformity correction surgery. ',
    //   areasOfExpertise: ['Minimally Invasive Spine Surgery', 'Neurotrauma & Spinal Trauma', 'Spinal Deformity Correction', 'Spinal Cord Tumors', 'Cerebrovascular Surgery', 'Neurosurgery', 'Neuroendoscopy', 'Deep Brain Stimulation', 'Epilepsy Surgery', 'Paediatric Neurosurgery', 'Functional Neurosurgery (Deep Brain stimulation)', ' Gamma Knife Radiosurgery', ' Neuro Rehabilitation'],
    //   expertise: 'Years of Experience: 30+',
    //   qualification: 'MBBS, MS, DNB(GEN SURGERY), MCH, DNB(NEUROSURGERY), FRCS EDINBURGH, FICS, FIGASS(COPENHAGEN), FIMSA, MNAMS',
    //   time: '12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
    //   date: 'Monday-Saturday',
    //   alt: 'Brig (Dr) S. Shashivadhanan | Best Neurospine Surgeon in Bangalore | Rashtrotthana Hospital'
    // },
    // {
    //   name: 'Dr. Savinay S. Kanchibail',
    //   image: 'assets/doctor-11.png',
    //   desgination: 'PAEDIAIATRICS & NEONATOLOGY',
    //   about: 'Dr. Savinay S. Kanchibail is a senior consultant paediatrician and neonatologist with over 20 years of experience in paediatrics and 10 years in neonatology. His expertise spans general paediatrics, where he has effectively managed outpatient departments (OPD) and inpatient admissions, having gained significant experience working in Oman and various medical centers. He is also proficient in managing pediatric emergencies, ensuring critical care when needed. In neonatology, He has worked in level 3 neonatal units in tertiary hospitals across India, the UK and other locations. His extensive experience includes independently managing complex cases in the Neonatal Intensive Care Unit (NICU), demonstrating his expertise in handling critically ill newborns.',
    //   speciality: 'PAEDIATRICS AND NEONATOLOGY',
    //   areasOfExpertise: ['General Paediatrics including allergy and asthma from newborns to adults (including adolescents)', 'Paediatric Emergencies (Respiratory and Gastointestinal emergencies)', 'NICU (Level 2 and Level 3 tier) Expertise (extreme preterm, Preterm Nutrition)', 'Nutrition', 'Immunisations', 'Excellent communications skills with children and parents'],
    //   expertise: 'Years of Experience: 20',
    //   qualification:'MBBS, DCH, DNB/MD, MRCPCH(UK)',
    //   time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
    //   date:'Monday-Saturday'
    // },
    // {
    //   name: 'Dr. Shreelakshmi G',
    //   image: 'assets/doctor-10.png',
    //   desgination: 'OBSTETRICS & GYNECOLOGY',
    //   about: 'Dr. Shreelakshmi G is graduated from university from mysore. She also did post graduation in M. S OBSTETRICS AND GYNAECOLOGY (2003)',
    //   speciality: 'OBSTETRICS & GYNECOLOGY',
    //   areasOfExpertise: ['High Risk Obstetrics', 'Vaginal Delivery', 'Adolescent Gynaecology', 'Women health education and empowerment', 'Management of Diabetes in pregnancy'],
    //   expertise: 'Years of Experience: 20',
    //   qualification:'MMBBS, MS, MRCOG(UK)',
    //   time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
    //   date:'Wednesday'
    // },
    {
      name: 'Dr. Rajeev Vijayakumar',
      image: 'assets/Dr-Rajeev-Vijayakumar.png',
      desgination: 'Oncologist',
      about: 'Dr. Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology and Bone Marrow Transplant ensures that your confidence in his ...',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['Medical Oncology', 'Hemato- Oncology', 'Bone Marrow Transplant'],
      expertise: 'Years of Experience: 20',
      qualification: 'MBBS, DNB (Gen Medicine) DNB (Medical Oncology) MRCP (UK)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday and Wednesday',
      alt: 'Dr. Rajeev Vijayakumar | Best Medical Oncologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    {
      name: 'Dr. Shashidhar',
      image: 'assets/Dr-Shashidhar.png',
      desgination: 'Anaesthesia',
      about: ' Dr. Shashidhar, our esteemed anesthesiologist with over 20 years of dedicated experience in the field. With qualifications including MBBS and DA, Dr. Shashidhar specializes in intensive care, emergency care and anesthesiology. His expertise ensures the safe and effective management of anesthesia for various medical procedures, providing essential support in critical and emergency situations. Trust him for expert care in anesthesia at every stage of your medical journey.',
      speciality: 'ANAESTHESIOLOGY',
      expertise: 'Years of Experience: 20+',
      time: 'No-slot',
      date: 'Monday-Saturday',
      qualification: 'MBBS, DA',
      areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology'],
      alt: 'Dr. Shashidhar | Best Anesthesiologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },

    {
      name: 'Dr. Mahesh Kulkarni',
      image: 'assets/Dr-Mahesh-Kulkarni.png',
      desgination: 'Orthopaedics',
      about: 'Prof Dr. Mahesh Kulkarni is a highly experienced and compassionate Orthopaedic Surgeon with over 15 years of expertise in diagnosing and treating a wide range of conditions related to Musculoskeletal affections. He completed his medical degree at prestigious BMC&RI and pursued specialized training in Orthopaedics at KMC Chennai. Further he has gained advanced skills in Arthroplasty, Arthoscopy, spine surgery and Complex trauma at various centers of excellence.He has been working in prestigious medical colleges as a faculty and contributes actively in imparting quality medical education to the Undergarduate ( MBBS ) and  Postgraduate (MS orthopaedics) students.',
      speciality: 'ORTHOPEDICS',
      expertise: 'Years of Experience: 15+',
      time: '18:30-18:50,18:50-19:10,19:10-19:30',
      date: 'Monday-Saturday',
      qualification: 'MS Ortho, DNB Ortho,Fellowship in Arthroplasty/ Arthoscopy/ Spine surgery/  Complex trauma',
      areasOfExpertise: ['Joint preservation', 'Limb preservation', 'Deformity correction', 'Pelviacetabular fractures', 'Sports injuries', 'Spine affections'],
      alt: 'Dr. Mahesh Kulkarni | Best Ortho Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },

    {
      name: 'Dr. Geethanjali K. G',
      image: 'assets/Dr-Geethanjali-K-G.png',
      desgination: 'DENTAL SURGERY',
      about: ' Dr. Geethanjali KG is a dynamic and skilled dentist. She is currently working   as Consultant-Dental Sciences unit at Jayadeva Memorial hospital R.R. Nagar Bengaluru. She has 18 years of clinical experience in the field of dentistry. She is specialised in endodontics and conservative dentistry, general dentistry, minor surgical procedure like extraction and biopsy under LA. Dr. Geethanjali is graduated from KVG dental College Sullia. RGUHS. She also did Post Graduate Certificate in Endodontics and Post Graduate Certificate in Oral Implanting. ',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ['General Dentistry', 'Endodontics', 'Cosmetic dentistry'],
      expertise: 'Years of Experience: 18',
      qualification: 'BDS, PGCE, PGCO',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Geethanjali K. G | Best Dental Surgery Doctor in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    // {
    //   name: 'Dr. Santhosh S',
    //   image: 'assets/Dr-Santhosh-S.png',
    //   desgination: 'CONSULTANT NEPHROLOGIST & TRANSPLANT PHYSICIAN',
    //   about: 'Dr. Santhosh S is graduated from AJIMS, MANAGALORE in 2008. He finished his post graduation (MD Internal medicine) from KIMS HUBLI. He has also completed DNB Nephrology from MANIPAL HOSPITAL BENGALURU in 2018.',
    //   speciality: 'NEPHROLOGY',
    //   areasOfExpertise: ['General nephrology,', 'Diabetic kidney disease','Kidney transplantation','Glomerular diseases','Hemodialysis','Resistant hypertension','Pregnancy and kidney disease'],
    //   expertise: 'Years of Experience: 14',
    //   qualification: 'MBBS, MD, DM(NEPHROLOGY)',
    //   time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00,20:00-20:20,20:20-20:40,20:40-21:00,21:00-21:20,21:20-21:40,21:40-22:00,22:00-22:20,22:20-22:40,22:40-23:00,23:00-23:15,23:15-23:30',
    //   date: 'Monday-Saturday',
    //   alt: 'Dr. Santhosh S | Best Nephrologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    // },
    {
      name: 'Dr. Sowmya Bhat S',
      image: 'assets/Dr-Sowmya-Bhat-S.png',
      desgination: 'OPTHALMOLOGIST',
      about: 'Dr. Sowmya S Bhat has completed her basic Medical Education from St. John’s Medical College, Bangalore She has received post graduate training in ophthalmology from the prestigious Aravind Eye Hospital, Madurai and received the Dr. G. Venkataswamy Gold Medal for standing first in Ophthalmology. She has obtained the long term fellowship degree for super specialising in Phacoemulsification surgery and refractive surgeries from Rajiv Gandhi University of Medical Science, Bangalore and received the best outgoing Fellow Award.',
      speciality: 'OPHTHALMOLOGY',
      areasOfExpertise: ['CATARACT SURGERY (MSILS, PHACOEMULSIFION)', 'REFRACTIVE SURGERY (PRK, LASIK, SMILE) ', 'GENERAL OPHTHALMOLOGY'],
      expertise: 'Years of Experience: 13+',
      qualification: 'MBBS, DO, DNB, FPR, FICO',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date: 'Tuesday and Friday',
      alt: 'Dr. Sowmya Bhat S | Best Ophthalmologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },
    {
      name: 'Dr. Suhas Raj S',
      image: 'assets/Dr-Suhas-Raj-S.png',
      desgination: 'CARDIOLOGY',
      about: 'Dr. Suhas Raj is graduate from Govt. Stanely Medical College and Hospital,Chennai in 2015. He did his post graduation (MD GENERAL MEDICINE) from KANYAKUMARI GOVT. MEDICAL COLLEGE AND HOSPITAL in 2019. He also completed DM Cardiology in 2022.His precious moment is he got two gold medal in MD GENERAL MEDICINE (2019) & DM Cardiology (2022).',
      speciality: 'CARDIAC SCIENCES',
      areasOfExpertise: ['Heart attack- Interventional Cardiology - Primary Angioplasty', 'High risk PCI', 'Heart failure', 'Electrophysiology', '  Peripheral Vascular diseases Hypertension '],
      expertise: 'Years of Experience: 9',
      qualification: 'MBBS, MD(GEN MEDICINE), DM(CARDIOLOGY)',
      time: '18:00-18:20,18:20-18:40,18:40-19:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital | RR Nagar Bangalore'
    },

    {
      name: 'Dr. Atmaram D. C',
      image: 'assets/Dr-Atmaram-D-C.png',
      desgination: 'SURGEON/ LAPROSCOPY/ GASTROENTEROLOGLIST',
      about: 'A dedicated surgeon with 18 years of experience specializing in laparoscopy, proctologist, gastroenterology and oncology. My medical journey began at MS Ramaiah Medical College in Bangalore, where I developed a strong foundation in surgical techniques and patient care. Over the years, I have honed my skills in minimally invasive procedures, which allow for quicker recoveries and reduced patient discomfort.I strongly believe in the existence of divinity, which inspires my approach to medicine. The immense trust my patients place in me is a driving force behind my commitment to serve them better every day. I am passionate about providing compassionate care and fostering trusting relationships with those I treat.',
      speciality: 'GENERAL SURGERY',
      areasOfExpertise: ['Laparoscopy', 'Gastroenterology', 'Oncology', 'Proctology'],
      expertise: 'Years of Experience: 18',
      qualification: 'MBBS, MS',
      time: '16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Kolla Vinod',
      image: 'assets/Dr-Kolla-Vinod.png',
      desgination: 'Pulmonary and sleep medicine',
      about: 'Dr. KOLLA VINOD is a professor in Pulmonary medicine for over a decade. His education, training and extensive experience given special expertise in the diagnosis, treatment and management of disorders of the pulmonary diseases. He has achieved state 2nd rank during his post-graduation. He strives to stay current with medical knowledge and interventional skills in order to provide his patients with the best, up- to-date care available. He is interested in new interventions (Bronchoscopy, Throcoscopy, cryobiopsy rigid bronchoscopy) The majority of his early education was in Lawrence school Ooty, he completed his Pre-University in Lawrence school Ooty. He finished MBBS, MD in Pulmonary Medicine obtained from Narayana Medical College, Nellore. His post- doctoral studies included a critical care, Interventional pulmonology. Dr. Kolla Vinod authored or co- authored peer-reviewed abstracts/articles. He holds multiple Journals and case reports in his field in various Indian and International journals. Upon his return to Bangalore.',
      speciality: 'PULMONOLOGY',
      areasOfExpertise: ['Interventional pulmonology (Bronchoscopy, Throcoscopy, cryobiopsy, rigid bronchoscopy) Asthama', 'Copd', 'pneumonia', 'tuberculosis', 'Interstitial lung disease', 'pleural effusion', 'lung cancer', 'sleep medicine', 'Flu and allergic bronchitis'],
      expertise: 'Years of Experience: 18',
      qualification: 'MBBS, MD PULMONOLOGY MEDICINE',
      time: '16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:10,18:10-18:30',
      date: 'Monday-Saturday',
      alt: 'Dr. Kolla Vinod | Best Pulmonologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Meena H. B',
      image: 'assets/Dr-Meena-H-B.png',
      desgination: 'DERMATOLOGIST',
      about: 'Dr. Meena HB is a highly dedicated dermatologist with extensive knowledge in treating various skin, hair and nail conditions.She graduated with an MBBS from MS Ramiah Medical College in 1987 and completed her MD Dermatology at KIMS Bengaluru in 2014, currently working at ESI Hospital Indiranagar as Senior Specialist in Dermatology. She worked as  Cosmetologist at JonRic Oomph International Medispa, Koramangala and as a consultant at Medihope Multispeciality Hospital. Hands-on experience with Lasers, PRP, Chemical peels, Skintag and Wart removal, Nanopore for acne scar and pigmentation , Botox, Fillers and Threadlift.She has Publications in esteemed journals like JCDR, JEMDS.With a patient-centred approach, Dr. Meena ensures her patients receive comprehensive care for long term skin and hair health',
      speciality: 'DERMATOLOGY',
      areasOfExpertise: ['Clinical dermatology and various procedures like skin tag removal', 'DPN removal, wart removal, corn and callosity',
        'chemical peels for acne', 'pigmentation and skin rejuvenation', 'laser for hair removal', 'acne scar and pigmentation', 'PRP for hair and face', 'Derma-roller', 'Nanopore for skin brightening', 'pigmentation and acne scar microdermabrasion'],
      expertise: 'Years of Experience: 28',
      time: '18:00:18:15,18:15-18:30,18:30-18:45,18:45-19:00',
      qualification: 'MBBS, MD(DERMATOLOGY)',
      date: 'Tuesday, Thursday and Saturday',
      alt: 'Dr. Meena H. B | Best Skin Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },

    {
      name: 'Dr. Sindhu P. Madanshetty',
      image: 'assets/Dr-Sindhu-P-Madanshetty.png',
      desgination: 'INTERNAL MEDICINE',
      about: 'Dr Sindhu has built a reputable career as a recognised expert with superb patient care and medical knowledge. She completed her MBBS from Hubli, then MD in general medicine from Bangalore Medical College and research institute in 2018. She has been a gold medallist in her undergraduate. She has worked in both Internal Medicine and Intensive care and contributed in patient care at BGS global hospitals. Special interest is in critical care, Infection diseases, diabetology, metabolic diseases.',
      speciality: 'INTERNAL MEDICINE',
      areasOfExpertise: ['Critical Care', 'Diabetology', 'Hypertensions', 'Thyroid illness', 'Infectious diseases like Dengue', 'pneumonia', 'UTI'],
      expertise: 'Years of Experience: 7',
      qualification: 'MBBS, MD INTERNAL MEDICINE, IDCCM',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Sindhu P. Madanshetty | Best Physician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },


    {
      name: 'Dr. Sujayendra D. M',
      image: 'assets/Dr-Sujayendra-D-M.png',
      desgination: 'ORTHOPEDICS',
      about: "Dr. Sujayendra D. M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities, he gained wide exposure to hand surgeries, paediatric Orthopaedics, spine surgeries, Arthroscopy, Arthroplasty and complex trauma surgeries. After senior residency at St. John's Medical College and KMC, Manipal, he was promoted to Assistant Professor of Orthopaedics at KMC, Manipal. Having completed the basic, advanced and master's course from A.O, he has acquired extensive training in Orthopaedics Trauma. He is also a National Faculty (as table instructor) for AO Trauma India. He was awarded a Fellowship in Arthroplasty (joint replacement surgery) by the India Orthopaedic Association.",
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Fracture care', 'Joint replacement surgeries and Arthroscopy (keyhole) surgeries'],
      expertise: 'Years of Experience: 9+',
      qualification: 'MBBS, MS (ORTHO), DNB (Ortho), Diploma SICOT, Fellowship in Arthroplasty',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30',
      date: 'Tuesday,Thursday and Saturday',
      alt: "Dr. Sujayendra D. M | Best Orthopaedic Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore"
    },


    {
      name: 'Dr. Manasa N. A',
      image: 'assets/Dr-Manasa-N-A.png',
      desgination: 'ENT, HEAD & NECK SURGERY',
      about: 'Dr. Manasa. N. A. Consultant ENT, Head & Neck Surgeon comes with a vast experience of 10 years. She has done her MBBS from the prestigious M.S. Ramaiah Medical College. She did her post-graduation from JJM medical college, Davangere. She procured her higher studies from Tata Main Hospital.She is immensely knowledgeable, compassionate and skilled in her field of expertise. She is your one stop solutions to all your Ear, nose, throat and Head & Neck related issues. Other than the routine ENT work she also specialises in endoscopic adenoidectomy and endoscopic endonasal sinus surgeries, microscopic hearing restoration surgeries, voice restoration surgery and Head and tumour surgeries.',
      speciality: 'ENT SPECIALITY',
      areasOfExpertise: ['Micro ear surgery for hearing restoration', 'Septoplasty', 'Endoscopic sinus surgery', 'Management of vocal cord and voice disorders', 'Diagnosis and treatment of Head and neck tumors', 'Tracheotomy and airway surgeries', 'Polytrauma management', 'Snoring evaluation and Management of Obstructive sleep apnea', 'Tonsillectomy', 'Adenoidectomy', 'Myringotomy'],
      expertise: 'Years of Experience: 10',
      qualification: 'MBBS, DLO, DNB(ENT)',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30',
      date: 'Monday,Wednesday,Friday and Saturday',
      alt: 'Dr. Manasa N. A | Best ENT Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },


    {
      name: 'Dr. Madhu S. N',
      image: 'assets/Dr-Madhu-S-N.png',
      desgination: 'UROLOGIST & ANDROLOGIST',
      speciality: 'UROLOGY',
      about: 'Worked as Assistant prof. in the department of urology at St. John’s Medical Collage hospital, a premier high volume territory care hospital in Bangalore.',
      areasOfExpertise: ['Urology', 'EndoUrology, Kidney Transplantation', 'Reconstructive urology', 'Laproscopic urology Uro Oncology', 'Stone Disease'],
      expertise: 'Years of Experience: 14',
      qualification: 'MBBS, MS(GEN. SURGERY), MCH(UROLOGY)',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10',
      date: 'Monday-Saturday',
      alt: 'Dr. Madhu S. N | Best Urologist & Andrologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },


    {
      name: 'Dr. Jaidev S',
      image: 'assets/Dr-Jaidev-S.png',
      desgination: 'Neuro Science',
      speciality: 'NEUROSCIENCES',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow. Specialised in brain and spine sugery, endovascular surgery.',
      areasOfExpertise: ['Spine surgery', 'Brain surgery', 'Treatment of Neck pain', 'Back pain', 'Stroke', 'Neuropathy', 'Endovascular intervention'],
      expertise: 'Years of Experience: 5',
      time: '17:00-17:15,17:15-17:30,17:30-17:45,17:45-18:00',
      qualification: 'MBBS, MS, MCH(NEURO SURGERY)',
      date: 'Monday-Saturday',
      alt: 'Dr. Jaidev S | Best Neurosurgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },

    {
      name: 'Dr. Nishanth Lakshmikantha',
      image: 'assets/Dr-Nishanth-Lakshmikantha.png',
      desgination: 'General, GI and Robotic Surgery',
      speciality: 'GENERAL SURGERY',
      about: ' Dr. Nishanth Lakshmikantha is a highly skilled surgeon known for excellence in both clinical practice and academic achievement. Having secured a rank in the Surgery university exams he has built a reputation for precision, dedication and innovation in the surgical field.His excellent grasp in communication and clinical examination of patients ensures they receive the most effective treatments available.  His forward-thinking approach and commitment to mastering advanced surgical techniques made him embrace laparoscopic surgery early in his career and has made significant strides in the field of minimally invasive procedures such as Laparoscopic and Robotic surgeries.',
      areasOfExpertise: [' Laparoscopic & Robotic surgery', 'Laser proctology '],
      expertise: 'Years of Experience: 9',
      qualification: 'MBBS, MS, FMAS, FIAGES,FARIS',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10',
      date: 'Monday-Saturday',
      alt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Sameer M. Halageri',
      image: 'assets/Dr-Sameer-M-Halageri.png',
      desgination: 'Plastic and Reconstructive Surgery',
      speciality: 'PLASTIC SURGERY',
      about: ' Dr. Sameer M Halageri is a highly skilled Consultant Plastic Surgeon with extensive experience in aesthetic and reconstructive surgeries. Dedicated to providing the highest standards of patient care, he specializes in various advanced procedures aimed at enhancing both form and function. With a strong commitment to continuous learning and innovation in his field, Dr. Halageri is known for his meticulous approach and compassionate patient care. His practice integrates the latest techniques and technologies to deliver exceptional results tailored to individual needs.',
      areasOfExpertise: ['Microvascular surgery and onco reconstruction',
        'Hand and brachial plexus surgery',
        'Breast and lymphedema surgery',
        'Cleft and craniofacial surgery',
        'Diabetic foot and complex wound management',
        'Cosmetic surgery', 'Burns and trauma reconstruction'],
      expertise: 'Years of Experience: 8',
      qualification: 'MBBS, MS, MCH',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt: 'Dr. Sameer M. Halageri | Best Consultant Plastic Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    // {
    //   name: 'Dr. Valli Kiran',
    //   image: 'assets/Dr-Latha-Venkataram7.png',
    //   desgination: 'PSYCHIATRY',
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
      image: 'assets/Dr-Vishnuvardhan-V.png',
      desgination: 'Ortho Dontics',
      speciality: 'DENTAL SCIENCES',
      about: 'Dr. Vishnu Vardhan has completed BDS and MDS from DAPM RV DENTAL COLLEGE affiliated to Rajiv Gandhi University Bangalore having about 9 years overall experience. Life Member of the Indian Orthodontic Society. Senior Consultant orthodontist. Specialist in metal, ceramic, invisible, lingual and surgical orthodontics.',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 9',
      qualification: 'BDS, MDS',
      time: '15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Vishnuvardhan V | Best Orthodontics in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Prakruthi',
      image: 'assets/Dr-Prakruthi.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Prakruthi is a dedicated obstetrician and gynecologist committed to enhancing patient safety and care quality in both normal and high-risk pregnancies. With a strong focus on labor ward management, fetal medicine and academic excellence, she strives to promote exceptional standards in maternity services.She has made significant contributions to the field through her research, including publications on recurrent fetal hydrops and the successful management of Guillain-Barre syndrome in pregnancy. Her work emphasizes the importance of genetic testing and innovative treatment strategies and has been featured in prominent medical journals.Dr. Prakruthi has also presented her findings at national conferences, highlighting her commitment to advancing obstetric care and improving patient safety. Known for her strong interpersonal and communication skills, she fosters trusting relationships with her patients and colleagues, ensuring a supportive environment for all those in her care.',
      areasOfExpertise: ['Labour ward management', 'Development of protocols', 'High risk pregnancy management', 'Fetal Scans'],
      expertise: 'Years of Experience: 16',
      qualification: 'MBBS, DGO, DNB, FELLOWSHIP IN MATERNAL FETAL MEDICINE',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10',
      date: 'Saturday',
      alt : 'Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Ravi T',
      image: 'assets/Dr-Ravi-T.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      speciality: 'ONCOLOGY',
      about: 'Dr. Ravi Thippeswamy Senior Medical Oncologist With 20 years of invaluable experience, Dr. Ravi Thippeswamy is a distinguished Medical Oncologist in Bangalore. He is committed to delivering comprehensive care to his patients and maintains affiliations with several hospitals throughout the city. He completed his MBBS from Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) in 2004, his DNB in Medical Oncology from the National Board of Examination in 2012 and his MD in Pediatrics from the University of Mumbai in 2008.As a member of the Karnataka Medical Council, Dr. Thippeswamy specializes in various aspects of Medical Oncology, including Hemato Oncology and Pediatric Oncology. With 11 years of specialization, he brings a wealth of knowledge and expertise to his practice, ensuring the best possible outcomes for his patients.',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy, immuno-oncology'],
      expertise: 'Years of Experience: 16+',
      qualification: 'MBBS, MD, DM',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00',
      date: 'Friday',
      alt : 'Dr. Ravi T | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Suvarnini Konale',
      image: 'assets/yoga/Dr-Suvarnini-Konale.png',
      desgination: 'LIFESTYLE/ YOGA & NATUROPATHY',
      about: 'Her 15 years of experience includes teaching BNYS students and treating thousands of clients through yoga and Naturopathy. She has worked in different hospitals and online fitness firms as a Yoga, Naturopathy and Lifestyle consultant. People from a wide range of socio-economic status and professions, across all age groups, have benefitted from her advice. She follows a holistic approach of lifestyle management and therapy through the principles of Yoga & Naturpathy.',
      speciality: ['YOGA SCIENCE', 'LIFESTYLE MEDICINE'],
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 15',
      qualification: 'BNYS',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Suvarnini Konale | Best Lifestyle Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Vishwanath Sanagoudar',
      image: 'assets/Dr-Vishwanath-Sanagoudar.png',
      desgination: 'PAEDIATRIC & NEONATOLOGY',
      about: 'Dr Vishwanath, Paediatrician, has also done fellowship in Paediatric critical care from IGICH, Bangalore. He is trained in treating sick children requiring ICU stay. He has received Bopaiah award for paper presentation at state Paediatric conference. He has also served as visiting mentor for paediatric critical care training program under ECRP-2, NHM, govt of Karnataka. He has mentored the PICU at KRIMS, Karwar. He has been serving in Rashtrotthana hospital since its inception in Dec 2022 .',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['GENERAL PAEDIATRICS', 'NEWBORN CARE', 'PAEDIATRIC EMERGENCIES & PAEDIATRIC CRITICAL CARE'],
      expertise: 'Years of Experience: 9',
      qualification: 'MBBS, MD, FELLOWSHIP IN PAEDIATRIC INTENSIVE CARE (IGICH)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Vishwanath Sanagoudar | Best Paediatrician and Neonatologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Niveditha C',
      image: 'assets/Dr-Niveditha-C.png',
      desgination: 'PAEDIATRICS & NEONATOLOGY',
      about: 'Consultation Paediatrician and Neonatologist with expertise in management of Paediatric and Neonates including extreme preterm, birth asphyxia, advanced ventilation and critical interventional procedures.',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['General paediatrics', 'Critical Newborn and Paediatric care', 'Paediatric Nutrition', 'Advanced Neonatology '],
      expertise: 'Years of Experience: 7.5',
      qualification: 'MBBS, MD, Fellowship in Neonatology (NNFI),Early Nutrition Specialist (ENS),Fellowship in Paediatric Nutrition(ongoing)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Niveditha C | Best Pediatrician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Nikhil Hegde',
      image: 'assets/Dr-Nikhil-Hegde.png',
      desgination: 'ORTHOPEDICS',
      about: 'Specialised training in sports medicine, Arthroplasty and trauma',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Sports Medicine', 'Artgroplasty', 'Arthroscopy & Trauma'],
      expertise: 'Years of Experience: 6',
      qualification: 'MBBS, MS Orthopaedicss',
      time: '10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30',
      date: 'Monday,Wednesday and Friday',
      alt : 'Dr. Nikhil Hegde | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Neelam Saraswat',
      image: 'assets/Dr-Neelam-Saraswat.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'A skilled obstetrician and gynaecologist.MBBS from KMC, Mangalore and DNB from railway hospital kolkata. She  cleared MRCOG (london) and also worked in NHS  (U.K) briefly..she believes that all women should be cared with highest quality of medical care and should be supported all through out their journey...a keen yoga practitioner herself she would also like to explore field of yoga to help women especially pregnant women. She believes training future generation with evidence based protocols and practices is going to have significant impact in coming years.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Pregnancy', 'Adolescent care', 'Integrated medicine Protocols', 'Role of yoga in Women s Health care'],
      expertise: 'Years of Experience: 10',
      qualification: 'MBBS, DNB, MRCOG(U.K)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Ashwitha Gundmi',
      image: 'assets/Dr-Ashwitha-Gundmi.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Working as a consultant in WMN private Ltd. With MS ObGyn and MRCOG (UK), her qualifications reflect her dedication to patient well-being.  She is an experienced Obstetrics and gynaecology Consultant with expertise in managing various pregnancy-related disorders, including medical, genetic conditions, promoting vaginal birth to ensure optimal maternal and foetal health.She is a Gynaecologist with expertise in colposcopy for early detection and intervention of cervical abnormalities, awareness about cervical cancer vaccination and cervical screening, gynaecological surgeries including Minimally Invasive Surgeries including Laparoscopy and Hysteroscopy. Focusing on improving patients\' quality of life by addressing diverse gynaecological conditions.Has worked as faculty in medical College with active participation in research activities and academics of UG and PG students. Played a key role in medical camps and health awareness programmes .Believes in Evidence based practice. Is excellent in verbal and written communication. ',
      areasOfExpertise: ['High Risk Obstetrics', 'Protocol based management', 'Gynaecological Surgeries - MIS', 'Fertility Related issues', 'Family planning & Contraception'],
      expertise: 'Years of Experience: 7+',
      qualification: 'MBBS, MS OBG, MRCOG(London)',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt :'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Vinita Udupa',
      image: 'assets/Dr-Vinita-Udupa.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Vinita Udupa is an obstetrician specialised in Maternal and Fetal medicine. She has been trained in prestigious institutions like JIPMER Pondicherry, CMC Vellore and Fernandez hospital, Hyderabad. She believes that every pregnant woman and her fetus deserve high standards of care which is possible by practicing evidence based medicine. Dr. Vinita was the topper of OBG in MBBS. She also has a paper publication and several presentations in National and international conferences to her credit.',
      areasOfExpertise: ['High Risk Pregnancy', ' obstetric medicine', 'fetal medicine'],
      expertise: 'Years of Experience: 8',
      qualification: 'MBBS, MS, DNB, FNB, MRCOG(UK)',
      time: '11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10',
      date: 'Tuesday',
      alt : 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Anusha Mutalik Desai',
      image: 'assets/Dr-Anusha-Mutalik-Desai.png',
      desgination: 'Homeopathy',
      speciality: 'HOMEOPATHY',
      about: 'With 7 years of experience and strong foundation in homeopathic principles, I integrate classical homeopathy with modern insights to deliver personalized care.I believe in treating the whole person, not just the symptoms, to achieve optimal wellness.My goal is to educate and inspire patients to embrace a holistic lifestyle, promoting long-term health and wellness.',
      areasOfExpertise: ['Hypothyroidism', 'DM', 'HTN', 'Gastritis ', 'Haemorrhoids', 'Migraine', 'Anxiety disorders', 'Depression', 'Asthma', 'PCOD', 'Rheumatoid arthritis'],
      expertise: 'Years of Experience: 8',
      qualification: 'BHMS, MD (HOM)',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Anusha Mutalik Desai | Best Homeopathy Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    // {
    //   name: 'Dr. Ajay N',
    //   image: 'assets/Dr-Ajay-N.png',
    //   desgination: 'GASTRO SCIENCES',
    //   speciality: 'GASTRO SCIENCES',
    //   about: 'Dr. Ajay N is a dedicated surgeon specializing in gastrosciences, known for their expertise and compassionate care. With years of experience, Dr. Ajay N has mastered advanced surgical techniques, focusing on gastrointestinal disorders and innovative treatment approaches. Their commitment to patient outcomes is evident in their meticulous attention to detail and ability to foster trust with patients and families. Outside the operating room, Dr. Ajay N participates in community outreach programs, promoting awareness of gastrointestinal health. Dr. Ajay N continues to make significant impacts in the lives of those they serve.',
    //   areasOfExpertise: ['Laparoscopic surgery', 'Proctology', 'General Surgery'],
    //   qualification: 'MBBS, MS(General Surgery)',
    //   expertise: 'Years of Experience: 4',
    //   time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
    //   date: 'Monday-Saturday',
    //   alt : 'Dr. Ajay N | Best Gastro Doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    // },
    {
      name: 'Dr. Varsha P',
      image: 'assets/Dr-Varsha-P.png',
      desgination: 'LIFESTYLE MEDICINE',
      speciality: 'LIFESTYLE MEDICINE',
      qualification: 'BAMS, MD, YIC',
      about: "As a dedicated Ayurveda doctor with four years of experience as a Lifestyle Consultant, I specialise in Integrating traditional Ayurvedic principles with modern wellness practices. My qualifications include a Bachelor of Ayurvedic Medicine and Surgery (BAMS), a Master's Degree in Ayurveda (MD) and certification as a Yoga Instructor (YIC). I offer personalised lifestyle and wellness consultations, focusing on holistic approaches to health that emphasise diet, lifestyle modifications and natural therapies. My goal is to empower individuals to achieve balance and well-being through tailored Ayurvedic solutions and mindful living. Passionate about promoting sustainable health practices, I'm committed to help lead healthier lives by aligning their daily habits with their unique constitutional needs.",
      areasOfExpertise: [
        'Lifestyle diseases like Diabetes, Hypertension, Thyroid disorders, etc.',
        'Preventive measures for all diseases',
        'Healthy lifestyle guidelines, Diet counselling.'
      ],
      expertise: 'Years of Experience: 4',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Varsha P | Best Yoga & Lifestyle Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },

    {
      name: 'Dr. Rohith K. R',
      image: 'assets/Dr-Rohith-K-R.png',
      desgination: 'AYURVEDA',
      speciality: 'AYURVEDA',
      about: 'Dr. Rohit K. R is graduate from P N Panicker Souhruda Ayurveda Medical College, Kerala. He has one year experience at HOUSE SURGEON.',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 3',
      qualification: 'BAMS',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Rohith K. R | Ayurveda doctor in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    // {
    //   name: 'Dr. Alekhya R',
    //   image: 'assets/doctor-40.png',
    //   desgination: 'AYURVEDA',
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
      image: 'assets/Dr-Narendranath-A.png',
      desgination: 'Consultant, ENT Head & Neck surgery',
      speciality: 'ENT SPECIALITY',
      about: 'Dr. Narendranath A is graduate from RAJAH MUTHIAH MEDICAL COLLEGE,TAMIL NADU in 2010. He completed his post graduation MS (ENT) from vijayanagar insititute of medical sciences, bellary in 2015.Otology/ tympanoplasty and mastoidectomy surgeries, myringotomy and grommet surgery, FESS (nasal polyp surgery)/sinus surgeries, nasal septum correction surgery, Adenoid and tonsil surgeries, surgeries related to vocal cords (voice box), thyroid and parotid surgeries, tracheostomy.   ',
      areasOfExpertise: ['Otology and rhinology', 'Otology/ tympanoplasty', 'Mastoidectomy surgeries', 'Myringotomy and grommet surgery', 'FESS (nasal polyp surgery)/sinus surgeries', 'Nasal septum correction surgery', 'Adenoid and tonsil surgeries, surgeries related to vocal cords (voice box)', 'Thyroid and parotid surgeries', '* Tracheostomy'],
      expertise: 'Years of Experience: 10',
      qualification: 'MBBS, MS(ENT)',
      time: '13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30',
      date: 'Monday,Wednesday,Thursday and Friday',
      alt : 'Dr. Narendranath A | Best ENT Doctor in Bangalore | Rashtrotthana Hospita | Rajarajeshwari Nagar Bangalore'
    },
    // {
    //   name: 'Dr. Ashika Bagaria',
    //   image: 'assets/doctor-34.png',
    //   desgination: 'ENT and head and neck',
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
    //   desgination: 'Consultant Internal Medicine',
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
    //   image: 'assets/Dr-Bhavya.png',
    //   desgination: 'Consultant Internal Medicine',
    //   about: 'Dr. Bhavya N is a consultant physician and Diabetologist with practicing experience of 7 years in the field of Internal Medicine. She is a gold medalist and state rank holder in MD Internal medicine in RGUHS. She has sound knowledge in her field and practices evidence-based medicine providing patient centred care. Being a female physician she has an extra mile of interest in women and family health care. She has keen interest in research and is updated on newer aspects and recent advancements in treatment modalities.',
    //   speciality: 'INTERNAL MEDICINE',
    //   areasOfExpertise: ['Diabetes', 'Diabetes Reversal', 'Thyroid related illness', 'Blood related disorders', 'Critical illness', 'Hypertension', 'Infectious disease'],
    //   expertise: 'Years of Experience: 9',
    //   qualification: 'MBBS, MD',
    //   time: '09:00-09:20,09:20-09:40,09:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
    //   date: 'Monday-Saturday',
    //   alt : 'Dr. Bhavya | Best Diabetologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    // },

    {
      name: 'Dr. Shamantha S',
      image: 'assets/Dr-Shamantha-S.png',
      desgination: 'LIFESTYLE MEDICINE',
      about: ' ',
      speciality: 'LIFESTYLE MEDICINE',
      areasOfExpertise: [' '],
      qualification: 'BAMS',
      expertise: 'Years of Experience: 3',
      time: '10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date: 'Monday-Saturday',
      alt : 'Dr. Shamantha S | Lifestyle Specialist in Bangalore | Rashtrotthana Hospita | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Kavyashree Kulamarva',
      image: 'assets/Dr-Kavyashree-Kulamarva.png',
      desgination: 'Ayurvedic Psychiatry Consultant',
      about: 'Dr. Kavyashree is a seasoned researcher specializing in Ayurveda, Integrative Medicine and Neurology. With a robust background in clinical practice and research, Doctor has published several papers in reputed international journals. She served as a Senior Resident at the National Institute of Mental Health and Neurosciences (NIMHANS) for 3.5 years, contributing significantly to mental health and neurological research. Additionally, she worked as a Senior Research Fellow at the Central Council for Research in Ayurvedic Sciences (CCRAS), which involved several community health surveys and medical camps. Her work aims to bridge ancient wisdom with contemporary science for holistic patient care.',
      speciality: 'AYURVEDA',
      qualification: 'MD, PDF',
      areasOfExpertise: [' Anxiety disorder and Depression', 'Child psychiatric disorders (ASD, ADHD)', 'Add on Ayurveda for Schizophrenia', 'Motor Neuron Disease', 'Parkinson s disease', 'Muscular dystrophy', 'Stroke rehab', 'Multiple Sclerosis', 'Dementia'],
      expertise: 'Years of Experience: 6',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10,16:10-16:30,16:30-16:50,16:50-17:10',
      date: 'Monday-Saturday',
      alt : 'Dr. Kavyashree Kulamarva | Ayurvedic Psychiatry Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Ms. Archana Karthick',
      image: 'assets/Ms-Archana-Karthick.png',
      desgination: 'Senior Clinical Dietician',
      about: ' Ms. Archana Karthick has more than 16 years of experience in the field of Clinical Nutrition, dietetics and food service management. Prior Joining to Jaydev memorial Rashtrotthana Hospital she worked as Clinical Nutrition consultant in Cloudnine Hospital Kanakapura Road Bangalore.  Earlier to this she has over 10 years of experience from UAE -as Dubai health authority licensed Paediatric Nutrition & Dietetics from JCI accredited hospital -Al Jalila children’s speciality hospital and as clinical Nutrition & Dietician International Modern Maternity Hospital Dubai, UAE. She also holds life membership of Indian Dietetics association and IAPEN India Association for Parenteral and Enteral nutrition',
      speciality: 'NUTRITION & DIETETICS',
      areasOfExpertise: ['Prenatal and Post-natal Nutrition', 'Paediatric and geriatric nutrition', 'Enteral nutrition ', 'Diabetic management'],
      expertise: 'Years of Experience: 16+',
      qualification: ' M.Sc. in Dietetics and Food service management B.sc in Clinical Nutrition and Dietetics PG certificate in Diabetes Education (International Diabetes Federation) MICYAN -Indian Institute of public health-Delhi',
      time: '12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:30',
      date: 'Monday-Saturday',
      alt : 'Ms. Archana Karthick | Best Clinical Dietician in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Gopal Das C M',
      image: 'assets/Dr-Gopal-Das-C-M.png',
      desgination: 'Consultant Psychiatrist',
      about: 'Dr. Gopal Das C M is a distinguished Consultant Psychiatrist with extensive experience in treating a wide range of mental health conditions. His expertise includes managing stress, anxiety, depression, severe mental disorders and addiction issues. Specializing in child and adolescent psychiatry, he also addresses psychiatric concerns in the elderly. Dr. Das employs advanced treatments like ECT, TMS and TDCS, alongside psychotherapies and lifestyle. Dedicated to enhancing mental well-being, he offers comprehensive care tailored to individual needs.',
      speciality: 'PSYCHIATRY',
      areasOfExpertise: ['Stress and lifestyle induced psychological distress and disorders', 'Common mental illnesses like Anxiety and depression', 'Severe mental disorders like Schizophrenia and psychotic disorders, bipolar disorders, OCD, personality disorders, dissociative disorders etc.', 'Addictive disorders like smoking/tobacco addiction, alcohol use disorders and other drug addictions, behavioral addictions like Internet, gaming and smartphone or technology addiction, Pathological  gambling and others', 'Mental health issues arising in the course of various medical disorders/psychosomatic disorders ', 'Child and adolescent behavioral and psychological problems including ADHD etc', 'Psychiatric disorders in elderly like cognitive impairment/dementia etc.', 'Comprehensive evaluation and treatment for suicidal tendencies and self harm behaviors ', 'Sleep disorders due to psychological causes and primary insomnia.', ' Relationship issues, marital and sexual disorders', ' Consultations for Positive mental health and Well being'],
      expertise: 'Years of Experience: 11',
      qualification: 'MD Psychiatry, MBBS',
      time: '18:00-18:30,18:30-19:00,19:00-19:30',
      date: 'Monday-Saturday',
      alt : 'Dr. Gopal Das C M | Best Psychiatrist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Nishitha A',
      image: 'assets/Dr-Nishitha-A.png',
      desgination: 'Radiologist',
      about: 'Dr. Nishitha A is a recent addition to our  dedicated team of radiologists with a special interest in  women\'s imaging . She graduated summa cum laude in her  M.D Radio-Diagnosis(2023) examinations. Dr. Nishitha has completed her Senior Residency at BGS GIMS Hospital and is currently,  pursuing a fellowship in Fetal Medicine at ADI Advanced Care for Fetal Studies, Bangalore . Dr. Nishitha has  numerous paper presentations at State, national and international conferences to her credit with a Gold medal for the best paper in KCACON-2013 . Outside of her professional work, she is a trained Carnatic vocalist and Bharatanatyam dancer, reflecting her diverse talents and interests.',
      speciality: 'RADIOLOGY',
      areasOfExpertise: ['Women\'s Imaging'],
      expertise: 'Years of Experience: 1+',
      qualification: 'MBBS, MD',
      time: '16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:00',
      date: 'Monday-Thursday',
      alt : 'Dr. Nishitha A | Radiologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Nagesh R',
      image: 'assets/Dr-Nagesh-R.png',
      desgination: 'Radiologist',
      about: 'Dr. Nagesh R is an accomplished radiology consultant in jaydev rashtrotthana Hospital, with over a decade of experience in the field. He holds a medical degree in MBBS, DMRD and DNB and he is going to be a Fellow of the Royal College of Radiologists (FRCR), a highly esteemed qualification in the field of radiology. He is an active member of the Indian Radiology and Imaging Association.Dr. Nagesh R is an expert in general radiology and has a special interest in cardiovascular imaging, as well as performing USG and CT-guided interventions. He is highly skilled in interpreting medical images and diagnosing a wide range of medical conditions, from the most common to the most complex.',
      speciality: 'RADIOLOGY',
      areasOfExpertise: ['Radiology'],
      expertise: 'Years of Experience: 10',
      qualification: 'MBBS, DMRD, DNB, FRCR',
      time: '09:30-09:50,09:50-10:10,10:10-10:30,10:30-10:50,10:50-11:00',
      date: 'Monday-Friday',
      alt : 'Dr. Nagesh R | Radiology Consultant in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Sapna S',
      image: 'assets/dr-sapna-dr-page.png',
      desgination: 'AYURVEDA',
      about: 'Dr. Sapna S. is an experienced Ayurvedic professional with over 20 years of teaching and practice in Ayurveda, specializing in Rasashastra, Bhaishajya Kalpana and Panchakarma therapies. She holds an MD from SDM College, Udupi, along with additional qualifications such as a Postgraduate Diploma in Yoga and a Diploma in Medical Astrology. Dr. Sapna has been instrumental in shaping Ayurvedic education, working at renowned institutions including Sushruta Ayurvedic Medical College and Kalabahairaveshwara Ayurvedic Medical College in Bangalore and most recently, as a professor at Sanskriti Ayurvedic Medical College, Mathura.Her 20-year career includes 17 years in Bangalore and 3 years at Sanskriti Ayurvedic College, where she has dedicated herself to making Ayurvedic knowledge engaging and accessible for students. ',
      speciality: 'AYURVEDA',
      areasOfExpertise: ['Rasa Shastra and Bhaishajya Kalpana', 'Cancer therapy in Ayurveda', 'Medical Astrology (Daiva Vyapashraya Chikitsa)', 'Chronic skin diseases', 'Infertility cases', 'Geriatric care', 'PCOD', 'Obesity', 'Hypothyroidism'],
      expertise: 'Years of Experience: 20',
      qualification: 'MD (Ayu) in Rasa Shastra and Bhaishajya Kalpana from SDM College, Udupi PG Dip (Yoga) Diploma in Medical Astrology',
      time: '09:00-09:20,09:20-09:40,09:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date: 'Monday-Saturday,Sunday',
      alt : 'Dr. Sapna S | Best Ayurveda Specialist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
    {
      name: 'Dr. Venkatesh H. S',
      image: 'assets/Dr-Venkatesh-H-S.jpg',
      desgination: 'AYURVEDA',
      about: 'Dr. H. S Venkatesh is the founder and chief physician of the foundation. After graduating from Bangalore University and earning a BAMS degree from Taranath Govt. Ayurvedic Medical College in Bellary in 1985, he has spent over 25 years practicing Ayurveda. Dr. Venkatesh has conducted extensive research, particularly focusing on thyroid disorders and his work has demonstrated the efficacy of Ayurvedic treatments for conditions like thyroid imbalance and arthritis. He has been awarded fellowships and titles for his contributions, including "Ayurveda Chikitsa Praveena" and "Vaidya Bhaskara." He is also a respected educator, columnist and speaker on Ayurveda, regularly engaging with Ayurvedic colleges, medical journals and media outlets.',
      speciality: 'AYURVEDA',
      areasOfExpertise: ['Ayurveda Endocrinology', 'Thyroid Disorders', 'Arthritis', 'Ayurvedic Treatment and Research'],
      expertise: 'Years of Experience: 25',
      qualification:'BSc, BAMS, FAHO, FAGE',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date:'Wednesday and Friday',
      alt:'Dr. Venkatesh H. S | Best Ayurveda Endocrinologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
    },
      {
        name: 'Dr. Sunil Kumar C',
        image: 'assets/Dr-Sunil-Kumar-C.png',
        desgination: 'ENT, Head and Neck',
        about: 'Dr. Sunil Kumar has extensive experience in ENT and head/neck surgeries, including laser and thyroid procedures. He specializes in anti-aging, hair transplantation and facial trauma treatment. He has led various awareness programs in collaboration with WHO, and his insights on hearing loss have been featured on WHO\'s site.',
        speciality: 'ENT SPECIALITY',
        areasOfExpertise: ['Vertigo treatment','Ear, nose, throat (ENT) and head/neck surgery','Laser surgery','Emergency ENT procedures','Coablation surgery','Vocal cord surgery','Thyroid surgery','Cosmetic ENT surgery','Endoscopic sinus surgery','Microscopic ear surgery'],
        expertise: 'Years of Experience: 10+',
        qualification:' MS ENT, DHM, IFAAM',
        time:'18:30-18:50,18:50-19:10,19:10-19:30',
        date:'Tuesday,Thursday and Saturday',
        alt:'Dr. Sunil Kumar C | Best  ENT, Head and Neck Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'

      },
      {
        name: "Dr. Man Mohan U. S",
        image : "assets/Dr-Man-Mohan-U-S.png",
        desgination : "Gastroenterologist",
        about : "Dr. Man Mohan U.S. is a highly qualified gastroenterologist with extensive experience in managing complex gastrointestinal and hepatology conditions. Currently serving as an Assistant Professor at the Institute of Gastroenterology and Organ Transplant (IGOT), he has a keen interest in clinical research, with multiple publications and presentations at prestigious national and international conferences. He specializes in advanced diagnostic and therapeutic procedures, focusing on patient-centered care and innovative treatments in medical gastroenterology.",
        speciality : "GASTRO SCIENCES",
        areasOfExpertise: [
          "Acid Reflux / GERD, Gastritis & Peptic Ulcer Disease",
          "Celiac Disease, Ulcerative Colitis & Crohn's Disease",
          "Inflammatory Bowel Disorders (IBD), Irritable Bowel Syndrome (IBS)",
          "Chronic Constipation, Diarrhea",
          "Colitis & Colon Polyps, Chronic Polyps / Cancer",
          "Bleeding Per Rectum, GI-Related Malignancy",
          "Fatty Liver Disease, Alcoholic Liver Disease",
          "Cirrhosis & Liver Fibrosis, Liver-Related Issues",
          "Pancreatitis, Gallstones & Biliary Disorders",
          "Abdominal Pain, Bloating & Nausea, Hepatitis & Liver Disorders"
        ],
        
        expertise : "Years of Experience: 8+",
        qualification : "MBBS, MD in General Medicine, Dr.N.B in Medical Gastroenterology",
        time : "",
        date : "Monday, Wednesday and Saturday",
        alt:"Dr. Man Mohan U. S | Best Gastroenterologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore"
      },
      {
        name: "Dr. Kalyani Dilip Karkare",
        image : "assets/Dr-Kalyani-Dilip-Karkare.png",
        desgination: 'Neuro Science',
        speciality: 'NEUROSCIENCES',
        about : "Dr. Kalyani Karkare, a Gold Medalist in DM Neurology from NIMHANS, Bangalore (2010), is an expert in epilepsy and EEG. After gaining experience at Medanta The Medicity Hospital, she pursued a fellowship in EEG at SCTIMST, Thiruvananthapuram (2013). From 2015 to 2018, she worked with the epilepsy surgery team at Nicklaus Children's Hospital, Miami, USA, specializing in advanced techniques like subdural and stereoEEG. She has also set up epilepsy labs in leading hospitals. In addition to epilepsy, she is proficient in acute stroke management, including IV thrombolysis and mechanical thrombectomy, and she emphasizes comprehensive stroke care with rehabilitation. With numerous publications, academic presentations and teaching experience, she combines deep knowledge, empathy and attentive care for her patients.",
        areasOfExpertise : ["Epilepsy", "Stroke", "Neuropathy"],
        expertise : "Years of Experience: 14+",
        qualification : "MBBS, DM Neurology, PDF EEG",
        time : "",
        date : "Monday",
        alt:'Dr. Kalyani Dilip Karkare | Best Neurologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
      },
      {
        name: "Dr. Vivekanand",
        image : "assets/Dr-Vivekanad.png",
        desgination: 'Consultant Vascular Surgeon',
        speciality: 'GENERAL SURGERY',
        about : "Dr. Vivekanand is a highly experienced vascular surgeon with over two decades of expertise in vascular and endovascular surgery. Currently serving as the Head of the Department at the Jain Institute of Vascular Sciences, Bhagwan Mahaveer Jain Hospital, he has been instrumental in advancing vascular care. He is a recognized leader, having served as the President of the Vascular Surgeons Association of Karnataka and President Elect of the Vascular Society of India. With a strong commitment to education, Dr. Vivekanand has mentored numerous fellows and postgraduates and has authored multiple publications and textbook chapters in vascular surgery and dermatology.",
        areasOfExpertise : ["Prevention and management of diabetic foot infections and limb preservation.", "Awareness and treatment of Deep Vein Thrombosis (DVT) and thrombotic events.","Advanced wound healing techniques.","Management of thrombosis and hemostasis disorders."],
        expertise : "Years of Experience: 25+",
        qualification : "MBBS, MS(General Surgery), FVES",
        time : "",
        date : "",
        alt:'Dr. Vivekanand | Consultant Vascular Surgeon in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
      },
      {
        name: "Dr. Dhanyatha Muninarayan",
        image : "assets/Dr-Dhanyatha-Muninarayan.png",
        desgination: 'Consultant Paediatrician',
        speciality: 'PAEDIATRICS AND NEONATOLOGY',
        about : "Dr. Dhanyatha Muninarayan is a compassionate and skilled paediatrician with an MD in Paediatrics from Rajarajeswari Medical College, Bengaluru. With extensive experience in General Paediatrics, Neonatology, and Paediatric Haematology-Oncology, she has worked in reputed hospitals including Cloud Nine, St. John’s Medical College, ESI Medical College and Sakra World Hospital. Currently serving as a Consultant at Belanus Champion Hospital, she is proficient in managing neonatal and paediatric cases, performing critical procedures and mentoring medical students. Her research contributions include award-winning presentations and publications on neonatal and paediatric health issues, reflecting her dedication to advancing paediatric care.",
        areasOfExpertise : ["General Paediatrics and Neonatology", "Managing Outpatients and Inpatients", "Resuscitation of Normal and High-Risk Patients", "Patient Counselling", "Medical Procedures: Intubation, Lumbar Puncture, Bone Marrow Aspirations", "Medical Student Coaching and Interactive Teaching"],
        expertise : "Years of Experience: 7",
        qualification : "MBBS, (MD) Paediatrics",
        time : "",
        date : 'Monday-Saturday',
        alt : 'Dr. Dhanyatha Muninarayan  | Consultant Paediatrician in Bangalore | Rajarajeshwari Nagar Bangalore'
      },
      // {
      //   name: "Dr. Sunil Shenvi",
      //   image : "assets/Dr-Sunil-Shenvi.png",
      //   desgination: 'General Sugery',
      //   speciality: 'GASTRO SCIENCES',
      //   about : "Dr. Sunil Shenvi is a distinguished Senior Consultant in Hepato-Biliary-Pancreatic (HPB) Surgery and Multiorgan Transplantation, offering his expertise at Jayadev Memorial Rashtrotthana Hospital and Research Centre in Bengaluru. With extensive experience, he specializes in liver transplantation, including living and deceased donor transplants, blood group-incompatible transplants and positive cross-match transplants. He is also skilled in pancreas transplantation, surgeries for benign pancreatic conditions like acute and chronic pancreatitis and advanced procedures for cancers of the bile duct and gallbladder. Additionally, he performs complex vascular access surgeries for hemodialysis, providing comprehensive care for patients with organ failure and related complications.",
      //   areasOfExpertise : ["Jaundice","Hepatitis","Liver Fibrosis","Acute Liver Failure","Alcoholic Liver Disease","Autoimmune Liver Disease","Blood Vomiting","Ascites (Swelling in Abdomen & Feet)","Portal Hypertension","Wilson’s Disease","Biliary Atresia","Pancreas","Bile Duct Gastro Cancer","Liver Cirrhosis","Liver Cancer"],
      //   expertise : "Years of Experience: 15+",
      //   qualification : "MBBS, MS - General Sugery, MCh - Surgical Gastroenterology, FASTS (Fellow of American Society of Transplant Surgeons)",
      //   time : "",
      //   date : "",
      //   alt : 'Dr. Sunil Shenvi | Best General Surgery and Gastroenterology doctor in Bngalore | Rajarajeshwari Nagar'
      // },
      {
        name: "Dr. Hemanth Kumar Venkatesh",
        image : "assets/Dr-Hemanth-kumar-Venkatesh.png",
        desgination: 'ORTHOPEDICS',
        speciality: 'ORTHOPEDICS',
        about : "<p>With over 20 years of experience in Trauma and Orthopaedics, Dr. Hemanth Kumar Venkatesh is a highly skilled consultant orthopaedic surgeon specializing in hip and knee joint replacement surgeries, robotic arthroplasty, knee sports surgery and joint preservation techniques. He provides comprehensive care for a wide range of musculoskeletal conditions.</p><p>He is adept at managing complex cases, including primary and revision arthroplasty, shoulder and ankle sports injuries, diabetic foot limb salvage and hand and wrist surgeries. His expertise is complemented by contributions to research and leadership roles in healthcare projects.</p><p>Having worked at renowned institutions like University Hospitals of Plymouth NHS Trust and North West Anglia Foundation Trust, he brings advanced knowledge and a patient-centered approach to his practice. His dedication to exceptional care is supported by extensive training and fellowship experience in both the UK and India.</p>",
        areasOfExpertise : ["Primary & Revision joint replacement surgery of Hip  & Knee","Robotic Joint Replacement Surgery","Soft Tissue Knee Surgery - ACL reconstruction / multi-ligament reconstruction surgery / Meniscus repair/cartilage preservation surgery","Joint preservation surgery of Knee","Sports surgery of Shoulder & Ankle","Complex Diabetic foot limb salvage surgery","Elective Foot & ankle surgery, Hand & Wrist surgery","Chronic pain management and Elective Spine Surgery","Limb Reconstruction surgery"],
        expertise : "Years of Experience: 20",
        qualification : "MBBS, DNB Ortho, FRCS Edin T&O, MCh Ortho UK, CCT UK",
        time : "",
        date : 'Monday-Saturday',
        alt : 'Dr. Hemanth Kumar Venkatesh | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital'
      },
      {
        name: "Dr. Matam Sri Anusha",
        image : "assets/dummy.png",
        desgination: 'Rheumatology',
        speciality: 'RHEUMATOLOGY',
        about : "<p>Dr. Matam Sri Anusha is a compassionate and experienced Rheumatologist specializing in the diagnosis and treatment of a wide range of inflammatory and autoimmune conditions. She provides expert care for conditions such as rheumatoid arthritis, psoriatic arthritis, lupus, spondyloarthritis and osteoporosis, as well as recurrent pregnancy losses and vasculitis.</p<p>She offers personalized treatment plans using the latest advancements in rheumatology to help patients manage chronic pain, joint issues and systemic inflammatory disorders. If you're experiencing symptoms like joint pain, swelling, stiffness, skin rashes, fatigue, or unexplained weight loss, Dr. Anusha is dedicated to providing the care and support you need for improved health and well-being.</p>",
        areasOfExpertise : ["Inflammatory arthritis","Connective tissue diseases (Lupus, Sjogren's, Systemic sclerosis)","Vasculitis","Recurrent pregnancy losses","Sarcoidosis","Osteoporosis","Gout"],
        expertise : "Years of Experience: 8",
        qualification : "Qualification: MBBS, MD (Internal Medicine) DM (Clinical Immunology and Rheumatology) MRCP-SCE (UK) Rheumatology, EULAR Fellow",
        time : "",
        date : "Monday, Wednesday and Friday",
        alt : 'Dr. Matam Sri Anusha | Best Rheumatology Doctor in Bnagalore | Rashtrotthana Hospital'
      },
      {
        name: "Dr. C Rajendran",
        image : "assets/Dr-Rajendran.png",
        desgination: 'INTERNAL MEDICINE',
        speciality: 'INTERNAL MEDICINE',
        about : "<p>Dr. C Rajendran is a highly experienced physician with 27 years of medical practice, including 19 years post post-graduation. A graduate of the prestigious Armed Forces Medical College and a postgraduate from Mumbai University, he is well-versed in treating a broad spectrum of medical conditions.</p><p>His expertise lies in Diabetes management, Infectious Diseases and General Medicine, with a strong focus on hypertension, asthma, COPD, thyroid disorders and fever management. Known for his exceptional patient communication skills, he believes in dedicating ample time to listen and understand his patient's concerns thoroughly. He is proficient in managing a wide range of conditions, including diabetes, hypertension, asthma, arthritis, anemia and various infections.</p>",
        areasOfExpertise : ["General Medicine","Diabetes Management","Infectious Diseases","Hypertension","Asthma","COPD","Thyroid Disorders","Fever Management"],
        expertise : "Years of Experience: 27",
        qualification : "MD (General Medicine), MBBS, Fellowship in Diabetology, Fellowship in Infectious Diseases  ",
        time : "",
        date : "Sunday-Tuesday",
        alt : 'Dr-Rajendran.png | Best Internal Medicine Doctor in Bangalore | Rashtrotthana Hospital'
      },
      {
        name: "Dr. Sushmitha Raj R",
        image : "assets/Dr-Sushmitha-Raj-R.png",
        desgination: 'Dental Surgery',
        speciality: 'DENTAL SCIENCES',
        about : "A dedicated and compassionate dentist with 3+ years of experience in general dentistry, restorative procedures, and minor oral extractions. Proficient in diagnosing and treating a wide range of dental conditions while prioritizing patient-centered care. Known for excellent communication and interpersonal skills, ensuring a positive patient experience for individuals of all ages.",
        areasOfExpertise : ["General Dentistry","Endodontics","Cosmetic Dentistry"],
        expertise : "Years of Experience: 3",
        qualification : "BDS, FRCD",
        time : "",
        date : 'Monday-Saturday',
        alt : 'Dr. Sushmitha Raj R | Best Dentist in Bangalore | Rashtrotthana Hospital'
      },
      // {
      //   name: "Dr. S K Ranjani",
      //   image : "assets/dummy.png",
      //   desgination: 'ENT (Ear, Nose, and Throat) ',
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
        image : "assets/Dr-Giri.png",
        desgination: 'Medical Oncologist',
        speciality: 'ONCOLOGY',
        about : "Dr. G. V. Giri graduated with an MBBS from JN Medical College, Belgaum and completed his MD in Internal Medicine from JJM Medical College, Davangere. He further specialized with a DM in Medical Oncology from Kidwai Cancer Institute. With 10 years of experience as an oncologist in the public sector, he is also a published author in national and international journals.",
        areasOfExpertise : ["Head and Neck Cancer","Lung Cancer","Breast Cancer","Gastrointestinal Cancer","Genito-Urinary Cancer"],
        expertise : "Years of Experience: 10+",
        qualification : "MBBS, MD, DM",
        time : "",
        date : "Monday, Wednesday and Friday",
        alt : 'Dr. G. V. Giri | Best Oncologist Bangalore | Rashtrotthana Hospital'
      },
      {
        name: "Dr. Kavya N",
        image : "assets/Dr-Kavya.png",
        desgination: 'Ayurveda',
        speciality: 'AYURVEDA',
        about : "Dr. Kavya has completed her BAMS and MD in Dravyaguna Vijnana from Government Ayurveda Medical College, Bengaluru. She has garnered rich clinical experience for over 15 years and specialized in treating various metabolic disorders, diseases of the gut, bone and joint disorders, diseases of the spine, skin health and gynecological wellness. Dr. Kavya comes in with 10 years of experience in Ayurveda and Integrative research from the prestigious Central Council for Research in Ayurvedic Sciences, Ministry of Ayush, Govt of India. She has to her credit a number of publications and has been a reviewer for many reputed peer reviewed journals, multiple awards and recognitions and presentations at National and International conferences. She is well known for her oratory skills and has addressed a wide range of both scientific and general audiences at various occasions.",
        areasOfExpertise : ["Metabolic disorders", "Diseases of the gut", "Skin diseases", "Arthritis", "Diseases of the spine", "Gynecological problems"],
        expertise : "Years of Experience: 15+",
        qualification : "BAMS, MD (Ay), (PhD)",
        time : "",
        date : "Thursday",
        alt : 'Dr. Kavya | Ayurveda Doctor in Bangalore | Rashtrotthana Hospital'
      },
      {
        name: "Dr. Sandhya S. Patil",
        image : "assets/dr-sandhya-dr-page.png",
        desgination: 'ENT and Head & Neck Surgery',
        speciality: 'ENT SPECIALITY',
        about : "Dr. Sandhya S. Patil is a skilled ENT and Head & Neck Surgeon with over a decade of experience in managing a wide range of ENT conditions. She has trained at prestigious institutions such as KEM Hospital, Pune, and St. John's Medical College, Bengaluru. Her clinical expertise spans endoscopic sinus surgeries, pediatric ENT procedures, allergy management, and complex head and neck surgeries. Dr. Sandhya Patil currently practices as a Consultant at multiple reputed hospitals in Bengaluru and also runs her own ENT clinic, Swasthya ENT Centre. She is known for her thorough patient care, surgical precision and commitment to academic excellence.",
        areasOfExpertise : ['Septoplasty','Turbinectomy','Turbinoplasty','Functional Endoscopic Sinus Surgery (FESS)','Nasal Endoscopy and Biopsy','Skin Prick Test','Allergen Immunotherapy','Tympanoplasty','* Cortical Mastoidectomy','Modified Radical Mastoidectomy','Auroplasty','Myringotomy and Grommet Insertion','Tonsillectomy','Coblation Adenoidectomy','Conventional Adenoidectomy','Direct Laryngoscopy','Microlaryngeal Surgery','Tracheostomy','Incision and Drainage','Submandibular Gland Excision','Hemithyroidectomy','Total Thyroidectomy','Diagnosis and Management of Head and Neck Oncologic Surgeries'],
        expertise : "Years of Experience: 10+",
        qualification : "MBBS, DLO, DNB (ENT), AASC",
        time : "",
        date : "",
        alt : 'Dr. Sandhya S. Patil | Best ENT Consultant in Bangalore | Rashtrotthana Hospital'
      },
      {
      name: "Dr. Dona Susan John",
      image: "assets/dr-dona-susan-john-dr-page.png",
      desgination: 'Ophthalmology',
      speciality: 'OPHTHALMOLOGY',
      about: "<p>Graduation (MBBS) from Govt Medical College, Thiruvananthapuram. (1996-2002) Post graduation(DNB Ophthal) and medical retina from Chaitanya Eye Hospital and research institute, Thiruvananthapuram. (2003-2006) Worked in Mulamoottil Eye Hospital, Kozhencherry, Kerala for 5 years.(2007-2012 April)</p> <p>Worked in Vasan Eye Care, Bangalore for 6 years. (2012 may-2018 feb) Self employed in Move &Shine orthopaedic wellness and eye clinic, Uttarahalli Bangalore from 2018 till now.</p>",
      areasOfExpertise: ['Medical Retina'],
      expertise: "Years of Experience: 18+",
      qualification: "MBBS, DNB Ophthal, FICO",
      time: "",
      date: "",
      alt: 'Dr. Dona Susan John | Best Ophthalmology doctor in Bangalore | Rashtrotthana Hospital',
      title:'',
      description:''
    },
    {
      name: "Dr. Nithin J",
      image: "assets/dr-nithin-j-dr-page.png",
      desgination: 'Nephrology',
      speciality: 'NEPHROLOGY',
      about: "<p>Dr. Nithin J is a skilled and experienced nephrologist known for his precision in renal procedures and holistic approach to kidney care. He has independently performed over 1000 renal biopsies, inserted more than 1000 uncuffed jugular and femoral catheters and over 200 cuffed jugular catheters - demonstrating his strong procedural expertise.</p> <p>He has managed the complete workup and post-transplant care of more than 300 renal transplant recipients, including complex cases involving post-transplant complications. His technical proficiency is complemented by a deep clinical interest in glomerular diseases, dialysis management and transplant nephrology.</p> <p>Dr. Nithin has actively contributed to nephrology research, with several national presentations and a publication in an international journal. His academic involvement includes studies on idiopathic membranous nephropathy, drug-induced nephrotoxicity and individualized dialysis strategies. Through his hands-on skills and research-driven approach, he remains committed to delivering comprehensive, high-quality renal care.</p>",
      areasOfExpertise: ['Clinical nephrology','Renal transplantation (pre- and post-operative care)','Hemodialysis and peritoneal dialysis','Management of glomerular diseases','Renal biopsies and catheter placements','Post-transplant complication management'],
      expertise: "Years of Experience: 13+",
      qualification: " MBBS, MD in General Medicine, DM in Nephrology",
      time: "",
      date: "",
      alt: 'Dr. Nithin J | Best Nephrology doctor in Bangalore | Rashtrotthana Hospital',
      title:'',
      description:''
    },
    {
      name: "Dr. Dhruva Ithal",
      image: "assets/dr-dhruva-ithal-doctor-page.png",
      desgination: 'Psychiatry',
      speciality: 'PSYCHIATRY',
      about: "<p>Dr. Dhruva Ithal is a highly accomplished psychiatrist with extensive experience across clinical care, academic research and mental health training. A graduate of NIMHANS with an MD and Ph.D. in Psychiatry, he has also held a prestigious Research Training Fellowship from the Wellcome Trust-DBT India Alliance. His expertise spans a wide range of psychiatric conditions, with a strong focus on treatment-resistant schizophrenia, adolescent mental health, substance use disorders and neurostimulation therapies such as ECT and TMS.</p> <p>Dr. Dhruva has been associated with leading institutions including NIMHANS and Harvard Medical School (as a visiting research scholar), and has contributed to several national and international research projects. He integrates neuroscience, psychotherapy and holistic practices like yoga and art therapy into patient care. Passionate about advancing mental health awareness and evidence-based treatment, he is also actively involved in training young professionals and engaging with the community through public education initiatives.</p>",
      areasOfExpertise: ['General & Adult Psychiatry', 'Schizophrenia', '* Brain Stimulation Techniques (ECT, TMS)', 'Neuroimaging and Functional MRI', '* Substance Use Disorders', 'Adolescent Psychiatry', 'Perinatal Psychiatry', 'Psychotherapy (CBT, Psychodynamic, Trauma-focused)', 'Dance, Art, and Yoga-based therapies'],
      expertise: "Years of Experience: 13+",
      qualification: "MBBS, MD (NIMHANS), Ph.D. in Psychiatry (NIMHANS)",
      time: "",
      date: "",
      alt: 'Dr. Dhruva Ithal - Expert Psychiatrist in Bangalore',
      description:''
    },
    {
      name: "Dr. Limesh M",
      image: "assets/dr-limesh-dr-page.png",
      desgination: 'Nephrology',
      speciality: 'NEPHROLOGY',
      about: "<p>Dr. Limesh M is a nephrologist and transplant physician with a strong foundation in both clinical care and academic nephrology. His core strengths include vascular access procedures, kidney biopsies and the comprehensive management of transplant patients. He has a keen interest in CKD prevention, acute kidney injury in critical care settings and post-transplant immunosuppression monitoring.</p> <p>posters presented at reputed national forums on topics such as CRBSI incidence, the safety of ACE inhibitors in CKD, MMF level monitoring and rare conditions like Dent’s disease and nephrogenic systemic fibrosis. Known for his systematic and patient-centered approach, Dr. Limesh integrates evidence-based medicine with procedural expertise to support high-quality kidney care.</p>",
      areasOfExpertise: ['Management of chronic kidney disease (CKD) and acute kidney injury (AKI)','Critical care nephrology and ICU monitoring','Kidney transplantation (live and cadaveric)','Renal biopsies and vascular access procedures','Catheterization techniques (jugular and femoral)','Post-transplant care and immunosuppressive therapy monitoring','Nephrology-related emergency and casualty care'],
      expertise: "Years of Experience: 15+",
      qualification: "MBBS, MD in General Medicine, DNB (Nephrology)",
      time: "",
      date: "",
      alt: 'Dr. Limesh M | Nephrologist & Transplant Physician Bangalore',
      title:'',
      description:''
    },
    {
      name: "Dr. Shruti Suresh",
      image: "assets/dr-shruti-suresh-doc-page.jpg",
      department: 'Internal Medicine',
      desgination: 'Internal Medicine',
      speciality: 'INTERNAL MEDICINE',
      about: "Compassionate and skilled physician with over 12 years of experience in providing high-quality care in General Medicine. Adept at diagnosing and treating a variety of conditions while building strong relationships with patients. Committed to continuous learning and advancing medical knowledge.",
      areasOfExpertise: [' Communicable and non comminacable diseases', 'particularly Diabetes Mellitus'],
      expertise: "Years of Experience: 13+",
      qualification: "MBBS, DNB (Internal Medicine)",
      time: "",
      date: "",
      alt: 'Dr. Shruti Suresh | Best Internal Medicine Doctor in Bangalore | Rashtrotthan Hospital',
      title:'',
      description:''
    },
    {
      name: "Dr. Harshith K. S",
      image: "assets/Dr-Harshith-K-S.png",
      department: 'Internal Medicine',
      speciality: 'INTERNAL MEDICINE',
      about: "Dr. Harshith K. S is an experienced consultant physician specializing in internal medicine, with nearly two decades of expertise in comprehensive diagnosis and management of adult medical conditions. His clinical interests include managing complex cases, diabetes care and diabetic foot risk assessment, with his thesis presented at a national diabetic conference. He is known for his commitment to patient care, evidence-based practice and dedication to continuous learning in general medicine.",
      areasOfExpertise: ['Hand injuries','Vaccination/immunization','Marfan syndrome','Hyperhidrosis','Capsule endoscopy','MMR vaccination','Ganglion cyst','Hemochromatosis','Toxic hepatitis'],
      expertise: "Years of Experience: 18+",
      qualification: "MBBS, MD in General Medicine ",
      time: "",
      date: "",
      alt: 'Dr. Harshith K. S | Best Internal Medicine Doctor in Bangalore | Rashtrotthan Hospital',
      title:'',
      description:''
    },
    // {
    //   name: "",
    //   image: "",
    //   department: '',
    //   speciality: '',
    //   about: "",
    //   areasOfExpertise: [],
    //   expertise: "Years of Experience: +",
    //   qualification: "",
    //   time: "",
    //   date: "",
    //   alt: '',
    //   title:'',
    //   description:''
    // },
  ]
  specialDoctors = ['Dr. Pramod S. Chinder', 'Dr. Meena H. B', 'Brig (Dr) S. Shashivadhanan', 'Dr. Ravishankar. D', 'Dr. Sapna S','Dr. Kalyani Dilip Karkare','Dr. Man Mohan U. S'];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private titleService: Title, private metaService: Meta, private router: Router) {

  }


  ngOnInit() {
    this.titleService.setTitle("Doctors List | Best Doctors in Bangalore, India | surgeons - Rashtrotthana Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana hospital consists of highly experienced doctors in India who some of the top doctors in Bangalore. Our team consists of skilled surgeons and dedicated support teams.' });

    this.metaService.updateTag({ name: 'keywords', content: 'doctors, best doctors, top doctors in bangalore, top doctors' });
    this.subjects = [
      {
        name: 'MODERN MEDICINE',
        code: 'AU',
        items: [
          {
            cname: 'INTERNAL MEDICINE', code: 'GM-ON'
          },
          {
            cname: 'GENERAL SURGERY', code: 'GM-ON'
          },
          {
            cname: 'OBSTETRICS & GYNECOLOGY', code: 'GM-ON'
          },
          {
            cname: 'PAEDIATRICS AND NEONATOLOGY', code: 'GM-ON'
          },
          {
            cname: 'NEPHROLOGY', code: 'GM-ON'
          },
          {
            cname: 'UROLOGY', code: 'GM-ON'
          },
          {
            cname: 'ORTHOPEDICS', code: 'GM-ON'
          },
          {
            cname: 'GASTRO SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'CARDIAC SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'PULMONOLOGY', code: 'GM-ON'
          },
          {
            cname: 'OPHTHALMOLOGY', code: 'GM-ON'
          },
          {
            cname: 'DENTAL SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'ENT SPECIALITY', code: 'GM-ON'
          },
          {
            cname: 'NEUROSCIENCES', code: 'GM-ON'
          },
          // {
          //   cname: 'ENDOCRINOLOGY', code: 'GM-ON'
          // },
          {
            cname: 'PSYCHIATRY', code: 'GM-ON'
          },
          {
            cname: 'ONCOLOGY', code: 'GM-ON'
          },
          {
            cname: 'ANAESTHESIOLOGY', code: 'GM-ON'
          },
          {
            cname: 'EMERGENCY MEDICINE', code: 'GM-ON'
          },
          {
            cname: 'NUTRITION & DIETETICS', code: 'GM-ON'
          },
          {
            cname: 'RADIOLOGY', code: 'GM-ON'
          },
          {
            cname: 'DERMATOLOGY', code: 'GM-ON'
          },
          {
            cname : 'RHEUMATOLOGY', code: 'GM-ON'
          }


        ]
      },
      { cname: 'LIFESTYLE MEDICINE', code: 'YG' },
      { cname: 'AYURVEDA', code: 'AY' },
      { cname: 'HOMEOPATHY', code: 'HO' },
      { cname: 'YOGA SCIENCE', code: 'HO' },

    ];

    this.contactForm = this.fb.group({
      subject: ['', Validators.required]

    });
    this.loadVisibleDoctors();

    // Initialize the filteredDoctors list with all doctors
    this.filteredDoctors = this.doctors;
  }
  onScroll(event: any) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // this.loadMoreDoctors();
    }

  }

  loadVisibleDoctors() {
    this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
  }
  isPramodChinder(): boolean {
    return this.selectedDoctor && this.specialDoctors.includes(this.selectedDoctor.name);
  }

  onSubjectChange(event: any) {
    //   console.log('Selected Subject:', event);
    //   this.selectedSubject = event;
  }
  onSubmit(event: any): void {
    this.selectedSpeciality = this.contactForm.value.subject.cname;
    console.log(this.selectedSpeciality)
    this.filterDoctors();

  }
  clear(): void {
    this.contactForm.reset();
    this.nameFilter = '';
    this.selectedSpeciality = '';
    this.filteredDoctors = this.doctors;
  }
  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/^(dr\.|ms\.)\s*/, '');
  }

  filterDoctors(): void {
    const selectedSpeciality = this.selectedSpeciality;
    console.log(selectedSpeciality)
    const filteredBySpeciality = selectedSpeciality
      ? this.doctors.filter(doctor =>
        doctor.speciality.includes(selectedSpeciality))
      : this.doctors;


    const normalizedValue = this.nameFilter.toLowerCase();
    this.filteredDoctors = filteredBySpeciality.filter(doctor =>
      this.normalizeName(doctor.name).startsWith(normalizedValue)
    );
  }

  selectDoctor(doctor: any) {
    // this.selectedDoctor = doctor;
    // const doctorIndex = this.doctors.indexOf(doctor);
    // if (doctorIndex !== -1) {
    //   this.startIndex = doctorIndex;
    //   this.loadVisibleDoctors();
    // }

    // // Scroll to the doctor-details div
    // setTimeout(() => {
    //   const element = document.getElementById('doctor-details');
    //   if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }, 100);
    // const slug = doctor.name.toLowerCase().replace(/\s+/g, '-');
    // this.router.navigate(['/doctor', slug]);

    const slug = doctor.name
  .toLowerCase()
  .replace(/\./g, '')       // Remove all dots
  .replace(/\s+/g, '-');    // Replace spaces with hyphens

this.router.navigate(['/doctor', slug]);

  }

  selectDoctorAppoint(doctor: any) {
    this.selectedDoctorAppoint = doctor;
    this.showAppointmentForm = true;
    setTimeout(() => {
      const element = document.getElementById('appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  closeDoctorDetails(): void {
    this.selectedDoctor = null;
  }
  closeAppointmentForm() {
    this.showAppointmentForm = false;
    this.selectedDoctorAppoint = null;
  }
  handleBookAppointmentClick() {
    this.selectDoctorAppoint(this.selectedDoctor);
    this.showAppointmentForm = true;
  }

}