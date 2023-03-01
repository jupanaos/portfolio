import styles from '@/styles/components/PageTitle.module.scss';

const PageTitle = ({ title, subtitle }) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            {
                subtitle ? <h2>{subtitle}</h2> : null
            }
        </>
    );
}

export default PageTitle;
