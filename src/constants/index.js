import {
    mobile,
    backend,
    creator,
    web,
    python,
    c,
    cPlusPlus,
    html,
    css,
    javascript,
    typescript,
    reactjs,
    redux,
    materialUI,
    tailwind,
    bootstrap,
    django,
    nodejs,
    mongodb,
    mysql,
    postgres,
    threejs,
    vscode,
    sublimetext,
    heroku,
    git,
    github2,
    figma,
    // starbucks,
    cantileverLabs,
    gfg,
    jgec,
    bullseye_game,
    expense_tracker,
    studybud,
    share_me,
    travel_advisor,
    sorting_visualizer,
    wordle,
    personal_portfolio,
    tetris_game,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "UI/UX Designer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    // {
    //     name: "C",
    //     icon: c,
    // },
    {
        name: "C++",
        icon: cPlusPlus,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Material UI",
    //     icon: materialUI,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "MySQL",
    //     icon: mysql,
    // },
    // {
    //     name: "Postgres",
    //     icon: postgres,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    // {
    //     name: "VS Code",
    //     icon: vscode,
    // },
    // {
    //     name: "Sublime Text",
    //     icon: sublimetext,
    // },
    // {
    //     name: "Heroku",
    //     icon: heroku,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "github",
    //     icon: github2,
    // },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Instacks Intern",
        company_name: "Cantilever Labs",
        icon: cantileverLabs,
        iconBg: "#E6DEDD",
        date: "Sep 2021 - Nov 2021",
        points: [
            "Managing the workflow of the e-learning software of Think Exam entirely and also the question papers for the tests.",
            "Problem setting in programming and aptitude questions for the Content Management System.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews, testing for bugs and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Vice President",
        company_name: "GeeksforGeeks JGEC Student Chapter",
        icon: gfg,
        iconBg: "#308D46",
        date: "Jun 2021 - Present",
        points: [
            "Representing my college as a student chapter in GeeksforGeeks.",
            "Conducting technical webinars based on the interest of the students for better flow of knowledge.",
            "Conducting management-based seminars as well as seminars on interview experience of experienced candidates.",
        ],
    },
    {
        title: "Placement Coordinator",
        company_name: "Jalpaiguri Government Engineering College",
        icon: jgec,
        iconBg: "#FAFAFA",
        date: "Mar 2021 - Present",
        points: [
            "Assisting in maintaining database, management and workflow of the Placement Cell.",
            "Conducting Webinars in the interest of Placements from various firms and noted personalities from relevant fields.",
            "Maintaining network with TPOs of other colleges, HRs of various companies and college alumnis as well.",
            "Coordinating internship drives and placement drives for batchmates and managing student greviences accordingly.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Bullseye!!!",
        description:
            "A 2D game in vanilla javascript built from scratch with an in-game physics engine to detect collisions and interactions, sprites and movement controls.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: bullseye_game,
        source_code_link: "https://github.com/Samrat-14/bullseye-game/",
        demo_link: "https://samrat-14.github.io/bullseye-game/",
    },
    {
        name: "Expense Tracker",
        description:
            "An Expense Tracker application to keep track of all income and expenses with better visualization through pie charts and voice input interaction.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "speechly",
                color: "green-text-gradient",
            },
            {
                name: "materialUI",
                color: "pink-text-gradient",
            },
            {
                name: "chartjs",
                color: "orange-text-gradient",
            },
        ],
        image: expense_tracker,
        source_code_link: "https://github.com/Samrat-14/expense-tracker/",
        demo_link: "https://samrat-expense-tracker.netlify.app/",
    },
    {
        name: "StudyBud",
        description:
            "A Study-Together platform to help create a healthy environment of knowledge where people can discuss their topics of interest in various rooms publicly.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: studybud,
        source_code_link: "https://github.com/Samrat-14/studybud/",
        demo_link: "https://samrat-studybud.herokuapp.com/",
    },
    {
        name: "ShareMe",
        description:
            "A photo posting and sharing platform with user authentication where people can post, save, download, comment and share their photos publicly.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sanityio",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "googlelogin",
                color: "orange-text-gradient",
            },
        ],
        image: share_me,
        source_code_link: "https://github.com/Samrat-14/shareMe_full/",
        demo_link: "https://samrat-shareme.netlify.app/",
    },
    {
        name: "Travel Advisor",
        description:
            "A travel advisor companion app which helps the user to navigate through the real time google map and find and preview restaurants, hotels and attractions in and around the place.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "googlemap",
                color: "green-text-gradient",
            },
            {
                name: "materialUI",
                color: "pink-text-gradient",
            },
        ],
        image: travel_advisor,
        source_code_link: "https://github.com/Samrat-14/travelAdvisor_full/",
        demo_link: "https://samrat-travel-advisor.netlify.app/",
    },
    {
        name: "Sorting Visualizer",
        description:
            "Sorting algorithm visualizer to visualize the working of the sorting algorithms like bubble sort, merge sort, quick sort, insertion sort, selection sort by generating bars of random heights and then sorting them accordingly.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: sorting_visualizer,
        source_code_link:
            "https://github.com/Samrat-14/Sorting-Algorithm-Visualizer/",
        demo_link: "https://samrat-14.github.io/Sorting-Algorithm-Visualizer/",
    },
    {
        name: "Wordle",
        description: "Wordle, but a better one ;)",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "PWA",
                color: "orange-text-gradient",
            },
        ],
        image: wordle,
        source_code_link: "https://github.com/Samrat-14/Wordle/",
        demo_link: "https://samrat-14.github.io/Wordle/",
    },
    {
        name: "Portfolio Website",
        description:
            "Complete responsive personal portfolio website with media queries and features like downloading CV and other visual effects.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: personal_portfolio,
        source_code_link:
            "https://github.com/Samrat-14/Personal-Portfolio-Website/",
        demo_link: "https://samrat-14.github.io/Personal-Portfolio-Website/",
    },
    {
        name: "Tetris Game",
        description:
            "A Tetris Game made with vanilla javascript with added touchevents feature for sensing touch swipes in android or any other mobile devices.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: tetris_game,
        source_code_link: "https://github.com/Samrat-14/Tetris-game",
        demo_link: "https://samrat-14.github.io/Tetris-game/",
    },
];

export { services, technologies, experiences, testimonials, projects };
