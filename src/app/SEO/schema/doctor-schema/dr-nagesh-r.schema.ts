export const DR_NAGESH_R_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Nagesh R',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nagesh-r',
      image:
        'https://www.rashtrotthanahospital.com/assets/Doc-Inv-Page/dr-nagesh-sq.png',
      medicalSpecialty: 'Radiology',
      description:
        'Dr. Nagesh R is a radiology consultant with over 16 years of experience in diagnostic imaging. He specializes in general radiology, cardiovascular imaging and image-guided procedures including ultrasound and CT-guided interventions.',

      hasCredential: ['MBBS', 'DMRD', 'DNB'],

      yearsOfExperience: '16',

      knowsAbout: [
        'Radiology',
        'Diagnostic Imaging',
        'Ultrasound Imaging',
        'CT Scan Interpretation',
        'Cardiovascular Imaging',
        'Image Guided Procedures',
        'USG Guided Interventions',
        'CT Guided Interventions',
      ],

      memberOf: [
        {
          '@type': 'Organization',
          name: 'Indian Radiology and Imaging Association',
        },
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },
    },

    {
      '@type': 'BreadcrumbList',
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
          name: 'Dr. Nagesh R',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-nagesh-r',
        },
      ],
    },
  ],
};
