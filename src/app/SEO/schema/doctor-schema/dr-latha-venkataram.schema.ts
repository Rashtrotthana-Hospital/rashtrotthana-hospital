export const DR_LATHA_VENKATARAM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Latha Venkataram',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-latha-venkataram',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Latha-Venkataram.png',
      medicalSpecialty: 'Obstetrics and Gynecology',
      description:
        "Dr. Latha Venkataram is a senior obstetrician and gynecologist with over 35 years of experience in women's healthcare. She specializes in vaginal deliveries, high-risk pregnancy management, diabetes in pregnancy and comprehensive obstetric care.",

      hasCredential: ['MBBS', 'MRCOG (UK)', 'MRCP (Ireland)', 'FRCOG (UK)'],

      yearsOfExperience: '35',

      knowsAbout: [
        'Vaginal Delivery',
        'High Risk Pregnancy',
        'Diabetes in Pregnancy',
        'Medical Disorders in Pregnancy',
        'Recurrent Pregnancy Loss Treatment',
        'Emergency Obstetric Care',
        'Menopause Management',
        'Vaginal Surgeries',
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
          name: 'Dr. Latha Venkataram',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-latha-venkataram',
        },
      ],
    },
  ],
};
