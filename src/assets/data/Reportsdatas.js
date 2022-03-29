import { v4 as uuidv4 } from 'uuid';
import R1 from '../images/reports/2016.png';
import R2 from '../images/reports/2017.png';
import R3 from '../images/reports/2018.png';
import R4 from '../images/reports/2019.png';

const Reportsdatas = [
    {
        id: uuidv4(),
        img: R1,
        title: 'Report 2016',
        link:'/2016',
    },
    {
        id: uuidv4(),
        img: R2,
        title: 'Report 2017',
        link:'/2017',
    },
    {
        id: uuidv4(),
        img: R3,
        title: 'Report 2018',
        link:'/2018',
    },
    {
        id: uuidv4(),
        img: R4,
        title: 'Report 2019',
        link:'/2019',
    },
];

export default Reportsdatas;