import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import { BodyPart, ExoCard } from '../components';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const BodyPartCategories = ({ data, category, setCategory, customBodyPartProp }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> {/* horizontal scrollbar */}
    {data.map((item) => (
      <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
        {customBodyPartProp ? <BodyPart item={item} category={category} setCategory={setCategory} /> : <ExoCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

const LeftArrow = () => {
   const { scrollPrev } = useContext(VisibilityContext);
 
   return (
     <Typography onClick={() => scrollPrev()} className="right-arrow">
       <img src={LeftArrowIcon} alt="right-arrow" />
     </Typography>
   );
};
 
const RightArrow = () => {
   const { scrollNext } = useContext(VisibilityContext);
 
   return (
     <Typography onClick={() => scrollNext()} className="left-arrow">
       <img src={RightArrowIcon} alt="right-arrow" />
     </Typography>
   );
};

export default BodyPartCategories;