import React from 'react';
import NavTab from '../navTab/NavTab';
import './DropDownTab.css';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RiArrowDropUpLine} from 'react-icons/ri';

interface DropDownTabState{}

interface DropDownTabProp{
    name: string;
    currentTab: string;
    currentDropdown: string;
    onClickEvent: (tab: string) => void;
    dropDownUpdate: (dropDownName: string) => void;
    contentTabs: string[];
}

class DropDownTab extends React.Component<DropDownTabProp,DropDownTabState>{
    constructor(props: DropDownTabProp,state: DropDownTabState){
        super(props,state);
    }

    onDropDownClick=():void =>{
        if(this.props.currentDropdown == this.props.name){
            this.props.dropDownUpdate('None')
        }
        else{
            this.props.dropDownUpdate(this.props.name)   
        }
    }

    render(){
        return(
            <div className='dropDownTab'>
                <div className={(this.props.currentDropdown == this.props.name) ? 'openTitle' : 'closedTitle'} onClick={this.onDropDownClick}>
                    <NavTab name={this.props.name} currentTab={this.props.currentTab} onClickEvent={this.onDropDownClick}></NavTab>
                    {(this.props.currentDropdown == this.props.name) ? <RiArrowDropUpLine size={28} color='darkblue'/> : <RiArrowDropDownLine size={28} color='darkblue'/>}
                </div>
                {(this.props.currentDropdown == this.props.name) ? this.props.contentTabs.map(tab => <NavTab name={tab} currentTab={this.props.currentTab} onClickEvent={this.props.onClickEvent}/>) : null}
            </div>
        )
    }
}

export default DropDownTab;