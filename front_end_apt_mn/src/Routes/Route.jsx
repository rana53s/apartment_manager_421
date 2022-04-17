import { Navbar } from "../Components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { SignUp } from "../Components/SignUpLogin/SignUp";
import { SignIn } from "../Components/SignUpLogin/SignIn";
import { FlatDetails } from "../Components/Flats/FlatDetails";

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path="/sign-in" element={<SignIn/>} />
                <Route exact path="/flatdetailspage" element={<FlatDetails/>} />
            </Routes>
        </>
    );
}