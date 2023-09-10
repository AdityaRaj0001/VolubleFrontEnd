import { motion } from "framer-motion";

const Card1 = () => {
  return (
    <section className="bg-black py-12 h-screen">
      <div className="flex mt-12 ">

<div className="w-1/2 flex justify-center">
<Card  />
</div>
       
        <div className="flex w-1/2 flex-col text-white items-center ">
          <h1 className="text-5xl mb-16 text-center">How it Works</h1>

          <p className="text-2xl w-1/2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit animi tenetur quae placeat architecto nihil esse velit aspernatur similique recusandae!</p>
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          New
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-8 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          Voluble
        </motion.span>
        <p className="">
        Elevate conversations with Voluble, where words find resonance and connections are made effortlessly
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Download The APP now
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default Card1;