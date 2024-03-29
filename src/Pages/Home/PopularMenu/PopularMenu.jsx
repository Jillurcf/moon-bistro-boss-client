import { useEffect, useState } from "react";
import Sectionstitle from "../../../components/SectionTitles/Sectionstitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-12">
            <Sectionstitle heading={"from Our Menu"} subheading={"Popular Items"}></Sectionstitle>
           <div className="grid md:grid-cols-2 gap-10">
           {
              popular.map(item => <MenuItem key={item._id}
               item={item}></MenuItem>) 
            }
           </div>
        </section>
    );
};

export default PopularMenu;