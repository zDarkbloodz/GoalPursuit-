import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OpeningSectionContainer = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #00ffff;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #ff00ff;
`;

const OpeningSection = () => {
  return (
    <OpeningSectionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Name
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Eric J. Reyes Rivera
      </Name>
      <Title
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Goal Pursuit Journey
      </Title>
    </OpeningSectionContainer>
  );
};

export default OpeningSection;
