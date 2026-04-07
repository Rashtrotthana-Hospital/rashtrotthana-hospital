export const MS_ARCHANA_KARTHICK_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dietitian',
      name: 'Ms. Archana Karthick',
      url: 'https://www.rashtrotthanahospital.com/doctor/ms-archana-karthick',
      image:
        'https://www.rashtrotthanahospital.com/assets/Ms-Archana-Karthick.png',
      description:
        'Ms. Archana Karthick is a senior clinical dietician with over 19 years of experience in clinical nutrition, dietetics and food service management. She specializes in prenatal and postnatal nutrition, pediatric and geriatric nutrition, diabetic diet management and enteral nutrition therapy.',

      medicalSpecialty: 'Nutrition and Dietetics',

      hasCredential: [
        'M.Sc. Dietetics and Food Service Management',
        'B.Sc. Clinical Nutrition and Dietetics',
        'PG Certificate in Diabetes Education',
        'MICYAN - Indian Institute of Public Health Delhi',
      ],

      yearsOfExperience: '19',

      knowsAbout: [
        'Clinical Nutrition',
        'Prenatal Nutrition',
        'Postnatal Nutrition',
        'Paediatric Nutrition',
        'Geriatric Nutrition',
        'Diabetes Diet Management',
        'Enteral Nutrition',
        'Medical Nutrition Therapy',
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
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
          name: 'Ms. Archana Karthick',
          item: 'https://www.rashtrotthanahospital.com/doctor/ms-archana-karthick',
        },
      ],
    },
  ],
};
