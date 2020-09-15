import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import InfoView from '../../../components/infoView/InfoView';
import applaud from '../../../images/misc/applaud.png';
import './Credits.css';
import { BsDot } from 'react-icons/bs';

class Credits extends React.Component{

    render(){
        return(
            <div style={{width: '100%', marginTop:'5px'}}>
                <InfoView title='Our thanks go to...' titleColor='darkblue' info={['All the people who have directly and indirectly helped in the making of this website.', 'A special mention goes to, Dr. Amit Tripathi, Dr. Balasubramaniam Jayaram, Dr. Neeraj Kumar, Mr. Mahaboob Moonavath, Ms Srujana B for spending their valuable time and giving suggestions during the development of the website.','We welcome any comments / observations / suggestions.']}/>
                <div className='creditsNames'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px'}}>Website: Design and Development</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Mr. Anurag Reddy Karri</p>
                </div>
                <div className='creditsNames'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px'}}>Website: Art Works</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Ms. Puja Pandey</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Mr. Haripada Roy</p>
                </div>
            </div>
        )
    }
}

export default Credits;