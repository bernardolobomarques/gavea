import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const imagesToOptimize = [
    { path: 'src/assets/torre1.jpg', width: 1920 },
    { path: 'src/assets/torreHome.jpg', width: 1920 },
    { path: 'src/assets/rooftop2.jpg', width: 1920 },
    { path: 'src/assets/torre2.png', width: 1920 },
    { path: 'src/assets/rooftop1.JPG', width: 1920 }
];

async function optimizeImage(imagePath, maxWidth) {
    const optimizedPath = imagePath.replace(/\.(jpg|jpeg|png|JPG)$/, '-optimized.$1');
    
    try {
        await sharp(imagePath)
            .resize(maxWidth, null, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({ 
                quality: 80, 
                progressive: true,
                mozjpeg: true // Usar mozjpeg para melhor compressão
            })
            .toFile(optimizedPath);

        // Substituir arquivo original pelo otimizado
        await fs.unlink(imagePath);
        await fs.rename(optimizedPath, imagePath);
        
        console.log(`✓ Otimizado: ${imagePath}`);
    } catch (error) {
        console.error(`× Erro ao otimizar ${imagePath}:`, error);
    }
}

async function main() {
    for (const image of imagesToOptimize) {
        await optimizeImage(image.path, image.width);
    }
}

main().catch(console.error);