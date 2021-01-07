import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import MarketServices, { MarketProps } from 'src/services/MarketServices';

// COMPONENTS
import TicketMinor from 'src/components/organism/TicketMinor';
import { LiImageHref } from 'src/components/atoms/Li';
import LogServices from 'src/services/LogService';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';
import home from '../assets/images/home.svg';
import arrowBack from '../assets/images/arrow_back.svg';

const nodes = [
  <LiImageHref
    image={hamburg}
    to="#menu"
    uniq={1}
  />,
  <LiImageHref
    image={home}
    to="/home"
    uniq={2}
  />,
  <LiImageHref
    image={arrowBack}
    to="/home"
    uniq={3}
  />,
];

function Market(): React.ReactElement {
  const [state, setState] = useState<MarketProps[]>();
  const [queues, setQueues] = useState<JSX.Element>();

  useEffect(() => {
    (async function catchMarkets() {
      const market = MarketServices.getInstance();
      try {
        const markets = await market.getMarkets();
        setState(markets.data);
      } catch (error) {
        const log = LogServices.getInstance();
        await log.postLog(error);
      }
    }());
  }, []);

  useEffect(() => {
    if (state) {
      /* setQueues(
        state.map((response) => (
          <Link to={`/queues?id=${response.id}`}>
            <TicketMinor
              upside={response.name}
            />
          </Link>
        )),
      ); */
      setQueues(
        <Link to="/queues?id=1">
          <TicketMinor
            upside="teste"
          />
        </Link>,
      );
    }
  }, [state]);

  return (
    <Layout
      title="estabelecimentos"
      nodes={nodes}
    >
      <div>
        {queues}
      </div>
    </Layout>
  );
}
export default Market;
