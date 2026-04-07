export const HERNIA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Hernia Surgery',
      url: 'https://www.rashtrotthanahospital.com/hernia-hospital-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Abdomen',
      description:
        'Hernia surgery repairs a weakened abdominal wall where internal organs or tissues protrude. Rashtrotthana Hospital offers advanced laparoscopic and open hernia surgery performed by experienced surgeons.',
      keywords: [
        'Hernia surgery in Bangalore',
        'Best hernia hospital in Bangalore',
        'Laparoscopic hernia surgery Bangalore',
        'Inguinal hernia treatment Bangalore',
        'General surgery hospital in Bangalore',
      ],

      howPerformed: [
        'Laparoscopic hernia repair surgery',
        'Open hernia repair surgery',
        'Mesh hernia repair procedure',
      ],

      indication: [
        'Inguinal hernia',
        'Umbilical hernia',
        'Incisional hernia',
        'Abdominal wall weakness',
        'Pain or swelling in the abdomen',
      ],

      followup:
        'Post-operative care includes wound monitoring, gradual return to normal activities and follow-up consultations with the surgeon.',

      provider: {
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

      performedBy: [
        {
          '@type': 'Physician',
          name: 'Dr. Atmaram D. C',
          medicalSpecialty: 'General Surgery',
          url: 'https://www.rashtrotthanahospital.com/doctor/dr-atmaram-d-c',
          yearsOfExperience: '20',
        },

        {
          '@type': 'Physician',
          name: 'Dr. Nishanth Lakshmikantha',
          medicalSpecialty: 'General Surgery',
          url: 'https://www.rashtrotthanahospital.com/doctor/dr-nishanth-lakshmikantha',
          yearsOfExperience: '10',
        },
      ],
    },

    {
      '@type': 'Offer',
      name: 'Hernia Surgery Treatment',
      availability: 'https://schema.org/InStock',
      url: 'https://www.rashtrotthanahospital.com/hernia-hospital-bangalore',
      description:
        'The cost of hernia surgery depends on the type of hernia, surgical technique used and patient condition.',
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
          name: 'General Surgery',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-general-surgery-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Hernia Surgery in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/hernia-hospital-bangalore',
        },
      ],
    },
  ],
};
