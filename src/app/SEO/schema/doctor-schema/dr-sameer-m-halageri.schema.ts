export const DR_SAMEER_M_HALAGERI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Sameer M. Halageri',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sameer-m-halageri',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Sameer-M-Halageri.png',
      medicalSpecialty: 'Plastic Surgery',
      description:
        'Dr. Sameer M. Halageri is an experienced consultant plastic and reconstructive surgeon with over 12 years of expertise in aesthetic surgery, microvascular reconstruction, craniofacial surgery and complex wound management.',

      hasCredential: ['MBBS', 'MS', 'MCh (Plastic Surgery)'],

      yearsOfExperience: '12',

      knowsAbout: [
        'Plastic and Reconstructive Surgery',
        'Microvascular Surgery',
        'Onco Reconstruction',
        'Hand Surgery',
        'Brachial Plexus Surgery',
        'Breast Reconstruction Surgery',
        'Lymphedema Surgery',
        'Cleft Lip and Craniofacial Surgery',
        'Diabetic Foot Reconstruction',
        'Complex Wound Management',
        'Burn Reconstruction Surgery',
        'Cosmetic Surgery',
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
          name: 'Dr. Sameer M. Halageri',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sameer-m-halageri',
        },
      ],
    },
  ],
};
