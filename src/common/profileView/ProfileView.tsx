import React from 'react';
import './ProfileView.css';

interface ProfileViewProps{
    Image?: string;
    Name: string;
    Designation?: string;
    Area?: string;
    RoomNo?: string;
    email?: string;
    link?: string;
    supervisor?: string;
    periodOfStay?: string;
    extraDetails?: string[];
}

class ProfileView extends React.Component<ProfileViewProps>{

    render(){
        return(
            <div className='profileView'>
                <div className='profileViewImageWrap'>
                    <img  className='profileViewImage' src={this.props.Image} width='85%'/>
                </div>
                <div className='profileInfo'>
                    <p className='profileViewName'>{this.props.Name}</p>
                    <p className='profileViewDesignation'>{this.props.Designation}</p>
                    {(this.props.Area !== undefined) ? <p className='profileViewExtras'>{this.props.Area}</p> : null}
                    {(this.props.supervisor !== undefined) ? <p className='profileViewExtras'>{this.props.supervisor}</p> : null}
                    {this.props.extraDetails?.map(detail => <p className='profileViewExtras'>{detail}</p>)}
                    {(this.props.email !== undefined) ? <p className='profileViewExtras'>{this.props.email}</p> : null}
                    {(this.props.RoomNo !== undefined) ? <p className='profileViewExtras'>{this.props.RoomNo}</p> : null}
                    {(this.props.periodOfStay !== undefined) ? <p className='profileViewExtras'>{this.props.periodOfStay}</p> : null}
                    {(this.props.link !== undefined) ? <p className='profileViewExtras'><a href={this.props.link}>Link to website</a> </p> : null}
                </div>
            </div>
        )
    }
}

export default ProfileView;