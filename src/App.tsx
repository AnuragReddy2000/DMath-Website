import React from 'react';
import './App.css';
import TitleBar from './common/titleBar/TitleBar';
import NavSlider from './common/navSlider/NavSlider';
import Announcements from './common/announcements/Announcements';
import {Swipeable} from 'react-swipeable';
import HomePage from './pages/homePage/HomePage';
import Marquee from './common/marquee/Marquee';
import StaffPage from './pages/people/staffPage/StaffPage';
import BtechMnCPage from './pages/academics/btechMnCPage/BtechMnCPage';
import FacultyPage from './pages/people/facultyPage/FacultyPage';
import { Route, Switch } from 'react-router-dom';
import SeminarPage from'./pages/news/seminars/SeminarPage';
 
interface AppProps {}

interface AppState {
  layoutType: string;
  showSlider: boolean;
  currentTab: string;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      layoutType: (window.outerWidth > 800)? 'desktop':'mobile',
      showSlider: false,
      currentTab: 'Home'
    }
    window.addEventListener("resize",this.changeLayoutType)
  }

  changeLayoutType = (): void => {
    this.setState({
      layoutType: (window.outerWidth > 800)? 'desktop':'mobile'
    })
  }

  changeTab=(tab: string):void =>{
    this.setState({
        currentTab: tab,
        showSlider: !this.state.showSlider
    })
  }

  toggleShowSlider = (): void => {
    this.setState({
      showSlider: !this.state.showSlider
    })
  }

  swipeShowSlider = ():void => {
    if(!this.state.showSlider){
      this.setState({
        showSlider: true
      })
    }
  }

  swipeRemoveSlider =():void =>{
    if(this.state.showSlider){
      this.setState({
        showSlider: false
      })
    }
  }

  render(){
    return (
      <Swipeable onSwipedRight={this.swipeShowSlider} onSwipedLeft={this.swipeRemoveSlider}>
          <div className='page'>
            <TitleBar layoutType={this.state.layoutType} toggleShowSlider={this.toggleShowSlider}></TitleBar>
            <div className='pageBody'>
              {(this.state.layoutType == 'mobile' && !this.state.showSlider) ? null :  <NavSlider layoutMode={this.state.layoutType} currentTab={this.state.currentTab} changeTab={this.changeTab}/>}
              <div className='bodyContent'>
                <Switch>
                  <Route path="/" component={HomePage} exact/>
                  <Route path="/academics/btech" component={BtechMnCPage} exact/>
                  <Route path="/people/faculty" component={FacultyPage}/>
                  <Route path="/people/staff" component={StaffPage}/>
                  <Route path="/news/seminars" component={SeminarPage} />
                </Switch>
              </div>
              <Announcements/>
            </div>
            {this.state.layoutType==='mobile' ? <Marquee /> : null}
          </div>
      </Swipeable>
    );
  }  
}

export default App;
