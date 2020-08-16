import React from 'react';
import {PhDAlumniList} from '../../../models/AlumniList';
import {MScAlumniList} from '../../../models/AlumniList';
import ProfileView from '../../../common/profileView/ProfileView';
import Carousel from '../../../common/carousel/Carousel';
import {BsDot} from 'react-icons/bs';
import './AlumniPage.css';

class AlumniPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>PhD Alumni:</p>
                </div>
                <div className='aluminfoContent'>
                    {PhDAlumniList.map(value => <ProfileView Name={value.name} email={'Email: ' + value.email} Area={'Area of Research: ' + value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} extraDetails={value.currentPos=="" ? [] : ['Current Position: ' + value.currentPos]}/>)}
                </div>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>M.Sc Alumni:</p>
                </div>

                {MScAlumniList.map(value => <div className='AlumniBatch'>
                    {value.grpImage=="" ? null : <Carousel images={[value.grpImage]} imagesNum={1}/>}
                    <div className='AlumnibatchTitle'>
                        <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                    </div>
                    <div className='AlumniList'>
                        {value.students.map(person => <div className='AlumniName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person.name}</i></p></div>)}
                    </div>    
                </div>)}
            </div>
        )
    }
}

export default AlumniPage;