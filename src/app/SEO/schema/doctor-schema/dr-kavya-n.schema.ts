export const DR_KAVYA_N_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-kavya-n#doctor',
      name: 'Dr. Kavya N',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-kavya-n',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Kavya.png',

      jobTitle: 'Ayurveda Consultant',
      medicalSpecialty: 'Ayurveda',

      description:
        'Dr. Kavya N is an experienced Ayurveda physician specializing in metabolic disorders, gastrointestinal diseases, musculoskeletal conditions, skin diseases and women’s health using evidence-based Ayurvedic treatment approaches.',

      hasCredential: ['BAMS', 'MD (Ayurveda)', 'PhD'],

      yearsOfExperience: '17',

      knowsAbout: [
        'Ayurveda Medicine',
        'Metabolic Disorders',
        'Digestive Disorders',
        'Skin Diseases',
        'Arthritis Treatment',
        'Spine Disorders',
        'Gynecological Wellness',
        'Integrative Medicine',
        'Holistic Healthcare',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-kavya-n#breadcrumb',
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
          name: 'Dr. Kavya N',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-kavya-n',
        },
      ],
    },
  ],
};
