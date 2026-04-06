export const DR_VINITA_UDUPA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Vinita Udupa',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-vinita-udupa',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Vinita-Udupa.png',
      medicalSpecialty: 'Obstetrics and Gynecology',
      description:
        'Dr. Vinita Udupa is an obstetrician specializing in maternal and fetal medicine with extensive training from institutions including JIPMER Pondicherry, CMC Vellore and Fernandez Hospital Hyderabad. She focuses on evidence-based pregnancy care and high-risk obstetrics.',

      hasCredential: ['MBBS', 'MS', 'DNB', 'FNB', 'MRCOG (UK)'],

      yearsOfExperience: '10',

      knowsAbout: [
        'High Risk Pregnancy',
        'Maternal Fetal Medicine',
        'Obstetric Medicine',
        'Fetal Medicine',
        'Pregnancy Care',
        'Antenatal Care',
        'High Risk Obstetrics',
        'Pregnancy Complications',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'JIPMER Pondicherry',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'CMC Vellore',
        },
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
          name: 'Dr. Vinita Udupa',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-vinita-udupa',
        },
      ],
    },
  ],
};
