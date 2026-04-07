export const DR_MATAM_SRI_ANUSHA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-matam-sri-anusha#doctor',
      name: 'Dr. Matam Sri Anusha',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-matam-sri-anusha',
      image: 'https://www.rashtrotthanahospital.com/assets/dummy.png',

      jobTitle: 'Consultant Rheumatologist',
      medicalSpecialty: 'Rheumatology',

      description:
        'Dr. Matam Sri Anusha is an experienced rheumatologist specializing in autoimmune and inflammatory disorders such as rheumatoid arthritis, lupus, vasculitis, osteoporosis and connective tissue diseases.',

      hasCredential: [
        'MBBS',
        'MD Internal Medicine',
        'DM Clinical Immunology and Rheumatology',
        'MRCP-SCE Rheumatology (UK)',
        'EULAR Fellow',
      ],

      yearsOfExperience: '11',

      knowsAbout: [
        'Inflammatory Arthritis',
        'Rheumatoid Arthritis',
        'Psoriatic Arthritis',
        'Systemic Lupus Erythematosus',
        'Sjogren Syndrome',
        'Systemic Sclerosis',
        'Vasculitis',
        'Sarcoidosis',
        'Osteoporosis',
        'Gout',
        'Recurrent Pregnancy Loss',
        'Autoimmune Diseases',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-matam-sri-anusha#breadcrumb',
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
          name: 'Dr. Matam Sri Anusha',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-matam-sri-anusha',
        },
      ],
    },
  ],
};
