import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

async function addRoundedCorners() {
  const inputPath = 'c:\\Users\\Ridhi\\OneDrive\\Pictures\\Screenshots\\savvggg.png';
  const outputPath = 'c:\\Users\\Ridhi\\OneDrive\\Pictures\\Screenshots\\savvggg_rounded.png';
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing image: ${metadata.width}x${metadata.height}`);
    
    // Create a rounded corner mask
    const cornerRadius = Math.min(metadata.width, metadata.height) * 0.05; // 5% of smallest dimension
    
    // Create SVG for rounded corners
    const svg = `
      <svg width="${metadata.width}" height="${metadata.height}" xmlns="http://www.w3.org/2000/svg">
        <rect 
          x="0" y="0" 
          width="${metadata.width}" height="${metadata.height}" 
          rx="${cornerRadius}" ry="${cornerRadius}" 
          fill="white"/>
      </svg>
    `;
    
    // Process the image with rounded corners
    await sharp(inputPath)
      .composite([
        {
          input: Buffer.from(svg),
          blend: 'dest-in'
        }
      ])
      .png({ quality: 95 })
      .toFile(outputPath);
    
    console.log(`✓ Image processed successfully!`);
    console.log(`✓ Saved to: ${outputPath}`);
    console.log(`✓ Rounded corner radius: ${cornerRadius}px`);
    
  } catch (error) {
    console.error('Error processing image:', error.message);
    process.exit(1);
  }
}

addRoundedCorners();
