export const DR_HARSHITH_KS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-harshith-k-s#doctor',
      name: 'Dr. Harshith K. S',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-harshith-k-s',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Harshith-K-S.png',

      jobTitle: 'Consultant Physician',
      medicalSpecialty: 'Internal Medicine',

      description:
        'Dr. Harshith K. S is a consultant physician specializing in internal medicine with over 20 years of experience in diagnosing and managing adult medical conditions, including diabetes care and chronic disease management.',

      hasCredential: ['MBBS', 'MD General Medicine'],

      yearsOfExperience: '20',

      knowsAbout: [
        'Internal Medicine',
        'Diabetes Care',
        'Diabetic Foot Risk Assessment',
        'Chronic Disease Management',
        'Adult Medical Care',
        'Vaccination and Immunization',
        'Marfan Syndrome',
        'Hyperhidrosis',
        'Capsule Endoscopy',
        'Hemochromatosis',
        'Toxic Hepatitis',
      ],

      worksFor: {
        '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      },

      availableAtOrFrom: {
        '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      },
    },

    {
      '@type': 'Hospital',
      '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      name: 'Rashtrotthanahospital',
      url: 'https://www.rashtrotthanahospital.com',
      telephone: '+91-80-69239999',

      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rajarajeshwari Nagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'India',
      },
    },

    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-harshith-k-s#breadcrumb',
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
          name: 'Doctors',
          item: 'https://www.rashtrotthanahospital.com/best-doctors-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Dr. Harshith K. S',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-harshith-k-s',
        },
      ],
    },
  ],
};
