export const DR_ASHWITHA_GUNDMI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Ashwitha Gundmi',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-ashwitha-gundmi',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Ashwitha-Gundmi.png',
      medicalSpecialty: 'Obstetrics and Gynecology',
      description:
        'Dr. Ashwitha Gundmi is an experienced Obstetrics and Gynaecology consultant specializing in high-risk pregnancy management, minimally invasive gynecological surgeries, fertility care, and preventive women’s health including cervical cancer screening.',

      hasCredential: ['MBBS', 'MS Obstetrics and Gynecology', 'MRCOG (London)'],

      yearsOfExperience: '9',

      knowsAbout: [
        'High Risk Pregnancy',
        'Obstetrics Care',
        'Gynecological Surgery',
        'Minimally Invasive Gynecological Surgery',
        'Laparoscopy',
        'Hysteroscopy',
        'Fertility Treatment',
        'Family Planning',
        'Contraception',
        'Cervical Cancer Screening',
        'Colposcopy',
        'Women’s Health',
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
          name: 'Dr. Ashwitha Gundmi',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-ashwitha-gundmi',
        },
      ],
    },
  ],
};
