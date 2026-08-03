'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { personalInfo } from '@/data/personal-info';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <Link 
            href="#home" 
            className="text-2xl font-bold text-primary"
            onClick={onClose}
          >
            Dev<span className="text-secondary">Folio</span>
          </Link>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-primary transition"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-8">
          <ul className="space-y-2">
            {NAVIGATION_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  className="block text-2xl font-semibold text-gray-700 hover:text-primary transition py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer avec réseaux sociaux */}
        <div className="px-4 py-6 border-t border-gray-200">
          <div className="flex justify-center space-x-6 mb-6">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                aria-label={social.platform}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <Link
            href="#contact"
            className="block text-center bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-full transition duration-300"
            onClick={onClose}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;