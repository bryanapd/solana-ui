import { Box, Text, Stack, AspectRatio, Heading, position } from '@chakra-ui/react'
import { ThemedButton } from './Layout'

export const GreetingCard = ({ title = 'Say hello' }) => (
  <Box align="center">
    <Box p={5} h="280px" w={{base: 'auto', md: '500px'}} top="20" right="0" bg="#19F095" color="black" borderRadius={10}
      pos={{ md: '', lg: 'absolute' }} zIndex={999} 
    >
      <Heading size="4xl" pb={5}>{title}</Heading>
      <Text fontSize="lg" pb={10}>Learn more about Solana and <br /> see what makes it great.</Text>
      <ThemedButton title="WATCH VIDEO"/>
    </Box>
    {/* <Box pos="absolute" h="80px" w="500px" top="0" right="0" bg="#19F095" /> */}
  </Box>
  
)
export const Feature = () => (
  <Box mt={10} pos="relative"> 
    <GreetingCard />
    <AspectRatio>
      <iframe 
      showinfo="0" allow="autoplay" allow 
      src=
      "https://player.vimeo.com/external/589416920.sd.mp4?s=2cadb33b13c6414622f3ab975b959029b54018e1&profile_id=165&autoplay=1" 
      />
    </AspectRatio>
  </Box>
)