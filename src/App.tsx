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
import Minors from './pages/academics/minors/Minors';
import GeneralUGPage from './pages/academics/generalUGPage/GeneralUGPage';
import MScPage from './pages/academics/mscPage/MScPage';
import PhDPage from './pages/academics/phdPage/PhDPage';
import BtechAndMScPage from './pages/people/btechAndMSc/BtechAndMScPage';
import AreaPage from './pages/research/areas/AreaPage';
import PublicationsPage from './pages/research/publications/PublicationsPage';
import FacultyRecruitment from './pages/recruitments/facultyRecruitments/FacultyRecruitment';
import ProjectOpenings from './pages/recruitments/projectOpenings/ProjectOpenings';
import PhDAdmissions from './pages/admissions/phdAdmissions/PhDAdmissions';
import SummerInternships from './pages/admissions/summerInternships/SummerInternships';
 
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
        currentTab: tab
    })
    if (this.state.showSlider){
      this.setState({
        showSlider: !this.state.showSlider
      })
    }
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
                  <Route path="/academics/minors" component={Minors}/>
                  <Route path="/academics/generalUG" component={GeneralUGPage}/>
                  <Route path="/academics/msc" component={MScPage}/>
                  <Route path="/academics/phd" component={PhDPage}/>
                  <Route path="/people/btech_msc" component={BtechAndMScPage}/>
                  <Route path="/research/areas" component={AreaPage}/>
                  <Route path="/research/publications" component={PublicationsPage}/>
                  <Route path="/recruitments/faculty" component={FacultyRecruitment}/>
                  <Route path="/recruitments/project_openings" component={ProjectOpenings}/>
                  <Route path="/admissions/phd" component={PhDAdmissions}/>
                  <Route path="/admissions/summerintern" component={SummerInternships}/>
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
