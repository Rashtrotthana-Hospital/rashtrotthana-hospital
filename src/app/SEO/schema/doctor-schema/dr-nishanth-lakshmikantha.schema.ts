export const DR_NISHANTH_LAKSHMIKANTHA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Nishanth Lakshmikantha',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nishanth-lakshmikantha',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Nishanth-Lakshmikantha.png',
      medicalSpecialty: 'General Surgery',
      description:
        'Dr. Nishanth Lakshmikantha is an experienced general and gastrointestinal surgeon specializing in laparoscopic and robotic surgery. He has over 10 years of expertise in minimally invasive procedures and laser proctology treatments.',

      hasCredential: [
        'MBBS',
        'MS (General Surgery)',
        'FMAS',
        'FIAGES',
        'FARIS',
      ],

      yearsOfExperience: '10',

      knowsAbout: [
        'Laparoscopic Surgery',
        'Robotic Surgery',
        'Laser Proctology',
        'Gallbladder Surgery',
        'Hernia Surgery',
        'Piles Treatment',
        'Minimally Invasive Surgery',
        'Gastrointestinal Surgery',
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
        name: 'Rashtrotthana Hospital',
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
          name: 'Dr. Nishanth Lakshmikantha',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-nishanth-lakshmikantha',
        },
      ],
    },
  ],
};
