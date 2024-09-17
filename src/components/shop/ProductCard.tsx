'use client';

import { Products } from '@/types';
import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function ProductCard({
  name,
  description,
  price,
  currency,
  image,
}: Products) {
  const addToCart = async () => {};

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
        <p>
          {price} <span>{currency}</span>
        </p>
        <Button size={'lg'} onClick={addToCart}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
