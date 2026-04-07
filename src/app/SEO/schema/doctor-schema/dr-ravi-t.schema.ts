export const DR_RAVI_T_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Ravi T',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-ravi-t',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Ravi-T.png',
      medicalSpecialty: 'Medical Oncology',
      description:
        'Dr. Ravi T is a senior medical oncologist with over 17 years of experience in diagnosing and treating various cancers including hematologic malignancies and pediatric cancers.',

      hasCredential: ['MBBS', 'MD', 'DM (Medical Oncology)'],

      yearsOfExperience: '17',

      knowsAbout: [
        'Medical Oncology',
        'Cancer Treatment',
        'Hematologic Malignancies',
        'Pediatric Oncology',
        'Precision Oncology',
        'Immuno-Oncology',
        'Chemotherapy',
        'Cancer Diagnosis and Management',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Jagadguru Jayadeva Murugarajendra Medical College (JJMMC)',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'University of Mumbai',
        },
      ],

      memberOf: [
        {
          '@type': 'Organization',
          name: 'Karnataka Medical Council',
        },
        {
          '@type': 'Hospital',
          name: 'Rashtrotthana Hospital',
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
          name: 'Dr. Ravi T',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-ravi-t',
        },
      ],
    },
  ],
};
