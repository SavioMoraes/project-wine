import Image from "next/image"

export const getStaticPaths = async() => {

  const maxWines = 10

  const api = 'https://wine-back-test.herokuapp.com/products'

  const res = await fetch(`${api}?limit=${maxWines}`)
  const data = await res.json()

  const paths = data.items.map((wine, index) => {
    return {
      params: { wineId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.wineId

  const maxWines = 10

  const api = 'https://wine-back-test.herokuapp.com/products'

  const res = await fetch(`${api}?limit=${maxWines}${id}`)

  const data = await res.json()

  return {
    props: { 
      wine: data,
    }
  }  
}

export default function Wine({ wine }) {
  return (
    <div>
      <h1>{wine.name}</h1>
      <Image
        src={wine.image}
        width="150"
        height="220"
        alt={wine.name}
      />
    </div>
  )
}