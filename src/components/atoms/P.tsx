import React from 'react';

interface PProps {
  text?: string,
}

const P: React.FC<PProps> = ({ text }: PProps) => <p>{text}</p>;

P.defaultProps = {
  text: '',
};

export default P;
