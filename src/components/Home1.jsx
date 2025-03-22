import { useState } from "react";
import { useEffect } from "react";

export const Bai1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Giá trị: {count}</h1>
      <button
        className=" w-[80px] m-2 border "
        onClick={() => setCount(count - 1)}
      >
        Giảm
      </button>
      <button
        className=" w-[80px] m-2 border "
        onClick={() => setCount(count + 1)}
      >
        Tăng
      </button>
      <button className=" w-[80px] m-2 border " onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};
export const Bai2 = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "An" : "Hien"} noi dung
      </button>
      {isVisible && (
        <p className=" text-red-600">Chào mừng bạn đến với React Hooks!</p>
      )}
    </div>
  );
};

export const Bai3 = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunningg] = useState(true);
  useEffect(() => {
    if (!isRunning) return; // Nếu đồng hồ đang dừng, không tạo interval
    const interval = setInterval(() => {
      setTime(new Date()); // Cập nhật thời gian mỗi giây
    }, 1000);
    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [isRunning]); // Chỉ chạy khi `isRunning` thay đổi

  return (
    <div>
      <h1>Thời gian hiện tại: {time.toLocaleTimeString()}</h1>
      <button onClick={() => setIsRunningg(!isRunning)}>
        {isRunning ? "⏸ Dừng" : "▶ Chạy"}
      </button>
    </div>
  );
};

export const Times = (start_time, end_time) => {
  // lay gio phut
  const now = new Date();
  const current_hours = now.getHours();
  const current_minutes = now.getMinutes();
  // chuyen doi start va end thanh so
  const [start_hours, start_minutes] = String(start_time)
    .split(":")
    .map(Number);
  const [end_hours, end_minutes] = String(end_time).split(":").map(Number);
  // chuyen doi thoi gian thanh phut
  const start_total = start_hours * 60 + start_minutes;
  const end_total = end_hours * 60 + end_minutes;
  const current_total = current_hours * 60 + current_minutes;

  if (end_total < start_total) {
    if (current_total >= start_total || current_total < end_total) {
      return true;
    }
  } else {
    if (current_total >= start_total && current_total < end_total) {
      return true;
    }
  }
  return false;
};

const start_time = "23:15";
const end_time = "19:00";
console.log(
  Times(start_time, end_time) ? "Phim đang chiếu" : "Phim không chiếu"
);
