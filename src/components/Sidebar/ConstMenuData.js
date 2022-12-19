import { AiFillHome } from "react-icons/ai"
import { MdDashboard } from "react-icons/md";
import { SiJusteat } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { SiBookstack } from "react-icons/si";
import { SiMediafire } from "react-icons/si";

export const menuItem = [
    {
        path: "/",
        name: (
            <h4>
                <span className='project'>Project</span> <p>My First Project</p>
            </h4>
        ),
        icon: <AiFillHome />,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <MdDashboard />,
    },
    {
        path: "/recipes",
        name: "Recipes",
        icon: <SiJusteat />,
    },
    {
        path: "/blogs",
        name: "Blogs",
        icon: <BiNews />,
    },
    {
        path: "/templates",
        name: "Templates",
        icon: <IoExtensionPuzzleSharp />,
    },
    {
        path: "/favorites",
        name: "Favorites",
        icon: (
            <span className="favorites_icon">
                <MdFavorite />
            </span>
        ),
    },
    {
        path: "/custom",
        name: "Custom",
        icon: (
            <span className="custom_icon">
                <VscCircleFilled />
            </span>
        ),
    },
    {
        path: "/integrations",
        name: "Integrations",
        icon: <SiBookstack />,
    },
    {
        path: "/semrush",
        name: "Semrush",
        icon: (
            <span className="semrush_icon">
                <SiMediafire />
            </span>
        ),
    },
];