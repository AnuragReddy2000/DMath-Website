import React from 'react';
import ProfileView from '../../../components/profileView/ProfileView';
import Mahaboob from '../../../images/people/staff/Mahaboob.jpg';
import './StaffPage.css';

class StaffPage extends React.Component{

    render() {
        return (
            <div style={{width: '100%'}}>
                <p className='spTitle'>Administrative Personnel: </p>
                <div className='spInfoContent'>
                    <ProfileView Name='Mr. Mahaboob Moonavath' Image={Mahaboob} Designation='Executive Assistant' email='Email: mahaboob.moonavath@admin.iith.ac.in' RoomNo='Room No.: A-718/B'/>
                </div>
            </div>
        )
    }
}

export default StaffPage;