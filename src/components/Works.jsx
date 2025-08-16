import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll feature
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const currentProject = projects[currentIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I'm Doing Now</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-light text-[17px] max-w-3xl leading-[30px]'>
          Some cool projects of mine
        </motion.p>
      </div>

      {/* Carousel Container with padding for the arrows */}
      <div className='mt-20 relative w-full max-w-4xl mx-auto px-16 pb-20'>
        {/* Main Carousel Slide */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='bg-tertiary p-8 rounded-2xl transition-all duration-300 hover:bg-gradient-to-b hover:from-orange-400 hover:via-yellow-500 hover:to-purple-600'
        >
          <a href={currentProject.source_code_link} className="block">
            <div className='relative w-full h-[400px] mb-6'>
              <img 
                src={currentProject.image} 
                alt={currentProject.name} 
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
            
            <div>
              <h3 className='text-white text-[32px] font-bold'>{currentProject.name}</h3>
              <p className='mt-4 text-secondary text-[18px]'>{currentProject.description}</p>
            </div>
            
            <div className='mt-6 flex flex-wrap gap-2'>
              {currentProject.tags.map((tag) => (
                <p key={tag.name} className={`text-[16px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </a>
        </motion.div>

        {/* Enhanced Navigation Arrows - Positioned outside the carousel */}
        <button 
          className="absolute top-1/2 -left-8 -translate-y-1/2 bg-blue-600 text-white p-4 w-16 h-16 rounded-full z-10 
                    shadow-lg shadow-blue-500/50 hover:bg-blue-700 hover:scale-110 transition-all duration-300 
                    flex items-center justify-center font-bold text-2xl"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        
        <button 
          className="absolute top-1/2 -right-8 -translate-y-1/2 bg-blue-600 text-white p-4 w-16 h-16 rounded-full z-10 
                    shadow-lg shadow-blue-500/50 hover:bg-blue-700 hover:scale-110 transition-all duration-300
                    flex items-center justify-center font-bold text-2xl"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* Indicator Dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-blue-900/30 py-2 px-4 rounded-full">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works);