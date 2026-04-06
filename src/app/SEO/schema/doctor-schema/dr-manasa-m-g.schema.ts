export const DR_MANASA_MG_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-manasa-m-g#doctor',
      name: 'Dr. Manasa M. G',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-m-g',
      image: 'https://www.rashtrotthanahospital.com/assets/dr-manasa-m-g.jpg',

      jobTitle: 'Consultant Endocrinologist',
      medicalSpecialty: 'Endocrinology',

      description:
        'Dr. Manasa M. G is an endocrinologist specializing in hormonal and metabolic disorders including diabetes, thyroid diseases, adrenal and pituitary disorders, bone metabolism and rare endocrine conditions.',

      hasCredential: ['MBBS', 'MD Internal Medicine', 'DM Endocrinology'],

      yearsOfExperience: '10',

      knowsAbout: [
        'Endocrinology',
        'Diabetes Management',
        'Thyroid Disorders',
        'Hormonal Hypertension',
        'Adrenal Disorders',
        'Pituitary Diseases',
        'Bone Metabolism',
        'Osteoporosis',
        'Rare Endocrine Syndromes',
        'Metabolic Disorders',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-manasa-m-g#breadcrumb',
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
          name: 'Dr. Manasa M. G',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-m-g',
        },
      ],
    },
  ],
};
