import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className='container pt-[30px]'>
      <nav className='h-[60px] flex justify-between xl:h-[50px]'>
        <div className='flex items-center gap-[40px]'>
          <img src='/logo.svg' alt='uifry' width={117} />
          <ul className='flex gap-[40px] text-[20px] 2xl:text-[18px] xl:text-[16px] xl:gap-[16px]'>
            <li className='flex w-[30px] justify-center items-center'>
              <Link
                to='/'
                className={
                  pathname === '/' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                Home
              </Link>
            </li>
            <li className='flex w-[100px] justify-center items-center'>
              <Link
                to='/about-us'
                className={
                  pathname === '/about-us' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                About Us
              </Link>
            </li>
            <li className='flex w-[40px] justify-center items-center'>
              <Link
                to='/pricing'
                className={
                  pathname === '/pricing' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                Pricing
              </Link>
            </li>
            <li className='flex w-[100px] justify-center items-center'>
              <Link
                to='/features'
                className={
                  pathname === '/features' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        <Link
          className='p-[16px_42px] bg-[#000] text-[#fff] text-[18px] flex items-center max-w-fit rounded-[4px] xl:text-[16px]'
          to='https://www.apple.com/in/app-store/'
          target='_blank'
        >
          Download
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
