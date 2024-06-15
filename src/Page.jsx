import React from 'react'

const Page = ({question,index}) => {
  return (
    <div id="container">
        <h2>Quize App</h2>
        <br />
        <p>{question{index}.question}</p>
        <ul>
            <li><button>{wans}</button></li>
            <li><button>{rams}</button></li>
        </ul>

        <button>Skip ans</button>

    </div>
  )
}

export default Page
