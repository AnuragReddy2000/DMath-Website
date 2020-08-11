import React from 'react';
import './TableView.css'

interface TableViewState{
    expand: Boolean
}

interface TableViewProps{
    title: string,
    content?: string,
    sno: string,
    speaker?: string,
    dateVenue?: string

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
            <div className='tableViewRow'>
                <div className='tableViewIndexNo'>
                    <p>{this.props.sno}</p>
                </div>
                <div className='tableViewRest'>
                    <div className='tableViewContent' onClick={this.toggleContentView}>
                        <p>{this.props.title}</p>
                        {(this.state.expand && this.props.content) ? <div className='tableViewShowContent'> <p >{this.props.content}</p> </div> : null}
                    </div>
                    <div className='tableViewLastCol'>
                        {this.props.speaker ? <div className='tableViewSpeaker'> <p>{this.props.speaker}</p> </div> : null}
                        {this.props.dateVenue ? <div className='tableViewDate'> <p>{this.props.dateVenue}</p> </div> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default TableView;