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
    {
      year: '2012-2013',
      course: 'Senior Secondary School',
      score: '68.6%',
      university: `Sagar Senior Secondary School, Lunawa`
    },
    {
      year: '2010-2011',
      course: 'Secondary School',
      score: '60.6%',
      university: `Sagar Senior Secondary School, Lunawa`
    },
  ]

  const experience = [
    {
      year: 'Dec 2022 - Dec 2023',
      role: 'Junior Frontend Developer',
      company: 'Webanix Pvt Ltd.',
      experience: '	Working knowledge and experience in developing fully responsive website layouts, converting Figma Designs into code. Also, I worked on e-commerce websites and component-based-project, product listing, product detail, add to cart, wish list, etc., and experienced using third-party frameworks like Bootstrap, Tailwind CSS, and Prime React, to create efficient components in less code and time.',
    },
    {
      year: 'july 2022 - Dec 2022',
      role: 'Intern',
      company: 'Websenor',
      experience: `In Websenor, I have worked as a trainee on my self-project. During this internship I have learned UI side and logic part, and a fully functional frontend side like add to cart, add to wish list, order page and recently viewed products.`
    },
    
  ]
  return (
    <div id="resume">
      <Resume education={education} experience={experience} />
    </div>
  )
}

export default ResumeData
