import "../styles.css";
import { motion } from "framer-motion";
import famaly from '../assets/img/agents/undraw_family_vg76.svg'

 

 
 

const  MotionDiv=({motionStyle})=> {
  
 const  { rotate,text,img,offx,offy,onx,ony}=motionStyle



const cardVariants= { 
  offscreen: {
    y:offy?offx:0,
    x:offx?offx:0,
    rotate: rotate,
    scale: -1  
  },
  onscreen: {
    y:ony?ony: 0,
    x:onx?onx:0,
    rotate: rotate,
    scale: 1.2,
    transition: {
      type: "spring",
      bounce: .3,
      duration: .8
    }
  }
};

  
  
  
  return  (
    <motion.div
    className="my-12  w-full ml-2"
    initial="offscreen"
    whileInView="onscreen"
    whileTap={{ scale: 0.8 }}
    viewport={{ once: true, amount: 0.8 }}
  >
  
    <motion.div className="h-52  flex items-center justify-center w-40 rounded-lg" variants={cardVariants}>
      <p>
        {img?<img src={famaly} alt='' />:text}
      </p>
    </motion.div>
    
  </motion.div>
  )
}

export default MotionDiv