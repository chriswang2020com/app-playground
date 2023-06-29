import { Boundary } from '#/ui/boundary';
import { cookies } from 'next/headers';
import React from 'react';
import { CartCountProvider } from '../_components/cart-count-context';
import { Header } from '../_components/header';

export const metadata = {
  title: 'Streaming (Edge Runtime)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number(cookies().get('_cart_count')?.value || '0');

  return (
    <>


      <Boundary animateRerendering={false} labels={['Demo']} size="small">

          <div className="space-y-10">
            <li>test</li>
            <Header />

            {children}
          </div>

      </Boundary>
    </>
  );
}
