import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class AllTheBooks extends React.Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-center mt-3'>
                    {Fantasy.map(book => (
                        <Col key={book.asin} md={4} className='mt-4'>
                            <Card>
                                <Card.Img src={book.img} alt="Test book" />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.price}</Card.Text>
                                    <Card.Text>{book.category}</Card.Text>
                                    <Button variant='primary'>Buy now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks;