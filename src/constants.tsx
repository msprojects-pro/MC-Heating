import { 
  Flame, 
  Wrench, 
  Settings, 
  ShieldAlert, 
  Droplet, 
  Bath, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook
} from 'lucide-react';
import type { Review, Service, GalleryItem } from './types';

function WhatsAppIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.194-.3.297-.501.101-.195.051-.375-.025-.525-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.875 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.084 1.767-.721 2.016-1.426.251-.705.251-1.305.176-1.425-.075-.135-.274-.21-.575-.36z" />
      <path d="M22 12c0 5.523-4.477 10-10 10-1.704 0-3.308-.426-4.708-1.173L2 22l1.247-5.068A9.957 9.957 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10z" />
    </svg>
  );
}

export const BUSINESS_INFO = {
  name: "MC Heating & Plumbing",
  owner: "Mitch",
  experience: "31 Years",
  established: 2020,
  phone: "07764 740103",
  email: "mitchcheating@gmail.com",
  whatsapp: "https://wa.me/447764740103",
  facebook: "https://web.facebook.com/p/MC-Heating-100063481361623/",
  location: "Bartley Green, Birmingham & surrounding areas",
  stats: {
    recommendationRate: "98%"
  }
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'boiler-install',
    title: 'Boiler Installation',
    description: 'Expert installation of modern, energy-efficient boilers with full warranties.',
    icon: 'Flame',
    image: 'https://unsplash.com/photos/electric-boiler-wall-water-heater-in-bathroom-Z6GxeYUzG_s?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'boiler-service',
    title: 'Boiler Servicing & Repairs',
    description: 'Keep your boiler running safely and efficiently with our comprehensive servicing.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'central-heating',
    title: 'Central Heating Systems',
    description: 'Full design and installation of complete central heating systems tailored to your home.',
    icon: 'Flame',
    image: 'https://unsplash.com/photos/heating-specialist-with-gas-leak-detector-in-his-hand-performing-necessary-check-vG7-nbVmTM0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emergency',
    title: 'Boiler & Heating Repairs',
    description: 'Expert diagnostics and repairs for boiler failures and heating system issues.',
    icon: 'ShieldAlert',
    image: 'https://unsplash.com/photos/a-person-using-one-of-tools-while-repairing-or-fixing-parts-of-pipes-e2twQyucgbI?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Refurbishment',
    description: 'From design to full installation, we create beautiful, functional bathrooms.',
    icon: 'Bath',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'plumbing',
    title: 'Minor Plumbing Works',
    description: 'Leaks, taps, toilets, and all small plumbing repairs handled professionally.',
    icon: 'Wrench',
    image: 'https://unsplash.com/photos/person-opening-faucet-Vve7XkiUq_Y?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Chloe Barrett',
    rating: 5,
    comment: 'Very professional, did exactly what I needed. Will definitely use again!',
    date: 'Recent'
  },
  {
    id: '2',
    name: 'Rebecca Jane',
    rating: 5,
    comment: 'Excellent boiler service today again from Mitch. Thanks Mitch. Always great to see you!',
    date: 'Recent'
  },
  {
    id: '3',
    name: 'Carys Friar',
    rating: 5,
    comment: 'Highly recommended! Mitch was very professional and helped me out massively as another plumber done a poor job on my central heating.',
    date: 'Recent'
  },
  {
    id: '4',
    name: 'Anju Farmah',
    rating: 5,
    comment: 'I would highly recommend Mitch. Friendly with great work standards and very reasonable. Thank you Mitch.',
    date: 'Recent'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    title: 'New Boiler Installation',
    category: 'boiler'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
    title: 'Modern Bathroom Finish',
    category: 'bathroom'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1574360523441-df071650346c?auto=format&fit=crop&q=80&w=800',
    title: 'Underfloor Heating Setup',
    category: 'heating'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    title: 'Copper Pipework',
    category: 'plumbing'
  }
];

export const CONTACT_DETAILS = [
  { icon: Phone, label: 'Call Mitch', value: BUSINESS_INFO.phone, href: `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email Us', value: BUSINESS_INFO.email, href: `mailto:${BUSINESS_INFO.email}` },
  { icon: MapPin, label: 'Location', value: BUSINESS_INFO.location, href: '#' },
];

export const SOCIAL_LINKS = [
  { icon: WhatsAppIcon, label: 'WhatsApp', href: BUSINESS_INFO.whatsapp },
  { icon: Facebook, label: 'Facebook', href: BUSINESS_INFO.facebook },
];
