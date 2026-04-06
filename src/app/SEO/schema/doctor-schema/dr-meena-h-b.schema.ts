export const DR_MEENA_HB_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Meena H. B',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-meena-h-b',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Meena-H-B.png',
      medicalSpecialty: 'Dermatology',
      description:
        'Dr. Meena H. B is an experienced dermatologist with more than 30 years of expertise in diagnosing and treating skin, hair and nail disorders. She specializes in clinical dermatology, cosmetic dermatology and advanced dermatological procedures.',

      hasCredential: ['MBBS', 'MD Dermatology'],

      yearsOfExperience: '30',

      knowsAbout: [
        'Clinical Dermatology',
        'Skin Diseases Treatment',
        'Hair Loss Treatment',
        'Acne Treatment',
        'Pigmentation Treatment',
        'Chemical Peels',
        'PRP Therapy for Hair and Face',
        'Laser Hair Removal',
        'Acne Scar Treatment',
        'Skin Tag Removal',
        'Wart Removal',
        'Microdermabrasion',
        'Cosmetic Dermatology',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'MS Ramaiah Medical College, Bangalore',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'KIMS Bengaluru',
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
          name: 'Dr. Meena H. B',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-meena-h-b',
        },
      ],
    },
  ],
};
