import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './ImageList.css';





class App extends React.Component{

  state= {images: []};

   onSearchSubmit =async(term) =>{
   const response = await Unsplash.get('/search/photos', {
      params: {
        query: term
      }

      
    });
    this.setState({images:response.data.results});
    
  }

  render(){
  return (
    <div className="bbgcolor">
      <div className='picture'> Welcome to your picture frame</div>
      <div className='ui container' style = {{ marginTop:'100px' }}>
    <SearchBar onSubmit={this.onSearchSubmit} />
    <ImageList images ={this.state.images} />
  </div>

      
    </div>
  
    );
  }
}



export default App;