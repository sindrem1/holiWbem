import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HotelsHome from "./components/hotels/HotelsHome";
import BergenHome from "./components/bergen/BergenHome";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Bookings from "./components/admin/Bookings";
import CheckBooking from "./components/admin/CheckBooking";
import Contacts from "./components/admin/Contacts";
import CheckContact from "./components/admin/CheckContact";
import Dashboard from "./components/admin/Dashboard";
import Nav from "./components/layout/Nav";
import AdminNav from "./components/layout/AdminNav";
import Contact from "./components/contact/Contact";
import Hotelspecifics from "./components/hotels/HotelSpecific"
import Booking from "./components/enquiry/Enquiry"
import EnquiryForm from "./components/enquiry/EnquirySpecific"
import Footer from "./components/layout/Footer";
import "./App.scss";


function App() {
    return (
        <AuthContextProvider>
            <Router>
            <Nav />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/hotels" component={HotelsHome} />
                        <Route path="/bergen" component={BergenHome} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/hotel/:id" component={Hotelspecifics} />
                        <Route path="/enquiry/:id" component={EnquiryForm} />
                        <ProtectedRoute path="/admin" exact component={Dashboard} />
                        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                        <ProtectedRoute path="/admin/bookings" exact component={Bookings} />
                        <ProtectedRoute path="/admin/boookings/details/:id" exact component={CheckBooking} />
                        <ProtectedRoute path="/admin/contacts" exact component={Contacts} />
                        <ProtectedRoute path="/admin/contacts/details/:id" exact component={CheckContact} />
                        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                        <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                        <Redirect to="/" />
                    </Switch>
                </Container>

            <Footer/>
            <AdminNav />
            </Router>
        </AuthContextProvider>
        
    );
}

export default App;
