export const PULMONOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Pulmonology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-pulmonology-hospital-in-bangalore',
      medicalSpecialty: 'Pulmonology',
      description:
        'Rashtrotthana Hospital provides advanced pulmonology care including treatment for asthma, COPD, tuberculosis, chronic cough and other respiratory diseases.',

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

      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },

      availableService: [
        'Asthma treatment',
        'COPD treatment',
        'Tuberculosis treatment',
        'Chronic cough treatment',
        'Pulmonary function testing',
        'Breathing difficulty treatment',
        'Respiratory infection management',
      ],

      keywords: [
        'Best pulmonologist in Bangalore',
        'Pulmonology hospital in Bangalore',
        'Lung specialist in Bangalore',
        'COPD treatment hospital Bangalore',
        'TB treatment hospital Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Kolla Vinod',
      medicalSpecialty: 'Pulmonology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-kolla-vinod',
      yearsOfExperience: '20',
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
          name: 'Best Pulmonology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-pulmonology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the common symptoms of lung diseases?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common symptoms of lung diseases include chronic cough, wheezing, breathlessness, chest congestion and recurrent respiratory infections.',
          },
        },

        {
          '@type': 'Question',
          name: 'How is COPD diagnosed and treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'COPD is diagnosed using lung function tests, spirometry and imaging. Treatment includes inhalers, medication, pulmonary rehabilitation and lifestyle changes.',
          },
        },

        {
          '@type': 'Question',
          name: 'What is the best treatment for chronic cough?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Chronic cough treatment depends on the underlying cause such as asthma, COPD, lung infections or acid reflux.',
          },
        },

        {
          '@type': 'Question',
          name: 'When should I see a doctor for breathing difficulties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you experience shortness of breath, wheezing, chest tightness or breathing difficulty, consult a pulmonologist immediately.',
          },
        },

        {
          '@type': 'Question',
          name: 'What treatments are available for tuberculosis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tuberculosis treatment includes antibiotic therapy, lung function monitoring and supportive care.',
          },
        },

        {
          '@type': 'Question',
          name: 'How can I prevent lung infections and respiratory diseases?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prevent lung diseases by avoiding smoking, maintaining good hygiene, avoiding allergens and getting vaccinated against flu and pneumonia.',
          },
        },

        {
          '@type': 'Question',
          name: 'What are the symptoms of tuberculosis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Symptoms of tuberculosis include persistent cough for more than three weeks, chest pain, breathing difficulty, weight loss, fatigue, fever, night sweats and coughing up blood.',
          },
        },
      ],
    },
  ],
};
