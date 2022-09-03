import Product from './Product';
import Kyber from '../assets/projects/Kyber.png';
import Rock from '../assets/projects/Rock.png';
import SaezBlog from '../assets/projects/SaezBlog.png';
import Sapero from '../assets/projects/Sapero.png';
import StudentProfile from '../assets/projects/student_profile.png';

const products = [
  {
    id: 1,
    img: Kyber,
    link: 'https://chrlnsaez.github.io/Kyber/',
  },
  {
    id: 2,
    img: Rock,
    link: 'https://chrlnsaez.github.io/RockPaperScissors/',
  },
  {
    id: 3,
    img: SaezBlog,
    link: 'https://chrlnsaez.github.io/PersonalBlog/',
  },
  {
    id: 4,
    img: Sapero,
    link: 'https://sapero.vercel.app/',
  },
  {
    id: 5,
    img: StudentProfile,
    link: 'https://cypberpunk-client.vercel.app/',
  },
];

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
