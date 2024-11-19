import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {  
  constructor(private router: Router, private titleService: Title,  
    private metaService: Meta) {}
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;
  stopcounters: any[] = [];
  doctors: number = 0;
  patients:number=0;
  established:number=0;
  bed:number=0;
  insurance:number=0;
  selectedSpecialty: string = '';
  selectedDepartment: string = '';
  isDepartmentDisabled: boolean = true;


  
  navigateToPage() {
    this.router.navigate(['/about-us']);
    console.log('About Us');
  }
  donate(){

    this.router.navigate(['/donate-to-hospital-bangalore']);
  }
  emergency(){
    this.router.navigate(['best-emergency-trauma-multispeciality-hospital-bangalore']);
  }
  lab(){
    this.router.navigate(['laboratory-services-bangalore']);
  }
  radiology(){
    this.router.navigate(['top-diagnostics-multi-speciality-hospital-bangalore']);
  }
  pharmacy(){
    this.router.navigate(['24-hours-pharmacy-store-bangalore']);
  }
  dialysis(){
    this.router.navigate(['best-kidney-dialysis-multispeciality-hospital-bangalore']);
  }
  tkr(){
    this.router.navigate(['/total-knee-replacement-bangalore']);
  }
  hernia(){
    this.router.navigate(['/hernia-treatment-bangalore']);
  }
  proctology(){
    this.router.navigate(['/proctology-services-bangalore']);
  }
  
  showContent: any = 'default';
  showTitle:any = 'default'
  showImage: any = 'default';

// counter:number= 0;
// stopcounter:any=setInterval(()=>{
// this.counter++;
// if(this.counter==100){
//   clearInterval(this.stopcounter);
// }
// },10);
  features = [
    {
      name: 'Yoga',
      icon: 'yoga.png',
      className: 'yoga',
      key: 'yoga',
      image: 'yoga-hover.png',
      url: 'yoga-therapy-bangalore'
    },
    {
      name: 'Naturopathy',
      icon: 'naturopathy.png',
      className: 'naturopathy',
      key: 'naturopathy',
      image: 'naturopathy-hover.png',
      url: 'lifestyle-medicine-bangalore'
    },
    {
      name: 'Modern Medicine',
      icon: 'modern medicine.png',
      className: 'modern-medicine',
      key: 'modern-medicine',
      image: 'modern-medicine-hover.png',
      url: '/specialities/best-general-medicine-hospital-in-bangalore'
    },
    {
      name: 'Ayurveda',
      icon: 'ayurveda.png',
      className: 'ayurveda',
      key: 'ayurveda',
      image: 'ayurveda-hover.png',
      url: 'ayurvedic-treatment-bangalore'

    },
    {
      name: 'Homeopathy',
      icon: 'homeopathy.png',
      className: 'homeopathy',
      key: 'homeopathy',
      image: 'Homeopaathy-hover.png',
      url: 'homeopathy-treatment-bangalore'
    }
  ];
  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  onMouseOver(key: string) {
    this.showContent = key;
    this.showTitle = key;
    this.showImage =  key;
  };

  onMouseOut(){
    this.showContent = 'default';
    this.showTitle = 'default';
    this.showImage = 'default';
  }

  content: any = {
    'default': 'India\'s First Integrated Multi Speciality Hospital Blending Modern And Indian Medicine For Holistic Healing',
    'yoga': 'Yoga is a group of physical, mental and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika schools of Indian philosophical traditions.',
    'naturopathy': '',
    'modern-medicine': 'Modern medicine, or medicine as we know it, started to emerge after the Industrial Revolution in the 18th century. At this time, there was rapid growth in economic activity in Modern Europe and the Americas.',
    'ayurveda': 'Ayurveda is a system of medicine with historical roots in the Indian subcontinent. Globalized and modernized practices derived from Ayurveda traditions are a type of alternative medicine.',
    'homeopathy': "Homeopathy is a natural healing system that believes ' like cure like ' the idea that a substance causing symptoms in a healthy person can be used in tiny, highly diluted doses to treat similar symptoms in sick person. This gentle approach aims  to stimulate the body's self healing processes using carefully prepared remedies tailored to each person's unique needs. Trusted for centuries, homeopathy offers a holistic, individualised path to wellness by addressing both mind and body with no side effects."
  };
  
title:any ={
  'default': '',
  'yoga': 'Yoga',
  'naturopathy': 'Lifestyle',
  'modern-medicine': 'Modern Medicine',
  'ayurveda': 'Ayurveda',
  'homeopathy': 'Homeopathy'
}
image:any ={
  'default': 'assets/sheild_num.png',
  'yoga': 'assets/yoga-outline.png',
  'naturopathy': 'assets/naturopathy-outline.png',
  'modern-medicine': 'assets/medicine-outline.png',
  'ayurveda': 'assets/ayurveda-outline.png',
  'homeopathy': 'assets/homeopathy-outline.png'
}
// <div class="box">
//         <img src="../../assets/doctor-icon.png">
//         <div class="number">
//             {{counter}}
//         </div>
//         <div class="statement">
//             Doctors At Work
//         </div>
//     </div>


onSubmit(form: any) {
  console.log("form")
  if (form.valid) {
    this.router.navigate(['/doctor'], {
      queryParams: {
        specialty: this.selectedSpecialty,
        department: this.selectedDepartment
      }
    });
  }
}
onSpecialtyChange() {
  if (this.selectedSpecialty === 'generalMedicine') {
    this.isDepartmentDisabled = false;
  } else {
    this.isDepartmentDisabled = true;
    this.selectedDepartment = ''; // Reset department if it's disabled
  }
}

ngOnInit(){
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the section is visible
  };
  this.titleService.setTitle("Best Multispeciality Hospital In Bangalore");  
    
  // Set the meta description
  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital - Best multispeciality hospital in Bangalore offering world-class healthcare and treatments at affordable costs.' });

  // Optionally set other meta tags
  this.metaService.updateTag({ name: 'keywords', content: 'Best Multispeciality Hospital In Bangalore, Top Hospital in Bangalore, Rashtrotthana Hospital' }); 

  const observer = new IntersectionObserver(this.startCounter.bind(this), options);
    observer.observe(this.counterSection.nativeElement);

    console.log('Observer initialized');
}
startCounter(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach(entry => {
    console.log('Intersection entry:', entry);
    if (entry.isIntersecting) {
      console.log('Section is intersecting, starting counter');

      this.incrementCounter(0);
      this.incrementCounter(1);
      this.incrementCounter(2);
      this.incrementCounter(3);
      this.incrementCounter(4);

      observer.unobserve(entry.target); // Stop observing once counter starts
    }
  });
}

