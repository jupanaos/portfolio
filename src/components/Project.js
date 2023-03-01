import Image from 'next/image'

const Project = ({project}) => {
    return (
        <div>
            <h3>{ project.title }</h3>
            <p>{ project.tag }</p>
            <p>{ project.description }</p>
            <p>{project.stacks}</p>
            <Image
                src={project.image}
                alt="Illustration du projet"
                width={500}
            />
            <a href={project.url}>Site</a>
            <a href={project.github}>Github</a>
        </div>
    );
}

export default Project;