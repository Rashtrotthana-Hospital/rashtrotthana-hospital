export const DR_VIVEKANAND_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Vivekanand',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-vivekanand',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Vivekanad.png',
      medicalSpecialty: 'Vascular Surgery',

      description:
        'Dr. Vivekanand is a highly experienced vascular surgeon with over 26 years of expertise in vascular and endovascular surgery. He specializes in diabetic foot management, deep vein thrombosis treatment, vascular wound care and limb preservation procedures.',

      hasCredential: ['MBBS', 'MS General Surgery', 'FVES'],

      yearsOfExperience: '26',

      knowsAbout: [
        'Vascular Surgery',
        'Endovascular Surgery',
        'Diabetic Foot Management',
        'Limb Preservation',
        'Deep Vein Thrombosis Treatment',
        'Thrombosis Disorders',
        'Advanced Wound Healing',
        'Peripheral Arterial Disease',
        'Vascular Disorders',
      ],

      worksFor: {
        '@type': 'Hospital',
        name: 'Rashtrotthana Hospital',
        url: 'https://www.rashtrotthanahospital.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rajarajeshwari Nagar',
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
          name: 'Dr. Vivekanand',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-vivekanand',
        },
      ],
    },
  ],
};
