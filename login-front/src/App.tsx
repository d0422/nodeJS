import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
