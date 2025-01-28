import { 
  CustomerReviews,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe, 
  SuperQuality,
  Contactus} from "./sections"
  import Nav from "./components/Nav";
  import { Toaster } from 'sonner';

const App = () => {
  return (
    <main className="relative">
      <Toaster position="top-center" richColors /> 

      <Nav />

      <section className="xl:padding-l  padding-b">
        <Hero />
      </section>
      
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <PopularProduct />
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
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='padding'>
        <Contactus />
      </section>
      <section className=' bg-black padding-x padding-t pb-8 text-white'>
        <Footer />
      </section>
    </main>
  );
};

export default App
