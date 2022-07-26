import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <h1>Charlene Saez</h1>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='links'>
              <span>
                <a href='./'>Home</a>
              </span>
              <span>
                <a href='#skills'>Skills</a>
              </span>
              <span>
                <a href='#projects'>Projects</a>
              </span>
            </div>
            <p>Copyright Charlene 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
