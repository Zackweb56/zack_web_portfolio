import img01 from '../../assets/ecommerce.png';
import img02 from '../../assets/fastfood.jpg';
import img03 from '../../assets/quiz.png';
// icons
import { FaReact,FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
// import { SiMysql} from "react-icons/si";

export const ProData = [
    {
        project_image: img01,
        project_title: 'Electro. e-commerce website',
        project_desc: [<FaReact />  ,  <FaLaravel />  ,  <BiLogoJquery />],
        project_link_preview: '#',
    },
    {
        project_image: img02,
        project_title: 'Fast Food website design',
        project_desc: [<FaHtml5 />,<FaCss3Alt />, <FaBootstrap />],
        project_link_preview: '#',
    },
    {
        project_image: img03,
        project_title: 'Travel website',
        project_desc: [<FaHtml5 />  ,  <FaCss3Alt />  ,  <BiLogoJquery />  ,  <FaBootstrap />],
        project_link_preview: '/https://zackweb56.github.io/Travel-website-design-html-css/',
    },
]