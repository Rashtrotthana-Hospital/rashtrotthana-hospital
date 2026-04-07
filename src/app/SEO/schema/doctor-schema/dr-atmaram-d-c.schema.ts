export const DR_ATMARAM_DC_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Atmaram D. C',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-atmaram-d-c',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Atmaram-D-C.png',
      medicalSpecialty: 'General Surgery',
      description:
        'Dr. Atmaram D. C is a highly experienced general surgeon with over 20 years of expertise in laparoscopic surgery, gastroenterology, proctology and surgical oncology. He specializes in minimally invasive procedures that enable faster recovery and improved patient outcomes.',

      hasCredential: ['MBBS', 'MS (General Surgery)'],

      yearsOfExperience: '20',

      knowsAbout: [
        'Laparoscopic Surgery',
        'Minimally Invasive Surgery',
        'Gastroenterology Surgery',
        'Proctology',
        'Oncology Surgery',
        'Gallbladder Surgery',
        'Hernia Surgery',
        'Piles Treatment',
        'Digestive System Disorders',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'MS Ramaiah Medical College, Bangalore',
      },

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
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
          name: 'Dr. Atmaram D. C',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-atmaram-d-c',
        },
      ],
    },
  ],
};
