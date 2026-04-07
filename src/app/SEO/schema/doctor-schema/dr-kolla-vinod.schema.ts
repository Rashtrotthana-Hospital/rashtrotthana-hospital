export const DR_KOLLA_VINOD_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Kolla Vinod',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-kolla-vinod',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Kolla-Vinod.png',
      medicalSpecialty: 'Pulmonology',
      description:
        'Dr. Kolla Vinod is a senior pulmonologist and sleep medicine specialist with over 20 years of experience in diagnosing and managing respiratory diseases including asthma, COPD, tuberculosis, pneumonia and lung disorders.',

      hasCredential: ['MBBS', 'MD Pulmonary Medicine'],

      yearsOfExperience: '20',

      knowsAbout: [
        'Pulmonary Medicine',
        'Interventional Pulmonology',
        'Bronchoscopy',
        'Thoracoscopy',
        'Cryobiopsy',
        'Rigid Bronchoscopy',
        'Asthma Treatment',
        'COPD Management',
        'Pneumonia Treatment',
        'Tuberculosis Treatment',
        'Interstitial Lung Disease',
        'Pleural Effusion',
        'Lung Cancer Diagnosis',
        'Sleep Medicine',
        'Allergic Bronchitis',
        'Pulmonary Rehabilitation',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Narayana Medical College, Nellore',
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
          name: 'Dr. Kolla Vinod',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-kolla-vinod',
        },
      ],
    },
  ],
};
