import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import UploadScreen from './UploadScreen';
const App = () => {
    return (
        <>
            <Header/>
                <main>
                    <Container>
                        <UploadScreen/>
                    </Container>
                </main>
            <Footer/>
        </>
    )
}

export default App
