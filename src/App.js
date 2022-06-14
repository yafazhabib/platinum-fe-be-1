import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { theme } from './Theme';
import InfoProduk from './pages/seller/InfoProduk';

import "swiper/css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/info-produk' element={<InfoProduk/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;