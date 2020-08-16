import React from 'react';
import './ContactUs.css';

class ContactUs extends React.Component{

    render(){
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent:'flex-start'}}>
                <div className='contactUsparagraph'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px', marginLeft:'0px'}}>Contact Us:</p>
                    <p style={{margin: '4px', padding: '0px'}}>Office of the Department of Mathematics,</p>
                    <p style={{margin: '4px', padding: '0px'}}>Indian Institite of Technology Hyderabad,</p>
                    <p style={{margin: '4px', padding: '0px'}}>Kandi, Sangareddy,</p>
                    <p style={{margin: '4px', padding: '0px'}}>Hyderabad-502285.</p>
                    <p style={{margin: '4px', padding: '0px'}}>Telangana, India.</p>
                    <p>Email: office@math.iith.ac.in</p>
                </div>
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For queries regarding Faculty recruitment contact,</p>
                    <p className='toolTip'>Dr. G. Ramesh <span className='toolTipText'><i> rameshg@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. P. Anantha Lakshmi Narayana <span className='toolTipText'><i> ananth@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. V. G. Narasimha Kumar <span className='toolTipText'><i> narasimha@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. Satya Prakash Singh <span className='toolTipText'><i> spsingh@math.iith.ac.in</i></span></p>
                </div>
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For queries regarding Academic program contact,</p>
                    <p className='toolTip'>Dr Tanmoy Paul <span className='toolTipText'><i> tanmoy@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. P. Anantha Lakshmi Narayana <span className='toolTipText'><i> ananth@math.iith.ac.in</i></span></p>
                </div>
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For queries regarding Postdoc positions contact,</p>
                    <p className='toolTip'>Dr. Ch. Narasimha Kumar <span className='toolTipText'><i> narasimha@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. G. Ramesh <span className='toolTipText'><i> rameshg@math.iith.ac.in</i></span></p>
                </div>
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For queries regarding Seminars by visitors contact,</p>
                    <p className='toolTip'>Dr. Venku Naidu <span className='toolTipText'><i> venku@math.iith.ac.in</i></span></p>
                </div>
            </div>
        )
    }
}

export default ContactUs;
