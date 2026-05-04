export const ENT_SCHEMAS = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'ENT (Ear Nose Throat) Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-ent-hospital-in-bangalore',
      medicalSpecialty: 'Otolaryngology',
      description:
        'Rashtrotthana Hospital provides advanced ENT treatment including sinus surgery, ear surgery, hearing loss treatment, snoring treatment and head and neck care.',
      provider: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
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
        'Endoscopic sinus surgery',
        'FESS surgery',
        'Mastoidectomy',
        'Tympanoplasty',
        'Adenoidectomy',
        'Tonsillectomy',
        'Nasal septum correction surgery',
        'Snoring treatment',
        'Hearing loss treatment',
        'Cochlear implant surgery',
      ],

      keywords: [
        'Best ENT hospital in Bangalore',
        'Best ENT doctor in Bangalore',
        'Sinus surgery hospital in Bangalore',
        'Ear nose throat specialist Bangalore',
        'ENT hospital in RR Nagar Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Sunil Kumar C',
      medicalSpecialty: 'Otolaryngology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sunil-kumar-c',
      yearsOfExperience: '14',
    },

    // {
    //   '@type': 'Physician',
    //   name: 'Dr. Narendranath A',
    //   medicalSpecialty: 'Otolaryngology',
    //   url: 'https://www.rashtrotthanahospital.com/doctor/dr-narendranath-a',
    //   yearsOfExperience: '11',
    // },

    // {
    //   '@type': 'Physician',
    //   name: 'Dr. Manasa N. A',
    //   medicalSpecialty: 'Otolaryngology',
    //   url: 'https://www.rashtrotthanahospital.com/doctor/dr-manasa-n-a',
    //   yearsOfExperience: '16',
    // },

    {
      '@type': 'Physician',
      name: 'Dr. Sandhya S. Patil',
      medicalSpecialty: 'Otolaryngology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-sandhya-s-patil',
      yearsOfExperience: '12',
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
          name: 'Best ENT Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-ent-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who are the best ENT specialists in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rashtrotthana Hospital has experienced ENT specialists including Dr. Sunil Kumar who treat ear, nose and throat conditions using advanced medical and surgical techniques.',
          },
        },

        {
          '@type': 'Question',
          name: 'Why is Rashtrotthana Hospital considered one of the best ENT hospitals in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hospital offers comprehensive ENT care including sinus surgery, snoring treatment, throat care and nasal treatments supported by modern equipment and experienced doctors.',
          },
        },

        {
          '@type': 'Question',
          name: 'What treatments are available for ear pain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ENT specialists treat ear pain caused by conditions like infections, tinnitus and hearing issues using procedures such as mastoidectomy, ear tube surgery and micro ear surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who treats sinus infections in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Sunil Kumar provides advanced treatment for sinus infections including endoscopic sinus surgery and functional endoscopic sinus surgery (FESS).',
          },
        },

        {
          '@type': 'Question',
          name: 'Can throat conditions like chronic cough be treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, ENT specialists treat throat conditions such as chronic cough, tonsillitis, sore throat and throat cancer with advanced medical and surgical treatments.',
          },
        },

        {
          '@type': 'Question',
          name: 'What treatments are available for nasal blockage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ENT specialists provide treatment for nasal blockage, nasal congestion and nasal polyps including nasal septum correction surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'What advanced ENT surgeries are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Advanced ENT procedures include endoscopic sinus surgery, tracheotomy, adenoidectomy, tonsillectomy, mastoidectomy and tympanoplasty.',
          },
        },

        {
          '@type': 'Question',
          name: 'How is hearing loss treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Hearing loss can be treated using cochlear implants, micro ear surgery and personalized treatment plans depending on the patient's condition.",
          },
        },

        {
          '@type': 'Question',
          name: 'Who provides snoring treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Sunil Kumar specializes in snoring and obstructive sleep apnea treatment using advanced diagnostic tools and customized therapies.',
          },
        },
      ],
    },
  ],
};
