import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AddCircleOutline, SubjectOutlined, AccountCircle } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
const drawerWidth = 240;

export default function ResponsiveDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: 'listes'
        },
        {
            text: 'Create',
            icon: <AddCircleOutline color="secondary" />,
            path: 'create'
        }
    ];
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {menuItem.map(item => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => { handleDrawerToggle(); return navigate(item.path) }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{flexGrow:1,bg:"#fafafa" }}>
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    
                        <Typography variant="h6" noWrap component="div" sx={{flexGrow:1 }}>
                            To Do App
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    
                </Toolbar>
            </AppBar>
            </Box>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    PaperProps={{
                        sx: {
                          backgroundColor: '#424242',
                          color: 'common.white',
                          width: 280
                        }
                      }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        bg:'neutral.800'
                    }}
                    open
                    PaperProps={{
                        sx: {
                          backgroundColor: '#424242',
                          color: 'common.white',
                          width: 280
                        }
                      }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor:"#f4f6f8",
                    height: '100%'
                     }}
            >
                <Toolbar />

                <Outlet/>

            </Box>
        </Box>
    );
}