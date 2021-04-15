import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Files = ({ history }) => {
    const [users, setusers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:7000/api')
            setusers(data.users)
        }
        fetchData()
    }, [])

    return (
        <>
        
        <Container fluid>
        <Link to='/'><h2>Go back</h2></Link>
            <Row>
                <Col>
                    {users.map(a => a.imgCollection.map((b, i) => (
                        <>
                            <p key={i}>{b}</p>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={`${b}`} rounded style={{width:'100px'}}/>
                                </Col>
                            </Row>
                        </>
                    )))}
                </Col>
            </Row>
            {/* <Row>
                <Col xs={6} md={4}>
                    <Image src={`${b}`} rounded />
                </Col>
            </Row> */}
        </Container>
        </>
    )
}

export default Files
