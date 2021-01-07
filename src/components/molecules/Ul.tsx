import React from 'react';

interface UlProps {
  list: React.ReactNode[],
}

const Ul: React.FC<UlProps> = ({ list }: UlProps) => <ul>{ list }</ul>;

export default Ul;
