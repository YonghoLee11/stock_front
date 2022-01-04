import axios from 'axios'
import React, {  useState } from 'react'
import Items from './components/Items'
// import MaterialTable from 'material-table'
//import {Menu} from '@material-ui/core'
import Menu from './components/Menu'


function App(props) {

  const [items_arr , setItems] = useState([])
  const [search_text , set_search_text] = useState({value : "", show : ""})

  const handleChange = (e) => {
    set_search_text({value: e.target.value})
  }

  const call_api = () =>{
    console.log(search_text.value)
    setItems([])
    axios.get('http://192.168.0.175:5000/find_themes_items/' + search_text.value)
    .then((Response)=>{
      console.log(Response.data.items)
      setItems(Response.data.items)
    })
    .catch((Error)=>{console.log(Error)})
  }

    return(
      <div className="App">
        
        <input type="text" value={search_text.value} onChange={(e)=>handleChange(e)}></input>
        <button onClick={call_api}>검색</button> <br></br>

        <Menu/>
        <Items items_arr={items_arr} on_item_change={setItems}></Items>
      </div>
    )  
  }

export default App
