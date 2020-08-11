import React from 'react';
import Carousel from '../../../common/carousel/Carousel';
import InfoView from '../../../common/infoView/InfoView';
import Brochure from '../../../images/academics/btechMnC/Brochure.png';
import curriculum from '../../../images/academics/btechMnC/curriculum.png';
import faq from '../../../images/academics/btechMnC/faq.png';
import {CarouselPics} from '../../../models/CarouselPics';
import './BtechMnCPage.css'

class BtechMnCPage extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel name='About Us' images={CarouselPics['BtechMnC']} imagesNum={CarouselPics['BtechMnC'].length}/>
                    <InfoView 
                    title='B.Tech (Mathematics and Computing)' 
                    titleColor='darkblue'
                    info={['As a dynamic initiative from our director, Professor U. B. Desai, a new Bachelor’s degree program in Mathematics was introduced at IIT-Hyderabad from the academic year 2017-18. The Department of Mathematics now offers a B.Tech program in Mathematics and Computing.', 
                    'The objective of this programme is to equip the students with the mathematical foundations required to excel in various applied and computational streams where Math plays a major role.',
                    'For more on this programme please explore the links below.']}
                    />
                </div>
                <div className='bmpInfoContent'>
                    <InfoView 
                    title='Brochure' 
                    image={Brochure} 
                    info={['Wondering what is B.Tech (M&C) or why do B.Tech (M&C) at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link = 'https://math.iith.ac.in/Academics/btech_mnc_brochure.pdf'
                    linkText = 'Link to the Brochure'
                    />
                    <InfoView 
                    title='Curriculum' 
                    image={curriculum} 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link = 'https://math.iith.ac.in/Academics/btech_mnc_curriculum.pdf'
                    linkText = 'Link to the Curriculum'
                    />
                    <InfoView 
                    title='FAQs' 
                    image={faq} 
                    info={['Still have some questions unanswered? Or, some lingering doubts? Check out our FAQ page - who knows, you may only be replicating the neuronal state some one else was in not long ago !']}
                    link = 'https://math.iith.ac.in/Academics/btech_mnc_faq.html'
                    linkText = 'Link to FAQs'
                    />
                </div>
            </div>
        )
    }
}

export default BtechMnCPage;