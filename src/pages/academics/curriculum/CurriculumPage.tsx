import React from 'react';
import InfoView from '../../../components/infoView/InfoView';
import TableView from '../../../components/tableView/TableView';

class CurriculumPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <InfoView title='Curriculum: ' titleColor='darkblue' info={['The flexibility in our academic structure has resulted in various curricula for various batches, each designed to be an improvement over the previous.','All the links to various curricula are given below:']}/>
                <TableView title={'B.TECH 2017 CURRICULUM'} speaker='Faculty Advisor:  Dr. Pradipto Banerjee' link='/pdfs/BtechCurriculum2017.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2018 CURRICULUM'} speaker='Faculty Advisor:  Dr. Subrahmanya Sastry Challa' link='/pdfs/BtechCurriculum2018.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2019 CURRICULUM'} speaker='Faculty Advisor:  Dr. Sukumar D' link='/pdfs/BtechCurriculum2019.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2020 CURRICULUM'} speaker='Faculty Advisor:  Dr. Neeraj Kumar' link='/pdfs/BtechCurriculum2020.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'M.SC 2019 CURRICULUM'} speaker='Faculty Advisor:  Dr. Anantha Lakshmi Narayana P' link='/pdfs/MscCurriculum2019.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'M.SC 2020 CURRICULUM'} speaker='Faculty Advisor:  Dr. Satya Prakash Singh' link='/pdfs/MscCurriculum2020.pdf' linkText='Link to the Curriculum'/>
            </div>
        )
    }
}

export default CurriculumPage;