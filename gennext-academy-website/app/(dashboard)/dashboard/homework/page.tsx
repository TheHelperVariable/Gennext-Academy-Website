"use client";

import React from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';

export default function HomeworkPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Homework</h1>
                <p className={styles.positiveMessage}>Keep up with your daily assignments.</p>
            </header>
            <div className={styles.assignmentsGrid}>
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className={styles.assignmentCard}>
                        <h3>Physics Problem Set #{item}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Status: {item % 2 === 0 ? 'Completed' : 'Pending'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
