import React from 'react';
import { Link } from 'react-router-dom';

interface LiProps {
  item: string,
}

interface LiHrefProps {
  item: string,
  to: string,
}

interface LiImageHrefProps {
  to: string,
  image: string,
  uniq: number,
}

const Li: React.FC<LiProps> = ({ item }: LiProps) => <li>{item}</li>;

const LiHref: React.FC<LiHrefProps> = ({ item, to }: LiHrefProps) => (
  <li><Link to={to}>{item}</Link></li>
);

const LiImageHref: React.FC<LiImageHrefProps> = ({ to, image, uniq }: LiImageHrefProps) => (
  <li key={uniq}>
    <Link to={to}>
      <img src={image} alt="icon" />
    </Link>
  </li>
);

export { Li, LiHref, LiImageHref };
