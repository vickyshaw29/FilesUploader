import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Files from './Files';
import Footer from './Footer';
import Header from './Header';
import UploadScreen from './UploadScreen';
const App = () => {

    return (
       <div>
           <BrowserRouter>
                <Header/>
                <Switch>
                    <main>
                        <Container>
                            
                                <Route path='/' component={UploadScreen} exact/>
                                <Route path='/files' component={Files} exact/>
                        </Container>
                    </main>
                    <Footer/>
                </Switch>
           </BrowserRouter>
       </div>
    )
}

export default App
