
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import PrivateRoute from './route/PrivateRoute';
import Navbar from './component/Navbar';
import { useState } from 'react';


//1. 전체상품페이지, 로그인 페이지, 상품상세페이지 > 리액터 라우터를 통해 
//- 리액트 라우터 설치
//1-1 네비바 생성
//2. 전체 상품페이지 : 전체상품 
//3. 로그인 페이지 : 로그인 버튼 클릭시 노출
//3-1. 상품 상세를 클릭시, 로그인이 안되어있을 경우 로그인 페이지 노출
//3-2. 로그인이 된 상태면 상품상세 페이지 확인
//4. 상품상세 페이지 
//5. 로그아웃 버튼 클릭시 로그아웃
//5-1. 로그아웃 시 상품 상세페이지 확인 불가능 > 다시 로그인 페이지 로딩 
//6. 로그인 시 로그아웃 아이콘이 보이고, 로그아웃을 하면 로그인 아이콘 확인
//7. 상품 검색 가능 
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true만 로그인이 됨 false만 로그인이 안됨
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
