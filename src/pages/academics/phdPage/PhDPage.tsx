import React from 'react';
import Carousel from '../../../common/carousel/Carousel';
import InfoView from '../../../common/infoView/InfoView';
import {CarouselPics} from '../../../models/CarouselPics';
import Brochure from '../../../images/academics/btechMnC/Brochure.png';
import curriculum from '../../../images/academics/btechMnC/curriculum.png';
import './PhDPage.css';

class PhDPage extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', whiteSpace: 'pre-line'}}>
                    <Carousel images={CarouselPics['PhD']} imagesNum={CarouselPics['PhD'].length}/>
                    <InfoView 
                    title='Our Doctoral Programme: ' 
                    titleColor='darkblue'
                    info={['The department has a lively research environs with an active and spirited group of researchers.']}
                    />
                </div>
                <div className='phdInfoContent'>
                    <InfoView 
                    title='Brochure' 
                    image={Brochure} 
                    info={['Wondering why do Ph.D. at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link='https://math.iith.ac.in/Academics/phd_brochure.pdf'
                    linkText='Link to the Brochure'
                    />
                    <InfoView 
                    title='Curriculum' 
                    image={curriculum} 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link='https://math.iith.ac.in/Academics/phd_curriculum.pdf'
                    linkText='Link to the Curriculum'
                    />
                </div>
            </div>
        )
    }
}

export default PhDPage;