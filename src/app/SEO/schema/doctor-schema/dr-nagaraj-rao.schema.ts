export const DR_NAGARAJ_RAO_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Nagaraj Rao',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nagaraj-rao',
      image: 'https://www.rashtrotthanahospital.com/assets/doctor-31.png',
      medicalSpecialty: 'Urology',
      description:
        'Dr. Nagaraj Rao is a senior urologist with over 27 years of experience in diagnosing and treating complex urological conditions including kidney stones, urological cancers, and reconstructive urology.',

      hasCredential: ['MBBS', 'MS', 'MCh Urology'],

      yearsOfExperience: '27',

      knowsAbout: [
        'Endourology',
        'Uro Oncology',
        'Kidney Stone Disease',
        'Genito-Urinary Reconstruction',
        'Minimally Invasive Urological Surgery',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh',
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
          name: 'Dr. Nagaraj Rao',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-nagaraj-rao',
        },
      ],
    },
  ],
};
