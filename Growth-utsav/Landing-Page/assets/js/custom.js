"use strict";

$(".toggle-link").click(function () {
  let hiddenParas = $(".hidden");

  if (hiddenParas.is(":visible")) {
    hiddenParas.slideUp();
    $(this).text("Read More");
  } else {
    hiddenParas.slideDown();
    $(this).text("Read Less");
  }
});

// Cart Js

let cart = {
  silver: { price: 10000, qty: 0 },
  gold: { price: 20000, qty: 0 },
  platinum: { price: 30000, qty: 0 },
};

let activePackage = null;

// Add first time
function addPackage(type) {
  resetAll(); // reset other packages
  activePackage = type;
  cart[type].qty = 1;

  renderControl(type);
  updateSummary();
}

// Increase qty
function increment(type) {
  if (activePackage !== type) return;

  cart[type].qty++;
  renderControl(type);
  updateSummary();
}

// Decrease qty
function decrement(type) {
  cart[type].qty--;

  if (cart[type].qty <= 0) {
    resetAll();
  } else {
    renderControl(type);
  }

  updateSummary();
}

// Reset everything
function resetAll() {
  for (let key in cart) {
    cart[key].qty = 0;
    document.getElementById(
      `control-${key}`
    ).innerHTML = `<button class="btn btn-outline-danger" onclick="addPackage('${key}')">Add</button>`;
  }
  activePackage = null;
}

// Render + / -
function renderControl(type) {
  document.getElementById(`control-${type}`).innerHTML = `
    <div class="counter">
      <button onclick="decrement('${type}')">−</button>
      <span>${cart[type].qty}</span>
      <button onclick="increment('${type}')">+</button>
    </div>`;
}

// Footer summary
function updateSummary() {
  let qty = 0;
  let total = 0;

  if (activePackage) {
    qty = cart[activePackage].qty;
    total = cart[activePackage].qty * cart[activePackage].price;
  }

  document.getElementById("totalCount").innerText = qty;
  document.getElementById("totalPrice").innerText = total;

  document.getElementById("proceedBtn").disabled = qty === 0;
}

function goToUserDetails() {
  if (!activePackage) return;

  const checkoutData = {
    packageKey: activePackage,
    packageName:
      activePackage === "silver"
        ? "Silver Package"
        : activePackage === "gold"
        ? "Gold Package"
        : "Platinum Package",
    price: cart[activePackage].price,
    qty: cart[activePackage].qty,
  };

  localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

  window.location.href = "userdetails.html";
}

// User Details Form Logic
function initUserDetailForm() {
  // Initial row
  if ($("#attendee-rows").children().length === 0) {
    addAttendeeRow();
  }
}

function addAttendeeRow() {
  const rowId = $("#attendee-rows .attendee-row").length + 1;
  const html = `
      <div class="row attendee-row mb-3" id="row-${rowId}">
          <div class="col-md-4">
              <label class="form-label">User Name</label>
              <input type="text" class="form-control user-name" placeholder="Enter Name" required>
          </div>
          <div class="col-md-4">
              <label class="form-label">User Age</label>
              <input type="number" class="form-control user-age" placeholder="Enter Age" required>
          </div>
          <div class="col-md-4">
              <label class="form-label">User Mobile Number</label>
              <input type="tel" class="form-control user-mobile" placeholder="Enter Mobile" required>
          </div>
      </div>`;
  $("#attendee-rows").append(html);
}

function deleteAttendeeRow() {
  const rows = $("#attendee-rows .attendee-row");
  if (rows.length > 1) {
    rows.last().remove();
  } else {
    alert("At least one attendee is required.");
  }
}

function submitBooking() {
  const attendees = [];
  let isValid = true;

  $(".attendee-row").each(function () {
    const name = $(this).find(".user-name").val();
    const age = $(this).find(".user-age").val();
    const mobile = $(this).find(".user-mobile").val();

    if (!name || !age || !mobile) {
      isValid = false;
      return false; // break loop
    }

    attendees.push({ name, age, mobile });
  });

  if (!isValid) {
    alert("Please fill in all details for all attendees.");
    return;
  }

  // Update localStorage
  let checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
  if (!checkoutData) {
    window.location.href = "cart.html";
    return;
  }

  checkoutData.attendees = attendees;
  localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

  window.location.href = "checkout.html";
}

// Checkout Js

function goBackToCart() {
  window.location.href = "cart.html";
}

// Checkout Logic (Only runs if elements exist)
if (document.getElementById("packageName")) {
  const data = JSON.parse(localStorage.getItem("checkoutData"));

  // Safety check
  if (!data) {
    window.location.href = "cart.html";
  } else {
    const bookingFee = 50;

    const subTotal = data.price * data.qty;
    const finalTotal = subTotal + bookingFee;

    // Inject values into DOM
    document.getElementById("packageName").innerText = data.packageName;
    document.getElementById("packagePrice").innerText =
      data.price.toLocaleString();
    document.getElementById("packageQty").innerText = data.qty;

    document.getElementById("subTotal").innerText = subTotal.toLocaleString();
    document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);

    // Render Attendees in Checkout
    if (data.attendees && data.attendees.length > 0) {
      const attendeeList = document.getElementById("attendee-list");
      if (attendeeList) {
        document.getElementById("attendee-details-card").style.display =
          "block";
        let html = '<ul class="list-group list-group-flush">';
        data.attendees.forEach((person, index) => {
          html += `
                  <li class="list-group-item px-0">
                      <strong>User ${index + 1}:</strong><br>
                      Name: ${person.name} <br>
                      Age: ${person.age} <br>
                      Mobile: ${person.mobile}
                  </li>`;
        });
        html += "</ul>";
        attendeeList.innerHTML = html;
      }
    }
  }
}
