import {toast} from 'react-toastify';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import './Card.css';

function Card(props){

    let Course = props.Course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(Course.id)){
            setLikedCourses((prev) => prev.filter((cid) => (cid !== Course.id)));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([Course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, Course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="card" key={Course.id}>
            <div className="imageContainer">
                <img src={Course.image.url} alt={Course.title} loading="lazy"></img>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(Course.id) ? 
                        (<FcLike fontSize="1.75rem"/>) :
                        (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
            <div className="course-info">
                <h2>{Course.title}</h2>
                <p>
                    {
                        Course.description.length > 100 ?
                        (Course.description.substring(0,99)+'...')
                        : (Course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;