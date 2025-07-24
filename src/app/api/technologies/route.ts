const technologies = [
  // Frontend
  {
    text: "HTML",
    icon: "/icons/html5.svg",
  },
  {
    text: "CSS",
    icon: "/icons/css3.svg",
  },
  {
    text: "React",
    icon: "/icons/react.svg",
  },
  {
    text: "NextJs",
    icon: "/icons/nextjs.svg",
  },
  {
    text: "Tailwind",
    icon: "/icons/tailwindcss.svg",
  },

  // Backend
  {
    text: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    text: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    text: "NodeJs",
    icon: "/icons/nodejs.svg",
  },
  {
    text: "Express",
    icon: "/icons/express.svg",
  },
  {
    text: "NestJs",
    icon: "/icons/nestjs.svg",
  },
  {
    text: "PHP",
    icon: "/icons/php.svg",
  },
  {
    text: "Laravel",
    icon: "/icons/laravel.svg",
  },

  // Databases
  {
    text: "MySQL",
    icon: "/icons/mysql.svg",
  },
  {
    text: "MariaDB",
    icon: "/icons/mariadb.svg",
  },
  {
    text: "PostgreSQL",
    icon: "/icons/postgresql.svg",
  },
  {
    text: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    text: "Redis",
    icon: "/icons/redis.svg",
  },

  // Infrastructure
  { text: "AWS", icon: "/icons/amazon.png" },
  {
    text: "Vercel",
    icon: "/icons/vercel.svg",
    className: "bg-black",
  },
  {
    text: "Docker",
    icon: "/icons/docker.svg",
  },

  // Tests
  {
    text: "Jest",
    icon: "/icons/jest.svg",
  },
  {
    text: "PHPUnit",
    icon: "/icons/phpunit.svg",
  },
];

export type Technology = typeof technologies extends Array<infer T>
  ? T
  : unknown;

export function GET() {
  return Response.json(technologies);
}
