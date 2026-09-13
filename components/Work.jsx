import { ArrowUpRight, BriefcaseBusiness, CodeXml } from 'lucide-react'
import { workData } from '@/assets/assets'

const companyProjects = [
  {
    title: 'AI Post', link: 'https://www.aipost.social/',
    summary: 'Social media automation with AI content generation, recurring schedules and publishing workflows.',
    contributions: [
      'Developed Node.js and Express.js backend workflows and REST APIs for AI post generation, publishing, retry, repost and media uploads, using MongoDB for application data.',
      'Implemented timezone-aware daily, weekly and monthly recurring schedules, including generation workflows triggered near publishing time.',
      'Integrated Socket.io and WebSockets for real-time multi-post generation updates, connecting backend processing to post management views.',
      'Resolved Heroku H12 timeout issues with bounded network requests and hardened URL reachability validation while retaining protections for private and invalid URLs.',
    ],
    technologyLabel: 'Backend technologies & integrations',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.io / WebSockets', 'Cloudinary', 'Mailgun (email)', 'Heroku'],
  },
  {
    title: 'Tradeline Supply', link: 'https://tradelinesupply.com/',
    summary: 'A production SaaS project at Codemaya using Nuxt.js on the backend, MySQL, Redis and Cloudflare.',
    contributions: [
      'Contribute to backend development with the Codemaya team on Tradeline Supply Systems, working with Nuxt.js and MySQL.',
      'Work within a production stack that includes database migrations, Redis and Cloudflare.',
    ],
    technologyLabel: 'Backend technologies & infrastructure',
    tags: ['Nuxt.js', 'MySQL', 'Database migrations', 'DTOs (Data Transfer Objects)', 'Redis', 'Cloudflare'],
  },
]

const personalDetails = {
  ChatApplication: ['Built a MERN chat application with Socket.io for real-time messaging.', ['MERN', 'Socket.io']],
  'Real-Time Code Editor': ['Built a collaborative code editor with real-time updates using MERN and Socket.io.', ['MERN', 'Socket.io']],
  'Task-Manager': ['Built task management screens and CRUD workflows with a MERN dashboard.', ['MERN', 'CRUD']],
  'Classic Investments': ['Built a React business website with responsive page layouts.', ['React', 'Responsive UI']],
  'E-commerce': ['Built a responsive e-commerce frontend with product-focused page layouts.', ['Frontend', 'Responsive UI']],
  'C.V. Raman College': ['Built the frontend for a college website with responsive information pages.', ['Frontend', 'Responsive UI']],
}

export default function Work() {
  return (
    <div id='work' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <p className='text-center mb-2 text-sm uppercase tracking-wide text-emerald-800 dark:text-emerald-300'>Projects & contributions</p>
      <h2 className='text-center'>My work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-10 text-gray-700 dark:text-white/80'>Production work at Codemaya and independently built applications, with a focus on my role and implementation.</p>

      <section aria-labelledby='company-projects'>
        <h3 id='company-projects' className='resume-heading'><BriefcaseBusiness aria-hidden='true' />Company projects</h3>
        <p className='mb-5 text-sm text-gray-600 dark:text-white/70'>Codemaya · Full Stack Developer · Jan 2026 - Present</p>
        {companyProjects.map(project => <article key={project.title} className='resume-row grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-10'>
          <div>
            <h4 className='font-semibold text-xl'>{project.title}</h4>
            <a href={project.link} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 text-sm underline underline-offset-4 py-3' aria-label={`Visit ${project.title} website`}>Visit website <ArrowUpRight size={17} aria-hidden='true' /></a>
          </div>
          <div className='min-w-0'>
            <p className='text-gray-700 dark:text-white/80'>{project.summary}</p>
            <h5 className='font-medium mt-4 mb-2'>My contribution</h5>
            <ul className='list-disc pl-5 space-y-2 text-gray-700 dark:text-white/80'>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
            {project.technologyLabel && <h5 className='font-medium mt-4 mb-2'>{project.technologyLabel}</h5>}
            <ul aria-label={project.technologyLabel || 'Project context'} className='flex flex-wrap gap-2 mt-3'>{project.tags.map(tag => <li key={tag} className='text-xs border border-gray-300 dark:border-white/20 rounded-md px-2 py-1'>{tag}</li>)}</ul>
          </div>
        </article>)}
      </section>

      <section aria-labelledby='personal-projects' className='resume-section'>
        <h3 id='personal-projects' className='resume-heading'><CodeXml aria-hidden='true' />Personal projects</h3>
        <div className='grid md:grid-cols-2 gap-x-10 gap-y-2'>
          {workData.filter(project => project.title !== 'AI Post Social').map(project => {
            const [detail, tags] = personalDetails[project.title]
            return <article key={project.title} className='resume-row flex flex-col'>
              <h4 className='font-semibold text-lg'>{project.title === 'ChatApplication' ? 'Chat Application' : project.title === 'Task-Manager' ? 'Task Manager' : project.title}</h4>
              <p className='mt-2 text-gray-700 dark:text-white/80'>{detail}</p>
              <p className='text-sm mt-3 text-gray-600 dark:text-white/70'>{tags.join(' · ')}</p>
              <a href={project.link} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 text-sm underline underline-offset-4 pt-4 pb-2 self-start' aria-label={`View ${project.title}`}>View project <ArrowUpRight size={17} aria-hidden='true' /></a>
            </article>
          })}
        </div>
      </section>
      <a href='https://github.com/rvking47' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 mt-8 font-medium underline underline-offset-4'>Explore my GitHub <ArrowUpRight size={18} aria-hidden='true' /></a>
    </div>
  )
}
