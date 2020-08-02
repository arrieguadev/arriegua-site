import * as React from "react";

import { Container, Text } from "./styles";

interface Props {}

const Footer: React.SFC<Props> = (props) => {
  return (
    <Container>
      <Text>arrieguadev @ 2020 - Todos os direitos reservados</Text>
    </Container>
  );
};

export default Footer;
