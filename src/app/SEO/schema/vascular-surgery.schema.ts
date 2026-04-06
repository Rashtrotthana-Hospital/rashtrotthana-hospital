export const VASCULAR_SURGERY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Vascular Surgery Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-vascular-surgery-hospital-in-bangalore',
      medicalSpecialty: 'Vascular Surgery',
      description:
        'Rashtrotthana Hospital provides advanced vascular surgery services including treatment for varicose veins, peripheral artery disease, aneurysms and other vascular disorders.',

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
        'Varicose vein treatment',
        'Peripheral artery disease treatment',
        'Aneurysm repair surgery',
        'Endovascular surgery',
        'Angioplasty procedures',
        'Blood vessel reconstruction surgery',
        'Vascular disease diagnosis and treatment',
      ],

      keywords: [
        'Best vascular surgeon in Bangalore',
        'Vascular surgery hospital in Bangalore',
        'Varicose vein treatment Bangalore',
        'Peripheral artery disease treatment Bangalore',
        'Endovascular surgery Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Vivekanand',
      medicalSpecialty: 'Vascular Surgery',
      yearsOfExperience: '26',
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
          name: 'Best Vascular Surgery Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-vascular-surgery-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a vascular surgeon and a cardiologist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cardiologists treat heart-related diseases while vascular surgeons treat diseases of arteries, veins and lymphatic vessels outside the heart and perform surgical procedures when needed.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long is recovery after vascular surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recovery time depends on the procedure and patient health. Minimally invasive procedures often allow faster recovery while open surgeries may require several weeks.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can lifestyle changes reduce the need for vascular surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Healthy habits such as quitting smoking, maintaining a balanced diet, controlling blood pressure and regular physical activity can help reduce vascular disease risk.',
          },
        },

        {
          '@type': 'Question',
          name: 'Are there alternatives to vascular surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In some cases medications, compression therapy, exercise and dietary changes may help manage vascular conditions before surgery is considered.',
          },
        },

        {
          '@type': 'Question',
          name: 'When should I consult a vascular surgeon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Symptoms such as leg pain while walking, visible varicose veins, numbness in limbs, non-healing wounds or known aneurysms should be evaluated by a vascular surgeon.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best vascular surgeon in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Vivekanand is a senior vascular surgeon at Rashtrotthana Hospital with extensive experience in open and endovascular procedures.',
          },
        },
      ],
    },
  ],
};
