import React from 'react';
import ProfileView from '../../../common/profileView/ProfileView';
import {DoctoralList} from '../../../models/DoctoralList';
import './DoctoralPage.css';

class DoctoralPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Doctoral Students:</p>
                </div>
                <div className='docinfoContent'>
                    {DoctoralList.map(value => <ProfileView Name={value.name} email={'Email: ' + value.email} Area={'Area of Research: ' + value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} link={value.link}/>)}
                </div>
            </div>
        )
    }
}

export default DoctoralPage;