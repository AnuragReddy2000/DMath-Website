import React from 'react';
import Carousel from '../../../common/carousel/Carousel';
import InfoView from '../../../common/infoView/InfoView';
import {CarouselPics} from '../../../models/CarouselPics';
import TableView from '../../../common/tableView/TableView';

class AreaPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={CarouselPics['Areas']} imagesNum={CarouselPics['Areas'].length}/>
                    <InfoView 
                    title='Areas of Research Interests:' 
                    titleColor='darkblue'
                    info={['Pursuant to our vision, the department aims to become a world class center for theoretical, applicable and interdisciplinary research. The faculty members of the department are engaged in an active and an equal basis collaboration with eminent researchers at three levels.', 
                    ' At a very local level there are same-interest or complementary-interest research groups at the intra- and inter-departmental level. At a national and inter-national level, faculty members maintain an active collaboration with both eminent researchers and groups in their respective areas of research.',
                    'To know more about the topics of research that our faculty members are currently interested in, please see the following links.']}
                    />
                </div>
                <TableView title='Functional Analysis:' content={'The Functional Analysis group at IIT Hyderabad consists broadly the following major areas, namely \n (i) Operator Theory/Algebras\n(ii) Geometry of Banach spaces\n(iii) Banach Algebras\n(iv) Harmonic Analysis \n\nSpecifically, we are interested in studying the spectral representation of bounded operators, diagonalization of operators, studying the geometry of Banach spaces, particularly the approximation in Banach spaces, geometry of operator spaces and various rotundity/ smoothness structures in Banach spaces. Various kinds of spectrum of an elements in a Banach algebra with applications towards numerical solutions of operator equations, studying images of certain function spaces under transforms like Segal-Bargmann transforms, construction of frames in Fock spaces.'}/>
                <TableView title='Theory of Non-linear PDEs:' content={'Our focus is in particular on semilinear and quasilinear PDEs of elliptic type. Variational methods and geometric analysis are two important tools which are widely used in studying the existence and qualitative behaviour of different kind of solutions of these particular type of PDEs. Recently a lot of interest has grown in the area of non-local operators which appear in many different contexts like thin obstacle problem, optimization, finance, phase transitions, conservation laws, multiple scattering, minimal surfaces, material science etc. A natural question arises here is whether the classical variational and geometric methods can be used to handle these type of non-local nonlinear problems. The current focus is on these type of questions and developing the theory for general non-local operators.'}/>
                <TableView title='Number Theory:' content={"The research interests of the faculty in the Number theory group include topics in algebraic and analytic number theory. Currently, the members of the group are working in areas ranging from modular forms defined over number fields and Galois representations attached to them, irreducibility aspects of polynomials over the rationals to problems related to the Mahler's measures of polynomials."}/>
                <TableView title='Fluid Dynamics:' content={'The study of hydrodynamic stability is an important aspect of the fluid mechanics, largely due to the fact that an unstable flow is not observable and which, in practice, is broken down by “small variations” in flow. It is the task of the stability analyst to identify the critical parameters causing the instability in the flow field. There are two different approaches to address this problem - the first is the linear stability analysis and the second is the non-linear stability analysis.\n\nThe linear stability analysis gives a sufficient condition under which the flow is unstable and talks nothing about the stability of the flow field. On the other hand, the nonlinear stability approach (via energy functional) gives a condition under which the flow field is stable but fails to address the instability of the system. In this way these two theories complement each other and resulting into the sub-critical instabilities. Our efforts are to address this phenomenon for a variety of problems both in clear fluids and flows through porous media.'}/>
                <TableView title='Computational Intelligence:' link={'http://math.iith.ac.in/liar/'} linkText='Link to LIAR' content={'The Inter-Departmental Group on Mathematics for Health Care and the Special Interest Group on Mathematical Applications to Computational Intelligence – (SIGMA-CI) comprise faculty members from the departments of Electrical, Computer Science and Chemical Engineering and are actively pursuing theoretical and applied research into fields like healthcare applications, machine learning and image processing. For more details, please see:'}/>
            </div>
        )
    }
}

export default AreaPage;