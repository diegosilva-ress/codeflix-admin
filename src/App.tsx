import * as React from 'react';
import {ThemeProvider, Box} from "@mui/system";
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {appTheme} from "./config/theme";
import { Routes, Route, Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

const Home = () => (
    <Box>
        <Typography variant='h3' component='h1'>
            Home
        </Typography>
    </Box>
);

const About = () => (
    <Box>
        <Typography variant='h3' component='h1'>
            About
        </Typography>
    </Box>
);

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box component='main' sx={{
                height: '100vh',
                background: (theme) => theme.palette.grey[100],
            }}>
                <Header />
                <Layout>
                    <h1>Welcome to React Router</h1>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App;