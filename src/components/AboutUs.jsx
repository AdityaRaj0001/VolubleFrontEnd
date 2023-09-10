import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Vector from '../assets/Vector.png'
const AboutUs = () => {
  return (
    <section className="bg-black py-12 h-screen">
      <div className="flex mt-12 ">

<div className="w-1/2 flex justify-center">
<FloatingPhone />
</div>
       
        <div className="flex w-1/2 flex-col text-white items-center ">
          <h1 className="text-5xl mb-16 text-center">About Us</h1>

          <p className="text-2xl w-4/5 ">Just another bunch of dev enthusiasts! Yeah not Kidding Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi temporibus aperiam fugiat. Atque soluta quaerat vero blanditiis, cumque modi libero vitae dicta! Officia eligendi nam minus voluptas dolorem commodi consequuntur.
           </p>
        </div>
      </div>
    </section>
  );
};

const FloatingPhone = () => {
    return (
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-30deg) rotateX(15deg)",
        }}
        className="rounded-[24px] bg-blue-500"
      >
        <motion.div
          initial={{
            transform: "translateZ(8px) translateY(-2px)",
          }}
          animate={{
            transform: "translateZ(32px) translateY(-8px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
        >
          <HeaderBar />
          <Screen />
        </motion.div>
      </div>
    );
  };
  
  const HeaderBar = () => {
    return (
      <>
        <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
        <div className="absolute right-3 top-2 z-10 flex gap-2">
          <FiWifi className="text-white" />
          <FiBatteryCharging className="text-white" />
        </div>
      </>
    );
  };
  
  const Screen = () => {
    return (
      <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-slate-950">
        {/* Phone logo from logoispum */}
  
  
        <div>
        <img src={Vector} className="w-full"></img>
         <h4 className="text-white">Voluble</h4>
        </div>
         
  
        <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-blue-500 backdrop-blur">
          Discover
        </button>
  
        {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
        <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-blue-500" />
      </div>
    );
  };


export default AboutUs;