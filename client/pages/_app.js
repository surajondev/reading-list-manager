import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Script from 'next/script'

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
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script id="google-analytics" strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                        `}
          </Script>

        </div>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
