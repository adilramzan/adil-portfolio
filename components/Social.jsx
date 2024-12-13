import Link from "next/link";

import{FaGithub,FaLinkedin,FaBehance} from "react-icons/fa";
//import{FaYoutube,FaTwitter} from "react-icons/fa";

const socials=[
    {icon:<FaGithub />, path:'https://github.com/adilramzan/adilramzan_'},
    {icon:<FaLinkedin />, path:'https://www.linkedin.com/in/adil-ramzan-1509a5225/'},
    {icon:<FaBehance />, path:'https://www.behance.net/adilramzan_'},
    //{icon:<FaYoutube />, path:''},
    //{icon:<FaTwitter />, path:''},
]

const Social=({containerStyles,iconStyles})=>{
    return(
        <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
            )
        })}
        </div>
    );
};

export default Social;