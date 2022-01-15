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
        link:'https://drive.google.com/file/d/1XE3jmjnRBooUcE4g8K_mqzUAZ6cbNFiA/view?usp=sharing',
    },
    {
        id: uuidv4(),
        img: R2,
        title: 'Report 2017',
        link:'https://drive.google.com/file/d/1k8ppaSSYuWTJwlwGOpEi2gZ8nsTLxE4G/view?usp=sharing',
    },
    {
        id: uuidv4(),
        img: R3,
        title: 'Report 2018',
        link:'https://drive.google.com/file/d/1cqKlJsW5p5RlkqKAn1CDbFceWK9DsGgq/view?usp=sharing',
    },
    {
        id: uuidv4(),
        img: R4,
        title: 'Report 2019',
        link:'https://drive.google.com/file/d/1omWnLFwHdvaG3QpXS0DnkqTNXpXMCVOk/view?usp=sharing',
    },
];

export default Reportsdatas;