import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO, NAV_LINKS, SOCIAL_LINKS } from '../constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Logo />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium heating and plumbing services in Birmingham. 31 years of experience, ex-British Gas quality at local prices.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all text-white/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/40 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contacts</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-white/40 group-hover:text-white transition-colors text-sm">{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-white/40 group-hover:text-white transition-colors text-sm">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-white/40 text-sm leading-relaxed">{BUSINESS_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Area Covered */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Area Covered</h4>
            <div className="space-y-4">
              <p className="text-white/40 text-sm leading-relaxed">
                Operating from Bartley Green, covering all of Birmingham, Harborne, Quinton, Halesowen, and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-white/5 mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary hover:text-white transition-colors group"
          >
            <span className="text-xs font-black uppercase tracking-widest">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
