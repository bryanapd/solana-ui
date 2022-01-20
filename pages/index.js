import Head from 'next/head'
import Image from 'next/image'
import { 
  Box, Container, Divider
} from '@chakra-ui/react'
import { 
  Header, Nav, Hero, Tracker, Ecosystem, Feature, 
  Scale, Network, Decentralized, Community, Footer
} from '../components/'

export default function Home() {
  return (
    <Box bg="black" overflowX="hidden">
      <Header />
      <Nav />
      <Hero />
      <Tracker />
      <Container maxW="container.xl" pt={20}>
        <Ecosystem />
      </Container>
      <Container maxW="container.xl">
        <Feature />
      </Container>
      <Container maxW="container.xl" pt={20}>
        <Scale />
      </Container>
      <Container maxW="container.xl" pt={20}>
        <Network />
      </Container>
      <Decentralized />
      <Container maxW="container.lg" pt={20}>
        <Community />
      </Container>
      <Container maxW="container.lg" pt={20}>
        <Divider />
      </Container>
      <Container maxW="container.lg" pt={20}>
        <Footer />
      </Container>
    </Box>
  )
}
