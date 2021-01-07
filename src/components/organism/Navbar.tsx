import React from 'react';
import Ul from '../molecules/Ul';

interface NavbarProps {
  nodes: React.ReactChild[],
}

const Navbar: React.FC<NavbarProps> = ({ nodes }: NavbarProps) => (
  <nav className="navbar">
    <Ul list={nodes} />
  </nav>
);

export default Navbar;
