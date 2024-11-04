'use client'

import { ChangeEvent, use, useState } from 'react';
import styles from './styles.module.scss'

export default function() {
    const [value, setValue] = useState('');

    
    return (
        <div className={styles.container}>{value}</div>
    );
}