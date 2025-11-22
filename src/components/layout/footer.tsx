
"use client";

import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

function WhatsappIcon(props: React.ComponentProps<'svg'>) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34a10 10 0 1 0 14.71 14.71" stroke="none" fill="currentColor"/>
        </svg>
    );
}


export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1: Address */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Our Campus</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
              <p>
                The Dr V P Kanakaraddi Memorial College Of Nursing
                <br />
                Main Road, Venkatesh Hospital, Mahalingpur
                <br />
                Bagalkote – 587312, Karnataka, India
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98765 43210</span>
              </a>
              <a href="tel:+919876543211" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98765 43211</span>
              </a>
              <a href="tel:+919876543212" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98765 43212</span>
              </a>
              <a href="mailto:principaldrvpk@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>principaldrvpk@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Follow Us</h3>
            <p>Stay connected with us on social media for the latest updates.</p>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="icon" className="bg-transparent border-slate-600 hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="bg-transparent border-slate-600 hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="bg-transparent border-slate-600 hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Link href="#" aria-label="WhatsApp"><WhatsappIcon className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-slate-400">
          <p>&copy; {currentYear ?? new Date().getFullYear()} Dr V P Kanakaraddi Memorial College Of Nursing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
