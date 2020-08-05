import React from 'react';
import './InfoView.css';

interface InfoViewProps{
    title: string;
    image?: string;
    info: string[];
    titleColor?: string;
}

class InfoView extends React.Component<InfoViewProps>{
    constructor(props: InfoViewProps){
        super(props);
    }

    render(){
        const titlecolor: string = (this.props.titleColor === undefined) ? 'black' : this.props.titleColor
        return(
            <div className='infoView'>
                <p className='title' style={{color: titlecolor}}>{this.props.title + ':'}</p>
                <div className={(this.props.image==undefined) ? 'noimageBox':'imageBox'}>
                    <img src={this.props.image} width='100%' height='100%'/>
                </div>
                {this.props.info.map(element => <p className='content'>{element}</p>)}
            </div>
        )
    }
}

export default InfoView;