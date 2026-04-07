export const NEPHROLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

{
  "@type": "MedicalService",
  "name": "Nephrology Department",
  "url": "https://www.rashtrotthanahospital.com/specialities/best-nephrology-hospital-in-bangalore",
  "medicalSpecialty": "Nephrology",
  "description": "Rashtrotthana Hospital provides advanced nephrology care including kidney disease treatment, dialysis services, kidney failure management and transplant consultation.",
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
    "Kidney disease treatment",
    "Kidney failure treatment",
    "Hemodialysis",
    "Peritoneal dialysis",
    "Kidney transplant consultation",
    "Kidney stone treatment",
    "Chronic kidney disease management"
  ],

  "keywords": [
    "Best nephrology hospital in Bangalore",
    "Best nephrologist in RR Nagar Bangalore",
    "Kidney specialist in Bangalore",
    "Dialysis hospital in Bangalore",
    "Kidney failure treatment Bangalore"
  ]
},

{
  "@type": "Physician",
  "name": "Dr. Nithin J",
  "medicalSpecialty": "Nephrology",
  "yearsOfExperience": "15",
  "affiliation": {
    "@type": "Hospital",
    "name": "Rashtrotthana Hospital"
  }
},

{
  "@type": "Physician",
  "name": "Dr. Limesh M",
  "medicalSpecialty": "Nephrology",
  "yearsOfExperience": "16",
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
     "name": "Best Nephrology Hospital in Bangalore",
     "item": "https://www.rashtrotthanahospital.com/specialities/best-nephrology-hospital-in-bangalore"
   }
 ]
},

{
  "@type": "FAQPage",
  "mainEntity": [

{
"@type":"Question",
"name":"Who is the best nephrologist in RR Nagar Bangalore?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Dr. Santhosh S is an experienced nephrologist at Rashtrotthana Hospital with expertise in treating kidney disease, kidney failure, kidney stones and kidney transplant related conditions."
}
},

{
"@type":"Question",
"name":"What are the common symptoms of kidney disease?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Common symptoms include swelling in the legs, stomach pain, changes in urination, high blood pressure, fatigue, recurrent kidney infections and blood in the urine."
}
},

{
"@type":"Question",
"name":"Where can I get dialysis treatment in RR Nagar Bangalore?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Rashtrotthana Hospital offers dialysis treatment with an advanced dialysis unit and experienced nephrologists providing safe kidney care."
}
},

{
"@type":"Question",
"name":"Can kidney failure be treated?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Kidney failure can be treated with dialysis, kidney transplant or medications to manage the condition and slow disease progression."
}
},

{
"@type":"Question",
"name":"What is the best hospital for nephrology in Bangalore?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Rashtrotthana Hospital is known for providing advanced nephrology care including treatment for kidney disease, renal failure and dialysis."
}
},

{
"@type":"Question",
"name":"How can kidney disease be prevented?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Kidney disease can be prevented by staying hydrated, maintaining a balanced diet, controlling blood pressure and diabetes and avoiding excessive use of painkillers."
}
},

{
"@type":"Question",
"name":"Where can I get affordable kidney failure treatment in Bangalore?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Rashtrotthana Hospital offers affordable kidney failure treatment with experienced nephrologists and advanced dialysis facilities."
}
}

  ]
}

]
};