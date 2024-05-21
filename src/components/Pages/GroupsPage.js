// src/GroupsPage.js
import React from 'react';
import './GroupsPage.css';
import Group from '../Group';

const groupsData = [
  {
    name: 'Group A',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  },
  {
    name: 'Group B',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  },
  {
    name: 'Group C',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  },
  {
    name: 'Group D',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  },
  {
    name: 'Group E',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  },
  {
    name: 'Group F',
    teams: [
      { name: 'Germany', flag: 'uk' },
      { name: 'Scotland', flag: 'uk' },
      { name: 'Hungary', flag: 'al' },
      { name: 'Switzerland', flag: 'al' }
    ]
  }
  // You can add more groups here
];

const GroupsPage = () => {
  return (
    <div className="groups-page">
      <header>
        <h1>Groups</h1>
      </header>
      <div className="groups-container">
        {groupsData.map((group, index) => (
          <Group key={index} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
