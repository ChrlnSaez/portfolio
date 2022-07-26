import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import react from '../assets/img/react.svg';
import nodejs from '../assets/img/nodejs.svg';
import python from '../assets/img/python.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import tailwind from '../assets/img/tailwind.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2 className='p-2'>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <img src={html} alt='HTMl' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={css} alt='CSS' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={javascript} alt='JavaScript' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={react} alt='React JS' />
                  <h5>React JS</h5>
                </div>
                <div className='item'>
                  <img src={nodejs} alt='NodeJS' />
                  <h5>NodeJS</h5>
                </div>
                <div className='item'>
                  <img src={python} alt='Python' />
                  <h5>Python</h5>
                </div>
                <div className='item'>
                  <img src={bootstrap} alt='Bootstrap' />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src={tailwind} alt='Tailwind' />
                  <h5>Tailwind</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
