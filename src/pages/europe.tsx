import { Header } from '../components/Header';
import { Banner } from '../components/Europe/Banner';
import { DescriptionGrid } from '../components/Europe/DescriptionGrid';
import { CountryGrid } from '../components/Europe/CountryGrid';

export default function Europe() {
  return (
    <>
      <Header />
      <Banner />
      <DescriptionGrid />
      <CountryGrid />
    </>
  );
}