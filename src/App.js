import React, { Component } from 'react';
import Framer from './components/framer';
import './components/gall.css';
import './App.css';

class App extends Component {
	state ={
		loading:true,
		images : null,
	}
	async componentDidMount(){
		const apiUrl = "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";
		const response = await fetch(apiUrl,{
			mode:"cors"
		});
		const data = await response.json();
		this.setState({images:data,loading:false});
		console.log(this.state.images);
	}
	
  render() {
    return (
			<div className="gallery">
				{this.state.loading || !this.state.images ? 
				<div>loading...</div> : 
				<div>
					{
					this.state.images.map(function(name,index){
						return <Framer key={name.id} source={name.urls.small} alter={name.alt_description}/>;
					})
					}
				</div>}
			</div>
    );
  }
}

export default App;