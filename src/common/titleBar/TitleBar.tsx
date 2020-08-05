import React from 'react';
import './TitleBar.css';
import {MdMenu} from'react-icons/md';
import iithlogo from '../../images/homePage/iithlogo.png';
import deptTitleSmall from '../../images/homePage/deptTitleSmall.png';
import deptTitleLarge from '../../images/homePage/deptTitleLarge.png';

interface TitleBarState{
    showSlider: boolean;
}

interface TitleBarProps{
    layoutType: string
    toggleShowSlider():void;
}

class TitleBar extends React.Component<TitleBarProps, TitleBarState>{
    constructor(props: TitleBarProps, state: TitleBarState) {
        super(props,state);
        this.state = {
            showSlider: false
        }
    }

    render(){
        return(
            <div className='titleBar'>
                <div className='deptTitle'>
                    <MdMenu className='menuIcon' onClick={this.props.toggleShowSlider} size={32}/>
                    {(this.props.layoutType=='desktop') ? <img src= {deptTitleLarge} height='90%'></img> : <img  className='titleImage' src= {deptTitleSmall} width='90%' height='100%'></img>}
                </div>
                <div className='iithImage'>
                    <p className='iithLink'><a href='http://www.iith.ac.in/'>IITH Home</a></p>
                    <img src={iithlogo} height='70%'></img>
                </div>
            </div>
        )
    }
}

export default TitleBar;