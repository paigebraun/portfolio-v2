// import project images
import CoolLinks1 from '../assets/projectImg/CoolLinks1.png';
import CoolLinks2 from '../assets/projectImg/CoolLinks2.png';
import CoolLinks3 from '../assets/projectImg/CoolLinks3.png';

import Fafnir1 from '../assets/projectImg/Fafnir1.webp';
import Fafnir2 from '../assets/projectImg/Fafnir2.webp';
import Fafnir3 from '../assets/projectImg/Fafnir3.webp';
import Fafnir4 from '../assets/projectImg/Fafnir4.webp';

import FeeEstimate1 from '../assets/projectImg/FeeEstimate1.png';
import FeeEstimate2 from '../assets/projectImg/FeeEstimate2.png';
import FeeEstimate3 from '../assets/projectImg/FeeEstimate3.png';

//import Library1 from '../assets/projectImg/Library1.webp';
//import Library2 from '../assets/projectImg/Library2.webp';

import Maps1 from '../assets/projectImg/Maps1.webp';
import Maps2 from '../assets/projectImg/Maps2.webp';
import Maps3 from '../assets/projectImg/Maps3.webp';

import Streamer1 from '../assets/projectImg/Streamer1.png';
import Streamer2 from '../assets/projectImg/Streamer2.png';
import Streamer3 from '../assets/projectImg/Streamer3.png';
import Streamer4 from '../assets/projectImg/Streamer4.png';

//import ToDoList1 from '../assets/projectImg/ToDoList1.png';
//import ToDoList2 from '../assets/projectImg/ToDoList2.png';
//import ToDoList3 from '../assets/projectImg/ToDoList3.png';
//import ToDoList4 from '../assets/projectImg/ToDoList4.png';

import WNBA1 from '../assets/projectImg/WNBA1.png';
import WNBA2 from '../assets/projectImg/WNBA2.png';
import WNBA3 from '../assets/projectImg/WNBA3.png';
import WNBA4 from '../assets/projectImg/WNBA4.png';

export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string;
    livePreview?: string;
    code: string;
    src: string[];
}
  
const projectInfo: Project[] = [
    {   id: 'wnba-swish',
        name: 'wnba swish',
        description: `WNBA Swish is a web application that provides up-to-date information on WNBA games, including team stats, player stats, schedules, scores, and standings. The app aims to offer a comprehensive view of the current 2024 WNBA season, making it easy for fans to stay informed about their favorite teams and players.

        My personal favorite team is the Las Vegas Aces. Let's get a three-peat!`,
        tech: 'React, TypeScript, JavaScript, Tailwind, Express, Node.js, PostgreSQL, Vite, Swiper.js, D3.js, React-Router-DOM, Framer Motion',
        livePreview: 'https://wnba-swish.vercel.app/',
        code: 'https://github.com/paigebraun/wnba-swish',
        src: [WNBA1, WNBA2, WNBA3, WNBA4]
    },
    {
        id: 'streamer',
        name: 'streamer',
        description: `A full-stack application designed to simplify your search for movies and TV shows across various streaming platforms. Streamer provides up-to-date information on where each movie or TV show is available for streaming, ensuring you never miss out on your next binge-worthy experience. 
      
        Create an account to save your favorite titles and organize them into a personalized watchlist for easy access. Dive deep into each title with detailed information such as synopsis, trailer, director, and cast members. The intuitive design makes it simple to navigate and explore a vast library of content.`,
        tech: 'React, JavaScript, Tailwind, Express, Node.js, MongoDB, Mongoose, Vite, Passport, Bcrypt.js, React-Router-DOM, React-Toastify, Framer Motion, TMDB API',
        livePreview: 'https://streamer-tqxz.onrender.com/',
        code: 'https://github.com/paigebraun/streamer',
        src: [Streamer1, Streamer2, Streamer3, Streamer4]
    },
    {
        id: 'mortgage-fee-estimator',
        name: 'mortgage fee estimator',
        description: 'An application built for 1st Alliance Mortgage to allow loan officers to quickly and easily create and share fee estimates for potential borrowers. Loan officers at 1st Alliance Mortgage wanted something they could use on the go which is why I developed the site first with a mobile layout in mind. The app uses the information from the form to create a custom fee estimate pdf that can be downloaded or shared directly with clients.',
        tech: 'React, TypeScript, Tailwind, Vite, PDF-LIB, React-Hook-Form, React-Select, Framer Motion',
        livePreview: 'https://paigebraun.github.io/1stam-fee-estimate/',
        code: 'https://github.com/paigebraun/1stam-fee-estimate',
        src: [FeeEstimate1, FeeEstimate2, FeeEstimate3]
    },
    {
        id: 'cool-links',
        name: 'cool links',
        description: 'A simple tool for saving captivating links discovered across the the internet for easy access in the future. Categorize these links into collections and locate your saved links using intuitive keyword searches.',
        tech: 'React, JavaScript, HTML, CSS, Vite, Web Storage API, Link Preview API',
        livePreview: 'https://cool-links.netlify.app/',
        code: 'https://github.com/paigebraun/cool-links',
        src: [CoolLinks1, CoolLinks2, CoolLinks3]
    },
    /*{
        id: 'to-do-list',
        name: 'to do list',
        description: 'A minimal, user-friendly to do list application that presents your daily tasks up front. Seamlessly transition to a comprehensive list view, add new tasks and delete old ones, or move tasks to different lists. Created to practice OOP and ES6 module syntax.',
        tech: 'JavaScript, HTML, CSS, Webpack',
        livePreview: 'https://paigebraun.github.io/todo-list/',
        code: 'https://github.com/paigebraun/todo-list',
        src: [ToDoList1, ToDoList2, ToDoList3, ToDoList4]
    },*/
    {
        id: 'jazzberry-blue-maps',
        name: 'jazzberry blue maps',
        description: 'A recreation of maps designed by artist Jazzberry Blue with code. The program takes in shape layers and intricate coordinate data, transforms all intersecting streets into polygons, and randomly fills those polygons with a pre-defined selection of colors.',
        tech: 'Python, Matplotlib, GeoPandas, Shapely, NumPy',
        code: 'https://github.com/paigebraun/Maps',
        src: [Maps1, Maps2, Maps3]
    },
    {
        id: 'fafnirs-dragon',
        name: "fafnir's dragon",
        description: 'A 2D platform game created as part of a semester long class with two classmates. The game implements two playing levels for users to choose from and has a high score ranking at the end of each play. Maneuver through intricately designed environments and beat the final boss to win the game.',
        tech: 'JavaScript, HTML, CSS, Phaser 3, TileMaps',
        livePreview: 'https://paigebraun.github.io/fafnirs-dragon/',
        code: 'https://github.com/paigebraun/fafnirs-dragon',
        src: [Fafnir1, Fafnir2, Fafnir3, Fafnir4]
    },
    /*{
        id: 'skeuomorphic-library',
        name: 'skeuomorphic library',
        description: 'A virtual library that mirrors the charm of its real-world counterpart. Simply add your favorite book, and unveil its cover image with a simple click. Keep track of which books have been read or delete titles from your library at any time. Explore the essence of a library reimagined, right at your fingertips.',
        tech: 'JavaScript, HTML, CSS, Google Books API',
        livePreview: 'https://paigebraun.github.io/library/',
        code: 'https://github.com/paigebraun/library',
        src: [Library1, Library2]
    },*/
    
];
  
export default projectInfo;
  