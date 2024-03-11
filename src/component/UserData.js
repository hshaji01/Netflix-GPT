import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      error: "",
    };
  }
  async componentDidMount() {
    try {
        const data = await fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
          throw new Error("Failed to fetch");
        }
        const jsonData = await data.json();
        this.setState({ ...this.state, userData: jsonData });
        
    } catch (error) {
      this.setState({ ...this.state, error: error.message });
    }
  }
  render() {
    const { error, userData } = this.state;
    return error ? <div className=" text-red-500 font-semibold">{error}</div> : (
      <div>
            {userData.map(res => {
                return(
                    <div key= {res.id}>
                        <p className="border border-gray-500">{res.title}</p>
                        <p className="border border-gray-500">{res.description}</p>
                    </div>
                )
            })}
      </div>
    );
  }
}

// Functional Component
// const User = () => {
//     const [userData, setUserData] = useState([]);
//     //const [errors, setErrors] = useState();

//     useEffect(()=> {
//         fetchData()
//     }, []);

//     const fetchData = async ()=>{
//         try{
//             const data = await fetch("https://fakestoreapi.com/products");
//             if(!data.ok) {
//                 throw new Error("Fetching Data failed");
//             }
//             const jsonData =  data.json();
//             setUserData(jsonData);
//         } catch(error){
//             throw error;
//         }

//     }
// //errors ? <div className=' text-red-500 font-semibold'>{errors}</div> :
//     return (
//         <table className='border border-gray-400'>
//             <thead>
//                 <tr>
//                     <th className='border border-gray-400'>Title</th>
//                     <th className='border border-gray-400'>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {userData.map((res)=>{
//                     return(
//                         <tr key={res.id}>
//                             <td className='border border-gray-400'>{res.title}</td>
//                             <td className='border border-gray-400'>{res.description}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     )
// }

export default User;
