import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Auth from './component/Page/Auth/Auth.jsx';
import Home from './component/Page/Home/Home.jsx';
import Questions from './component/Page/Question/Question.jsx';
import AskQuestions from './component/Page/AskQuestion/AskQuestion.jsx';
const AllRoutes = () => {
  return (
    <><Routes>
      <Route   path='/' element={<Home/>}/>
      <Route  path='/Auth'  element={<Auth/>} />
      <Route  path='/Questions' element={<Questions/>} />
      <Route  path='/AskQuestions' element={<AskQuestions/>} />
    </Routes>
   </>
        )
        }
        export default AllRoutes
    