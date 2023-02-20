import { useState } from 'react';
import AdviceGenerator from './components/AdviceGenerator';

function App() {
  return (
    <main className='text-[28px] min-h-screen flex flex-col justify-center items-center bg-c-dark-blue'>
      <AdviceGenerator />
    </main>
  );
}

export default App;
