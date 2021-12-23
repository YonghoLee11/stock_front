import axios from 'axios'
import React, {  useState } from 'react'
import Items from './components/Items'
// import MaterialTable from 'material-table'
import {Menu} from '@material-ui/core'

function App(props) {

  const [items_arr , setItems] = useState([])
  const [search_text , set_search_text] = useState({value : "", show : ""})

  const handleChange = (e) => {
    set_search_text({value: e.target.value})
  }

  const call_api = () =>{
    console.log(search_text.value)
    setItems([])
    axios.get('http://10.144.101.51:5000/find_themes_items/' + search_text.value)
    .then((Response)=>{
      console.log(Response.data.items)
      setItems(Response.data.items)
    })
    .catch((Error)=>{console.log(Error)})
  }

  // const columns = [
  //   {title : "amount" , field : "amount"},
  //   {title : "ask_buy" , field : "ask_buy"},
  //   {title : "ask_sell" , field : "ask_sell"},
  //   {title : "current_price" , field : "current_price"},
  //   {title : "event_name" , field : "event_name"},
  //   {title : "event_no" , field : "event_no"},
  //   {title : "fluctuation_rate" , field : "fluctuation_rate"},
  //   {title : "theme_name" , field : "theme_name"}, 
  //   {title : "transfer_reason" , field : "transfer_reason"}, 
  // ]

    return(
      <div className="App">
        <Menu
          id="menu-appbar"
          anchorEl={null}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={null}
          className={'null'}        
        />
        <input type="text" value={search_text.value} onChange={(e)=>handleChange(e)}></input>
        <button onClick={call_api}>검색</button> <br></br>

        <Items items_arr={items_arr} on_item_change={setItems}></Items>

        {/* {items_arr.map((item , index) => <span key={index}>{item.event_name}</span>)} */}
      </div>
    )  

    // return(
    //   <div className='App'>
    //     <input type="text" value={search_text.value} onChange={(e)=>handleChange(e)}></input>
    //     <button onClick={call_api}>검색</button> <br></br>         
    //     <MaterialTable
    //       title="stock"
    //       data={items_arr}
    //       columns={columns}
    //     />
    //   </div>
    // )
  }

export default App;
