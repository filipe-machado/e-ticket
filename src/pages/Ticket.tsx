import React from 'react';

interface TicketProps {
  value: string,
  date: string,
  validate: string,
}

const Ticket: React.FC<TicketProps> = ({
  value,
  date,
  validate,
}: TicketProps) => (
  <div>
    <p>
      valor do ticket:
      {' '}
      {value}
    </p>
    <p>
      data de retirada:
      {' '}
      {date}
    </p>
    <p>
      validade:
      {' '}
      {validate}
    </p>
  </div>
);

export default Ticket;
