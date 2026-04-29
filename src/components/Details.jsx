import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Data from '../Data.js'

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    // Find current post
    const post = Data ? Data.find((item) => item.id === parseInt(id)) : null

    if (!post) {
        return (
            <div className="post-error">
                <h2>Post not found</h2>
                <Link to="/" className="read-more">Back to Home</Link>
            </div>
        )
    }

    return (
        <div className="single-post-container">
            <a className="back-btn read-more " onClick={() => navigate(-1)}>
                <span>←</span> Back
            </a>
            
            <header className="post-header">
                <span className="category-tag">{post.category}</span>
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                    <span className="post-date">Published on April 24, 2026</span>
                    <span className="post-author">By The Siren Team</span>
                </div>
            </header>

            <div className="post-hero">
                <img src={post.img_url} alt={post.title} className="post-hero-image" />
            </div>

            <article className="post-content">
                <p className="post-description">{post.description}</p>
                
                <p>This story dives deep into the heart of {post.category}, exploring the nuances that make it such a compelling topic. From its cultural impact to its technical execution, {post.title} stands as a testament to the creativity and passion of those involved.</p>
                
                <div className="post-footer">
                    <div className="post-tags">
                        <span>#trending</span>
                        <span>#{post.category.toLowerCase()}</span>
                        <span>#featured</span>
                    </div>
                </div>
            </article>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a className="read-more" onClick={() => navigate(-1)}>← Back to List</a>
            </div>
        </div>
    )
}

export default Details
