
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !emailPattern.test(email)) {
        alert("Please enter a valid name and email.");
        e.preventDefault();
      } else {
        alert("Form submitted successfully!");
      }
    });

    function addTask() {
      const input = document.getElementById("taskInput");
      const task = input.value.trim();
      if (!task) return;

      const li = document.createElement("li");
      li.textContent = task;

      const removeBtn = document.createElement("span");
      removeBtn.textContent = "❌";
      removeBtn.className = "remove";
      removeBtn.onclick = () => li.remove();

      li.appendChild(removeBtn);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    function addImage() {
      const url = document.getElementById("imageURL").value.trim();
      if (!url) return;

      const img = document.createElement("img");
      img.src = url;
      document.getElementById("galleryBox").appendChild(img);
      document.getElementById("imageURL").value = "";
    }
  
