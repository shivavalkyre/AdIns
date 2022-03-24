const { Pool } = require('pg');

    const pool = new Pool({
        user: 'postgres',
        host: '37.44.244.235',
        database: 'testing',
        password: 'dbapptgprK2021',
        port: 5432
    });
    
    module.exports = {
        query: (text, params,results) => pool.query(text, params,results)
      }