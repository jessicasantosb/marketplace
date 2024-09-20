'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

export function CartButton() {
  const { cartCount, formattedTotalPrice } = useShoppingCart();

  return (
    <Link href={'/cart'} className='flex items-center justify-center gap-2'>
      <ShoppingCart className='font-extrabold h-6 w-6' />
      <p suppressHydrationWarning>{formattedTotalPrice}</p>
      <p>({cartCount})</p>
    </Link>
  );
}
