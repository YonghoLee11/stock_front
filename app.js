import axios from 'axios'
import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Items from './components/Items'

const item_arr = []

export class App extends Component {

  call_api(){
 
    axios.get('http://127.0.0.1:5000/get_rise_items')
    .then((Response)=>{
      
      Response.data.items.map(
        (item) => item_arr.push(item)
      ) 
      console.log(item_arr)
    })
    .catch((Error)=>{console.log(Error)})
  }

  render(){
    
    return(
      <div className="App">
        <a onClick={this.call_api}>aaaaaaaaa</a>  

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>event_name</TableCell>
              <TableCell>event_no</TableCell>
              <TableCell>current_price</TableCell>
              <TableCell>pre_ratio</TableCell>
              <TableCell>fluctuation_rate</TableCell>
              <TableCell>quant</TableCell>
              <TableCell>per</TableCell>
              <TableCell>roe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item_arr.map(req => {
              console.log("@@@@")
              return <Items event_name={req.event_name} event_no={req.ievent_no} current_price={req.current_price} pre_ratio={req.pre_ratio} 
                    fluctuation_rate={req.fluctuation_rate} quant={req.quant} per={req.per} roe={req.roe} />
            })}
          </TableBody>
        </Table>
      </div>
    )  
  }
}

//export default App;




