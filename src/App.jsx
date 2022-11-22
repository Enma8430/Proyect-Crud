import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios'
import UsersFrom from './components/UsersFrom'

function App() {

  const [userList, setUserList] = useState([])

  const[userSelector, setUserSelector] = useState(null)

 // const[carsDelete, setCarsDelete]= useState()

    useEffect(()=>{
        axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUserList(res.data))
    }, [])
    console.log(userList);


    const getUser = ()=>{
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data))
  }

  const selectuser = (user)=> {
    //alert(user.brand)
    setUserSelector(user)
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=> getUser())
}

  const deselectUser = () => setUserSelector(null)

  return (
    <div className="App">
      <UsersFrom 
      getUser = {getUser} 
      userSelector = {userSelector}
      deselectUser = {deselectUser}
      />
      <UserList 
      userList = {userList} 
      selectuser={selectuser}
      deleteUser={deleteUser}
      />
    </div>
  )
}

export default App
