import { Box, Text, Flex, Spacer, Button} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export const Header = ({ title = 'Solana is carbon neutral'}) => (
    <Link href="https://solana.com/environment">
      <Flex h="35px" justify="center" bgGradient="linear(to-r, #59C173, #6dd5ed ,#A770EF)">
        <Flex cursor="pointer" _hover={{ color: 'white' }} align="center">
          <Text>{title}</Text>
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </Link>
)