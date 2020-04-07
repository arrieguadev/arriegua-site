import * as React from 'react';
import { Container, Presentation, PresentationText } from './styles';
import Navbar from 'src/components/Navbar';

interface Props {}

const Home: React.SFC<Props> = (props) => {
  return (
    <Container>
      <Navbar />
      <Presentation>
        <PresentationText>
          Conheça a comunidade arrieguadev diretamente do sertões de Crateús
          para o mundo
        </PresentationText>
      </Presentation>
    </Container>
  );
};

export default Home;
