import Head from 'next/head'
import FilterComponent from '../components/FilterComponent'
import HeroComponent from '../components/HeroComponent'
import BlogComponent from '../components/BlogComponent'
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import { useGetProductsQuery } from '../slices/apiSlice'
import { NextPage } from 'next'


const Home: NextPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery()

  return (
    <>
      <Head>
        <title>Munchies - by @fahimesti</title>
        <meta name="description" content="Munchies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Topbar />
        <HeroComponent />
        {error && <p className='text-center p-2'>Something went wrong!</p>}
        {isLoading && <p className='text-center p-4'>Loading...</p>}
        {products &&
          <FilterComponent products={products} />
        }
        <BlogComponent />
        <ContactComponent />
        <Footer />
      </>
    </>
  )
}
export default Home;
