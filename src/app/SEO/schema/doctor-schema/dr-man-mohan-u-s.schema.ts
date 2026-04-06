export const DR_MAN_MOHAN_US_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Man Mohan U. S',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-man-mohan-u-s',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Man-Mohan-U-S.png',
      medicalSpecialty: 'Gastroenterology',

      description:
        'Dr. Man Mohan U. S is a highly qualified gastroenterologist specializing in gastrointestinal and hepatology disorders. He has extensive experience in diagnosing and treating acid reflux, gastritis, inflammatory bowel disease, liver diseases and pancreatitis.',

      hasCredential: [
        'MBBS',
        'MD General Medicine',
        'DrNB Medical Gastroenterology',
      ],

      yearsOfExperience: '8',

      knowsAbout: [
        'Acid Reflux',
        'GERD',
        'Gastritis',
        'Peptic Ulcer Disease',
        'Celiac Disease',
        'Ulcerative Colitis',
        "Crohn's Disease",
        'Inflammatory Bowel Disease',
        'Irritable Bowel Syndrome',
        'Chronic Constipation',
        'Diarrhea',
        'Colon Polyps',
        'GI Cancer',
        'Fatty Liver Disease',
        'Alcoholic Liver Disease',
        'Cirrhosis',
        'Liver Fibrosis',
        'Pancreatitis',
        'Gallstones',
        'Biliary Disorders',
        'Hepatitis',
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
          name: 'Dr. Man Mohan U. S',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-man-mohan-u-s',
        },
      ],
    },
  ],
};
