export const DR_SHEKAR_PATIL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Shekar Patil',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-shekar-patil',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Shekar-Patil.png',
      medicalSpecialty: 'Medical Oncology',
      description:
        'Dr. Shekar Patil is a senior medical oncologist with over 36 years of experience in cancer care. He specializes in chemotherapy, immuno-oncology, treatment of hematological malignancies and precision oncology.',

      hasCredential: ['MBBS', 'MD', 'DM'],

      yearsOfExperience: '36',

      knowsAbout: [
        'Medical Oncology',
        'Chemotherapy',
        'Precision Oncology',
        'Immuno-Oncology',
        'Bone Marrow Transplantation',
        'Treatment of Lymphomas',
        'Acute Myeloid Leukemia Treatment',
        'Ovarian Cancer Treatment',
        'Carcinoma Cervix Treatment',
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
          name: 'Dr. Shekar Patil',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-shekar-patil',
        },
      ],
    },
  ],
};
