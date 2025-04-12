
import { Button } from "@mui/material";
import  Rating  from "@mui/material/Rating";

export const RatingCus = ()=>{


    return(
        <>
        <Rating name="half-rating" defaultValue={2} precision={0.5}
         sx={{ 
             color : "green",
             "&:hover": {
                 color :"yellow",
                 border : "black"
                }
                
            } } />

            <Button variant="contained" color="warning" 
            disableElevation
            disableFocusRipple
            disableTouchRipple
            sx={{
                color : "green",
                "&:hover" :{
                    transition:"5s all linear",
                    transform : "scale(2)"
                }

            }}
            >Click Me</Button>
            </>
    )
}