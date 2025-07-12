import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner'
import Hints from './components/Hints';

const Home = React.lazy(() => import("./components/Home"));
const HideShow = React.lazy(() => import('./components/easy/HideShow'));
const Stopwatch = React.lazy(() => import('./components/easy/Stopwatch'));
const Todo = React.lazy(() => import('./components/easy/Todo'));
const Progress = React.lazy(() => import('./components/medium/Progress'));
const NewForm = React.lazy(() => import('./components/easy/NewForm'));
const CountTimer = React.lazy(() => import('./components/medium/CountTimer'));
const Accordion = React.lazy(() => import ('./components/easy/Accordion'));
const ProgressFill = React.lazy(() => import ('./components/easy/ProgressFill'));
const MortgageCalculator = React.lazy(() => import ('./components/easy/MortgageCalculator'));
const Flight = React.lazy(() => import ('./components/easy/Flight'));
const Table = React.lazy(() => import ('./components/easy/Table'));
const Temperature = React.lazy(() => import ('./components/easy/Temperature'));
const Tweet = React.lazy(() => import ('./components/easy/Tweet'));
const Tabs = React.lazy(() => import ('./components/medium/Tabs'));
const DataTable = React.lazy(() => import ('./components/medium/DataTable'));
const RollDice = React.lazy(() => import ('./components/medium/RollDice'));
const DirectoryTree = React.lazy(() => import ('./components/medium/DirectoryTree'));
const LikeButtons = React.lazy(() => import ('./components/medium/LikeButtons'));

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
            <Route path='/table' element={<Table />} />
            <Route path='/temperature' element={<Temperature />} />
            <Route path='/tweet' element={<Tweet />} />
            <Route path='/tabs' element={<Tabs />} />
            <Route path='/datatable' element={<DataTable />} />
            <Route path='/rolldice' element={<RollDice />} />
            <Route path='/directorytree' element={<DirectoryTree />} />
            <Route path='/likebuttons' element={<LikeButtons />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
