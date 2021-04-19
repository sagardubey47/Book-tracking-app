import React from 'react'
import "./style.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import AppsIcon from '@material-ui/icons/Apps';
import ViewListIcon from '@material-ui/icons/ViewList';

function Navbar() {
    return ( 
        <div className="navbar-container">
            <div className="library">
               <h3>Library</h3>
               <div className="my-books row">
                  <PlayCircleOutlineIcon /> <span>My Books</span>
               </div>
               <div className="new-book row">
                  <AddCircleOutlineIcon size={23}/> <span>Add New Book</span>
               </div>
            </div>
            <div className="settigs">
                <h3>Settings</h3>  
                <div className="mode row"> 
                <InvertColorsIcon /> <span>Dark Mode</span>
                </div>
                <div className="row">
                    <AppsIcon /> <ViewListIcon /> <span>View</span> 
                </div>
            </div>
        </div>
    )
}

export default Navbar
