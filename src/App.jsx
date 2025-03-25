import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomePage } from "./components/Home";
import { Bai1, Bai3, Bai4, Bai5, Times } from "./components/Home1";
import {
  Array,
  BoPhanTuTrungLap,
  DaoNguocMang,
  DemSoChanLe,
  KiemTraMang,
  SaoChepMang,
  SapXepMang,
  ThemPhanTuVaoMang,
  TimPhanTuLonNhoNhat,
  TimViTriMang,
  TinhTongMang,
  XoaPhanTuMang,
} from "./components/LearnJsArray/Bai1";

function App() {
  return (
    <>
      <BoPhanTuTrungLap />
    </>
  );
}

export default App;
