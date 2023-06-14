import { useState } from 'react';
import { Box } from "@mui/material";
import { Banner, SearchExercises, ExoList } from "../components"

const HomePage = () => {
   const [category, setCategory] = useState('all');
   const [exercises, setExercises] = useState([]);

  return (
    <Box> 
      <Banner />
      <SearchExercises category={category} setCategory={setCategory} setExercises={setExercises} />
      <ExoList category={category} setCategory={setCategory} setExercises={setExercises} />
    </Box>
  )
}

export default HomePage;