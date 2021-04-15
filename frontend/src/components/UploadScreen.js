import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Message from './Message'
import Loader from './Loader'
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
const UploadScreen = () => {
    const [imgCollection, setimgCollection] = useState('')
    const [loading, setloading] = useState(false)
    const [msg, setmsg] = useState('')
    const onFileChange = (e) => {
        setimgCollection(e.target.files)
        setmsg('')
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        setloading(true)
        var formData = new FormData();
        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        axios.post("http://localhost:7000/api/upload-images", formData, {
        }).then(res => {
            if (res.data.error) {
                setmsg(res.data.error && res.data.error)
               setloading(false)
            } else {
                console.log(res.data)
                setmsg(res.data.message && res.data.message)
                setimgCollection('')
                setloading(false)
            }

        })



    }
    return (
        <Container center>
            <Row className="justify-content-center md-center sm-center xs-center mr-auto">
                <Col xs={12} md={6} sm={12}>
                    <Fragment>
                        {loading && <Loader />}
                        {msg && <Message>{msg} </Message>}
                        <Row className='ml-1'>

                            <Card style={{ marginBottom: '6rem' }}>
                                <Form
                                    column sm={2}
                                    onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <input type="file" name="imgCollection"

                                            onChange={onFileChange} multiple

                                        />
                                    </div>
                                    <div className="">
                                        <button className="btn btn-primary" type="submit">Upload</button>
                                    </div>
                                </Form>
                            </Card>


                        </Row>
                    </Fragment>
                </Col>
            </Row>
        </Container>


    )
}

export default UploadScreen