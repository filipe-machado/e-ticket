import React from 'react';
import { Link } from 'react-router-dom';
import TicketMajor from 'src/components/Molecules/TicketMajor';

const Home: React.FC = () => (
  <Link to="/queue">
    <TicketMajor
      upside="quero uma nova senha"
      downside="retirar senha"
    />
  </Link>
);

export default Home;
