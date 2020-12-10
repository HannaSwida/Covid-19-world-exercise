import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/components.css'

const Loading = () => {
  return (
    <div className={"Loader"}>
      <div className="spinner-grow text-danger" role="status">
      </div>
      <div className="spinner-grow text-warning" role="status">
      </div>
      <div className="spinner-grow text-info" role="status">
      </div>
    </div>

  )
};

export default Loading;