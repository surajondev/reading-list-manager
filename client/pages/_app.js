import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Script from 'next/script'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const theme = extendTheme({
  colors: {
    primary:{
      100: '#D53F8C'
    }
  }
})

function MyApp({ Component, pageProps }) {
  const desiredChainId = ChainId.Mumbai;

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThirdwebProvider desiredChainId={desiredChainId} >
      <ChakraProvider theme={theme}>
        <div className="background">
          <Component {...pageProps} />
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />

          <Script id="google-analytics" strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
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
