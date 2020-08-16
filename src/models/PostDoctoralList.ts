import muduli from '../images/people/postDoctoral/muduli.jpg'
import praveen from '../images/people/postDoctoral/praveen.png';

export const PostDoctoralList: Array<{name: string, image: string,email:string, area: string, mentor: string, stay: string, link: string}> = [
    {
        name: 'Dr. Priya Ranjan Muduli',
        image: muduli,
        email: ' priyaranjanmuduli@gmail.com',
        area: 'Sparse Signal Processing, Convex Optimization and Machine Learning',
        mentor: 'Prof. C.S. Sastry',
        stay: 'Nov 2019 to - ',
        link: 'https://sites.google.com/view/priyaranjanmuduli/home'
    }
]

export const FormerPostDoctoralList: Array<{name: string, image: string,email:string, area: string, mentor: string, stay: string, link: string}> = [
    {
        name: 'Dr. Praveen Kumar P U',
        image: praveen,
        email: ' praveen577302@gmail.com',
        area: ' Image Processing, Inverse Problems',
        mentor: 'Prof. C.S. Sastry',
        stay: 'June 2014 to March 2017',
        link: 'https://scholar.google.co.in/citations?user=JtfJ9Z4AAAAJ&hl=en'
    }
]