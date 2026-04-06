export const DR_GOPAL_DAS_CM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Gopal Das C M',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-gopal-das-c-m',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Gopal-Das-C-M.png',
      medicalSpecialty: 'Psychiatry',
      description:
        'Dr. Gopal Das C M is a consultant psychiatrist specializing in stress disorders, anxiety, depression, addiction psychiatry, child and adolescent psychiatry and severe mental health disorders including schizophrenia and bipolar disorder.',

      hasCredential: ['MBBS', 'MD Psychiatry'],

      yearsOfExperience: '15',

      knowsAbout: [
        'Psychiatry',
        'Stress Management',
        'Anxiety Disorders',
        'Depression Treatment',
        'Schizophrenia',
        'Bipolar Disorder',
        'Obsessive Compulsive Disorder',
        'Addiction Psychiatry',
        'Alcohol Addiction Treatment',
        'Smoking and Tobacco Addiction',
        'Behavioral Addictions',
        'Child and Adolescent Psychiatry',
        'Geriatric Psychiatry',
        'Sleep Disorders',
        'Insomnia Treatment',
        'Psychotherapy',
        'ECT Therapy',
        'TMS Therapy',
        'TDCS Therapy',
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
          name: 'Dr. Gopal Das C M',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-gopal-das-c-m',
        },
      ],
    },
  ],
};
