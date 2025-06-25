// This script handles the display of different payment methods based on user selection.
document.getElementById("UPI-BTN").addEventListener("click", UPI_BTN_HANDLER);
document;

document.getElementById("PIX-BTN").addEventListener("click", PIX_BTN_HANDLER);
document
  .getElementById("WALLET-BTN")
  .addEventListener("click", WALLET_BTN_HANDLER);
document
  .getElementById("UPI-QR-BTN")
  .addEventListener("click", UPI_QR_BTN_HANDLER);
document
  .getElementById("NET-BANKING-BTN")
  .addEventListener("click", NET_BANKING_BTN_HANDLER);
document.getElementById("CASH-BTN").addEventListener("click", CASH_BTN_HANDLER);
document
  .getElementById("BANK-TRANSFER-BTN")
  .addEventListener("click", BANK_TRANSFER_BTN_HANDLER);

function UPI_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "UPI");
  document.getElementById("UPI").style.display = "block";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("CASH").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
} // This function is not used in the current context, but can be implemented if needed.
function PIX_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "PIX");
  document.getElementById("PIX").style.display = "block";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("CASH").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
}
function WALLET_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "WALLET");
  document.getElementById("WALLET").style.display = "block";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("CASH").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
}
function UPI_QR_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "UPI-QR");
  document.getElementById("UPI-QR").style.display = "block";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("CASH").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
}
function NET_BANKING_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "NET-BANKING");
  document.getElementById("NET-BANKING").style.display = "block";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("CASH").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
}
function CASH_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "CASH");
  document.getElementById("CASH").style.display = "block";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("BANK-TRANSFER").style.display = "none";
}
function BANK_TRANSFER_BTN_HANDLER() {
  localStorage.setItem("SELECTED_METHOD", "BANK-TRANSFER");
  document.getElementById("BANK-TRANSFER").style.display = "block";
  document.getElementById("WALLET").style.display = "none";
  document.getElementById("PIX").style.display = "none";
  document.getElementById("UPI-QR").style.display = "none";
  document.getElementById("UPI").style.display = "none";
  document.getElementById("NET-BANKING").style.display = "none";
  document.getElementById("CASH").style.display = "none";
}

// Load the saved payment method on page load
window.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("SELECTED_METHOD");
  if (saved === "PIX") PIX_BTN_HANDLER();
  else if (saved === "WALLET") WALLET_BTN_HANDLER();
  else if (saved === "UPI-QR") UPI_QR_BTN_HANDLER();
  else if (saved === "NET-BANKING") NET_BANKING_BTN_HANDLER();
  else if (saved === "CASH") CASH_BTN_HANDLER();
  else if (saved === "BANK-TRANSFER") BANK_TRANSFER_BTN_HANDLER();
});

// Internal container of payment methods
document
  .getElementById("BANK-TRANSFER-PAY-BUTTON")
  .addEventListener("click", function () {
    document.getElementById("BANK-TRANSFER-ACCOUNT-DETAILS").style.display =
      "block";
    document.getElementById("BANK-TRANSFER-SELECT").style.display = "none";
  });

document
  .getElementById("CASH-PAY-BUTTON")
  .addEventListener("click", function () {
    document.getElementById("CASH-ACCOUNT-DETAILS").style.display = "block";
    document.getElementById("CASH-SELECT-BOX").style.display = "none";
  });

document
  .getElementById("PIX-PAY-BUTTON")
  .addEventListener("click", function () {
    document.getElementById("PIX-DETAILS").style.display = "block";
    document.getElementById("PIX-SELECT").style.display = "none";
  });

document
  .getElementById("SHOW-QR")
  .addEventListener("click", function () {
    document.getElementById("UPI-QR-DETAILS").style.display = "block";
    document.getElementById("UPI-QR-SELECT").style.display = "none";
  });
