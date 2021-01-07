import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import QueueServices, { QueueProps } from 'src/services/QueueService';
import { MarketProps } from 'src/services/MarketServices';
import LogServices from 'src/services/LogService';

// COMPONENTS
import TicketMinor from 'src/components/organism/TicketMinor';
import { LiImageHref } from 'src/components/atoms/Li';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';
import home from '../assets/images/home.svg';
import arrowBack from '../assets/images/arrow_back.svg';

function Queue(): React.ReactElement {
  const [state, setState] = useState<QueueProps>();
  const [queues, setQueues] = useState<JSX.Element[]>();
  const [show, setShow] = useState<boolean | null>(null);

  const showCanvas = () => {
    if (show) {
      setShow(!show);
    }
  };

  const nodes = [
    <LiImageHref
      image={hamburg}
      uniq={1}
      onClickHandler={showCanvas}
    />,
    <LiImageHref
      image={home}
      to="/home"
      uniq={2}
    />,
    <LiImageHref
      image={arrowBack}
      to="/markets"
      uniq={3}
    />,
  ];

  useEffect(() => {
    (async function catchQueues() {
      const queue = QueueServices.getInstance();
      try {
        const queuesList = await queue.getQueues() as QueueProps;
        setState(queuesList);
      } catch (error) {
        const log = LogServices.getInstance();
        await log.postLog(error);
      }
    }());
  }, []);

  useEffect(() => {
    const storage: string = localStorage.getItem('e-ticket') as unknown as string;
    const serial = JSON.parse(storage) as MarketProps;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('market') as string;
    // TODO: implementar esquema de tratamento de filas por mercado
    const market = serial.data.filter((res) => res.id.toString() === id);

    if (state) {
      setQueues(
        state.data.map((response) => (
          <Link to={`/tickets?market=${response.id}`}>
            <TicketMinor
              upside={response.value}
            />
          </Link>
        )),
      );
    }
  }, [state]);

  return (
    <Layout
      offcanvas={show}
      title="filas"
      nodes={nodes}
    >
      {queues}
    </Layout>
  );
}
export default Queue;
