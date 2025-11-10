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
    // '../../assets/healthy-feet.jpeg',
    // '../../assets/old-people.jpeg',
    // '../../assets/popup3.jpeg',
    // '../../assets/popup4.jpeg'
    '../../assets/nabh-website-popup.jpeg'
  ];
  currentImage = '';


  constructor(private router: Router) {}

  ngOnInit(): void {
    sessionStorage.clear(); // resets popup memory on refresh
    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide popup for career page
        if (event.urlAfterRedirects.includes('/career')) {
          this.showPopup = false;
          return;
        }

        // Pick a new image if available
        this.selectNewImage();
      });

    // Initial image
    this.selectNewImage();
  }

  selectNewImage(): void {
    const shownImages = JSON.parse(sessionStorage.getItem('shownImages') || '[]');
    const availableImages = this.imageList.filter(img => !shownImages.includes(img));

    // If all images have been shown, stop showing popups
    if (availableImages.length === 0) {
      this.showPopup = false;
      return;
    }

    // Pick a random one that’s not the same as the last shown
    const lastImage = sessionStorage.getItem('lastImage');
    let newImage = availableImages[Math.floor(Math.random() * availableImages.length)];

    // Avoid showing the same as last time
    while (newImage === lastImage && availableImages.length > 1) {
      newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    }

    this.currentImage = newImage;
    sessionStorage.setItem('lastImage', this.currentImage);
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;

    // Remember this image as "already shown"
    const shownImages = JSON.parse(sessionStorage.getItem('shownImages') || '[]');
    if (!shownImages.includes(this.currentImage)) {
      shownImages.push(this.currentImage);
      sessionStorage.setItem('shownImages', JSON.stringify(shownImages));
    }
  }
}
