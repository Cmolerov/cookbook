import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <Container className="homePage_wrapper" fluid>
            <Row>
                <Col className="homePage_sidebar col-2">
                    <div className="timeOfDay">
                        <h2>Meal Time</h2>
                        <label>
                            breakfast
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Lunch
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Dinner
                            <input type="checkbox"></input>
                        </label>
                    </div>
                    <div className="timeOfDay">
                        <h2>Diet</h2>
                        <label>
                            Chicken
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Red Meat
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Fish
                            <input type="checkbox"></input>
                        </label>
                        <label>
                            Vegan
                            <input type="checkbox"></input>
                        </label>
                    </div>
                    <div className="timeOfDay">
                        <h2>Allergies</h2>
                        <label>
                            Seafood
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Gluten
                            <input type="checkbox"></input>
                        </label>

                        <label>
                            Dairy
                            <input type="checkbox"></input>
                        </label>
                    </div>
                </Col>
                <Col className="homePage_content-container">
                    <div className="homePage_recipes-container"></div>
                </Col>
            </Row>
            {/* <Row className="footer row-12">footer</Row> */}
            <Footer />
        </Container>
    );
}
