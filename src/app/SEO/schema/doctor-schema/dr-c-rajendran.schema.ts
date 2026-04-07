export const DR_C_RAJENDRAN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-c-rajendran#doctor',
      name: 'Dr. C Rajendran',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-c-rajendran',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Rajendran.png',

      jobTitle: 'Consultant Physician',
      medicalSpecialty: 'Internal Medicine',

      description:
        'Dr. C Rajendran is an experienced internal medicine specialist with over 29 years of experience in diagnosing and treating diabetes, infectious diseases, hypertension, asthma, COPD and other chronic medical conditions.',

      hasCredential: [
        'MBBS',
        'MD General Medicine',
        'Fellowship in Diabetology',
        'Fellowship in Infectious Diseases',
      ],

      yearsOfExperience: '29',

      knowsAbout: [
        'Internal Medicine',
        'Diabetes Management',
        'Infectious Diseases',
        'Hypertension Treatment',
        'Asthma Management',
        'COPD Treatment',
        'Thyroid Disorders',
        'Fever Management',
        'General Medical Care',
        'Chronic Disease Management',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-c-rajendran#breadcrumb',
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
          name: 'Dr. C Rajendran',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-c-rajendran',
        },
      ],
    },
  ],
};
