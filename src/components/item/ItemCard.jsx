import React from 'react'
import {RiPlaystationLine, RiXboxFill, RiMacLine, RiWindowsFill, RiAndroidLine, RiAppleFill } from 'react-icons/ri'
import {DiLinux } from 'react-icons/di'
import {SiNintendo } from 'react-icons/si'

// styles
import './ItemCard.scss'

export default function Itemcard({ item }) {
  
  const { name, rating, metacritic, parent_platforms, background_image, id } = item

  console.log(parent_platforms)
  
  /* console.log(item) */
  return (  
      <li className="item_card item_card_front" key={id}>
          <img src={background_image} alt={name} className='game_img' />
          <h2>{name}</h2>
          <div className="item_info">
              <div>
                  <span className="item_score">Rating: {rating}</span>
          <span className="item_score">Metacritic: {metacritic}</span>
          <div className='item_platforms'>
                  {parent_platforms.map(p => 
                  (
                    <>
                     <span key={Math.random() * 123}>{p.platform.name 
                    ?
                     (p.platform.name === 'PC' ? <RiWindowsFill /> : null
                    ||  p.platform.name === 'PlayStation' ? <RiPlaystationLine /> : null
                    || p.platform.name === 'Xbox' ?  <RiXboxFill />  : null 
                    || p.platform.name === 'Nintendo'?  <SiNintendo /> : null
                    || p.platform.name === 'Apple Macintosh' ? <RiMacLine /> : null
                    || p.platform.name === 'Linux' ? <DiLinux /> : null
                    || p.platform.name === 'Android' ?  <RiAndroidLine /> : null
                    || p.platform.name === 'iOS' ? <RiAppleFill /> : null
                    )   : p.platform.name          
                    }</span>
                    </>
                  ))}
          </div>
              </div>
          </div>
          <div className="item_card_back item_review">
              <p>review</p>
              <p>item title</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsam fugiat facilis dolorum
                  at impedit quae laboriosam ullam laudantium optio.</p>
          </div>
      </li>
  )
}
