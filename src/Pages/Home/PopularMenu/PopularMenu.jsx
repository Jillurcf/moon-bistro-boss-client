import { useEffect, useState } from "react";
import Sectionstitle from "../../../components/SectionTitles/Sectionstitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    console.log(menu);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    return (
        <section>
            <Sectionstitle heading={"from Our Menu"} subheading={"Popular Items"}></Sectionstitle>
           <div>
           {
               menu.map(item => <MenuItem key={item._id}
               item={item}></MenuItem>) 
            }
           </div>
        </section>
    );
};

export default PopularMenu;