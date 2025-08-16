import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import {achievements} from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import {polygons} from '../assets';

// textVariant makes the p tags animated

const AchievementCard = ({ achievement }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={achievement.date}
    iconStyle={{background: '#a45ee5'}}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{achievement.title}</h3>
      <p className='text-secondary text-[18px]'>{achievement.description}</p>
    </div>
  </VerticalTimelineElement>
);

const Achievements = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've Been Up To</p>
        <h2 className={styles.sectionHeadText}>Education + Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Achievements, "work");
