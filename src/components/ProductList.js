import Product from "./Product";
import SaezBlog from "../assets/projects/SaezBlog.png";
import Cartify from "../assets/projects/cartify.png";
import Electricity from "../assets/projects/electricity.png";
import CineClick from "../assets/projects/cineclick.png";
import TravelTrio from "../assets/projects/traveltrio.png";
import EasterSticker from "../assets/projects/easter-sticker.png";
import HelloKittySticker from "../assets/projects/hello-kitty-stickers.png";
import SummerSticker from "../assets/projects/summer-sticker.png";
import NewYearSticker from "../assets/projects/new-year-sticker.png";
import WeddingSticker from "../assets/projects/wedding-sticker.png";
import ThanksGivingSticker from "../assets/projects/thanks-giving-sticker.png";
import AccessorySticker from "../assets/projects/accessories-sticker.png";
import DessertSticker from "../assets/projects/dessert-sticker.png";
import TravelSticker from "../assets/projects/travel-sticker.png";
import DonkeyMailer from "../assets/projects/donkey-mailer.png";

const products = [
  {
    img: SaezBlog,
    link: "https://chrlnsaez.github.io/PersonalBlog/",
    description: 'Personal Blog'
  },
  {
    img: Cartify,
    link: "https://www.figma.com/file/Am8rrReYkdMJUxsFNh3pHk/Shopping-Cart?node-id=6%3A2&t=D9uhOyCLijIgweag-1",
    description: 'Cartify - Bar Code Scanner'
  },
  {
    img: Electricity,
    link: "https://www.figma.com/file/5ZXZFsEpiv175Y4F7DoQCl/Electricity?node-id=0%3A1&t=D9uhOyCLijIgweag-1",
    description: 'Voltage Management'
  },
  {
    img: CineClick,
    link: "https://www.figma.com/file/JDrSmGk1sqGWpI3NH4In8j/CineClick?t=D9uhOyCLijIgweag-1",
    description: 'CineClick - Cinema Ticketing System'
  },
  {
    img: TravelTrio,
    link: "https://traveltrio.vercel.app/",
    description: 'TravelTrio - Vacation Spots'
  },
  {
    img: DonkeyMailer,
    link: "https://www.figma.com/design/17php8xpvZlt5ZVEccktMY/DonkeyMailer?node-id=68-107&t=VNcqBlInCeEmy6HC-0",
    description: 'Donkey Mailer - Mailing System'
  },
  {
    img: EasterSticker,
    link: "https://www.figma.com/design/bqs4uxpNJhOZW4UggFKOs9/Easter-Stickers?node-id=0-1&t=oxuwkFpZ7c95zOrG-0",
    description: 'Easter Stickers'
  },
  {
    img: HelloKittySticker,
    link: "https://www.figma.com/design/ofcSYgI7POzABGSdxzz3kI/Hello-Kitty-Stickers?t=oxuwkFpZ7c95zOrG-0",
    description: 'Hello Kitty Stickers'
  },
  {
    img: SummerSticker,
    link: "https://www.figma.com/design/eYcrJDm5jEL6BehQOOAIQh/Sticker-(Summer-Theme)?t=TSWisx1GaQIQ2SaD-0",
    description: 'Summer Stickers'
  },
  {
    img: NewYearSticker,
    link: "https://www.figma.com/design/9Lr6WnVCGdqwBSKEmA6XBl/New-Year-Sticker?node-id=0-1&t=TSWisx1GaQIQ2SaD-0",
    description: 'New Year Stickers'
  },
  {
    img: WeddingSticker,
    link: "https://www.figma.com/design/jtB8BPXPMilgVU4wSjbmif/Wedding-Stickers?t=TSWisx1GaQIQ2SaD-0",
    description: 'Wedding Stickers'
  },
  {
    img: AccessorySticker,
    link: "https://www.figma.com/design/cyPB8zYTinldyDePvoEKTW/Accessories-Cliparts?t=TSWisx1GaQIQ2SaD-0",
    description: 'Accessory Stickers'
  },
  {
    img: ThanksGivingSticker,
    link: "https://www.figma.com/design/kurMYZSjdY0iGLbt7G1AxA/Thanks-Giving-Cliparts?t=TSWisx1GaQIQ2SaD-0",
    description: 'Thanks Giving Stickers'
  },
  {
    img: TravelSticker,
    link: "https://www.figma.com/design/Zbv5SXx3SIUFfiKKekFbQg/Travel-Cliparts?t=TSWisx1GaQIQ2SaD-0",
    description: 'Travel Stickers'
  },
  {
    img: DessertSticker,
    link: "https://www.figma.com/design/TZEEyxlNdvGo5D1Zf4PWqO/Desserts-Stickers?t=TSWisx1GaQIQ2SaD-0",
    description: 'Dessert Stickers'
  },
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-list">
        {products.map((item, index) => (
          <Product key={index} img={item.img} link={item.link} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
