import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"

const Menu = () => {

    

    return (
        <div>
            <Helmet>
               <title>Bistro-menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            
        </div>
    );
};

export default Menu;