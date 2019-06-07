import React, { Component } from 'react';


import {graphql} from 'react-apollo';
import {getBooksQuery} from './../../queries/queries';


class BookList extends Component {
    state = {
        isOpen: false
    }
    displayBooks (){
        let data = this.props.data;
        console.log(data)
        if(data.loading){
            return (<div>Loading books...</div>)
        }
        else {
            return data.books.map(book =>{
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }
    onShow = () =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <p>(You can double click on an item to turn it into a folder.)</p>
              <li> My Books <span onClick= {this.onShow} >[{ this.state.isOpen ? '-' : '+' }]</span> </li>
                <ul id = "book-list">
                   { this.state.isOpen ? this.displayBooks() : null}
                </ul>
            </div>
        )
    }
}

export default  graphql(getBooksQuery)(BookList);