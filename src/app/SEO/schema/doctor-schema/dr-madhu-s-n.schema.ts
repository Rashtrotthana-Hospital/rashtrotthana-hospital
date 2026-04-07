export const DR_MADHU_SN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Madhu S. N',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-madhu-s-n',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Madhu-S-N.png',
      medicalSpecialty: 'Urology',
      description:
        'Dr. Madhu S. N is a highly experienced urologist and andrologist with more than 15 years of expertise in endourology, kidney stone treatment, reconstructive urology and uro-oncology.',

      hasCredential: ['MBBS', 'MS (General Surgery)', 'MCh (Urology)'],

      yearsOfExperience: '15',

      knowsAbout: [
        'Endourology',
        'Andrology',
        'Kidney Transplantation',
        'Reconstructive Urology',
        'Uro Oncology',
        'Laparoscopic Urology',
        'Urogynecology',
        'Pediatric Urology',
        'Kidney Stone Treatment',
        'Laser Kidney Stone Surgery',
        'Urinary Tract Disorders',
      ],

      alumniOf: {
        '@type': 'Hospital',
        name: "St. John's Medical College Hospital, Bangalore",
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
          name: 'Dr. Madhu S. N',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-madhu-s-n',
        },
      ],
    },
  ],
};
