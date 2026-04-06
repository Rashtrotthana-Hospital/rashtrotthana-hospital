export const DR_JAIDEV_S_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Jaidev S',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-jaidev-s',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Jaidev-S.png',
      medicalSpecialty: 'Neurosurgery',
      description:
        'Dr. Jaidev S is a neurosurgeon with expertise in brain and spine surgery, stroke management and endovascular interventions. He specializes in diagnosing and treating neurological disorders including spine conditions, neuropathy and brain diseases.',

      hasCredential: ['MBBS', 'MS (General Surgery)', 'MCh (Neurosurgery)'],

      yearsOfExperience: '7',

      knowsAbout: [
        'Brain Surgery',
        'Spine Surgery',
        'Stroke Treatment',
        'Neck Pain Treatment',
        'Back Pain Treatment',
        'Neuropathy Management',
        'Endovascular Neurosurgery',
        'Brain Tumor Surgery',
        'Spinal Disorders',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'AIIMS Bhubaneswar',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: "King George's Medical University, Lucknow",
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
          name: 'Dr. Jaidev S',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-jaidev-s',
        },
      ],
    },
  ],
};
