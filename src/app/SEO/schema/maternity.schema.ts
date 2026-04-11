export const MATERNITY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Maternity Care Services',
      url: 'https://www.rashtrotthanahospital.com/maternity-care',
      medicalSpecialty: 'Obstetrics',
      description:
        'Rashtrotthana Hospital provides comprehensive maternity care including prenatal care, pregnancy monitoring, normal delivery, high-risk pregnancy management and postnatal care.',

      provider: {
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

      availableService: [
        'Prenatal care',
        'Normal delivery',
        'High-risk pregnancy management',
        'Cesarean section delivery',
        'Postnatal care',
        'Pregnancy consultation',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Latha Venkataram',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '35',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-latha-venkataram',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Prakruthi',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '19',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-prakruthi',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Neelam Saraswat',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '12',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-neelam-saraswat',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    // {
    //   '@type': 'Physician',
    //   name: 'Dr. Ashwitha Gundmi',
    //   medicalSpecialty: 'Obstetrics and Gynecology',
    //   yearsOfExperience: '9',
    //   url: 'https://www.rashtrotthanahospital.com/doctor/dr-ashwitha-gundmi',
    //   affiliation: {
    //     '@type': 'Hospital',
    //     name: 'Rashtrotthana Hospital',
    //   },
    // },

    {
      '@type': 'Physician',
      name: 'Dr. Vinita Udupa',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '10',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-vinita-udupa',
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
          name: 'Gynecology',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Maternity Care',
          item: 'https://www.rashtrotthanahospital.com/maternity-care',
        },
      ],
    },
  ],
};
