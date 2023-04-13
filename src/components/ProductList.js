import Product from "./Product";
import Kyber from "../assets/projects/Kyber.png";
import SaezBlog from "../assets/projects/SaezBlog.png";
import Sapero from "../assets/projects/Sapero.png";
import Cartify from "../assets/projects/cartify.png";
import Electricity from "../assets/projects/electricity.png";
import CineClick from "../assets/projects/cineclick.png";
import TravelTrio from "../assets/projects/traveltrio.png";

const products = [
  {
    img: Kyber,
    link: "https://chrlnsaez.github.io/Kyber/",
  },
  {
    img: SaezBlog,
    link: "https://chrlnsaez.github.io/PersonalBlog/",
  },
  {
    img: Sapero,
    link: "https://sapero.vercel.app/",
  },
  {
    img: Cartify,
    link: "https://www.figma.com/file/Am8rrReYkdMJUxsFNh3pHk/Shopping-Cart?node-id=6%3A2&t=D9uhOyCLijIgweag-1",
  },
  {
    img: Electricity,
    link: "https://www.figma.com/file/5ZXZFsEpiv175Y4F7DoQCl/Electricity?node-id=0%3A1&t=D9uhOyCLijIgweag-1",
  },
  {
    img: CineClick,
    link: "https://www.figma.com/file/JDrSmGk1sqGWpI3NH4In8j/CineClick?t=D9uhOyCLijIgweag-1",
  },
  {
    img: TravelTrio,
    link: "https://traveltrio.vercel.app/",
  },
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-list">
        {products.map((item, index) => (
          <Product key={index} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
