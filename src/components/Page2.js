import React, { useRef } from 'react'
import './Page2.css'
import arrowDownIcon from '../assests/Icon-ArrowDown.png'
import { Page1 } from './Page1';
export const Page2 = () => {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToNextSection = () => {
    const activeSection = document.querySelector(".active");
    console.log(activeSection)

    if (activeSection && activeSection.nextElementSibling) {
      activeSection.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>

      <div className="background active" ref={section1Ref}>
        <div className="backgroundpage2">
          <p className="inMarketing">in marketing</p>
          <p className="product">Product is an object made available for consumer use</p>
          <div className="linkcombo">
            <img className="iconarrowdown" src={arrowDownIcon} alt=' not found'/>
            <button
              className="explore"
              onClick={scrollToNextSection}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <Page1 ref={section2Ref} />

    </>
  )
}
