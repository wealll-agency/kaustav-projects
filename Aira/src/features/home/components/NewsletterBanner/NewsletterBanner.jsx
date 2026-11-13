import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../../../assets/styles/newsletter-banner.css';

/**
 * NewsletterBanner Component
 * 100% Exact Replica of Beautifo Reference Design:
 * - Rounded container with cosmetic background illustration (h1-banner7.jpg)
 * - Heading: "Sign up now & get 10% off"
 * - Subtitle: "Subscribe to our emails (they're super fun, promise) and get 15% off your first online order"
 * - Clean React-Bootstrap inline email input & subscribe button
 */
export const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      className="beautifo-newsletter-section"
      id="newsletter-banner"
      aria-label="Newsletter Subscription"
    >
      <Container>
        <div className="beautifo-newsletter-card">
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="beautifo-newsletter-content">
                <h2 className="beautifo-newsletter-title">
                  Sign up now &amp; get 10% off
                </h2>
                <p className="beautifo-newsletter-desc">
                  Subscribe to our emails (they&#8217;re super fun, promise) and get 15% off your first online order
                </p>

                {submitted ? (
                  <div className="beautifo-newsletter-success" role="alert">
                    <span>&#10003;</span> Thank you for subscribing! Your discount code is <strong>AIRA10</strong>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit} className="beautifo-newsletter-form">
                    <Form.Control
                      type="email"
                      placeholder="Your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="beautifo-newsletter-input"
                      aria-label="Email address for newsletter"
                    />
                    <Button
                      type="submit"
                      className="beautifo-newsletter-btn"
                    >
                      Subscribe
                    </Button>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterBanner;
