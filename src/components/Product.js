const Product = ({ img, link, description }) => {
  return (
    <div className='product-wrapper'>
      <div className='product'>
        <div className='product-browser'>
          <div className='product-circle'></div>
          <div className='product-circle'></div>
          <div className='product-circle'></div>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt='' className='product-img' />
        </a>
      </div>
      <p>{description}</p>

    </div>
  );
};

export default Product;
