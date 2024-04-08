import { ThemeProvider } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Button variant="contained">Test</Button> 
      </Container>
    </ThemeProvider>  
  );
}

export default App;
