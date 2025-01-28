import { shoe8 } from "../assets/images";
import { aboutus } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Discover Our  
          <span className='text-[#1b50aa]'> Legal </span>Expertise
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        With 15+ years of experience Prime Legal, stands as the best law firm in Bangalore.
         With a vision to get justice to all the clients with individual attention our founders
          Adv Ayantika and Adv Anik established Prime Legal in the year of 2009. We prioritise your 
          confidentiality through out the legal process. Our team comprises 24 top lawyers in Bangalore
           each committed to delivering exceptional legal solution tailored to your specific needs
        </p>
        
        {/* <div className='mt-11'>
          <Button label='View details' />
        </div> */}
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={aboutus}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;