import stripe from '@/lib/stripe';
import { Products } from '@/types';
import Stripe from 'stripe';
import { ProductCard } from './ProductCard';

const getProducts = async () => {
  try {
    const stripeProducts = await stripe.products.list({
      limit: 10,
      expand: ['data.default_price'],
    });

    return stripeProducts.data.map((product: Stripe.Product): Products => {
      return {
        id: product.id.toString(),
        name: product.name,
        description: product.description ?? '',
        price:
          (product.default_price as Stripe.Price)?.unit_amount_decimal ?? '0',
        currency: (product.default_price as Stripe.Price)?.currency ?? 'BRL',
        images: product.images,
        image: product.images[0],
      };
    });
  } catch (error) {
    console.error(error);
  }
};

export async function ProductList() {
  const products = await getProducts();

  return (
    <section className='m-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
