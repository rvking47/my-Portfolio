import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'AI Post Social',
        description: 'MERN, Next.js, AI posts, scheduling, integrations',
        bgImage: '/work-1.png',
        link:"https://www.aipost.social/",
    },
    {
        title: 'ChatApplication',
        description: 'MERN stack, Socket.io, real-time messaging',
        bgImage: '/chat.png',
        link:"https://chat-application-mern-m2w0.onrender.com/",
    },
        {
        title: 'Real-Time Code Editor',
        description: 'MERN stack, Socket.io, collaborative coding',
        bgImage: '/code-editor.png',
        link:"https://real-time-code-editor-zenc.onrender.com/",
    },
        {
        title: 'Task-Manager',
        description: 'MERN stack, dashboard, CRUD workflows',
        bgImage: '/task.png',
        link:"https://task-manager-frontend-i87s.onrender.com/",
    },
    {
        title: 'Classic Investments',
        description: 'React JS business website',
        bgImage: '/classic_inves.png',
        link:"https://demo.geur.in/",
    },
    {
        title: 'E-commerce',
        description: 'Responsive frontend website',
        bgImage: '/e-com.png',
        link:"https://techcoder.co.in/",
    },
    {
        title: 'C.V. Raman College',
        description: 'Frontend Based',
        bgImage: '/cvraman.png',
        link:"https://cvramanintercollege.in/",
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'MERN Applications', description: 'Complete MongoDB, Express, React, and Node.js applications with responsive screens and reusable components.', link: '' },
    { icon: assets.code_icon, title: 'Backend APIs', description: 'REST APIs with authentication, validation, file uploads, email flows, and clean business logic.', link: '' },
    { icon: assets.project_icon, title: 'AI & Automation', description: 'AI-assisted content workflows, scheduling systems, real-time updates, and integration-focused product features.', link: '' },
    { icon: assets.edu_icon, title: 'Database Workflows', description: 'MongoDB and MySQL data models for scalable CRUD apps, dashboards, and business workflows.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'React, Next.js, Node.js, Express, MongoDB, MySQL, Socket.io, REST APIs, Tailwind CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BCA in Computer Science, MCA ongoing' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'MERN Stack Developer at Codemaya, building AI Post and business web products' }
];

export { certifications as certificateData } from './resume';

export const toolsData = [
    assets.vscode, assets.mongodb,  assets.git
];
