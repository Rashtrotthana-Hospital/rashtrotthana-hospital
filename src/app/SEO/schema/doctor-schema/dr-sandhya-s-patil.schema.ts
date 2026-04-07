export const DR_SANDHYA_S_PATIL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id':
        'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil#doctor',
      name: 'Dr. Sandhya S. Patil',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-sandhya-dr-page.png',

      jobTitle: 'Consultant ENT and Head & Neck Surgeon',
      medicalSpecialty: 'Otolaryngology',

      description:
        'Dr. Sandhya S. Patil is an experienced ENT and Head & Neck surgeon with more than 12 years of clinical expertise in endoscopic sinus surgeries, pediatric ENT care, allergy management and advanced head and neck procedures.',

      hasCredential: ['MBBS', 'DLO', 'DNB (ENT)', 'AASC'],

      yearsOfExperience: '12',

      knowsAbout: [
        'Septoplasty',
        'Turbinectomy',
        'Turbinoplasty',
        'Functional Endoscopic Sinus Surgery',
        'Nasal Endoscopy',
        'Allergy Testing',
        'Allergen Immunotherapy',
        'Tympanoplasty',
        'Mastoidectomy',
        'Auroplasty',
        'Myringotomy',
        'Tonsillectomy',
        'Adenoidectomy',
        'Microlaryngeal Surgery',
        'Tracheostomy',
        'Thyroid Surgery',
        'Head and Neck Surgery',
        'ENT Oncology',
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
        'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil#breadcrumb',
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
          name: 'Dr. Sandhya S. Patil',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil',
        },
      ],
    },
  ],
};
