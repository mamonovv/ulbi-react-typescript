import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./conponents/UsersPage";
import TodosPage from "./conponents/TodosPage";
import UserItemPage from "./conponents/UserItemPage";
import TodoItemPage from "./conponents/TodoItemPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={'/users'}>Пользователи</NavLink>
                    <NavLink to={'/todos'}>Список Дел</NavLink>
                </div>
                <Routes>
                    <Route path='/users' element={<UsersPage/>}/>
                    <Route path='/todos' element={<TodosPage/>}/>
                    <Route path='/users/:id' element={<UserItemPage/>}/>
                    <Route path='/todos/:id' element={<TodoItemPage/>}/>
                </Routes>
            </div>
            
        </BrowserRouter>
    );
}

export default App;
