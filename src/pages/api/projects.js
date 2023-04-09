// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import chaletsetcaviar from '../../../public/images/projects/chaletsetcaviar.png';
import blog from '../../../public/images/projects/blog-mvc.png';
import snowtricks from '../../../public/images/projects/snowtricks.png';
import bilemo from '../../../public/images/projects/bilemo.png';
import todoco from '../../../public/images/projects/todoco.png';
import juliedev from '../../../public/images/projects/juliedev.png';

const projectsData = [
  {
    id: 1,
    title: "Chalets et Caviar",
    description: "L'agence immobilière de luxe Chalets et Caviar possède des chalets à la vente et à la location. Elle souhaitait un site vitrine pour promouvoir ses services. Mon travail a été de concevoir un design en accord avec leur ligne éditoriale et de leur fournir un système clé en main avec documentation pour gérer leurs produits.",
    stacks: ['Wordpress', 'CSS', 'Cpanel'],
    tag: "Formation",
    image: chaletsetcaviar,
    url: "https://chaletsetcaviar.julie-pariona.fr/",
    github: "https://github.com/jupanaos/chaletsetcaviar-wp",
  },
  {
      id: 2,
      title: "Jupanaos",
      description: "Il s'agit d'un blog professionnel. J'ai conçu un design personnel auquel j'ai implémenté une interface d'administration pour gérer les articles que je poste et les commentaires d'utilisateurs inscrits. Un formulaire de contact est aussi présent.",
      stacks: ['PHP', 'MySQL', 'Twig', 'CSS', 'Phpmyadmin', 'Cpanel'],
      tag: "Formation",
      image: blog,
      url: "https://jupanaos-blog.julie-pariona.fr/",
      github: "https://github.com/jupanaos/Blog_MVC",
  },
  {
    id: 3,
    title: "Snowtricks",
    description: "Snowtricks est un site communautaire contenant un annuaire de figures (ou tricks) de snowboard. Les utilisateurs inscrits et vérifiés (token) peuvent contribuer à cet annuaire via des formulaires dédiés et laisser des commentaires sous chaque figure.",
    stacks: ['Symfony', 'MySQL', 'SASS', 'Phpmyadmin', 'Cpanel'],
    tag: "Formation",
    image: snowtricks,
    url: "https://snowtricks.julie-pariona.fr/",
    github: "https://github.com/jupanaos/SF_Snowtricks",
  },
  {
    id: 4,
    title: "BileMo",
    description: "BileMo est une entreprise de vente de produits de téléphonie en B2B. Elle souhaitait un service web pour exposer ses produits. Cette API a été réalisée avec API Platform.",
    stacks: ['Symfony', 'API Platform', 'JWT', 'MySQL', 'Phpmyadmin', 'Cpanel'],
    tag: "Formation",
    image: bilemo,
    url: "https://bilemo-api.julie-pariona.fr/api/docs",
    github: "https://github.com/jupanaos/SF_BileMo-API",
  },
  {
    id: 5,
    title: "To Do & Co",
    description: "L'entreprise To Do & Co souhaitait un audit et une amélioration de son application de to-do list réalisée en Symfony 3.4. Mon travail a été de rédiger un audit de performance, faire une mise à niveau vers Symfony 5.4, améliorer et ajouter des fonctionnalités, ainsi qu'implémenter des tests unitaires et fonctionnels.",
    stacks: ['Symfony', 'MySQL', 'SASS', 'PHPUnit', 'Phpmyadmin', 'Cpanel'],
    tag: "Formation",
    image: todoco,
    url: "https://todo-co.julie-pariona.fr/",
    github: "https://github.com/jupanaos/Todo-List",
  },
  {
    id: 6,
    title: "julie-pariona.fr",
    description: "Le site sur lequel vous vous trouvez ! Il s'agit d'un portfolio pour réunir tous mes projets en un seul lieu. Je l'ai réalisé en Next.js pour pouvoir profiter de ses performances.",
    stacks: ['Next.js', 'React', 'SASS', 'Cpanel'],
    tag: "Personnel",
    image: juliedev,
    url: "https://julie-pariona.fr/",
    github: "https://github.com/jupanaos/portfolio",
  }

];

export default function handler(req, res) {
  res.status(200).json(projectsData)
}
