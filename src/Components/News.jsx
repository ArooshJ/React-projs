import React, { useEffect, useState } from 'react'
import './Styless/News.css'

export default function News() {

    // useEffect(async ()=>{
    //     let url = 'https://newsapi.org/v2/everything?q=cricket&apiKey=4df78f0ae60a42ae868ae6be21d04d0f'
    //     let data = await fetch(url) // fetched api as fetch returns a promise, we use async await to wait for the resolution of a promise
    //     let parsedData = await data.json()
    //     setArticles(parsedData.articles)
    // },[])

    useEffect(() => {
        let isMounted = true; // Flag to check if the component is still mounted

        const fetchData = async () => {
            try {
                let url = 'https://newsapi.org/v2/everything?q=cricket&apiKey=4df78f0ae60a42ae868ae6be21d04d0f';
                let data = await fetch(url);
                let parsedData = await data.json();
                
                if (isMounted) {
                    setArticles(parsedData.articles);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Set the flag to false when the component is unmounted as error occurs when effect is still
        };
    }, []);

    let [articles,setArticles] = useState([])
let [readcontent,setReadcontent] = useState(false)
let NewsCards = articles.map(article => <div className='newscard'>
    <div className="title"><h3>{article.title}</h3></div>
    <div className="author">{article.author}</div>
    <div className="newsimg">
        <img src={article.urlToImage} alt="sry" />
    </div>
    <div className="desc">{article.description}</div>
    <div className="Readmore"><a href={article.url} target='_blank'>Read More</a></div>
    <div className="publishedAt">{article.publishedAt}</div>


</div>)

  return (
    <div className='news'>
      <div className="newstitle">
        <h1>NEWS OF INDIA</h1>
      </div>
      <div className="NewsContainer">
        {NewsCards}
      </div>
    </div>
  )
}
