import React, { useState } from 'react';
import { Card } from 'primereact/card';

const LandingPage = () => {
    return (
        <div className="layout">
            <div className="sidebar left-sidebar">
                <Card className="sidebar-card">
                    <p>Content inside the card with some padding.</p>
                </Card>
            </div>
            <div className="content">
                <h1>Scrollable Content</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
                    vitae massa.
                </p>
                {/* Add more content to make the middle section scrollable */}
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i}>Additional content to enable scrolling... {i + 1}</p>
                ))}
            </div>
            <div className="sidebar right-sidebar">
                <div className="right-sidebar-inner-view">
                    <Card className="sidebar-card">
                        <div>カート</div>
                    </Card>
                    <Card className="sidebar-card">
                        <div>アカウント</div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

LandingPage.getLayout = function getLayout(page) {
    return page;
};

export default LandingPage;
