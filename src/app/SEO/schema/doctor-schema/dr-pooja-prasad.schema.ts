export const DR_POOJA_PRASAD_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-pooja-prasad#doctor',
      name: 'Dr. Pooja Prasad',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-pooja-prasad',
      image:
        'https://www.rashtrotthanahospital.com/assets/Doc-Inv-Page/Dr-Pooja-sq.png',

      jobTitle: 'Radiologist',
      medicalSpecialty: 'Radiology',

      description:
        'Dr. Pooja Prasad is a radiologist specializing in diagnostic imaging including CT, MRI, ultrasound, Doppler studies and advanced imaging for neurological, musculoskeletal and abdominal conditions.',

      hasCredential: ['MBBS', 'MD Radiology', 'DNB Radiology'],

      yearsOfExperience: '2',

      knowsAbout: [
        'Diagnostic Radiology',
        'CT Scan Interpretation',
        'MRI Imaging',
        'Ultrasound and Doppler Imaging',
        'X-Ray Imaging',
        'Women’s Imaging',
        'Neuroimaging',
        'Musculoskeletal Imaging',
        'Chest Imaging',
        'Abdominal and Pelvic Imaging',
        'Emergency and Trauma Imaging',
        'Obstetric Ultrasound',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-pooja-prasad#breadcrumb',
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
          name: 'Dr. Pooja Prasad',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-pooja-prasad',
        },
      ],
    },
  ],
};
