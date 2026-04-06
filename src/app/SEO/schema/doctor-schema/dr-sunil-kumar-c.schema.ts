export const DR_SUNIL_KUMAR_C_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Sunil Kumar C',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sunil-kumar-c',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Sunil-Kumar-C.png',
      medicalSpecialty: 'Otolaryngology',
      description:
        'Dr. Sunil Kumar C is an experienced ENT and Head & Neck surgeon specializing in vertigo treatment, laser ENT surgery, thyroid procedures, endoscopic sinus surgery and microscopic ear surgery.',

      hasCredential: ['MS (ENT)', 'DHM', 'IFAAM'],

      yearsOfExperience: '14',

      knowsAbout: [
        'ENT Surgery',
        'Head and Neck Surgery',
        'Vertigo Treatment',
        'Endoscopic Sinus Surgery',
        'Microscopic Ear Surgery',
        'Laser ENT Surgery',
        'Thyroid Surgery',
        'Vocal Cord Surgery',
        'Emergency ENT Procedures',
        'Coablation Surgery',
        'Cosmetic ENT Surgery',
        'Facial Trauma Treatment',
        'Hair Transplantation',
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rajarajeshwari Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
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
          name: 'Dr. Sunil Kumar C',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sunil-kumar-c',
        },
      ],
    },
  ],
};
