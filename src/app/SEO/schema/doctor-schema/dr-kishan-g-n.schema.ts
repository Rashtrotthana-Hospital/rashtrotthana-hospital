export const DR_KISHAN_GN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-kishan-g-n#doctor',
      name: 'Dr. Kishan G. N',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-kishan-g-n',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-kishan-g-n-doc-page.png',

      jobTitle: 'Ayurveda Consultant',
      medicalSpecialty: 'Ayurveda',

      description:
        'Dr. Kishan G. N is an experienced Ayurvedic physician specializing in Panchakarma therapies and holistic healthcare, with expertise in managing chronic diseases, lifestyle disorders and musculoskeletal conditions using traditional Ayurvedic treatments.',

      hasCredential: ['BAMS', 'CCPT', 'PGCPK'],

      yearsOfExperience: '15',

      knowsAbout: [
        'Ayurveda',
        'Panchakarma Therapy',
        'Detoxification and Rejuvenation Treatments',
        'Ayurvedic Medicine',
        'Lifestyle Disorder Management',
        'Musculoskeletal Disorders',
        'Autoimmune Disorders',
        'Gastrointestinal Disorders',
        'Uttarabasti Therapy',
        'Vasti Karma',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-kishan-g-n#breadcrumb',
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
          name: 'Dr. Kishan G. N',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-kishan-g-n',
        },
      ],
    },
  ],
};
