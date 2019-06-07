import React,{Component} from 'react';

import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';
const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql'
})
class  App extends Component {
    render(){
      return (
        <ApolloProvider client = {client}>
            <div>
             <BookList/>
             <AddBook/>
            </div>
        </ApolloProvider>
      
      )
    }
} 
  


export default App;
