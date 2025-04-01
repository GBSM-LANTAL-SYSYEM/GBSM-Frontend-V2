import * as R from "./allFiles"

import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

const App = () => {
  useEffect(() => {
    console.log('%c ⚠️ 교내 실습실 대여 시스템에 무단으로 접근하거나 해킹 시도로 인한 문제는 모두 본인에게 있습니다.',
      `font-size:40px; font-weight: 900; color:white; background-color: red`);
  }, [])

  return (
      <Routes>
        <Route path={"/"} element={<R.Signin />} />
        <Route path={"/signup"} element={<R.Signup />} />
        <Route path={"*"} element={<R.NotFound />} />
      </Routes>
  )
}

export default App
