const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://www.rashtrotthanahospital.com';

const doctorData = require('./doctors.json') 
const blogSlugs = require('./blogSlug.json')

function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

const staticRoutes = [
  '/',
  '/about-us',
  '/career',
  '/contact-us-bangalore',
  '/health-check-up-packages-bangalore',
  '/terms-and-conditions',
  '/blog',
  '/specialities/best-general-medicine-hospital-in-bangalore',
  '/specialities/internal-medicine-hospital-in-bangalore',
  '/specialities/best-general-surgery-hospital-in-bangalore',
  '/specialities/best-paediatric-hospital-in-bangalore',
  '/specialities/best-nephrology-hospital-in-bangalore',
  '/specialities/best-urology-hospital-in-bangalore',
  '/specialities/best-orthopaedics-hospital-in-bangalore',
  '/specialities/best-gastroenterology-hospital-in-bangalore',
  '/specialities/best-cardiology-hospital-in-bangalore',
  '/specialities/best-pulmonology-hospital-in-bangalore',
  '/specialities/best-eye-hospital-in-bangalore',
  '/specialities/best-dental-hospital-in-bangalore',
  '/specialities/best-ent-hospital-in-bangalore',
  '/specialities/best-neurology-hospital-in-bangalore',
  '/specialities/best-pshychiatry-hospital-in-bangalore',
  '/specialities/best-oncology-hospital-in-bangalore',
  '/specialities/best-emergency-medicine-hospital-in-bangalore',
  '/specialities/best-anesthesiology-hospital-in-india',
  '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore',
  '/specialities/best-endocrinology-hospital-in-bangalore',
  '/specialities/rheumatology-hospital-bangalore',
  '/specialities/yoga-therapy-bangalore',
  '/specialities/ayurvedic-treatment-bangalore',
  '/specialities/homeopathy-treatment-bangalore',
  '/specialities/lifestyle-medicine-bangalore'
];

const doctorRoutes = doctorData.map(doc => `/doctor/${nameToSlug(doc.name)}`);
const blogRoutes = blogSlugs.map(blog => `/blog/${blog}`)

const allRoutes = [...staticRoutes, ...doctorRoutes, ...blogRoutes];

(async () => {
  const sitemap = new SitemapStream({ hostname });
  const sitemapPath = path.resolve(__dirname, 'src', 'sitemap.xml');
  const writeStream = fs.createWriteStream(sitemapPath);

  sitemap.pipe(writeStream);

  allRoutes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
})();