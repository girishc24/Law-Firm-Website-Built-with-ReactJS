import { 
  CustomerReviews,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe, 
  SuperQuality} from "./sections"
  import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">

      <Nav />

      <section className="xl:padding-l  padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
      <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8 text-white'>
        <Footer />
      </section>
    </main>
  );
};

export default App
