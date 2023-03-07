"use client";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            Made by Dylan. {currentYear}
        </footer>
    );
}
