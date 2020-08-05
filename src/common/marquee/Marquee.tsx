import React from 'react';
import './Marquee.css';
import {BsDot} from 'react-icons/bs';

class Marquee extends React.Component{

    render(){
        return(
            <div className='marquee'>
                <p className='marqueeText'>Announcements: <BsDot size={12}/> Admission Process - Ph.D Interview results by July, 2020  <BsDot size={12}/> Faculty Recruitment - Last date to apply: 31 May 2020 </p> 
            </div>
        )
    }
}

export default Marquee;