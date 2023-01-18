import React from 'react';
import CV from '../../assets/Sindile-CV.pdf'


const ActionButtons = () => {
    return ( 
        <div className='actionButtons'>
            <a href={CV} className='btn' download>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let`s talk</a>
        </div>
     );
}
 
export default ActionButtons;
