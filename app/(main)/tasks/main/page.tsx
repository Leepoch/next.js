'use client'

import { useGetTasksQuery } from "@/app/redux/services/tasksApi";
import styles from './styles.module.scss'
import Link from "next/link";

export default function Page() {
    const { data, error, isLoading } = useGetTasksQuery();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Tasks</h1>
            </div>
            <div className={styles.tasks}>
                {!!data?.length && data.map((item) => (
                    <div  className={styles.task} key={item.id}>
                        <hr></hr>
                        <Link href={`/task/${item.id}`} className={styles.link}>
                            <div>
                                {item.title}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}