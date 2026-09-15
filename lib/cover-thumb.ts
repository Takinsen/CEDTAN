import path from 'node:path';
import sharp from 'sharp';

// a 32px-wide copy of a cover, inlined so the hero can show it blurred before the cover loads
export async function coverThumb(cover: string): Promise<string> {
  const buffer = await sharp(path.join(process.cwd(), 'public', cover)).resize(32).webp({ quality: 50 }).toBuffer();
  return `data:image/webp;base64,${buffer.toString('base64')}`;
}
