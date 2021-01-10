import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <Container className="homePage_wrapper" fluid>
            <Row>
                <Col className="homePage_sidebar col-2"></Col>
                <Col className="homePage_content-container">
                    <div className="homePage_recipes-container"></div>
                </Col>
            </Row>
            {/* <Row className="footer row-12">footer</Row> */}
            <Footer />
        </Container>
    );
}
