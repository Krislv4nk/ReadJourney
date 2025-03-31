import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'; 
import './index.css';
import 'modern-normalize/modern-normalize.css';
import CircularProgressWithLabel from './components/SharedLayout/CircularProgressWithLabel/CircularProgressWithLabel';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgressWithLabel />}>
        <BrowserRouter basename="" future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

