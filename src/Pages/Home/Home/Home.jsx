import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
          <Helmet>
               <title>Bistro-Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Features></Features>
        </div>
    );
};

export default Home;