import express from "express";
const goalRouter = express.Router();
import {
    getGoals,
    addAGoal,
    updateAGoal,
    deleteGoal,

} from "../controller/goalController.js";


goalRouter.get('/goals', getGoals);


goalRouter.post('/new', addAGoal);


goalRouter.put('/:id', updateAGoal);

goalRouter.delete('/:id', deleteGoal);



export default goalRouter;