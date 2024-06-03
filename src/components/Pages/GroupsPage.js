// src/GroupsPage.js
import React from 'react';
import './GroupsPage.css';
import Group from '../Group';

const groupsData = [
  {
    name: 'Group A1',
    teams: [
      { name: 'Poland', flag: 'poland.jpg' },
      { name: 'Portugal', flag: 'portugal.jpg' },
      { name: 'Scotland', flag: 'scotland.jpg' },
      { name: 'Croatia', flag: 'croatia.jpg' }
    ]
  },
  {
    name: 'Group A2',
    teams: [
      { name: 'Belgium', flag: 'belgium.jpg' },
      { name: 'France', flag: 'france.jpg' },
      { name: 'Israel', flag: 'israel.jpeg' },
      { name: 'Italy', flag: 'italy.jpg' }
    ]
  },
  {
    name: 'Group A3',
    teams: [
      { name: 'Germany', flag: 'germany.jpg' },
      { name: 'Hungary', flag: 'hungary.jpg' },
      { name: 'Netherlands', flag: 'netherlands.jpg' },
      { name: 'Bosnia and Herzegovina', flag: 'bosnia-herzegovina.jpeg' }
    ]
  },
  {
    name: 'Group A4',
    teams: [
      { name: 'Denmark', flag: 'denmark.jpg' },
      { name: 'Spain', flag: 'spain.jpg' },
      { name: 'Switzerland', flag: 'switzerland.jpg' },
      { name: 'Serbia', flag: 'serbia.jpg' }
    ]
  },
  {
    name: 'Group B1',
    teams: [
      { name: 'Albania', flag: 'poland.jpg' },
      { name: 'Georgia', flag: 'portugal.jpg' },
      { name: 'Ukraine', flag: 'scotland.jpg' },
      { name: 'Czechia', flag: 'croatia.jpg' }
    ]
  },
  {
    name: 'Group B2',
    teams: [
      { name: 'England', flag: 'belgium.jpg' },
      { name: 'Finland', flag: 'france.jpg' },
      { name: 'Greece', flag: 'greece.jpg' },
      { name: 'Republic of Ireland', flag: 'italy.jpg' }
    ]
  },
  {
    name: 'Group B3',
    teams: [
      { name: 'Austria', flag: 'germany.jpg' },
      { name: 'Norway', flag: 'hungary.jpg' },
      { name: 'Slovenia', flag: 'netherlands.jpg' },
      { name: 'Kazakhstan', flag: 'kazakhstan.jpeg' }
    ]
  },
  {
    name: 'Group B4',
    teams: [
      { name: 'Iceland', flag: 'denmark.jpg' },
      { name: 'Turkey', flag: 'spain.jpg' },
      { name: 'Wales', flag: 'switzerland.jpg' },
      { name: 'Montenegro', flag: 'serbia.jpg' }
    ]
  },
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
