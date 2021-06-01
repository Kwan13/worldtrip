import { Header } from '../components/Header';
import { Banner } from '../components/Home/Banner';
import { DetailsGrid } from '../components/Home/DetailsGrid';
import { Carousel } from '../components/Home/Carousel';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DetailsGrid />
      <Carousel />
    </>
  )
}

