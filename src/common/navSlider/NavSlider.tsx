import React from 'react';
import './NavSlider.css';
import NavTab from './navTab/NavTab';
import DropDownTab from './dropDownTab/DropDownTab';
import {DropDownList} from '../../models/DropDownModels';
import {FaFacebookSquare} from 'react-icons/fa';

interface NavSliderProps{
    layoutMode: string;
    currentTab: string;
    changeTab: (tab: string) => void;
}

interface NavSliderState{
    currentDropDown: string;
}

class NavSlider extends React.Component<NavSliderProps, NavSliderState>{
    constructor(props: NavSliderProps, state: NavSliderState){
        super(props);
        this.state = {
            currentDropDown: 'None'
        }
    }

    changeDropDownTab=(newDropDown: string): void =>{
        this.setState({
            currentDropDown: newDropDown
        })
    }

    home=():void =>{
        this.props.changeTab('Home');
        this.changeDropDownTab('None');
    }

    render(){
        return(
            <div className={this.props.layoutMode + 'Slider'}>
                <NavTab name='Home' onClickEvent={this.home} currentTab={this.props.currentTab}/>
                {DropDownList.map(value =>  <DropDownTab name={value.title} currentTab={this.props.currentTab} currentDropdown={this.state.currentDropDown} onClickEvent={this.props.changeTab} dropDownUpdate={this.changeDropDownTab} contentTabs={value.subTitles}/>)} 
                <div className='contactUs'>
                    <p>Contact Us </p>
                    <FaFacebookSquare size={32} color={'#3b5998'}/>
                    <p>IITH Home</p>
                </div>   
            </div>
        )
    }
}

export default NavSlider;