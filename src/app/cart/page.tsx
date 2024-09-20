'use client';

import { Loader, Trash } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { cartCount, cartDetails, redirectToCheckout, clearCart } =
    useShoppingCart();

  const checkout = async () => {
    setIsCheckingOut(true);

    const response = await fetch('api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartDetails),
    });

    const { id } = await response.json();

    await redirectToCheckout(id);

    setIsCheckingOut(false);
  };

  return (
    <section className='m-4 flex flex-col items-center justify-center gap-2'>
      {cartDetails &&
        Object.keys(cartDetails).map((key) => {
          return (
            <Card key={key} className='w-full'>
              <CardHeader>
                <CardTitle className='tracking-wider'>
                  {cartDetails[key].name} ({cartDetails[key].quantity})
                </CardTitle>
                <CardDescription className='text-md tracking-wide'>
                  {cartDetails[key].description}
                </CardDescription>
              </CardHeader>

              <CardContent className='grid gap-6'>
                <div className='flex items-center justify-between space-x-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='relative h-28 w-28'>
                      <Image
                        src={cartDetails[key].image || ''}
                        alt={cartDetails[key].name}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <div>
                      <p className='text-md font-medium leading-none'>Pre;o</p>
                      <p className='text-md text-muted-foreground '>
                        {cartDetails[key].formattedValue}
                      </p>
                    </div>
                  </div>
                  <Trash className='text-red-400 hover:text-red-600' />
                </div>
              </CardContent>
            </Card>
          );
        })}

      <div
        className={cn(
          'w-full flex items-center justify-between',
          cartCount === undefined || cartCount <= 0 ? 'hidden' : ''
        )}
      >
        <Button size={'lg'} disabled={isCheckingOut} onClick={checkout}>
          {isCheckingOut ? (
            <div className='flex items-center justify-between gap-2'>
              <Loader className='animate-spin 2s repeat-infinite' />
              Finalizando...
            </div>
          ) : (
            'Finalizar'
          )}
        </Button>
        <Button
          size={'lg'}
          variant={'ghost'}
          disabled={isCheckingOut}
          onClick={clearCart}
        >
          Apagar todos os items
        </Button>
      </div>
    </section>
  );
}
