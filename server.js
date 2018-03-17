import http from 'http';
import config from './config';

// Core module https way
/*
https.get('https://www.lynda.com', (res) => {
  const chunksArr = [];
  console.info('Response Status Code: ', res.statusCode);

  res.on('data', (chunk) => {
    chunksArr.push(chunk.toString());
  });

  res.on('end', () => {
    console.info(chunksArr.join());
  })

});
//*/

// Express way
const server = http.createServer();

server.listen(config.port);
console.info(`server listenting on port: ${config.port}`);

server.on('request', (req, res) => {
  res.write('Hello HTTP\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});
