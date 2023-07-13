import {motion} from 'framer-motion';

import {styles} from '../styles';
import {picture} from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className="text-[#C0C0C0]">Hong</span></h1>
            <p className={`${styles.heroSubText}mt-2 text-white-100`}>
              I am an ardent explorer of the digital cosmos, perpetually enraptured by the symphony of technology.
            </p>
            <div className="flex justify-center items-start">
              <img src={picture} alt="picture" className="w-full max-w-2/5 max-h-[55vh] object-contain mt-8" />
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero