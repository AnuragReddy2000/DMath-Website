import React, { useEffect } from 'react';
import './App.css';
import TitleBar from './common/titleBar/TitleBar';
import NavSlider from './common/navSlider/NavSlider';
import Announcements from './common/announcements/Announcements';
import {Swipeable} from 'react-swipeable';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Marquee from './common/marquee/Marquee';
import StaffPage from './pages/people/staffPage/StaffPage';
import BtechMnCPage from './pages/academics/btechMnCPage/BtechMnCPage';
import FacultyPage from './pages/people/facultyPage/FacultyPage';
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
import OutReachEventsPage from './pages/news/outReach/OutReachEventsPage';
import EventsPage from './pages/news/eventsPage/EventsPage';
import FundedProjectsPage from './pages/research/fundedProjects/FundedProjectsPage';
import PostDoctoralPage from './pages/people/postDoctoralPage/PostDoctoralPage';
import DoctoralPage from './pages/people/doctoralPage/DoctoralPage';
import CurriculumPage from './pages/academics/curriculum/CurriculumPage';
import AlumniPage from './pages/people/alumniPage/AlumniPage';
import Credits from './pages/misc/credits/Credits';
import ContactUs from './pages/misc/contactUs/ContactUs';
import {BsCaretLeftFill} from 'react-icons/bs';

interface AppProps {}

interface AppState {
  layoutType: string;
  showSlider: boolean;
  currentTab: string;
  showAnnouncements: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      showAnnouncements: false,
      layoutType: (window.outerWidth > 800)? 'desktop':'mobile',
      showSlider: false,
      currentTab: 'Home'
    }
    console.log(window.outerWidth);
    this.pageRef = React.createRef();
    window.addEventListener("resize",this.changeLayoutType);
  }

  pageRef : any

  changeLayoutType = (): void => {
    this.setState({
      layoutType: (window.outerWidth > 800)? 'desktop':'mobile'
    })
  }

  changeTab = (tab: string):void =>{
    this.setState({
        currentTab: tab,
        showSlider: this.state.showSlider && !this.state.showSlider
    },() => { this.pageRef.current.scrollTop = 0 });
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

  toggleShowAnnouncements =():void =>{
    this.setState({
      showAnnouncements: !this.state.showAnnouncements
    })
  }

  render(){
    return (
      <Swipeable onSwipedRight={this.swipeShowSlider} onSwipedLeft={this.swipeRemoveSlider}>
        <div className='page' ref={this.pageRef}>
          <TitleBar layoutType={this.state.layoutType} toggleShowSlider={this.toggleShowSlider}></TitleBar>
          <div className='pageBody'>
            {(this.state.layoutType === 'mobile' && !this.state.showSlider) ? null :  <NavSlider layoutMode={this.state.layoutType} currentTab={this.state.currentTab} changeTab={this.changeTab}/>}
            <div className='bodyContent'>
              <div style={{width: this.state.showAnnouncements ? '100%' : '95%'}}>
              <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/academics/btech" on component={BtechMnCPage} exact/>
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
                <Route path="/news/outreach" component={OutReachEventsPage}/>
                <Route path="/news/events" component={EventsPage}/>
                <Route path="/research/fundedprojects" component={FundedProjectsPage}/>
                <Route path="/people/postdoctoral" component={PostDoctoralPage}/>
                <Route path="/people/doctoral" component={DoctoralPage}/>
                <Route path="/academics/curriculum" component={CurriculumPage}/>
                <Route path="/people/alumni" component={AlumniPage}/>
                <Route path="/credits" component={Credits}/>
                <Route path="/contactUs" component={ContactUs} />
              </Switch>
              </div>
            </div>
            {this.state.showAnnouncements ? <Announcements changeTab={this.changeTab} hideAnnouncements={this.toggleShowAnnouncements} /> : 
            <div>
              <div className='announcementButton' onClick={this.toggleShowAnnouncements}>
                <BsCaretLeftFill/>
                <p className='annButtonText'>ANNOUNCEMENTS</p>
              </div>
              <div className='upcomingeventsButton' onClick={this.toggleShowAnnouncements}>
                <BsCaretLeftFill />
                <p className='annButtonText'>UPCOMING EVENTS</p>
              </div>
            </div>
            }
          </div>
          {this.state.layoutType==='mobile' ? <Marquee /> : null}
        </div>
      </Swipeable>
    );
  }  
}

export default App;
