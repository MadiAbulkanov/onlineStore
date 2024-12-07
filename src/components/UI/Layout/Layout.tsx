import { Outlet } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { BasketSidebar } from '../../BasketSidebar/BasketSidebar';
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
            <Outlet />
            <Footer />
            <Modal open={sidebarOpen} onClose={toggleSidebar}>
                <Box>
                    <BasketSidebar open={sidebarOpen} closeSidebar={toggleSidebar}/>
                </Box>
            </Modal>
        </>
    );
};