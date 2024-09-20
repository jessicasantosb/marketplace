'use client';

import { Check } from 'lucide-react';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

interface SuccessProps {
  params: {
    sessionId: string;
  };
}

export default function Success({ params }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  // console.log('params: ', params);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className='container my-10 space-y-4 flex items-center justify-center flex-col '>
      <Check className='w-24 h-24 text-green-500' />
      <h1 className='text-3xl'>Obrigada e parabéns pela compra!</h1>
    </section>
  );
}
