import Image from 'next/image'
import styles from '@/styles/components/Project.module.scss';

const Project = ({project}) => {
    return (
        <div className={ styles.project_item }>
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
                <p>{ project.stacks }</p>
                <div className={ styles.project_links }>
                    <a href={ project.url }>Site</a>
                    <a href={ project.github }>Github</a>
                    <i className="devicon-sass-original"></i>
                </div>
            </div>
        </div>
    );
}

export default Project;