import Head from 'next/head';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div className="bg-black">
          <Header />
          {/* <Banner />
          <Nav />
          <About />
          <Services />
          <Work />
          <Contact /> */}
          {/* <div className='h-[4000px]'></div> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
