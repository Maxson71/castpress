import React from 'react';
import Post from "../components/Post";
import './styles/Blog.css';

const Blog = (props) => {
    const blogsPerPage = 2;
    const currentPage = 2;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = props.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(props.blogs.length / blogsPerPage);

    const handlePageChange = (page) => {
        // Обробник зміни сторінки
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === currentPage ? 'pagination_button active' : 'pagination_button'}
                >
                    <h6 className="number">{i}</h6>
                </button>
            );
        }
        return buttons;
    };

    return (
        <main className="blog-page page border">
            <div className="blog">
                <h1 className="blog__title">
                    Blog
                </h1>
                <div className="blog__list">
                    {currentBlogs.map((blog, index) => (
                        <Post
                            key={index}
                            id={blog.id}
                            img={blog.img}
                            title={blog.title}
                            date={blog.date}
                        />
                    ))
                    }
                </div>
                <div className="pagination">
                    {renderPaginationButtons()}
                </div>
            </div>
        </main>
    );
}

export default Blog;