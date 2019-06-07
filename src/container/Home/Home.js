import React, { Component } from 'react';
import values from 'lodash/values';
import TreeView from './../../components/TreeView/TreeView';

class Home extends Component {
    state= {
            treeData : {
                name: 'My Tree',
                isRoot : true,
                children: [
                  { name: 'hello' },
                  { name: 'wat' },
                  {
                    name: 'child folder',
                    children: [
                      {
                        name: 'child folder',
                        children: [
                          { name: 'hello' },
                          { name: 'wat' }
                        ]
                      },
                      { name: 'hello' },
                      { name: 'wat' },
                      {
                        name: 'child folder',
                        children: [
                          { name: 'hello' },
                          { name: 'wat' }
                        ]
                      }
                    ]
                  }
                ]
              },
              isOpen: false   
        }
        onShow = () =>{
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        
        getRootData = () => {
    const { treeData } = this.state;
    console.log(treeData);

    return values(treeData).filter(treeData => treeData.isRoot === true);
  }
  getChildNodes = (node) => {
    const { treeData } = this.state;
    if (!node.children) return [];
    return node.children.map(path => treeData[path]);
  } 
  addData = () => {
      const {treeData} = this.state
      treeData.children.push({name: 'newStuff' });
      console.log(treeData);
      this.setState({
          treeData
      })
  }
  
  render() {
      const rootData = this.getRootData();
      console.log(rootData);
    return (
      <TreeView data = {this.state.treeData} 
                isOpen = {this.state.isOpen} 
                clicked ={this.onShow} 
                getChildNodes={this.getChildNodes}
                onToggle = {this.onToggle}
                add = {this.addData}
                />
    );
  }
}
export default Home;