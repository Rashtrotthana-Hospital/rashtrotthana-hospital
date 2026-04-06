export const PILES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Piles Treatment and Surgery',
      url: 'https://www.rashtrotthanahospital.com/piles-hospital-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Rectum',
      description:
        'Piles surgery is performed to treat swollen veins in the rectum or anus that cause pain, bleeding and discomfort. Modern treatments such as laser piles surgery help patients recover quickly with minimal pain.',

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

      howPerformed: [
        'Laser piles surgery',
        'Hemorrhoidectomy',
        'Stapler piles surgery',
        'Minimally invasive piles treatment',
      ],

      indication: [
        'Bleeding piles',
        'Painful hemorrhoids',
        'Swelling around the anus',
        'Chronic constipation causing hemorrhoids',
        'Severe hemorrhoids not responding to medication',
      ],

      followup:
        'Patients are advised dietary changes, medications and follow-up consultations to ensure proper healing and prevent recurrence.',
    },

    {
      '@type': 'Physician',
      name: 'Dr. Atmaram D. C',
      medicalSpecialty: 'General Surgery',
      yearsOfExperience: '20',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-atmaram-d-c',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Nishanth Lakshmikantha',
      medicalSpecialty: 'General Surgery',
      yearsOfExperience: '10',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nishanth-lakshmikantha',
      affiliation: {
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
          name: 'General Surgery',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-general-surgery-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Piles Treatment',
          item: 'https://www.rashtrotthanahospital.com/piles-hospital-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is piles surgery recommended?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Piles surgery is recommended when symptoms such as pain, bleeding or swelling do not improve with medication or lifestyle changes.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is laser piles surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Laser piles surgery is a safe and commonly performed procedure when done by experienced surgeons.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery take after piles surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients return to normal activities within a few days depending on the treatment method used.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will piles come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Proper treatment and lifestyle guidance significantly reduce the chances of piles recurrence.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is piles surgery painful?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modern laser techniques minimize pain and discomfort compared to traditional piles surgery methods.',
          },
        },
      ],
    },
  ],
};
