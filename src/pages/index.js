//routes
import routes from 'src/routes'
import { useRouter } from 'next/router'
import Link from 'next/Link'

//store
import { useStore } from 'src/store'

//use
import { useWindowSize } from 'react-use'

//methods & components
import dynamic from 'next/dynamic'
import * as components from 'src/mixin/components'
import { isEmpty, fetchAPI } from 'src/mixin/methods'

const { Layout, Lightbox, Icon } = components

export default function Home(){
  const store = useStore()
  const winSize = useWindowSize()
  const router = useRouter()

  return (<></>)
}


export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // const result = await

  // return {
  //   props: {
  //     posts,
  //   },
  // }
  return {
    props: {}
  }
}

