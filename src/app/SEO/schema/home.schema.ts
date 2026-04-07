export const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

{
  "@type": "Hospital",
  "@id": "https://www.rashtrotthanahospital.com/#hospital",
  "name": "Rashtrotthana Hospital",
  "url": "https://www.rashtrotthanahospital.com/",
  "logo": "https://www.rashtrotthanahospital.com/assets/logo.png",
  "image": "https://www.rashtrotthanahospital.com/assets/logo.png",
  "description": "Rashtrotthana Hospital is a multi-speciality hospital in RR Nagar, Bangalore offering advanced medical care across orthopedics, cardiology, urology, gynecology, neurology and other specialties.",
  "telephone": "+91-8071500500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "RR Nagar",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560098",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "medicalSpecialty": [
    "Orthopedics",
    "Cardiology",
    "Urology",
    "Nephrology",
    "Pulmonology",
    "ENT",
    "Obstetrics and Gynaecology",
    "Neurology",
    "Neurosurgery",
    "General Surgery",
    "Dermatology",
    "Ophthalmology",
    "Pediatrics",
    "Radiology",
    "Emergency Medicine"
  ],
  "openingHours": "Mo-Su 00:00-23:59",
  "sameAs": [
    "https://www.facebook.com/rashtrotthanahospital",
    "https://www.instagram.com/rashtrotthanahospital"
  ]
},

{
  "@type": "MedicalOrganization",
  "name": "Rashtrotthana Hospital",
  "url": "https://www.rashtrotthanahospital.com/",
  "logo": "https://www.rashtrotthanahospital.com/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8071500500",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Kannada", "Hindi"]
  }
},

{
  "@type": "WebSite",
  "@id": "https://www.rashtrotthanahospital.com/#website",
  "url": "https://www.rashtrotthanahospital.com/",
  "name": "Rashtrotthana Hospital",
  "publisher": {
    "@id": "https://www.rashtrotthanahospital.com/#hospital"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.rashtrotthanahospital.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

]
};