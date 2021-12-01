
import React from "react";
import shortid from 'shortid';

import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'



export default class TodoForm extends React.Component {
	componentWillMount(){
	// block this!	this.loadBlockchainData()
	}


	async loadBlockchainData(){

	//const wb3 = new Web3(Web3.givenProvider || "http://ec2... does not work")
	const web3 = new Web3( "http://ec2-54-184-132-47.us-west-2.compute.amazonaws.com:8545")

	const todoList  = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
	// just like the video says  - you have to bind from the parent(s)
	const todoList2 = this.props.dataFromParent
	// dataFromParent = {this.state.data}
	this.setState({ todoList }) 
	const taskCount = await todoList.methods.taskCount().call()
	console.log("todoList", todoList)
	console.log("todoList2", todoList2)
	this.setState( {taskCount} )
		}
//constructor(props){
//super(props);
//this.createTask= this.createTask.bind(this)
//}

state = {
    text: ""
};

handleChange = (event) =>{ 
//(event)=>  {this.props.createTaskP(this.state.text) }

//this.props.createTaskP(this.task)
	this.setState({
		[event.target.name]: event.target.value
});
};

 createTask(content) { 

	//const todoList = this.props.dataFromParent
	// dataFromParent = {this.state.data}
	//this.setState({ todoList }) 
	//console.log("todoList(3)", todoList)
        console.log("entered createTask")
        this.setState({ loading: true })
        this.state.todoList.methods.createTask(content).send({ from: this.state.account }).once('receipt', (receipt) => {
	this.setState({ loading: false })
	})
    }



handleSubmit = (event) => {
	event.preventDefault();
       this.createTaskP(this.task.value)

	
	this.props.onSubmit({
		id: shortid.generate(),
		text: this.state.text,
		complete: false
	});

};





render(){
	return(
		<form >
		<input
	 		id="newTask"
			ref={(input) => this.task = input}
			type = "text"
			className="form-control"
			name="text"
			onChange={this.handleChange}
			value={this.state.text}
			placeholder="todo..."
		/>
<button onClick={() =>this.props.createTaskP("goto KOhl") }>Click tochange *inside form*</button>
<button onClick={() =>this.props.createTaskP(this.state.text) }>Click tochange *inside form22*</button>
  
		</form>
		);
	}
}


