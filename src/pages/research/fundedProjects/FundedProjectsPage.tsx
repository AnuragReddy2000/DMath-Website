import React from 'react';
import {FundedProjectsList} from '../../../models/FundedProjectsList';
import TableView from '../../../common/tableView/TableView';
import './FundedProjectsPage.css';

class FundedProjectsPage extends React.Component{
    
    render(){
        return(
            <div style={{width: '100%'}}>
                <div className='FundedProjectsHeader'>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Funded Projects:</p>
                </div>
                {FundedProjectsList.map(value => <div><TableView title={value.title} speaker={'Principal Investigator: ' + value.prof} dateVenue={'Openings: ' + value.openings} content={'Grant Agency: ' + value.agency + '\n' + 'Time Period: ' + value.duration} overrideDateVenueWidth='40%'/></div>)}
            </div>
        )
    }
}

export default FundedProjectsPage;