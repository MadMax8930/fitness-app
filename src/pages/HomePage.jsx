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
      <ExoList exercises={exercises} setExercises={setExercises} category={category} />
    </Box>
  )
}

export default HomePage;