import Paper from '@mui/material/Paper';
import { rgb } from 'd3-color';

const Index = () => {
  return (
    <Paper>
      Hello!
      <br />
      {rgb(255, 0, 0, 1).toString()}
    </Paper>
  );
};

export default Index;
