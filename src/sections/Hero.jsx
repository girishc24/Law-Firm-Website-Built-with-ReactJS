import { bigShoe1 } from "@/assets/images"
import { statistics } from "@/constants"
import { law } from "@/assets/images"


const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
       <p className="text-xl font-montserrat text-[#1b50aa]">Your Law Firm in Bangalore</p>
       <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[65px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          Ensuring Your  

          </span>
          <br />
          <span className="text-[#1b50aa] inline-block mt-3">Justice 

          </span>
          at Prime Legal
       </h1>
        <p className="text-slate-gray text-lg leading-8 mt-6 mb-4 sm:max-w-sm  font-montserrat">
        Legal matters, laws and court proceedings can be daunting for a common man. However, with the best advocates in Bangalore</p>
        
        

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
          ))
          };

          
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
          <img src={law}
           alt=""
           width={600}
           height={800}
           className="object-cover relative z-10"
           />

        </div>
    </section>
  )
}

export default Hero
