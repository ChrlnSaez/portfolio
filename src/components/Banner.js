import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Photo from '../assets/img/gradpicsquare.JPG';
import { Col, Container, Row } from 'react-bootstrap';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }>
                  <div className='title'>
                    <div className='title-wrapper'>
                      <div className='title-item'>Hello!</div>
                      <div className='title-item'>Hola!</div>
                      <div className='title-item'>Kamusta!</div>
                      <div className='title-item'>Bonjour!</div>
                      <div className='title-item'>Konnichiwa!</div>
                    </div>
                  </div>
                  <h1>
                    {`I'm Charlene Saez`} <br />
                    <h2 className=''>
                      Graphic Designer
                    </h2>
                  </h1>
                  <a href='#skills'>
                    Know me more <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }>
                  <img style={{ borderRadius: '9999px' }} src={Photo} alt='' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
