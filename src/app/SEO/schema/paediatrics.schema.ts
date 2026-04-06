export const PAEDIATRICS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Paediatrics and Neonatology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-paediatric-hospital-in-bangalore',
      medicalSpecialty: 'Pediatrics',
      description:
        'Rashtrotthana Hospital provides advanced pediatric and neonatal care including newborn care, treatment for childhood illnesses, respiratory diseases and neonatal intensive care services.',

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
        'Newborn care',
        'Neonatal intensive care unit (NICU)',
        'Pediatric intensive care unit (PICU)',
        'Child vaccination and preventive care',
        'Treatment for fever, cold and cough in children',
        'Pediatric respiratory disease treatment',
        'Child growth and development monitoring',
      ],

      keywords: [
        'Best pediatric hospital in Bangalore',
        'Best pediatrician in Bangalore',
        'Children hospital in Bangalore',
        'Neonatology hospital in Bangalore',
        'Pediatric hospital in RR Nagar Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Dhanyatha Muninarayan',
      medicalSpecialty: 'Pediatrics',
      yearsOfExperience: '11',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Major (Dr.) Ashish S. Mallige',
      medicalSpecialty: 'Pediatrics',
      yearsOfExperience: '15',
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
          name: 'Best Paediatric Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-paediatric-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best pediatric hospital in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital is known for providing advanced pediatric and neonatal care with experienced pediatricians and modern treatment facilities.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who are the pediatricians at Rashtrotthana Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The pediatric team includes experienced doctors such as Dr. Dhanyatha Muninarayan and Major Dr. Ashish S. Mallige.',
          },
        },

        {
          '@type': 'Question',
          name: 'What pediatric treatments are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pediatric services include treatment for fever, cold, cough, stomach infections, respiratory conditions, child vaccination and neonatal care.',
          },
        },

        {
          '@type': 'Question',
          name: 'Does the hospital provide neonatal intensive care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Rashtrotthana Hospital provides Neonatal Intensive Care Unit (NICU) facilities for premature and high-risk newborns.',
          },
        },

        {
          '@type': 'Question',
          name: "Where can I find a children's hospital in RR Nagar Bangalore?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital provides comprehensive pediatric care for infants, children and adolescents in RR Nagar Bangalore.',
          },
        },

        {
          '@type': 'Question',
          name: 'Which hospital treats fever and cold in children?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pediatric specialists at Rashtrotthana Hospital provide effective treatment for fever, cold, cough and other childhood illnesses.',
          },
        },
      ],
    },
  ],
};
