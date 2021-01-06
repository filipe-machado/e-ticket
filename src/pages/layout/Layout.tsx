import React from 'react';
import Jumbotrom from 'src/components/Molecules/Jumbotrom';

interface LayoutProps {
  children: React.ReactChild,
  title: string,
  description?: string,
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }: LayoutProps) => (
  <main>
    <div className="container">
      <Jumbotrom title={title} description={description} />
      {children}
    </div>
  </main>
);

Layout.defaultProps = {
  description: '',
};

export default Layout;
