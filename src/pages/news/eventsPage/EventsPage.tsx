import React from 'react';
import './EventsPage.css';

interface EventsPageState{
    searchDate: Date;
}

interface EventsPageProps{}

class EventsPage extends React.Component<EventsPageProps,EventsPageState>{
    constructor(props: EventsPageProps,state: EventsPageState){
        super(props,state);
        this.state = {
            searchDate: new Date()
        }
    }

    render(){
        return(
            <div  className='EventsPageBody'>
                <div className='EventsPageHeader'>
                    <p style={{margin: '0px', padding: '0px'}}>Events:</p>
                </div>
                <div className='EventsPageCalendarRow'>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23fafafa&amp;ctz=Asia%2FKolkata&amp;src=YW51cmFncmVkZHkxMDAwQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;showPrint=0&amp;showTitle=0&amp;showNav=1&amp;showTabs=1&amp;mode=MONTH&amp;showCalendars=0&amp;showTz=0" style={{borderWidth:"0", width:"100%", height:"100%" }}></iframe>
                </div>
            </div>
        )
    }
}

export default EventsPage;