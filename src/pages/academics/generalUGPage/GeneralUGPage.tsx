import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import InfoView from '../../../components/infoView/InfoView';
import {CarouselPics} from '../../../models/CarouselPics';
import TableView from '../../../components/tableView/TableView';
import {GeneralUGCourses} from '../../../models/GeneralUGCourses';

class GeneralUGPage extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={CarouselPics['General UG']} imagesNum={CarouselPics['General UG'].length}/>
                    <InfoView 
                    title='Institute-wide Undergrad Courses: ' 
                    titleColor='darkblue'
                    info={['The Department presently offers 10 foundational units of 1 credit each on various topics from basic calculus and linear algebra to differential eqns and probability to the entire community of engineering students of the Institute. These courses have been designed and scheduled in consultation with the different engineering streams so that, as far as possible, a student has the requisite math skills to enrol in any course of his/her choice offered during a particular semester.',
                    'The following is the list of common courses offered:']}
                    />
                </div>
                {GeneralUGCourses.map(value => <TableView title={value['CourseName']} content={value['Syllabus']} sno={value['CourseCode']} overrideSnoWidth='30%'/>)}
            </div>
        )
    }
}

export default GeneralUGPage;