import Card from './Card';
import './Cards.css';
import {useState} from 'react';

function Cards({courses, category}){

    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () =>{
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return (
        <div className='cards'>
            {
                getCourses().map((Course)=>{
                        return <Card Course={Course} key={Course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                    }
                )
            }
        </div>
    );
}

export default Cards;