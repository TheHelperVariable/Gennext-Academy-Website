"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <BookOpen size={24} color="#6366f1" />
                GenNext Academy
            </Link>

            <ul className={styles.links}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/mission" className={styles.link}>Mission</Link></li>
                <li><Link href="/events" className={styles.link}>Events</Link></li>
                <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>

            <div className={styles.authButtons}>
                <Link href="/login">
                    <button className={styles.loginButton}>Log In</button>
                </Link>
                <Link href="/register">
                    <button className={styles.signupButton}>Sign Up</button>
                </Link>
            </div>
        </nav>
    );
}
