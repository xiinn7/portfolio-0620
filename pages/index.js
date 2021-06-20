import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Card from '../components/card/Card'


export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
      </Head>
      
      <Layout><Card/></Layout>
    </div>
  )
  
}
