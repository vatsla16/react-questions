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
const ModalDialog = React.lazy(() => import ('./components/medium/ModalDialog/ModalDialog'));
const StarRating = React.lazy(() => import ('./components/medium/StarRating/StarRating'));
const TrafficLights = React.lazy(() => import ('./components/medium/TrafficLights'));
const DigitalClock = React.lazy(() => import ('./components/medium/DigitalClock'));
const TicTacToe = React.lazy(() => import ('./components/medium/TicTacToe'));
const ImageCarousel = React.lazy(() => import ('./components/medium/ImageCarousel'));
const JobBoard = React.lazy(() => import ('./components/medium/JobBoard'));
const StopwatchMed = React.lazy(() => import ('./components/medium/StopwatchMed'));
const TransferLists = React.lazy(() => import ('./components/medium/TransferLists'));
const AccordionMed = React.lazy(() => import ('./components/medium/AccordionMed'));
const AnalogClock = React.lazy(() => import ('./components/medium/AnalogClock'));
const DataTableMed = React.lazy(() => import ('./components/medium/DataTableMed'));
const GridLights = React.lazy(() => import ('./components/medium/GridLights'));
const Histogram = React.lazy(() => import ('./components/medium/Histogram'));
const ConnectFour = React.lazy(() => import ('./components/medium/ConnectFour'));

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
            <Route path='/modaldialog' element={<ModalDialog />} />
            <Route path='/starrating' element={<StarRating />} />
            <Route path='/trafficlights' element={<TrafficLights />} />
            <Route path='/digitalclock' element={<DigitalClock />} />
            <Route path='/tictactoe' element={<TicTacToe />} />
            <Route path='/imagecarousel' element={<ImageCarousel />} />
            <Route path='/jobboard' element={<JobBoard />} />
            <Route path='/stopwatchmed' element={<StopwatchMed />} />
            <Route path='/transferlists' element={<TransferLists />} />
            <Route path='/accordionmed' element={<AccordionMed />} />
            <Route path='/analogclock' element={<AnalogClock />} />
            <Route path='/datatablemed' element={<DataTableMed />} />
            <Route path='/gridlights' element={<GridLights />} />
            <Route path='/histogram' element={<Histogram />} />
            <Route path='/connectfour' element={<ConnectFour />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
