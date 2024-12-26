import { BlogPost } from '../types/blog';
import { siteConfig } from '../config/site';

export const posts: BlogPost[] = [
    {
        id: '1',
        title: 'Next.js ile Modern Web Geliştirme',
        slug: 'nextjs-ile-modern-web-gelistirme',
        excerpt: 'Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Bu yazıda Next.js\'in temel özelliklerini inceliyoruz.',
        content: 'Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Server-side rendering, statik site oluşturma, API routes ve daha birçok özellik sunuyor. Bu yazıda Next.js\'in temel özelliklerini detaylı olarak inceliyoruz...',
        date: '2023-12-26',
        author: siteConfig.author.name
    },
    {
        id: '2',
        title: 'TypeScript ile Güvenli Kod Yazımı',
        slug: 'typescript-ile-guvenli-kod-yazimi',
        excerpt: 'TypeScript, JavaScript\'e tip güvenliği ekleyerek daha güvenilir uygulamalar geliştirmemizi sağlıyor.',
        content: 'TypeScript, Microsoft tarafından geliştirilen ve JavaScript\'e tip güvenliği ekleyen bir programlama dili. Interface\'ler, generic tipler, ve daha birçok özellik ile kod kalitesini artırıyor...',
        date: '2023-12-25',
        author: siteConfig.author.name
    },
    {
        id: '3',
        title: 'Tailwind CSS ile Modern UI Tasarımı',
        slug: 'tailwind-css-ile-modern-ui-tasarimi',
        excerpt: 'Tailwind CSS, utility-first yaklaşımı ile modern ve responsive web tasarımını kolaylaştırıyor.',
        content: 'Tailwind CSS, modern web tasarımında devrim yaratan bir CSS framework\'ü. Utility-first yaklaşımı ile hızlı prototipleme ve kolay özelleştirme imkanı sunuyor...',
        date: '2023-12-24',
        author: siteConfig.author.name
    }
]; 