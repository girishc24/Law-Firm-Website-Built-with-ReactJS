import { arrowRight } from "../assets/icons";
import { special } from "../assets/images";


const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={special}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-[#1b50aa]'>Achieving  </span>
          Excellence 
        </h2>
        <p className='mt-4 info-text'>
        We provide a comprehensive range of legal services customised to meet the diverse and 
        unique needs of our clients. With a team of the best advocates in Bangalore, we 
        specialise in handling criminal cases, family disputes, corporate matters and 
        commercial litigation, and more. Committed to supporting our clients with compassion 
        and dedication, our high success rate establishes us as one of the top law firms in Bangalore.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          {/* <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;