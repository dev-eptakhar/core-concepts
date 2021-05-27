import React, { useEffect, useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  let name = ['Jhanker Mahbub', 'Hasin Hyder'];
  let job = ['Web DEV. , neils', 'WP DEV. , LWHH'];
  let productsDetail = [
    {name:'Mac Book Pro 16"', price:'2699'},
    {name:'Mac Book Pro 13"', price:'1199'},
    {name:'Adobe', price:'119999'},
    {name:'Tsla', price:'111299199'},
    {name:'Speach-x', price:'113272399'},
    {name:'Nasa', price:'1109309899'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
        <Person name={name[0]} job={job[0]}></Person>
        <Person name={name[1]} job={job[1]}></Person>
        <Person name='HM Nayem' job='MERN Stack Dev. , Stack web'></Person>
        <Product name={productsDetail[0].name} price={productsDetail[1].price}></Product>
        <ProductAll product={productsDetail[1]}></ProductAll>
        <ProductApple></ProductApple>
        <ul>
          {
            name.map(name => <li>{name}</li>)
          }
        </ul>
        <ul>
          {
            productsDetail.map(productsDetail => <li>{productsDetail.name}</li>)
          }
        </ul>
        {
          productsDetail.map(productsDetails => <BigCompanyBuy buy={productsDetails}></BigCompanyBuy>)
        }
        <Users></Users>
      </header>
    </div>
  );
}
function Person(props){
  let box = {
    border:'2px solid #61DAFB',
    margin:'10px',
    padding: '10px'
  }
  console.log(props)
  return (
    <div style={box}>
      <h1>Name: {props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  );
}

function Product(props){
  return(
    <div className="card">
      <h1>{props.name}</h1>
      <p className="price">${props.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

function ProductAll(props){
  return(
    <div className="card">
      <h1>{props.product.name}</h1>
      <p className="price">${props.product.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}
//destucksture
function ProductApple(props){
  const {name , price} = {name:'Mac Air 13.5"', price:'999'};
  return(
    <div className="card">
      <h1>{name}</h1>
      <p className="price">${price}</p>
      <button>Add to Cart</button>
    </div>
  )
}
function BigCompanyBuy(props){
  return(
    <div className="card">
      <h1>{props.buy.name}</h1>
      <p className="price">${props.buy.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

function Count(props){
  let [count, setCount] = useState(0);
  let addCart = () => {setCount(count + 1 )}
  return(
    <div className="card">
      <h1>Count: {count} </h1>
      <button onClick={addCart}>Add to Cart</button>
      <button onClick={() => {setCount(count - 1 )}}>Cart Item Remove</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <ul>
      {
        users.map ( user => (<li>{user.name}</li>) )
      }
    </ul>
  )
}
export default App;
