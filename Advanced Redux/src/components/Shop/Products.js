import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 4,
    title: 'My first book',
    description:'My first book whas amazing!!',
  },
  {
    id: 'p2',
    price: 14,
    title: 'My second book',
    description:'My second book whas amazing!!',
  },
  {
    id: 'p3',
    price: 7,
    title: 'My third book',
    description:'My third book is not so good!!',
  }
];

function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description} />))}
      </ul>
    </section>
  );
}

export default Products;
