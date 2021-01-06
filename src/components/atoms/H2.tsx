import React from 'react';

interface H2Props {
  title: string,
}

const H2: React.FC<H2Props> = ({ title }: H2Props) => <h2>{title}</h2>;

export default H2;
