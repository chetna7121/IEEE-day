import React from 'react';
import './Gallery.css'; 
import img3 from './img3.jpg';
import img2 from './img2.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import img13 from './img13.jpg';
import img14 from './img14.jpg';
import img15 from './img15.jpg';
import img16 from './img16.jpg';
import img17 from './img17.jpg';
import img18 from './img18.jpg';
import img19 from './img19.jpg';
import img20 from './img20.jpg';
import img21 from './img21.jpg';
import img22 from './img22.jpg';
import img23 from './img23.jpg';
import img24 from './img24.jpg';
import img25 from './img25.jpg';
import img26 from './img26.jpg';

const Gallery = () => {
  const images = [ img3, img2, img4,img5,img6,img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26]; // Add the rest of the imported images
  
  return (
    <div className="gallery-container">
      <div className="logo-marquee">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Company Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
