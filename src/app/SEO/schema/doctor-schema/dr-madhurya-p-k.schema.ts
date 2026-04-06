export const DR_MADHURYA_PK_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-madhurya-p-k#doctor',
      name: 'Dr. Madhurya P. K',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-madhurya-p-k',
      image:
        'https://www.rashtrotthanahospital.com/assets/new-doctor-imgs/dr-madhurya-doc-page.png',

      jobTitle: 'Consultant Dermatologist',
      medicalSpecialty: 'Dermatology',

      description:
        'Dr. Madhurya P. K is a consultant dermatologist with over 7 years of experience specializing in clinical dermatology, cosmetology, hair disorders, pigmentary conditions and minor dermatological procedures.',

      hasCredential: ['MBBS', 'MD Dermatology, Venereology & Leprosy'],

      yearsOfExperience: '7',

      knowsAbout: [
        'Dermatology',
        'Acne Treatment',
        'Pigmentary Disorders',
        'Hair and Nail Disorders',
        'Dermatophytosis and Fungal Infections',
        'Venereology',
        'Leprosy',
        'Cosmetology',
        'Aesthetic Dermatology',
        'Trichology',
        'Androgenetic Alopecia',
        'Laser Dermatology',
        'Minor Dermatological Procedures',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-madhurya-p-k#breadcrumb',
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
          name: 'Dr. Madhurya P. K',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-madhurya-p-k',
        },
      ],
    },
  ],
};
