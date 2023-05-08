import React from 'react';
import Link from 'next/link';

interface MainPageProps {
    children: JSX.Element;
}

const MainPage: React.FC<MainPageProps> = ({
    children
}) => {
    return (
        <div className="main-page">
            <header className="header">
                <div className="container">
                    <Link href="/" className="header-logo">
                        <img src="/holyjs.png" alt="HolyJS" />
                        CINEMA
                    </Link>
                </div>
            </header>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default MainPage;