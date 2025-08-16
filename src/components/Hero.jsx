import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { waves3 } from '../assets';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'ML researcher',
    'computational neuroscientist',
    'full stack programmer',
    'a whole lot more'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Set typing speed based on the action (typing or deleting)
      setTypingSpeed(isDeleting ? 75 : 150);

      // If finished typing, start deleting after a pause
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // If finished deleting, move to next text
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, textArray, typingSpeed]);

  return (
    <section className='relative w-full h-screen mx-auto'>  
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hello, I'm <span className='text-[#9153ff]'> Soham Raychaudhuri </span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            <span>{text}</span>
            <span className="cursor">|</span>
            <style jsx>{`
              .cursor {
                font-weight: 100;
                animation: blink 1s step-end infinite;
              }
              @keyframes blink {
                from, to { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
          </p>
        </motion.div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      <img src={waves3} alt="logo" style={{ width: '100%', height: 'auto' }} />
    </section>
  );
};

export default Hero;