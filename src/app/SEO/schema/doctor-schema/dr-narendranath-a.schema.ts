export const DR_NARENDRANATH_A_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Narendranath A',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-narendranath-a',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Narendranath-A.png',
      medicalSpecialty: 'Otolaryngology',
      description:
        'Dr. Narendranath A is an experienced ENT specialist with expertise in ear, nose and throat surgeries including tympanoplasty, mastoidectomy, FESS sinus surgery, septoplasty, adenoidectomy, tonsillectomy and vocal cord surgeries.',

      hasCredential: ['MBBS', 'MS (ENT)'],

      yearsOfExperience: '11',

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Rajah Muthiah Medical College, Tamil Nadu',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Vijayanagar Institute of Medical Sciences, Bellary',
        },
      ],

      knowsAbout: [
        'ENT Surgery',
        'Otology',
        'Rhinology',
        'Tympanoplasty',
        'Mastoidectomy',
        'Myringotomy and Grommet Surgery',
        'Functional Endoscopic Sinus Surgery (FESS)',
        'Septoplasty',
        'Adenoidectomy',
        'Tonsillectomy',
        'Vocal Cord Surgery',
        'Thyroid Surgery',
        'Parotid Surgery',
        'Tracheostomy',
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
          name: 'Dr. Narendranath A',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-narendranath-a',
        },
      ],
    },
  ],
};