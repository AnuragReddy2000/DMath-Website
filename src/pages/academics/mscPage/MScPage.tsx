import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import InfoView from '../../../components/infoView/InfoView';
import {CarouselPics} from '../../../models/CarouselPics';
import Brochure from '../../../images/academics/btechMnC/Brochure.png';
import curriculum from '../../../images/academics/btechMnC/curriculum.png';
import './MScPage.css';

class MScPage extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', whiteSpace: 'pre-line'}}>
                    <Carousel images={CarouselPics['MSc']} imagesNum={CarouselPics['MSc'].length}/>
                    <InfoView 
                    title='Master of Sciences: ' 
                    titleColor='darkblue'
                    info={['The department has been running a Master of Sciences programme since the academic year 2013 - 14 with specialisation in two streams, viz., ‘Mathematics’ and ‘Mathematics and Computing.’ ', 
                    'The aim of this programme is two-fold: \n(i) to produce students with good-firm background in both theoretical and Applied Mathematics, supplemented with the required computational skills, \n(ii) to offer the students the flexibility to pursue higher studies or to orient themselves towards a career in the industry. ',
                    'For more on this programme please explore the following links:']}
                    />
                </div>
                <div className='mscInfoContent'>
                    <InfoView 
                    title='Brochure' 
                    image={Brochure} 
                    info={['Wondering why do M.Sc at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link='https://math.iith.ac.in/Academics/msc_brochure.pdf'
                    linkText='Link to the Brochure'
                    />
                    <InfoView 
                    title='Curriculum' 
                    image={curriculum} 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link='https://math.iith.ac.in/Academics/M.Sc_Curriculum_2020_onwards1.pdf'
                    linkText='Link to the Curriculum'
                    />
                </div>
            </div>
        )
    }
}

export default MScPage;