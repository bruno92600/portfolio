import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/IMG_3556.jpg';
import Work2 from './assets/IMG_5073-2.jpg';
import Work3 from './assets/IMG_5299.jpg';
import Work4 from './assets/IMG_5341.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Accueil',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Moi',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Prénom : ',
    description: 'Bruno',
  },

  {
    id: 2,
    title: 'Nom : ',
    description: 'Pascoal Goncalves',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '40 ans',
  },

  {
    id: 4,
    title: 'Localisation : ',
    description: 'Asnières sur seine',
  },

  {
    id: 5,
    title: 'Téléphone : ',
    description: '0649139979',
  },

  {
    id: 6,
    title: 'Email : ',
    description: 'pascoal.goncalves.bruno@gmail.com',
  },

  {
    id: 7,
    title: 'Langues : ',
    description: 'Français, Portugais, Anglais, Espagnol',
  },

  {
    id: 8,
    title: 'GitHub : ',
    description: 'https://github.com/bruno92600',
  },
];

export const stats = [
  {
    id: 1,
    no: '6 Mois',
    title: 'Expériences ',
  },

  {
    id: 2,
    no: 'Formation <br /> Développeur web',
    title: 'OpenClassRooms',
  },

  {
    id: 3,
    no: 'Formation <br /> Web designer UX/UI',
    title: 'Visiplus',
  },
];

export const resume = [
  {
    id: 1,
    category: 'Expériences',
    icon: <FaBriefcase />,
    year: '2022-2023',
    title: 'Développeur Web <span> OpenClassRooms </span>',
    desc: 'Groupomania : Création d’un réseau social d’entreprises,<br /> Sauce Piquante : Mise en œuvre d’une base de données,<br /> Kanapé : Elaboration du site internet,<br /> La chouette Agence : Classement dans les moteurs de recherche,<br /> Oh my food : Site de commandes clients,<br /> Booki : Conception de la page html et ccs.',
  },

  {
    id: 2,
    category: 'Expériences',
    icon: <FaBriefcase />,
    year: '2000 à 2021',
    title: 'Coiffeur et manager <span> Groupe Dessange </span>',
    desc: 'Formation technique à l’IFPM,<br /> Expérience de management, co-responsabilité d’un centre esthétique,<br /> Animation d’équipe,<br /> Suivi de l’univers de la mode et de la cosmétologie capillaire,<br /> Créativité et conseils...etc',
  },

  {
    id: 3,
    category: 'Formation diplômante',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Web designer <span> Visiplus </span>',
    desc: 'Formation diplômante de 9 mois.',
  },

  {
    id: 4,
    category: 'Formation diplômante',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Développeur web <span> OpenClassRooms </span>',
    desc: 'Formation diplômante de 7 mois.',
  },

  {
    id: 5,
    category: 'Formation diplômante',
    icon: <FaGraduationCap />,
    year: '2000 à 2007',
    title: 'CAP + BP Coiffure <span> IFPM Nanterre </span>',
    desc: '2 ans pour chaque dîplome.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '95',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '95',
  },

  {
    id: 4,
    title: 'Tailwind',
    percentage: '80',
  },

  {
    id: 5,
    title: 'React',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Node js',
    percentage: '95',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '80',
  },

  {
    id: 8,
    title: 'Sql',
    percentage: '60',
  },

  {
    id: 9,
    title: 'Firebase',
    percentage: '75',
  },

  {
    id: 10,
    title: 'API',
    percentage: '70',
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Passion',
    details: [
      {
        icon: <FiFileText />,
        title: 'Photographie',
        desc: 'Paysage, architecture...',
      },
      {
        icon: <FiUser />,
        title: 'personnel',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Appareil photo',
        desc: 'Canon 650',
      },
      {
        icon: <FiExternalLink />,
        title: 'En voir plus :',
        desc: 'https://www.flickr.com/photos/103790716@N06/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
