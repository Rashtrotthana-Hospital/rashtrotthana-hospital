export const DR_HM_KRISHNAMURTHY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. H. M. Krishnamurthy',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-h-m-krishnamurthy',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-H-M-Krishnamurthy.png',
      medicalSpecialty: 'Internal Medicine',
      description:
        'Dr. H. M. Krishnamurthy is a senior internal medicine specialist with over 37 years of experience in managing metabolic disorders, diabetes, infectious diseases and chronic medical conditions.',

      hasCredential: ['MBBS', 'MD (Internal Medicine)'],

      yearsOfExperience: '37',

      knowsAbout: [
        'Metabolic Disorders',
        'Diabetes Management',
        'Thyroid Disorders',
        'Infectious Diseases',
        'Respiratory Diseases',
        'Geriatric Medicine',
        'Chronic Disease Management',
        'Clinical Cardiology',
        'Kidney Diseases',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Bangalore University',
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
          name: 'Dr. H. M. Krishnamurthy',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-h-m-krishnamurthy',
        },
      ],
    },
  ],
};
