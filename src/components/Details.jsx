import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const post = Data.find((item) => item.id === parseInt(id))

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
            <button className="back-btn" onClick={() => navigate(-1)}>
                <span>←</span> Back
            </button>
            
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
                
                <p>Detailed insights and further information about {post.title} will be explored here. This section contains the core narrative and supporting details that make this story unique and engaging for our readers.</p>
                
                <div className="post-footer">
                    <div className="post-tags">
                        <span>#trending</span>
                        <span>#{post.category.toLowerCase()}</span>
                        <span>#featured</span>
                    </div>
                    <button className="back-link-btn" onClick={() => navigate(-1)}>← Back to List</button>
                </div>
            </article>
        </div>
    )
}

export default Details
