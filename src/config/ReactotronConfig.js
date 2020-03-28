import Reactotron from 'reactotron-react-native';
// 10.0.3.2 metrobundler
// '192.168.1.4'
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.4' })
    .useReactNative()
    .connect();
  console.tron = tron;
}
