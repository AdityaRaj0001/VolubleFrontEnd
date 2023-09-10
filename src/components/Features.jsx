import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import data from '../card-data'
import FeatureCard from './FeatureCard'
const Features = () => {
  return (
    
      <HorizontalScrollCarousel />
      
    
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <motion.div style={{ x }} className="flex h-auto justify-between gap-2 md:gap-4 ">
        {data.map((card_data,key) => {
          return <FeatureCard  title={card_data.title} desc={card_data.desc} Icon={card_data.icon} key={key} />;
        })}
      </motion.div>
    </div>
  </section>
  );
};

export default Features;

