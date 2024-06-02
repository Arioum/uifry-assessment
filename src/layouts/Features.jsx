const Features = () => {
  return (
    <section className='container'>
      <div className='grid grid-cols-12 gap-[20px] items-center lg:flex lg:flex-col '>
        <div className='col-span-6 relative lg:h-[500px] lg:order-3 md:h-[400px]'>
          <img
            src='/features-main-graphic.svg'
            alt='features-main'
            className='absolute z-[-1] top-[-360px] right-[-60px] min-w-[720px] min-h-[720px] xl:min-w-[600px] lg:static lg:z-0 md:min-h-[100%] md:min-w-[100%]'
          />
        </div>
        <div className='col-span-6 flex flex-col gap-[32px] py-[130px] lg:order-1 lg:pt-[80px] lg:pb-0'>
          <div className='relative'>
            <h3 className='text-[18px] tracking-[1.6px] text-[#FF5555] mb-[4px] xl:text-[16px]'>
              FEATURES
            </h3>
            <h4 className='capitalize text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px]'>
              Uifry premium
            </h4>
            <img
              src='/gradient-ellipse.svg'
              alt='ellipse'
              className='absolute z-[-1] top-[-50px] right-[-400px]'
            />
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-1.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <p className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-2.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <p className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-3.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <p className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
