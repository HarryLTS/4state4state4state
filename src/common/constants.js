import { numToWords } from './helper';
const images = [
  { id: 0, src: require('./images/chocolate-protein-shake.jpg'), title: 'Chocolate Protein Shake' },
];

const products = [
  { id: 0, imgId: 0, name: 'bruh', priceUSD: 6, desc: 'i wanna afsl', releaseDate:0, purchasesMade:0 },
  { id: 1, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
  { id: 2, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
  { id: 3, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
  { id: 4, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
  { id: 5, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
  { id: 6, imgId: 0, name: 'bruh', priceUSD: 6, desc: '', releaseDate:0, purchasesMade:0 },
];

export const imageLoader = () => {
  return images;
}

export const productLoader = () => {
  return products;
}

export let ccvTranslations = [];
for (let n = 0; n <= 999; n++) {
  ccvTranslations.push(numToWords(n));
}
