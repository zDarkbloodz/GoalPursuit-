import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled(motion.div)`
  max-width: 800px;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 2;
`;

const IconWrapper = styled(motion.div)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.color};
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${props => props.color};
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Section = ({ id, title, content, Icon, color, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionContainer
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <IconWrapper
          color={color}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon />
        </IconWrapper>
        <Title
          color={color}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </Title>
        <Description
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content}
        </Description>
      </Content>
    </SectionContainer>
  );
};

export default Section;
