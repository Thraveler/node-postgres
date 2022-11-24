const { Client } = require('pg');

async function getConnetion() {
  try {
    const client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'dany',
      password: '54321',
      database: 'my-store',
    });

    await client.connect();

    return client;
  } catch (error) {
    console.log('There was an error on getConnection: ', error);
  }
}

module.exports = getConnetion;
