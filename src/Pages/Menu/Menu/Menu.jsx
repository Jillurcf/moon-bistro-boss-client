import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../Hooks/useMenu";
import Sectionstitle from "../../../components/SectionTitles/Sectionstitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
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
            {/* main cover */}
            <Sectionstitle subheading="Don't miss" heading="Todays Offer"></Sectionstitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item*/}
            <MenuCategory items={dessert} title="desserts" img={dessertImg}></MenuCategory>
        </div>
    );
};

export default Menu;