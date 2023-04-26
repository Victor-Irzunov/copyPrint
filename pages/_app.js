
import Layout from '@component/components/Layout'
import '@component/styles/globals.css'

const App = ({ Component, pageProps }) =>  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

export default App