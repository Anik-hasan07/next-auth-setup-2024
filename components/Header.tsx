'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
// Components
// import SearchInput from '../SearchInput/SearchInput';

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  const session = useSession();

  console.log("---session",session);

  return (
    <div className='sticky flex top-0 z-40 w-full h-24 border-b-2'>
      <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
        <Link className='flex justify-center' href='/'>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image width='150' height='50' src='/next.svg' alt='rmdb-logo' />
            </div>
            <div className='absolute md:invisible pt-2'>
              <Image height='42' width='42' src='/rmdb-logo-small.svg' alt='rmdb-logo-small' />
            </div>
          </div>
        </Link>
        {setQuery ? (
          <div className='relative flex items-center'>
            {/* <SearchInput setQuery={setQuery} /> */}
          </div>
        ) : null}
        {session.data ? (
          <>
            <p className='text-black'>Signed in as: {session.data?.user?.name}</p>
            <button className='text-black' onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className='text-black' onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;