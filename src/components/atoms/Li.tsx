import React from 'react';
import { Link } from 'react-router-dom';

interface LiProps {
  item: string,
  classes: string,
}

interface LiHrefProps {
  item: string,
  to: string,
}

interface LiImageHrefProps {
  to?: string,
  image: string,
  uniq: number,
  onClickHandler?: () => unknown,
}

const Li: React.FC<LiProps> = ({ item, classes }: LiProps) => <li className={classes}>{item}</li>;

const LiHref: React.FC<LiHrefProps> = ({ item, to }: LiHrefProps) => (
  <li><Link to={to}>{item}</Link></li>
);

function LiImageHref({
  to, image, uniq, onClickHandler,
}: LiImageHrefProps): React.ReactElement {
  return (
    <li key={uniq}>
      {
        to ? (
          <Link to={to}>
            <img src={image} alt="icon" />
          </Link>
        ) : (
          <button onClick={onClickHandler} type="button">
            <img src={image} alt="icon" />
          </button>
        )
      }
    </li>
  );
}

LiImageHref.defaultProps = {
  to: '',
  onClickHandler: () => {},
};

export { Li, LiHref, LiImageHref };
