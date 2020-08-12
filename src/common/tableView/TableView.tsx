import React from 'react';
import './TableView.css'

interface TableViewState{
    expand: Boolean
}

interface TableViewProps{
    title: string,
    content?: string,
    sno?: string,
    speaker?: string,
    dateVenue?: string
    overrideSnoWidth? : string,
    overrideRowGap?: string,
    link?: string,
    linkText?: string
}

class TableView extends React.Component<TableViewProps,TableViewState>{
    constructor(props: TableViewProps, state: TableViewState){
        super(props, state);
        this.state = {
            expand: false
        }
    }

    toggleContentView = ():void =>{
        this.setState({
            expand: !this.state.expand
        })
    }

    render(){
        return(
            <div className='tableViewRow' style={{marginBottom: this.props.overrideRowGap}}>
                {this.props.sno ? <div className='tableViewIndexNo' style={{width: this.props.overrideSnoWidth}}> <p> {this.props.sno} </p> </div> : null}
                <div className='tableViewRest'>
                    <div className='tableViewContent' onClick={this.toggleContentView}>
                        <p>{this.props.title}</p>
        {(this.state.expand && this.props.content) ? <div className='tableViewShowContent'> <p >{this.props.content}</p> <p><a href={this.props.link}>{this.props.linkText}</a></p> </div> : null}
                    </div>
                    {this.props.dateVenue || this.props.speaker ? <div className='tableViewLastCol'>
                        {this.props.speaker ? <div className='tableViewSpeaker'> <p>{this.props.speaker}</p> </div> : null}
                        {this.props.dateVenue ? <div className='tableViewDate'> <p>{this.props.dateVenue}</p> </div> : null}
                    </div> : null}
                </div>
            </div>
        )
    }
}

export default TableView;