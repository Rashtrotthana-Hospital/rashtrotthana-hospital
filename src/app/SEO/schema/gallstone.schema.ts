export const GALLSTONE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Gallstone Removal Surgery',
      url: 'https://www.rashtrotthanahospital.com/gallbladder-removal-surgery-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Gallbladder',
      description:
        'Gallstone removal surgery (laparoscopic cholecystectomy) is performed to remove the gallbladder when gallstones cause pain, infection or digestive complications.',
      keywords: [
        'Gallstone removal surgery in Bangalore',
        'Best gallbladder surgery hospital in Bangalore',
        'Laparoscopic gallbladder surgery Bangalore',
        'Gallstone treatment hospital in Bangalore',
        'Gallbladder removal surgery Bangalore',
      ],
      howPerformed: [
        'Laparoscopic gallbladder removal surgery',
        'Minimally invasive cholecystectomy',
        'Post-surgery recovery and dietary guidance',
      ],
      indication: [
        'Gallstones causing abdominal pain',
        'Gallbladder inflammation (cholecystitis)',
        'Gallstone pancreatitis',
        'Digestive complications caused by gallstones',
      ],
      followup:
        'Post-operative care includes dietary guidance, follow-up consultations and recovery monitoring.',
      provider: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com/',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'RR Nagar',
          addressRegion: 'Karnataka',
          addressCountry: 'India',
        },
      },
      performedBy: [
        {
          '@type': 'Physician',
          name: 'Dr. Atmaram D. C',
          medicalSpecialty: 'General Surgery',
          url: 'https://www.rashtrotthanahospital.com/doctor/dr-atmaram-d-c',
          yearsOfExperience: '20',
        },
        {
          '@type': 'Physician',
          name: 'Dr. Nishanth Lakshmikantha',
          medicalSpecialty: 'General & GI Surgery',
          url: 'https://www.rashtrotthanahospital.com/doctor/dr-nishanth-lakshmikantha',
          yearsOfExperience: '10',
        },
      ],
    },

    {
      '@type': 'Offer',
      name: 'Gallstone Removal Surgery Package',
      availability: 'https://schema.org/InStock',
      url: 'https://www.rashtrotthanahospital.com/gallbladder-removal-surgery-bangalore',
      description:
        'The cost of gallbladder removal surgery depends on surgical technique, patient condition and hospital stay.',
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
          name: 'General Surgery',
          item: 'https://www.rashtrotthanahospital.com/general-surgery-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gallstone Removal Surgery',
          item: 'https://www.rashtrotthanahospital.com/gallbladder-removal-surgery-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is gallstone removal surgery needed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gallstone surgery is advised when stones cause pain, infection, inflammation or repeated digestive problems that do not improve with medication.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is gallstone surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, laparoscopic gallstone removal is a safe and commonly performed procedure when done by experienced surgeons.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery take after gallbladder surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients return to normal activities within 7 to 10 days after laparoscopic gallbladder surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can gallstones come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once the gallbladder is removed, gallstones do not recur.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will digestion be affected after gallbladder removal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most people digest food normally after recovery, although minor temporary dietary adjustments may be needed.',
          },
        },
      ],
    },
  ],
};
