import { HelmetProvider } from 'react-helmet-async';
import { Main, AppWrapper } from './App.style';
import Pages from './pages';
import './App.css';

const App = () => {
  return (
    <HelmetProvider>
      <AppWrapper>
        <Main>
          <Pages />
        </Main>
      </AppWrapper>
    </HelmetProvider>
  );
};

export default App;
