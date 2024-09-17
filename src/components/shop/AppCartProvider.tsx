'use client';

import { CartProvider } from 'use-shopping-cart';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;

interface CartProviderProps {
  children: React.ReactNode;
}

export default function AppCartProvider({ children }: CartProviderProps) {
  return (
    <CartProvider
      shouldPersist={true}
      cartMode='checkout-session'
      stripe={stripeKey}
      currency='BRL'
    >
      {children}
    </CartProvider>
  );
}
