export const EMERGENCY_MEDICINE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EmergencyService',
      name: 'Emergency Medicine Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-emergency-medicine-hospital-in-bangalore',
      description:
        'Rashtrotthana Hospital provides 24/7 emergency medical care including trauma care, cardiac emergencies, stroke management and critical care stabilization.',

      availableChannel: {
        '@type': 'ServiceChannel',
        serviceLocation: {
          '@type': 'Hospital',
          name: 'Rashtrotthana Hospital',
          url: 'https://www.rashtrotthanahospital.com',
          telephone: '080 6923 9999',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'RR Nagar',
            addressRegion: 'Karnataka',
            addressCountry: 'India',
          },
        },
      },

      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },

      availableService: [
        '24/7 emergency medical care',
        'Trauma stabilization',
        'Cardiac emergency treatment',
        'Stroke emergency response',
        'Accident and injury treatment',
        'Critical care stabilization',
        'Emergency diagnostic services',
      ],

      keywords: [
        'Emergency hospital in Bangalore',
        '24 hour emergency hospital Bangalore',
        'Trauma care hospital Bangalore',
        'Emergency medicine doctor Bangalore',
        'Critical care hospital Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Col (Dr) Anand Shankar K',
      medicalSpecialty: 'Emergency Medicine',
      yearsOfExperience: '31',
      url: 'https://www.rashtrotthanahospital.com/doctor/col-dr-anand-shankar-k',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Srinivas Siddeshwar',
      medicalSpecialty: 'Emergency Medicine',
      yearsOfExperience: '8',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-srinivas-siddeshwar',
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
          name: 'Best Emergency Medicine Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-emergency-medicine-hospital-in-bangalore',
        },
      ],
    },
  ],
};
