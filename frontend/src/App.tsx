import './App.css';
import { Route, Routes } from 'react-router-dom';
import { QuestionProvider } from './components/QuestionUpdate';
import LinkMain from './pages/LinkMain';
import QueryMain from './pages/QueryMain';
import QueryStart from './pages/QueryStart';
import QueryList from './pages/QueryList';
import QueryAdd from './pages/QueryAdd';
import QueryShare from './pages/QueryShare';
import LinkStart from './pages/LinkStart';
import LinkPosition from './pages/LinkPosition';
import LinkTag1 from './pages/LinkTag1';
import Chart from './pages/Chart';
import Gosignup from './pages/Gosignup';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WordCloud from './components/wordcloud';

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/queryshare" element={<QueryShare />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/gosignup" element={<Gosignup />} />
        <Route path="/wordcloud" element={<WordCloud />} />
      </Routes>

      <QuestionProvider>
        <Routes>
          <Route path="/queryadd" element={<QueryAdd />} />
          <Route path="/querylist" element={<QueryList />} />
        </Routes>
      </QuestionProvider>
    </div>
  );
}

export default App;
