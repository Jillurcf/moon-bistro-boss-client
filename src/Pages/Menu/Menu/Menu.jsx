import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../Hooks/useMenu";
import Sectionstitle from "../../../components/SectionTitles/Sectionstitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'desserts')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
               <title>Bistro-menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <Sectionstitle subheading="Don't miss" heading="Todays Offer"></Sectionstitle>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;