import React from 'react'
import Data from '../Data.js'

const Bollywood = () => {
    const bollywoodData = Data.filter((item) => item.category === 'Bollywood')
    return (
        <div>
            <h1>Bollywood</h1>
            {bollywoodData.map((bollydata) => (
                <div key={bollydata.id}>
                    <h2>{bollydata.title}</h2>
                    <img src={bollydata.img_url} alt={bollydata.title} />
                    <p>{bollydata.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Bollywood
