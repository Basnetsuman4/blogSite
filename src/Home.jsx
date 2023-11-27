import BlogsList from './BlogsList'
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogsList blogs={data} title="All Blogs!" />}
    </div>
  )
}

export default Home

//*****     Used for deleting too  ********** */

// import { useState, useEffect } from 'react'
// import BlogsList from './BlogsList'

// const Home = () => {
//   const [blogs, setblogs] = useState(null)

//   // const handleDelete = (id) => {
//   //   const newBlogs = blogs.filter((blog) => blog.id !== id)
//   //   setblogs(newBlogs)
//   // }

//   useEffect(() => {
//     console.log('use effect ran')
//     fetch('http://localhost:8000/blogs')
//       .then((res) => {
//         return res.json() // this one is promise
//       })
//       .then((data) => {
//         // here comes the data
//         console.log(data)
//         setblogs(data)
//       })
//   }, [])

//   return (
//     <div className="Home">
//       {blogs && ( //  Coditional Template , here, first the left unit execute, if it returns flase only then the right unit is executed. In this line, since
//         <BlogsList
//           blogs={blogs}
//           title="All Blogs!"
//           // handleDelete={handleDelete}
//         />
//       )}
//       {/* <BlogsList blogs={blogs.filter((blog)=>blog.author==="Suman")} title='Testing!' /> */}
//     </div>
//   )
// }

// export default Home
