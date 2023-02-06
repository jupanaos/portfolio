// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import chaletsetcaviar from '../../../public/images/projects/chaletsetcaviar.png';
import blog from '../../../public/images/projects/blog-mvc.png';
import snowtricks from '../../../public/images/projects/snowtricks.png';
import bilemo from '../../../public/images/projects/bilemo.png';
import todoco from '../../../public/images/projects/todoco.png';

const projectsData = [
  {
      id: 1,
      title: "Chalets et Caviar",
      description: "Intégration sur Wordpress",
      image: chaletsetcaviar,
      url: "https://chaletsetcaviar.julie-pariona.fr/",
      github: "https://github.com/jupanaos/chaletsetcaviar-wp",
  },
  {
      id: 2,
      title: "Blog MVC",
      description: "Blog professionnel en PHP Vanilla",
      image: blog,
      url: "https://jupanaos-blog.julie-pariona.fr/",
      github: "https://github.com/jupanaos/Blog_MVC",
  },
  {
    id: 3,
    title: "Snowtricks",
    description: "Site communautaire en Symfony 5",
    image: snowtricks,
    url: "https://snowtricks.julie-pariona.fr/",
    github: "https://github.com/jupanaos/SF_Snowtricks",
},
{
  id: 4,
  title: "BileMo",
  description: "API REST avec API Platform",
  image: bilemo,
  url: "https://bilemo-api.julie-pariona.fr/api/docs",
  github: "https://github.com/jupanaos/SF_BileMo-API",
},
{
  id: 5,
  title: "To Do & Co",
  description: "Audit et refactorisation d'une app en Symfony 5",
  image: todoco,
  url: "https://todo-co.julie-pariona.fr/",
  github: "https://github.com/jupanaos/Todo-List",
}
];

export default function handler(req, res) {
  res.status(200).json(projectsData)
}
