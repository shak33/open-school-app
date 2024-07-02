import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-black shadow-md mb-[50px]">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Open School</div>
        <div className="flex items-center space-x-4">
          <Button variant="link" className="text-base hover:underline">
            <Link href="#" className="hover:underline">
              Home
            </Link>
          </Button>
          <Button variant="link" className="text-base hover:underline">
            <Link href="#" className="hover:underline">
              About
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="link" className="text-base hover:underline">
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button variant="link" className="text-base hover:underline">
          <Link href="#">Register</Link>
        </Button>
      </div>
    </div>
  );
};
