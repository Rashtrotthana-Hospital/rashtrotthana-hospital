export const ENDOCRINOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Endocrinology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-endocrinology-hospital-in-bangalore',
      medicalSpecialty: 'Endocrinology',
      description:
        'Rashtrotthana Hospital provides advanced endocrinology care for diabetes, thyroid disorders, hormonal imbalance, metabolic diseases and endocrine gland disorders.',

      provider: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        telephone: '080 6923 9999',
        email: 'info@rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },

      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },

      availableService: [
        'Diabetes diagnosis and management',
        'Thyroid disorder treatment',
        'Hormonal imbalance treatment',
        'Endocrine gland disorder treatment',
        'Metabolic disease management',
        'Osteoporosis evaluation',
        'Hormone testing and consultation',
      ],

      keywords: [
        'Best endocrinology hospital in Bangalore',
        'Best endocrinologist in Bangalore',
        'Diabetes specialist in Bangalore',
        'Thyroid specialist in Bangalore',
        'Hormone specialist Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Manasa M. G',
      medicalSpecialty: 'Endocrinology',
      yearsOfExperience: '10',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-m-g',
      affiliation: {
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
          name: 'Specialities',
          item: 'https://www.rashtrotthanahospital.com/specialities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Best Endocrinology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-endocrinology-hospital-in-bangalore',
        },
      ],
    },
  ],
};
