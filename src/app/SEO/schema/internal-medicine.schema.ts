export const INTERNAL_MEDICINE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Internal Medicine Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/internal-medicine-hospital-in-bangalore',
      medicalSpecialty: 'Internal Medicine',
      description:
        'Rashtrotthana Hospital provides comprehensive internal medicine care including diagnosis and treatment for diabetes, infections, fever, respiratory illnesses and chronic diseases.',

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
        'Diabetes treatment',
        'Fever treatment',
        'Cold and flu treatment',
        'Chronic disease management',
        'Preventive health checkups',
        'Family medicine consultation',
      ],

      keywords: [
        'Best internal medicine hospital in Bangalore',
        'Best general physician in Bangalore',
        'Internal medicine specialist in Bangalore',
        'Family physician in Bangalore',
        'General medicine hospital in RR Nagar Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. H. M. Krishnamurthy',
      medicalSpecialty: 'Internal Medicine',
      yearsOfExperience: '37',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. C Rajendran',
      medicalSpecialty: 'Internal Medicine',
      yearsOfExperience: '29',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Shruti Suresh',
      medicalSpecialty: 'Internal Medicine',
      yearsOfExperience: '20',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Harshith K. S',
      medicalSpecialty: 'Internal Medicine',
      yearsOfExperience: '20',
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
          name: 'Internal Medicine Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/internal-medicine-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who are the best physicians at Rashtrotthana Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital has experienced internal medicine specialists including Dr. H. M. Krishnamurthy and Dr. C. Rajendran who provide comprehensive care for various health conditions.',
          },
        },

        {
          '@type': 'Question',
          name: 'Which is the best internal medicine hospital in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital is known for providing advanced internal medicine care including accurate diagnosis and personalized treatment for both acute and chronic conditions.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can I consult a family health specialist at Rashtrotthana Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, experienced general physicians at Rashtrotthana Hospital provide family health consultations and manage common illnesses, chronic diseases and preventive healthcare.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best doctor for diabetes treatment in RR Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Internal medicine specialists at Rashtrotthana Hospital provide comprehensive diabetes care focusing on effective disease management and long term wellness.',
          },
        },

        {
          '@type': 'Question',
          name: 'Which hospital is best for fever, cold and flu treatment in RR Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides expert treatment for fever, cold, flu and viral infections with experienced general physicians and advanced diagnostic facilities.',
          },
        },
      ],
    },
  ],
};
