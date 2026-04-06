export const DR_KALYANI_DILIP_KARKARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Kalyani Dilip Karkare',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-kalyani-dilip-karkare',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Kalyani-Dilip-Karkare.png',
      medicalSpecialty: 'Neurology',

      description:
        'Dr. Kalyani Dilip Karkare is a highly experienced neurologist and gold medalist in DM Neurology from NIMHANS, Bangalore. She specializes in epilepsy, EEG diagnostics, stroke management and advanced neurological care.',

      hasCredential: ['MBBS', 'DM Neurology', 'PDF EEG'],

      yearsOfExperience: '16',

      knowsAbout: [
        'Epilepsy',
        'EEG Diagnostics',
        'Stroke Management',
        'IV Thrombolysis',
        'Mechanical Thrombectomy',
        'Neuropathy',
        'Neurological Disorders',
        'Epilepsy Surgery Evaluation',
        'Advanced EEG Monitoring',
        'Stroke Rehabilitation',
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rajarajeshwari Nagar',
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
          name: 'Dr. Kalyani Dilip Karkare',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-kalyani-dilip-karkare',
        },
      ],
    },
  ],
};
