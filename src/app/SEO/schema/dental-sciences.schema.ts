export const DENTAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Dental Sciences Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-dental-hospital-in-bangalore',
      medicalSpecialty: 'Dentistry',
      description:
        'Rashtrotthana Hospital provides advanced dental care including root canal treatment, teeth cleaning, orthodontic braces and treatment for gum diseases.',

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
        'Root canal treatment',
        'Dental cavity treatment',
        'Professional teeth cleaning',
        'Orthodontic braces treatment',
        'Gum disease treatment',
        'Dental laser treatment',
        'Tooth pain diagnosis and treatment',
      ],

      keywords: [
        'Best dental hospital in Bangalore',
        'Best dentist in Bangalore',
        'Root canal treatment Bangalore',
        'Dental clinic in RR Nagar Bangalore',
        'Orthodontist in Bangalore',
      ],
    },

    {
      '@type': 'Dentist',
      name: 'Dr. H. N. Shyla',
      medicalSpecialty: 'Dentistry',
      yearsOfExperience: '27',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Dentist',
      name: 'Dr. Sushmitha Raj R',
      medicalSpecialty: 'Dentistry',
      yearsOfExperience: '7',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Dentist',
      name: 'Dr. Geethanjali K. G',
      medicalSpecialty: 'Dentistry',
      yearsOfExperience: '18',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Dentist',
      name: 'Dr. Vishnuvardhan V',
      medicalSpecialty: 'Orthodontics',
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
          name: 'Best Dental Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-dental-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What causes recurring tooth pain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recurring tooth pain may be caused by tooth decay, infection or nerve damage. Treatment may include cavity treatment, root canal therapy or dental restoration.',
          },
        },

        {
          '@type': 'Question',
          name: 'How often should I get my teeth cleaned?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dentists usually recommend professional teeth cleaning every six months to remove plaque and maintain good oral health.',
          },
        },

        {
          '@type': 'Question',
          name: 'What braces options are available for teeth alignment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Orthodontic treatment may include metal braces, ceramic braces or invisible aligners depending on the patient's dental condition.",
          },
        },

        {
          '@type': 'Question',
          name: 'Which is the best dental hospital in RR Nagar for root canal treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides advanced root canal treatment and dental care with experienced dentists and modern diagnostic tools.',
          },
        },

        {
          '@type': 'Question',
          name: 'Do you offer laser treatment for dental cavities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, laser dental treatment can be used for cavity treatment providing a more precise and comfortable experience.',
          },
        },

        {
          '@type': 'Question',
          name: 'What are the signs of gum disease?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include swollen gums, bleeding gums, gum pain and plaque buildup around teeth.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is Rashtrotthana Hospital good for root canal treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the hospital provides advanced root canal treatment and comprehensive dental care with experienced dental specialists.',
          },
        },
      ],
    },
  ],
};
