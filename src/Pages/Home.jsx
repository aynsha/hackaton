import React from 'react';
import Hero from '../Components/Hero/Hero';
import lion from '../Components/Img/lion.png';
import ballon from '../Components/Img/ballon.png';
import famille from '../Components/Img/famille.png';
import classe from '../Components/Img/classe.png';
import lionceau from '../Components/Img/lionceau.png';
import video from '../Components/Img/video.png';
import bloc3 from '../Components/Img/bloc3.png';
import desBallons from '../Components/Img/desBallons.png';
import './CSS/Home.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <section>
      <h2>About us<hr /></h2>
      <div  className="container-1">
      <div className='img-left'>
        <img src={lion} alt="" />
      </div>
      <div className='text-about'>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim  </p>
      <button>Voir tout les jeux</button>
      </div>
      <div className='img-right'>
        <img src={ballon} alt="" />
      </div>
      </div>
      </section>
      <section className='catalogue'>
        <h2>Catalogue <hr/> </h2>
        <div className='blocs'>
          <div className='bloc1'>
            <div className='img1'>
            <img src={famille} alt="" />
            </div>
            <div className='bloc1-1'>
            <h3>La Famille</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
            <button>Je découvre</button>
            </div>
          </div>
          <div className='bloc2'>
            <div className='img2'>
            <img src={classe} alt="" />
            </div>
            <div className='bloc2-1'>
            <h3>Les écoles</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
            <button>Je découvre</button>
            </div>
          </div>
          <div className='bloc3'>
            <div className='img3'>
            <img src={lionceau} alt="" />
            </div>
            <div className='bloc3-1'>
            <h3>Les écoles</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
            <button>Je découvre</button>
            </div>
          </div>
        </div>
      </section>
      <section className='comment'>
        <div className='bloc-left'>
          <h2>Comment ça marche ?<hr/></h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
          </div>
          <div className='bloc-right'>
            <img src={video} alt="" />
          </div>
      </section>
      <section className='recompense'>
        <h2>Systéme de Récompenses<hr/></h2>
        <div className='text-left'>
          <img src={desBallons} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
        </div>
        <div className='imgs'>
          <img src={bloc3} alt="" />
        </div>
      </section>
      
    </div>
  )
}

export default Home
