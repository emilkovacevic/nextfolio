export const HOME_PAGE_DATA = {
  name: [
    { id: 1, letter: 'J' },
    { id: 2, letter: 'o' },
    { id: 3, letter: 'h' },
    { id: 4, letter: 'n' }
  ],
  role: [
    {
      id: 1,
      title: [
        { id: 1, letter: 'S' },
        { id: 2, letter: 'O' },
        { id: 3, letter: 'F' },
        { id: 4, letter: 'T' },
        { id: 5, letter: 'W' },
        { id: 6, letter: 'A' },
        { id: 7, letter: 'R' },
        { id: 8, letter: 'E' }
      ]
    },
    {
      id: 2,
      title: [
        { id: 1, letter: 'D' },
        { id: 2, letter: 'E' },
        { id: 3, letter: 'V' },
        { id: 4, letter: 'E' },
        { id: 5, letter: 'L' },
        { id: 6, letter: 'O' },
        { id: 7, letter: 'P' },
        { id: 8, letter: 'E' },
        { id: 9, letter: 'R' },
        { id: 10, letter: '.' }
      ]
    }
  ],
  introduction:
    'With a decade of experience in the software industry, I specialize in crafting elegant and efficient web applications, reflecting a deep understanding of modern development practices.',
  contact: [
    {
      type: 'Email',
      value: 'johndoe@example.com',
      link: 'mailto:johndoe@example.com'
    },
    { type: 'Phone', value: '+1212 456 7890', link: 'tel:+1234567890' },
    {
      type: 'Address',
      value:
        '123 East 123th Street, Murray Hill, NewYork, NY 10016, United States',
      link: 'https://www.google.com/maps/place/New+York,+NY,+USA/@40.7726383,-73.9919548,14z/data=!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu.'
    }
  ],
  hero_tags: [
    'Pro',
    'Developer',
    'Responsive',
    'API',
    'Model',
    'Theme',
    'Template',
    'Art',
    'Git'
  ]
}

export const PROFILE_PAGE_DATA = {
  heading: 'About Me',
  subheading: 'Contact info, Work experience, Education',
  image:
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
  name: 'John Doe',
  title: 'Full Stack Developer',
  message:
    'With 10+ years of experience as a professional software developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the way, from discussion and collaboration to completion.',
  contact: {
    email: 'johndoe@example.com',
    phone: '+123-456-7890',
    location: 'New York, USA',
    linkedIn: 'linkedin.com/in/johndoe',
    gitHub: 'github.com/johndoe'
  },
  education: [
    {
      id: 1,
      degree: 'MSc in Computer Science',
      institution: 'Harvard University',
      year: '2015-2017'
    },
    {
      id: 2,
      degree: 'BSc in Software Engineering',
      institution: 'MIT',
      year: '2010-2014'
    }
  ],
  skills: [
    'JavaScript (React, Vue, Node.js)',
    'Python (Django, Flask)',
    'Java (Spring Boot)',
    'Databases (SQL, MongoDB)',
    'DevOps (Docker, Jenkins, AWS)'
  ],
  workExperience: [
    {
      id: 1,
      position: 'Senior Software Engineer',
      company: 'Google',
      year: '2020-Present',
      responsibilities: [
        'Developed XYZ feature that improved performance by 20%',
        'Led a team of 5 developers to build ABC application'
      ]
    },
    {
      id: 2,
      position: 'Mid-Level Developer',
      company: 'Amazon',
      year: '2017-2020',
      responsibilities: [
        'Worked on the DEF project which reached 10k users in a month',
        'Improved the GHI process, resulting in a 15% time-saving'
      ]
    }
  ]
}

export const CONTACT_PAGE_DATA = {
  heading: 'Contact Me',
  subheading: "I'd love to hear from you!",
  embedded_location:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253385478!2d144.95373531589768!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af1176e6ed%3A0x4cb637568d8857e2!2sFlinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1630091720135!5m2!1sen!2sus',
  facebook: 'https://facebook.com/your_username',
  instagram: 'https://instagram.com/your_username',
  linkedin: 'https://linkedin.com/in/your_username'
}

const PROJECT_DESC =
  "Description of the project, what it does, who it's for, and any other pertinent details. This should provide an overview to anyone unfamiliar with the project's purpose or functionality."

