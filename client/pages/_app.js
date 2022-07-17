import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const theme = extendTheme({
  colors: {
    primary:{
      100: '#D53F8C'
    }
  }
})

function MyApp({ Component, pageProps }) {
  const desiredChainId = ChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={desiredChainId} >
      <ChakraProvider theme={theme}>
        <div className="background">
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
