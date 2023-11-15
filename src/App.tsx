import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {  AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { setLoginStatus, getLoginStatus } from './services/storage';

function App() {

  !getLoginStatus() && setLoginStatus()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
