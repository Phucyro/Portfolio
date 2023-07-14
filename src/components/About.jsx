import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const About = () => {
  const ServiceCard = ({index,title,icon}) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280]x flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain"></img>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            
          </div>
        </motion.div>
      </Tilt>
    )
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Programming: an incredible, beautiful, complex world that you could compare to “limitless architecture”.
      From being an avid cryptocurrencies/wallstreetbets reddit user to having an educational background in economics and computer science, it was almost written in advance that I would end up in the IT industry, in the finance world or both.
      There is an underlying exciting gamble in every project. Being a semi-pro poker player, I’m always curious about investment strategy, psychology, understanding how people think and what they might do next.
      The common thing about poker players and developers? Stress management and environment analysis.  One of the (only) perks of being an overthinker is that I can see the big picture, tirelessly think about the do’s and don’ts of a project, avoid mistakes and push the ideas even further.
      All of those areas give me the chance to continually get inspired  by the people I’m around and learn from them to better myself.
      </motion.p>

      <motion.div className="mt-20" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          Personal favorites
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} 
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")