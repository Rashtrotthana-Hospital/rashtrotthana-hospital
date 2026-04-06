export const DR_MAHESH_KULKARNI_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Mahesh Kulkarni',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-kulkarni',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Mahesh-Kulkarni.png',
      medicalSpecialty: 'Orthopedics',
      description:
        'Dr. Mahesh Kulkarni is a senior orthopedic surgeon with more than 16 years of experience in treating musculoskeletal disorders, sports injuries, joint conditions and complex orthopedic trauma.',

      hasCredential: [
        'MS Orthopedics',
        'DNB Orthopedics',
        'Fellowship in Arthroplasty',
        'Fellowship in Arthroscopy',
        'Fellowship in Spine Surgery',
        'Fellowship in Complex Trauma',
      ],

      yearsOfExperience: '16',

      knowsAbout: [
        'Joint Preservation',
        'Limb Preservation',
        'Deformity Correction',
        'Pelviacetabular Fractures',
        'Sports Injuries',
        'Spine Disorders',
        'Joint Replacement Surgery',
        'Arthroscopy',
        'Orthopedic Trauma Care',
      ],

      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Bangalore Medical College and Research Institute',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'KMC Chennai',
        },
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
          name: 'Dr. Mahesh Kulkarni',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-mahesh-kulkarni',
        },
      ],
    },
  ],
};
