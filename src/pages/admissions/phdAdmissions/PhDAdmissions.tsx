import React from 'react';
import InfoView from '../../../components/infoView/InfoView';
import './PhDAdmissions.css';

class PhDAdmissions extends React.Component{

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <InfoView title='Ph.D. Admissions:' titleColor='darkblue' info={['The shortlisted applicants are requested to send in a confirmation mail explicitly stating their acceptance or otherwise to the following mail IDs quoting their application numbers before 31st of July: ma_phd@iith.ac.in, office@math.iith.ac.in',
                'Those candidates who have accepted the offer will be contacted by mail in the first week of August with further instructions.',
                'For further details regarding the payment of fee and filling of forms, you may contact to Academics at: acad.phd@iith.ac.in']}
                />
                <div className='phdAdmissionsMiddle'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', marginBottom: '3px'}}>Ph.D. interviews result July, 2020:</p>
                    <p style={{marginBottom: '1.5px'}}>Selection list: <a href='https://math.iith.ac.in/Admissions/SelectedCandidates-PhD-Summer2020-v2.pdf'>Click Here</a></p> 
                    <p style={{marginBottom: '1.5px'}}> Waiting list: <a href='https://math.iith.ac.in/Admissions/WaitlistCandidates-PhD-Summer2020-v2.pdf'>Click Here</a></p>
                    <p style={{color: 'darkblue', fontSize: 'x-large', marginBottom: '3px'}}>Ph.D. interviews Schedule July, 2020:</p>
                    <p style={{marginBottom: '1.5px'}}>Algebra: <a href='https://math.iith.ac.in/Admissions/Interview%20algebra-PhDJuly%202020.pdf'>Schedule</a> - <a href='https://math.iith.ac.in/Admissions/Instructions.pdf'>Instructions</a></p>
                    <p style={{marginBottom: '1.5px'}}>Analysis: <a href='https://math.iith.ac.in/Admissions/Analysis-PhD%20July2020%20-%20TentaiveSchedule.pdf'>Schedule and Instruction</a> </p>
                    <p style={{marginBottom: '1.5px'}}>Differential Equations: <a href='https://math.iith.ac.in/Admissions/PhD_interviewDiff_Eqn.pdf'>Schedule</a> - <a href='https://math.iith.ac.in/Admissions/Instructions.pdf'>Instructions</a></p>
                    <p style={{marginBottom: '1.5px'}}>Statistics: <a href='https://math.iith.ac.in/Admissions/Interview%20Schedule_Statistics.pdf'>Schedule and Instruction</a> </p>
                </div>
                <InfoView title='Ph.D. interviews July, 2020:' titleColor='darkblue' info={['The interviews for PhD applicants will be conducted in online mode, between 16-19, July. Further details of interviews for the shortlisted applicants will be informed over the registered email.',
                'For further queries send mail to: maphd_applications@iith.ac.in',
                'The list of shortlisted candidates is available in the following link:']}
                link='https://math.iith.ac.in/Admissions/ShortlistedCandidates-PhD-Summer2020.pdf' linkText='List of Shortlisted Candidates'
                />
                <InfoView title='Application Process:' titleColor='darkblue' info={['The department admits doctoral students twice a year - May-June / December of every year.',
                'The notification for the same and the application procedure can be found here:']}
                link='http://www.iith.ac.in/phdadmissions//' linkText='IITH PhD Admissions'/>
            </div>
        )
    }
}

export default PhDAdmissions;