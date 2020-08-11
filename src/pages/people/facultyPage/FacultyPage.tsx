import React from 'react';
import InfoView from '../../../common/infoView/InfoView';
import {FacultyDataList} from '../../../models/FacultyDataList';
import ProfileView from '../../../common/profileView/ProfileView';
import './FacultyPage.css'

class FacultyPage extends React.Component{

    render(){
        return(
            <div>
                <InfoView title='Faculty' titleColor='darkblue' info={['Our Department currently has 16 faculty members with interests ranging from Commutative Algebra, Number Theory and Harmonic Analysis to Fuzzy Logic, Applied Statistics and Banach Algebra','Faculty members have achieved many distinctions - for instance, they have been invited to be part of research committees of the Government of India, are established resource personnels in programmes promoting both basic and advanced Mathematics and are members of the editorial board of reputed journals.']}/>
                <div className='infoContent'>
                    {FacultyDataList.map(value => <ProfileView Name={value.name} Designation={value.data.designation} Area={value.data.areas} email={value.data.email} RoomNo={value.data.roomNo} link={value.data.link} Image={value.data.image}/>)}
                </div>
            </div>
        )
    }
}

export default FacultyPage;