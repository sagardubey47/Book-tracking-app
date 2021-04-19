import React,{useEffect} from 'react' 
import "./style.css"
import BookContainer from "../BookContainer/BookContainer"
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVolumes } from '../../redux/action/data.action';
import Loading from "../Loading/Loading"
function MainBody() {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVolumes());
  }, [dispatch])

  const {volumes} = useSelector(state => state.homeVolumes.volumes);

  console.log(volumes);

    return (
        <div className="mainbody-container">
            <header>
                Book Library ...
            </header>
            <div className="book-grid">
               {   volumes !== undefined ?  (volumes.map((volume) => {
                            return <BookContainer key={volume.id} volume={volume} />
                        })) : (<Loading />)    
               }
            </div>
        </div>
    )
}

export default MainBody
