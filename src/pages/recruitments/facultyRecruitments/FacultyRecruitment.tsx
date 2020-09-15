import React from 'react';
import InfoView from '../../../components/infoView/InfoView';

class FacultyRecruitment extends React.Component{

    render(){
        return(
            <div>
                <InfoView title='Faculty Recruitment:' titleColor='darkblue' info={['The Department of Mathematics at IIT Hyderabad invites applications from those with a consistently good research track record and with expertise in complementary areas to that currently available in the department.',
                    'Last date for receiving applications for the current recruitment is 31-05-2020. Applications received after this deadline will be considered for the next recruitment.']}
                    link='https://www.iith.ac.in/careers/' linkText='To apply online, click here'
                />
            </div>
        )
    }
}

export default FacultyRecruitment;