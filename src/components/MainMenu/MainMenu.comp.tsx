'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

import { LuLayoutDashboard } from 'react-icons/lu';
import { RiSchoolLine } from 'react-icons/ri';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { LiaCogSolid } from 'react-icons/lia';

import { useGetCurrentUserStore } from '@/models/CurrentUser.model';
import { UserRoleDto } from '@/api/generated/models';

export const MainMenu = () => {
  const { currentUser } = useGetCurrentUserStore();
  const pathname = usePathname();

  if (!currentUser) {
    return null;
  }

  const isSuperAdminOrAdmin =
    currentUser?.role === UserRoleDto.SuperAdmin ||
    currentUser?.role === UserRoleDto.Admin;

  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  const menuStructure = {
    Dashboard: {
      icon: <LuLayoutDashboard size="24" className="mr-2" />,
      route: '/dashboard',
      isActive: isActiveRoute('/dashboard'),
      show: isSuperAdminOrAdmin,
      liClassees: '',
    },
    Settings: {
      icon: <LiaCogSolid size="24" className="mr-2" />,
      route: '/settings',
      isActive: isActiveRoute('/settings'),
      show: isSuperAdminOrAdmin,
      liClassees: 'mt-2',
    },
    Schools: {
      icon: <RiSchoolLine size="24" className="mr-2" />,
      route: '/schools',
      isActive: isActiveRoute('/schools'),
      show: isSuperAdminOrAdmin,
      liClassees: 'mt-5',
    },
    Teachers: {
      icon: <FaChalkboardTeacher size="24" className="mr-2" />,
      route: '/teachers',
      isActive: isActiveRoute('/teachers'),
      show: isSuperAdminOrAdmin,
      liClassees: 'mt-2',
    },
    Classes: {
      icon: <SiGoogleclassroom size="24" className="mr-2" />,
      route: '/classes',
      isActive: isActiveRoute('/classes'),
      show: true,
      liClassees: 'mt-2',
    },
    Students: {
      icon: <PiStudentFill size="24" className="mr-2" />,
      route: '/students',
      isActive: isActiveRoute('/students'),
      show: isSuperAdminOrAdmin,
      liClassees: 'mt-2',
    },
  };

  return (
    <menu className="min-w-[250px] shadow-md pt-12">
      <ul>
        {Object.entries(menuStructure).map(([key, value]) => {
          if (value.show) {
            return (
              <li key={key} className={value.liClassees}>
                <Button
                  variant={value.isActive ? 'default' : 'link'}
                  className="w-[90%] ml-[5%] mr-[5%] justify-start"
                >
                  <Link href={value.route} className="flex items-center">
                    {value.icon} {key}
                  </Link>
                </Button>
              </li>
            );
          }
        })}
      </ul>
    </menu>
  );
};
