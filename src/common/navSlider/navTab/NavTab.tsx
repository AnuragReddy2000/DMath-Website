import React from 'react';
import './NavTab.css';
import {BsDot} from 'react-icons/bs';
import {IconsList} from '../../../models/IconsList';

interface NavTabProp{
    onClickEvent: (tab: string) => void;
    name: string;
    currentTab: string
}

interface NavTabState{}

class NavTab extends React.Component<NavTabProp,NavTabState>{
    constructor(props: NavTabProp, state: NavTabState){
        super(props,state); 
    }

    onClick=():void =>{
        this.props.onClickEvent(this.props.name);
    }

    render(){
        var Icon = IconsList[this.props.name];
        return(
            <div className={((this.props.currentTab==this.props.name) ? 'active':'inactive') + 'NavTab'} onClick={this.onClick}>
                {(IconsList[this.props.name]==undefined)? <BsDot/> : <Icon/>}
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default NavTab;