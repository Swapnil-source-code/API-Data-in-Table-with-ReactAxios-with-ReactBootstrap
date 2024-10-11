import {useEffect, useState} from 'react'
import '../Table/Tables-style.css'
import axios from 'axios';


const Tables = () => {

  const [post, setpost] = useState([]);

  const fetchData = async()=>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      console.log(res);
      setpost(res.data)
    }
    catch(err) {
      console.log(err);
    }
  }
  useEffect(()  => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <table className="table">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Userid</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
              {post.map((index, value) => (
            <tr key={value}>
              <td>{post[value]["id"]}</td>
              <td>{post[value]["userId"]}</td>
              <td>{post[value]["title"]}</td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tables