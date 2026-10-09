document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The site intentionally does not take payment or claim an order has been placed.
  const requestLink = document.getElementById("requestService");
  if (requestLink) {
    requestLink.addEventListener("click", () => {
      // Standard mailto navigation opens the visitor's configured email application.
      // No personal information is sent to this website by this click.
    });
  }
});
