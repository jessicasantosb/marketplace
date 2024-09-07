import { CartButton } from './CartButton';
import { Logo } from './Logo';
import { UserNav } from './UserNav';

export function Header() {
  return (
    <header className='sticky top-0 z-10 shadow'>
      <div className='container mx-auto p-4 flex items-center justify-between'>
        <Logo />
        <div className='flex items-center justify-center space-x-4'>
          <UserNav />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
