import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './HomeMainbar.css';
import QuestionList from "./QuestionList";
const HomeMainbar = () => {
console.log(123)
  const location =useLocation()
  const user = null ;
  const navigate =useNavigate()
 var questionsList =[{
  id:1,
  votes:3,
  noOfAnswer:2,
  questionTitle:"What is a function",
  questionBody:"It meant to be",
  questionTags:["java", "node js","react js","mongo"],
 userPosted:"mano",
 askedOn:"jan 1"
 },{
  id:2,
  votes:0,
  noOfAnswer:0,
  questionTitle:"What is a function",
  questionBody:"It meant to be",
  questionTags:["java", "node js","react js","mongo"],
 userPosted:"mano",
  askedOn:"jan 1"
},{
  
    id:3,
    votes:1,
    noOfAnswer:0,
    questionTitle:"What is a function",
    questionBody:"It meant to be",
    questionTags:["java", "node js","react js","mongo"],
  userPosted:"mano",
  askedOn:"jan 1"
 }]
 
 const checkAuth =()=>{
  if(user ===null){
    alert("login or signup to ask a question")
    navigate('/Auth')
    }else{
    navigate('/AskQuestion')
     }
  return (
    <div   className="main-bar">
   <div  className="main-bar-header">
   {
  location.pathname === '/' ? <h1>Top Question</h1>:<h1>All Question</h1>
  }
     <button onClick={checkAuth} className="ask-btn-">Ask Question</button>
    </div> 
    <div>{
       questionsList === null ?
       <h1>Loading....</h1>:
       <>
       <p>{questionsList.length}question</p>
       <QuestionList questionsList={questionsList}/> 
       </>
    
    }    </div>
    </div>
  )
 }
};


export default HomeMainbar
