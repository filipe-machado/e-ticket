import React from 'react';

// COMPONENTS
import { LiHref } from 'src/components/atoms/Li';
import Jumbotrom from 'src/components/organism/Jumbotrom';
import Navbar from 'src/components/organism/Navbar';
import Offcanvas from 'src/components/organism/Offcanvas';

interface LayoutProps {
  children: React.ReactNode,
  title: string,
  description?: string,
  nodes: React.ReactChild[],
  start?: boolean | null,
  offcanvas: boolean | null,
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  nodes,
  offcanvas,
  start,
}: LayoutProps) => (
  <main>
    <div className="container">
      <Jumbotrom title={title} description={description} />
      {children}
    </div>
    <Navbar nodes={nodes} />
    <Offcanvas
      start={start}
      show={offcanvas}
      nodes={[
        <LiHref
          item="home"
          to="/home"
        />,
        <LiHref
          item="historico"
          to="#!"
        />,
        <LiHref
          item="perfil"
          to="!#"
        />,
        <LiHref
          item="sair"
          to="!#"
        />,
      ]}
    />
  </main>
);

Layout.defaultProps = {
  description: '',
  start: false,
};

export default Layout;
