export const KIDNEY_STONE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Kidney Stone Removal Surgery',
      url: 'https://www.rashtrotthanahospital.com/kidney-stone-surgery-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Urology',
      bodyLocation: 'Kidney',
      description:
        'Kidney stone surgery is performed to remove stones from the kidney or urinary tract using advanced techniques such as laser lithotripsy, RIRS and minimally invasive urological procedures.',

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
        'Laser kidney stone removal (RIRS)',
        'Ureteroscopy (URS)',
        'Percutaneous nephrolithotomy (PCNL)',
        'Minimally invasive kidney stone surgery',
      ],

      indication: [
        'Severe kidney stone pain',
        'Urinary blockage due to stones',
        'Recurrent kidney stones',
        'Kidney infection caused by stones',
        'Large kidney stones that cannot pass naturally',
      ],

      followup:
        'Patients are advised hydration, dietary changes and regular follow-up consultations to prevent kidney stone recurrence.',
    },

    {
      '@type': 'Physician',
      name: 'Dr. Nagaraj Rao',
      medicalSpecialty: 'Urology',
      yearsOfExperience: '27',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nagaraj-rao',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Madhu S. N',
      medicalSpecialty: 'Urology',
      yearsOfExperience: '15',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-madhu-s-n',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
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
          name: 'Urology',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-urology-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Kidney Stone Surgery',
          item: 'https://www.rashtrotthanahospital.com/kidney-stone-surgery-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is kidney stone surgery needed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kidney stone surgery is recommended when stones cause severe pain, infection, blockage or do not pass naturally with medication.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is laser kidney stone surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Laser kidney stone removal using RIRS is a safe and widely used procedure when performed by experienced urologists.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery take after kidney stone surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients resume normal activities within a few days after minimally invasive laser kidney stone procedures.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will kidney stones come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Surgery removes existing stones but lifestyle changes, hydration and medical advice help reduce recurrence.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is DJ stenting painful?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A DJ stent is temporary and may cause mild discomfort which usually resolves after the stent is removed.',
          },
        },
      ],
    },
  ],
};
