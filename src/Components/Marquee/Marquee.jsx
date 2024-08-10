import { useEffect } from 'react';
import './Marquee.scss'; // Import the CSS file

import stack1 from '../../assets/stack1.png';
import stack2 from '../../assets/stack2.png';
import stack3 from '../../assets/stack3.png';
import stack4 from '../../assets/stack4.png';
import stack5 from '../../assets/stack5.png';
import stack6 from '../../assets/stack6.png';
import stack7 from '../../assets/stack7.png';
import stack8 from '../../assets/stack8.png';
import stack9 from '../../assets/stack9.png';

const Marquee = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      '--marquee-elements-displayed'
    );
    const marqueeContent = document.querySelector('ul.marquee-content');

    root.style.setProperty(
      '--marquee-elements',
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li>
          <img src={stack1} alt="" className="fab " />
        </li>
        <li>
          <img src={stack2} alt="" className="fab " />
        </li>
        <li>
          <img src={stack3} alt="" className="fab " />
        </li>
        <li>
          <img src={stack4} alt="" className="fab " />
        </li>
        <li>
          <img src={stack5} alt="" className="fab " />
        </li>
        <li>
          <img src={stack6} alt="" className="fab " />
        </li>
        <li>
          <img src={stack7} alt="" className="fab " />
        </li>
        <li>
          <img src={stack8} alt="" className="fab " />
        </li>
        <li>
          <img src={stack9} alt="" className="fab " />
        </li>
      </ul>
    </div>
  );
};

export default Marquee;
