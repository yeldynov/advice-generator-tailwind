import React, { useState, useEffect } from 'react';
import DividerMobile from '../assets/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/pattern-divider-desktop.svg';
import DiceIcon from '../assets/icon-dice.svg';

type Advice = {
  id: number;
  advice: string;
};

const fetchAdvice = async (): Promise<Advice> => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data.slip;
};

const AdviceGenerator = (): JSX.Element => {
  const [advice, setAdvice] = useState<Advice | null>(null);

  const handleClick = async () => {
    const response = await fetchAdvice();
    setAdvice(response);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className='bg-c-dark-grayish-blue relative m-5 p-5 rounded-xl flex flex-col justify-center items-center gap-5 desk:w-[33%] desk:gap-8 desk:px-10'>
      {advice ? (
        <>
          <h1 className='text-c-neon-green text-[0.7rem] desk:text-lg mt-5 font-bold tracking-[4px]'>
            ADVICE #{advice.id}
          </h1>
          <p className='text-center text-c-cyan-light'>{advice.advice}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <picture className='mb-10'>
        <source srcSet={DividerDesktop} media='(min-width: 375px)' />
        <img src={DividerMobile} alt='divider' />
      </picture>
      <button
        onClick={handleClick}
        className='p-5 bg-c-neon-green rounded-full absolute -bottom-8 hover:cursor-pointer hover:shadow-[0px_3px_20px_6px] hover:shadow-c-neon-green hover:duration-500'
      >
        <img src={DiceIcon} alt='' />
      </button>
    </div>
  );
};

export default AdviceGenerator;
