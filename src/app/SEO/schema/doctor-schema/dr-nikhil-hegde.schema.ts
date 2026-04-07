export const DR_NIKHIL_HEGDE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Nikhil Hegde',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-nikhil-hegde',
      image: 'https://www.rashtrotthanahospital.com/assets/Dr-Nikhil-Hegde.png',
      medicalSpecialty: 'Orthopedics',
      description:
        'Dr. Nikhil Hegde is an orthopedic consultant with expertise in sports medicine, joint replacement surgery and trauma care. He specializes in arthroscopy and modern orthopedic treatments for joint and sports-related injuries.',

      hasCredential: ['MBBS', 'MS Orthopedics'],

      yearsOfExperience: '8',

      knowsAbout: [
        'Sports Medicine',
        'Joint Replacement Surgery',
        'Arthroplasty',
        'Arthroscopy',
        'Orthopedic Trauma',
        'Knee Injuries',
        'Ligament Injuries',
        'ACL Reconstruction Surgery',
        'Joint Pain Treatment',
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

      memberOf: {
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
          name: 'Doctors',
          item: 'https://www.rashtrotthanahospital.com/best-doctors-bangalore',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Dr. Nikhil Hegde',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-nikhil-hegde',
        },
      ],
    },
  ],
};