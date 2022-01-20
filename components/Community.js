import { Grid, GridItem, Heading, Box, Text, Flex, Stack } from '@chakra-ui/react'
import { ThemedButton } from './Layout'
export const ItemCard = ({ title, children, bg, extra }) => (
  <Box p={5} borderRadius={10} bg={bg} color="black">
    <Heading fontSize={{ base: 'xl', md: '3xl'}} pb={5}>{title}</Heading>
     { children }
    <Box h="20px" />
    { extra }
  </Box>
)

export const Community = () => (
  <Box mt={20}>
    <Grid templateRows="repeat(1, 1fr)" templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} gap={5}>
      <ItemCard 
        extra={( 
          <ThemedButton title="LEARN MORE"/>
        )} 
        title="Solana Community" 
        bg="secondary.pink"
        >
          <Text fontSize="lg">There's something for everybody. Follow along, <br /> chat on Discord, or read up on what we’re doing.</Text>
      </ItemCard>
      <ItemCard 
        extra={( 
          <ThemedButton title="GET STARTED"/>
        )} 
        title="Solana Community" 
        bg="primary.tealgreen"
        >
          <Text fontSize="lg">Help secure the network by running <br /> decentralized infrastructure.</Text>
        </ItemCard>
        <GridItem p={5} colSpan={{ base: 1, md: 2 }} borderRadius={10} bg="secondary.lightblue">
          <Flex direction={{base: 'column', md: 'row'}}>
            <Flex flex={1}>
              <Heading fontSize={{ base: 'xl', md: '3xl'}}>Developer Resources</Heading>
            </Flex>
            <Flex flex={1}>
              <Stack spacing={5}>
                <Text fontSize="lg">See the get started guide, videos, tutorials, SDKs, <br /> reference implementations, and more.</Text>
                <ThemedButton style={{ width: 200}} title="START BUILDING"/>
              </Stack>
            </Flex>
          </Flex>
        </GridItem>
    </Grid>
  </Box>
)
