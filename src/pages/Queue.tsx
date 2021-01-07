import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import MarketServices from 'src/services/MarketServices';

// COMPONENTS
import TicketMinor from 'src/components/organism/TicketMinor';
import { LiImageHref } from 'src/components/atoms/Li';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';
import home from '../assets/images/home.svg';
import arrowBack from '../assets/images/arrow_back.svg';

const nodes = [
  <LiImageHref
    image={hamburg}
    to="#menu"
    uniq={1}
  />,
  <LiImageHref
    image={home}
    to="/home"
    uniq={2}
  />,
  <LiImageHref
    image={arrowBack}
    to="/markets"
    uniq={3}
  />,
];

function Queue(): React.ReactElement {
  return (
    <Layout
      title="filas"
      nodes={nodes}
    >
      <Link to="/queues">
        <TicketMinor
          upside="nova senha"
        />
      </Link>
    </Layout>
  );
}
export default Queue;
