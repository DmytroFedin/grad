import React from "react"

const signUp = () => {
  return (
    <>

    <h1>Sign Up!</h1>

    <form action="/register" method="post">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Sign Up</button>
    </form>

    </>
  )
}


export default signUp;