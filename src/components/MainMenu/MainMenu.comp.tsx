import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const MainMenu = () => {
  return (
    <menu className="min-w-[250px] shadow-md pt-12">
      <ul>
        <li>
          <Button variant="link" className="text-base hover:underline">
            <Link href="#" className="hover:underline">
              Schools list
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" className="text-base hover:underline">
            <Link href="/schools/create" className="hover:underline">
              Create school
            </Link>
          </Button>
        </li>
      </ul>
    </menu>
  );
};
