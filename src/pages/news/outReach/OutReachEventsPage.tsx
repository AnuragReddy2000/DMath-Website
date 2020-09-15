import React from 'react';
import InfoView from '../../../components/infoView/InfoView';
import Carousel from '../../../components/carousel/Carousel';
import {CarouselPics} from '../../../models/CarouselPics';

class OutReachEventsPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={CarouselPics['Outreach']} imagesNum={CarouselPics['Outreach'].length}/>
                </div>
                <InfoView 
                    title='One-week Summer Camp for School Students:' 
                    titleColor='darkblue'
                    info={['The Department regularly conducts a week-long mathematics camp in summer for high school students.\nThe main aim of this programme is to inculcate mathematical thinking among high school students. Besides, it aims at providing the participants with an exposure to analytical reasoning and guidance for higher studies. This program intends to provide a stimulating and supportive environment for students to develop their mathematical problem solving ability. Special efforts are taken to bring the students out of their diffidence, hesitancy, apprehension and introversion in giving voice to their curiosity and thinking.', 
                    ' Around 40 students from different high schools that are in the vicinity of the IIT Hyderabad campus are invited to attend this camp.',
                    'The camp has been conceptualised by the research scholars of the department. This camp, being organized mostly by the postgraduate and doctoral students of the Department with some support from faculty members, is normally conducted during the month of May.',
                    'A typical day at the camp includes: \n(i) Interesting mathematics sessions each morning and afternoon. \n(ii) Problem sessions following each class, facilitated by the instructors, and an IIT post graduate students. \n(iii) Lunch and Tea breaks. \n(iv) Evening activities, which also include peer-to-peer interactions and discussions.',
                    'Topics covered in this camp include, but not limited to: \n(i) Geometry.\n(ii) Algebra. \n(iii) Trigonometry.\n(iv) Set theory.\n(v) Statistics .']}
                />
                <InfoView 
                    title='Math Fest for Under Graduate Students:' 
                    titleColor='darkblue'
                    info={['The Department regularly conducts a one-day Math Fest for under graduate students in Math from nearby colleges.', 
                    ' The main motive of the fest is to give exposure to the various opportunities available in the world of mathematics to students who are pursuing under graduate degree in mathematics. Typically, 35-40 students from colleges that are in the vicinity of the IIT Hyderabad campus are invited to attend this Math Fest.',
                    'The camp, once again, is an initiative of the doctoral and post-graduate students of the department.',
                    'A typical day at the Fest includes: \n(i) A talk in each of the morning and afternoon sessions by faculty members of the department. \n(ii) A UG level Quiz Programme. \n(iii) Lunch and Tea breaks. \n(iv) A talk about the various loan opportunities available for higher studies, typically delivered by the Bank Manager of the IIT Hyderabad branch.',]}
                />
                <InfoView 
                    title='Symposium on Geometry of Banach space:' 
                    titleColor='darkblue'
                    info={['Dept. of Mathematics IIT Hyderabad conducted a 2 days symposium on Geometry of Banach spaces. The aim of this event is to assemble together all experts from research scholar to faculty who are working on the Theory of Banach spaces.']}
                />
            </div>
        )
    }
}

export default OutReachEventsPage;