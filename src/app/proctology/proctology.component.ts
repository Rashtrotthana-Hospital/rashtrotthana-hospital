import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-proctology',
  templateUrl: './proctology.component.html',
  styleUrl: './proctology.component.css'
})
export class ProctologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Piles Treatment in Bangalore | Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Get advanced piles treatment in Bangalore at Rashtrotthana Hospital. Expert piles specialists offering painless laser surgery for piles and quick recovery. Book your appointment today!' });

  this.metaService.updateTag({ name: 'keywords', content: 'Proctologist in bangalore,Best proctologist in bangalore,Piles specialist near me,Best doctor for piles in Bangalore,Laser surgery for piles in Bangalore,Piles surgery in RR nagar Bangalore,Best Piles hospital in Bangalore ,Piles hospital in Bangalore ,Internal hemorrhoids treatment,External hemorrhoids treatment,Laser treatment for internal hemorrhoids,Painless surgery for piles in bangalore,Piles hospitals near me,Piles treatment without surgery in Bangalore,Best Proctology Hospital Rajarajeshwari nagar Bangalore ,Advanced laser therapy for external hemorrhoids,Advanced laser treatment for piles in Bangalore,Anal piles treatment in Bangalore,Piles symptoms' });

  }
  contactus(){
    this.router.navigate(['/contact-us-bangalore']);
  }


  doctors = [
    {
      image: 'assets/Dr-Atmaram-D-C.png',
      name: 'Dr. Atmaram D. C',
      department : 'GASTROENTEROLOGLIST',
      alt : 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital'
    },
    {
      image: 'assets/Dr-Nishanth-Lakshmikantha.png',
      name: 'Dr. Nishanth Lakshmikanth',
      department : 'SURGERY/GASTROSCIENCES',
      alt : 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
    }
  ]

  faqs = [
    {
      ques : "What are piles?",
      ans : "Piles, also known as hemorrhoids, are swollen veins in the rectum or anus. They can be internal hemorrhoids (inside the rectum) or external hemorrhoids (under the skin around the anus). Common piles symptoms include bleeding, pain and itching. Visit Rashtrotthana Hospital, the best piles hospital in Bangalore, for expert treatment."
    },
    {
      ques : "What are the common symptoms of piles?",
      ans : `
        <p class = "para">The most common piles symptoms include:</p>
        <ul>
          <li class = "para>Bleeding during bowel movements.</li>
          <li class = "para>Pain or discomfort while sitting.</li>
          <li class = "para>Swelling or lumps near the anus.</li>
          <li class = "para>Persistent itching or irritation around the anus.</li>
        </ul>
        <p>If you experience any of these symptoms, consult our piles specialists in Bangalore for advanced care.</p>
      `
    },
    {
      ques : "How are piles treated at Rashtrotthana Hospital?",
      ans : `
        <p class = "para">At Rashtrotthana Hospital, the leading piles hospital in Bangalore, we offer a range of treatments, including:</p>
        <ul>
          <li class - "para">Laser surgery for piles: A painless, minimally invasive procedure.</li>
          <li class - "para">Piles treatment without surgery in Bangalore: Non-invasive methods for mild cases.</li>
          <li class - "para">Internal hemorrhoids treatment and external hemorrhoids treatment for precise care.</li>
          <li class - "para">Painless surgery for piles for a comfortable experience.</li>
        </ul>
      `
    },
    // {
    //   ques : "",
    //   ans : `
    //     <p class = "para"></p>
    //     <ul>
    //       <li class - "para"></li>
    //     </ul>
    //   `
    // },
    {
      ques : "Can piles be treated without surgery?",
      ans : "Yes, mild cases of piles can be treated without surgery through lifestyle changes, medication and other non-invasive options. Rashtrotthana Hospital offers effective piles treatment without surgery in Bangalore, ensuring your comfort and recovery."
    },

    {
      ques : "What is laser surgery for piles?",
      ans : "Laser surgery for piles is a modern, minimally invasive procedure that uses laser technology to remove hemorrhoids. It’s painless, quick and allows for a faster recovery. At Rashtrotthana Hospital, our best piles surgeons in Bangalore specialize in this advanced treatment."
    },
     {
      ques : "When should I see a piles specialist?",
      ans : `
        <p class = "para">You should consult a piles specialist in Bangalore if you experience:</p>
        <ul>
          <li class - "para">Persistent pain or bleeding.</li>
          <li class - "para">Lumps or swelling near the anus.</li>
          <li class - "para">Difficulty sitting or performing daily activities due to piles symptoms.</li>
        </ul>
        <p class = "para">Our best proctologists in Bangalore can provide accurate diagnosis and personalized treatment options.</para>
      `
    },
    {
      ques : "Is Rashtrotthana Hospital the best piles hospital in Bangalore?",
      ans : "Yes, Rashtrotthana Hospital is recognized as the best piles hospital in Bangalore, offering advanced treatments like laser surgery for piles and expert care for all types of hemorrhoids. Located in Rajarajeshwari Nagar, we’re trusted by patients across the city."
    },
    {
      ques : "",
      ans : `
        <p class = "para">To prevent piles, follow these tips:</p>
        <ul>
          <li class - "para">Eat a high-fiber diet with plenty of fruits, vegetables and whole grains.</li>
          <li class - "para">Stay hydrated by drinking enough water.</li>
          <li class - "para">Avoid straining during bowel movements.</li>
          <li class - "para">Exercise regularly to maintain healthy bowel movements.</li>
        </ul>
        <p class = "para">If you notice any piles symptoms, seek help from the best piles hospital in Bangalore for early treatment.</p>
      `
    },
    {
      ques : "Does Rashtrotthana Hospital offer affordable piles surgery?",
      ans : "Yes, we provide affordable piles surgery in Bangalore without compromising on quality. Our team ensures every patient receives advanced care at a cost-effective price"
    },
    {
      ques : " How can I book an appointment for piles treatment in Bangalore?",
      ans : "Booking an appointment at Rashtrotthana Hospital is simple. Call us or visit our website to schedule a consultation with the best proctologists in Bangalore. We’re here to help you with painless and effective piles treatment in Bangalore."
    },
  ]
}
