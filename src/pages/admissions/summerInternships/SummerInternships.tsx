import React from 'react';
import InfoView from '../../../common/infoView/InfoView';

class SummerInternships extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <InfoView title='Summer Internships' titleColor='darkblue' info={['Interested candidates may contact the faculty members individually.']}/>
            </div>
        )
    }
}

export default SummerInternships;