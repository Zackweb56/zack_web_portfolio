import img01 from '../../assets/ecommerce.png';
import img02 from '../../assets/fastfood.jpg';
import img03 from '../../assets/travel.png';
// icons
import { FaReact,FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap,FaFigma } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
import { SiMysql} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const ProData = [
    {
        project_image: img01,
        project_title: 'Electro. e-commerce website',
        project_desc: [<FaLaravel />  ,  <SiMysql /> ,<FaFigma />,<FaReact/> ,  <BiLogoJquery />],
        project_details: '"this website is a responsive Electro e-commerce site, meticulously designed on Figma and created using React.js, CSS, Bootstrap, and jQuery. Backed by the strength of Laravel and MySQl."',
        project_link_preview: 'https://github.com/Zackweb56/Electro.e-commerce',
    },
        {
        project_image: img03,
        project_title: 'Travel website',
        project_desc: [<FaHtml5 />  ,  <FaCss3Alt />  ,  <BiLogoJquery />  ,<IoLogoJavascript/>,  <FaBootstrap />],
        project_details: '"this website is a responsive travel website, expertly crafted using HTML, CSS, Bootstrap, jQuery, and JavaScript. Immerse yourself in stunning visuals and seamless navigation as you explore exciting destinations and plan your next adventure through our user-friendly interface."',
        project_link_preview: 'https://github.com/Zackweb56/Travel-website-design-html-css',
    },
    {
        project_image: img02,
        project_title: 'Fast Food website design',
        project_desc: [<FaHtml5 />,<FaCss3Alt />, <FaBootstrap />],
        project_details: '"Expertly built with HTML, CSS, and the power of Bootstrap. Designed seamlessly for all devices, from smartphones to desktops, our site showcases a mouth-watering menu, eye-catching images, and an engaging design that brings our delicious offerings to life."',
        project_link_preview: 'https://github.com/Zackweb56/fastfood_website',
    },
]