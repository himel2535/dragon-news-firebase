import React from "react";
import { Link } from "react-router";

const NewsDetailCard = ({ news }) => {
  const { category_id, title, details, thumbnail_url, author } = news;
  const formattedDate = new Date(author?.published_date).toLocaleDateString();

  return (
    <div className="max-w-3xl mx-auto mt-10 card bg-base-100 border shadow-md rounded-xl overflow-hidden">
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {formattedDate} | {author?.name ? author.name : "Unknown Author"}
        </p>

        <p className="text-accent mt-3 leading-relaxed">{details}</p>

        <div className="mt-6">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-secondary btn-outline"
          >
            ← Back To Category News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
