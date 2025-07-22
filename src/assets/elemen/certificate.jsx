import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import certificateData from './data/certificate'; // pastikan path sesuai

function Certificate() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="Certificate" className='carousel-sertifikat'>
      <div data-aos="fade-up">
        <h1 className='animate__animated animate__fadeInDown'>My Certificate</h1>
      </div>
      <div data-aos="zoom-out">
        <Carousel activeIndex={index} onSelect={handleSelect} className='img-carousel animate__animated animate__zoomIn'>
          {certificateData.map((cert) => (
            <Carousel.Item key={cert.id}>
              <ExampleCarouselImage src={cert.src} alt={cert.label} className='item-carousel' />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Certificate;
