import Image from 'next/image'
import styles from '@/styles/components/Project.module.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Project = ({ project }) => {
    return (
        <li className={ styles.project_item }>
            <Image
                src={project.image}
                alt={`Illustration du projet ${project.title}`}
                width={500}
            />
            <div className={ styles.project_content }>
                <div className={ styles.project_header }>
                    <h3>{ project.title }</h3>
                    <p>{ project.tag }</p>
                </div>
                <p className={ styles.project_description }>{ project.description }</p>
                <div className={ styles.project_stacks }>
                    <div className={ styles.project_stacks_container }>
                        <ul>
                            {project.stacks.map((stack, i) => (
                                <li key={i}>
                                    { stack }
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {project.stacks.map((stack, i) => (
                                <li key={i}>
                                    { stack }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                    {/* {project.stacks.map((stack, i) =>
                    <DevIcon
                        key={ i }
                        stack={ stack }
                        icon={`${stack}`}
                        viewBox="0 0 32 32"
                    />
                    )} */}
                <div className={ styles.project_links }>
                    <a href={ project.url }><FaExternalLinkAlt /> Site</a>
                    <a href={ project.github }><FaGithub /> Github</a>
                </div>
            </div>
        </li>
    );
}

export default Project;