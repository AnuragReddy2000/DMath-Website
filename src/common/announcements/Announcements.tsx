import React from'react';
import './Announcements.css';
import {BsDot} from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import {MdEvent} from 'react-icons/md';

class Announcements extends React.Component{

    render(){
        return(
            <div className='announcementColumn'>
                <div className='announcements'>
                    <p className='announceTitle'> <AiOutlineNotification/> Announcements:</p>
                    <p className='announceList' > <BsDot/> Admission Process - Ph.D Interview results by July, 2020</p>
                    <p className='announceList' > <BsDot/> Faculty Recruitment - Last date to apply: 31 May 2020</p>
                </div>
                <div className='events'>
                    <p className='announceTitle'><MdEvent/> Upcoming Events:</p>
                    <div style={{height: "100%"}}>
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23fafafa&amp;ctz=Asia%2FKolkata&amp;src=YW51cmFncmVkZHkxMDAwQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;showPrint=0&amp;showTitle=0&amp;showNav=0&amp;showTabs=0&amp;mode=AGENDA&amp;showCalendars=0&amp;showTz=0" style={{borderWidth:"0", width:"100%", height:"100%",}}></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Announcements;