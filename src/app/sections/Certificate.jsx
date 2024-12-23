import React from "react";
import Image from "next/image";
import certificateImg from "../public/Images/Certificate.png";
import certificateAwardIcon from "../public/Images/certificate-award-icon.svg";
import employeeIcon from "../public/Images/employee-icon.svg";
import suitcaseIcon from "../public/Images/breifcase-icon.svg";

const Certificate = () => {
  const icons = [
    {
      src: certificateAwardIcon,
      alt: "Certificate award icon",
      text: "Industry-Recognized Certificate",
    },
    {
      src: employeeIcon,
      alt: "Employee icon",
      text: "Stand Out in Job Market",
    },
    {
      src: suitcaseIcon,
      alt: "Suitcase icon",
      text: "Your Gateway to Career Advancement",
    },
  ];

  return (
    <div className="certificate-sec py-10">
      <div className="mx-[30px] lg:mx-[90px]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Certificate Image */}
          <div>
            <Image src={certificateImg} alt="Certificate image" priority />
          </div>

          {/* Certificate Content */}
          <div className="w-full lg:w-[80%] text-white py-10">
            <p className="text-4xl lg:text-5xl py-8 leading-snug">
              Elevate your presence <br />
              with <strong>Certification!</strong>
            </p>

            {/* Certificate Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-16 py-4 place-items-center rounded-2xl">
              {icons.map((icon, index) => (
                <div key={index} className="text-sm text-center">
                  <div className="dark-circle flex justify-center mb-2">
                    <Image src={icon.src} alt={icon.alt} />
                  </div>
                  <p className="font-bold">{icon.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
