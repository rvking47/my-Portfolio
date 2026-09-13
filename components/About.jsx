import Image from 'next/image'
import { ArrowUpRight, GraduationCap, BriefcaseBusiness, CodeXml, Database, Cloud, Sparkles } from 'lucide-react'
import { education, experience, skillGroups, certifications, toolGroups } from '@/assets/resume'

export default function About() {
  const toolIcons = { code: CodeXml, database: Database, cloud: Cloud, ai: Sparkles }
  return (
    <div id='about' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <p className='text-center mb-2 text-sm uppercase tracking-wide text-emerald-800 dark:text-emerald-300'>Professional profile</p>
      <h2 className='text-center'>About me</h2>
      <div className='grid md:grid-cols-[224px_1fr] gap-8 lg:gap-14 items-center my-10'>
        <div data-tilt className='w-56 mx-auto'>
          <Image src='/rahul.webp' width={505} height={606} sizes='224px' alt='Rahul Vimal' className='rounded-lg w-full' />
        </div>
        <div className='min-w-0'>
          <h3 className='text-2xl font-semibold mb-4'>Rahul Vimal</h3>
          <p className='text-gray-700 dark:text-white/80'>I am a MERN Stack Developer building production web applications, AI-powered automation and real-time workflows at Codemaya. I take features from responsive React interfaces through Node.js APIs to deployment, with a focus on reliability, security and maintainable code.</p>
          <p className='mt-4 text-gray-700 dark:text-white/80'>Based in Kanpur, Uttar Pradesh. BCA graduate, currently pursuing an MCA in Computer Science.</p>
          <a href='/cv.pdf' download='Rahul_Vimal_Resume.pdf' className='inline-flex items-center gap-2 mt-5 font-medium underline underline-offset-4'>Download resume <ArrowUpRight size={18} aria-hidden='true' /></a>
        </div>
      </div>

      <section id='experience' aria-labelledby='experience-heading' className='resume-section'>
        <h3 id='experience-heading' className='resume-heading'><BriefcaseBusiness aria-hidden='true' />Professional experience</h3>
        {experience.map(job => <article key={job.company} className='resume-row'>
          <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
            <h4 className='font-semibold text-lg'>{job.role} <span className='font-normal'>at {job.company}</span></h4>
            <p className='text-sm text-gray-600 dark:text-white/70'>{job.period}</p>
          </div>
          {job.context && <p className='mt-2 text-sm text-emerald-800 dark:text-emerald-300'>{job.context}</p>}
          {job.company === 'Codemaya' && <a href='/codemaya-offer-redacted.pdf' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 mt-3 text-sm underline underline-offset-4'>Offer letter (redacted PDF) <ArrowUpRight size={16} aria-hidden='true' /></a>}
          <ul className='list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-white/80'>
            {job.highlights.map(point => <li key={point}>{point}</li>)}
          </ul>
        </article>)}
      </section>

      <section id='education' aria-labelledby='education-heading' className='resume-section'>
        <h3 id='education-heading' className='resume-heading'><GraduationCap aria-hidden='true' />Education</h3>
        <div className='grid sm:grid-cols-2 gap-8'>
          {education.map(item => <article key={item.degree} className='resume-row'>
            <p className='text-sm font-medium text-emerald-800 dark:text-emerald-300'>{item.status}</p>
            <h4 className='font-semibold text-lg mt-2'>{item.degree}</h4>
            {item.subject && <p>{item.subject}</p>}
            <p className='mt-2 text-gray-700 dark:text-white/80'>{item.university}</p>
            <p className='mt-2 text-sm text-gray-600 dark:text-white/70'>{item.period}</p>
          </article>)}
        </div>
      </section>

      <section aria-labelledby='skills-heading' className='resume-section'>
        <h3 id='skills-heading' className='resume-heading'>Technical skills</h3>
        <dl>{skillGroups.map(([title, skills]) => <div key={title} className='resume-row grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6'>
          <dt className='font-semibold'>{title}</dt><dd className='text-gray-700 dark:text-white/80'>{skills}</dd>
        </div>)}</dl>
      </section>

      <section aria-labelledby='tools-heading' className='resume-section'>
        <h3 id='tools-heading' className='resume-heading'>Tools I use</h3>
        <div className='grid sm:grid-cols-2 gap-x-10 gap-y-6'>
          {toolGroups.map(group => {
            const Icon = toolIcons[group.icon]
            return <div key={group.title} className='resume-row'>
              <h4 className='font-semibold mb-4'>{group.title}</h4>
              <ul className='flex flex-wrap gap-3'>
                {group.tools.map(tool => <li key={tool} className='inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 px-3 py-2 text-sm'>
                  <Icon size={18} className='text-emerald-800 dark:text-emerald-300 shrink-0' aria-hidden='true' />
                  <span>{tool}</span>
                </li>)}
              </ul>
            </div>
          })}
        </div>
      </section>

      <section aria-labelledby='certificates-heading' className='resume-section'>
        <h3 id='certificates-heading' className='resume-heading'>Certifications</h3>
        <div className='grid sm:grid-cols-2 gap-8'>{certifications.map(item => <article key={item.title} className='resume-row'>
          <h4 className='font-semibold'>{item.title}</h4>
          <p className='mt-2 text-gray-700 dark:text-white/80'>{item.issuer}</p>
          <a href={item.url} target='_blank' rel='noreferrer' className='inline-flex gap-2 items-center mt-4 underline underline-offset-4'>View credential <ArrowUpRight size={18} aria-hidden='true' /></a>
        </article>)}</div>
      </section>
    </div>
  )
}
