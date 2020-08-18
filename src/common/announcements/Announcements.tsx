import React from'react';
import './Announcements.css';
import {BsDot} from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {AiOutlineCloseSquare} from 'react-icons/ai';

interface AnnouncementsProps{
    changeTab: (tab: string) => void;
    hideAnnouncements: () => void;
}

class Announcements extends React.Component<AnnouncementsProps>{

    render(){
        return(
            <div className='announcementColumn'>
                <AiOutlineCloseSquare onClick={this.props.hideAnnouncements} size={20} color='darkred' className='closeIcon'/>
                <div className='announcements'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between',alignItems:'center'}}> <p className='announceTitle'> Announcements:</p> </div>
                    <p className='announceList' > <BsDot/> Admission Process - Ph.D Interview results by July, 2020</p>
                    <p className='announceList' > <BsDot/> Faculty Recruitment - Last date to apply: 31 May 2020</p>
                </div>
                <div className='events'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between',alignItems:'center', width:'90%'}}> <p className='announceTitle'> Upcoming Events:</p> </div>
                    <div style={{height: "90%"}}>
                        <iframe src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=2&amp;bgcolor=%23fafafa&amp;ctz=Asia%2FKolkata&amp;src=bGV1N2d0bGhpYmx1MHRzYmkxNW5kdW5kYjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D81B60&amp;color=%230B8043&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showDate=0&amp;showNav=0&amp;mode=AGENDA" style={{borderWidth:"0", width:"100%", height:"100%",}}></iframe>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Announcements;