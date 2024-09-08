/* eslint-disable @typescript-eslint/no-explicit-any */
import stripe from '@/lib/stripe';
import { DummyProducts } from '@/types';

const getProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const data = await res.json();
  const products = data.products.map((product: DummyProducts) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: 'BRL',
      },
    };
  });

  return products;
};

const seedProducts = async () => {
  const products = await getProducts();
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create(product);
      console.log(productCreated.name);
      
    } catch (error: any) {
      console.error('Stripe error: ', error);
    }
  });
};

export default async function Seed() {
  await seedProducts()

  return (
    <section className='container flex items-center justify-center'>
      <h1 className='text-3xl text-green-600 font-extrabold'>Seed</h1>
    </section>
  );
}
