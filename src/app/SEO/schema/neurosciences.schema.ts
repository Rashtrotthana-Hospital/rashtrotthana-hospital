export const NEUROSCIENCES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Neurosciences Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-neurology-hospital-in-bangalore',
      medicalSpecialty: 'Neurology',
      description:
        'Rashtrotthana Hospital provides advanced neurosciences care including treatment for stroke, migraine, brain tumors, spinal disorders and nerve-related conditions.',

      provider: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        telephone: '080 6923 9999',
        email: 'info@rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },

      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },

      availableService: [
        'Stroke diagnosis and treatment',
        'Migraine and headache management',
        'Brain tumor evaluation',
        'Spinal cord disorder treatment',
        'Peripheral nerve disorder treatment',
        'Radiculopathy treatment',
        'Neurological rehabilitation',
      ],

      keywords: [
        'Best neurology hospital in Bangalore',
        'Best neurologist in Bangalore',
        'Brain specialist in Bangalore',
        'Stroke treatment hospital in Bangalore',
        'Migraine specialist Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Kalyani Dilip Karkare',
      medicalSpecialty: 'Neurology',
      yearsOfExperience: '16',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Jaidev S',
      medicalSpecialty: 'Neurosurgery',
      yearsOfExperience: '7',
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
          name: 'Specialities',
          item: 'https://www.rashtrotthanahospital.com/specialities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Best Neurology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-neurology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What conditions does the Neurosciences Department treat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The department treats stroke, brain tumors, migraine headaches, spinal cord injuries, radiculopathy and peripheral nerve disorders.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best doctor for migraine and nerve pain in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The neurosciences team at Rashtrotthana Hospital provides specialized treatment for migraine headaches and nerve pain with personalized care.',
          },
        },

        {
          '@type': 'Question',
          name: 'Do you have neurosurgeons for brain tumor surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, experienced neurosurgeons provide evaluation and surgical treatment for brain tumors using advanced techniques.',
          },
        },

        {
          '@type': 'Question',
          name: 'Are migraine treatments affordable?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital offers cost-effective migraine diagnosis and treatment with a focus on long-term neurological care.',
          },
        },

        {
          '@type': 'Question',
          name: 'How is stroke recovery managed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stroke recovery is managed through neurological treatment combined with rehabilitation programs to restore mobility, balance and speech.',
          },
        },
      ],
    },
  ],
};
