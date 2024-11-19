import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-popup-form-donation',
  templateUrl: './popup-form-donation.component.html',
  styleUrl: './popup-form-donation.component.css'
})
export class PopupFormDonationComponent {
  showPopup: boolean = true;
  user = {
    name: '',
    phone: '',
    email: '',
    amount: ''
  };

  constructor(private http: HttpClient) {}


  ngOnInit(): void {}

  // onSubmit() {
  //   console.log('User Details:', this.user);
  //   this.http.post('http://localhost:3000/donate', this.user).subscribe((response: any) => {
  //     console.log('Donation response:', response);
  //     this.showPopup = false; 
  //   });
  // }
  isSubmitting = false;

onSubmit() {
  if (this.isSubmitting) return; // Prevent double submission

  this.isSubmitting = true;
  this.http.post('http://localhost:3000/donate', this.user)
    .subscribe(response => {
      console.log('Donation response:', response);
      this.showPopup = false; // Close the popup after submission
      this.isSubmitting = false;
      this.generatePDF(); // Re-enable the button after submission
    }, error => {
      console.error('Error:', error);
      this.isSubmitting = false; // Re-enable the button in case of error
    });
}
generatePDF() {
  const doc = new jsPDF();
  const receiptContent = `
    <h2>Donation Receipt</h2>
    <p><strong>Name:</strong> ${this.user.name}</p>
    <p><strong>Phone:</strong> ${this.user.phone}</p>
    <p><strong>Email:</strong> ${this.user.email}</p>
    <p><strong>Amount:</strong> ${this.user.amount}</p>
  `;

  doc.text('Donation Receipt', 10, 10);
  doc.text(`Name: ${this.user.name}`, 10, 20);
  doc.text(`Phone: ${this.user.phone}`, 10, 30);
  doc.text(`Email: ${this.user.email}`, 10, 40);
  doc.text(`Amount: $${this.user.amount}`, 10, 50);

  doc.save('receipt.pdf');
}
  closePopup() {
    this.showPopup = false; // Close the popup when the close button is clicked
  }
}
