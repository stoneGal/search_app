import React from 'react'; 



class SearchBar extends React.Component{

  // onInputChange(event){
  //   console.log('i was clicked',event.target.value);
  // }
      state ={ term: ''};
   
      onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
      };
      // onFormSubmit(event){
      //     event.preventDefault();
      //     console.log(this.state.term)
      //   }//

  render() {
   const sizefont={
     fontSize:'20px'
   }
    return ( 
      
      <div className='ui segment' >
        <form 
        onSubmit = {this.onFormSubmit}
        // onSubmit={event => this.onFormSubmit(event)}
         className='ui form'>
          <div className='field' >
            <label style={sizefont} >Search Image</label>
          <input
           type='text'
           value = {this.state.term}
           onChange = {(e) => this.setState({term: e.target.value})}
          //  onChange ={this.onInputChange}
          // onChange = {(e) => console.log (e.target.value)}
          />
          </div>
        </form>
      </div>
     
    );
  }
}


export default SearchBar;