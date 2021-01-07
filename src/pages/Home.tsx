import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// SERVICES
import UserServices from 'src/services/UserServices';
import LogServices from 'src/services/LogService';

// COMPONENTS
import { LiImageHref } from 'src/components/atoms/Li';
import TicketMinor from 'src/components/organism/TicketMinor';
import Layout from './layout/Layout';

// ASSETS
import hamburg from '../assets/images/hamburg.svg';

const nodes = [
  <LiImageHref
    image={hamburg}
    to="#menu"
    uniq={1}
  />,
];

function Home(): React.ReactElement {
  const [usuarios, setUsuarios] = useState<unknown>();
  useEffect(() => {
    (async function catchUsers() {
      try {
        const user = UserServices.getInstance();
        const users = await user.getUsers();
        setUsuarios(users);
      } catch (error) {
        const log = LogServices.getInstance();
        await log.postLog(error);
      }
    }());
  }, []);
  return (
    <Layout
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
