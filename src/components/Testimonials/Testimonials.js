import React from 'react'
import './Testimonials.css'
import Img1 from '../../assets/avatar1.jpg'
import Img2 from '../../assets/avatar2.jpg'
import Img3 from '../../assets/avatar4.jpg'
     

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Ammar Rehman',
    review: 'Quite impressive by your  work discipline.Work was smooth and communication was really good.Thanks a lot.'
  },
  {
    id: 2,
    image: Img2,
    title: 'Saad Rehman',
    review: 'Thanks a lot for solving my problem with such skillset.Love the way you communicated with us and we are impressed by your work.'
  },
  {
    id: 3,
    image: Img3,
    title: 'Rubina',
    review: 'Great to see the work.Seems that you have put in a lot of effort.'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
         // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >

        {
          data.map(({ id, image, title, review }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client_avatar">
                  <img src={image} alt={title} />

                </div>
                <h3 className='client__name'>{title}</h3>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials