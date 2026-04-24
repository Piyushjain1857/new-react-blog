import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '../Data.js'

const Post = () => {
    const { id } = useParams()
    const post = Data.find(item => item.id === parseInt(id))

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
                
                {/* Adding some placeholder content to make it look like a real article */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
                <div className="post-footer">
                    <div className="post-tags">
                        <span>#trending</span>
                        <span>#{post.category.toLowerCase()}</span>
                        <span>#blog</span>
                    </div>
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>
            </article>
        </div>
    )
}

export default Post
