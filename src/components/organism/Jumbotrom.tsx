import React from 'react';
import H2 from '../atoms/H2';
import P from '../atoms/P';

interface JumbotromProps {
  title: string,
  description?: string,
}

const Jumbotrom: React.FC<JumbotromProps> = ({
  title,
  description,
}: JumbotromProps) => (
  <div className="jumbotrom">
    <svg xmlns="http://www.w3.org/2000/svg" width="252.904" height="140.102" viewBox="0 0 66.914 37.069">
      <g transform="translate(-61.037 -86.543)">
        <rect width="66.914" height="37.069" x="61.037" y="86.543" rx="5.968" ry="5.968" fill="#ffd87c" />
        <path d="M67.005 86.543a5.955 5.955 0 00-5.968 5.968v25.133a5.955 5.955 0 005.968 5.968h27.712l21.402-37.069z" fill="#ffc130" />
      </g>
    </svg>
    <H2 title={title} />
    <P text={description} />
  </div>
);

Jumbotrom.defaultProps = {
  description: '',
};

export default Jumbotrom;
