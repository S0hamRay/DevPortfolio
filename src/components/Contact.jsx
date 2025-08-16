import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github, mail, insta } from '../assets';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import {contacts} from '../constants';

const ContactCard = ({ index, name, icon, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5)} className="sm:w-[360px] w-full">
     <center><div className='bg-tertiary p-5 rounded-2xl bg-gradient-to-b from-blue-400 hover:via-blue-500 to-purple-600'>
        <div className='relative w-full h-[230px] flex justify-center items-center'>
          <img src={icon} alt={name} className='w-20 h-20 object-contain' />
        </div>
        <div className='mt-5 text-center'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
        </div>
        <div className='mt-4 flex justify-center'>
          <button onClick={() => window.open(link, "_blank")} className='bg-black p-2 rounded-full cursor-pointer'>
            <img src={icon} alt={name} className='w-6 h-6 object-contain' />
          </button>
        </div>
      </div></center>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contacts</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          For more of my work, check out the following platforms:
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {contacts.map((contact, index) => (
          <ContactCard key={`contact-${index}`} index={index} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
