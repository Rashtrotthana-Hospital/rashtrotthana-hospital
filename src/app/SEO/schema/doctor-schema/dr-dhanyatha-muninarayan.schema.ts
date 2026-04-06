export const DR_DHANYATHA_MUNINARAYAN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-dhanyatha-muninarayan#doctor',
      name: 'Dr. Dhanyatha Muninarayan',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-dhanyatha-muninarayan',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Dhanyatha-Muninarayan.png',

      jobTitle: 'Consultant Paediatrician',
      medicalSpecialty: 'Pediatrics',

      description:
        'Dr. Dhanyatha Muninarayan is a consultant paediatrician specializing in general paediatrics and neonatology with extensive experience in neonatal care, paediatric emergencies and paediatric haematology-oncology.',

      hasCredential: ['MBBS', 'MD Pediatrics'],

      yearsOfExperience: '11',

      knowsAbout: [
        'General Pediatrics',
        'Neonatology',
        'Pediatric Hematology',
        'Pediatric Oncology',
        'Neonatal Resuscitation',
        'High Risk Neonatal Care',
        'Pediatric Emergency Care',
        'Lumbar Puncture',
        'Bone Marrow Aspiration',
        'Pediatric Patient Counselling',
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
      logo: 'https://www.rashtrotthanahospital.com/assets/logo.png',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-dhanyatha-muninarayan#breadcrumb',
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
          name: 'Dr. Dhanyatha Muninarayan',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-dhanyatha-muninarayan',
        },
      ],
    },
  ],
};
