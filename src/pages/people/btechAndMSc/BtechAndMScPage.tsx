import React from 'react';
import TableView from '../../../common/tableView/TableView';
import {BtechAndMScStudents} from '../../../models/BtechAndMScStudents';
import './BtechAndMScPage.css';

class BtechAndMScPage extends React.Component{

    render(){
        return(
            <div className='btechAndMScPage'>
                <div className='btechAndMScPageCol'>
                    {BtechAndMScStudents.map(value =>  value[0].includes('B.Tech') ? <div style={{width: '80%', display: 'flex', flexDirection: 'column'}}> 
                        <p style={{fontSize: 'x-large', color: 'darkblue'}}> {value[0] + ':'} </p>
                        {value[1].map(person => <TableView title={person.name} content={'Email: ' + person.email} overrideRowGap='0px'/>)}
                    </div> : null)}
                </div>
                <div style={{borderLeft: '1px solid black', marginLeft: '4px', marginRight: '4px', marginTop: '35px'}}></div>
                <div className='btechAndMScPageCol'>
                    {BtechAndMScStudents.map(value =>  value[0].includes('M.Sc') ? <div style={{width: '80%', display: 'flex', flexDirection: 'column'}}> 
                        <p style={{fontSize: 'x-large', color: 'darkblue'}}> {value[0] + ':'} </p>
                        {value[1].map(person => <TableView title={person.name} content={'Email: ' + person.email} overrideRowGap='0px'/>)}
                    </div> : null)}
                </div>
            </div>
        )
    }
}

export default BtechAndMScPage;