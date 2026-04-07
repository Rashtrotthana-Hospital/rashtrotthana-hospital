export const DR_PRAMOD_CHINDER_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Pramod S. Chinder',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-pramod-s-chinder',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Pramod-S-Chinder.png',
      medicalSpecialty: 'Orthopedic Oncology',
      description:
        'Dr. Pramod S. Chinder is an experienced orthopedic oncosurgeon specializing in limb salvage surgery, complex pelvic tumor reconstruction and advanced oncologic surgical techniques.',

      hasCredential: ['MBBS', 'MS Orthopedics', 'FHRM', 'FMSO'],

      yearsOfExperience: '20',

      knowsAbout: [
        'Orthopedic Oncology',
        'Limb Salvage Surgery',
        'Biological Reconstruction',
        'Computer Assisted Tumor Surgery',
        'Fresh Frozen Allograft Reconstruction',
        'Microsurgical Reconstruction',
        'Pelvic Tumor Surgery',
        '3D Printing in Oncology',
        'Robotic Pelvic Surgery',
        'Stem Cell Therapy',
        'Regenerative Medicine',
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },

      memberOf: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
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
          name: 'Dr. Pramod S. Chinder',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-pramod-s-chinder',
        },
      ],
    },
  ],
};
