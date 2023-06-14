import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Footer } from './components';
import { HomePage, ExercisePage } from './pages';

const App = () => {
  return (
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercise/:id" element={<ExercisePage />} />
         </Routes>
         <Footer />
      </Box>
  )
}

export default App;