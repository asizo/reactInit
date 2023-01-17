import React from 'react';
// import Styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Header, Home, Main, Login, NotFound, Footer} from './Components';
import {Header, Home, Index, Login, NotFound, Footer} from './component';
import {axiosGet} from './common/http'
import {setWindowInnerWidth} from './common/document'

import './App.scss';

function App() {

  // console.log('aa')
  const showHeader = false
  // console.dir(getApi({'aa' : 'bb'}))
  console.dir(axiosGet('/getAreaGroup', {'aa' : 'bb'}))
  setWindowInnerWidth()

  return (
    <>
      {/*삼항자 연산자*/}
      {/*{ showHeader ? ( <Header/> ) : ( <Header/> ) }*/}
      {/*이항 연상자*/}
      { showHeader && <Header/> }
      {/*<Header/>*/}

      {/*https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=sykim_9110&logNo=221104271072*/}
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/form' element={<NotFound/>}/>
          <Route path='/' element={<Index/>}/>
          <Route path='/home' element={<Home/>}/>
          {/*<Route path='/form'>*/}
          {/*  /!*<Header/>*!/*/}
          {/*  /!*<NotFound/>*!/*/}
          {/*</Route>*/}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
