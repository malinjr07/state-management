import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Form01 from './pages/form01';
import Form02 from './pages/form02';
import Form03 from './pages/form03';
import Form04 from './pages/form04';
import Form05 from './pages/form05';
import Form06 from './pages/form06';
import Form07 from './pages/form07';
import Form08 from './pages/form08';
import Form09 from './pages/form09';
import Welcome from './pages/welcome';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Welcome />}>
          <Route index element={<Form01 />} />
          <Route path='form-02' element={<Form02 />} />
          <Route path='form-03' element={<Form03 />} />
          <Route path='form-04' element={<Form04 />} />
          <Route path='form-05' element={<Form05 />} />
          <Route path='form-06' element={<Form06 />} />
          <Route path='form-07' element={<Form07 />} />
          <Route path='form-08' element={<Form08 />} />
          <Route path='form-09' element={<Form09 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
