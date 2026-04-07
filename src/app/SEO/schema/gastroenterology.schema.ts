export const GASTROENTEROLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Gastroenterology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-gastroenterology-hospital-in-bangalore',
      medicalSpecialty: 'Gastroenterology',
      description:
        'Rashtrotthana Hospital provides advanced gastroenterology care including treatment for stomach pain, acidity, liver disease, digestive disorders and endoscopic procedures.',

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
        'Stomach pain treatment',
        'Acidity and acid reflux treatment',
        'Liver disease treatment',
        'Endoscopy procedures',
        'Digestive disorder treatment',
        'Ulcer treatment',
        'Constipation and bloating treatment',
      ],

      keywords: [
        'Best gastroenterology hospital in Bangalore',
        'Best gastroenterologist in Bangalore',
        'Stomach specialist in Bangalore',
        'Liver specialist in Bangalore',
        'Endoscopy hospital in Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Man Mohan U. S',
      medicalSpecialty: 'Gastroenterology',
      yearsOfExperience: '10',
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
          name: 'Best Gastroenterology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-gastroenterology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best gastroenterologist in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Man Mohan U. S is an experienced gastroenterologist at Rashtrotthana Hospital treating digestive disorders such as stomach pain, acidity, liver diseases and gastritis.',
          },
        },

        {
          '@type': 'Question',
          name: 'Where can I find treatment for stomach pain in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides expert diagnosis and treatment for stomach pain, digestive disorders and gastric problems.',
          },
        },

        {
          '@type': 'Question',
          name: 'What causes stomach pain and when should I see a doctor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stomach pain can be caused by gastritis, ulcers, infections, acidity, constipation or liver disease. Severe or recurring abdominal pain should be evaluated by a gastroenterologist.',
          },
        },

        {
          '@type': 'Question',
          name: 'Where can I find a stomach specialist in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Man Mohan U. S at Rashtrotthana Hospital provides specialized care for stomach disorders, acidity and digestive diseases.',
          },
        },

        {
          '@type': 'Question',
          name: 'What is the best treatment for acidity and gastric problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Treatment may include medications, dietary changes, lifestyle modifications or endoscopic procedures depending on the cause of the condition.',
          },
        },

        {
          '@type': 'Question',
          name: 'Where can I find treatment for liver disease in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides treatment for liver diseases such as fatty liver, hepatitis, jaundice and liver infections.',
          },
        },

        {
          '@type': 'Question',
          name: 'What is laparoscopic surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laparoscopic surgery is a minimally invasive surgical technique used to treat conditions such as gallstones, hernia and digestive disorders.',
          },
        },

        {
          '@type': 'Question',
          name: 'What are the symptoms of acidity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Symptoms of acidity include heartburn, chest discomfort, bloating, nausea and acid reflux.',
          },
        },

        {
          '@type': 'Question',
          name: 'Where can I get endoscopy treatment in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides advanced endoscopy procedures for diagnosing and treating digestive disorders.',
          },
        },
      ],
    },
  ],
};
