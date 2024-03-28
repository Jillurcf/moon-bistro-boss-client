import Sectionstitle from "../../../components/SectionTitles/Sectionstitle";
import featureImg from "../../../assets/home/featured.jpg";
import './features.css'
const Features = () => {
    return (
        <div className="featured-item">
            <Sectionstitle heading="Featuerd Item" subheading='check it out'></Sectionstitle>
            <div  className="md: flex justify-center items-center py-8 px-16">
                <div><img src={featureImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores fugit quisquam, reprehenderit alias expedita iusto maiores tempora exercitationem cumque, fuga deserunt dolorem. Laudantium reprehenderit magnam labore aspernatur esse voluptate, qui, culpa at pariatur saepe fugiat beatae modi libero. Rerum exercitationem debitis earum molestias doloribus enim sapiente tempora molestiae consequuntur!</p>
                    <button className="btn btn-outline">Order now</button>
                </div>
            </div>

        </div>
    );
};

export default Features;