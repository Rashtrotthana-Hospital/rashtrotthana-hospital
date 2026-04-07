export const RHEUMATOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Rheumatology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/rheumatology-hospital-bangalore',
      medicalSpecialty: 'Rheumatology',
      description:
        'Rashtrotthana Hospital provides advanced rheumatology care for autoimmune diseases, arthritis, lupus and inflammatory joint disorders.',

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
        'Rheumatoid arthritis treatment',
        'Osteoarthritis management',
        'Lupus diagnosis and treatment',
        'Autoimmune disease treatment',
        'Joint inflammation treatment',
        'Ankylosing spondylitis treatment',
        'Gout treatment',
      ],

      keywords: [
        'Best rheumatology hospital in Bangalore',
        'Best rheumatologist in Bangalore',
        'Arthritis specialist in Bangalore',
        'Autoimmune disease specialist Bangalore',
        'Joint pain specialist Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Matam Sri Anusha',
      medicalSpecialty: 'Rheumatology',
      yearsOfExperience: '11',
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
          name: 'Rheumatology Hospital Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/rheumatology-hospital-bangalore',
        },
      ],
    },
  ],
};
