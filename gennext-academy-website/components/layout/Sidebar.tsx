"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Calendar, MessageSquare, ClipboardList, Bell, Home, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    // Default to student items if not logged in (though middleware/protection usually handles this)
    const role = user?.role || 'student';

    const studentItems = [
        { id: 'classes', label: 'Classes', icon: Home, href: '/dashboard/classes' },
        { id: 'announcements', label: 'Announcements', icon: Bell, href: '/dashboard/announcements' },
        { id: 'homework', label: 'Homework', icon: BookOpen, href: '/dashboard/homework' },
        { id: 'tests', label: 'Tests & Quizzes', icon: ClipboardList, href: '/dashboard/tests' },
        { id: 'messages', label: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
    ];

    const teacherItems = [
        { id: 'classes', label: 'Classes', icon: Home, href: '/dashboard/classes' },
        { id: 'assignments', label: 'Assignments', icon: ClipboardList, href: '/dashboard/assignments' },
        { id: 'announcements', label: 'Announcements', icon: Bell, href: '/dashboard/announcements' },
        { id: 'messages', label: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
    ];

    const menuItems = role === 'teacher' ? teacherItems : studentItems;

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <BookOpen size={32} color="#6366f1" />
                <span className={styles.logoText}>GenNext</span>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    // Check if current path starts with the item href
                    // Also maintain active state for visual feedback if strictly needed, 
                    // but pathname check is usually better for navigation sidebar.
                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Link href={item.href} key={item.id} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                            <button
                                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        </Link>
                    );
                })}
            </nav>

            <div style={{ padding: '1rem', marginBottom: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#E0B1CB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                    {user?.role === 'teacher' ? '🍎' : '🎓'}
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email || 'User'}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>{user?.role}</p>
                </div>
            </div>

            <div className={styles.footer}>
                <button onClick={logout} className={styles.logoutButton}>
                    <LogOut size={20} />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
}
