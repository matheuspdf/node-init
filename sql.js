import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

function createVideosTable() {
  // sql`DROP TABLE IF EXISTS videos`.then(() => {
  //   console.log('tabela apagada')
  // })

  sql`
    CREATE TABLE IF NOT EXISTS videos (
      id    TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      duration INTEGER
    );
  `.then(() => {
    console.log("Table 'videos' created successfully")
  })
}

createVideosTable();
