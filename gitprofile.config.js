// gitprofile.config.js

const config = {
  github: {
    username: 'newri0807', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    // linkedin: 'ariful-alam',
    twitter: 'irwen215',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    website: 'https://newri0807.github.io',
    phone: '',
    email: 'newri0807@gmail.com',
  },
  skills: [
    'C#',
    '.Net',
    'Jquery',
    'JavaScript',
    'React.js',
    'Node.js',
    'MsSQL',
    'Git',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Blue Eye Co., Ltd',
      position: 'FrontEnd Web Developer',
      from: 'June 2020',
      to: 'September 2022',
    },
    // {
    //   company: 'My Offer 360 Degree',
    //   position: 'Web Application Developer',
    //   from: 'July 2019',
    //   to: 'August 2021',
    // },
  ],
  education: [
    {
      institution: 'National Technical Training Program',
      degree: 'Smart Web Content Service Development Hybrid Web, Web App',
      from: '2019',
      to: '2019',
    },
    {
      institution: 'Hannam University',
      degree: 'Bachelor of Department of Arts and Culture',
      from: '2012',
      to: '2016',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
