"use client";

import React from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';

export default function TestsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Tests & Quizzes</h1>
                <p className={styles.positiveMessage}>Upcoming assessments and past results.</p>
            </header>
            <div className={styles.assignmentsGrid}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className={styles.assignmentCard}>
                        <h3>Math Unit {item} Test</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Due: March {item + 10}, 2026</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
