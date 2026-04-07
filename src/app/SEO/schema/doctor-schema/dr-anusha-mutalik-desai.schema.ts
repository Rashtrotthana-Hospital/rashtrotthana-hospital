export const DR_ANUSHA_MUTALIK_DESAI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Anusha Mutalik Desai',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-anusha-mutalik-desai',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Anusha-Mutalik-Desai.png',
      medicalSpecialty: 'Homeopathy',
      description:
        'Dr. Anusha Mutalik Desai is a homeopathy specialist with over 12 years of experience in treating chronic and lifestyle disorders including hypothyroidism, diabetes, hypertension, gastritis, migraines, anxiety, asthma and autoimmune conditions.',

      hasCredential: ['BHMS', 'MD (Homeopathy)'],

      yearsOfExperience: '12',

      knowsAbout: [
        'Homeopathy Treatment',
        'Hypothyroidism Treatment',
        'Diabetes Management',
        'Hypertension Treatment',
        'Gastritis Treatment',
        'Migraine Treatment',
        'Anxiety Disorders',
        'Depression Treatment',
        'Asthma Treatment',
        'PCOD Treatment',
        'Rheumatoid Arthritis Treatment',
        'Holistic Medicine',
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
          name: 'Dr. Anusha Mutalik Desai',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-anusha-mutalik-desai',
        },
      ],
    },
  ],
};
