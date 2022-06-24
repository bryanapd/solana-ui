import { Box, Text, Stack, AspectRatio, Heading, position, Button } from '@chakra-ui/react'
import { ThemedButton } from './Layout'

export const GreetingCard = ({ title = 'Say hello' }) => (
    <Box 
      p={5} 
      h={{ base: 'auto', md: "280px" }}
      w={{ base: 'auto', md: '500px' }} 
      textAlign="center" 
      top="20" right="0" 
      bg="#19F095" color="black" 
      pos={{ base: 'relative', md: 'absolute' }} 
      borderRadius="lg"
      zIndex={999}>
      <Heading size="4xl" mb={5}>{title}</Heading>
      <Text fontSize="lg" mb={10}>Learn more about Solana and <br /> see what makes it great.</Text>
      <Button size="md" bg="black" color="white" rounded="full">WATCH VIDEO</Button>
    </Box>
)
export const Feature = () => (
  <Box mt={10} pos="relative"> 
    <GreetingCard />
    <AspectRatio>
      <iframe 
        showinfo="0" 
        allow="autoplay" 
        src="https://player.vimeo.com/external/589416920.sd.mp4?s=2cadb33b13c6414622f3ab975b959029b54018e1&profile_id=165&autoplay=1" 
        />
    </AspectRatio>
  </Box>
)