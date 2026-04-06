export const OPHTHALMOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Ophthalmology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-eye-hospital-in-bangalore',
      medicalSpecialty: 'Ophthalmology',
      description:
        'Rashtrotthana Hospital provides comprehensive ophthalmology services including cataract evaluation, glaucoma screening, diabetic retina checkups and pediatric eye care.',

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
        'Comprehensive eye examinations',
        'Cataract evaluation',
        'Glaucoma screening',
        'Diabetic retinopathy screening',
        'Pediatric eye care',
        'Macular degeneration screening',
        'Treatment for eye infections and allergies',
      ],

      keywords: [
        'Best eye hospital in Bangalore',
        'Best ophthalmologist in Bangalore',
        'Eye specialist in Bangalore',
        'Eye doctor in RR Nagar Bangalore',
        'Diabetic eye screening Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Sowmya S. Bhat',
      medicalSpecialty: 'Ophthalmology',
      yearsOfExperience: '16',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Dona Susan John',
      medicalSpecialty: 'Ophthalmology',
      yearsOfExperience: '21',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Sushma A',
      medicalSpecialty: 'Ophthalmology',
      yearsOfExperience: '12',
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
          name: 'Best Eye Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-eye-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What age is best for a pediatric eye checkup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eye screenings are recommended at 6 months, 3 years and 4 to 5 years. Earlier evaluation is advised if a child shows symptoms such as eye pain, itching or frequent blinking.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is glaucoma screening necessary without symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Glaucoma screening is recommended from age 40 or earlier if there is a family history of glaucoma or diabetes.',
          },
        },

        {
          '@type': 'Question',
          name: 'What are the symptoms of cataracts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common symptoms include cloudy vision, glare at night, eye discomfort and difficulty seeing clearly in bright light.',
          },
        },

        {
          '@type': 'Question',
          name: 'How often should diabetic patients have retina checks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diabetic patients should undergo retinal examinations at least once a year to detect diabetic retinopathy early.',
          },
        },

        {
          '@type': 'Question',
          name: 'What causes red eyes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Red eyes may occur due to allergies, infections, dryness or irritation and require proper diagnosis by an ophthalmologist.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can macular degeneration be treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Macular degeneration cannot be reversed but early detection and management can slow disease progression.',
          },
        },

        {
          '@type': 'Question',
          name: 'What helps with itchy or watery eyes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Avoid allergens, limit screen time and use prescribed eye drops. Persistent symptoms should be evaluated by an eye specialist.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best eye doctor in RR Nagar Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital has experienced ophthalmologists including Dr. Sowmya S. Bhat who provide comprehensive eye care services.',
          },
        },
      ],
    },
  ],
};
