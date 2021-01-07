import React from 'react';
import Jumbotrom from 'src/components/organism/Jumbotrom';
import Navbar from 'src/components/organism/Navbar';

interface LayoutProps {
  children: JSX.Element[],
  title: string,
  description?: string,
  nodes: React.ReactChild[],
}

const Layout: React.FC<LayoutProps> = ({
  children, title, description, nodes,
}: LayoutProps) => (
  <main>
    <div className="container">
      <Jumbotrom title={title} description={description} />
      {children}
    </div>
    <Navbar nodes={nodes} />
  </main>
);

Layout.defaultProps = {
  description: '',
};

export default Layout;
