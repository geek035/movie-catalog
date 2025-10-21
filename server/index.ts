import { app } from './app';

const PORT = 3000;

app
  .listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  })
  .on('error', (err: Error) => {
    console.error('Ошибка запуска сервера: ', err);
  });
