"use client";

import React from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';

export default function AssignmentsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Assignments Management</h1>
                <p className={styles.positiveMessage}>Create and grade assignments for your students.</p>
            </header>
            <div className={styles.assignmentsGrid}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className={styles.assignmentCard}>
                        <h3>Calculus Quiz #{item}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Submissions: {item * 5}/25</p>
                        <button style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.5rem',
                            cursor: 'pointer'
                        }}>Grade Submissions</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
