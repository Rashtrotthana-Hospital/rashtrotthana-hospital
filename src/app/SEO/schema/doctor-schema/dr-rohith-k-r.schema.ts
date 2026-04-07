export const DR_ROHITH_KR_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Rohith K. R',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-rohith-k-r',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Rohith-K-R.png',
      medicalSpecialty: 'Ayurveda',
      description:
        'Dr. Rohith K. R is an Ayurveda doctor practicing holistic healthcare using traditional Ayurvedic principles for preventive care and lifestyle-based treatments.',

      hasCredential: ['BAMS'],

      yearsOfExperience: '7',

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'P N Panicker Souhruda Ayurveda Medical College, Kerala',
      },

      knowsAbout: [
        'Ayurveda Treatment',
        'Holistic Medicine',
        'Ayurvedic Lifestyle Therapy',
        'Natural Healing',
        'Preventive Healthcare',
        'Diet and Lifestyle Management',
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
          name: 'Dr. Rohith K. R',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-rohith-k-r',
        },
      ],
    },
  ],
};
