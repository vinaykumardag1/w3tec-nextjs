'use client';

import React from 'react';
import Image from 'next/image';

// List of client logos
const clientLogos = [
  { src: '/Images/axzons.png', alt: 'Axzons' },
  { src: '/Images/corsult.png', alt: 'Corsult' },
  { src: '/Images/vertex.png', alt: 'Vertex' },
  { src: '/Images/aetos.png', alt: 'Aetos' },
  { src: '/Images/safwan.png', alt: 'Safwan' },
  { src: '/Images/kdssg.png', alt: 'KDSSG' },
  { src: '/Images/pickleball.png', alt: 'Pickleball' },
  { src: '/Images/hotstone.png', alt: 'Hotstone' },
  { src: '/Images/visonics.png', alt: 'Visonics' },
  { src: '/Images/ashbe.png', alt: 'Ashbe' },
  { src: '/Images/riet.png', alt: 'RIET' },
  { src: '/Images/behara.png', alt: 'Behara' },
  { src: '/Images/swarnandhra.png', alt: 'Swarna Andhra' },
  { src: '/Images/visakha.png', alt: 'Visakha' },
  { src: '/Images/sv-college.png', alt: 'SV College' },
  { src: '/Images/haramayn.png', alt: 'Haramayn' },
  { src: '/Images/dmk.png', alt: 'DMK' },
  { src: '/Images/digdo.png', alt: 'Digdo' },
  { src: '/Images/law-office.png', alt: 'Law Office' },
  { src: '/Images/mars-marketers.png', alt: 'Mars Marketers' },
  { src: '/Images/mksn.png', alt: 'MKSN' },
  { src: '/Images/mid-court.png', alt: 'Mid Court' },
  { src: '/Images/foodbank.png', alt: 'Houton Food Bank' },
  { src: '/Images/tennis-club.png', alt: 'Tennis Club' },
  { src: '/Images/xit.png', alt: 'XIT' },
];

const featuredClients = [
  { src: '/Images/iac.png', alt: 'IAC' },
  { src: '/Images/natures-living.png', alt: 'Nature’s Living' },
];

const ClientSec = () => {
  return (
    <div className="mx-[30px] lg:mx-[90px] py-10">
      {/* Header */}
      <p className="text-center text-5xl">
        Our{' '}
        <span className="text-white bg-blue-500 p-4 px-5">
          Clients
        </span>{' '}
        we work with
      </p>

      {/* Client Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 place-items-center">
        {clientLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={150}
            className="client-images my-3"
          />
        ))}
      </div>

      {/* Featured Clients */}
      <div className="flex gap-10 justify-center">
        {featuredClients.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={200}
            className="client-images"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSec;
