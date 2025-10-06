import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Hernia Surgery in Bangalore | Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Expert hernia treatment in Bangalore at Rashtrotthana Hospital. Advanced laparoscopic hernia surgery by top specialists. Book your consultation today!' });

  this.metaService.updateTag({ name: 'keywords', content: 'Best Hospital for Hernia Surgery in Bangalore,Best Hernia Mesh Surgery in Bangalore,Types of Hernia (Inguinal, Femoral, Umbilical, Ventral, Epigastric, Incisional, Hiatal),Best Hernia Specialists in Bangalore,Hernia Surgery Cost in Bangalore,Affordable Hernia Surgery in Bangalore,Best Hernia Doctors in Bangalore,Hernia Mesh Treatment in Bangalore,Best Hernia Mesh for Surgery in Bangalore,Laparoscopic Hernia Mesh Surgery in Bangalore,Non-Surgical Treatment for Hernia in RR Nagar, Bangalore,Physiotherapy After Hernia Surgery in Bangalore,Hernia Symptoms in Men,Cost of Hernia Mesh Surgery in Bangalore,Hernia Mesh Implant Centers in Bangalore,Top Hernia Specialists in Bangalore,Experienced Hernia Doctors in Rajarajeshwari Nagar, Bangalore,Hernia surgery success rate in Bangalore,Hernia symptoms,Hernia hospital' });

  }

  doctors =[
    // {
    //   image: 'assets/Dr-S-Shashivadhanan.png',
    //   name: 'Dr. Shashi Vadhanan',
    // },
    {
      image: 'assets/Dr-Atmaram-D-C.png',
      name: 'Dr. Atmaram D. C',
      department : 'GASTROENTEROLOGIST',
      alt : 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital'
    },
    {
      image: 'assets/Dr-Nishanth-Lakshmikantha.png',
      name: 'Dr. Nishanth Lakshmikanth',
      department : 'SURGERY/GASTROSCIENCES',
      alt : 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
    }
  ]
  contactus(){
    this.router.navigate(['/contact-us-bangalore']);
  }

  types = [
    {
      type_name : "Inguinal Hernia",
      content : "Inguinal hernias are the most common type, accounting for 75% of all hernias. They primarily affect men or individuals assigned male at birth (AMAB). This type of hernia occurs when part of the bowel protrudes into the inguinal canal, a passageway that runs down the inner thigh.",
      list : ["Pain or discomfort in the groin, especially when bending over, coughing, or lifting.","A bulge on either side of the pubic bone."]
    },
    {
      type_name : "Femoral Hernia",
      content : "A femoral hernia is a less common type of groin hernia that occurs in the femoral canal, which runs underneath the inguinal canal. It happens when fatty tissue or part of the bowel pushes through into the femoral canal.",
      list : ["Pain in the groin, particularly when lifting heavy objects.","A bulge near the thigh or groin."]
    },
    {
      type_name : "Hiatal Hernia",
      content : "A hiatal hernia is a common type acquired over a lifetime. It occurs when the opening in the diaphragm, where the esophagus passes through, widens, allowing the top of the stomach to push up through this opening into the chest cavity.",
      list : ["Heartburn or acid reflux.","Difficulty swallowing.","Chest pain or discomfort."]
    },
    {
      type_name : "Congenital Diaphragmatic Hernia",
      content : "This serious birth defect occurs when the diaphragm does not fully close during fetal development. It allows abdominal organs to slip into the chest cavity, crowding the lungs and affecting their growth.",
      list : ["Difficulty breathing in newborns.","Blue-tinted skin due to lack of oxygen.","Rapid breathing and heart rate."],
    },
    {
      type_name : "Incisional Hernia",
      content : "An incisional hernia occurs when tissue protrudes through a previous surgical incision in the abdominal wall that has weakened over time. This is a common complication following abdominal surgery.",
      list : ["Bulging near a previous surgical incision","Pain and discomfort at the site of the previous surgery."]
    },
    {
      type_name : "Umbilical Hernia",
      content : "An umbilical hernia happens when part of the intestine pushes through an opening in the abdominal wall near the belly button. Most umbilical hernias are congenital, meaning they are present from birth.",
      list : ["Swelling or bulging near the belly button.","Pain around the belly button, especially when coughing or lifting."]
    },
    {
      type_name : "Ventral Hernia",
      content : "A ventral hernia refers to any hernia occurring through the front wall of the abdomen. This category includes umbilical hernias and incisional hernias. An epigastric hernia, a type of ventral hernia, occurs above the belly button",
      list : ["Bulge in the abdominal wall.","Pain or discomfort in the abdomen."]
    },
    {
      type_name : "Perineal Hernia",
      content : "Perineal hernias are relatively rare and occur when organs or tissue push through an opening or weakness in the pelvic floor into the abdominal cavity.",
      list : ["Pain or pressure in the pelvic area.","A bulge in the perineum."]
    },
  ]

  faqs = [
    {
      ques : "Who is the best doctor for hernia treatment in Bangalore?",
      ans : "At Rashtrotthana Hospital, you can consult experienced hernia doctors like Dr. Atmaram D. C. and Dr. Nishanth Lakshmikanth, who specialize in laparoscopic and open hernia surgeries. Their expertise ensures accurate diagnosis and effective treatment tailored to every patient."
    },
    {
      ques : "Why is Rashtrotthana Hospital the best choice for hernia treatment?",
      ans : "Rashtrotthana Hospital is recognized as one of the top hernia hospitals in Bangalore. With advanced technology, personalized care plans, and specialists like Dr. Atmaram D. C. and Dr. Nishanth Lakshmikanth, the hospital offers effective solutions for all types of hernias."
    },
    {
      ques : "What are the symptoms of a hernia?",
      ans : `
        <p>Common hernia symptoms include:</p>
        <ul>
          <li>A noticeable bulge in the abdomen or groin.</li>
          <li>Discomfort or pain, especially when lifting or bending.</li>
          <li>A feeling of heaviness or pressure in the affected area.</li>
          <li>Symptoms that worsen with physical activity, coughing, or sneezing.</li>
        </ul>
        <p>If you notice any of these symptoms, you can consult hernia doctors like Dr. Nishanth Lakshmikanth at Rashtrotthana Hospital for expert care.</p>
      `
    },
    {
      ques : "What causes a hernia?",
      ans : "Hernias can occur due to muscle weakness or strain. Common hernia causes include heavy lifting, chronic coughing, obesity, pregnancy, and previous surgeries. For thorough evaluation and prevention advice, you can consult specialists like Dr. Atmaram D. C. at Rashtrotthana Hospital."
    },
    {
      ques : "What are the treatment options for a hernia?",
      ans : `
        <p>Hernias are primarily treated through surgery. At Rashtrotthana Hospital, options include:</p>
        <ul>
          <li><b>Laparoscopic Hernia Surgery: </b>A minimally invasive procedure performed by specialists like Dr. Nishanth Lakshmikanth for faster recovery and less discomfort.</li>
          <li><b>Open Hernia Surgery: </b>deal for larger or complex hernias.</li>
          <li><b>Non-Surgical Management: </b>Lifestyle modifications for mild cases to manage symptoms temporarily.</li>
        </ul>
      `
    },
    {
      ques : "Can a hernia be treated without surgery?",
      ans : "While small, asymptomatic hernias can sometimes be managed without surgery, most hernias require surgical intervention for a permanent solution. For a personalized treatment plan, you can consult hernia experts like Dr. Atmaram D. C. at Rashtrotthana Hospital."
    },
    {
      ques : "How long does it take to recover from hernia surgery?",
      ans : `
        <p>Recovery depends on the type of procedure:</p>
        <ul>
          <li><b>Laparoscopic Surgery: </b>Patients usually return to normal activities within a week.</li>
          <li><b>Open Surgery: </b> Recovery may take longer, depending on the complexity of the hernia.</li>
        </ul>
        <p>With experienced care from specialists like Dr. Nishanth Lakshmikanth, recovery is smooth and supported by personalized follow-ups at Rashtrotthana Hospital.</p>
      `
    },
    {
      ques : "How much does hernia surgery cost in Bangalore?",
      ans : "The hernia repair surgery cost in Bangalore varies based on the type of procedure and complexity of the condition. Rashtrotthana Hospital offers affordable treatment options, with surgeries performed by experienced doctors like Dr. Atmaram D. C. and Dr. Nishanth Lakshmikanth."
    },
    {
      ques : "What types of hernias are treated at Rashtrotthana Hospital?",
      ans : `
        <p>The hospital specializes in treating all major types of hernias, including:</p>
        <ul>
          <li>Inguinal Hernias</li>
          <li>Umbilical Hernias</li>
          <li>Hiatal Hernias</li>
          <li>Femoral Hernias</li>
          <li>Incisional Hernias</li>
        </ul>
        <p>For expert diagnosis and treatment, you can consult doctors like Dr. Nishanth Lakshmikanth, known for their expertise in minimally invasive procedures.</p>
      `
    },
    {
      ques : "How do I book an appointment for hernia treatment?",
      ans : "Booking a consultation is easy. Visit the Rashtrotthana Hospital website or call directly to schedule an appointment with hernia specialists like Dr. Atmaram D. C. or Dr. Nishanth Lakshmikanth."
    },
  ]

  // doctors =[
  //   {
  //     image : '../../assets/yoga/Dr-Suvarnini-Konale.png',
  //     name : "Dr. Suvarnini Konale",
  //     section : "BAMS, M.D. (Ayurveda)",
  //     designation : "LIFESTYLE",
  //   }
  // ]

}
