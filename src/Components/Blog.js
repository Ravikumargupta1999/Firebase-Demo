import { useState,useRef,useEffect, useReducer } from "react";


function blogsReducer(state,action){
    switch(action.type){
        case "ADD" :
            return [action.blog,...state];
        case "REMOVE":    
           return state.filter((blog,index) => index != action.index);
        default :
           return [];   
              
    }
}
export default function Blog() {


    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [formData, setFormData] = useState({ title: "", content: "" });
    // const [blogs, setBlogs] = useState([]);
    const [blogs, dispatch] = useReducer(blogsReducer,[]);
    const titleRef = useRef(null);
    

    useEffect(() =>{
        titleRef.current.focus();
    },[]);

    useEffect(() =>{
        if(blogs.length && blogs[0].title.length){
            document.title =blogs[0].title;
        }else{
            document.title = "No Blogs Added"
        }
    },[blogs])

    function handleSubmit(e) {
        e.preventDefault();

        // setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        dispatch({type:"ADD",blog : { title: formData.title, content: formData.content }});
        setFormData({ title: "", content: "" });

        titleRef.current.focus();

        console.log(blogs);
    }

    function removeBlog(i){
        dispatch({type:"REMOVE",index : i})
    }

    return (
        <>
            <h1>Blogging APP</h1>
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the Title of the Blog here.."
                            value={formData.title}
                            ref = {titleRef}
                            onChange={(e) => setFormData({ title: e.target.value })}
                        />
                    </Row >
                    <Row label="Content">
                        <textarea className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={formData.content}
                            required
                            onChange={(e) => setFormData({ title: formData.title,content: e.target.value })}
                           
                        />
                    </Row >

        

                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div className="blog">
                    <h3>{blog.title}</h3>
                    <hr />
                    <p>{blog.content}</p>

                    <div className="blog-btn">
                        <button onClick={ () =>removeBlog(i)} className="btn remove">
                            Delete
                        </button>

                    </div>


                </div>
            ))}

        </>
    )
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}


// {/* <>
// <h1>Write a Blog!</h1>
// <div className="section">

// {/* Form for to write the blog */}
// <form onSubmit={handleSubmit}>
    // <Row label="Title">
    //     <input className="input"
    //         placeholder="Enter the Title of the Blog here.."
    //         value={formData.title}
    //         onChange={(e) => setFormData({ title: e.target.value, content: formData.content })}
    //     />
    // </Row >

    // <Row label="Content">
    //     <textarea className="input content"
    //         placeholder="Content of the Blog goes here.."
    //         value={formData.content}
    //         onChange={(e) => setFormData({ title: formData.title, content: e.target.value })}
    //     />
    // </Row >

//     <button className="btn">ADD</button>
// </form>
             
// </div >

//     <hr />

// {/* Section where submitted blogs will be displayed */ }
// <h2> Blogs </h2>
// {
//     blogs.map((blog, i) => (
//         <div className="blog">
//             <h3>{blog.title}</h3>
//             <hr />
//             <p>{blog.content}</p>
//         </div>
//     ))
// }

// </> * /}