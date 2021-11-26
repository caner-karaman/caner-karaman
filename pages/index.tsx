import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Promotion from '../components/Promotion';
import CountSection from '../components/CountSection';
import RecentProjects from '../components/RecentProjects';
import NewsLetter from '../components/Newsletter';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout path="home">
      <Head>
        <title>Anasayfa</title>
      </Head>
      <main>
        <Promotion></Promotion>
        <CountSection></CountSection>
        <RecentProjects></RecentProjects>
        <NewsLetter />
        <Footer />
      </main>
    </Layout>
  )
}

export default Home
