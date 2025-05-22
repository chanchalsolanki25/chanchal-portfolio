import React from 'react'
import Resume from './Resume'

function ResumeData() {
  const education = [
    {
      year: '2017-2019',
      course: 'Masters in Science (Computer Science)',
      score: '85.4%. ',
      university: `Bhupal Nobles' University, Udaipur`
    },
    {
      year: '2013-2016',
      course: 'Bechalor in Computer Application',
      score: '77.8%',
      university: `JNVU University, Jodhpur`
    },
  ]

  const experience = [
    {
      year: 'Oct 2024 - March 2025',
      role: 'Associate Frontend Developer',
      company: 'Auwave',
      experience: `Developed and maintained responsive web interfaces using HTML, 
      CSS, JavaScript, and Bootstrap. Built dynamic and interactive UI components using jQuery, improving user engagement and site usability. Collaborated closely with UI/UX designers to convert design mockups into functional web pages. Ensured cross-browser compatibility and responsive behavior across different devices and screen sizes. Participated
      debugging, testing, and performance optimization of frontend features.`
    },
    {
      year: 'Dec 2022 - Dec 2023',
      role: 'Junior Frontend Developer',
      company: 'Webanix Pvt Ltd.',
      experience: `Developed and maintained a user-friendly interfaces with intuitive navigation and responsive layouts to enhance the user experience and well-versed with converting Figma Designs into code. Collaborated closely with the client and design team to understand the website requirements, target audience, and overall vision. Assisted my project team / senior colleagues in developing and 
      modifying UIs, creating multiple forms and API Integrations. Proficient in developing websites and web applications using React.js, Next.js and angular frameworks as well as experienced in third-part 
      frameworks such as Bootstrap, Tailwind CSS, and Prime React to enhance the project’s interactivity and user engagement. Optimized the performance and responsiveness by employing lazy loading techniques and asynchronous data retrieval. Provided ongoing support and maintenance including updates and refinements to continuously improve the project’s design and user experience. Earned recognition by receiving the certificate for Best Performance.`,
    },
    {
      year: 'july 2022 - Dec 2022',
      role: 'Intern',
      company: 'Websenor',
      experience: `Worked as a trainee on my own-project and created a fully responsive single page e-commerce website ‘Fashion’ using Next.js framework. Created a fully functional parts of website i.e., add to cart, product fetching, order process and recently view product. Used DummyJSON APIs and created a commercial website along with all types of categorized products. Collaborated with my senior developers on day-to-day basis and learned User Interface side and logic part`
    },

  ]
  return (
    <div id="resume">
      <Resume education={education} experience={experience} />
    </div>
  )
}

export default ResumeData
