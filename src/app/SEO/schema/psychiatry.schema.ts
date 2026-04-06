export const PSYCHIATRY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Psychiatry Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-pshychiatry-hospital-in-bangalore',
      medicalSpecialty: 'Psychiatry',
      description:
        'Rashtrotthana Hospital provides comprehensive mental health care including treatment for depression, anxiety, stress disorders and psychological counseling.',

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
        'Depression treatment',
        'Anxiety disorder treatment',
        'Stress management therapy',
        'Cognitive Behavioral Therapy (CBT)',
        'Family counseling',
        'Psychological evaluation',
        'Mental health consultation',
      ],

      keywords: [
        'Best psychiatrist in Bangalore',
        'Psychiatry hospital in Bangalore',
        'Mental health doctor Bangalore',
        'Depression treatment Bangalore',
        'Psychologist in RR Nagar Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Gopal Das C M',
      medicalSpecialty: 'Psychiatry',
      yearsOfExperience: '15',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Dhruva Ithal',
      medicalSpecialty: 'Psychiatry',
      yearsOfExperience: '15',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Psychologist',
      name: 'Ms. Samarchitha S',
      yearsOfExperience: '6',
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
          name: 'Best Psychiatry Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-pshychiatry-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is mental health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mental health refers to emotional, psychological and social well-being that affects how individuals think, feel and respond to stress.',
          },
        },

        {
          '@type': 'Question',
          name: 'How do I know if I need psychiatric help?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Persistent sadness, anxiety, mood swings or sleep problems may indicate the need for professional mental health evaluation.',
          },
        },

        {
          '@type': 'Question',
          name: 'What causes mental health problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mental health problems may arise due to genetic factors, trauma, stress, chemical imbalances or environmental influences.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can mental health issues be treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most mental health conditions can be effectively managed through therapy, medication and supportive care.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is therapy effective for anxiety and depression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Therapies such as Cognitive Behavioral Therapy are highly effective in managing anxiety, depression and stress disorders.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will medication always be necessary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not always. Treatment is personalized and may include therapy alone or a combination of therapy and medication.',
          },
        },

        {
          '@type': 'Question',
          name: 'How can I improve my mental health naturally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Healthy sleep habits, physical activity, balanced nutrition and mindfulness practices help improve mental well-being.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best psychiatrist in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Gopal Das C M is a senior consultant psychiatrist at Rashtrotthana Hospital known for treating depression, anxiety and mood disorders.',
          },
        },
      ],
    },
  ],
};
