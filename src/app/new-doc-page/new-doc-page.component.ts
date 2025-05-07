import { Component } from '@angular/core';

@Component({
  selector: 'app-new-doc-page',
  templateUrl: './new-doc-page.component.html',
  styleUrl: './new-doc-page.component.css'
})
export class NewDocPageComponent {

  date : any
  minDate : any
  disabledDays : any

  onDateChange(event:any):any{

  }

  doctorDetails : any = [
    {
      name : "Dr.(Col)Anand Shankar",
      qualification : "MBBS,MD (ANAESTHESIOLOGY), EDIC",
      department : "ER HEAD, ICU, ANAESTHESIA",
      experience : "31",
      image : "../../assets/Dr-Col-Anand-Shankar-new.png",
      alt : "Best Anesthesiology Doctor RR Nagar Bangalore",
      briefProfile : `Col (Dr) Anand Shankar K is an alumnus of the prestigious Armed Forces Medical
                College, Pune. He served in field areas prior to pursuing postgraduation in the field of Anaesthesiology
                and Intensive Care at AFMC pune. Thereafter he qualified the European Diploma in Intensive Care
                Medicine. He has an overall experience of more than 31 years, 27 of those years serving with the Armed
                Forces. He has served within the country and in foreign missions with the United Nations. He also had
                the unique opportunity to serve as accompanying doctor to the President of India. He has been serving
                with Rashtrotthana Hospital since its inception in Dec 2022.`,
      areaOfExpertise1 : ['GI surgery', 'Lasers', 'Laproscopy', 'Onco Surgery', 'Lasers'],
      areaOfExpertise2 : ['GI surgery', 'Lasers', 'Laproscopy', 'Onco Surgery', 'Lasers'],
      metaTitle : "",
      metaDescription : ""
    }
  ]

  filterdDoctor : any = {
    name : "Dr.(Col)Anand Shankar",
    qualification : "MBBS,MD (ANAESTHESIOLOGY), EDIC",
    department : "ER HEAD, ICU, ANAESTHESIA",
    experience : "31",
    image : "../../assets/Dr-Col-Anand-Shankar-new.png",
    alt : "Best Anesthesiology Doctor RR Nagar Bangalore",
    briefProfile : `Col (Dr) Anand Shankar K is an alumnus of the prestigious Armed Forces Medical
              College, Pune. He served in field areas prior to pursuing postgraduation in the field of Anaesthesiology
              and Intensive Care at AFMC pune. Thereafter he qualified the European Diploma in Intensive Care
              Medicine. He has an overall experience of more than 31 years, 27 of those years serving with the Armed
              Forces. He has served within the country and in foreign missions with the United Nations. He also had
              the unique opportunity to serve as accompanying doctor to the President of India. He has been serving
              with Rashtrotthana Hospital since its inception in Dec 2022.`,
    areaOfExpertise1 : ['GI surgery', 'Lasers', 'Laproscopy', 'Onco Surgery', 'Lasers'],
    areaOfExpertise2 : ['GI surgery', 'Lasers', 'Laproscopy', 'Onco Surgery', 'Lasers'],
  }

}
