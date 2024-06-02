const Hero = () => {
  return (
    <header className='container pt-[30px]'>
      {/* Hero Section */}
      <section className='relative'>
        <div className='max-w-[618px] flex flex-col gap-[24px] mt-[100px] 2xl:max-w-[500px] xl:max-w-[440px]'>
          <div className='relative'>
            <img
              src='/star-black-small.svg'
              alt='star'
              className='absolute z-[-1] top-[-100px] left-[-100px]'
            />
            <img
              src='/gradient-ellipse.svg'
              alt='gradient'
              className='absolute z-[-1] top-[-160px] right-0 '
            />
            <h1 className='text-[64px] leading-[1] font-[800] 2xl:text-[48px] xl:text-[36px]'>
              Make The Best <br />
              Financial Decisions
            </h1>
          </div>
          <p className='capitalize text-[#888888] text-[18px] xl:text-[16px] xl:w-[80%]'>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className='flex gap-[40px] text-[18px] xl:text-[16px] xl:gap-[20px]'>
            <button className='flex items-center justify-center gap-[8px] bg-[#000] text-[#fff] h-[60px] rounded-[4px] w-[180px] xl:h-[50px] xl:w-[160px]'>
              <span>Get Started</span>
              <img src='/white-arrow-right.svg' alt='arrow' />
            </button>
            <button className='flex items-center gap-[14px]'>
              <img src='/play-video-icon.svg' alt='play' />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
        <div className='mt-[17px] xl:max-w-[80%]'>
          <img src='/hero-bottom-graphic.svg' alt='achievemnts and finance' />
        </div>
        <div className='absolute top-[-140px] right-[-280px] xl:w-[90%] '>
          <img
            src='/hero-main-graphic.svg'
            alt='hero'
            className='xl:min-h-[700px] xl:w-fit'
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
