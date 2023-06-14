import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { BodyPartCategories } from '../components';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const SearchExo = ({ category, setCategory, setExercises }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bodyCategories, setBodyCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);   
      setBodyCategories(['all', ...bodyPartsData]);
    };
    fetchCategories();
  }, []);

  const submitSearch = async () => {
    if (searchTerm) {
      const allExercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = allExercisesData.filter(
        (item) => item.name.toLowerCase().includes(searchTerm)
               || item.target.toLowerCase().includes(searchTerm)
               || item.equipment.toLowerCase().includes(searchTerm)
               || item.bodyPart.toLowerCase().includes(searchTerm),
      );
      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearchTerm('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} 
                onClick={submitSearch}>Search</Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <BodyPartCategories data={bodyCategories} category={category} setCategory={setCategory} bodyCategories={bodyCategories} />
      </Box>
    </Stack>
  );
};

export default SearchExo;