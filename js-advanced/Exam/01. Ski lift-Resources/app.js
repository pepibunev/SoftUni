window.addEventListener('load', solve);

function solve() {
  
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const peopleInput = document.getElementById("people-count");
  const fromDateInput = document.getElementById("from-date");
  const daysInput = document.getElementById("days-count");
  const nextBtn = document.getElementById("next-btn");
  const editBtn = document.querySelector(".edit-btn");
  const continueBtn = document.querySelector(".continue-btn");
  const ticketList = document.querySelector(".ticket-info-list");

  nextBtn.addEventListener("click", function () {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const people = peopleInput.value.trim();
    const fromDate = fromDateInput.value.trim();
    const days = daysInput.value.trim();

    if (!firstName || !lastName || !people || !fromDate || !days) {
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("ticket");

    const article = document.createElement("article");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = `Name: ${firstName} ${lastName}`;

    const fromDateParagraph = document.createElement("p");
    fromDateParagraph.textContent = `From date: ${fromDate}`;

    const daysParagraph = document.createElement("p");
    daysParagraph.textContent = `For ${days} days`;

    const peopleParagraph = document.createElement("p");
    peopleParagraph.textContent = `For ${people} people`;

    article.appendChild(nameHeading);
    article.appendChild(fromDateParagraph);
    article.appendChild(daysParagraph);
    article.appendChild(peopleParagraph);

    listItem.appendChild(article);

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    const continueButton = document.createElement("button");
    continueButton.classList.add("continue-btn");
    continueButton.textContent = "Continue";

    listItem.appendChild(editButton);
    listItem.appendChild(continueButton);

    ticketList.appendChild(listItem);

    firstNameInput.value = "";
    lastNameInput.value = "";
    peopleInput.value = "";
    fromDateInput.value = "";
    daysInput.value = "";

    nextBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
  });

  
  ticketList.addEventListener("click", function(event) {
    const target = event.target;
    if (!target.classList.contains("edit-btn")) {
      return;
    }
  
    const listItem = target.closest(".ticket");
    if (!listItem) {
      return;
    }
  
    const article = listItem.querySelector("article");
    if (!article) {
      return;
    }
  
    const nameHeading = article.querySelector("h3");
    if (!nameHeading) {
      return;
    }
  
    const nameParts = nameHeading.textContent.split(":")[1].split(" ");
    const firstName = nameParts[1];
    const lastName = nameParts[2];
  
    const fromDateParagraph = article.querySelector("p:nth-of-type(1)");
    if (!fromDateParagraph) {
      return;
    }
  
    const fromDate = fromDateParagraph.textContent.split(":")[1].trim();
  
    const daysParagraph = article.querySelector("p:nth-of-type(2)");
    if (!daysParagraph) {
      return;
    }
  
    const days = daysParagraph.textContent.split(" ")[1];
  
    const peopleParagraph = article.querySelector("p:nth-of-type(3)");
    if (!peopleParagraph) {
      return;
    }
  
    const people = peopleParagraph.textContent.split(" ")[1];
  
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    peopleInput.value = people;
    fromDateInput.value = fromDate;
    daysInput.value = days;
  
    listItem.remove();
  
    nextBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });
}

solve();
