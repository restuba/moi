import {
  banksakuProject,
  kolegaProject,
  legapaketProject,
  movProject,
  netflixProject,
  twitterProject,
} from '../assets';

// eslint-disable-next-line import/prefer-default-export
export const projectList = [
  {
    title: 'Mov App',
    type: 'WEB BASED',
    tech: 'HTML / CSS / JAVASCRIPT',
    info: 'Build a movie info app using Vanilla Javascript (no framework)',
    link: 'https://mov-app.vercel.app/',
    image: movProject,
  },
  {
    title: 'Clone Netflix',
    type: 'WEB BASED',
    tech: 'HTML / JAVASCRIPT',
    info: 'Build netflix clone app using Reactjs, StyledComponents, and TMDB API',
    link: 'https://netflix-clone-nu.vercel.app/',
    image: netflixProject,
  },
  {
    title: 'Twitter App',
    type: 'WEB BASED',
    tech: 'HTML / CSS / JAVASCRIPT',
    info: 'Cloning twitter app using React js, Tailwind css, and API Github',
    link: 'https://twitterapp-clone.vercel.app/',
    image: twitterProject,
  },
  {
    title: 'Kolega Coworking Space',
    type: 'WEB BASED',
    tech: 'HTML / CSS / PHP / MySQL',
    info: 'Build a client website with HTML, CSS, PHP, and MySQL',
    link: 'http://kolegainternship.epizy.com/',
    image: kolegaProject,
  },
  {
    title: 'Banksaku Design',
    type: 'DESIGN',
    tech: 'Figma',
    info: 'Design of Banksaku App for college assignments',
    link: 'https://www.behance.net/gallery/80412961/Banksaku-App-Personal-finance',
    image: banksakuProject,
  },
  {
    title: 'Legapaket Design',
    type: 'DESIGN',
    tech: 'Adobe XD',
    info: 'Design of Transporation Service Produck for PT. Leuwigajah',
    link: 'https://www.behance.net/gallery/103260921/UI-Legapaket?',
    image: legapaketProject,
  },
  {
    title: 'Kolega Coworking Space Design',
    type: 'DESIGN',
    tech: 'Figma',
    info: 'Redesign of Kolega Coworking Space',
    link: 'https://www.behance.net/gallery/148393097/Kolega',
    image: kolegaProject,
  },
];
