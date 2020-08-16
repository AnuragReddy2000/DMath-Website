import PersonInfo from './PersonInfoModel';
import AmitSirImg from '../images/people/faculty/AmitSirImg.jpg';
import BalaSirImg from '../images/people/faculty/BalaSirImg.jpg';
import BhusanSirImg from '../images/people/faculty/BhusanSirImg.jpg';
import ChallaSirImg from '../images/people/faculty/ChallaSirImg.jpg';
import DGhosh from '../images/people/faculty/DGhosh.jpg';
import Mrinmoy from '../images/people/faculty/Mrinmoy.png';
import NarasimhaSirImg from '../images/people/faculty/NarasimhaSirImg.jpg';
import Neeraj from '../images/people/faculty/Neeraj.jpg';
import PradiptoSirImg from '../images/people/faculty/PradiptoSirImg.jpg';
import RameshSirImg from '../images/people/faculty/RameshSirImg.jpg';
import Sameen from '../images/people/faculty/Sameen.jpg';
import Satya from '../images/people/faculty/Satya.jpg';
import SukuSirImg from '../images/people/faculty/SukuSirImg.jpg';
import TPaul from '../images/people/faculty/TPaul.jpg';
import Venku from '../images/people/faculty/Venku.jpg';
import generic from '../images/people/faculty/generic.png';

export const FacultyDataList: Array<{name: string, data: PersonInfo}>= [
    {
        name: 'Dr.Amit Tripathi',
        data: new PersonInfo('Dr.Amit Tripathi', 'Assistant Professor',AmitSirImg ,'Algebraic geometry and commutative algebra', ' amittr@math.iith.ac.in', 'C-442', 'https://sites.google.com/site/amittr')
    },
    {
        name: 'Dr. Anantha Lakshmi Narayana P',
        data: new PersonInfo('Dr. Anantha Lakshmi Narayana P', 'Associate Professor',generic ,'Convection in Porous Media', ' ananth@math.iith.ac.in', 'C-502', 'http://www.iith.ac.in/~ananth/')
    },
    {
        name: 'Dr. Balasubramaniam Jayaram',
        data: new PersonInfo('Dr. Balasubramaniam Jayaram', 'Professor & Head of the Department', BalaSirImg,'Fuzzy Logic Connectives, Approximate Reasoning', 'jbala@math.iith.ac.in', 'C-504', 'https://iith.ac.in/~jbala/')
    },
    {
        name: 'Dr. Bhakti Bhusan Manna',
        data: new PersonInfo('Dr. Bhakti Bhusan Manna', 'Assistant Professor', BhusanSirImg,'Partial Differential Equations, Variational Methods and Geometric Analysis', 'bbmanna@math.iith.ac.in', ' C-537', 'https://math.iith.ac.in/People/faculty.html#')
    },
    {
        name: 'Dr. Dipankar Ghosh',
        data: new PersonInfo('Dr. Dipankar Ghosh', 'Assistant Professor', DGhosh,'Commutative Algebra', ' dghosh@math.iith.ac.in', 'C-313/D', 'https://sites.google.com/view/dipankar-ghosh')
    },
    {
        name: 'Dr. Mrinmoy Datta',
        data: new PersonInfo('Dr. Mrinmoy Datta', 'Assistant Professor', Mrinmoy,'Algebraic Geometry and their applications to Error-correcting codes', ' mrinmoy.datta@math.iith.ac.in', '', 'https://math.iith.ac.in/People/faculty.html')
    },
    {
        name: 'Dr. Narasimha Kumar',
        data: new PersonInfo('Dr. Narasimha Kumar', 'Associate Professor',NarasimhaSirImg, 'Arithmetic Geometry, Algebraic Number Theory', ' narasimha@math.iith.ac.in', 'C-547', 'https://sites.google.com/site/chnarasimhakumar/home')
    },
    {
        name: 'Dr. Neeraj Kumar',
        data: new PersonInfo('Dr. Neeraj Kumar', 'Assistant Professor', Neeraj, 'Commutative Algebra', ' neeraj@math.iith.ac.in', 'C-531', 'https://iith.ac.in/~neeraj/')
    },
    {
        name: 'Dr. Pradipto Banerjee',
        data: new PersonInfo('Dr. Pradipto Banerjee', 'Assistant Professor', PradiptoSirImg,'Number Theory, including Elementary, Classical Algebraic and Computational Topics', ' pradipto@math.iith.ac.in', ' B-219', 'https://math.iith.ac.in/People/faculty.html#')
    },
    {
        name: 'Dr. Ramesh G',
        data: new PersonInfo('Dr. Ramesh G', 'Associate Professor', RameshSirImg,'Functional Analysis, Operator Algebras', ' rameshg@math.iith.ac.in', 'C-515', 'http://www.iith.ac.in/~rameshg/')
    },
    {
        name: 'Dr. Sameen Naqvi',
        data: new PersonInfo('Dr. Sameen Naqvi', 'Assistant Professor', Sameen,'Reliability Theory, Stochastic Orders, Applied Statistics, Risk Theory', '  sameen@math.iith.ac.in', ' C-312/A', 'https://math.iith.ac.in/People/faculty.html#')
    },
    {
        name: 'Dr. Satya Prakash Singh',
        data: new PersonInfo('Dr. Satya Prakash Singh', 'Assistant Professor', Satya,'Optimal Design Theory, Order Restricted Experiments, Cluster Randomized Trials, Cross-over Designs', 'spsingh@math.iith.ac.in', 'C-312/G', 'http://www.iith.ac.in/~spsingh/')
    },
    {
        name: 'Dr. Subrahmanya Sastry Challa',
        data: new PersonInfo('Dr. Subrahmanya Sastry Challa', 'Professor',ChallaSirImg, 'Wavelets, Computed Tomography, Sparsity seeking optimization techniques', ' csastry@math.iith.ac.in', 'C-503', 'http://www.iith.ac.in/~csastry/index.html')
    },
    {
        name: 'Dr. Sukumar D',
        data: new PersonInfo('Dr. Sukumar D', 'Associate Professor', SukuSirImg,'Functional Analysis, Banach algebra, Numerical Linear algebra', ' suku@math.iith.ac.in', 'A-506', 'http://www.iith.ac.in/~suku/')
    },
    {
        name: 'Dr. Tanmoy Paul',
        data: new PersonInfo('Dr. Tanmoy Paul', 'Assistant Professor', TPaul,'Functional Analysis, Banach space theory, Geometry of Banach spaces', 'tanmoy@math.iith.ac.in', 'A-301', 'https://iith.academia.edu/TanmoyPaul')
    },
    {
        name: 'Dr. Venku Naidu .D',
        data: new PersonInfo('Dr. Venku Naidu .D', 'Associate Professor', Venku,'Harmonic Analysis, Functional Analysis', 'venku@math.iith.ac.in', 'C-544', 'http://iith.ac.in/~venku/index.html')
    },
    
]