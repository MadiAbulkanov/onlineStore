import { Outlet } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { BasketSidebar } from '../../BasketSidebar/BasketSidebar';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';

export function Layout() {
    const [sidedarOpen, setSidedarOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setSidedarOpen(prevOpen => !prevOpen);
    };

    return (
        <>
            <Header closeSidebar={toggleOpen} />
            <Outlet />
            <Footer />
            <Modal open={sidedarOpen} onClose={toggleOpen}>
                <Box>
                    <BasketSidebar closeSidebar={toggleOpen}/>
                </Box>
            </Modal>
        </>
    );
};