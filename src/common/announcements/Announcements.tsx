import React from'react';
import './Announcements.css';
import {BsDot} from 'react-icons/bs';

class Announcements extends React.Component{

    render(){
        return(
            <div className='announcementColumn'>
                <div className='announcements'>
                    <p className='announceTitle'>Announcements:</p>
                    <p className='announceList' > <BsDot/> Admission Process - Ph.D Interview results by July, 2020</p>
                    <p className='announceList' > <BsDot/> Faculty Recruitment - Last date to apply: 31 May 2020</p>
                </div>
                <div className='events'>
                    <p className='announceTitle'>Upcoming Events:</p>
                    <p className='announceList' > <BsDot/> Admission Process - Ph.D Interview results by July, 2020</p>
                    <p className='announceList' > <BsDot/> Faculty Recruitment - Last date to apply: 31 May 2020</p>
                </div>
            </div>
        )
    }
}

export default Announcements;