export const DR_VARSHA_P_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Varsha P',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-varsha-p',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Varsha-P.png',
      medicalSpecialty: 'Lifestyle Medicine',
      description:
        'Dr. Varsha P is an Ayurveda doctor and lifestyle medicine consultant specializing in holistic wellness, preventive healthcare, diet counselling and management of lifestyle diseases such as diabetes, hypertension and thyroid disorders using Ayurvedic principles and yoga-based wellness approaches.',

      hasCredential: [
        'BAMS',
        'MD (Ayurveda)',
        'YIC (Yoga Instructor Certification)',
      ],

      yearsOfExperience: '7',

      knowsAbout: [
        'Lifestyle Medicine',
        'Ayurveda Treatment',
        'Holistic Wellness',
        'Preventive Healthcare',
        'Lifestyle Disease Management',
        'Diabetes Management',
        'Hypertension Management',
        'Thyroid Disorders',
        'Diet Counselling',
        'Yoga Therapy',
        'Ayurvedic Lifestyle Consultation',
      ],

      worksFor: {
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
          name: 'Doctors',
          item: 'https://www.rashtrotthanahospital.com/best-doctors-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Dr. Varsha P',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-varsha-p',
        },
      ],
    },
  ],
};
