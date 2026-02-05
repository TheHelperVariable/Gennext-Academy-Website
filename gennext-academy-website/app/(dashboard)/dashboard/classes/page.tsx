"use client";

import React from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';
import { useAuth } from '@/context/AuthContext';

export default function ClassesPage() {
    const { user } = useAuth();

    const studentClasses = ['Algebra I', 'Geometry', 'Calculus AB', 'Statistics'];
    const teacherClasses = ['English Lit 101', 'Creative Writing', 'AP Lang', 'Journalism'];

    const classes = user?.role === 'teacher' ? teacherClasses : studentClasses;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>My Classes</h1>
                <p className={styles.positiveMessage}>View and switch between your enrolled courses.</p>
            </header>
            <div className={styles.assignmentsGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {classes.map((cls, index) => (
                    <div key={index} className={styles.assignmentCard} style={{ textAlign: 'center' }}>
                        <div style={{ width: '100%', height: 100, backgroundColor: user?.role === 'teacher' ? '#E0B1CB' : '#9F86C0', borderRadius: '0.5rem', marginBottom: '1rem' }}></div>
                        <h3>{cls}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Section {index + 1}</p>
                        <button style={{
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '0.5rem',
                            background: 'transparent',
                            color: 'var(--color-primary)',
                            cursor: 'pointer'
                        }}>View Class</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
