import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'

import TodoList2 from './TodoList2'

class App extends Component {
	componentWillMount(){
		this.loadBlockchainData()
	}


	async loadBlockchainData(){

	//const wb3 = new Web3(Web3.givenProvider || "http://ec2... does not work")
	const web3 = new Web3( "http://ec2-18-237-68-105.us-west-2.compute.amazonaws.com:8545")
	const network = await web3.eth.net.getNetworkType()
	console.log( "network:", network)
	const accounts = await web3.eth.getAccounts()
	console.log("account", accounts[0])
	this.setState({ account: accounts[0] })	
	const todoList  = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
	this.setState({ todoList }) 
	const taskCount = await todoList.methods.taskCount().call()
	console.log("todoList", todoList)
	this.setState( {taskCount} )
	for (var i = 1;i <= taskCount; i++){
		const task = await todoList.methods.tasks(i).call()
		this.setState({
			tasks: [...this.state.tasks,task]
		})
	}
	console.log("tasks", this.state.tasks)



this.setState({ loading: false })

//this.state = { data : todoList }  // created error!
	}
  constructor(props){
	  	super(props)
	  	this.state = {
			account: '',
			taskCount: 0,
			tasks: [],
			loading: true
			//data: todoList   // new portion

		}


   this.createTask= this.createTask.bind(this)
  }


createTask(content) { 
        this.setState({ loading: true })
        this.state.todoList.methods.createTask(content).send({ from: this.state.account }).once('receipt', (receipt) => {this.setState({ loading: false })})
}

state = { visible: true
};



	render() {
		return ( 
		<div>	

			<TodoList2 tasks={this.state.tasks} createTask={this.createTask } />
 
            <ul id="completedTaskList" className="list-unstyled" >
            </ul>
		</div>

		);
	}
}

export default App;
