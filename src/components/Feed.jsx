import React from 'react'
import { Container,Form } from "react-bootstrap";
import DisplayImage from './UploadImage';
import DisplayVideo from './UploadVideo';
import PostCards from './Card'
function Feed() {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label><h2>Start Post</h2></Form.Label>
                <Form.Control className="postInput" type="text" placeholder="Type Something to share" />
                <DisplayImage />
                <DisplayVideo/>
            </Form.Group>
        </Form>
        <PostCards/>
    </Container>
  )
}

export default Feed