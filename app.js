import axios from 'axios'
import React, { Component , useState } from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Items from './components/Items'




function App(props) {

  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <p>{count}번 클릭했습니다!</p>
  //     <button onClick={() => setCount(count + 1)}>
  //      Counter
  //     </button>
  //   </div>
 
  const [items_arr , setItems] = useState([])

  
  const call_api = () =>{

    
    
    //set_items([])
    axios.get('http://10.144.101.51:5000/find_themes_items')
    .then((Response)=>{
      console.log(Response.data.items)
      setItems(Response.data.items)

      // Response.data.items.map(
      //   (item) => set_items.push(item)
      // ) 
      console.log(items_arr)
    })
    .catch((Error)=>{console.log(Error)})
  }

    return(
      <div className="App">
        <a onClick={call_api}>aaaaaaaaa</a> 
      </div>
        
      // <div className="App">
      //   <a onClick={this.call_api}>aaaaaaaaa</a>  
      //   <Items></Items>
      //   {/* <Table>
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>event_name</TableCell>
      //         <TableCell>event_no</TableCell>
      //         <TableCell>current_price</TableCell>
      //         <TableCell>pre_ratio</TableCell>
      //         <TableCell>fluctuation_rate</TableCell>
      //         <TableCell>quant</TableCell>
      //         <TableCell>per</TableCell>
      //         <TableCell>roe</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {item_arr.map(req => {
      //         console.log("@@@@")
      //         return <Items event_name={req.event_name} event_no={req.ievent_no} current_price={req.current_price} pre_ratio={req.pre_ratio} 
      //               fluctuation_rate={req.fluctuation_rate} quant={req.quant} per={req.per} roe={req.roe} />
      //       })}
      //     </TableBody>
      //   </Table> */}
      // </div>
    )  
  }
// }

export default App;




