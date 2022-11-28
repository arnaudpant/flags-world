import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Article from "../components/Article";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Blog = () => {
    // State
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const getData = () => {
        axios
            .get("http://localhost:3004/articles")
            .then((res) => setBlogData(res.data));
    };

    useEffect(() => {
        getData();
    }, []);

    // Comportement
    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 10) {
            setError(true);
        } else {
            axios.post("http://localhost:3004/articles", {
                title,
                content,
                date: Date.now(),
            });
            setError(false);
            setTitle("");
            setContent("");
            getData();
        }
    };

    // Affichage
    return (
        <>
            <Navbar />
            <Logo />
            <div className="blog-container">
                <form className="form-flex" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Titre"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <textarea
                        placeholder="Message"
                        style={{ border: error ? "1px solid red" : "none" }}
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    ></textarea>
                    {error && <p>Veuillez écrire plus de 10 caractères</p>}
                    <input type="submit" value="Publier" />
                </form>
                <ul>
                    {blogData
                        .sort((a, b) => b.date - a.date)
                        .map((article) => (
                            <Article key={article.id} article={article} />
                        ))}
                </ul>
            </div>
        </>
    );
};

export default Blog;
