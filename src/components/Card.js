import React from 'react'
import CardItem from './Pages/CardItem'
import './Card.css'

function Card() {
  return (
    <div className='cards'>
      <h1>Check out these Football News!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/georgia-news.jpg'
              text='Georgia breakthrough years in the making'
              label='News'
              path='/news'
            />
            <CardItem
              src='images/newsa1.jpg'
              text='QUIZ: How well do you remember the 2022/23 UEFA Nations League?'
              label='News'
              path='/news'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/trophytourannouncement.jpg'
              text='UEFA Euro 2024 Trophy Tour Makes Way Across Germany'
              label='News'
              path='/news'
            />
            <CardItem
              src='images/qualifired-teams.jpg'
              text='Check out qualifired teams in UEFA EURO 2024'
              label='News'
              path='/news'
            />
            <CardItem
              src='images/group_c.jpg'
              text='EURO 2024 Group C in_depth'
              label='News'
              path='/news'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
