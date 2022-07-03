import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Card from '../components/Card'

export async function getStaticProps() {

  const maxWines = 10

  const api = 'https://wine-back-test.herokuapp.com/products'

  const res = await fetch(`${api}?limit=${maxWines}`)
  const data = await res.json()

  data.items.forEach((item, index) => {
    item.id = index + 1
  })
  
  return {
    props: {
      wines: data.items,
    }
  }
}

export default function Home({ wines }) {

  return (
    <>
      <Head>
        <title>Wine</title>
      </Head>
      <div className={styles.wines_container}>
        {wines.map((wine) => (
          <Card key={wine.id} wine={wine} />
        ))}
      </div>
    </>
  )
}
