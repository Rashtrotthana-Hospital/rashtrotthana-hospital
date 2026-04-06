export const ONCOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Oncology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-oncology-hospital-in-bangalore',
      medicalSpecialty: 'Oncology',
      description:
        'Rashtrotthana Hospital provides comprehensive cancer care including diagnosis, screening and treatment for various types of cancers with a multidisciplinary oncology team.',

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
        'Cancer diagnosis and screening',
        'Breast cancer treatment',
        'Lung cancer treatment',
        'Blood cancer treatment',
        'Oral cancer treatment',
        'Liver cancer treatment',
        'Colorectal cancer treatment',
        'Prostate cancer treatment',
        'Cancer counseling and support care',
      ],

      keywords: [
        'Best oncology hospital in Bangalore',
        'Best cancer hospital in Bangalore',
        'Cancer specialist in Bangalore',
        'Oncologist in Bangalore',
        'Cancer treatment hospital Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Shekar Patil',
      medicalSpecialty: 'Medical Oncology',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Pramod S. Chinder',
      medicalSpecialty: 'Orthopaedic Oncology',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Ravi T',
      medicalSpecialty: 'Oncology',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. G. V. Giri',
      medicalSpecialty: 'Oncology',
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
          name: 'Best Oncology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-oncology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What types of cancer do you treat at Rashtrotthana Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hospital provides diagnosis and treatment for breast, lung, cervical, skin, blood, oral, liver, colorectal and prostate cancers.',
          },
        },

        {
          '@type': 'Question',
          name: 'What symptoms should prompt a cancer screening?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Symptoms such as unexplained weight loss, persistent fatigue, abnormal bleeding, lumps, prolonged cough or non-healing sores should be evaluated by an oncologist.',
          },
        },

        {
          '@type': 'Question',
          name: 'How is cancer diagnosed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diagnosis may include physical examination, imaging tests such as CT or MRI scans, blood investigations and biopsy to confirm the presence and stage of cancer.',
          },
        },

        {
          '@type': 'Question',
          name: 'Do you provide specialized cancer programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, specialized programs are available for cancers such as breast cancer, blood cancer and oral cancer with targeted diagnostic and treatment protocols.',
          },
        },

        {
          '@type': 'Question',
          name: 'What support services are available for cancer patients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Support services include psychological counseling, nutrition guidance, pain management and patient education programs.',
          },
        },

        {
          '@type': 'Question',
          name: 'Do you conduct cancer awareness or screening programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the hospital conducts awareness campaigns and screening programs for cancers such as breast, cervical and colorectal cancer.',
          },
        },

        {
          '@type': 'Question',
          name: 'How can I book an appointment with an oncologist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appointments can be booked through the hospital website or by calling 080 6923 9999.',
          },
        },

        {
          '@type': 'Question',
          name: 'Why choose Rashtrotthana Hospital for cancer care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hospital provides experienced oncologists, advanced diagnostics, multidisciplinary care and compassionate patient support for comprehensive cancer treatment.',
          },
        },
      ],
    },
  ],
};
