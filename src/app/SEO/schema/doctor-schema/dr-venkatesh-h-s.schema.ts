export const DR_VENKATESH_HS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Venkatesh H. S',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-venkatesh-h-s',
      image:
        'https://www.rashtrotthanahospital.com/assets/dr-venkatesh-h-s-doc-page.png',
      medicalSpecialty: 'Ayurveda',
      description:
        'Dr. Venkatesh H. S is an experienced Ayurveda physician with over 26 years of practice, specializing in Ayurvedic endocrinology, thyroid disorders and arthritis management using traditional Ayurvedic treatment methods and research-based therapies.',

      hasCredential: ['BSc', 'BAMS', 'FAHO', 'FAGE'],

      yearsOfExperience: '26',

      knowsAbout: [
        'Ayurveda',
        'Ayurvedic Endocrinology',
        'Thyroid Disorders',
        'Arthritis Treatment',
        'Ayurvedic Medicine',
        'Holistic Healthcare',
        'Natural Healing Therapies',
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
          name: 'Dr. Venkatesh H. S',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-venkatesh-h-s',
        },
      ],
    },
  ],
};
