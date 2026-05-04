export const ADENOIDECTOMY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Adenoidectomy Surgery',
      url: 'https://www.rashtrotthanahospital.com/adenoidectomy-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Otolaryngology',
      bodyLocation: 'Adenoids',
      description:
        'Adenoidectomy is a surgical procedure performed to remove enlarged or infected adenoids that cause breathing problems, recurrent infections or sleep disturbances.',

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
        'Endoscopic adenoidectomy surgery',
        'Minimally invasive adenoid removal',
        'Microdebrider adenoidectomy',
      ],

      indication: [
        'Enlarged adenoids',
        'Chronic nasal blockage',
        'Recurrent ear infections',
        'Sleep apnea in children',
        'Breathing difficulties',
      ],

      followup:
        'Patients are advised rest, medications and follow-up consultations to ensure proper healing after adenoidectomy.',
    },

    // {
    //   '@type': 'Physician',
    //   name: 'Dr. Manasa N. A',
    //   medicalSpecialty: 'ENT',
    //   yearsOfExperience: '16',
    //   url: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-n-a',
    //   affiliation: {
    //     '@type': 'Hospital',
    //     name: 'Rashtrotthana Hospital',
    //   },
    // },

    // {
    //   '@type': 'Physician',
    //   name: 'Dr. Narendranath A',
    //   medicalSpecialty: 'ENT',
    //   yearsOfExperience: '11',
    //   url: 'https://www.rashtrotthanahospital.com/doctor/dr-narendranath-a',
    //   affiliation: {
    //     '@type': 'Hospital',
    //     name: 'Rashtrotthanahospital',
    //   },
    // },

    {
      '@type': 'Physician',
      name: 'Dr. Sunil Kumar C',
      medicalSpecialty: 'ENT',
      yearsOfExperience: '14',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sunil-kumar-c',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthanahospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Sandhya S. Patil',
      medicalSpecialty: 'ENT',
      yearsOfExperience: '12',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil',
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
          name: 'ENT',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-ent-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Adenoidectomy Surgery',
          item: 'https://www.rashtrotthanahospital.com/adenoidectomy-surgery-in-bangalore',
        },
      ],
    },
  ],
};
