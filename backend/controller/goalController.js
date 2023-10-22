

//@desc get goals
//@route GET /api/v1/goals
//@access private

const getGoals = async (req,res)=>{
        try{
        if(!req.body.text){
            res.status(400);
            throw new Error("Please add a text field")
        }
        res.status(200).json({message:"All goals"})
    }
    catch(err){
        res.status(400).json({message:" Error in getting goals"});
    }
}

//@desc add a goal
//@route POST /api/v1/new
//@access private

const addAGoal = async (req,res)=>{
    try{
        res.status(200).json({message:"New goal added"});
    }
    catch(err){
        res.status(400).json({message: "Error in adding new goal", err});
    }
};


//@desc update a goal
//@route PUT /api/v1/:id
//@access private
const updateAGoal = async (req,res)=>{
    try{
        res.status(200).json({message: `Update goal ${req.params.id}`});
    }
    catch(err){
        res.status(400).json({message: "Error in updating goal", err});
    }
}

//@desc delete a goal
//@route DELETE /api/v1/:id
//@access private

const deleteGoal = async (req,res)=>{
    try{
        res.status(200).json({message: `Delete goal ${req.params.id}`});
    }
    catch(err) {
        res.status(400).json({message: "Error in deleting goal", err});
    }
}


export {
    getGoals,
    addAGoal,
    updateAGoal,
    deleteGoal
}