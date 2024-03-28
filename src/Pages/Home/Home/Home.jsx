import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Features></Features>
        </div>
    );
};

export default Home;