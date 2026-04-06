export const UROLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Urology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-urology-hospital-in-bangalore',
      medicalSpecialty: 'Urology',
      description:
        'Rashtrotthana Hospital provides advanced urology care including kidney stone treatment, genito-urinary reconstruction surgery, prostate treatment and minimally invasive urological procedures.',

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
        'Kidney stone treatment',
        'Genito-urinary reconstruction surgery',
        'Prostate disorder treatment',
        'Bladder disorder treatment',
        'Urethral stricture treatment',
        'Minimally invasive urological surgery',
        'Laser kidney stone surgery',
      ],

      keywords: [
        'Best urology hospital in Bangalore',
        'Best urologist in Bangalore',
        'Kidney stone treatment hospital Bangalore',
        'Urology specialist in Bangalore',
        'Laser kidney stone surgery Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Dr. Nagaraj Rao',
      medicalSpecialty: 'Urology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nagaraj-rao',
      yearsOfExperience: '27',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Madhu S. N',
      medicalSpecialty: 'Urology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-madhu-s-n',
      yearsOfExperience: '15',
      affiliation: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
      },
    },

    {
      '@type': 'Physician',
      name: 'Dr. Mahesh M',
      medicalSpecialty: 'Urology',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-m',
      yearsOfExperience: '25',
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
          name: 'Best Urology Hospital in Bangalore',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-urology-hospital-in-bangalore',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is genito-urinary reconstruction surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Genito-urinary reconstruction surgery focuses on repairing or rebuilding parts of the urinary or reproductive system that are damaged by disease, injury or congenital abnormalities.',
          },
        },

        {
          '@type': 'Question',
          name: 'Who is a candidate for genito-urinary reconstruction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Candidates include patients with congenital abnormalities, trauma to the urinary system or those who require reconstruction after cancer surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'Is genito-urinary reconstruction a major surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The complexity of the surgery depends on the condition being treated. Many procedures can be performed using advanced minimally invasive techniques.',
          },
        },

        {
          '@type': 'Question',
          name: 'What conditions can genito-urinary reconstruction treat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It can treat conditions such as urethral strictures, bladder exstrophy, penile deformities and injuries affecting the kidneys, bladder and urethra.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery take after urological surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Recovery time varies depending on the procedure and the patient's health condition. Doctors provide personalized recovery plans to support healing.",
          },
        },

        {
          '@type': 'Question',
          name: 'What technologies are used for urology diagnosis and treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Advanced technologies such as endoscopic and laser treatments are used for diagnosing and treating conditions like kidney stones and other urological disorders.',
          },
        },
      ],
    },
  ],
};
