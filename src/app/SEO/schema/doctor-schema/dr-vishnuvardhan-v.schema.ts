export const DR_VISHNUVARDHAN_V_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Vishnuvardhan V',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-vishnuvardhan-v',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Vishnuvardhan-V.png',
      medicalSpecialty: 'Orthodontics',
      description:
        'Dr. Vishnuvardhan V is an experienced orthodontist with over 10 years of expertise in braces treatment, invisible aligners and advanced orthodontic procedures for correcting dental alignment.',

      hasCredential: ['BDS', 'MDS (Orthodontics)'],

      yearsOfExperience: '10',

      knowsAbout: [
        'Orthodontics',
        'Dental Braces Treatment',
        'Metal Braces',
        'Ceramic Braces',
        'Lingual Braces',
        'Invisible Aligners',
        'Myofunctional Appliances',
        'Teeth Alignment Treatment',
        'Dental Malocclusion Treatment',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'DAPM RV Dental College, Bangalore',
      },

      memberOf: [
        {
          '@type': 'Organization',
          name: 'Indian Orthodontic Society',
        },
        {
          '@type': 'Hospital',
          name: 'Rashtrotthana Hospital',
        },
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
          name: 'Dr. Vishnuvardhan V',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-vishnuvardhan-v',
        },
      ],
    },
  ],
};
