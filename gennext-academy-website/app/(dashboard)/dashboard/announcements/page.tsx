"use client";

import React, { useState } from 'react';
import styles from '@/components/features/dashboard/Dashboard.module.css';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

export default function AnnouncementsPage() {
    const { user } = useAuth();
    const { showToast } = useToast();
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'Science Fair Registration', content: 'Sign up by Friday!', date: 'Feb 12, 2026', author: 'Mr. Smith' },
        { id: 2, title: 'School Closed', content: 'School closed on Monday for holiday.', date: 'Feb 10, 2026', author: 'Admin' },
    ]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handlePost = (e: React.FormEvent) => {
        e.preventDefault();
        const newAnnouncement = {
            id: Date.now(),
            title: newTitle,
            content: newContent,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            author: user?.role === 'teacher' ? 'Teacher' : 'Student Body' // Simplified
        };
        setAnnouncements([newAnnouncement, ...announcements]);
        setNewTitle('');
        setNewContent('');
        showToast('Announcement posted successfully!', 'success');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Announcements</h1>
                <p className={styles.positiveMessage}>Latest news and updates.</p>
            </header>

            {user?.role === 'teacher' && (
                <div style={{ marginBottom: '2rem', background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-primary)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Create Announcement</h3>
                    <form onSubmit={handlePost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            required
                        />
                        <textarea
                            placeholder="Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', minHeight: '100px', fontSize: '1rem', fontFamily: 'inherit' }}
                            required
                        />
                        <button type="submit" style={{ padding: '0.8rem', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                            Post Announcement
                        </button>
                    </form>
                </div>
            )}

            <div className={styles.assignmentsGrid}>
                {announcements.map((item) => (
                    <div key={item.id} className={styles.assignmentCard}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{item.author}</span>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.date}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p style={{ marginTop: '0.5rem', lineHeight: '1.5' }}>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
