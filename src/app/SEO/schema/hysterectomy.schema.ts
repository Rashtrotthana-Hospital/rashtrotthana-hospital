export const HYSTERECTOMY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Hysterectomy Surgery',
      url: 'https://www.rashtrotthanahospital.com/hysterectomy-surgery-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Gynecology',
      bodyLocation: 'Uterus',
      description:
        'Hysterectomy is a surgical procedure performed to remove the uterus for conditions such as fibroids, heavy bleeding, pelvic pain and uterine disorders.',

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
        'Laparoscopic hysterectomy',
        'Abdominal hysterectomy',
        'Vaginal hysterectomy',
        'Minimally invasive gynecologic surgery',
      ],

      indication: [
        'Uterine fibroids',
        'Heavy menstrual bleeding',
        'Chronic pelvic pain',
        'Endometriosis',
        'Uterine prolapse',
        'Gynecologic cancers',
      ],

      followup:
        'Post-operative recovery includes rest, medication and follow-up consultations with the gynecologist.',
    },

    {
      '@type': 'Physician',
      name: 'Dr. Latha Venkataram',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '35',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-latha-venkataram',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Prakruthi',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '19',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-prakruthi',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Neelam Saraswat',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '12',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-neelam-saraswat',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Vinita Udupa',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '10',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-vinita-udupa',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Ashwitha Gundmi',
      medicalSpecialty: 'Obstetrics and Gynecology',
      yearsOfExperience: '9',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-ashwitha-gundmi',
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
          name: 'Gynecology',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Hysterectomy Surgery',
          item: 'https://www.rashtrotthanahospital.com/hysterectomy-surgery-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is hysterectomy surgery recommended?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hysterectomy may be recommended when fibroids, heavy bleeding, pelvic pain or uterine conditions do not respond to other treatments.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is hysterectomy surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, hysterectomy is a safe and commonly performed procedure when performed by experienced gynecologists.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery take after hysterectomy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recovery time depends on the type of surgery but many patients return to normal activities within a few weeks.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will hysterectomy affect hormonal balance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hormonal changes depend on whether the ovaries are removed. Your doctor will explain the possible effects before surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will there be scars after hysterectomy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Minimally invasive hysterectomy procedures usually result in very small or minimal scars.',
          },
        },
      ],
    },
  ],
};
