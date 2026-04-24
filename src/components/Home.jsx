import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

const Home = () => {
    // Get latest 3 posts for featured section
    const featuredPosts = Data.slice(0, 3)

    // Get 1 post from each category for category showcase
    const categories = ['Bollywood', 'Technology', 'Hollywood', 'Fitness', 'Food']
    const categoryPosts = categories.map(cat => Data.find(item => item.category === cat)).filter(Boolean)

    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="home-title">The Daily Digest</h1>
                <p className="hero-subtitle">Your source for everything Trending, Fitness, Food and Entertainment.</p>
            </header>

            <section className="featured-section">
                <h2 className="section-title">Featured Stories</h2>
                <div className="featured-grid">
                    {featuredPosts.map((post) => (
                        <div key={post.id} className="featured-card">
                            <img className="featured-image" src={post.img_url} alt={post.title} />
                            <div className="featured-content">
                                <span className="category-tag">{post.category}</span>
                                <h3 className="featured-card-title">{post.title}</h3>
                                <p className="featured-description">{post.description}</p>
                                <Link to={`/${post.category.toLowerCase()}`} className="read-more">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="categories-grid-section">
                <h2 className="section-title">Explore Categories</h2>
                <div className="categories-list">
                    {categoryPosts.map((post) => (
                        <Link to={`/${post.category.toLowerCase()}`} key={post.id} className="category-item-card">
                            <div className="category-image-container">
                                <img src={post.img_url} alt={post.category} />
                                <div className="category-overlay">
                                    <h3>{post.category}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
