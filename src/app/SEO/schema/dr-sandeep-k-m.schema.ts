export const DR_SANDEEP_KM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-sandeep-k-m#doctor',
      name: 'Dr. Sandeep K M',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sandeep-k-m',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-sandeep-k-m-doc-page.png',

      jobTitle: 'Consultant Orthopaedic Surgeon',
      medicalSpecialty: 'Orthopedic Surgery',

      description:
        'Dr. Sandeep K M is an orthopedic surgeon with over 11 years of experience specializing in trauma care, joint replacement surgery (arthroplasty) and arthroscopic procedures.',

      hasCredential: [
        'MBBS',
        'MS Orthopedics',
        'Fellowship in Joint Replacement',
      ],

      yearsOfExperience: '11',

      knowsAbout: [
        'Orthopedic Surgery',
        'Joint Replacement Surgery',
        'Arthroplasty',
        'Arthroscopy',
        'Trauma Surgery',
        'Sports Injury Treatment',
        'Bone and Joint Disorders',
        'Musculoskeletal Conditions',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-sandeep-k-m#breadcrumb',
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
          name: 'Dr. Sandeep K M',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sandeep-k-m',
        },
      ],
    },
  ],
};
