export const DR_G_V_GIRI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-g-v-giri#doctor',
      name: 'Dr. G. V. Giri',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-g-v-giri',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Giri.png',

      jobTitle: 'Medical Oncologist',
      medicalSpecialty: 'Oncology',

      description:
        'Dr. G. V. Giri is an experienced medical oncologist specializing in the diagnosis and treatment of various cancers including head and neck cancer, lung cancer, breast cancer and gastrointestinal cancers.',

      hasCredential: ['MBBS', 'MD Internal Medicine', 'DM Medical Oncology'],

      yearsOfExperience: '15',

      knowsAbout: [
        'Medical Oncology',
        'Head and Neck Cancer',
        'Lung Cancer',
        'Breast Cancer',
        'Gastrointestinal Cancer',
        'Genitourinary Cancer',
        'Cancer Chemotherapy',
        'Cancer Diagnosis and Treatment',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-g-v-giri#breadcrumb',
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
          name: 'Dr. G. V. Giri',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-g-v-giri',
        },
      ],
    },
  ],
};
