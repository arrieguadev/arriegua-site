import * as React from "react";
import { Container, AboutText, Title, Box } from "./styles";

interface Props {}

const About: React.SFC<Props> = (props) => {
  return (
    <Container>
      <Title>Comunidade</Title>
      <Box>
        <AboutText>
        Nós somos a arriegua.dev, uma comunidade de programadores dos Sertões de Crateús. Nascemos com o objetivo de acolher programadores de cidades pequenas, que possuem oportunidades limitadas para ingressar no mercado profissional. Esse auxílio é prestado de forma dinâmica e elucidativa, através de ferramentas audiovisuais (vídeos, tutoriais, podcasts) e publicação de artigos, visando melhorar o perfil profissional e incentivar a participação de eventos como maratonas de programação e Hackthons.
        </AboutText>
      </Box>
    </Container>
  );
};

export default About;
