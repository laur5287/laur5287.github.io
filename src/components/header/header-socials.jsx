import React from 'react';
import {BsLinkedin} from 'react-icons/Bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
    return ( 
        <div className="header__socials">
            <a href="http://linkedin.com" target="_blank" rel=""><BsLinkedin /></a>
            <a href="http://github.com" target="_blank" rel=""><AiOutlineGithub /></a>
            <a href="http://dribble.com" target="_blank" rel=""><FiDribbble /></a>

        </div>
     );

}
 

export default HeaderSocials;