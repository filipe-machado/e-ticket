import React from 'react';

// COMPONENTS
import Ul from '../molecules/Ul';

interface OffcanvasProps {
  start?: boolean | null,
  show?: boolean | null,
  nodes: React.ReactChild[],
}

const Offcanvas: React.FC<OffcanvasProps> = ({ show, nodes, start }: OffcanvasProps) => (
  <div className={`offcanvas ${start ? `offcanvas-${show ? 'show' : 'hide'}` : ''}`}>
    <Ul list={nodes} />
  </div>
);

Offcanvas.defaultProps = {
  start: false,
  show: false,
};

export default Offcanvas;
