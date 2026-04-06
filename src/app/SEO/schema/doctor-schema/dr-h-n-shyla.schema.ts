export const DR_SHYLA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. H. N. Shyla',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-h-n-shyla',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-H-N-Shyla.png',
      medicalSpecialty: 'Dentistry',
      description:
        'Dr. H. N. Shyla is an experienced dental surgeon and implantologist with over 28 years of experience in dental sciences, specializing in trauma management, dental implants, cosmetic dentistry and oral surgery.',

      hasCredential: ['MDS'],

      knowsAbout: [
        'Dentistry',
        'Oral and Maxillofacial Surgery',
        'Dental Implants',
        'Cosmetic Dentistry',
        'Aesthetic Dentistry',
        'Dental Trauma Treatment',
      ],

      yearsOfExperience: '28',

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Government Dental College Bengaluru',
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
          name: 'Dr. H. N. Shyla',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-h-n-shyla',
        },
      ],
    },
  ],
};
