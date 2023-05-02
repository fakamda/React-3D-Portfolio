import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75 )} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident vero quod dignissimos quisquam debitis magnam, eligendi eos et quibusdam culpa obcaecati consequatur molestiae id reprehenderit numquam vel sequi fugiat necessitatibus incidunt dicta enim veniam ex voluptatibus? Voluptas sequi quis doloribus consectetur quod in, placeat dolores delectus molestias, ab harum itaque sit iste, repellendus inventore. Distinctio hic veniam nihil quibusdam? Laboriosam soluta molestias, animi adipisci rem ad consequatur provident reiciendis excepturi nesciunt aliquam veniam. Error, in. Laborum nostrum eos soluta fugiat excepturi. Nulla non est nihil labore. Ratione, facilis. Quos voluptates nam necessitatibus aliquid sint iste saepe accusamus hic nihil?
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")