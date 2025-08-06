import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-speciality-carousel',
  templateUrl: './speciality-carousel.component.html',
  styleUrl: './speciality-carousel.component.css'
})
export class SpecialityCarouselComponent {
@ViewChild('carouselTrack', { static: true }) carouselTrack!: ElementRef;
  @ViewChild('carouselWrapper', { static: true }) carouselWrapper!: ElementRef;

  currentSlideIndex = 0;
  autoMoveInterval: any;
  moveDistance = 320; // pixels to move each time (300px + 20px margin)
  autoMoveDelay = 3000; // 3 seconds
  totalSlides = 6; // Number of original slides
  isTransitioning = false;

  slides = [
    {
      image: '../../assets/internal_medicine_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Internal Medicine Hospital in Bangalore',
      title: 'Internal medicine',
      slug: '/specialities/internal-medicine-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_general_surgery_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best General Surgery Hospital in Bangalore',
      title: 'General Surgery',
      slug: '/specialities/best-general-surgery-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_obstetrics_and_gynecologist_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Obstetrics and Gynecologist Hospital in Bangalore',
      title: 'Obstetrics & Gynecology',
      slug: '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_paediatric_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Paediatric Hospital in Bangalore',
      title: 'Paediatrics & Neonatology',
      slug: '/specialities/best-paediatric-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_nephrology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Nephrology Hospital in Bangalore',
      title: 'Nephrology',
      slug: '/specialities/best-nephrology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_urology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Urology Hospital in Bangalore',
      title: 'Urology',
      slug: '/specialities/best-urology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_orthopaedics_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Orthopaedics Hospital in Bangalore',
      title: 'Orthopedics',
      slug: '/specialities/best-orthopaedics-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_gastroenterology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Gastroenterology Hospital in Bangalore',
      title: 'Gastro Sciences',
      slug: '/specialities/best-gastroenterology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_cardiology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Cardiology Hospital in Bangalore',
      title: 'Cardiac sciences',
      slug: '/specialities/best-cardiology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_pulmonology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Pulmonology Hospital in Bangalore',
      title: 'Pulmonology',
      slug: '/specialities/best-pulmonology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_eye_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Eye Hospital in Bangalore',
      title: 'Ophthalmology',
      slug: '/specialities/best-eye-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_dental_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Dental Hospital in Bangalore',
      title: 'Dental Sciences',
      slug: '/specialities/best-dental-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_ent_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best ENT Hospital in Bangalore',
      title: 'ENT Specialty',
      slug: '/specialities/best-ent-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_neurology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Neurology Hospital in Bangalore',
      title: 'Neurosciences',
      slug: '/specialities/best-neurology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_endocrinology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Endocrinology Hospital in Bangalore',
      title: 'Endocrinology',
      slug: '/specialities/best-endocrinology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_pshychiatry_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Pshychiatry Hospital in Bangalore',
      title: 'Psychiatry',
      slug: '/specialities/best-pshychiatry-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_oncology_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Oncology Hospital in Bangalore',
      title: 'Oncology',
      slug: '/specialities/best-oncology-hospital-in-bangalore'
    },
    {
      image: '../../assets/best_anesthesiology_hospital_in_bengaluru.png',
      alt: 'Rashtrotthana Hospital | Best Anesthesiology Hospital in India',
      title: 'Anesthesiology',
      slug: '/specialities/best-anesthesiology-hospital-in-india'
    },
    {
      image: '../../assets/best_emergency_medicine_hospital_in_bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Emergency Medicine Hospital in Bangalore',
      title: 'Emergency Medicine',
      slug: '/specialities/best-emergency-medicine-hospital-in-bangalore'
    },
    {
      image: '../../assets/rheumatology-bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Rheumatology Hospital in Bangalore',
      title: 'Rheumatology',
      slug: '/specialities/rheumatology-hospital-bangalore'
    },
    {
      image: '../../assets/vascular-bangalore.png',
      alt: 'Rashtrotthana Hospital | Best Vascular Surgeries Hospital in Bangalore',
      title: 'Vascular Surgeries',
      slug: '/specialities/best-vascular-surgery-hospital-in-bangalore'
    }
  ];

