export const DR_NITHIN_J_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-nithin-j#doctor',
      name: 'Dr. Nithin J',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nithin-j',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-nithin-j-dr-page.png',

      jobTitle: 'Consultant Nephrologist',
      medicalSpecialty: 'Nephrology',

      description:
        'Dr. Nithin J is an experienced nephrologist specializing in kidney diseases, renal transplantation care, dialysis management and glomerular disorders with extensive expertise in renal biopsies and catheter procedures.',

      hasCredential: ['MBBS', 'MD General Medicine', 'DM Nephrology'],

      yearsOfExperience: '15',

      knowsAbout: [
        'Clinical Nephrology',
        'Renal Transplantation',
        'Hemodialysis',
        'Peritoneal Dialysis',
        'Glomerular Diseases',
        'Renal Biopsy',
        'Dialysis Management',
        'Kidney Disease Treatment',
        'Post Transplant Care',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-nithin-j#breadcrumb',
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
          name: 'Dr. Nithin J',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-nithin-j',
        },
      ],
    },
  ],
};
