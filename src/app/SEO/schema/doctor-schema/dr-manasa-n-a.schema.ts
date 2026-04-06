export const DR_MANASA_NA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Manasa N. A',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-n-a',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Manasa-N-A.png',
      medicalSpecialty: 'Otolaryngology',
      description:
        'Dr. Manasa N. A is an experienced ENT and Head & Neck surgeon with over 16 years of expertise in diagnosing and treating ear, nose, throat and head and neck conditions including sinus disorders, hearing problems and airway surgeries.',

      hasCredential: ['MBBS', 'DLO', 'DNB (ENT)'],

      yearsOfExperience: '16',

      knowsAbout: [
        'Micro Ear Surgery',
        'Hearing Restoration Surgery',
        'Septoplasty',
        'Endoscopic Sinus Surgery',
        'Voice Disorder Treatment',
        'Head and Neck Tumor Surgery',
        'Tracheotomy and Airway Surgery',
        'Snoring and Sleep Apnea Treatment',
        'Tonsillectomy Surgery',
        'Adenoidectomy Surgery',
        'Myringotomy',
        'ENT Disorders',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'M.S. Ramaiah Medical College',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'JJM Medical College, Davangere',
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
          name: 'Dr. Manasa N. A',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-n-a',
        },
      ],
    },
  ],
};
