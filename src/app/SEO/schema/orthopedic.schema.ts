export const ORTHOPEDIC_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

{
  "@type": "MedicalService",
  "name": "Orthopedics Department",
  "url": "https://www.rashtrotthanahospital.com/specialities/best-orthopaedics-hospital-in-bangalore",
  "medicalSpecialty": "Orthopedic",
  "description": "Rashtrotthana Hospital offers advanced orthopedic care including joint replacement surgery, arthroscopy, fracture care and treatment for bone and joint disorders.",
  
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
    "Joint replacement surgery",
    "Total knee replacement surgery",
    "ACL reconstruction surgery",
    "Arthroscopy surgery",
    "Fracture treatment",
    "Sports injury treatment",
    "Spine surgery"
  ],

  "keywords": [
    "Best orthopedic hospital in Bangalore",
    "Orthopedic surgeon in Bangalore",
    "Joint replacement hospital in Bangalore",
    "Bone specialist hospital in Bangalore",
    "Orthopedic hospital in RR Nagar Bangalore"
  ]
},

{
  "@type": "MedicalProcedure",
  "name": "Total Knee Replacement Surgery",
  "procedureType": "Surgical",
  "bodyLocation": "Knee",
  "medicalSpecialty": "Orthopedic"
},

{
  "@type": "MedicalProcedure",
  "name": "ACL Reconstruction Surgery",
  "procedureType": "Surgical",
  "bodyLocation": "Knee",
  "medicalSpecialty": "Orthopedic"
},

{
  "@type": "Physician",
  "name": "Dr. Mahesh Kulkarni",
  "medicalSpecialty": "Orthopedic Surgery",
  "url": "https://www.rashtrotthanahospital.com/doctor/dr-mahesh-kulkarni",
  "yearsOfExperience": "16"
},

{
  "@type": "Physician",
  "name": "Dr. Sujayendra D. M",
  "medicalSpecialty": "Orthopedic Surgery",
  "url": "https://www.rashtrotthanahospital.com/doctor/dr-sujayendra-d-m",
  "yearsOfExperience": "13"
},

{
  "@type": "Physician",
  "name": "Dr. Nikhil Hegde",
  "medicalSpecialty": "Orthopedic Surgery",
  "url": "https://www.rashtrotthanahospital.com/doctor/dr-nikhil-hegde",
  "yearsOfExperience": "8"
},

{
  "@type": "Physician",
  "name": "Dr. Sandeep K. M",
  "medicalSpecialty": "Orthopedic Surgery",
  "url": "https://www.rashtrotthanahospital.com/doctor/dr-sandeep-k-m",
  "yearsOfExperience": "13"
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
     "name": "Best Orthopaedics Hospital in Bangalore",
     "item": "https://www.rashtrotthanahospital.com/specialities/best-orthopaedics-hospital-in-bangalore"
   }
 ]
},

{
  "@type": "FAQPage",
  "mainEntity": [

{
"@type":"Question",
"name":"What services does the orthopedic department offer?",
"acceptedAnswer":{
"@type":"Answer",
"text":"The orthopedic department offers joint replacement surgery, minimally invasive spine surgery, arthroscopy, fracture care and treatment for musculoskeletal conditions."
}
},

{
"@type":"Question",
"name":"Who are the orthopedic specialists at Rashtrotthana Hospital?",
"acceptedAnswer":{
"@type":"Answer",
"text":"The orthopedic team includes experienced surgeons such as Dr. Mahesh Kulkarni, Dr. Sujayendra D. M, Dr. Nikhil Hegde and Dr. Sandeep K. M."
}
},

{
"@type":"Question",
"name":"What conditions do orthopedic specialists treat?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Orthopedic specialists diagnose and treat fractures, arthritis, sports injuries, bone infections, joint disorders and spine conditions."
}
},

{
"@type":"Question",
"name":"What surgeries are performed by orthopedic surgeons?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Orthopedic surgeons perform procedures such as total knee replacement, ACL reconstruction, arthroscopy and fracture repair surgeries."
}
},

{
"@type":"Question",
"name":"How can I consult an orthopedic doctor?",
"acceptedAnswer":{
"@type":"Answer",
"text":"You can consult orthopedic specialists at Rashtrotthana Hospital in RR Nagar for diagnosis and treatment of bone and joint conditions."
}
}

  ]
}

]
};