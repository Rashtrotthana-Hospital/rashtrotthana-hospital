export const MS_SAMARCHITHA_S_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Psychologist',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/ms-samarchitha-s#doctor',
      name: 'Ms. Samarchitha S',
      url: 'https://www.rashtrotthanahospital.com/doctor/ms-samarchitha-s',
      image:
        'https://www.rashtrotthanahospital.com/assets/ms-samarchitha-s-doc-page.png',

      jobTitle: 'Clinical Psychologist',
      medicalSpecialty: 'Clinical Psychology',

      description:
        'Ms. Samarchitha S is a clinical psychologist with over 7 years of experience in the assessment and treatment of psychological and neuropsychological disorders across children, adults and elderly patients.',

      hasCredential: [
        'MSc Clinical Psychology',
        'MPhil Clinical Psychology',
        'Fellowship in Clinical Neuropsychology (NIMHANS)',
      ],

      yearsOfExperience: '7',

      knowsAbout: [
        'Clinical Psychology',
        'Mood Disorders',
        'Obsessive Compulsive Disorder',
        'Anxiety Disorders',
        'Dissociative Disorders',
        'Sleep Disorders',
        'Personality Disorders',
        'Substance Use Disorders',
        'Autism Spectrum Disorder',
        'ADHD',
        'Intellectual Developmental Disorder',
        'Neurodegenerative Disorders',
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
        'https://www.rashtrotthanahospital.com/doctor/ms-samarchitha-s#breadcrumb',
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
          name: 'Ms. Samarchitha S',
          item: 'https://www.rashtrotthanahospital.com/doctor/ms-samarchitha-s',
        },
      ],
    },
  ],
};
