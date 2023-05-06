import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { VzLogoIcon } from '../icons/VzLogoIcon';
import SocialIcon from '../icons/SocialIcon';
import type { NavBarProps } from '../../types/contentful';

const NavBar = ({ navItems }: NavBarProps) => {
  const vzLogo = navItems[0];
  return (
    <header>
      <nav className='py-4 bg-transparent'>
        <div className='container flex items-center justify-between'>
          <Link className='text-lg' to='/linktree' title={vzLogo.title}>
            <VzLogoIcon twClasses='h-24 text-white' />
          </Link>
          <div className='flex flex-row gap-6'>
            <ul className='flex items-center text-white'>
              {navItems.map((item, index) => {
                if (index === 0) return;
                const { id, title, hyperlink } = item;
                return (
                  <a key={id} target='_blank' href={hyperlink} title={title}>
                    <SocialIcon icon={title} twClasses='h-9 p-1' />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
