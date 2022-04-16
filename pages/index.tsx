import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MaxTsh Music App</title>
        <meta name="description" content="MaxTsh Music App will make you enjoy your time!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to Max Tsh Music App</h1>
      </div>
    </div>
  )
}

export default Home
