import React from 'react'

function ForeCast() {
  return (
    <div >
        <div className="flex items-center justify-start mt-6  text-green-600">
            <p className="text-white font-medium uppercase">title</p>
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between  text-green-600">
            <div  className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">description</p>
                <img  className="w-12 my-1" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="temperature"  />
                <p className="font-medium">temperature</p>
            </div>
        </div>
    </div>
  )
}

export default ForeCast