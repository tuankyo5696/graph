import React, { Component } from 'react'

class TreeView extends Component {
  render() {
    const {data,isOpen} = this.props
    const childData = isOpen ? data.children.map((child,index) => {
        console.log(child)
        return  (
                
        <li>{child.length>1?  <div>{child.name}{<span onClick= {this.props.clicked} >[{ isOpen ? '-' : '+' }]</span>}</div> : child.name }</li>
           
        )
    }) : null;
    return (
    <div> 
        <p>(You can double click on an item to turn it into a folder.)</p>
        <div className = 'bold'>
            <li>
            { data.name }
                <span onClick= {this.props.clicked} >[{ isOpen ? '-' : '+' }]</span>
            </li>
            <ul>
            {childData}
         {isOpen?   <li onClick = {this.props.add}> +</li> : null}
            </ul>
        </div>
              
    </div>
    );
  }

}

;

export default TreeView;
