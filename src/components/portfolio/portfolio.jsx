import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <h3>Chart View</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/ChartView.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://chartview.onrender.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG2}></img>
          </div>
          <h3>Portfolio Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/MY-PORTFOLIO.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://personal-profile-jp.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG3}></img>
          </div>
          <h3>Sorting Visualiser</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/Sorting-Visualizer.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://ishu116.github.io/Sorting-Visualizer/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG4}></img>
          </div>
          <h3>Color Guess Game</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/Color-Guess-Game.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://ishu116.github.io/Color-Guess-Game/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG5}></img>
          </div>
          <h3>Note Making App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/NOTE-MAKING-APP.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://dus379.csb.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG6}></img>
          </div>
          <h3>Todo List</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ishu116/TODO-LIST.git' className='btn' target='_blank'>GtiHub</a>
          <a href='https://oe6y7.csb.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default portfolio