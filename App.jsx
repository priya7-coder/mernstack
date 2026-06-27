import Info from "../Info";
import Infor from "../Infor";
import Address from "./Address";
import Father from "./assets/Father";
import Mother from "./Mother";

const App=()=>{
  let name = "priya ";
  let surname = "chaudhary";

  let products=[
    {name:"laptop", price: 50000, _id: 1, quantity: 10},
    {name:"mobile", price: 20000, _id: 2, quantity: 20},
    {name:"tablet", price: 30000, _id: 3, quantity: 15},
  ]

  let users=[
    {name:"priya", surname: "chaudhary", _id: 1, age:21, gender: "female", email: "priya@example.com", image: "image.png"},
    {name:"aditi", surname: "karna", _id: 2, age:30, gender: "female", email: "aditi@example.com", image: "image.png"},
    {name:"preety", surname: "yadav", _id: 3, age:25, gender: "female", email: "preety@example.com", image: "image.png"},
    {name:"neha", surname: "kumari", _id: 4, age:35, gender: "female", email: "neha@example.com", image: "image.png"},
  ]
  return (
    <div>
      <h1 style = {{ backgroundColor: 'blue' }}>Details!</h1>
      <p style={{ color: 'darkblue' }}>name is {name}</p>
      <p style={{ border: 'solid black' }}>surname is {surname}</p>
      <p style={{ backgroundColor: 'lightblue' }}>the sum of 1 and 1 is {1+1}</p>
      <img style ={{ border: 'solid black' }} src="image.png" width="300" height="200"></img> 
      {
        products.map((item, i) => {
          return(<div style={{ border: 'solid black', margin: '10px', padding: '10px' }} >
            <p>product name is: {item.name}</p> 
            <p>product price is: {item.price}</p>
            <p>product quantity is: {item.quantity}</p>
          </div>)
          
        })
      }

      {
        users.map((item, i) => {
          return(<div style={{ border: 'solid red', margin: '10px', padding: '10px' }} >
            <img src={item.image} width="100" height="100" ></img>
            <p>name is: {item.name}</p> 
            <p>surname is: {item.surname}</p>
            <p>age is: {item.age}</p>
            <p>gender is: {item.gender}</p>
            <p>email is: {item.email}</p>
          </div>)
        })
      }

      <Address></Address>
      <Father name="Sharwan" surname="Chaudhary"></Father>
      <Mother name="Laxmi Devi" surname="Kurmi"></Mother>
      <Address></Address>
      <Info></Info>
      <Infor name="Priya" surname="Chaudhary"></Infor>

      <p className="success">This is a success message</p>
      <p className="error">This is an error message</p>
      <p className="warning">This is a warning message</p>

    </div>
  );
 
};

export default App;