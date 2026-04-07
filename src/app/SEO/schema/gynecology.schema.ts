export const GYNECOLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

{
  "@type": "MedicalService",
  "name": "Obstetrics and Gynecology Department",
  "url": "https://www.rashtrotthanahospital.com/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore",
  "medicalSpecialty": "Gynecology",
  "description": "Rashtrotthana Hospital offers advanced obstetrics and gynecology care including maternity services, hysterectomy, myomectomy, pregnancy care and women’s health treatments.",
  "provider": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital",
    "url": "https://www.rashtrotthanahospital.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "RR Nagar",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    }
  },

  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },

  "availableService": [
    "Maternity care",
    "Pregnancy care",
    "Hysterectomy surgery",
    "Myomectomy surgery",
    "Women health treatment",
    "Gynecological surgery"
  ],

  "keywords": [
    "Best gynecologist hospital in Bangalore",
    "Best obstetrics hospital in Bangalore",
    "Women health hospital in Bangalore",
    "Maternity hospital in Bangalore",
    "Gynecology hospital in RR Nagar Bangalore"
  ]
},

{
  "@type": "MedicalProcedure",
  "name": "Hysterectomy Surgery",
  "procedureType": "Surgical",
  "bodyLocation": "Uterus",
  "medicalSpecialty": "Gynecology"
},

{
  "@type": "MedicalProcedure",
  "name": "Myomectomy Surgery",
  "procedureType": "Surgical",
  "bodyLocation": "Uterus",
  "medicalSpecialty": "Gynecology"
},

{
  "@type": "MedicalProcedure",
  "name": "Maternity Care",
  "procedureType": "MedicalTherapy",
  "medicalSpecialty": "Obstetrics"
},

{
  "@type": "Physician",
  "name": "Dr. Latha Venkataram",
  "medicalSpecialty": "Gynecology",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
  "@type": "Physician",
  "name": "Dr. Prakruthi",
  "medicalSpecialty": "Gynecology",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
  "@type": "Physician",
  "name": "Dr. Neelam Saraswat",
  "medicalSpecialty": "Gynecology",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
  "@type": "Physician",
  "name": "Dr. Ashwitha Gundmi",
  "medicalSpecialty": "Gynecology",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
  "@type": "Physician",
  "name": "Dr. Vinita Udupa",
  "medicalSpecialty": "Gynecology",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
 "@type": "BreadcrumbList",
 "itemListElement": [
   {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://www.rashtrotthanahospital.com/"
   },
   {
     "@type": "ListItem",
     "position": 2,
     "name": "Specialities",
     "item": "https://www.rashtrotthanahospital.com/specialities"
   },
   {
     "@type": "ListItem",
     "position": 3,
     "name": "Best Obstetrics and Gynecologist Hospital in Bangalore",
     "item": "https://www.rashtrotthanahospital.com/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore"
   }
 ]
}

]
};