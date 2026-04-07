export const DR_SUSHMITHA_RAJ_R_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-sushmitha-raj-r#doctor',
      name: 'Dr. Sushmitha Raj R',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sushmitha-raj-r',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Sushmitha-Raj-R.png',

      jobTitle: 'Dental Surgeon',
      medicalSpecialty: 'Dentistry',

      description:
        'Dr. Sushmitha Raj R is a skilled dental surgeon with over 7 years of experience in general dentistry, restorative procedures and minor oral surgeries, providing comprehensive dental care with a strong focus on patient comfort.',

      hasCredential: ['BDS', 'FRCD'],

      yearsOfExperience: '7',

      knowsAbout: [
        'General Dentistry',
        'Endodontics',
        'Cosmetic Dentistry',
        'Restorative Dentistry',
        'Dental Extractions',
        'Dental Diagnostics',
        'Preventive Dental Care',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-sushmitha-raj-r#breadcrumb',
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
          name: 'Dr. Sushmitha Raj R',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sushmitha-raj-r',
        },
      ],
    },
  ],
};
