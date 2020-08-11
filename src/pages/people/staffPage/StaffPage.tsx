import React from 'react';
import ProfileView from '../../../common/profileView/ProfileView';
import Mahaboob from '../../../images/people/staff/Mahaboob.jpg';
import './StaffPage.css';

class StaffPage extends React.Component{

    render() {
        return (
            <div style={{width: '100%'}}>
                <p className='spTitle'>Administrative Personnel: </p>
                <div className='spInfoContent'>
                    <ProfileView Name='Mahaboob Moonavath' Image={Mahaboob} Designation='Executive Assistant' email='mahaboob.moonavath@admin.iith.ac.in' RoomNo='A-718/B'/>
                </div>
            </div>
        )
    }
}

export default StaffPage;