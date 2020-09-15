import React from 'react';
import './NavTab.css';
import {BsDot} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { IconType } from 'react-icons';

interface NavTabProp{
    onClickEvent: (tab: string) => void;
    name: string;
    currentTab: string
    urlLink?: string
    pageType?: string
    icon?: IconType
}

interface NavTabState{}

class NavTab extends React.Component<NavTabProp,NavTabState>{

    onClick=():void =>{
        this.props.onClickEvent(this.props.name);
    }

    render(){
        const Icon = this.props.icon as React.ElementType;
        return(
            this.props.pageType === 'static' ? <a href={this.props.urlLink} style={{textDecoration: 'none', color: 'inherit'}} target="_blank">
                <div className={((this.props.currentTab===this.props.name) ? 'active':'inactive') + 'NavTab'} onClick={this.onClick}>
                    {(this.props.icon === undefined) ? <BsDot/> : <Icon/>}
                    <p className='navTabName'>{this.props.name}</p>
                </div>
            </a>
            : <Link to={this.props.urlLink ? this.props.urlLink : '/'} className={this.props.urlLink ? 'active-link' : 'disabled-link'} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={((this.props.currentTab===this.props.name) ? 'active':'inactive') + 'NavTab'} onClick={this.onClick}>
                    {(this.props.icon === undefined) ? <BsDot/> : <Icon/>}
                    <p className='navTabName'>{this.props.name}</p>
                </div>
            </Link>
        )
    }
}

export default NavTab;