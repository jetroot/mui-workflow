import { Typography } from "@mui/material";
import FlexBetween from "./components/FlexBetween";

const App = () => {
    return (
        <FlexBetween
            sx={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#CD6858",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography variant="h2" component={"h4"}>
                Automated with Github Actions and running on docker.
            </Typography>
        </FlexBetween>
    );
};

export default App;
