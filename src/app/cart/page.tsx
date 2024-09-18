'use client';

import { DebugCart } from 'use-shopping-cart';

export default function Cart() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h3>Cart</h3>
      <DebugCart />
    </section>
  );
}
