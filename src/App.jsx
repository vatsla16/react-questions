import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner'
import Hints from './components/Hints';

const Home = React.lazy(() => import("./components/Home"));
const HideShow = React.lazy(() => import('./components/HideShow'));
const Stopwatch = React.lazy(() => import('./components/Stopwatch'));
const Todo = React.lazy(() => import('./components/Todo'));
const Progress = React.lazy(() => import('./components/Progress'));
const NewForm = React.lazy(() => import('./components/NewForm'));
const CountTimer = React.lazy(() => import('./components/CountTimer'));
const Accordion = React.lazy(() => import ('./components/Accordion'));
const ProgressFill = React.lazy(() => import ('./components/ProgressFill'));
const MortgageCalculator = React.lazy(() => import ('./components/MortgageCalculator'));
const Flight = React.lazy(() => import ('./components/Flight'));

function App() {

  return (
    <>
      <header className='mb-4'>
        <h1><span className='text-gradient'>React</span> Questions</h1>
      </header>

      <main className='container'>
        <Hints />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Questions */}
            <Route path='/hideshow' element={<HideShow />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/progress' element={<Progress />} />
            <Route path='/newform' element={<NewForm />} />
            <Route path='/counttimer' element={<CountTimer />} />
            <Route path='/accordion' element={<Accordion />} />
            <Route path='/progressfill' element={<ProgressFill />} />
            <Route path='/mortgagecalculator' element={<MortgageCalculator />} />
            <Route path='/flight' element={<Flight />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
