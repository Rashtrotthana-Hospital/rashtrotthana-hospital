export const CARDIOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Cardiology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-cardiology-hospital-in-bangalore',
      medicalSpecialty: 'Cardiology',
      description:
        'Rashtrotthana Hospital provides comprehensive cardiology care including heart disease diagnosis, preventive cardiology, cardiac evaluation and treatment for heart conditions.',

      provider: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        telephone: '080 6923 9999',
        email: 'info@rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },

      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },

      availableService: [
        'Heart disease diagnosis',
        'Cardiac health checkups',
        'ECG testing',
        '2D echocardiography',
        'Blood pressure monitoring',
        'Preventive cardiology consultation',
        'Heart failure management',
      ],

      keywords: [
        'Best cardiology hospital in Bangalore',
        'Best cardiologist in Bangalore',
        'Heart specialist in Bangalore',
        'Cardiac hospital in Bangalore',
        'Heart checkup hospital in Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Suhas Raj S',
      medicalSpecialty: 'Cardiology',
      yearsOfExperience: '10',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-suhas-raj-s',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.rashtrotthanahospital.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Specialities',
          item: 'https://www.rashtrotthanahospital.com/specialities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Best Cardiology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-cardiology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do heart problems increase during winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cold weather can cause blood vessels to constrict which increases blood pressure and makes the heart work harder, increasing the risk of heart attacks and other cardiac problems.',
          },
        },

        {
          '@type': 'Question',
          name: 'What are the warning signs of heart problems in winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common warning signs include chest tightness, breathlessness, fatigue, palpitations, pain radiating to the jaw or arm, dizziness and swelling in the legs or ankles.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is at higher risk for heart problems during winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'People above 35, individuals with diabetes, hypertension, obesity, respiratory diseases, smokers and those with a family history of heart disease are at higher risk.',
          },
        },

        {
          '@type': 'Question',
          name: 'What tests are included in a heart health checkup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Heart health evaluation may include ECG, echocardiogram, blood pressure monitoring and oxygen level measurement along with a cardiology consultation.',
          },
        },

        {
          '@type': 'Question',
          name: 'How can I protect my heart during winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stay warm, maintain regular exercise indoors, take medications on time, monitor blood pressure, follow a healthy diet and seek medical advice if symptoms occur.',
          },
        },

        {
          '@type': 'Question',
          name: 'When should I seek emergency care for heart symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Immediate medical attention is required if you experience severe chest pain, difficulty breathing, fainting, pain radiating to the arm or jaw or sudden irregular heartbeat.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can winter worsen existing heart conditions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, winter can worsen conditions such as coronary artery disease, hypertension, arrhythmias and heart failure due to increased strain on the heart.',
          },
        },

        {
          '@type': 'Question',
          name: 'What cardiac care services are available at Rashtrotthana Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hospital provides preventive cardiology consultations, cardiac diagnostic tests, emergency cardiac care and treatment for various heart diseases.',
          },
        },
      ],
    },
  ],
};
