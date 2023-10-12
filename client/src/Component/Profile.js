import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const user=useSelector((state)=>state.userReducer.user  )
    const errors= useSelector((state)=>state.userReducer.error)
    console.log(user)
    console.log(errors)

  return (
    <div>

    </div>
  )
}

export default Profile