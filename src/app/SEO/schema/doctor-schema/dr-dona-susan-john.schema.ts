export const DR_DONA_SUSAN_JOHN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-dona-susan-john#doctor',
      name: 'Dr. Dona Susan John',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-dona-susan-john',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-dona-susan-john-dr-page.png',

      jobTitle: 'Consultant Ophthalmologist',
      medicalSpecialty: 'Ophthalmology',

      description:
        'Dr. Dona Susan John is an experienced ophthalmologist with more than 21 years of experience specializing in medical retina and comprehensive eye care.',

      hasCredential: ['MBBS', 'DNB Ophthalmology', 'FICO'],

      yearsOfExperience: '21',

      knowsAbout: [
        'Medical Retina',
        'Retinal Disorders',
        'Comprehensive Eye Care',
        'Vision Assessment',
        'Diabetic Retinopathy',
        'Eye Disease Diagnosis',
        'Retina Evaluation',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-dona-susan-john#breadcrumb',
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
          name: 'Dr. Dona Susan John',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-dona-susan-john',
        },
      ],
    },
  ],
};
