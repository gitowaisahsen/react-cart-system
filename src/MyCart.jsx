import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';





export default function MyCart(props) {
  // const[product,setProduct]=useState();
  var [qty, setQuantity] = useState(0);
  

  

  return (
    
    <div style={{ alignItems: 'center', marginLeft:'400px',marginTop:'50px', }}>
      
      <div style={{ display: 'flex', width: '500px', height: '100px', background: 'silver' }}>
        <div style={{
          padding: '10px', fontSize: '35px', height: '40px', 
          width: '300px', margin: 'auto'
        }} >{props.title}</div>
        <div style={{
          padding: '10px', fontSize: '35px', height: '40px', border:'0.5px solid white', borderRadius:'10px',
          width: '80px', margin: 'auto'
        }} >{qty}</div>

        <button onClick={
          () => {
            setQuantity(qty + 1)
          }
        }
        
          style={{ padding: '10px', fontSize: '30px', height: '60px',  width: '50px', margin: '20px',background: 'silver',
          border:'0.5px solid white', borderRadius:'10px'}} >
          +
        </button>

        <button onClick={
          () => {
            setQuantity(qty - 1)
          }
        }
        
          style={{ padding: '10px', fontSize: '30px', height: '60px',  width: '50px', margin: '20px',background: 'silver',
          border:'0.5px solid white', borderRadius:'10px'}} >
          -
        </button>


      





      </div>


    </div>
    
    



  )
}
