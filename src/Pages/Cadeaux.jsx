import React from 'react';
import mimi from '../Components/Img/mimi2.png';
import banner20 from '../Pages/Img/banner20.png'
import './CSS/Cadeaux.css'


const Cadeaux = () => {
  return (
    <div className='cadeaux'>
        <img src={mimi} alt="" />
     <h2>Nos Cadeaux <hr /></h2>
     <div className='banner'>
     <img src={banner20} alt="" />
     <button>Jouer</button>
     </div>
    </div>
  )
}

export default Cadeaux
