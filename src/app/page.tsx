import Link from 'next/link';

const Home = () => {
  return (
    <Link style={{ fontSize: '75px' }} href="/time-tracker">
      fancy <span style={{ color: 'red', fontSize: '75px' }}>"Go To Timer"</span> Link which was well coded and
      beautifully styled
    </Link>
  );
};

export default Home;
