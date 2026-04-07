export const DR_PRAKRUTHI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Prakruthi',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-prakruthi',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Prakruthi.png',
      medicalSpecialty: 'Obstetrics and Gynecology',
      description:
        'Dr. Prakruthi is an experienced obstetrician and gynecologist specializing in high-risk pregnancy management, maternal fetal medicine and advanced obstetric care.',

      hasCredential: [
        'MBBS',
        'DGO',
        'DNB (Obstetrics & Gynecology)',
        'Fellowship in Maternal Fetal Medicine',
      ],

      yearsOfExperience: '19',

      knowsAbout: [
        'High Risk Pregnancy Management',
        'Maternal Fetal Medicine',
        'Labour Ward Management',
        'Fetal Scans',
        'Pregnancy Care',
        'Prenatal Care',
        'Complicated Pregnancy Management',
        'Women’s Reproductive Health',
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
        name: 'Rashtrotthanahospital',
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
          name: 'Dr. Prakruthi',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-prakruthi',
        },
      ],
    },
  ],
};
