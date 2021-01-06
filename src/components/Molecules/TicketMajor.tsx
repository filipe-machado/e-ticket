import React from 'react';
import ticketMajor from '../../assets/images/ticket_major.svg';
import P from '../atoms/P';

interface TicketMajorProps {
  upside: string,
  downside: string,
}

const TicketMajor: React.FC<TicketMajorProps> = ({
  upside, downside,
}: TicketMajorProps) => (
  <div className="ticket-major">
    <img src={ticketMajor} alt="header" />
    <div className="text-box">
      <P text={upside} />
      <P text={downside} />
    </div>
  </div>
);

export default TicketMajor;
