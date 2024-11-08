'use client';

import { useGetTasksQuery } from '@/app/redux/services/tasksApi';
import styles from './page.module.scss';
import { ITask } from '@/app/types/types';
import Link from 'next/link';

export default function Page() {
    const { data } = useGetTasksQuery();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.title}>Opened tasks</div>
                <div>
                    <nav className={styles.tasks}>
                        {!!data?.length && data.map((item: ITask) => (
                            <div className={styles.taskItem} key={item.id}>
                                <Link className={styles.noStyle} href={`/task/${item.id}`}>{item.title}</Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
}