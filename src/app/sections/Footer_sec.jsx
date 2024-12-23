'use client';
import Image from 'next/image';
import React from 'react';

import w3tecLogoWhite from '../public/Images/w3tech-logo-white.svg';
import instaIcon from '../public/Images/insta-icon.svg';
import facebookIcon from '../public/Images/fb-icon.svg';
import youtubeIcon from '../public/Images/youtube-icon.svg';
import linkedInIcon from '../public/Images/linkedin-icon.svg';

import phoneIcon from '../public/Images/phone-icon.svg';
import emailIcon from '../public/Images/email-icon.svg';
import locationIcon from '../public/Images/location-icon.svg';

const Footer_sec = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Blogs', 'Careers'],
    },
    {
      title: 'Support',
      links: ['Privacy Policy', 'Terms and Conditions', 'Contact Us'],
    },
  ];

  const skillCategories = [
    {
      title: 'Development',
      items: [
        'Front-End Development',
        'Back-End Development',
        'PHP Full Stack',
        'Python Full Stack',
        'MERN Full Stack',
        'Database Management',
        'Javascript',
        'Core Python',
        'Advanced Python',
        'PHP',
        'ReactJS',
        'Node.js',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      title: 'Digital Marketing',
      items: [
        'Search Engine Optimization (SEO)',
        'Search Engine Marketing (SEM)',
        'Social Media Optimization (SMO)',
        'Social Media Marketing (SMM)',
        'Content Marketing',
        'Email Marketing',
        'Whatsapp Marketing',
        'Affiliate Marketing',
      ],
    },
    {
      title: 'Designing & Editing',
      items: [
        'Graphic Designing',
        'UI/UX Designing',
        'Video Editing',
        '2D Animation',
        'Adobe Illustrator',
        'Adobe XD',
        'Figma',
        'Adobe Premiere Pro',
        'Adobe After Effects',
      ],
    },
  ];

  const footerStyle = 'flex flex-wrap gap-4 py-6';
  const footerListStyle = 'border-r-2 pr-4';

  return (
    <div className="bg-black text-regular-gray">
      <div className="mx-[30px] lg:mx-[90px]">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 py-14 gap-8">
          {/* Company Info */}
          <div>
            <Image src={w3tecLogoWhite} alt="W3 Technologies Logo" />
            <p className="pl-4 my-6 border-l-4 border-regular-gray text-white">
              Learn with W3 Technologies <br /> to start your career
            </p>
            <div className="flex gap-4">
              <Image src={instaIcon} alt="Instagram" />
              <Image src={facebookIcon} alt="Facebook" />
              <Image src={youtubeIcon} alt="YouTube" />
              <Image src={linkedInIcon} alt="LinkedIn" />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-white text-2xl py-5">Contact Us</h2>
            <ul>
              <li className="flex items-center gap-3">
                <Image src={phoneIcon} alt="Phone" />
                <a href="tel:+91741693933">+91 741-693-9333</a>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Image src={emailIcon} alt="Email" />
                <a href="mailto:info@w3tec.com">info@w3tec.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Image src={locationIcon} alt="Location" />
                <span>
                  Above IDBI Bank, LR Shine Building 4th Floor, Beside 1-Town Police Station, VRC,
                  Nellore, AP, India, 524001.
                </span>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="text-white text-2xl py-5">{section.title}</h2>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="py-2">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        {/* Skill Categories */}
        {skillCategories.map((category, index) => (
          <React.Fragment key={index}>
            <h3 className="text-white text-xl py-5">{category.title}</h3>
            <ul className={footerStyle}>
              {category.items.map((item, idx) => (
                <li key={idx} className={footerListStyle}>
                  {item}
                </li>
              ))}
            </ul>
            <hr />
          </React.Fragment>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-10 text-white">
        © Copyright 2024, All Rights Reserved W3 Technologies
      </div>
    </div>
  );
};

export default Footer_sec;
