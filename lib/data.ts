import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'machanijithendra756@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Jithendra, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/~0117e3bac796dbebc7',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/jithendra756' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jithendra-kumar-machani',
    },
    { name: 'leetcode', url: 'https://leetcode.com/u/jithu756/' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
    ],
    frameworks: [
        {
            name: 'Spring Boot',
            icon: '/logo/springboot.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
    ],
    automation: [
        {
            name: 'n8n',
            icon: '/logo/n8nimage.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Event Surveillance',
        slug: 'event-surveillance',
        liveUrl: '',
        year: 2025,
        description: `
      Developed an AI-powered event surveillance system that detects crowd density and sends real-time alerts for enhanced safety and management. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎥 <b>Crowd Density Detection:</b> Utilizes CSRNet model to analyze live video feeds and estimate crowd levels accurately</li>
        <li>🚨 <b>Real-Time Alert System:</b> Sends instant email alerts via Mailgun when overcrowding is detected</li>
        <li>🌐 <b>Interactive Dashboard:</b> Intuitive UI built with HTML, CSS, and JavaScript for monitoring crowd activity</li>
        <li>☁️ <b>Cloud Integration:</b> Processes data efficiently using Google Colab for real-time computation</li>
        <li>🔒 <b>Safety & Automation:</b> Designed to enhance event security through smart surveillance and automation</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Integrated pre-trained <b>CSRNet deep learning model</b> for density estimation</li>
        <li>Implemented <b>automated alert workflow</b> using Mailgun API</li>
        <li><b>responsive monitoring interface</b> with smooth animations and visual indicators</li>
        <li><b>Google Colab</b> for efficient model inference and data processing</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Integrated CSRNet model for real-time crowd density detection</li>
        <li>🎨 Frontend: Designed an interactive monitoring dashboard using HTML, CSS, and JavaScript</li>
        <li>🔄 Automation: Configured real-time alert system using Mailgun API for instant notifications</li>
        <li>☁️ Cloud Integration: Utilized Google Colab for processing video data and running AI models</li>
        <li>🧠 AI Implementation: Applied deep learning for people counting and congestion analysis</li>
      </ul>
      `,
        techStack: [
            'JavaScript',
            'Python',
            'CSRNet',
            'HTML',
            'CSS',
            'Mailgun API',
            'Google Colab',
            'Deep Learning',
        ],
        thumbnail: '/projects/thumbnail/gmailEventSurveillance.jpg',
        longThumbnail: '/projects/long/eventSurveillance.png',
        images: [
            '/projects/images/interfaceES.png',
            '/projects/images/gmailEventSurveillance.jpg',
        ],
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: '',
        liveUrl: '',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'Spotify Clone',
        slug: 'spotify-clone',
        liveUrl: '',
        year: 2024,
        description: `
        Developed a fully functional Spotify clone with music streaming, playlists, and an interactive UI for an immersive user experience. <br/><br/>

        Key Features:<br/>
        <ul>
        <li>🎵 <b>Music Streaming:</b> Stream songs with play, pause, skip, and seek functionality</li>
        <li>📂 <b>Playlists & Favorites:</b> Create and manage custom playlists and favorite tracks</li>
        <li>🔍 <b>Search Functionality:</b> Search songs and albums efficiently with real-time filtering</li>
        <li>🎨 <b>Interactive UI:</b> Smooth animations and intuitive layout built with HTML, CSS, and JavaScript</li>
        <li>☁️ <b>Frontend Optimization:</b> Responsive design for both desktop and mobile devices</li>
        </ul><br/>

        Technical Highlights:
        <ul>
        <li>Built dynamic <b>playlist management</b> and audio player controls</li>
        <li>Integrated <b>JavaScript-based audio streaming</b> logic with seamless UX</li>
        <li>Implemented <b>responsive UI components</b> with smooth transitions</li>
        <li>Optimized <b>search and filter functions</b> for quick song retrieval</li>
        </ul>
        `,
        role: `
        Full-Stack Developer <br/>
        Owned the entire development lifecycle:
        <ul>
        <li>🎨 Frontend: Built interactive components and dynamic audio player using HTML, CSS, and JavaScript</li>
        <li>🔄 Functionality: Developed playlist creation, song management, and search features</li>
        <li>☁️ Performance: Ensured responsive design across all devices</li>
        <li>🧠 UX Optimization: Focused on smooth animations and intuitive navigation</li>
        </ul>
        `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Audio Streaming',
            'Responsive Design',
            'UX/UI Design',
        ],
        thumbnail: '/projects/thumbnail/spotify.png',
        longThumbnail: '/projects/long/spotify.png',
        images: ['/projects/images/spotify.png'],
    },
    {
        title: 'JioCinema Clone',
        slug: 'jiocinema-clone',
        liveUrl: '',
        year: 2024,
        description: `
            Built a JioCinema clone showcasing movies, shows, and live channels with dynamic content rendering and a clean UI. <br/><br/>

            Key Features:<br/>
            <ul>
            <li>🎬 <b>Movie & Show Listings:</b> Displayed movies, series, and live channels with categories and filters</li>
            <li>🔄 <b>Dynamic Content:</b> Fetched and rendered content from dummy API data</li>
            <li>🖼️ <b>Header Carousel:</b> Interactive banner showcasing featured movies and shows</li>
            <li>🎨 <b>Clean UI:</b> Built responsive components with animations and hover effects using React and CSS</li>
            <li>📺 <b>Channels & Featured Sections:</b> Organized featured movies, shows, and channels efficiently</li>
            </ul><br/>

            Technical Highlights:
            <ul>
            <li>Implemented <b>React components</b> for dynamic rendering of movies and shows</li>
            <li>Built <b>carousel and featured sections</b> with smooth transitions</li>
            <li>Used <b>dummy API data</b> to simulate dynamic content fetching</li>
            <li>Designed a <b>responsive and interactive UI</b> for better user engagement</li>
            </ul>
        `,
        role: `
            Front-End Developer <br/>
            Led the development of the UI and content rendering:
            <ul>
            <li>🎨 Frontend: Created reusable React components for movies, shows, and channels</li>
            <li>🔄 Dynamic Content: Integrated dummy API data for real-time content simulation</li>
            <li>🖼️ UX/UI: Developed carousels, hover effects, and featured sections for visual appeal</li>
            <li>📱 Responsiveness: Ensured mobile-first design with smooth transitions and animations</li>
            </ul>
        `,
        techStack: [
            'React',
            'JavaScript',
            'Dummy API Integration',
            'HTML',
            'CSS',
            'Responsive Design',
            'Carousel Implementation',
        ],
        thumbnail: '/projects/thumbnail/jiocinema.png',
        longThumbnail: '/projects/long/jiocinema.png',
        images: [
            '/projects/images/jiocinema1.png',
            '/projects/images/jiocinema2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'Margey Labs Pvt Ltd',
        duration: 'Jan 2025 - Mar 2025',
    },
    {
        title: 'AI-ML Virtual Internship',
        company: 'AICTE Eduskills',
        duration: 'Sep 2024 - Nov 2024',
    },
];
