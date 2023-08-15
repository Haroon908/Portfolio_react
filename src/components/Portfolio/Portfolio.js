import React from 'react'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpeg'
import Img3 from '../../assets/portfolio3.jpg'
import './Portfolio.css'

const data = [
    {
        id:1,
        image:Img2,
        title:'MyBlog',
        github:'https://github.com/Haroon908/Django-Blog',
        demo:'https://github.com/Haroon908/Django-Blog'
    },
    {
        id:2,
        image:Img1,
        title:'Autherization_Graphql',
        github:'https://github.com/Haroon908/Authorization-Graphql-Django',
        demo:'https://github.com/Haroon908/Authorization-Graphql-Django'
    },
    {
        id:3,
        image:Img3,
        title:'Youtube-Clone',
        github:'https://github.com/Haroon908/Youtube_Clone',
        demo:'/'
    }
]

function Portfolio() {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container portfolio_container">
                {
                data.map(({id,image,title,github,demo}) => {
                    return(
                    <article key={id} className='portfolio_items'>
                    <div className="portfolio_item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_items-cta">

                        <a href={github} target='__blank' className='btn'> Github</a>
                        <a href={demo} target='__blank' className='btn btn-primary'>Live Demo</a>

                    </div>
                </article>
                    )
                })
            }
            </div>

        </section>
    )
}

export default Portfolio