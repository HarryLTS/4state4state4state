import { numToWords } from './helper';
const images = [
  { id: 0, src: require('./images/chocolate-protein-shake.jpg'), title: 'Chocolate Protein Shake' },
  { id: 1, src: require('./images/slurp juice.png'), title: '' },
  { id: 2, src: require('./images/mungful mineral juice.jpg'), title: '' },
  { id: 3, src: require('./images/bath water.jpg'), title: '' },
  { id: 4, src: require('./images/anabolic sewer guice.jpg'), title: '' },
  { id: 5, src: require('./images/strawberrybananasmoothies.jpg'), title: '' },
  { id: 6, src: require('./images/Vanilla-Cream-Protein-Shake-c.jpg'), title: '' },
  { id: 7, src: require('./images/real water.png'), title: '' },
  { id: 8, src: require('./images/man water.jpg'), title: '' },
  { id: 9, src: require('./images/doctor water.jpg'), title: '' },
  { id: 10, src: require('./images/choccy banana.jpg'), title: '' },
  { id: 11, src: require('./images/ice-cold-drink-stock-picture.jpg'), title: '' },
  { id: 12, src: require('./images/chug jug.png'), title: '' },
  { id: 13, src: require('./images/mango guice.jpg'), title: '' },
  { id: 14, src: require('./images/kale btw.jpg'), title: '' },
  { id: 15, src: require('./images/vegan water.jpg'), title: '' },
  { id: 16, src: require('./images/summer protien.jpg'), title: '' },
  { id: 17, src: require('./images/booster guice.png'), title: '' },
];

const descs = [
  'Very good vitamins. Will make you feel vermiciously ready to take on the world.',
  'Amazingly mungful selection of minerals prepared by Gymbo chefs for yours exclusivly. Truely a bargain for only 6 bucks.',
  'Our most popular item. Guice grabbed directly from the ground minutes before bottling and shipping to you.',
  'Enriched with skin minerals. Skinerals.',
  'Very rich and chocolatey drink. Also happens to contain 50g of protien despite only being 200 calories.',
  'Vanilla drink meant for gaining muscle. 200g of protien in 500 calories of pure muscle mass gainer.',
  'Very tasty and protieny drink. Lots of protien, and very tasty. A good choice for any gym goer.',
  'Good for study for PHd;, keesp brain healaty so can keap studyiung.',
  'A vital liquid essential for the survival and good health of people like you and me. For $14.99, truly a bargain.',
  'We are being audited by the IRS for not paying taxes. I am once again asking for your financial assistance...',
  'Its like the Choccy Chunk drink, but with added bananas. The bananas add a lots of protien.',
  'good for ICDC. stay hydrated and so that you can winn the competetion.',
  'Very berry good tasting smoothie. Good for all occasions, including weight training and weight loss.',
  'A very popular drink because of how good it tastes. A moderate amount of protien is included.',
  'NEW PRODUCT: VEGAN OPTIONS. These drinks are made from grass directly from the ground. There is no middleman, we take the grass and serve it directly to you.',
  "NEW PRODUCT: VEGAN OPTIONS. A variant of water, but it's green. Our in-house experts are unsure why.",
  'A very cool drink during the summertime. Our Gymbo scientists have injected it with pure protein so that you can achieve never-before-seen levels of gains.',
  'Through pure protein-fueled ingenuity, our Gymbo scientists have created a Guice which will boost your immune system so it can fight against new viral and bacterial diseases. 500g of protien included.'
]
const products = [
  { id: 0, imgId: 1, name: 'Vermicious Vitamins ', priceUSD: 6.99, desc: descs[0], releaseDate:0, purchasesMade:-99 },
  { id: 1, imgId: 2, name: 'Mungful Mineral Mix (MMM)', priceUSD: 5.99, desc: descs[1], releaseDate:0, purchasesMade:0 },
  { id: 2, imgId: 4, name: 'Anabolic Sewer Guice', priceUSD: 4.49, desc: descs[2], releaseDate:0, purchasesMade:-100 },
  { id: 3, imgId: 3, name: 'My Bath Water', priceUSD: 30.99, desc: descs[3], releaseDate:0, purchasesMade:0 },
  { id: 4, imgId: 0, name: 'Choccy Chunk', priceUSD: 6.99, desc: descs[4], releaseDate:0, purchasesMade:0 },
  { id: 5, imgId: 6, name: 'Vanilla Gainer Guice', priceUSD: 6.99, desc: descs[5], releaseDate:0, purchasesMade:0 },
  { id: 6, imgId: 5, name: 'Strawberry Banana Smoothie', priceUSD: 5.99, desc: descs[6], releaseDate:0, purchasesMade:0 },
  { id: 7, imgId: 9, name: 'Doctor Water', priceUSD: 10.99, desc: descs[7], releaseDate:0, purchasesMade:0 },
  { id: 8, imgId: 7, name: 'hydrogen atoms bonded with a singular oxygen atom', priceUSD: 14.99, desc: descs[8], releaseDate:0, purchasesMade:0 },
  { id: 9, imgId: 8, name: 'WE NEED MONEY', priceUSD: 500.99, desc: descs[9], releaseDate:0, purchasesMade:0 },
  { id: 10, imgId: 10, name: 'Chocolate Banana Fusion', priceUSD: 6.49, desc: descs[10], releaseDate:0, purchasesMade:0 },
  { id: 11, imgId: 11, name: 'ICDC Drink', priceUSD: 8.99, desc: descs[11], releaseDate:-97, purchasesMade:0 },
  { id: 12, imgId: 12, name: 'Blue Raspberry Smoothie', priceUSD: 49.99, desc: descs[12], releaseDate:-98, purchasesMade:-97 },
  { id: 13, imgId: 13, name: 'Mango Delight Refresher', priceUSD: 4.99, desc: descs[13], releaseDate:0, purchasesMade:-98 },
  { id: 14, imgId: 14, name: 'Grass Guice', priceUSD: 3.49, desc: descs[14], releaseDate:-99, purchasesMade:0 },
  { id: 15, imgId: 15, name: 'Vegan Liquid', priceUSD: 1.99, desc: descs[15], releaseDate:-100, purchasesMade:0 },
  { id: 16, imgId: 16, name: 'Summer Protien Guice', priceUSD: 4.99, desc: descs[16], releaseDate:0, purchasesMade:0 },
  { id: 17, imgId: 17, name: 'Immunobooster Protein Guice', priceUSD: 12.99, desc: descs[17], releaseDate:-101, purchasesMade:0 },
];

export const gymboLogo = require('./images/black.png');

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
