"use client";

import React from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';

export default function MessagesPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Messages</h1>
                <p className={styles.positiveMessage}>Stay connected with your mentors and peers.</p>
            </header>
            <div className={styles.assignmentsGrid}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className={styles.assignmentCard} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#E0B1CB' }}></div>
                        <div>
                            <h3>User {item}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Hey, did you understand the last lecture?</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
