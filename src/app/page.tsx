'use client';
/* eslint-disable react/no-unescaped-entities */

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
  );
};

export default Home;
