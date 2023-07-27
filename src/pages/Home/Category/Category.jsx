import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';


const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h4>This Category : {categoryNews.length}</h4>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}

                ></NewsCard>)
            }
        </div>
    );
};

export default Category;