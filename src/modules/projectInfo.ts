export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string;
    livePreview?: string;
    // Add other properties like images, links, etc.
  }
  
  const projectInfo: Project[] = [
    {
        id: 'streamer',
        name: 'streamer',
        description: `A full-stack application designed to simplify your search for movies and TV shows across various streaming platforms. Streamer provides up-to-date information on where each movie or TV show is available for streaming, ensuring you never miss out on your next binge-worthy experience. 
      
        Create an account to save your favorite titles and organize them into a personalized watchlist for easy access. Dive deep into each title with detailed information such as synopsis, trailer, director, and cast members. The intuitive design makes it simple to navigate and explore a vast library of content.`,
        tech: 'React, JavaScript, Tailwind, Express, Node.js, MongoDB, Mongoose, Passport, Bcrypt.js, React-Router-DOM, React-Toastify, Framer Motion, TMDB API',
        livePreview: 'https://streamer-tqxz.onrender.com/'
    },
    {
        id: 'mortgage-fee-estimator',
        name: 'mortgage fee estimator',
        description: 'An application built for 1st Alliance Mortgage to allow loan officers to quickly and easily create and share fee estimates for potential borrowers. Loan officers at 1st Alliance Mortgage wanted something they could use on the go which is why I developed the site first with a mobile layout in mind. The app uses the information from the form to create a custom fee estimate pdf that can be downloaded or shared directly with clients.',
        tech: 'React, TypeScript, Tailwind, PDF-lib, React-Hook-Form, React-Select, Framer Motion',
        livePreview: 'https://streamer-tqxz.onrender.com/'
    },
    {
        id: 'cool-links',
        name: 'cool links',
        description: 'A simple too for saving captivating links discovered across the the internet for easy access in the future. Categorize these links into collections and locate your saved links using intuitive keyword searches.',
        tech: 'React, JavaScript, HTML, CSS, Vite, Web Storage API, Link Preview API',
        livePreview: 'https://cool-links.netlify.app/'
    },
    {
        id: 'to-do-list',
        name: 'to do list',
        description: 'A minimal, user-friendly to do list application that presents your daily tasks up front. Seamlessly transition to a comprehensive list view, add new tasks and delete old ones, or move tasks to different lists. Created to practice OOP and ES6 module syntax.',
        tech: 'JavaScript, HTML, CSS, Webpack',
        livePreview: 'https://paigebraun.github.io/todo-list/'
    },
    {
        id: 'jazzberry-blue-maps',
        name: 'jazzberry blue maps',
        description: 'A recreation of maps designed by artist Jazzberry Blue with code. The program takes in shape layers and intricate coordinate data, transforms all intersecting streets into polygons, and randomly fills those polygons with a pre-defined selection of colors.',
        tech: 'Python, Matplotlib, GeoPandas, Shapely, NumPy',
    },
    {
        id: 'fafnirs-dragon',
        name: "fafnir's dragon",
        description: 'A 2D platform game created as part of a semester long class with two classmates. The game implements two playing levels for users to choose from and has a high score ranking at the end of each play. Maneuver through intricately designed environments and beat the final boss to win the game.',
        tech: 'JavaScript, HTML, CSS, Phaser 3, TileMaps',
    },
    {
        id: 'skeuomorphic-library',
        name: 'skeuomorphic library',
        description: 'A virtual library that mirrors the charm of its real-world counterpart. Simply add your favorite book, and unveil its cover image with a simple click. Keep track of which books have been read or delete titles from your library at any time. Explore the essence of a library reimagined, right at your fingertips.',
        tech: 'JavaScript, HTML, CSS, Google Books API',
    },
    
  ];
  
  export default projectInfo;
  