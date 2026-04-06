export const DR_DHRUVA_ITHAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-dhruva-ithal#doctor',
      name: 'Dr. Dhruva Ithal',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-dhruva-ithal',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-dhruva-ithal-doctor-page.png',

      jobTitle: 'Consultant Psychiatrist',
      medicalSpecialty: 'Psychiatry',

      description:
        'Dr. Dhruva Ithal is an experienced psychiatrist specializing in schizophrenia, adolescent mental health, substance use disorders and neurostimulation therapies such as ECT and TMS.',

      hasCredential: [
        'MBBS',
        'MD Psychiatry (NIMHANS)',
        'PhD Psychiatry (NIMHANS)',
      ],

      yearsOfExperience: '15',

      knowsAbout: [
        'General Psychiatry',
        'Adult Psychiatry',
        'Schizophrenia Treatment',
        'Adolescent Psychiatry',
        'Perinatal Psychiatry',
        'Substance Use Disorders',
        'Electroconvulsive Therapy',
        'Transcranial Magnetic Stimulation',
        'Psychotherapy',
        'Cognitive Behavioural Therapy',
        'Psychodynamic Therapy',
        'Trauma Focused Therapy',
        'Yoga Therapy',
        'Art Therapy',
        'Dance Therapy',
      ],

      worksFor: {
        '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      },

      availableAtOrFrom: {
        '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      },
    },

    {
      '@type': 'Hospital',
      '@id': 'https://www.rashtrotthanahospital.com/#hospital',
      name: 'Rashtrotthanahospital',
      url: 'https://www.rashtrotthanahospital.com',
      telephone: '+91-80-69239999',

      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rajarajeshwari Nagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'India',
      },
    },

    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-dhruva-ithal#breadcrumb',
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
          name: 'Dr. Dhruva Ithal',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-dhruva-ithal',
        },
      ],
    },
  ],
};
