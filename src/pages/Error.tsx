import React from 'react';

// COMPONENTS
import { LiImageHref } from 'src/components/atoms/Li';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';
import home from '../assets/images/home.svg';

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
];

const Error: React.FC = () => (
  <Layout
    offcanvas
    title="404"
    nodes={nodes}
  >
    <div className="error-page">
      <p>Não encontrado</p>
    </div>
  </Layout>
);

export default Error;
