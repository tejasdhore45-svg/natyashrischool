import { useState } from "react";

function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    gender: "",
    city: "",

    guardianName: "",
    phone: "",
    email: "",
    alternativePhone: "",

    previousExperience: "",
    experienceDuration: "",
    previousGuru: "",
    previousBani: "",
    examinations: "",
    examinationDetails: "",
    stagePerformance: "",

    interestedLevel: "",
    otherLevel: "",

    purposes: [],

    classMode: "",
    trainingType: "",
    preferredTiming: "",
    classesPerWeek: "",

    goals: "",
    improvement: "",
    choreography: "",
    performances: "",

    otherArtsExperience: "",
    additionalInformation: "",
    heardFrom: "",
    otherSource: "",

    confirmation: false
  });

  // ==========================================
  // HANDLE NORMAL INPUTS
  // ==========================================

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value
    }));

    // Remove error when user starts correcting the field
    setErrors((previousErrors) => {
      if (!previousErrors[name]) {
        return previousErrors;
      }

      const updatedErrors = { ...previousErrors };
      delete updatedErrors[name];

      return updatedErrors;
    });
  }

  // ==========================================
  // HANDLE PURPOSE CHECKBOXES
  // ==========================================

  function handlePurposeChange(event) {
    const { value, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      purposes: checked
        ? [...previousData.purposes, value]
        : previousData.purposes.filter(
            (purpose) => purpose !== value
          )
    }));
  }

  // ==========================================
  // VALIDATION
  // ==========================================

  function validateForm() {
    const newErrors = {};

    // ------------------------------------------
    // STUDENT NAME
    // ------------------------------------------

    const studentName = formData.studentName.trim();

    if (!studentName) {
      newErrors.studentName =
        "Please enter the student's full name.";
    } else if (
      !/^[A-Za-zÀ-ÖØ-öø-ÿ.' -]{2,60}$/.test(studentName)
    ) {
      newErrors.studentName =
        "Please enter a valid name using letters only.";
    }

    // ------------------------------------------
    // AGE
    // ------------------------------------------

    const age = Number(formData.age);

    if (!formData.age) {
      newErrors.age = "Please enter the student's age.";
    } else if (
      !Number.isInteger(age) ||
      age < 3 ||
      age > 100
    ) {
      newErrors.age =
        "Age must be between 3 and 100 years.";
    }

    // ------------------------------------------
    // GENDER
    // ------------------------------------------

    if (!formData.gender) {
      newErrors.gender =
        "Please select the student's gender.";
    }

    // ------------------------------------------
    // CITY
    // ------------------------------------------

    if (!formData.city.trim()) {
      newErrors.city =
        "Please enter your city or location.";
    } else if (formData.city.trim().length < 2) {
      newErrors.city =
        "Please enter a valid city or location.";
    }

    // ------------------------------------------
    // PHONE
    // ------------------------------------------

    const phone = formData.phone
      .replace(/\s+/g, "")
      .replace(/-/g, "");

    const validIndianPhone =
      /^(?:\+91|91)?[6-9]\d{9}$/;

    if (!phone) {
      newErrors.phone =
        "Please enter a mobile / WhatsApp number.";
    } else if (!validIndianPhone.test(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // ------------------------------------------
    // EMAIL - OPTIONAL
    // ------------------------------------------

    const email = formData.email.trim();

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    // ------------------------------------------
    // ALTERNATIVE PHONE - OPTIONAL
    // ------------------------------------------

    const alternativePhone =
      formData.alternativePhone
        .replace(/\s+/g, "")
        .replace(/-/g, "");

    if (
      alternativePhone &&
      !validIndianPhone.test(alternativePhone)
    ) {
      newErrors.alternativePhone =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // ------------------------------------------
    // PREVIOUS EXPERIENCE
    // ------------------------------------------

    if (!formData.previousExperience) {
      newErrors.previousExperience =
        "Please select your previous Bharatanatyam experience.";
    }

    // ------------------------------------------
    // STAGE PERFORMANCE
    // ------------------------------------------

    if (!formData.stagePerformance) {
      newErrors.stagePerformance =
        "Please select whether the student has performed on stage.";
    }

    // ------------------------------------------
    // INTERESTED LEVEL
    // ------------------------------------------

    if (!formData.interestedLevel) {
      newErrors.interestedLevel =
        "Please select a learning level.";
    }

    // ------------------------------------------
    // CLASS MODE
    // ------------------------------------------

    if (!formData.classMode) {
      newErrors.classMode =
        "Please select your preferred class mode.";
    }

    // ------------------------------------------
    // TRAINING TYPE
    // ------------------------------------------

    if (!formData.trainingType) {
      newErrors.trainingType =
        "Please select your preferred training type.";
    }

    // ------------------------------------------
    // CLASSES PER WEEK
    // ------------------------------------------

    if (!formData.classesPerWeek) {
      newErrors.classesPerWeek =
        "Please select the preferred number of classes per week.";
    }

    // ------------------------------------------
    // CONFIRMATION
    // ------------------------------------------

    if (!formData.confirmation) {
      newErrors.confirmation =
        "Please confirm that the information provided is correct.";
    }

    setErrors(newErrors);

    // ------------------------------------------
    // SCROLL TO FIRST ERROR
    // ------------------------------------------

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField =
        Object.keys(newErrors)[0];

      setTimeout(() => {
        const element =
          document.getElementById(firstErrorField) ||
          document.querySelector(
            `[name="${firstErrorField}"]`
          );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

          if (typeof element.focus === "function") {
            element.focus();
          }
        }
      }, 100);

      return false;
    }

    return true;
  }

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate before sending to Web3Forms
    if (!validateForm()) {
      return;
    }

    const form = event.target;

    const formDataToSend = new FormData(form);

    formDataToSend.set(
      "purposes",
      formData.purposes.length > 0
        ? formData.purposes.join(", ")
        : "Not specified"
    );

    formDataToSend.set(
      "confirmation",
      formData.confirmation
        ? "Agreed"
        : "Not agreed"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        window.scrollTo({
          top:
            document.getElementById("admission")
              ?.offsetTop || 0,
          behavior: "smooth"
        });
      } else {
        alert(
          "Something went wrong while submitting the enquiry. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit the enquiry. Please check your internet connection and try again."
      );
    }
  }

  // ==========================================
  // SUCCESS SCREEN
  // ==========================================

  if (submitted) {
    return (
      <section
        className="admission"
        id="admission"
      >
        <div className="admission-success">

          <span className="section-eyebrow">
            Enquiry Received
          </span>

          <h2>
            Thank You for Your Interest in NatyaShri.
          </h2>

          <div className="section-line"></div>

          <p>
            Your admission enquiry has been successfully
            received. Our team will contact you regarding
            the appropriate level, batch and schedule.
          </p>

          <div className="admission-success-actions">

            <a
              href="https://wa.me/919172890424"
              target="_blank"
              rel="noopener noreferrer"
              className="admission-button"
            >
              Chat on WhatsApp
            </a>

            <a
              href="tel:+919172890424"
              className="admission-button admission-button-outline"
            >
              Call NatyaShri
            </a>

          </div>

        </div>
      </section>
    );
  }

  // ==========================================
  // MAIN FORM
  // ==========================================

  return (
    <section
      className="admission"
      id="admission"
    >

      <div className="admission-container">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Begin Your Journey
          </p>

          <h2>
            Bharatanatyam Admission & Enquiry
          </h2>

          <div className="section-line"></div>

          <p className="admission-intro">
            Namaskaram! 🙏 Thank you for your interest in
            learning Bharatanatyam with NatyaShri School of
            Performing Arts – Tanjore Bani.
          </p>

          <p className="admission-intro admission-intro-secondary">
            Please share the following details so our team
            can understand your requirements and guide you
            towards the appropriate level, batch and schedule.
          </p>

        </div>


        {/* =====================================
            FORM
        ===================================== */}

        <form
          className="admission-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* =====================================
              WEB3FORMS
          ===================================== */}

          <input
            type="hidden"
            name="access_key"
            value="1300076d-4973-41e1-a391-34cb3f22c4dc"
          />

          <input
            type="hidden"
            name="subject"
            value="New Bharatanatyam Admission Enquiry - NatyaShri"
          />

          <input
            type="hidden"
            name="from_name"
            value="NatyaShri Admission Form"
          />

          <input
            type="hidden"
            name="botcheck"
            value=""
          />


          {/* =====================================
              01 STUDENT DETAILS
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>01</span>

              <div>
                <h3>Student Details</h3>

                <p>
                  Tell us a little about the student.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* STUDENT NAME */}

              <div className="form-field">

                <label htmlFor="studentName">
                  Full Name of Student *
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  value={formData.studentName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

                {errors.studentName && (
                  <small className="form-error">
                    {errors.studentName}
                  </small>
                )}

              </div>


              {/* AGE */}

              <div className="form-field">

                <label htmlFor="age">
                  Age *
                </label>

                <input
                  id="age"
                  name="age"
                  type="number"
                  min="3"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

                {errors.age && (
                  <small className="form-error">
                    {errors.age}
                  </small>
                )}

              </div>


              {/* GENDER */}

              <div className="form-field">

                <label htmlFor="gender">
                  Gender *
                </label>

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select gender
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

                {errors.gender && (
                  <small className="form-error">
                    {errors.gender}
                  </small>
                )}

              </div>


              {/* CITY */}

              <div className="form-field">

                <label htmlFor="city">
                  City / Location *
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Example: Solapur"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

                {errors.city && (
                  <small className="form-error">
                    {errors.city}
                  </small>
                )}

              </div>

            </div>

          </div>


          {/* =====================================
              02 GUARDIAN DETAILS
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>02</span>

              <div>
                <h3>Parent / Guardian Details</h3>

                <p>
                  Contact details for communication.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* GUARDIAN NAME */}

              <div className="form-field">

                <label htmlFor="guardianName">
                  Parent / Guardian Name
                </label>

                <input
                  id="guardianName"
                  name="guardianName"
                  type="text"
                  value={formData.guardianName}
                  onChange={handleChange}
                />

              </div>


              {/* PHONE */}

              <div className="form-field">

                <label htmlFor="phone">
                  Mobile / WhatsApp Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />

                {errors.phone && (
                  <small className="form-error">
                    {errors.phone}
                  </small>
                )}

              </div>


              {/* EMAIL */}

              <div className="form-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                {errors.email && (
                  <small className="form-error">
                    {errors.email}
                  </small>
                )}

              </div>


              {/* ALTERNATIVE PHONE */}

              <div className="form-field">

                <label htmlFor="alternativePhone">
                  Alternative Contact Number
                </label>

                <input
                  id="alternativePhone"
                  name="alternativePhone"
                  type="tel"
                  value={formData.alternativePhone}
                  onChange={handleChange}
                  inputMode="tel"
                />

                {errors.alternativePhone && (
                  <small className="form-error">
                    {errors.alternativePhone}
                  </small>
                )}

              </div>

            </div>

          </div>


          {/* =====================================
              03 PREVIOUS EXPERIENCE
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>03</span>

              <div>

                <h3>
                  Previous Bharatanatyam Experience
                </h3>

                <p>
                  This helps the Guru understand your current level.
                </p>

              </div>

            </div>


            <div className="form-grid">

              {/* PREVIOUS EXPERIENCE */}

              <div className="form-field">

                <label htmlFor="previousExperience">
                  Have you learned Bharatanatyam before? *
                </label>

                <select
                  id="previousExperience"
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>

                  <option value="Currently Learning">
                    Currently learning
                  </option>

                </select>

                {errors.previousExperience && (
                  <small className="form-error">
                    {errors.previousExperience}
                  </small>
                )}

              </div>


              {/* EXPERIENCE DURATION */}

              <div className="form-field">

                <label htmlFor="experienceDuration">
                  Duration of Previous Training
                </label>

                <input
                  id="experienceDuration"
                  name="experienceDuration"
                  type="text"
                  placeholder="Example: 2 years"
                  value={formData.experienceDuration}
                  onChange={handleChange}
                />

              </div>


              {/* PREVIOUS GURU */}

              <div className="form-field">

                <label htmlFor="previousGuru">
                  Previous / Current Guru or Teacher
                </label>

                <input
                  id="previousGuru"
                  name="previousGuru"
                  type="text"
                  value={formData.previousGuru}
                  onChange={handleChange}
                />

              </div>


              {/* PREVIOUS BANI */}

              <div className="form-field">

                <label htmlFor="previousBani">
                  Style / Bani, if known
                </label>

                <input
                  id="previousBani"
                  name="previousBani"
                  type="text"
                  placeholder="Example: Tanjore Bani"
                  value={formData.previousBani}
                  onChange={handleChange}
                />

              </div>


              {/* EXAMINATIONS */}

              <div className="form-field">

                <label htmlFor="examinations">
                  Bharatanatyam Examination / Certification
                </label>

                <select
                  id="examinations"
                  name="examinations"
                  value={formData.examinations}
                  onChange={handleChange}
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="No">
                    No
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                </select>

              </div>


              {/* EXAMINATION DETAILS */}

              <div className="form-field">

                <label htmlFor="examinationDetails">
                  Examination / Certification Details
                </label>

                <input
                  id="examinationDetails"
                  name="examinationDetails"
                  type="text"
                  placeholder="Level / examination name"
                  value={formData.examinationDetails}
                  onChange={handleChange}
                />

              </div>


              {/* STAGE PERFORMANCE */}

              <div className="form-field form-field-full">

                <label htmlFor="stagePerformance">
                  Have you performed Bharatanatyam on stage? *
                </label>

                <select
                  id="stagePerformance"
                  name="stagePerformance"
                  value={formData.stagePerformance}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>

                </select>

                {errors.stagePerformance && (
                  <small className="form-error">
                    {errors.stagePerformance}
                  </small>
                )}

              </div>

            </div>

          </div>


          {/* =====================================
              04 LEVEL
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>04</span>

              <div>

                <h3>
                  Level You Are Interested In
                </h3>

                <p>
                  Choose the learning path that best matches your goal.
                </p>

              </div>

            </div>


            <div className="radio-options">

              {[
                [
                  "Beginner / Basics",
                  "I am completely new to Bharatanatyam."
                ],
                [
                  "Intermediate",
                  "I have previous training and want to continue or improve."
                ],
                [
                  "Advanced",
                  "I want advanced choreography, Abhinaya, Margam and performance training."
                ],
                [
                  "Margam Training",
                  "Focused training in Margam items and choreography."
                ],
                [
                  "Theory & Examination Preparation",
                  "Preparation for Bharatanatyam theory and practical examinations."
                ],
                [
                  "Nattuvangam Training",
                  "I am interested in learning Nattuvangam."
                ],
                [
                  "Teacher Training",
                  "Professional teaching, Nattuvangam and methodology training."
                ],
                [
                  "Certification / Examination Course",
                  "Structured certification-oriented learning."
                ],
                [
                  "Other Special Training",
                  "A specific training requirement."
                ]
              ].map(([title, description]) => (

                <label
                  className="radio-card"
                  key={title}
                >

                  <input
                    type="radio"
                    name="interestedLevel"
                    value={title}
                    checked={
                      formData.interestedLevel === title
                    }
                    onChange={handleChange}
                    required
                  />

                  <span className="radio-card-content">

                    <strong>
                      {title}
                    </strong>

                    <small>
                      {description}
                    </small>

                  </span>

                </label>

              ))}

            </div>

            {errors.interestedLevel && (
              <small className="form-error">
                {errors.interestedLevel}
              </small>
            )}


            <div className="form-field form-field-other">

              <label htmlFor="otherLevel">
                Other Requirement
              </label>

              <input
                id="otherLevel"
                name="otherLevel"
                type="text"
                placeholder="Please mention your requirement"
                value={formData.otherLevel}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* =====================================
              05 PURPOSE
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>05</span>

              <div>

                <h3>
                  Purpose of Learning Bharatanatyam
                </h3>

                <p>
                  Select all options that apply to you.
                </p>

              </div>

            </div>


            <div className="checkbox-grid">

              {[
                "Personal interest / hobby",
                "Complete beginner training",
                "Improve technique",
                "Learn choreography",
                "Stage performance",
                "Margam preparation",
                "Abhinaya training",
                "Examination / certification",
                "Professional performance",
                "Teacher training",
                "Nattuvangam",
                "Cultural and traditional learning",
                "Fitness, discipline & overall development",
                "Continue training after learning from another Guru"
              ].map((purpose) => (

                <label
                  className="checkbox-option"
                  key={purpose}
                >

                  <input
                    type="checkbox"
                    name="purpose"
                    value={purpose}
                    checked={formData.purposes.includes(purpose)}
                    onChange={handlePurposeChange}
                  />

                  <span>
                    {purpose}
                  </span>

                </label>

              ))}

            </div>


            <div className="form-field form-field-other">

              <label htmlFor="otherPurpose">
                Other Purpose
              </label>

              <input
                id="otherPurpose"
                name="otherPurpose"
                type="text"
                placeholder="Please mention"
                value={formData.otherPurpose || ""}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* =====================================
              06 PREFERRED TRAINING
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>06</span>

              <div>

                <h3>
                  Preferred Training
                </h3>

                <p>
                  Tell us about your preferred class arrangement.
                </p>

              </div>

            </div>


            <div className="form-grid">

              {/* CLASS MODE */}

              <div className="form-field">

                <label htmlFor="classMode">
                  Preferred Mode of Classes *
                </label>

                <select
                  id="classMode"
                  name="classMode"
                  value={formData.classMode}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select mode
                  </option>

                  <option value="Online">
                    Online
                  </option>

                  <option value="Offline">
                    Offline
                  </option>

                  <option value="Both / Flexible">
                    Both / Flexible
                  </option>

                </select>

                {errors.classMode && (
                  <small className="form-error">
                    {errors.classMode}
                  </small>
                )}

              </div>


              {/* TRAINING TYPE */}

              <div className="form-field">

                <label htmlFor="trainingType">
                  Preferred Type of Training *
                </label>

                <select
                  id="trainingType"
                  name="trainingType"
                  value={formData.trainingType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select type
                  </option>

                  <option value="Group Classes">
                    Group Classes
                  </option>

                  <option value="One-to-One Personal Training">
                    One-to-One Personal Training
                  </option>

                  <option value="Both">
                    Both
                  </option>

                </select>

                {errors.trainingType && (
                  <small className="form-error">
                    {errors.trainingType}
                  </small>
                )}

              </div>


              {/* TIMING */}

              <div className="form-field">

                <label htmlFor="preferredTiming">
                  Preferred Class Timing
                </label>

                <input
                  id="preferredTiming"
                  name="preferredTiming"
                  type="text"
                  placeholder="Example: Weekend evening"
                  value={formData.preferredTiming}
                  onChange={handleChange}
                />

              </div>


              {/* CLASSES PER WEEK */}

              <div className="form-field">

                <label htmlFor="classesPerWeek">
                  Classes Per Week *
                </label>

                <select
                  id="classesPerWeek"
                  name="classesPerWeek"
                  value={formData.classesPerWeek}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select frequency
                  </option>

                  <option value="1">
                    1
                  </option>

                  <option value="2">
                    2
                  </option>

                  <option value="3 or more">
                    3 or more
                  </option>

                  <option value="Flexible">
                    Flexible
                  </option>

                </select>

                {errors.classesPerWeek && (
                  <small className="form-error">
                    {errors.classesPerWeek}
                  </small>
                )}

              </div>

            </div>

          </div>


          {/* =====================================
              07 GOALS
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>07</span>

              <div>

                <h3>
                  Student's Goals
                </h3>

                <p>
                  Help the Guru understand your aspirations.
                </p>

              </div>

            </div>


            {/* GOALS */}

            <div className="form-field">

              <label htmlFor="goals">
                What would you like to achieve?
              </label>

              <textarea
                id="goals"
                name="goals"
                rows="5"
                placeholder="Tell us about your Bharatanatyam goals..."
                value={formData.goals}
                onChange={handleChange}
              />

            </div>


            {/* IMPROVEMENT */}

            <div className="form-field">

              <label htmlFor="improvement">
                What would you specifically like to improve?
              </label>

              <textarea
                id="improvement"
                name="improvement"
                rows="5"
                placeholder="Technique, Abhinaya, Margam, performance, etc."
                value={formData.improvement}
                onChange={handleChange}
              />

            </div>


            <div className="form-grid">

              {/* CHOREOGRAPHY */}

              <div className="form-field">

                <label htmlFor="choreography">
                  Interested in regular choreography?
                </label>

                <select
                  id="choreography"
                  name="choreography"
                  value={formData.choreography}
                  onChange={handleChange}
                >

                  <option value="">
                    Select
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>

                  <option value="Maybe">
                    Maybe
                  </option>

                </select>

              </div>


              {/* PERFORMANCES */}

              <div className="form-field">

                <label htmlFor="performances">
                  Interested in stage performances?
                </label>

                <select
                  id="performances"
                  name="performances"
                  value={formData.performances}
                  onChange={handleChange}
                >

                  <option value="">
                    Select
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>

                  <option value="Maybe">
                    Maybe
                  </option>

                </select>

              </div>

            </div>

          </div>


          {/* =====================================
              08 ADDITIONAL INFORMATION
          ===================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <span>08</span>

              <div>

                <h3>
                  Additional Information
                </h3>

                <p>
                  Anything else you would like the Guru to know?
                </p>

              </div>

            </div>


            {/* OTHER ARTS */}

            <div className="form-field">

              <label htmlFor="otherArtsExperience">
                Previous Experience in Other Performing Arts
              </label>

              <textarea
                id="otherArtsExperience"
                name="otherArtsExperience"
                rows="4"
                placeholder="Classical dance, music, theatre, etc."
                value={formData.otherArtsExperience}
                onChange={handleChange}
              />

            </div>


            {/* ADDITIONAL INFORMATION */}

            <div className="form-field">

              <label htmlFor="additionalInformation">
                Additional Information
              </label>

              <textarea
                id="additionalInformation"
                name="additionalInformation"
                rows="4"
                placeholder="Anything else you would like NatyaShri to know..."
                value={formData.additionalInformation}
                onChange={handleChange}
              />

            </div>


            {/* HEARD FROM */}

            <div className="form-field">

              <label htmlFor="heardFrom">
                How did you hear about NatyaShri?
              </label>

              <select
                id="heardFrom"
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleChange}
              >

                <option value="">
                  Select an option
                </option>

                <option value="Instagram">
                  Instagram
                </option>

                <option value="Facebook">
                  Facebook
                </option>

                <option value="YouTube">
                  YouTube
                </option>

                <option value="Google">
                  Google
                </option>

                <option value="WhatsApp">
                  WhatsApp
                </option>

                <option value="Friend / Student Referral">
                  Friend / Student Referral
                </option>

                <option value="Existing Student">
                  Existing Student
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* OTHER SOURCE */}

            <div className="form-field">

              <label htmlFor="otherSource">
                Other Source
              </label>

              <input
                id="otherSource"
                name="otherSource"
                type="text"
                value={formData.otherSource}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* =====================================
              09 CONFIRMATION
          ===================================== */}

          <div className="form-confirmation">

            <div className="confirmation-heading">

              <span>09</span>

              <div>

                <h3>
                  Confirmation
                </h3>

                <p>
                  Please confirm before submitting your enquiry.
                </p>

              </div>

            </div>


            <label className="confirmation-checkbox">

              <input
                id="confirmation"
                type="checkbox"
                name="confirmation"
                checked={formData.confirmation}
                onChange={handleChange}
                required
              />

              <span>
                I confirm that the information provided above
                is correct to the best of my knowledge. I understand
                that the final level and batch will be decided
                after discussion or assessment with the Guru.
              </span>

            </label>

            {errors.confirmation && (
              <small className="form-error">
                {errors.confirmation}
              </small>
            )}

          </div>


          {/* =====================================
              SUBMIT
          ===================================== */}

          <div className="admission-submit-area">

            <p>
              🌸 Thank you for your interest in NatyaShri.
            </p>

            <button
              type="submit"
              className="admission-submit"
            >
              Submit Admission Enquiry →
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Admission;