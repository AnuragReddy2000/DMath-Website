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
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23fafafa&amp;ctz=Asia%2FKolkata&amp;src=bGV1N2d0bGhpYmx1MHRzYmkxNW5kdW5kYjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D81B60&amp;color=%230B8043&amp;showPrint=0&amp;showCalendars=0" style={{borderWidth:"0", width:"100%", height:"100%", backgroundColor: "rgb(250,250,250)"}}></iframe>
                </div>
            </div>
        )
    }
}

export default EventsPage;