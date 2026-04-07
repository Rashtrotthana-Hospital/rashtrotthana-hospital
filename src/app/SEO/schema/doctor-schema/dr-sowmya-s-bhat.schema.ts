export const DR_SOWMYA_BHAT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Sowmya S. Bhat',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sowmya-s-bhat',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Sowmya-Bhat-S.png',
      medicalSpecialty: 'Ophthalmology',
      description:
        'Dr. Sowmya S. Bhat is an experienced ophthalmologist with over 16 years of expertise in cataract surgery, refractive surgery and comprehensive eye care. She trained at the prestigious Aravind Eye Hospital, Madurai and specializes in advanced cataract and refractive procedures.',

      hasCredential: ['MBBS', 'DO', 'DNB', 'FPRS', 'FICO'],

      yearsOfExperience: '16',

      knowsAbout: [
        'Cataract Surgery',
        'Phacoemulsification',
        'MSICS Cataract Surgery',
        'Refractive Surgery',
        'LASIK Surgery',
        'PRK Surgery',
        'SMILE Eye Surgery',
        'General Ophthalmology',
        'Vision Correction Procedures',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'St. John’s Medical College, Bangalore',
        },
        {
          '@type': 'Hospital',
          name: 'Aravind Eye Hospital, Madurai',
        },
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },

      memberOf: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
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
          name: 'Doctors',
          item: 'https://www.rashtrotthanahospital.com/best-doctors-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Dr. Sowmya S. Bhat',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sowmya-s-bhat',
        },
      ],
    },
  ],
};
