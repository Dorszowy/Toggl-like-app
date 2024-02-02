'use client';

import Link from 'next/link';
import GoToTimer from './components/buttons/go-to-timer-button/go-to-timer-button';
import { Container } from './page.styles';

const Home = () => {
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} href="/time-tracker">
        <GoToTimer />
      </Link>
    </Container>

    // <Link style={{ fontSize: '75px' }} href="/time-tracker">
    //   fancy <span style={{ color: 'red', fontSize: '75px' }}>Go To Timer</span> Link which was well coded and
    //   beautifully styled
    // </Link>
  );
};

export default Home;
