export const TKR_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Total Knee Replacement Surgery',
      url: 'https://www.rashtrotthanahospital.com/total-knee-replacement-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Orthopedic',
      bodyLocation: 'Knee',
      description:
        'Total knee replacement surgery is performed to replace a damaged knee joint with artificial implants to restore mobility and relieve severe knee pain.',

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
        'Traditional total knee replacement surgery',
        'Minimally invasive knee replacement surgery',
        'Robotic-assisted knee replacement surgery',
      ],

      indication: [
        'Severe knee arthritis',
        'Chronic knee pain',
        'Joint degeneration',
        'Loss of knee mobility',
        'Severe knee injury',
      ],

      followup:
        'Post-operative physiotherapy, rehabilitation and regular follow-up consultations help restore knee strength and mobility.',
    },

    {
      '@type': 'Physician',
      name: 'Dr. Mahesh Kulkarni',
      medicalSpecialty: 'Orthopedic Surgery',
      yearsOfExperience: '16',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-kulkarni',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Sujayendra D. M',
      medicalSpecialty: 'Orthopedic Surgery',
      yearsOfExperience: '13',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sujayendra-d-m',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Nikhil Hegde',
      medicalSpecialty: 'Orthopedic Surgery',
      yearsOfExperience: '8',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nikhil-hegde',
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
          name: 'Orthopedics',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-orthopaedics-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Total Knee Replacement Surgery',
          item: 'https://www.rashtrotthanahospital.com/total-knee-replacement-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Total Knee Replacement Surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Total knee replacement surgery replaces damaged parts of the knee joint with artificial implants to restore movement and reduce severe pain.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is the best doctor for knee replacement surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Experienced orthopedic surgeons such as Dr. Nikhil Hegde and Dr. Sujayendra at Rashtrotthana Hospital perform advanced knee replacement surgeries.',
          },
        },

        {
          '@type': 'Question',
          name: 'Which is the best hospital for knee replacement in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital in RR Nagar Bangalore provides advanced knee replacement surgery with experienced orthopedic specialists and modern surgical facilities.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does a total knee replacement surgery take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A typical total knee replacement surgery usually takes about 1 to 2 hours depending on the patient's condition and surgical complexity.",
          },
        },

        {
          '@type': 'Question',
          name: 'What is the recovery time after knee replacement surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients can resume normal daily activities within 6 to 12 weeks with proper physiotherapy and post-operative care.',
          },
        },
      ],
    },
  ],
};
