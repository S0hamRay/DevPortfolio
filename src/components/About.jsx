import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { waves2 } from '../assets';
import { SectionWrapper } from '../hoc';
import { polygons } from '../assets';

// Modal component for displaying additional information
const InfoModal = ({ isOpen, onClose, title, description, icon }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - covers the entire viewport */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          {/* Modal - always centered in viewport */}
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-tertiary p-6 rounded-2xl w-full max-w-md mx-4 pointer-events-auto"
            >
              <div className="flex items-center mb-4">
                <img src={icon} alt={title} className="w-10 h-10 mr-3" />
                <h3 className="text-white text-2xl font-bold">{title}</h3>
              </div>
              
              <div className="text-secondary text-base mb-5">
                {description}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ index, title, icon, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
          onClick={() => setModalOpen(true)}
        >
          <div 
            options={{ max: 45, scale: 1, speed: 450 }} 
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-400 hover:via-blue-500 hover:to-purple-600"
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            <p className="text-secondary text-sm mt-2 text-center">Click for more info</p>
          </div>
        </motion.div>
      </Tilt>

      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        description={description}
        icon={icon}
      />
    </>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-5 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        Throughout my academic journey, I have strived to expose myself to a variety of technologies and applications, ranging from frontend
        development to machine learning and from international olympiads to STEM coaching from one of the largest coaching institutes in India. My dynamic skillset is complemented by my creative side, including almost fifteen years of experience
        playing the guitar. Together, this allows me to evolve and thrive in a world of shifting necessities and endless possibilities. My focus on 'Ideas to Innovations' supplement my ability to think
        analogically by combining my background in mathematics and pure sciences with computer science expertise.
      </motion.p>
      
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-5 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        Currently pursuing my undergraduate degree in Computer Science, with a concentration in artificial intelligence, at Carnegie Mellon University
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");