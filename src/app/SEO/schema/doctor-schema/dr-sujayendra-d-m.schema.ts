export const DR_SUJAYENDRA_DM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Sujayendra D. M',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sujayendra-d-m',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Sujayendra-D-M.png',
      medicalSpecialty: 'Orthopedics',
      description:
        'Dr. Sujayendra D. M is an experienced orthopedic surgeon with more than 13 years of expertise in fracture care, joint replacement surgery, arthroscopy and orthopedic trauma management.',

      hasCredential: [
        'MBBS',
        'MS Orthopedics',
        'DNB Orthopedics',
        'Diploma SICOT',
        'Fellowship in Arthroplasty',
      ],

      yearsOfExperience: '13',

      knowsAbout: [
        'Orthopedic Trauma',
        'Fracture Treatment',
        'Joint Replacement Surgery',
        'Arthroscopy Surgery',
        'Knee Replacement Surgery',
        'Sports Injury Treatment',
        'Spine Disorders',
        'Pediatric Orthopedics',
        'Hand Surgery',
        'Complex Trauma Surgery',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Kasturba Medical College, Manipal',
      },

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
        name: 'Rashtrotthanahospital',
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
          name: 'Dr. Sujayendra D. M',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-sujayendra-d-m',
        },
      ],
    },
  ],
};
