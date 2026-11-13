import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BLOG_POSTS } from '../../data/blogPostsData';
import '../../../../assets/styles/blog-section.css';

/**
 * BlogSection Component
 */
export const BlogSection = ({ posts = BLOG_POSTS }) => {
  return (
    <section
      className="beautifo-blog-section"
      id="blog-section"
      aria-label="From The Blog"
    >
      <Container>
        {/* Section Header */}
        <div className="beautifo-blog-header">
          <h2 className="beautifo-blog-title">From The Blog</h2>
          <p className="beautifo-blog-subtitle">
            Get all latest skincare essentials news, tips and tricks to nurture your skin glowy,
            dewy best before you even think makeup
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <Row>
          {posts.map((post) => (
            <Col key={post.id} lg={4} md={6} sm={12}>
              <article className="beautifo-blog-card">
                {/* Thumbnail Container */}
                <a
                  href={post.link || `#post-${post.id}`}
                  className="beautifo-blog-thumb"
                  aria-label={post.title}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="beautifo-blog-img"
                    loading="lazy"
                  />
                </a>

                {/* Content Details */}
                <div className="beautifo-blog-content">
                  <h3 className="beautifo-blog-post-title">
                    <a href={post.link || `#post-${post.id}`}>
                      {post.title}
                    </a>
                  </h3>
                  <div className="beautifo-blog-meta">
                    <time dateTime="2021-04-02">{post.date}</time>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
