export const DR_SUSHMA_A_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-sushma-a#doctor',
      name: 'Dr. Sushma A',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sushma-a',
      image:
        'https://www.rashtrotthanahospital.com/assets/new-doctor-imgs/dr-sushma-doc-page.png',

      jobTitle: 'Ophthalmologist & Oculoplasty Specialist',
      medicalSpecialty: 'Ophthalmology',

      description:
        'Dr. Sushma A is an ophthalmologist and oculoplasty specialist with over 12 years of experience in managing eyelid disorders, orbital diseases, thyroid eye disease and lacrimal system conditions.',

      hasCredential: [
        'MBBS',
        'MS Ophthalmology',
        'FGEI',
        'FAICO (Oculoplasty)',
      ],

      yearsOfExperience: '12',

      knowsAbout: [
        'Ophthalmology',
        'Oculoplasty Surgery',
        'Eyelid Disorders',
        'Orbital Diseases',
        'Thyroid Eye Disease',
        'Lacrimal Surgery',
        'Facial Aesthetic Procedures',
        'Eye and Vision Disorders',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-sushma-a#breadcrumb',
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
          name: 'Dr. Sushma A',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sushma-a',
        },
      ],
    },
  ],
};
