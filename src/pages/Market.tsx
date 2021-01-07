import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import MarketServices, { MarketProps } from 'src/services/MarketServices';

// COMPONENTS
import Loader from 'src/components/Loader';
import TicketMinor from 'src/components/organism/TicketMinor';
import { LiImageHref } from 'src/components/atoms/Li';
import LogServices from 'src/services/LogService';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';
import home from '../assets/images/home.svg';
import arrowBack from '../assets/images/arrow_back.svg';

function Market(): React.ReactElement {
  const [state, setState] = useState<MarketProps>();
  const [queues, setQueues] = useState<JSX.Element[]>();
  const [show, setShow] = useState<boolean | null>(null);
  const [start, setStart] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const showCanvas = () => {
    if (!start) {
      setStart(true);
    }
    setShow(!show);
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
      to="/home"
      uniq={3}
    />,
  ];

  useEffect(() => {
    (async function catchMarkets() {
      const market = MarketServices.getInstance();
      try {
        const markets = await market.getMarkets() as MarketProps;
        setState(markets);
      } catch (error) {
        const log = LogServices.getInstance();
        await log.postLog(error);
      } finally {
        setLoading(false);
      }
    }());
  }, []);

  useEffect(() => {
    if (state) {
      setQueues(
        state.data.map((response) => (
          <Link to={`/queues?market=${response.id}`}>
            <TicketMinor
              upside={response.name}
            />
          </Link>
        )),
      );
      const data = state as unknown as string;
      localStorage.setItem('e-ticket', JSON.stringify(data));
    }
  }, [state]);

  return (
    <>
      {
        loading ? <Loader /> : (
          <Layout
            start={start}
            offcanvas={show}
            title="estabelecimentos"
            nodes={nodes}
          >
            {queues}
          </Layout>
        )
      }
    </>
  );
}
export default Market;
