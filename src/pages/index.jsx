import React, { useState, useEffect } from "react";
import { CircleCheck, CircleCheckBig, CalendarDays, Home } from "lucide-react";

import cardsData from "./login/cardData.js";
import Header from "../Components/Navbar/Header.jsx";
import AboutUs from "../Components/Landing/Components_of_Landing/AboutUs.jsx";

import "../pages/Landing.css";

function Landing() {
    const [check, setCheck] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [bookedHomestay, setBookedHomestay] = useState(null);
    const [displayCalendar, setDisplayCalendar] = useState(false);
    const [displayLocation, setDisplayLocation] = useState(false);

    const display = () => {
        setDisplayCalendar(!displayCalendar);
    };

    const location = () => {
        setDisplayLocation(!displayLocation);
    };

    // useEffect(() => {
    //     const bookedHomestays = localStorage.getItem("bookedHomestays");
    //     if (bookedHomestays) {
    //         const parsedBookedHomestays = JSON.parse(bookedHomestays);
    //         if (
    //             Array.isArray(parsedBookedHomestays) &&
    //             parsedBookedHomestays.length > 0
    //         ) {
    //             const lastBookedHomestay =
    //                 parsedBookedHomestays[parsedBookedHomestays.length - 1];
    //             setBookedHomestay(lastBookedHomestay);
    //             setIsBooked(true);
    //         }
    //     }
    // }, []);

    const handleClick = () => {
        if (!check) {
            window.location.href = "/login";
        }
    };

    const change = () => {
        const aboutUsElement = document.getElementById("aboutus");
        aboutUsElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="Landing">
            <div className="Home">
                <Header />

                <div className="sloganContainer">
                    <p className="slogan">* Book Perfect Stay</p>
                    <p className="slogan">For Your Vacation</p>
                </div>
                <div className="bookButtonContainer" onClick={handleClick}>
                    <div className="bookButton">
                        <div className="main">
                            <p>
                                Book your <br />
                                stay <br /> ⬊
                            </p>
                        </div>
                    </div>
                </div>
                <div className="goDown" onClick={change}>
                    ⬇
                </div>
            </div>
            {isBooked && bookedHomestay && (
                <div className="booked">
                    <div className="name-container">
                        <div className="name">
                            <CircleCheck />
                            <p>{bookedHomestay.name}</p>
                        </div>
                        <div className="dis">
                            <CalendarDays
                                className="CalendarDays"
                                onClick={display}
                                style={{ cursor: "pointer" }}
                            />
                            <Home
                                className="HomeButton"
                                onClick={location}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <div className="details-container">
                        {displayCalendar && (
                            <div className="cf">
                                <div className="top">
                                    <div className="left">
                                        <CircleCheckBig size={50} />
                                        <p>
                                            Booking <br />
                                            is confirmed!
                                        </p>
                                    </div>
                                    <div className="right">
                                        <img
                                            src="https://2.bp.blogspot.com/-Gto-wMNlGOc/XNsejtfZKZI/AAAAAAABS44/jhrXCTrFAZUwqvfhLIoliR0ns8eRDaH0wCLcBGAs/s1600/4073.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="de">
                                        <p>Check in</p>
                                        <p>{bookedHomestay.checkInDate}</p>
                                    </div>
                                    <div className="de">
                                        <p>Check out</p>
                                        <p>{bookedHomestay.checkOutDate}</p>
                                    </div>
                                    <div className="de">
                                        <p>Guests</p>
                                        <p>5 people</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {displayLocation && (
                            <div className="info">
                                <div className="accommodation">
                                    <div className="img-container"></div>
                                    <div className="d">
                                        <div className="yourstay">
                                            <p>Your stay:</p>
                                            <a href="facebook.com">Get directions</a>
                                        </div>
                                        <div className="hsinfo">
                                            <p>{bookedHomestay.name}</p>
                                            <p>Đồng bà, đồng xuân</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-infoo">
                                    <div className="bank">
                                        <p>Apple Pay</p>
                                    </div>
                                    <div className="status">
                                        <p>Confirmed</p>
                                    </div>
                                </div>
                                <div className="edit-container">
                                    <button className="booking-details">Booking details</button>
                                    <button className="edityyy">Edit information</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className="homestay-container">
                <div className="homestay-view">
                    <div className="card-container">
                        {cardsData.map((card) => (
                            <div key={card.id} className="homestay-card">
                                <div
                                    className="rectangle"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="content-container">
                                        <p className="hs_name">{card.name}</p>
                                        <p className="hs_search">Search</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="homestay-title">
                        Unlock the Art of Sophisticated Stays
                    </p>
                    <p className="homestay-titlee">From 2023</p>
                </div>
                <div className="homestay-review">
                    <p>
                        We understand that accommodations play a pivotal role in shaping
                        travel experience, and that’s why we are dedicated to curating an
                        exclusive collection of exquisite suites in the world’s most
                        desirable destinations.
                    </p>
                    <div className="review-container">
                        <div className="review-score">4,9 ⭐</div>
                        <div className="review-score">Guests' Reviewers</div>
                    </div>
                </div>
            </div>
            <div className="AboutUs" id="aboutus">
                <AboutUs />
            </div>
        </div>
    );
}

export default Landing;
