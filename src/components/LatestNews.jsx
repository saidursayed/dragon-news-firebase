import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);
  // console.log(newsData);

  const breakingNews = newsData.filter(
    (news) => news.others.is_today_pick == true
  );

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        {breakingNews.map((news) => (
          <Link
            to={`/news-details/${news.id}`}
            className="font-semibold mr-10 text-red-500 hover:underline"
          >
            {news.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
