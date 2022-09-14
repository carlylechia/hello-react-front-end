import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './Redux/store';
import Messages from './components/messages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
