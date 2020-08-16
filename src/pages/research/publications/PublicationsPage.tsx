import React from 'react';
import {PublicationsList} from '../../../models/PublicationsList';
import './PublicationsPage.css';
import {BsDot} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai';

interface PublicationsPageState{
    currentYear: string;
    dropDownOpen: boolean;
}

interface PublicationsPageProps{}

class PublicationsPage extends React.Component<PublicationsPageProps,PublicationsPageState>{
    constructor(props: PublicationsPageProps,state: PublicationsPageState){
        super(props,state);
        this.state = {
            currentYear: '2020',
            dropDownOpen: false
        }
    }

    changeYear = (year: string) => {
        this.setState({
            currentYear: year,
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    toggleDropDown =()=>{
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }


    render(){
        const publications = PublicationsList[this.state.currentYear]

        return(
            <div className='publicationsPage'>
                <div className='publicationsPageHeader'>
                    <p style={{fontSize:'x-large', marginTop:'1px', marginBottom:'1px', color:'darkblue'}}>Publications:</p>
                    <div className='publicationsYearDropDown' onClick={this.toggleDropDown}>
                        <p>{this.state.currentYear} <AiFillCaretDown/></p>
                    </div>
                </div>
                {this.state.dropDownOpen ? <div className='publicationsYearDropDownList'>
                    <p onClick={() => this.changeYear('2020')} className='publicationsYearListItem'>2020</p>
                    <p onClick={() => this.changeYear('2019')} className='publicationsYearListItem'>2019</p>
                    <p onClick={() => this.changeYear('2018')} className='publicationsYearListItem'>2018</p>
                    <p onClick={() => this.changeYear('2017')} className='publicationsYearListItem'>2017</p>
                </div> : null}
                <div className='publicationsColumn'>
                    {publications.map(item => <div className='publicationPageLine'>
                        <BsDot size={32}/><p style={{width: '95%'}}> {item.people + ' '} <i style={{color:'darkblue'}}>{item.name}</i> {' ' + item.details}</p>
                    </div>)}
                </div>
        </div>
        )
    }
}

export default PublicationsPage;