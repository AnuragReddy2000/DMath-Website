import React from 'react';
import './NavTab.css';
import {BsDot} from 'react-icons/bs';
import {IconsList} from '../../../models/IconsList';
import {Link} from 'react-router-dom';

interface NavTabProp{
    onClickEvent: (tab: string) => void;
    name: string;
    currentTab: string
    urlLink?: string
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
            <Link to={this.props.urlLink ? this.props.urlLink : '/'} className={this.props.urlLink ? 'active-link' : 'disabled-link'} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={((this.props.currentTab==this.props.name) ? 'active':'inactive') + 'NavTab'} onClick={this.onClick}>
                    {(IconsList[this.props.name]==undefined)? <BsDot/> : <Icon/>}
                    <p className='navTabName'>{this.props.name}</p>
                </div>
            </Link>
        )
    }
}

export default NavTab;