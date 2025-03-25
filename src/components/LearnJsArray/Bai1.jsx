export const Array = () => {
  const number = [5, 10, 15, 20, 25];
  console.log(number);
  return;
};

export const TinhTongMang = () => {
  const numbers = [2, 4, 6, 8, 10];
  const sum = numbers.reduce((a, b) => a + b, 0);
  console.log(sum);
  return;
};

export const TimPhanTuLonNhoNhat = () => {
  const numbers = [15, 2, 25, 8, 10];
  const soNhoNhat = Math.min(...numbers);
  const soLonNhat = Math.max(...numbers);
  console.log(soLonNhat);
  return;
};

export const DemSoChanLe = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const soChan = numbers.filter((num) => num % 2 === 0);
  const soLe = numbers.filter((num) => num % 2 !== 0);
  console.log(soLe);
  return;
};

export const KiemTraMang = () => {
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers.includes(10));
  return;
};

export const XoaPhanTuMang = () => {
  const numbers = [5, 10, 15, 20];
  const xoaPhanTuDau = numbers.shift();
  const xoaPhanTuCuoi = numbers.pop();
  console.log(numbers);
  return;
};

export const ThemPhanTuVaoMang = () => {
  const number = [10, 20, 30];
  const newNumber = 5;
  console.log(number.unshift(newNumber));
  console.log(number.push(40));
  console.log(number);

  return;
};

export const SapXepMang = () => {
  const numbers = [5, 3, 8, 1, 9];
  const tangDan = numbers.sort();
  console.log(tangDan);
  return;
};

export const TimViTriMang = () => {
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers.indexOf(30));
  return;
};

export const SaoChepMang = () => {
  const numbers = [1, 2, 3, 4, 5];
  const newNumber = numbers.splice(0);
  console.log(newNumber);
  return;
};

export const DaoNguocMang = () => {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.reverse());
  return;
};

export const BoPhanTuTrungLap = () => {
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const loai = [...new Set(numbers)];
  console.log(loai);
  return;
};
