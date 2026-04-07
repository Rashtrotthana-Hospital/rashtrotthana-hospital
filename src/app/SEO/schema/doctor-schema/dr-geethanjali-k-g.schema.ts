export const DR_GEETHANJALI_KG_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      name: 'Dr. Geethanjali K. G',
      url: 'https://www.rashtrotthanahospital.com/doctor/dr-geethanjali-k-g',
      image:
        'https://www.rashtrotthanahospital.com/assets/Dr-Geethanjali-K-G.png',
      medicalSpecialty: 'Dentistry',
      description:
        'Dr. Geethanjali K. G is an experienced dental surgeon with over 20 years of clinical experience in general dentistry, endodontics and cosmetic dental treatments. She specializes in conservative dentistry, root canal treatments and minor oral surgical procedures.',

      hasCredential: [
        'BDS',
        'Post Graduate Certificate in Endodontics',
        'Post Graduate Certificate in Oral Implantology',
      ],

      yearsOfExperience: '20',

      knowsAbout: [
        'General Dentistry',
        'Endodontics',
        'Cosmetic Dentistry',
        'Root Canal Treatment',
        'Conservative Dentistry',
        'Dental Extractions',
        'Minor Oral Surgical Procedures',
        'Dental Implants',
      ],

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'KVG Dental College, Sullia (RGUHS)',
      },

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
          name: 'Dr. Geethanjali K. G',
          item: 'https://www.rashtrotthanahospital.com/doctor/dr-geethanjali-k-g',
        },
      ],
    },
  ],
};
