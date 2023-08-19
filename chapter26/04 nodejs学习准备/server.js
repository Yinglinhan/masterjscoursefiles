require('dotenv').config()

console.log(typeof process.env.xx);
if (process.env.NODE_ENV === 'dev') {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

process.env.NODE_ENV = 1111
console.log(process.env.NODE_ENV);

