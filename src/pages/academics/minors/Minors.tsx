import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import InfoView from '../../../components/infoView/InfoView';
import {CarouselPics} from '../../../models/CarouselPics';
import {MinorsCourses} from '../../../models/MinorsCourses';
import TableView from '../../../components/tableView/TableView';

class Minors extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={CarouselPics['Minors']} imagesNum={CarouselPics['Minors'].length}/>
                    <InfoView 
                    title='Minor Programme in Mathematics:' 
                    titleColor='darkblue'
                    info={['The department offers a minor programme in Mathematics. For a B.Tech / M.Tech student to obtain a minor in Math he/she needs to take 12 credits of Math courses from the list below:']}
                    />
                </div>
                {MinorsCourses.map(value => <TableView title={value['CourseName']} content={value['Syllabus']} sno={value['CourseCode']} overrideSnoWidth='30%'/>)}
            </div>
        )
    }
}

export default Minors;