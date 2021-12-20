import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const items = []

class Items extends Component {
  render() {
    console.log("!!!!!!!")
    return (
      <TableRow>
      <TableCell>{this.props.event_name}</TableCell>
      <TableCell>{this.props.event_no}</TableCell>
      <TableCell>{this.props.current_price}</TableCell>
      <TableCell>{this.props.pre_ratio}</TableCell>
      <TableCell>{this.props.fluctuation_rate}</TableCell>
      <TableCell>{this.props.quant}</TableCell>
      <TableCell>{this.props.per}</TableCell>
      <TableCell>{this.props.roe}</TableCell>
      </TableRow>
    )
  }
}

export default Items;




