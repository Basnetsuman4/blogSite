import { useState } from "react";
import { useNavigate } from 'react-router-dom'



const Create = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState(' ')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Suman')
    const [isPending, setIsPending] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        console.log(blog);

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(
            () => {
                console.log('New Blog Added🎉🎉🎉🎉');
                setIsPending(false)
                navigate('/');
            }
        )


    }
    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label >Blog body:
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <label >Blog author:

                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Arun">Arun</option>
                        <option value="Pratik">Pratik</option>
                        <option value="Suman">Suman</option>
                    </select>
                </label>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;