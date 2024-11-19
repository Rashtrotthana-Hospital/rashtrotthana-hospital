import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammsComponent } from './programms/programms.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { ArrowBtnComponent } from './components/arrow-btn/arrow-btn.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecalitiesComponent } from './specalities/specalities.component';
import { DonationComponent } from './donation/donation.component';
import { BoxCardComponent } from './components/box-card/box-card.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
import { FeaturesContentComponent } from './features-content/features-content.component';
import { EmergencyFacilityComponent } from './emergency-facility/emergency-facility.component';
import { OperationTheatreComponent } from './operation-theatre/operation-theatre.component';
import { IcuComponent } from './icu/icu.component';
import { AbulanceComponent } from './abulance/abulance.component';
import { DieteryComponent } from './dietery/dietery.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { InPatientComponent } from './in-patient/in-patient.component';
import { FacilityContentComponent } from './facility-content/facility-content.component';
import { RadiologyComponent } from './radiology/radiology.component';
import { EndoscopyComponent } from './endoscopy/endoscopy.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SpecialityComponentComponent } from './speciality-component/speciality-component.component';
import { GeneralMedicineComponent } from './general-medicine/general-medicine.component';
import { GeneralSurgeryComponent } from './general-surgery/general-surgery.component';
import { PaediatricsComponent } from './paediatrics/paediatrics.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { UrologyComponent } from './urology/urology.component';
import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
import { GastrosciencesComponent } from './gastrosciences/gastrosciences.component';
import { CardiacComponent } from './cardiac/cardiac.component';
import { PulmonologyComponent } from './pulmonology/pulmonology.component';
import { OphthalmologyComponent } from './ophthalmology/ophthalmology.component';
import { DentalComponent } from './dental/dental.component';
import { ENTComponent } from './ent/ent.component';
import { NeurosciencesComponent } from './neurosciences/neurosciences.component';
import { PsychiatryComponent } from './psychiatry/psychiatry.component';
import { OncologyComponent } from './oncology/oncology.component';
import { EmergencyMedicineComponent } from './emergency-medicine/emergency-medicine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModernMedicineComponent } from './modern-medicine/modern-medicine.component';
import { FacilityBulletContentComponent } from './facility-bullet-content/facility-bullet-content.component';
import { DialysisComponent } from './dialysis/dialysis.component';
import { AnesthesiologyComponent } from './anesthesiology/anesthesiology.component';


import { ObstetricsGynaecologyComponent } from './obstetrics-gynaecology/obstetrics-gynaecology.component';
import { EndocrinologyComponent } from './endocrinology/endocrinology.component';
import { InsurancePdfBoxComponent } from './insurance-pdf-box/insurance-pdf-box.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { KneeReplacementComponent } from './knee-replacement/knee-replacement.component';
import { YogaComponent } from './yoga/yoga.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { HomeopathyComponent } from './homeopathy/homeopathy.component';
import { NaturopathyComponent } from './naturopathy/naturopathy.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AyurvedhaDoctorsCarouselComponent } from './ayurvedha-doctors-carousel/ayurvedha-doctors-carousel.component';
import { AyurvedaCarouselComponent } from './ayurveda-carousel/ayurveda-carousel.component';
import { AppointFormComponent } from './appoint-form/appoint-form.component';
import { ReadMoreBtnComponent } from './read-more-btn/read-more-btn.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
// import { PopUpFormDonateComponent } from './pop-up-form-donate/pop-up-form-donate.component';
import { HerniaComponent } from './hernia/hernia.component';
import { ResearchComponent } from './research/research.component';
import { EthicCommitteeComponent } from './ethic-committee/ethic-committee.component';
// import { ResearchCarouselComponent } from './research-carousel/research-carousel.component';
// import { ProctologyComponent } from './proctology/proctology.component';

// import { GtagModule } from 'angular-gtag';
import { AdvisoryCarouselComponent } from './advisory-carousel/advisory-carousel.component';
import { AdvisoryBoardMembersComponent } from './advisory-board-members/advisory-board-members.component';
import { CommitteeCarouselComponent } from './committee-carousel/committee-carousel.component';
import { PopupFormDonationComponent } from './popup-form-donation/popup-form-donation.component';
import { PopupImageComponent } from './popup-image/popup-image.component';
import { MaternityComponent } from './maternity/maternity.component';
import { HttpClient } from '@angular/common/http';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammsComponent,
    TitleButtonComponent,
    ArrowBtnComponent,
    AboutUsComponent,
    SpecalitiesComponent,
    DonationComponent,
    BoxCardComponent,
    FacilitiesComponent,
    HealthCheckupComponent,
    ContactFormComponent,
    DoctorsComponent,
    DoctorLayoutComponent,
    FeaturesContentComponent,
    EmergencyFacilityComponent,
    OperationTheatreComponent,
    IcuComponent,
    AbulanceComponent,
    DieteryComponent,
    PhysiotherapyComponent,
    LaboratoryComponent,
    InPatientComponent,
    FacilityContentComponent,
    RadiologyComponent,
    EndoscopyComponent,
    NutritionComponent,
    PharmacyComponent,
    SpecialityComponentComponent,
    GeneralMedicineComponent,
    GeneralSurgeryComponent,
    PaediatricsComponent,
    NephrologyComponent,
    UrologyComponent,
    OrthopedicsComponent,
    GastrosciencesComponent,
    CardiacComponent,
    PulmonologyComponent,
    OphthalmologyComponent,
    DentalComponent,
    ENTComponent,
    NeurosciencesComponent,
    PsychiatryComponent,
    OncologyComponent,
    EmergencyMedicineComponent,
    ModernMedicineComponent,
    FacilityBulletContentComponent,
    DialysisComponent,
    AnesthesiologyComponent,
    ObstetricsGynaecologyComponent,
    EndocrinologyComponent,
    InsurancePdfBoxComponent,
    InsuranceComponent,
    KneeReplacementComponent,
    YogaComponent,
    AyurvedaComponent,
    HomeopathyComponent,
    NaturopathyComponent,
    DoctorDetailsComponent,
    AyurvedhaDoctorsCarouselComponent,
    AyurvedaCarouselComponent,
    AppointFormComponent,
    ReadMoreBtnComponent,
    DoctorAppointmentComponent,
    BlogComponent,
    BlogPostComponent,
    AdvisoryCarouselComponent,
    AdvisoryBoardMembersComponent,
    CommitteeCarouselComponent,
    PopupFormDonationComponent,
    // PopUpFormDonateComponent,
    HerniaComponent,
    ResearchComponent,
    EthicCommitteeComponent,
    PopupImageComponent,
    MaternityComponent,
    ChatbotComponent,
    // ResearchCarouselComponent,
    // ProctologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule,
    NgbModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CascadeSelectModule,
    CalendarModule,
    InfiniteScrollModule,
  

  ],
  providers: [
    MessageService,
    ContactFormService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
