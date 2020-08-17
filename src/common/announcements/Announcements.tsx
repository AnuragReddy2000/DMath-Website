import React from'react';
import './Announcements.css';
import {BsDot} from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface AnnouncementsProps{
    changeTab: (tab: string) => void;
}

class Announcements extends React.Component<AnnouncementsProps>{

    render(){
        return(
            <div className='announcementColumn'>
                <div className='announcements'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between',alignItems:'center'}}> <AiOutlineNotification size={22} className='announcementIcon'/> <p className='announceTitle'> Announcements:</p> </div>
                    <p className='announceList' > <BsDot/> Admission Process - Ph.D Interview results by July, 2020</p>
                    <p className='announceList' > <BsDot/> Faculty Recruitment - Last date to apply: 31 May 2020</p>
                </div>
                <Link to='/news/events' style={{textDecoration: 'none', color: 'inherit'}} className='eventsButton'>
                    <div onClick={() => {this.props.changeTab('Events')}}>
                        <p>Go to Events Page</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Announcements;