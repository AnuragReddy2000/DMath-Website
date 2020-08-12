import Dmathfam from '../images/homePage/Dmathfam.jpg';
import DmathCamp from '../images/homePage/DmathCamp.png';
import DmathPicnic from '../images/homePage/DmathPicnic.png';
import MinC_720 from '../images/academics/btechMnC/MinC_720.jpg';
import ubd_quote from '../images/academics/btechMnC/ubd_quote.png';
import minorsPic from '../images/academics/minors/minorsPic.png';
import GeneralUG from '../images/academics/generalUG/GeneralUG.png';
import msc from '../images/academics/msc/msc.png';
import phd_main from '../images/academics/phd/phd_main.png';
import phd_submain from '../images/academics/phd/phd_submain.png';
import areas from '../images/research/areas/areas.png';

export const CarouselPics: Record<string, string[]> ={
    'About Us': [Dmathfam,DmathPicnic,DmathCamp],
    'BtechMnC': [MinC_720,ubd_quote],
    'Minors' : [minorsPic],
    'General UG': [GeneralUG],
    'MSc': [msc],
    'PhD': [phd_main,phd_submain],
    'Areas': [areas]
}