import { Component, ViewChild, ElementRef } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { color } from 'html2canvas/dist/types/css/types/color';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  
  @ViewChild('nextContainer', { static: false }) nextContainer!: ElementRef; // Add ! here    
  
  scrollToNextContainer() {
    if (this.nextContainer) {
      this.nextContainer.nativeElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start' // Scroll to the top of the container
      });
    }
  }

  works : any = [
    {
      title : 'Commitment to Excellence:',
      description : 'We strive for the highest quality in patient care, continuously improving our services through innovation and education.',
      color: '#57078D'
    },
    {
      title : 'Collaborative Environment:',
      description : "Our multidisciplinary team works together to provide comprehensive care. We value each member's contribution and encourage open communication and collaboration.",
      color: '#0558BA'
    },
    {
      title : 'Career Growth and Development:',
      description : 'We support your professional growth through continuous learning opportunities, including workshops, certifications, and advanced training programs. Our mentorship programs help you reach your full potential.',
      color: '#FAB517'
    },
    {
      title : 'State-of-the-Art Facilities:',
      description : 'Our hospital is equipped with the latest medical technology and resources, providing an ideal environment for healthcare professionals to thrive and deliver outstanding patient care.',
      color: '#F04A06'
    },
    {
      title : 'Inclusive and Supportive Culture:',
      description : 'We are committed to fostering a diverse and inclusive workplace where every team member is valued and respected. We believe that a supportive work environment leads to better patient outcomes and job satisfaction.',
      color: '#560805'
    },
  ]

  careers:any = [
    {
      title : 'Nursing : ',
      description : "Join our dedicated nursing staff, providing compassionate care and making a difference in patient's lives every day."
    },
    {
      title : 'Physicians :',
      description : "Work alongside leading medical experts in a supportive environment, focused on delivering top-notch healthcare."
    },
    {
      title : 'Allied Health Professionals :',
      description : "Explore opportunities in fields such as radiology, laboratory services, physical therapy and more. Your expertise helps us provide comprehensive care to our patients."
    },
    {
      title : 'Administrative and Support Staff :',
      description : 'From human resources to finance, IT and facility management, our support staff plays a crucial role in the smooth operation of our hospital.'
    },
    {
      title : 'Volunteer Opportunities :',
      description : 'Give back to the community by volunteering your time and skills. Our volunteers are an integral part of our team, helping us enhance the patient experience.'
    },  
    {
      title : 'Employee Benefits :',
      description : "We offer a competitive benefits package designed to support your well-being and work-life balance, including"
    },
    {
      title : 'Health and Wellness :',
      description : "Comprehensive health insurance plans, wellness programs and access to our fitness center."
    },
    {
      title : 'Financial Security:',
      description : "Competitive salaries, retirement plans and financial planning resources."
    },
    {
      title : 'Work-Life Balance:',
      description : "Flexible scheduling, generous paid time off and employee assistance programs."
    },
    {
      title : "Professional Development:",
      description : "Tuition reimbursement, ongoing education and leadership development programs."
    },
    {
      title : "Recognition Programs:",
      description : "Celebrating our employees’ achievements and milestones through various recognition initiatives."
    }
  ]

}
