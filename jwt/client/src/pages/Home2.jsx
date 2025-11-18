import React from 'react'

const Home2 = () => {
  return (


    
    <div>
      <h1>Upload File using Multer</h1>
      Upload File: <input type="file" onChange={handleImage}/>
      <button onClick={handleUpload}></button>
    </div>
  )
}

export default Home2
