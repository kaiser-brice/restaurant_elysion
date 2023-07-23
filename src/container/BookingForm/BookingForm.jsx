import React, { useState } from "react";
import { SubHeading } from "../../components";
import { useTranslation } from "react-i18next";

const BookingForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    date: "",
    time: "",
    numberOfPeople: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here.
    // For simplicity, let's assume all fields are required.
    if (
      !formData.email ||
      !formData.fullName ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.numberOfPeople
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Check if the number of people is within the allowed limit (10).
    if (parseInt(formData.numberOfPeople) > 10) {
      alert("The number of people cannot exceed 10.");
      return;
    }

    // For this example, we'll just set the bookingSuccess state to true to show the confirmation message.
    setBookingSuccess(true);

    // Automatically reset the form after 5 seconds
    setTimeout(() => {
      setFormData({
        email: "",
        fullName: "",
        phone: "",
        date: "",
        time: "",
        numberOfPeople: "",
      });
      setBookingSuccess(false);
    }, 5000);
  };

  // Calculate the minimum date (current date) for the date input
  const today = new Date();
  const minDate = today.toISOString().split("T")[0]; // Convert to the format "YYYY-MM-DD"

  return (
    <div className="app__newsletter .app_bg" id="booking">
      <div className="app__newsletter-heading">
        <SubHeading title={t("booking.subheading")} />
        <h1 className="headtext__cormorant">{t("booking.heading")}</h1>
      </div>
      {bookingSuccess ? (
        <div>
          <p className="headtext__cormorant">{t("booking.successprompt")}</p>
        </div>
      ) : (
        <div className="app__newsletter-heading booking_form ">
          <form className="booking_form" onSubmit={handleSubmit}>
            <div>
              <br />
              <label className="p__opensans">{t("booking.email")} </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: 200 }}
              />
            </div>
            <div>
              <br />
              <label className="p__opensans">{t("booking.fullname")} </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{ width: 200 }}
              />
            </div>
            <div>
              <br />
              <label className="p__opensans">{t("booking.phone")} </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ width: 200 }}
              />
            </div>
            <div>
              <br />
              <label className="p__opensans">{t("booking.date")} </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate} // Set the minimum date to the current date
                required
              />
            </div>
            <div>
              <br />
              <label className="p__opensans">{t("booking.time")} </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <br />
              <label className="p__opensans">{t("booking.number")}</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                min="1"
                max="10" // Set the maximum number of people to 10.
                required
              />
            </div>
            <br />
            <button type="submit" className="custom__button">
              {t("booking.submit")}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
