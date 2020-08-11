import React from 'react';
import './InfoView.css';

interface InfoViewProps{
    title?: string;
    image?: string;
    info: string[];
    titleColor?: string;
    link?: string;
    linkText?: string;
}

class InfoView extends React.Component<InfoViewProps>{
    constructor(props: InfoViewProps){
        super(props);
    }

    render(){
        const titlecolor: string = (this.props.titleColor === undefined) ? 'black' : this.props.titleColor
        return(
            <div className='infoView'>
                {(this.props.title != undefined) ? <p className='title' style={{color: titlecolor}}>{this.props.title + ':'}</p>: null}
                <div className={(this.props.image==undefined) ? 'noimageBox':'imageBox'}>
                    <img src={this.props.image} width='100%' height='100%'/>
                </div>
                {this.props.info.map(element => <p className='content'>{element}</p>)}
                <p style={{alignSelf: 'flex-start'}}><a href={this.props.link}>{this.props.linkText}</a></p>
            </div>
        )
    }
}

export default InfoView;