const API = "http://localhost:5000/api";

async function loadContacts() {
  const res = await fetch(`${API}/contacts`);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(c => {
    list.innerHTML += `
      <div class="contact">
        <strong>${c.name}</strong> (${c.phone})<br>${c.email}
        <button onclick="deleteContact(${c.id})">Delete</button>
      </div>
    `;
  });
}

async function addContact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  await fetch(`${API}/contacts`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, phone })
  });

  loadContacts();
}

async function deleteContact(id) {
  await fetch(`${API}/contacts/${id}`, { method: "DELETE" });
  loadContacts();
}

loadContacts();