incrementCounter(index: number) {
  const target = this.box[index].target;
  const duration = 2000; // Duration in milliseconds
  const intervalTime = 10; // Interval time in milliseconds
  const totalSteps = duration / intervalTime;
  const incrementStep = Math.ceil(target / totalSteps);
  this.stopcounters[index] = setInterval(() => {
    if (this.box[index].number < target) {
      this.box[index].number = Math.min(this.box[index].number + incrementStep, target);
    } else {
      clearInterval(this.stopcounters[index]);
    }
  }, intervalTime);
}

box=[{
  icon:'doctor-icon.png',
  number:0,
  target:100,
  statement:'Doctors at work',
  showPlus: true 
},
{
  icon:'patient-icon.png',
  number:0,
  target:25000,
  statement:'Happy Patients',
  showPlus: true 
},
{
  icon:'hospital-icon.png',
  number:0,
  target:2022,
  statement:'Established'
},
{
  icon:'bed-icon.png',
  number:0,
  target:150,
  statement:'Medical Beds',
  showPlus: true 
},
{
  icon:'Staff.png',
  number:0,
  target:25,
  statement:'Insurance Tie Up '
}
]
slidearray = [
  { img: '../../assets/testinomials_female_icon.png', review: "Good establishment for medical care. Patients are more likely to place their trust in a physician like Dr. Manisha who demonstrates real concern for her patients. Having the atmosphere of one's own home. exceptional attention paid to the maintaining of cleanliness, as well as really helpful and kind staff members. The entirety of this is satisfactory; but, I do have one suggestion: would it be possible for you to please open all of the other super speciality departments? Because of this, there will be no need for us to locate for another hospital because all of the amenities would be located in the same location. RR Nagar Bengaluru", name: 'Tejaswini Gowda', place: 'Bengaluru' },
  { img: '../../assets/testinomials_male_icon.png', review: "Two weeks ago, I visited the hospital for my brother's admission. It was a very clean atmosphere. and courteous employees... Doctors as well as nurses are very respectful and qualified", name: 'Sathya Narayana', place: 'Bengaluru' },
  { img: '../../assets/testinomials_male_icon.png', review: "I have admitted under Dr.Nishanth pai ayurveda, they have treated me very well. Service is too good. I came from Telangana for the treatment.I felt I'm in safe hands. Thank you", name: 'Anil Pawar', place: 'Bengaluru' },
  { img: '../../assets/testinomials_female_icon.png', review: "I consulted Dr.Manisha (gastro general surgeon). Best in her field. And very helpful. Also consulted Dr.Anand Shankar, Very caring and motivating person. Thank you so much to both doctors and team.", name: 'Seema Katti', place: 'Bengaluru' },
  { img: '../../assets/testinomials_female_icon.png', review: "We went here for a radiographs and the process was very smooth. Charges were also very reasonable. The infrastructure looks very promising and this hospital has a great future if they get a team of exceptional doctors.", name: 'Hema Rudrappa', place: 'Bengaluru' },
  { img: '../../assets/testinomials_female_icon.png', review: "Excellent health care services with clean and hygienic conditions token of thanks to the doctors and excellent housekeeping Vinod, Rajini, Snega and others are very cooperating. Good catering and patient wellness. Overall great recovery ", name: 'Sholenkee Mitra', place: 'Bengaluru' },
  { img: '../../assets/testinomials_male_icon.png', review: "I had a great experience at Rashtrotthana Hospital. The staff were extremely friendly and helpful and the facilities were modern and clean. My mother felt like she was in very safe hands throughout the procedure, thanks to their top-notch medical care. I would highly recommend this hospital to anyone looking for quality health care services.", name: 'Rajeev VK', place: 'California' }
];
}
