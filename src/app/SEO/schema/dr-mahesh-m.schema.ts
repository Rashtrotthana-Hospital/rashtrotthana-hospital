export const DR_MAHESH_M_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-m#doctor',
      name: 'Dr. Mahesh M',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-m',
      image:
        'https://www.rashtrotthanahospital.com/assets/new-doctor-imgs/dr-mahesh-m-doc-page.png',

      jobTitle: 'Senior Urologist',
      medicalSpecialty: 'Urology',

      description:
        'Dr. Mahesh M is a senior urologist with over 25 years of experience specializing in endourology, laparoscopic urology, laser prostate surgery, renal transplantation and urinary stone treatment.',

      hasCredential: [
        'MBBS',
        'MS General Surgery',
        'MCh Urology',
        'MRCS (Edinburgh)',
      ],

      yearsOfExperience: '25',

      knowsAbout: [
        'Urology',
        'Andrology',
        'Endourology',
        'Reconstructive Urology',
        'Uro-Oncology',
        'Female Urology',
        'Urinary Stone Treatment',
        'Endoscopic Stone Surgery',
        'Laser Prostate Surgery',
        'Laparoscopic Urology',
        'Renal Transplantation',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-m#breadcrumb',
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
          name: 'Dr. Mahesh M',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-m',
        },
      ],
    },
  ],
};
