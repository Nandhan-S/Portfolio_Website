const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const fullName = `${formData.get("firstName")} ${formData.get("lastName")}`;
    const subject = `Portfolio enquiry from ${fullName}`;
    const body = [
        `Name: ${fullName}`,
        `Email: ${formData.get("email")}`,
        `Phone: ${formData.get("phone")}`,
        "",
        "Enquiry:",
        formData.get("message"),
    ].join("\r\n");
    const mailto = `mailto:ns.official8075@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});
