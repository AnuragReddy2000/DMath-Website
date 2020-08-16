import { IconType } from 'react-icons';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {GiBookshelf} from 'react-icons/gi';
import {BsPeople} from 'react-icons/bs';
import {BsNewspaper} from 'react-icons/bs';
import {GiSpellBook} from 'react-icons/gi';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {MdEventNote} from 'react-icons/md';


export const DropDownList: Array<{ title: string, icon:IconType, subTitles: Array<{tab: string, url: string, pageType: string}> }>= [
    {
        title: "Academics",
        icon: GiBookshelf,
        subTitles: [
            {
                tab: 'B.tech MnC', 
                url: '/academics/btech', 
                pageType: 'component'
            },
            {
                tab: 'General UG',
                url: '/academics/generalUG', 
                pageType: 'component'
            },
            {
                tab: 'M.Sc',
                url: '/academics/msc', 
                pageType: 'component'
            },
            {
                tab: 'Ph.D',
                url: '/academics/phd', 
                pageType: 'component'
            },
            {
                tab: 'Minors in Maths',
                url: '/academics/minors', 
                pageType: 'component'
            },
            {
                tab: 'Curriculum',
                url: '/academics/curriculum', 
                pageType: 'component'
            }
        ]
    },
    {
        title: 'Research',
        icon: GiSpellBook,
        subTitles: [
            { 
                tab: 'Areas',
                url: '/research/areas', 
                pageType: 'component'
            },
            {
                tab: 'Publications',
                url: '/research/publications', 
                pageType: 'component'
            },
            {
                tab: 'Funded Projects',
                url: '/research/fundedprojects', 
                pageType: 'component'
            }
        ]
    },
    {
        title: 'People',
        icon: BsPeople,
        subTitles: [
            {
                tab: 'Faculty',
                url: '/people/faculty', 
                pageType: 'component'
            },
            {
                tab: 'Staff',
                url: '/people/staff', 
                pageType: 'component'
            },
            {
                tab: 'Alumni',
                url: '/people/alumni', 
                pageType: 'component'
            },
            { 
                tab: 'Post-doctoral Fellows',
                url: '/people/postdoctoral', 
                pageType: 'component'
            },
            { 
                tab: 'Doctoral Students',
                url: '/people/doctoral', 
                pageType: 'component'
            },
            {
                tab: 'B.Tech & M.Sc',
                url: '/people/btech_msc', 
                pageType: 'component'
            }, 
        ]
    },
    {
        title: 'News & Events',
        icon: BsNewspaper,
        subTitles: [
            {
                tab: 'Seminars',
                url: '/news/seminars', 
                pageType: 'component'
            },
            {
                tab: 'Events',
                url: '/news/events', 
                pageType: 'component'
            },
            {
                tab: 'Outreach Events',
                url: '/news/outreach', 
                pageType: 'component'
            }
        ]
    },
    {
        title: 'Admissions',
        icon: AiOutlineUsergroupAdd,
        subTitles: [
            {
                tab:'Ph.D Admissions',
                url: '/admissions/phd', 
                pageType: 'component'
            },
            {
                tab: 'Summer Internships',
                url: '/admissions/summerintern', 
                pageType: 'component'
            }
        ]
    },
    {
        title: 'Recruitments',
        icon: AiOutlineUserAdd,
        subTitles: [
            {
                tab: 'Faculty Recruitments',
                url: '/recruitments/faculty', 
                pageType: 'component'
            },
            {
                tab: 'Project Openings',
                url: '/recruitments/project_openings', 
                pageType: 'component'
            }
        ]
    },
    {
        title: 'TimeTables',
        icon: MdEventNote,
        subTitles:  [
            {
                tab: 'B.Tech MnC TimeTable',
                url: 'https://docs.google.com/document/d/1ClL6JsFBi7Ge68j7-dTZ2_TR-o96969k99COoDhAhGE/edit', 
                pageType: 'static'
            },
            {
                tab: 'M.Sc Timetable',
                url: 'https://docs.google.com/document/d/1LqA-vM_koOTO43kmtdLbiKXwgxWngK4qK0XXFF6pRZI/edit?usp=sharing', 
                pageType: 'static'
            },
            {
                tab: 'Department timetable',
                url: 'https://docs.google.com/document/d/1i4FXIOrxUvzFRNdTbHIG24hBo2hmJFS3yEG7esaSMwY/edit?usp=sharing', 
                pageType: 'static'
            }
        ]
    }
]