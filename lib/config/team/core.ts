export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
}

export interface CoreTeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio?: string;
  socials: SocialLinks;
}

export const CORE_TEAM_MEMBERS: CoreTeamMember[] = [
  {
    id: "1",
    name: "Alexandre Côté",
    role: "Front-End",
    department: "Development",
    image: "/team/placeholder-1.jpg",
    bio: "Passionate about creating beautiful user interfaces",
    socials: {
      linkedin: "https://linkedin.com/in/alexandrecote",
      github: "https://github.com/alexandrecote",
      instagram: "https://instagram.com/alexandrecote",
    },
  },
  {
    id: "2",
    name: "Dimitri Kurc",
    role: "Tech Lead",
    department: "Development",
    image: "/team/placeholder-2.jpg",
    bio: "Leading teams to build exceptional products",
    socials: {
      linkedin: "https://linkedin.com/in/dimitrikurc",
      github: "https://github.com/dimitrikurc",
    },
  },
  {
    id: "3",
    name: "Dominique Roy",
    role: "Front-End",
    department: "Development",
    image: "/team/placeholder-3.jpg",
    bio: "Crafting pixel-perfect experiences",
    socials: {
      linkedin: "https://linkedin.com/in/dominiqueroy",
      github: "https://github.com/dominiqueroy",
      twitter: "https://twitter.com/dominiqueroy",
    },
  },
  {
    id: "4",
    name: "Gaël Patron",
    role: "Team Lead",
    department: "Development",
    image: "/team/placeholder-4.jpg",
    bio: "Building bridges between code and business",
    socials: {
      linkedin: "https://linkedin.com/in/gaelpatron",
      github: "https://github.com/gaelpatron",
    },
  },
  {
    id: "5",
    name: "James Mckernan",
    role: "UX Designer",
    department: "Design",
    image: "/team/placeholder-5.jpg",
    bio: "Designing experiences that users love",
    socials: {
      linkedin: "https://linkedin.com/in/jamesmckernan",
      instagram: "https://instagram.com/jamesmckernan",
      website: "https://jamesmckernan.design",
    },
  },
  {
    id: "6",
    name: "Jenny Bernier",
    role: "UX Designer",
    department: "Design",
    image: "/team/placeholder-6.jpg",
    bio: "User-centered design advocate",
    socials: {
      linkedin: "https://linkedin.com/in/jennybernier",
    },
  },
];
