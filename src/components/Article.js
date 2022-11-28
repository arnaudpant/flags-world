import axios from "axios";
import React from "react";
import { useState } from "react";

const Article = ({ article }) => {
    // State
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    // Comportement
    const dateFormater = (dateToFormat) => {
        let dateFormat = new Date(dateToFormat).toLocaleDateString("fr-FR", {
            year: "2-digit",
            month: "long",
            day: "numeric",
        });
        return dateFormat;
    };

    const handleEdit = () => {
        const dataEditing = {
            title: article.title,
            content: editContent ? editContent : article.content,
            date: article.date,
            dateUpdate: Date.now(),
        };

        axios
            .put("http://localhost:3004/articles/" + article.id, dataEditing)
            .then(setIsEditing(false));
    };

    const handleDelete = () => {
        axios.delete("http://localhost:3004/articles/" + article.id)
    }

    // Affichage
    return (
        <div className="article">
            <div className="article-header">
                <h4>{article.title}</h4>
                <em>Posté le {dateFormater(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea
                    autoFocus
                    defaultValue={editContent ? editContent : article.content}
                    onChange={(e) => setEditContent(e.target.value)}
                ></textarea>
            ) : (
                <p>{editContent ? editContent : article.content}</p>
            )}
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={() => handleEdit()}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Editer</button>
                )}
                <button onClick={()=> {
                    if(window.confirm("Voulez-vous supprimer cet article ?")){
                        handleDelete()
                    }
                }}>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;
