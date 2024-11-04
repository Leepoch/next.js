'use client';

import styles from './page.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.appName}>Amogus</div>
            <nav className={styles.headerNav}>
                <div className={styles.listItems}>
                    <div className={styles.listItem}>Profile</div>
                    <div className={styles.listItem}>Theme</div>
                 </div>
            </nav>
        </header>
    ); 
}