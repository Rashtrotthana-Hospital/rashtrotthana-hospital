export const DR_ASHISH_S_MALLIGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-ashish-s-mallige#doctor',
      name: 'Major (Dr.) Ashish S. Mallige',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-ashish-s-mallige',
      image:
        'https://www.rashtrotthanahospital.com/assets/new-doctor-imgs/dr-ashis-doc-page.png',

      jobTitle: 'Consultant Paediatrician',
      medicalSpecialty: 'Pediatrics',

      description:
        'Major (Dr.) Ashish S. Mallige is a consultant paediatrician with over 15 years of experience specializing in pediatric intensive care, neonatal emergencies and management of critically ill children.',

      hasCredential: [
        'MBBS',
        'MD Pediatrics',
        'Fellowship in Pediatric Intensive Care (PICU)',
      ],

      yearsOfExperience: '15',

      knowsAbout: [
        'Pediatrics',
        'Neonatology',
        'Pediatric Intensive Care',
        'Management of Critically Ill Children',
        'Neonatal and Pediatric Resuscitation',
        'Pediatric Infections and Sepsis',
        'Pediatric Respiratory Emergencies',
        'Pediatric Cardiac Emergencies',
        'Care of Very Low Birth Weight Infants',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-ashish-s-mallige#breadcrumb',
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
          name: 'Major (Dr.) Ashish S. Mallige',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-ashish-s-mallige',
        },
      ],
    },
  ],
};
