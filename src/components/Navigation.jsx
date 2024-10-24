// components/Popover.js
import { useState } from 'react';

const Popover = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-0 mt-2 w-48 p-2  rounded shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
