import React, { useEffect, useState } from 'react';
import Text from '../ui/Text';
import './style.module.scss';
import Title from '../ui/Title';

const Catchphrase = () => {
  return (
    <div className="position-center top-1/4">
      <Text type="p">어디서나, 언제나, 팀은</Text>
      <Title type="main">팀 마스터</Title>
    </div>
  );
};

export default Catchphrase;
