import React from 'react';
import Post from "../components/Post";
import './styles/Blog.css';

const Blog = (props) => {
    const blogsPerPage = 2;
    const [currentPage, setCurrentPage] = React.useState(1);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = props.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(props.blogs.length / blogsPerPage);

    console.log(currentPage);
    console.log(totalPages);

    const renderPaginationButtons = () => {
        const buttons = [];

        function generateButtons(first, last) {
            for (let i = first; i <= last; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={i === currentPage ? 'pagination_button active' : 'pagination_button'}
                    >
                        <h6 className="number">{i}</h6>
                    </button>
                );
            }
        }

        function rightButton() {
            buttons.push(
                <button
                    className='pagination_button'
                    onClick={() => setCurrentPage(currentPage+2)}
                >
                    <h6 className="number">...</h6>
                </button>
            );
        }
        function leftButton() {
            buttons.push(
                <button
                    className='pagination_button'
                    onClick={() => setCurrentPage(currentPage-2)}
                >
                    <h6 className="number">...</h6>
                </button>
            );
        }

        generateButtons(1,1);
        if (totalPages <= 6) {
            generateButtons(2,totalPages-1);
        }
        else if (totalPages > 6 && currentPage < 4) {
            generateButtons(2,Math.max(currentPage, 4));
            rightButton();
        }
        else if (currentPage >= 4 && currentPage <= totalPages-3) {
            leftButton();
            generateButtons(currentPage-1,currentPage+1);
            rightButton();
        } else {
            leftButton();
            generateButtons(Math.min(currentPage-1, totalPages-3),totalPages-1);
        }
        generateButtons(totalPages,totalPages);
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
                {totalPages>1 ?
                    <div className="pagination">
                        {currentPage>1 && totalPages>4?
                            <button
                                className='pagination_button'
                                onClick={() => setCurrentPage(currentPage-1)}
                            >
                                <h6 className="arrow_button icon-arrow-left"></h6>
                            </button>
                            : null
                        }
                        {renderPaginationButtons()}
                        {currentPage<totalPages && totalPages>4?
                            <button
                                className='pagination_button'
                                onClick={() => setCurrentPage(currentPage+1)}
                            >
                                <h6 className="arrow_button icon-arrow-right"></h6>
                            </button>
                            : null
                        }
                    </div>
                    : null
                }

            </div>
        </main>
    );
}

export default Blog;