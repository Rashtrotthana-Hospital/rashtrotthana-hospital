import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
declare var gtag: Function;
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-general-surgery',
  templateUrl: './general-surgery.component.html',
  styleUrl: './general-surgery.component.css'
})
export class GeneralSurgeryComponent implements OnInit {
  // constructor(private sanitizer: DomSanitizer, titleService: Title, private metaService: Meta) { }
  constructor(private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta) {}
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];

  ngOnInit(): void {

    this.titleService.setTitle("Best General Surgery Hospital in Bangalore | Rashtrotthana");  

    this.metaService.updateTag({ name: 'description', content: 'Looking for the best general surgery hospital in Bangalore? Rashtrotthana Hospital offers expert surgical care with advanced infrastructure.' });

    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);

  };


  doctors = [
    {
      doctor_image: '../../assets/Dr-Atmaram-D-C.png',
      doctor_name: 'Dr. Atmaram D. C',
      experience: "19",
      docalt: 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Nishanth-Lakshmikantha.png',
      doctor_name: 'Dr. Nishanth Lakshmikanth',
      experience: "9",
      docalt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
    },
    // {
    //   doctor_image: '../../assets/doctor-65.png',
    //   doctor_name: 'Dr. Vivekanand',
    //   experience: " 25+",
    //   docalt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
    // },
  ]

  formDoctors: any = ['Dr. Atmaram D. C', 'Dr. Nishanth Lakshmikanth']

  faqs = [
    {
      ques: 'Which is the best general surgery hospital in Bangalore?',
      ans: 'Rashtrotthana Hospital is one of the best general surgery hospitals in Bangalore, known for advanced surgical care, including laparoscopic surgery, endoscopic surgery, and minimally invasive procedures. Our experienced surgeons, like Dr. Atmaram D. C, Dr. Nishanth Lakshmikanth, and Dr. Vivekanand, ensure safe and successful outcomes.'
    },
    {
      ques: 'Who is the best general surgeon in RR Nagar, Bangalore?',
      ans: 'At Rashtrotthana Hospital, you will find some of the best general surgeons in RR Nagar, Bangalore, including Dr. Atmaram D. C, Dr. Nishanth Lakshmikanth, and Dr. Vivekanand, who specialize in laparoscopic and open surgeries for various conditions like hernia, gallbladder diseases, and appendicitis'
    },
    {
      ques: 'Where can I get the best hospital for laparoscopic surgery in RR Nagar, Bangalore?',
      ans: 'If you are looking for the best hospital for laparoscopic surgery in RR Nagar, Bangalore, Rashtrotthana Hospital offers state-of-the-art minimally invasive procedures, ensuring quicker recovery and minimal discomfort. Our laparoscopic surgeons in Rajarajeshwari Nagar, Bangalore, use cutting-edge techniques to treat conditions like gallstones, hernia, and appendix removal.'
    },
    {
      ques: 'Does Rashtrotthana Hospital offer endoscopic surgery in RR Nagar, Bangalore?',
      ans: 'Yes, we provide endoscopic surgery in RR Nagar, Bangalore, for diagnostic and therapeutic procedures. Our expert general surgeons in RR Nagar, Bangalore, ensure safe and effective treatment options for various gastrointestinal and abdominal conditions.'
    },
    {
      ques: 'Which is the best hospital for hernia surgery in Bangalore?',
      ans: 'Rashtrotthana Hospital is a top choice for hernia surgery hospital in Bangalore. We offer laparoscopic hernia repair, ensuring minimal scarring and a quick recovery for our patients.'
    },
    {
      ques: 'Where can I find the best hospital for gallbladder surgery in Bangalore?',
      ans: 'We specialize in gallbladder surgery in Bangalore, including laparoscopic cholecystectomy for gallstones. Our skilled laparoscopic surgeons in Rajarajeshwari Nagar, Bangalore, ensure safe and efficient removal of the gallbladder when necessary.'
    },
    {
      ques: 'Which hospital offers the best appendectomy in Bangalore?',
      ans: 'Rashtrotthana Hospital is well-equipped for appendectomy in Bangalore, using minimally invasive techniques to remove an inflamed appendix with minimal downtime for patients.'
    },
    {
      ques: 'Are emergency general surgery services available at Rashtrotthana Hospital?',
      ans: 'Yes, our general surgery hospital in Bangalore provides 24/7 emergency surgical services for conditions such as appendicitis, hernia complications, and trauma cases. Our experienced team, led by Dr. Atmaram D. C, Dr. Nishanth Lakshmikanth, and Dr. Vivekanand, ensures immediate and expert care.'
    },
    {
      ques: 'What types of surgeries does Rashtrotthana Hospital specialize in?',
      ans: `
        <div class = 's_para'>Our general surgery hospital in Bangalore specializes in various procedures, including:</div>
        <ul>
          <li class = 's_para'>Laparoscopic surgery (hernia, gallbladder, appendix)</li>
          <li class = 's_para'>Endoscopic surgery</li>
          <li class = 's_para'>Thyroid and breast surgeries</li>
          <li class = 's_para'>Colorectal and vascular surgeries</li>
          <li class = 's_para'>Trauma and emergency surgeries</li>
        </ul>
      `
    },
    {
      ques: 'Why choose Rashtrotthana Hospital for surgery?',
      ans: `
        <div class = 's_para'>Rashtrotthana Hospital is among the top general surgery hospitals in Bangalore, offering</div>
        <ul>
          <li class = 's_para'>Experienced surgeons like Dr. Atmaram D. C, Dr. Nishanth Lakshmikanth, and Dr. Vivekanand</li>
          <li class = 's_para'>Advanced surgical facilities with modern OT and ICU</li>
          <li class = 's_para'>Minimally invasive and laparoscopic techniques</li>
          <li class = 's_para'>24/7 emergency surgical care</li>
          <li class = 's_para'>Comprehensive preoperative and postoperative care</li>
        </ul>
      `
    },
  ]

  trackPhoneClick() {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
        'event_callback': () => {
          console.log('Phone call conversion tracked!');
        }
      });
    }
  }

  surgerySection = {
    heading: 'ENT Surgical Treatments',
    subHeading: 'Safe, Scar-Free & Child-Friendly Procedures',

    surgeries: [
      {
        id: 'hernia-repair',
        title: 'Hernia Surgery ',
        subtitle: 'Hernia Repair',
        description:
          `A hernia occurs when an internal organ or tissue pushes through a weak spot in the muscle wall, causing a visible bulge, discomfort, or pain—especially while lifting, coughing, or standing for long periods. Our Hernia Surgery helps repair the weakened area, relieving pain and preventing complications.`,
        procedure:
          'The procedure is performed using advanced surgical techniques, either minimally invasive (laparoscopic) or open surgery, based on the patient’s condition. The weakened muscle is strengthened, often using a surgical mesh, to ensure long-lasting results. Most patients experience minimal discomfort and return to daily activities within a short recovery period.',
        benefits: [
          'Minimally invasive options with faster recovery',
          'Effective relief from pain and discomfort',
          'Reduces risk of recurrence and complications',
          'Safe and commonly performed surgery',
        ],
        highlight:
          'Patients often experience significant relief-reduced pain, improved mobility, and a better quality of life-allowing them to return to normal routines with confidence.',
        icon: '🪡',
        slug: '/hernia-hospital-bangalore'
      },

      {
        id: 'laparoscopic-cholecystectomy',
        title: 'Gallstone Removal Surgery',
        subtitle: 'Laparoscopic Cholecystectomy',
        description:
          'Gallstones can cause severe abdominal pain, nausea, bloating, and digestive discomfort—especially after meals. Our Gallstone Removal Surgery safely removes the gallbladder to provide lasting relief and prevent repeated gallstone attacks.',
        procedure:
          'The procedure is performed using minimally invasive laparoscopic techniques through small keyhole incisions. This allows for less pain, minimal scarring, and faster recovery. Most patients can resume normal activities within a few days after surgery.',
        benefits: [
          'Minimally invasive, keyhole surgery',
          'Quick relief from gallstone pain',
          'Minimal scars with faster healing',
          'Safe and widely performed procedure',
        ],
        highlight:
          'Patients often experience immediate relief from pain and digestive discomfort, leading to improved comfort and a better quality of daily life.',
        icon: '🪨',
        slug: '/gallstone-removal-surgery-bangalore'
      },

      {
        id: 'piles-surgery',
        title: 'Piles Surgery',
        subtitle: 'Piles Surgery (Hemorrhoids)',
        description:
          'Piles are swollen veins in the rectal area that can cause pain, itching, bleeding during bowel movements, and discomfort while sitting. Our Piles Surgery provides effective relief by treating the affected veins and restoring comfort in daily life.',
        procedure:
          'The procedure is performed using advanced, minimally invasive techniques based on the severity of the condition. These methods reduce pain, minimize bleeding, and support faster recovery. Most patients can return to normal activities in a short time with proper care.',
        benefits: [
          'Minimally invasive treatment options',
          'Relief from pain, bleeding, and discomfort',
          'Faster recovery with minimal downtime',
          'Safe and commonly performed procedure',
        ],
        highlight:
          'Patients often experience quick relief from symptoms, improved comfort, and better quality of life after treatment.',
        icon: '⚕️',
        slug: '/piles-hospital-bangalore'
      }
    ]
  };

  @ViewChild('formSection') formSection!: ElementRef;

  scrollToForm() {
    if (this.formSection) {
      this.formSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  


}
