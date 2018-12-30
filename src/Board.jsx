import React from 'react';
import Square from './Square.jsx';

export default class Board extends React.Component{
    render(){
        let board = this.props.values.map((rowValues,rowIndex)=>{
            let row = rowValues.map((value, columnIndex)=>{
                return (<Square key={""+ rowIndex+columnIndex}value={value}/>);
            });
            return (<div key={"row"+rowIndex}>{row}</div>);
        });
        return(<div>{board}</div>)
    }
}