import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { staggerContainer } from '../utils/motion';

// note how the span is responsible for all the navbar scrolling i.e. when you click 'About' it scrolls because the ID is 'idName', which is entered when you call SectionWrapper on any component
const SectionWrapper = (Component, idName) => function HOC(){
    return(
        <motion.section variants={staggerContainer()} initial='hidden' whileInView="show" viewport={{once: true, amount:0.25}} 
        className={`${styles.paddingX} w-full max-w-7xl mx-auto relative z-0`}>
            <span className='#span' id = {idName}> &nbsp; </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper