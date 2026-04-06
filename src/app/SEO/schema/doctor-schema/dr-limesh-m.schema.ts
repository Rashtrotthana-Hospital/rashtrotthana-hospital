export const DR_LIMESH_M_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.rashtrotthanahospital.com/doctor/dr-limesh-m#doctor',
      name: 'Dr. Limesh M',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-limesh-m',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-limesh-dr-page.png',

      jobTitle: 'Consultant Nephrologist',
      medicalSpecialty: 'Nephrology',

      description:
        'Dr. Limesh M is an experienced nephrologist and transplant physician specializing in chronic kidney disease management, kidney transplantation, dialysis care and critical care nephrology.',

      hasCredential: ['MBBS', 'MD General Medicine', 'DNB Nephrology'],

      yearsOfExperience: '16',

      knowsAbout: [
        'Chronic Kidney Disease',
        'Acute Kidney Injury',
        'Kidney Transplantation',
        'Critical Care Nephrology',
        'Renal Biopsy',
        'Dialysis Management',
        'Vascular Access Procedures',
        'Post Transplant Care',
        'Immunosuppressive Therapy Monitoring',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-limesh-m#breadcrumb',
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
          name: 'Dr. Limesh M',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-limesh-m',
        },
      ],
    },
  ],
};
