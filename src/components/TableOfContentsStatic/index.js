import React, { useEffect, useRef } from 'react';
import { isMobileOnly, isDesktop } from 'react-device-detect';

// Styles
import './styles.css';
import './globalstyles.css';

// Helper function
import { fillTableOfContents } from '../../helpers/fillTableOfContents';


function TableOfContentsStatic() {

  const containerRef = useRef();

  // Scroll to see the selected element on the center of the table of contents
  const scroll = () => {
    const element = document.querySelector('.selected');
    if (window.innerHeight > 700) {
      if (element) {
        element.scrollIntoView({block: 'center'});
      }
    } else {
      window.scrollTo(0,0);
    }
  }

  // On first loading
  useEffect(
    () => {
      fillTableOfContents(containerRef);
      scroll();
    }, []
  );

  // On resizing the page
  useEffect( () => {
    window.addEventListener('resize', scroll);
    return () => window.removeEventListener('resize', scroll);
  });


  return (

    <div 
      id="tableOfContentsStatic" 
      className='tableOfContents'
      ref={containerRef}
      ismobileonly={isMobileOnly ? "true" : "false"}
      isdesktop={isDesktop ? "true" : "false"}
    />

  )
}

export default TableOfContentsStatic;