'use client';

import Image from 'next/image';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Products } from '@/types';

export function ProductCard({
  id,
  name,
  description,
  price,
  currency,
  image,
}: Products) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: 'pt-BR',
  });

  const addToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem({ id, name, description, currency, price: Number(price), image });
    toast({
      title: `${name} adicionado`,
      description: 'Adicione mais por descontos.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-center min-h-[4rem]'>
          {name}
        </CardTitle>
        <CardDescription className='relative w-full h-60'>
          <Image
            src={image}
            alt='name'
            fill
            sizes='100%'
            className='object-contain'
          />
        </CardDescription>
      </CardHeader>

      <CardContent className='flex items-center justify-center'>
        <p className='min-h-[6rem]'> {description}</p>
      </CardContent>

      <CardFooter className='flex items-center justify-between'>
        <p>{formattedPrice}</p>
        <Button size={'lg'} onClick={addToCart}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
