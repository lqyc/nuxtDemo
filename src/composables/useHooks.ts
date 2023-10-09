export const useFoo = () => {
  return useState('tips', () => '欢迎来到QYC的demo页面!');
};

export const useTime = () => {
  return useState(
    'curTime',
    () => `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  );
};