export const PROJECT_PAGE_DATA = {
  heading: 'My Projects',
  subheading: 'Showcase of my work',

  projects: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80',
      title: 'Project Name 1',
      description: PROJECT_DESC,
      features: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 1',
          subtitle: 'Feature 1 for project 1',
          description: PROJECT_DESC
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 2',
          subtitle: 'Feature 2 for project 1',
          description: PROJECT_DESC
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 3',
          subtitle: 'Feature 3 for project 1',
          description: PROJECT_DESC
        }
      ],
      tags: ['E-commerce', 'Platform', 'Website']
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Project Name 2',
      description: PROJECT_DESC,
      features: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 1',
          subtitle: 'Feature 1 for project 2',
          description: PROJECT_DESC
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 2',
          subtitle: 'Feature 2 for project 2',
          description: PROJECT_DESC
        },
        {
          id: 3,
          image:
            'https://plus.unsplash.com/premium_photo-1661573411127-baedbe62d738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 3',
          subtitle: 'Feature 3 for project 2',
          description: PROJECT_DESC
        }
      ],
      tags: ['Personal', 'Studio', 'Gallery']
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Project Name 3',
      description: PROJECT_DESC,
      features: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 1',
          subtitle: 'Feature 1 for project 3',
          description: PROJECT_DESC
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1607435656663-3e951f654d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNyZWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 2',
          subtitle: 'Feature 2 for project 3',
          description: PROJECT_DESC
        },
        {
          id: 3,
          image:
            'https://plus.unsplash.com/premium_photo-1663835910976-cc2a4b8a96f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNyZWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Title 3',
          subtitle: 'Feature 3 for project 3',
          description: PROJECT_DESC
        }
      ],
      tags: ['System', 'Design', 'Server']
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Project Name 4',
      description: PROJECT_DESC,
      features: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1aWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          title: 'Title 1',
          subtitle: 'Feature 1 for project 4',
          description: PROJECT_DESC
        },
        {
          id: 2,
          image:
            'https://plus.unsplash.com/premium_photo-1677612031058-e90a2a6c03ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJ1aWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          title: 'Title 2',
          subtitle: 'Feature 2 for project 4',
          description: PROJECT_DESC
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1522832712787-3fbd36c9fe2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGJ1aWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          title: 'Title 3',
          subtitle: 'Feature 3 for project 4',
          description: PROJECT_DESC
        }
      ],
      tags: ['Web', 'Design', 'Art']
    }
  ]
}

export const BLOG_PAGE_DATA = {
  heading: 'My Blogs',
  subheading: 'Thoughts, ideas, and stories',

  blogs: [
    {
      id: 1,
      published_on: '7.8.2023',
      image:
        'https://images.unsplash.com/photo-1682686581264-c47e25e61d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
      title: 'Blog Post Title 1',
      description:
        'A short introduction or excerpt of the first blog post. This gives readers an idea about what to expect from the full post.'
    },
    {
      id: 2,
      published_on: '10.10.2023',
      image:
        'https://images.unsplash.com/photo-1692970126004-862efac4da0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Blog Post Title 2',
      description:
        'An intro for the second blog post. Each of these can be different lengths, but providing a teaser can entice readers to click through.'
    }
  ]
}

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    testimonial:
      "John's ability to grasp complex problems and provide innovative solutions is truly commendable. His dedication and passion for coding are evident in every project he handles.",
    name: 'Joe Smith',
    position: 'Director at Microsoft',
    image:
      'https://plus.unsplash.com/premium_photo-1669882305339-8e2cbb81903e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 2,
    testimonial:
      'John has been a pivotal part of our software development team. His coding skills and dedication to best practices are unmatched.',
    name: 'Robert Williams',
    position: 'CTO at Google',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 3,
    testimonial:
      "We've worked with John on multiple projects and he never fails to exceed our expectations. He has an uncanny ability to turn ideas into reality.",
    name: 'Amanda Johnson',
    position: 'VP of Engineering at Apple',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 4,
    testimonial:
      "It's rare to find a developer who combines expertise with great communication skills. John is one of those rare finds.",
    name: 'David Taylor',
    position: 'CEO at Dropbox',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 5,
    testimonial:
      "John consistently delivers top-notch code, meets deadlines, and is always eager to take on new challenges. It's a pleasure working with him.",
    name: 'Sam Brown',
    position: 'Product Manager at Spotify',
    image:
      'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 6,
    testimonial:
      "I've witnessed John tackle intricate problems with ease, and he's a true asset to any development team.",
    name: 'Jenny Green',
    position: 'Senior Developer at Netflix',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 7,
    testimonial:
      "Every line of code John writes is testament to his profound understanding of programming. He's truly a software artisan.",
    name: 'Natalie White',
    position: 'Tech Lead at Adobe',
    image:
      'https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 8,
    testimonial:
      'Collaborating with John has been an enlightening experience. His approach to coding, combined with his commitment to team goals, is truly inspiring.',
    name: 'Brandon Harris',
    position: 'Engineering Manager at Slack',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 9,
    testimonial:
      'John is the kind of developer who leads by example. His depth of knowledge and relentless work ethic makes him a standout in the software world.',
    name: 'Oliver King',
    position: 'Head of Software at Nvidia',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 10,
    testimonial:
      'John has the technical prowess and the collaborative spirit that makes projects succeed. I wholeheartedly recommend him for any technical venture.',
    name: 'Maya Lewis',
    position: 'Founder & CEO at Zoom',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
  }
]

export const BLOG_ARTICLE_DATA = {
  author: {
    name: 'Victor Katanski',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  title: 'My Amazing Article',
  sections: [
    {
      id: 'section-1',
      title: 'First Subtitle',
      paragraph:
        'This is the first paragraph of the article. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!',
      image:
        'https://images.unsplash.com/photo-1595013694368-aab1b4f70dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 'section-2',
      title: 'Second Subtitle',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!  Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 'section-3',
      title: 'Third Subtitle',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!  Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a r sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!  Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur! Dr sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!  Omnis corrupti nisi nemo magni quaerat cumque dolorem, illo reprehenderit hic neque. Minus rem impedit veniam ullam, vitae saepe eveniet a pariatur!',
      image:
        'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
    }
  ],
  links: [
    {
      id: 'link-1',
      url: '#',
      name: 'Some link 1'
    },
    {
      id: 'link-2',
      url: '#',
      name: 'Some link 2'
    },
    {
      id: 'link-3',
      url: '#',
      name: 'Some link 3'
    }
  ],
  tags: ['tech', 'tutorial', 'react'],
  publishDate: 'August 28, 2023'
}
