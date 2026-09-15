import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-popup-image',
  templateUrl: './popup-image.component.html',
  styleUrl: './popup-image.component.css'
})
export class PopupImageComponent {
  showPopup: boolean = true;
  imageList: string[] = [
    'assets/pop-up/Integrated-diabetic.png',
    'assets/pop-up/Ayurveda camp at rashtrotthana hospital in september 2026.png',
    'assets/pop-up/Ayurveda Cosmetology Clinic at Rashtrotthana hospital bangalore.png',
    'assets/pop-up/Evening OPD now available at Rashtrotthana Hospital RRNagar bangalore.png',
    'assets/pop-up/JMRH _ Health Check Package.png'
  ];
  currentImage = '';

  private midnightTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(private router: Router) { }

  // ngOnInit(): void {
  //   sessionStorage.clear(); // resets popup memory on refresh
  //   // Subscribe to route changes
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: any) => {
  //       // Hide popup for career page
  //       if (event.urlAfterRedirects.includes('/career')) {
  //         this.showPopup = false;
  //         return;
  //       }

  //       // Pick a new image if available
  //       this.selectNewImage();
  //     });

  //   // Initial image
  //   this.selectNewImage();
  // }

  // selectNewImage(): void {
  //   const shownImages = JSON.parse(sessionStorage.getItem('shownImages') || '[]');
  //   const availableImages = this.imageList.filter(img => !shownImages.includes(img));

  //   // If all images have been shown, stop showing popups
  //   if (availableImages.length === 0) {
  //     this.showPopup = false;
  //     return;
  //   }

  //   // Pick a random one that’s not the same as the last shown
  //   const lastImage = sessionStorage.getItem('lastImage');
  //   let newImage = availableImages[Math.floor(Math.random() * availableImages.length)];

  //   // Avoid showing the same as last time
  //   while (newImage === lastImage && availableImages.length > 1) {
  //     newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
  //   }

  //   this.currentImage = newImage;
  //   sessionStorage.setItem('lastImage', this.currentImage);
  //   this.showPopup = true;
  // }

  ngOnInit(): void {

    // Initial popup
    if (!this.router.url.includes('/career')) {
      this.selectNewImage();
    } else {
      this.showPopup = false;
    }

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        if (event.urlAfterRedirects.includes('/career')) {
          this.showPopup = false;
        }

      });

    // Schedule next day's popup
    this.scheduleMidnightChange();
  }

  selectNewImage(): void {

    const today = new Date();

    const startDate = new Date(2026, 8, 15);

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const differenceInTime =
      today.getTime() - startDate.getTime();

    const differenceInDays =
      Math.floor(
        differenceInTime / (1000 * 60 * 60 * 24)
      );

    // Don't show popup before 15 September 2026
    if (differenceInDays < 0) {
      this.showPopup = false;
      return;
    }

    const imageIndex =
      differenceInDays % this.imageList.length;

    this.currentImage =
      this.imageList[imageIndex];

    this.showPopup = true;
  }

  scheduleMidnightChange(): void {

    const now = new Date();

    // Create tomorrow's date
    const tomorrow = new Date(now);

    tomorrow.setDate(now.getDate() + 1);

    // Set tomorrow to exactly 12:00 AM
    tomorrow.setHours(0, 0, 0, 0);

    // Calculate time until midnight
    const timeUntilMidnight =
      tomorrow.getTime() - now.getTime();

    this.midnightTimer = setTimeout(() => {

      // Check current route
      if (!this.router.url.includes('/career')) {

        // Show the new day's poster
        this.selectNewImage();

      } else {

        // Make sure popup stays hidden on career page
        this.showPopup = false;

      }

      // Schedule the next midnight
      this.scheduleMidnightChange();

    }, timeUntilMidnight);
  }

  ngOnDestroy(): void {

    if (this.midnightTimer) {
      clearTimeout(this.midnightTimer);
    }

  }

  closePopup(): void {
    this.showPopup = false;

    // Remember this image as "already shown"
    // const shownImages = JSON.parse(sessionStorage.getItem('shownImages') || '[]');
    // if (!shownImages.includes(this.currentImage)) {
    //   shownImages.push(this.currentImage);
    //   sessionStorage.setItem('shownImages', JSON.stringify(shownImages));
    // }
  }
}
