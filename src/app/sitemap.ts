import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://designo-two.vercel.app/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/app-design',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/web-design',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/graphic-design',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/locations',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/a-propos',
      lastModified: new Date(),
    },
    {
      url: 'https://designo-two.vercel.app/home',
      lastModified: new Date(),
    },

  ]
}