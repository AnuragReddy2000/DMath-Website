import React from 'react';
import './NavSlider.css';
import NavTab from './navTab/NavTab';
import DropDownTab from './dropDownTab/DropDownTab';
import {AiOutlineHome} from 'react-icons/ai';
import {DropDownList} from '../../models/DropDownsAndTabs';
import {FaFacebookSquare} from 'react-icons/fa';
import {Link} from 'react-router-dom';

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
                <NavTab name='Home' onClickEvent={this.home} currentTab={this.props.currentTab} urlLink='/' icon={AiOutlineHome} pageType='component'/>
                {DropDownList.map((value,index) =>  <DropDownTab key={index} name={value.title} currentTab={this.props.currentTab} icon={value.icon} currentDropdown={this.state.currentDropDown} onClickEvent={this.props.changeTab} dropDownUpdate={this.changeDropDownTab} contentTabs={value.subTitles}/>)} 
                <div className='contactUs'>
                    <Link to='/contactUs' style={{textDecoration: 'none', color: 'inherit'}}><p>Contact Us </p></Link>
                    <a href='https://www.facebook.com/iithmathematicsdepartment/' style={{textDecoration: 'none', color: 'inherit'}} target='_blank'><FaFacebookSquare size={32} color={'#3b5998'}/></a>
                    <p><a href='https://www.iith.ac.in/' style={{textDecoration: 'none', color: 'inherit'}} target='_blank'>IITH Home</a></p>
                    <Link to='/credits' style={{textDecoration: 'none', color: 'inherit'}}><p>Credits</p></Link>
                </div>   
            </div>
        )
    }
}

export default NavSlider;