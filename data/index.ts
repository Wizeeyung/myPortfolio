export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack.",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion continuous learning.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building rich and functional Web applications.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },


  {
    id: 6,
    title: "Do you want us to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Job Portal with Map",
    des: "Find local jobs easily with our map-integrated job portal built on React and React-Toastify for notifications.",
    img: "/homepage.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://job-portal-with-map-integration.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    des: "Functional e-commerce website for products & services, this project is built on React and fully functional.",
    img: "/e-commerce.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://wizcart-e-commerce.netlify.app/",
  },
  {
    id: 3,
    title: "DisneyPlus Clone",
    des: "This is a DisneyPlus clone and pictures are fetched using cloud firestore from Firebase.",
    img: "/disney.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://wiz-disneyplus.netlify.app/home",
  },
  {
    id: 4,
    title: "Netflix Clone",
    des: "Recreated the Netflix clone with a Login/Logout functionality which gives a very rich website.",
    img: "/flix.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://wizflix-clone.netlify.app/",
  },
  {
    id: 5,
    title: "Gallery Website",
    des: "This website was made with pure HTML, CSS & JavaScript to develop a rich and responsive website",
    img: "/gallery.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://wizzy-portfolio-website.netlify.app/",
  },
  {
    id: 6,
    title: "Filtering & Search Cart",
    des: "This is a sample filter and search cart with different search functionalities.",
    img: "/cart.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://filteringsearchcart.netlify.app/",
  },
  {
    id: 7,
    title: "TO-DO List App",
    des: "This is a to-do list application built with react and uses Redux for state management.",
    img: "/todo.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://wizzytodo-list.netlify.app/",
  },
  {
    id: 8,
    title: "Facebook Clone",
    des: "This is a facebook clone built with pure HTML,CSS & Vanilla JavaScript and it's not responsive.",
    img: "/fbook.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://main--wizbookclone.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Samson was a game-changer for our business. The website they built for us is both visually stunning and highly functional.",
    name: "Sarah Haileys",
    title: "Freelance Client",
    img: "/user.svg",
  },
  {
    quote:
      "Samson's expertise in front-end development transformed our user interface, making it more intuitive and engaging for our clients.",
    name: "Michael Johnson",
    title: "Freelance Client",
    img: "/user.svg",
  },
  {
    quote:
      "We hired Samson for a complete backend overhaul. The new system is robust and has significantly improved our operational efficiency.",
    name: "Emily Davis",
    title: "Freelance Client",
    img: "/user.svg",
  },
  {
    quote:
      "Samson delivered an exceptional e-commerce platform that boosted our sales by 30%. Their attention to detail and creativity are unmatched.",
    name: "Jessica Wilson",
    title: "Freelance Client",
    img: "/user.svg",
  },
  {
    quote:
      "Collaborating with Samson was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "David Brown",
    title: "Freelance Client",
    img: "/user.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer (LevelUp ESG)",
    desc: "Integrated sustainability practices into software development, aligning with company's sustainability goal to enhance management of sustainability data for businesses.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend/Backend Dev.",
    desc: "Experienced full-stack developer building dynamic websites and web applications for businesses, enhancing their online presence and efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Junior Web Dev. (Abrahams Hub)",
    desc: "Collaborated with team to enhance functionality of web applications, resulting in 20% increase in user satisfaction levels and successful launch of 3 new features. ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "MSc Computing (Bangor Uni, UK)",
    desc: "Developed solid foundation in computer fundamentals and software development principles.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/wizeeyung"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ogunbanwosamson/"
  },
];