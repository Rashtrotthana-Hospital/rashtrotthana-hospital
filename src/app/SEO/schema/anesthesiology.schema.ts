export const ANESTHESIOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalService',
      name: 'Anesthesiology Department',
      url: 'https://www.rashtrotthanahospital.com/specialities/best-anesthesiology-hospital-in-india',
      medicalSpecialty: 'Anesthesiology',
      description:
        'Rashtrotthana Hospital provides safe and advanced anesthesia services for surgical procedures including general anesthesia, regional anesthesia and postoperative pain management.',

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
        'General anesthesia administration',
        'Regional anesthesia procedures',
        'Local anesthesia for minor procedures',
        'Pre-anesthesia evaluation',
        'Intraoperative anesthesia monitoring',
        'Postoperative pain management',
        'Critical care anesthesia support',
      ],

      keywords: [
        'Best anesthesiologist in Bangalore',
        'Anesthesia doctor in Bangalore',
        'Anesthesia services Bangalore',
        'Anesthesiology hospital Bangalore',
        'Surgery anesthesia specialist Bangalore',
      ],
    },

    {
      '@type': 'Physician',
      name: 'Col (Dr) Anand Shankar K',
      medicalSpecialty: 'Anesthesiology',
      yearsOfExperience: '32',
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
          name: 'Best Anesthesiology Hospital in India',
          item: 'https://www.rashtrotthanahospital.com/specialities/best-anesthesiology-hospital-in-india',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the different types of anesthesia used in surgeries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common types include general anesthesia, regional anesthesia and local anesthesia. The type used depends on the surgical procedure and patient condition.',
          },
        },

        {
          '@type': 'Question',
          name: 'How is anesthesia administered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anesthesia may be administered through inhalation, intravenous injection or regional nerve blocks depending on the surgery.',
          },
        },

        {
          '@type': 'Question',
          name: 'What happens during a pre-anesthesia consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'During the consultation, the anesthesiologist reviews your medical history, discusses anesthesia options and explains the procedure and safety precautions.',
          },
        },

        {
          '@type': 'Question',
          name: 'Are there risks associated with anesthesia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modern anesthesia is generally safe but potential risks may include allergic reactions, breathing issues or postoperative nausea.',
          },
        },

        {
          '@type': 'Question',
          name: 'How should I prepare before receiving anesthesia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Preparation may include fasting before surgery, adjusting medications and following instructions given by your healthcare team.',
          },
        },

        {
          '@type': 'Question',
          name: 'Will I feel pain during surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anesthesia prevents pain during surgery and postoperative pain is managed using medications and pain control techniques.',
          },
        },

        {
          '@type': 'Question',
          name: 'How long does recovery from anesthesia take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recovery time depends on the type of anesthesia and the procedure but most patients regain alertness within a few hours.',
          },
        },

        {
          '@type': 'Question',
          name: 'Can I discuss anesthesia options with my doctor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, patients can discuss anesthesia plans with their anesthesiologist before surgery to understand the procedure and address concerns.',
          },
        },
      ],
    },
  ],
};
