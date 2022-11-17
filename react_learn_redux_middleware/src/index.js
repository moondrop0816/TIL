import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 만들기

const store = createStore(
  rootReducer, 
  // logger를 사용하는 경우 logger가 맨 마지막에 위치해야함
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk, 
      sagaMiddleware, // 사가 미들웨어 적용
      logger
    )
  )
  // 여러개의 미들웨어 적용 가능 
);

sagaMiddleware.run(rootSaga); // 루트 사가 실행
// !주의! 스토어 생성이 된 다음에 루트 사가를 실행해야한다 

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
