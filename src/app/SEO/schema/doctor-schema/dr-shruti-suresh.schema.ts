export const DR_SHRUTI_SURESH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-shruti-suresh#doctor',
      name: 'Dr. Shruti Suresh',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-shruti-suresh',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-shruti-suresh-doc-page.jpg',

      jobTitle: 'Consultant Physician',
      medicalSpecialty: 'Internal Medicine',

      description:
        'Dr. Shruti Suresh is an experienced internal medicine specialist with expertise in diagnosing and treating communicable and non-communicable diseases, with special focus on diabetes management and chronic disease care.',

      hasCredential: ['MBBS', 'DNB Internal Medicine'],

      yearsOfExperience: '20',

      knowsAbout: [
        'Internal Medicine',
        'General Medicine',
        'Diabetes Mellitus',
        'Communicable Diseases',
        'Non Communicable Diseases',
        'Chronic Disease Management',
        'Preventive Healthcare',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-shruti-suresh#breadcrumb',
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
          name: 'Dr. Shruti Suresh',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-shruti-suresh',
        },
      ],
    },
  ],
};
