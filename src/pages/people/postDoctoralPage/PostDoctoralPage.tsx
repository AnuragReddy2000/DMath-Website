import React from 'react';
import {FormerPostDoctoralList, PostDoctoralList} from '../../../models/PostDoctoralList';
import ProfileView from '../../../common/profileView/ProfileView';
import './PostDoctoralPage.css';

class PostDoctoralPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Post Doctoral Fellows:</p>
                </div>
                <div className='pdinfoContent'>
                    {PostDoctoralList.map(value => <ProfileView Name={value.name} email={'Email: ' + value.email} Area={'Areas of Interest: ' + value.area} supervisor={'Mentor: ' + value.mentor} Image={value.image} periodOfStay={'Period of Stay: ' + value.stay} link={value.link}/>)}
                </div>
                <hr/>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Former Post Doctoral Fellows:</p>
                </div>
                <div className='pdinfoContent'>
                    {FormerPostDoctoralList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={value.mentor} Image={value.image} periodOfStay={value.stay} link={value.link}/>)}
                </div>
            </div>
        )
    }
}

export default PostDoctoralPage;