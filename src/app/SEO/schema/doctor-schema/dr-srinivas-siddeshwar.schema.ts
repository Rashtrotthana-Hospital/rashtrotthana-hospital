export const DR_SRINIVAS_SIDDESHWAR_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-srinivas-siddeshwar#doctor',
      name: 'Dr. Srinivas Siddeshwar',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-srinivas-siddeshwar',
      image:
        'https://www.rashtrotthanahospital.com/assets/new-doctor-imgs/dr-srinivas-siddeshwar-doc-page.png',

      jobTitle: 'Emergency Medicine Specialist',
      medicalSpecialty: 'EmergencyMedicine',

      description:
        'Dr. Srinivas Siddeshwar is an emergency medicine specialist with over 8 years of experience in managing medical emergencies, trauma care and critical patient stabilization.',

      hasCredential: ['MBBS', 'Fellowship in Emergency Medicine'],

      yearsOfExperience: '8',

      knowsAbout: [
        'Emergency Medicine',
        'Critical Care',
        'Trauma Management',
        'Acute Medical Emergencies',
        'Cardiac Emergencies',
        'Emergency Patient Stabilization',
        'Emergency Department Care',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-srinivas-siddeshwar#breadcrumb',
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
          name: 'Dr. Srinivas Siddeshwar',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-srinivas-siddeshwar',
        },
      ],
    },
  ],
};
