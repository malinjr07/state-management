import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Complete from './pages/complete';
import Form01 from './pages/form01';
import Form02 from './pages/form02';
import Form03 from './pages/form03';
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
          <Route path='complete' element={<Complete />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
