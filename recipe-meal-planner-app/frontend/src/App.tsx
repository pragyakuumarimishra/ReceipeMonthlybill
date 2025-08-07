import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import MealPlanner from './pages/MealPlanner';
import ShoppingList from './pages/ShoppingList';
import { AuthProvider } from './context/AuthContext';
import { MealPlanProvider } from './context/MealPlanContext';
import './styles/main.css';

const App = () => {
    return (
        <AuthProvider>
            <MealPlanProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" component={Recipes} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/meal-planner" component={MealPlanner} />
                        <Route path="/shopping-list" component={ShoppingList} />
                    </Switch>
                </Router>
            </MealPlanProvider>
        </AuthProvider>
    );
};

export default App;