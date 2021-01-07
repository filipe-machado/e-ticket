import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import UserServices, { UserProps } from 'src/services/UserServices';
import LogServices from 'src/services/LogService';

// COMPONENTS
import { LiImageHref } from 'src/components/atoms/Li';
import TicketMinor from 'src/components/organism/TicketMinor';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';

function Home(): React.ReactElement {
  const [usuarios, setUsuarios] = useState<UserProps>();
  const [show, setShow] = useState<boolean | null>(null);
  const [start, setStart] = useState<boolean>(false);

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
  ];

  useEffect(() => {
    (async function catchUsers() {
      try {
        const user = UserServices.getInstance();
        const users = await user.getUsers() as UserProps;
        setUsuarios(users);
      } catch (error) {
        const log = LogServices.getInstance();
        await log.postLog(error);
      }
    }());
  }, []);
  return (
    <Layout
      start={start}
      offcanvas={show}
      title="bem vindo"
      nodes={nodes}
    >
      <Link to="/markets">
        <TicketMinor
          upside="nova senha"
        />
      </Link>
    </Layout>
  );
}

export default Home;
