export const TONSILLECTOMY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Tonsillectomy Surgery',
      url: 'https://www.rashtrotthanahospital.com/tonsillectomy-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Otolaryngology',
      bodyLocation: 'Tonsils',
      description:
        'Tonsillectomy is a surgical procedure to remove the tonsils, usually performed to treat recurrent throat infections, chronic tonsillitis or breathing difficulties caused by enlarged tonsils.',

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
        'Traditional tonsillectomy surgery',
        'Electrocautery tonsil removal',
        'Coblation tonsillectomy',
        'Minimally invasive tonsil surgery',
      ],

      indication: [
        'Recurrent tonsillitis',
        'Chronic throat infections',
        'Obstructive sleep apnea due to enlarged tonsils',
        'Difficulty swallowing',
        'Breathing problems caused by tonsil enlargement',
      ],

      followup:
        'Patients are advised rest, medications and follow-up consultations to ensure proper healing after tonsillectomy.',
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
    //     name: 'Rashtrotthana Hospital',
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
        name: 'Rashtrotthana Hospital',
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
          name: 'ENT',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-ent-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tonsillectomy Surgery',
          item: 'https://www.rashtrotthanahospital.com/tonsillectomy-surgery-in-bangalore',
        },
      ],
    },
  ],
};
