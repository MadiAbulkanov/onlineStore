import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header.tsx';
import { Footer } from './Footer/Footer.tsx';
import { BasketSidebar } from '../BasketSidebar/BasketSidebar.tsx';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';

export function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevOpen => !prevOpen);
    };

    return (
        <>
            <Header closeSidebar={toggleSidebar} />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
            <Modal open={sidebarOpen} onClose={toggleSidebar}>
                <Box>
                    <BasketSidebar open={sidebarOpen} closeSidebar={toggleSidebar}/>
                </Box>
            </Modal>
        </>
    );
};