  hoverBoxes = [
  { image: 'assets/internal_medicine_hospital_in_rrnagar.png' },
  { image: 'assets/best_general_surgery_hospital_in_rrnagar.png' },
  { image: 'assets/best_obstetrics_and_gynecologist_hospital_in_rrnagar.png' },
  { image: 'assets/best_paediatric_hospital_in_rrnagar.png' },
  { image: 'assets/best_nephrology_hospital_in_rrnagar.png' },
  { image: 'assets/best_urology_hospital_in_rrnagar.png' },
  { image: 'assets/best_orthopaedics_hospital_in_rrnagar.png' },
  { image: 'assets/best_gastroenterology_hospital_in_rrnagar.png' },
  { image: 'assets/best_cardiology_hospital_in_rrnagar.png' },
  { image: 'assets/best_pulmonology_hospital_in_rrnagar.png' },
  { image: 'assets/best_eye_hospital_in_rrnagar.png' },
  { image: 'assets/best_dental_hospital_in_rrnagar.png' },
  { image: 'assets/best_ent_hospital_in_rrnagar.png' },
  { image: 'assets/best_neurology_hospital_in_rrnagar.png' },
  { image: 'assets/best_endocrinology_hospital_in_rrnagar.png' },
  { image: 'assets/best_pshychiatry_hospital_in_rrnagar.png' },
  { image: 'assets/best_oncology_hospital_in_rrnagar.png' },
  { image: 'assets/best_anesthesiology_hospital_in_rrnagar.png' },
  { image: 'assets/best_emergency_medicine_hospital_in_rrnagar.png' },
  { image: 'assets/rheumatology-treatment.png' },
  { image: 'assets/best-vascular-surgery-hospital-in-bangalore.png' }
];

  ngOnInit() {
    this.totalSlides = this.slides.length;
    this.startAutoMove();
    this.updateResponsiveMoveDistance();
    this.setupResizeListener();
  }

  ngOnDestroy() {
    this.stopAutoMove();
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  startAutoMove() {
    this.autoMoveInterval = setInterval(() => {
      this.moveNext();
    }, this.autoMoveDelay);
  }

  stopAutoMove() {
    if (this.autoMoveInterval) {
      clearInterval(this.autoMoveInterval);
      this.autoMoveInterval = null;
    }
  }

  moveNext() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    const track = this.carouselTrack.nativeElement;
    
    this.currentSlideIndex++;
    let translateX = -(this.currentSlideIndex * this.moveDistance);
    
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${translateX}px)`;
    
    // If we've moved past the original slides, reset to first slide seamlessly
    if (this.currentSlideIndex >= this.totalSlides) {
      setTimeout(() => {
        track.style.transition = 'none';
        this.currentSlideIndex = 0;
        track.style.transform = 'translateX(0px)';
        setTimeout(() => {
          track.style.transition = 'transform 0.5s ease-in-out';
          this.isTransitioning = false;
        }, 50);
      }, 500);
    } else {
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  movePrevious() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    const track = this.carouselTrack.nativeElement;
    
    // If we're at the first slide, jump to the end seamlessly
    if (this.currentSlideIndex === 0) {
      track.style.transition = 'none';
      this.currentSlideIndex = this.totalSlides;
      track.style.transform = `translateX(${-(this.currentSlideIndex * this.moveDistance)}px)`;
      
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out';
        this.currentSlideIndex--;
        track.style.transform = `translateX(${-(this.currentSlideIndex * this.moveDistance)}px)`;
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }, 50);
    } else {
      this.currentSlideIndex--;
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(${-(this.currentSlideIndex * this.moveDistance)}px)`;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  goToSlide(index: number) {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    const track = this.carouselTrack.nativeElement;
    this.currentSlideIndex = index;
    
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-(this.currentSlideIndex * this.moveDistance)}px)`;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  updateResponsiveMoveDistance() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 480) {
      this.moveDistance = 210; // 200px + 10px margin
    } else if (screenWidth <= 768) {
      this.moveDistance = 265; // 250px + 15px margin
    } else {
      this.moveDistance = 320; // 300px + 20px margin
    }
  }

  setupResizeListener() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize() {
    this.updateResponsiveMoveDistance();
    // Reset position to prevent layout issues
    const track = this.carouselTrack.nativeElement;
    track.style.transition = 'none';
    track.style.transform = `translateX(${-(this.currentSlideIndex * this.moveDistance)}px)`;
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
    }, 50);
  }

  // Get active indicator index based on current slide (5 dots for 21 slides)
  getActiveIndicatorIndex(): number {
    return Math.floor(this.currentSlideIndex / 4);
  }

  // Pause auto-move on hover (optional enhancement)
  onMouseEnter() {
    this.stopAutoMove();
  }

  onMouseLeave() {
    this.startAutoMove();
  }

hoverIndex: number | null = null;

onHover(index: number) {
  this.hoverIndex = index;
}

onLeave() {
  this.hoverIndex = null;
}
}
