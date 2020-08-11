import { IconType } from 'react-icons';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {GiBookshelf} from 'react-icons/gi';
import {BsPeople} from 'react-icons/bs';
import {BsNewspaper} from 'react-icons/bs';
import {GiSpellBook} from 'react-icons/gi';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {MdEventNote} from 'react-icons/md';

export const IconsList: Record<string, IconType> = {
    'Home': AiOutlineHome,
    'Academics': GiBookshelf,
    'Research': GiSpellBook,
    'People': BsPeople,
    'News & Events': BsNewspaper,
    'Admissions': AiOutlineUsergroupAdd,
    'Recruitments': AiOutlineUserAdd,
    'TimeTables': MdEventNote
}