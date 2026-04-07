export const DR_ANAND_SHANKAR_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Col (Dr) Anand Shankar K',
      url: 'https://www.rashtrotthanahospital.com/doctor/col-dr-anand-shankar-k',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Anand-Shankar.png',
      medicalSpecialty: [
        'Anesthesiology',
        'Emergency Medicine',
        'Critical Care Medicine',
      ],
      description:
        'Col (Dr) Anand Shankar K is a senior anesthesiologist and intensive care specialist with over 32 years of experience. An alumnus of Armed Forces Medical College Pune, he served in the Indian Armed Forces and international missions with the United Nations before joining Rashtrotthana Hospital.',

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Armed Forces Medical College Pune',
      },

      memberOf: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
      },

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

      knowsAbout: [
        'Anaesthesiology',
        'Emergency Medicine',
        'Critical Care',
        'Labour Analgesia',
        'Pain Medicine',
        'Intensive Care Medicine',
      ],

      hasCredential: [
        'MBBS',
        'MD Anaesthesiology',
        'EDIC (European Diploma in Intensive Care Medicine)',
      ],

      yearsOfExperience: '32',

      availableService: [
        'Anaesthesia consultation',
        'Critical care treatment',
        'Emergency medicine care',
        'Pain management',
      ],
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
          name: 'Dr. Anand Shankar K',
          item: 'https://www.rashtrotthanahospital.com/doctor/col-dr-anand-shankar-k',
        },
      ],
    },
  ],
};
