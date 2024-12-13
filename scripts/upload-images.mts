import { put } from '@vercel/blob';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const uploadImage = async (filename: string) => {
  try {
    const buffer = await readFile(join(__dirname, '../public/images', filename));
    const blob = await put(filename, buffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    console.log(`Uploaded ${filename}: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`Failed to upload ${filename}:`, error);
    return null;
  }
};

const images = [
  'headshot.png',
  'thinking_in_systems.jpg',
  'team_of_teams.jpg',
  'zero_to_one.jpg',
  '3P_Overview_SC.png',
  'sprint-sage.png',
  'swift1.png',
  'swift2.png',
  'surf.png',
  'bbq.jpeg',
  'volleyball.png',
  'isu.jpeg',
  'travel.jpeg',
  'dune.jpg',
];

(async () => {
  for (const image of images) {
    await uploadImage(image);
  }
})(); 