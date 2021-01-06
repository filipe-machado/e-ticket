import React from 'react';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import tagHeader from '../../assets/images/tag_header.svg';

interface JumbotromProps {
  title: string,
  description?: string,
}

const Jumbotrom: React.FC<JumbotromProps> = ({
  title,
  description,
}: JumbotromProps) => (
  <div className="jumbotrom">
    <img src={tagHeader} alt="header" />
    <H2 title={title} />
    <P text={description} />
  </div>
);

Jumbotrom.defaultProps = {
  description: '',
};

export default Jumbotrom;
