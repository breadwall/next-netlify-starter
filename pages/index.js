import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Breadwall the creaters of Luna Adventure!" />
        <p className="description">
          Contact breadwall649@gmail.com for questions or concerns.
        </p>
      </main>

      <Footer />
    </div>
  )
}
