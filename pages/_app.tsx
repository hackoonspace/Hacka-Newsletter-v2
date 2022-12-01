import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Head } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY as string}>
      <Head />
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}
