import { useEffect, useRef, useState } from "react";

// ============================================
// NATYASHRI - ADMISSION ENQUIRY FORM
// ============================================

// Web3Forms Access Key
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "1300076d-4973-41e1-a391-34cb3f22c4dc";

// Initial Form Data
const INITIAL_FORM = {
  studentName: "",
  age: "",
  guardianName: "",
  phone: "",
  email: "",
  city: "",
};

// Indian Mobile Number Validation
const PHONE_REGEX = /^(?:\+91|91)?[6-9]\d{9}$/;

function Admission() {

  // ============================================
  // 1. STATE MANAGEMENT
  // ============================================

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const reviewButtonRef = useRef(null);
  const modalRef = useRef(null);
  const editButtonRef = useRef(null);

  // Parent name is required for students under 18
  const isMinor =
    formData.age !== "" &&
    Number(formData.age) < 18;

  // ============================================
  // 2. HANDLE INPUT CHANGES
  // ============================================

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear the field error
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitError("");
  }

  // ============================================
  // 3. FORM VALIDATION
  // ============================================

  function validateForm() {

    const newErrors = {};

    // Student Name
    const studentName = formData.studentName.trim();

    if (!studentName) {
      newErrors.studentName =
        "Please enter the student's full name.";
    } else if (
      studentName.length < 2 ||
      studentName.length > 80
    ) {
      newErrors.studentName =
        "Name must contain between 2 and 80 characters.";
    }

    // Student Age
    if (!formData.age) {
      newErrors.age = "Please enter the student's age.";
    } else if (
      !Number.isInteger(Number(formData.age)) ||
      Number(formData.age) < 3 ||
      Number(formData.age) > 100
    ) {
      newErrors.age =
        "Please enter a valid age between 3 and 100.";
    }

    // Parent / Guardian Name
    if (isMinor && !formData.guardianName.trim()) {
      newErrors.guardianName =
        "Parent / Guardian name is required for students under 18.";
    }

    // Mobile Number
    const phone = formData.phone.replace(/[\s-]/g, "");

    if (!phone) {
      newErrors.phone =
        "Please enter your mobile number.";
    } else if (!PHONE_REGEX.test(phone)) {
      newErrors.phone =
        "Please enter a valid Indian mobile number.";
    }

    // Email (Optional)
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    setErrors(newErrors);

    // Focus the first invalid field
    const firstError = Object.keys(newErrors)[0];

    if (firstError) {
      requestAnimationFrame(() => {
        document.getElementById(firstError)?.focus();
      });
    }

    return Object.keys(newErrors).length === 0;
  }

  // ============================================
  // 4. OPEN CONFIRMATION POPUP
  // ============================================

  function handleReview(event) {

    event.preventDefault();

    if (submitting) return;

    // Validate before showing confirmation
    if (!validateForm()) return;

    setShowConfirmation(true);
  }

  // ============================================
  // 5. CLOSE CONFIRMATION POPUP
  // ============================================

  function closeConfirmation() {

    if (submitting) return;

    setShowConfirmation(false);

    requestAnimationFrame(() => {
      reviewButtonRef.current?.focus();
    });
  }

  // ============================================
  // 6. MODAL KEYBOARD ACCESSIBILITY
  // ============================================

  useEffect(() => {

    if (!showConfirmation) return;

    // Prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the Edit Details button
    editButtonRef.current?.focus();

    function handleKeyDown(event) {

      if (event.key === "Escape" && !submitting) {
        closeConfirmation();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        modalRef.current?.querySelectorAll(
          'button:not(:disabled), a[href], input:not(:disabled)'
        );

      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [showConfirmation, submitting]);

  // ============================================
  // 7. SUBMIT TO WEB3FORMS
  // ============================================

  async function handleSubmit() {

    if (submitting) return;

    // Validate again before sending
    if (!validateForm()) {
      setShowConfirmation(false);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const payload = new FormData();

    payload.append("access_key", ACCESS_KEY);

    payload.append(
      "subject",
      "New Admission Enquiry - NatyaShri School of Performing Arts"
    );

    payload.append(
      "from_name",
      "NatyaShri Admission Form"
    );

    payload.append(
      "Student Name",
      formData.studentName.trim()
    );

    payload.append(
      "Student Age",
      formData.age
    );

    payload.append(
      "Parent / Guardian Name",
      formData.guardianName.trim() || "Not Provided"
    );

    payload.append(
      "Mobile Number",
      formData.phone.replace(/[\s-]/g, "")
    );

    payload.append(
      "Email Address",
      formData.email.trim() || "Not Provided"
    );

    payload.append(
      "City / Location",
      formData.city.trim() || "Not Provided"
    );

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: payload,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit enquiry."
        );
      }

      // Success
      setSubmitted(true);
      setShowConfirmation(false);
      setFormData(INITIAL_FORM);
      setErrors({});

    } catch (error) {

      console.error(
        "Admission submission failed:",
        error
      );

      setSubmitError(
        "We couldn't submit your enquiry. Please try again."
      );

    } finally {

      setSubmitting(false);

    }
  }

  // ============================================
  // 8. REUSABLE INPUT FIELD
  // ============================================

  function renderField(name, label, options = {}) {

    return (
      <div
        className={`ns-field ${options.full ? "ns-full" : ""}`}
        key={name}
      >

        <label htmlFor={name}>

          {label}

          {options.required && (
            <span className="ns-required"> *</span>
          )}

          {!options.required && (
            <span className="ns-optional">
              {" "}(Optional)
            </span>
          )}

        </label>

        <input
          id={name}
          name={name}
          type={options.type || "text"}
          placeholder={options.placeholder || ""}
          value={formData[name]}
          onChange={handleChange}
          autoComplete={options.autoComplete}
          inputMode={options.inputMode}
          min={options.min}
          max={options.max}
          maxLength={options.maxLength}
          required={options.required}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={
            errors[name] ? `${name}-error` : undefined
          }
        />

        {errors[name] && (
          <small
            id={`${name}-error`}
            className="ns-error"
            role="alert"
          >
            {errors[name]}
          </small>
        )}

      </div>
    );
  }

  // ============================================
  // 9. CONFIRMATION DETAIL ROW
  // ============================================

  function detailRow(label, value) {

    return (
      <div className="ns-modal-row" key={label}>

        <span>{label}</span>

        <strong>
          {value || "Not Provided"}
        </strong>

      </div>
    );
  }

  // ============================================
  // 10. MAIN COMPONENT UI
  // ============================================

  return (

    <section className="admission" id="admission">

      <div className="admission-container">

        {!submitted ? (

          <>

            {/* SECTION INTRODUCTION */}

            <header className="ns-intro">

              <span className="ns-eyebrow">
                BEGIN YOUR JOURNEY
              </span>

              <h2>
                Admission <span>Enquiry</span>
              </h2>

              <span className="ns-gold-line"></span>

              <p>
                Begin your artistic journey with NatyaShri
                School of Performing Arts. Share a few details,
                and our team will guide you through the
                admission process.
              </p>

            </header>


            {/* ADMISSION FORM */}

            <div className="ns-form-shell">

              <div className="ns-form-header">

                <span className="ns-form-tag">
                  NATYASHRI SCHOOL OF PERFORMING ARTS
                </span>

                <h3>
                  Student Information
                </h3>

                <p>
                  Please complete the details below.
                  Fields marked * are required.
                </p>

              </div>


              <form onSubmit={handleReview} noValidate>

                <div className="ns-grid">

                  {renderField(
                    "studentName",
                    "Student Full Name",
                    {
                      required: true,
                      full: true,
                      placeholder: "Enter student's full name",
                      autoComplete: "name",
                      maxLength: 80,
                    }
                  )}

                  {renderField(
                    "age",
                    "Student Age",
                    {
                      required: true,
                      type: "number",
                      min: 3,
                      max: 100,
                      placeholder: "Age in years",
                    }
                  )}

                  {renderField(
                    "guardianName",
                    "Parent / Guardian Name",
                    {
                      required: isMinor,
                      placeholder: "Enter parent / guardian name",
                      maxLength: 80,
                    }
                  )}

                  {renderField(
                    "phone",
                    "Mobile / WhatsApp Number",
                    {
                      required: true,
                      type: "tel",
                      inputMode: "tel",
                      placeholder: "+91 9876543210",
                      autoComplete: "tel",
                      maxLength: 16,
                    }
                  )}

                  {renderField(
                    "email",
                    "Email Address",
                    {
                      type: "email",
                      placeholder: "example@gmail.com",
                      autoComplete: "email",
                    }
                  )}

                  {renderField(
                    "city",
                    "City / Location",
                    {
                      full: true,
                      placeholder: "Enter your city",
                      autoComplete: "address-level2",
                      maxLength: 80,
                    }
                  )}

                </div>


                {/* FORM FOOTER */}

                <div className="ns-form-footer">

                  <p>
                    Your information will only be used
                    to contact you regarding your enquiry.
                  </p>

                  <button
                    ref={reviewButtonRef}
                    type="submit"
                    className="ns-button ns-primary"
                  >
                    Review & Submit →
                  </button>

                </div>

              </form>

            </div>

          </>

        ) : (

          /* SUCCESS MESSAGE */

          <div className="ns-success" role="status">

            <div className="ns-success-icon">
              ✓
            </div>

            <span className="ns-eyebrow">
              ENQUIRY RECEIVED
            </span>

            <h2>
              Thank You!
            </h2>

            <span className="ns-gold-line"></span>

            <p>
              Your admission enquiry has been submitted
              successfully. Our NatyaShri team will contact
              you soon with further details.
            </p>

            <div className="ns-success-actions">

              <a
                href="https://wa.me/919172890424"
                target="_blank"
                rel="noopener noreferrer"
                className="ns-button ns-primary"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919172890424"
                className="ns-button ns-secondary"
              >
                Call NatyaShri
              </a>

            </div>

          </div>

        )}

      </div>


      {/* ======================================
          CONFIRMATION POPUP
      ====================================== */}

      {showConfirmation && !submitted && (

        <div
          className="ns-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeConfirmation();
            }
          }}
        >

          <div
            className="ns-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ns-modal-title"
            aria-describedby="ns-modal-description"
          >

            {/* MODAL HEADER */}

            <div className="ns-modal-header">

              <span className="ns-eyebrow">
                FINAL CONFIRMATION
              </span>

              <h2 id="ns-modal-title">
                Review Your Details
              </h2>

              <span className="ns-gold-line"></span>

              <p id="ns-modal-description">
                Please verify your information before
                submitting your admission enquiry.
              </p>

            </div>


            {/* DETAILS */}

            <div className="ns-modal-details">

              {detailRow(
                "Student Full Name",
                formData.studentName
              )}

              {detailRow(
                "Student Age",
                `${formData.age} Years`
              )}

              {detailRow(
                "Parent / Guardian Name",
                formData.guardianName
              )}

              {detailRow(
                "Mobile / WhatsApp Number",
                formData.phone
              )}

              {detailRow(
                "Email Address",
                formData.email
              )}

              {detailRow(
                "City / Location",
                formData.city
              )}

            </div>


            {/* SUBMISSION ERROR */}

            {submitError && (

              <div
                className="ns-submit-error"
                role="alert"
              >
                {submitError}
              </div>

            )}


            {/* ACTION BUTTONS */}

            <div className="ns-modal-actions">

              <button
                ref={editButtonRef}
                type="button"
                className="ns-button ns-secondary"
                onClick={closeConfirmation}
                disabled={submitting}
              >
                ← Edit Details
              </button>

              <button
                type="button"
                className="ns-button ns-primary"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Confirm & Submit →"}
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );
}

export default Admission;