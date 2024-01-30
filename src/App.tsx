import * as React from 'react';
import {ThemeProvider, Box} from "@mui/system";
import {Header} from "./components/Header";
import {createTheme} from "@mui/material";
import {Layout} from "./components/Layout";

const theme = createTheme({});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box component='main' sx={{
                height: '100vh',
                background: '#000',
            }}>
                <Header />
                <Layout>
                    <h1>Olá mundo</h1>
                </Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App;