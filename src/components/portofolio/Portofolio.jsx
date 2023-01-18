import React from 'react';
import './portofolio.css'

// import IMG1  from '../../assets/portofolio1.png'
// import IMG2  from '../../assets/portofolio2.png'
// import IMG3  from '../../assets/portofolio3.png'
// import IMG4  from '../../assets/portofolio4.png'
// import IMG5  from '../../assets/portofolio5.png'
// import IMG6  from '../../assets/portofolio6.png'

const Portofolio = () => {
    return (  
        <section id='portofolio'>
            <h5>My recent work</h5>
            <h2>Portofolio</h2>

            <div className="container portofolio__container">
                <article className="portofolio-item">
                    <div className="portofolio__item-image">
                        <img src='' alt="" srcset="" />
                    </div>
                    <h3>This is a portofolio item</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank'> GitHub</a>
                        <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portofolio-item">
                    <div className="portofolio__item-image">
                        <img src='' alt="" srcset="" />
                    </div>
                    <h3>This is a portofolio item</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank'> GitHub</a>
                        <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portofolio-item">
                    <div className="portofolio__item-image">
                        <img src='' alt="" srcset="" />
                    </div>
                    <h3>This is a portofolio item</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank'> GitHub</a>
                        <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portofolio-item">
                    <div className="portofolio__item-image">
                        <img src='' alt="" srcset="" />
                    </div>
                    <h3>This is a portofolio item</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank'> GitHub</a>
                        <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portofolio-item">
                    <div className="portofolio__item-image">
                        <img src='' alt="" srcset="" />
                    </div>
                    <h3>This is a portofolio item</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank'> GitHub</a>
                        <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}
 
export default Portofolio;