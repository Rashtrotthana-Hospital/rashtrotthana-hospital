export const DR_SHAMANTHA_S_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Shamantha S',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-shamantha-s',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Shamantha-S.png',
      medicalSpecialty: 'Lifestyle Medicine',
      description:
        'Dr. Shamantha S is a lifestyle medicine practitioner focusing on preventive healthcare, lifestyle disease management and holistic wellness using natural and integrative health approaches.',

      hasCredential: ['BAMS'],

      yearsOfExperience: '6',

      knowsAbout: [
        'Lifestyle Medicine',
        'Preventive Healthcare',
        'Holistic Wellness',
        'Lifestyle Disease Management',
        'Natural Health Therapies',
        'Diet and Lifestyle Counselling',
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
          name: 'Dr. Shamantha S',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-shamantha-s',
        },
      ],
    },
  ],
};
