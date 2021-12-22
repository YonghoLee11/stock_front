import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'

const items = []

function Items(items_arr, on_item_change){
    console.log(items_arr.items_arr.length)
    return (

      <Table>
        <TableHead>
          <TableRow> 
              <TableCell>NO</TableCell>
              <TableCell>theme_name</TableCell>
              <TableCell>event_name</TableCell>
              <TableCell>event_no</TableCell>
              <TableCell>current_price</TableCell>
              <TableCell>pre_ratio</TableCell>
              <TableCell>fluctuation_rate</TableCell>
              <TableCell>quant</TableCell>
              <TableCell>per</TableCell>
              <TableCell>roe</TableCell>
              <TableCell>transfer_reason</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {items_arr.items_arr.map((item , index)=><TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.theme_name}</TableCell>
            <TableCell>{item.event_name}</TableCell>
            <TableCell>{item.event_no}</TableCell>
            <TableCell>{item.current_price}</TableCell>
            <TableCell>{item.pre_ratio}</TableCell>
            <TableCell>{item.fluctuation_rate}</TableCell>  
            <TableCell>{item.quant}</TableCell>
            <TableCell>{item.per}</TableCell>
            <TableCell>{item.roe}</TableCell>
            <TableCell>{item.transfer_reason}</TableCell>
          </TableRow>)}
        </TableBody>  
          {/* <TableRow> */}
            
            {/* <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>  
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
          </TableRow> */}
        {/* </TableBody>   */}
        {/* <TableRow>
        <TableCell>{this.props.event_name}</TableCell>
        <TableCell>{this.props.event_no}</TableCell>
        <TableCell>{this.props.current_price}</TableCell>
        <TableCell>{this.props.pre_ratio}</TableCell>
        <TableCell>{this.props.fluctuation_rate}</TableCell>
        <TableCell>{this.props.quant}</TableCell>
        <TableCell>{this.props.per}</TableCell>
        <TableCell>{this.props.roe}</TableCell>
        </TableRow> */}
      </Table>
    )
}

export default Items;




