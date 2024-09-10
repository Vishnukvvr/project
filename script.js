
document.getElementById("addImageBtn").addEventListener("click", function() {
    document.getElementById("fileInput").click();
  });
  
  document.getElementById("fileInput").addEventListener("change", function(event) {
    const gallery = document.getElementById("gallery");
    const files = event.target.files;
  
    for (const file of files) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("gallery-item");
        imgDiv.style.backgroundImage = `url('${e.target.result}')`;
        gallery.appendChild(imgDiv);
      };
      
      reader.readAsDataURL(file);
    }
  });
  

  let currentIndex = 0;
  
  function updateGallery() {
    const gallery = document.getElementById("gallery");
    const items = gallery.querySelectorAll(".gallery-item");
  
    items.forEach((item, index) => {
      item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
  }
  
  document.getElementById("prevBtn").addEventListener("click", function() {
    const gallery = document.getElementById("gallery");
    const items = gallery.querySelectorAll(".gallery-item");
  
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });
  
  document.getElementById("nextBtn").addEventListener("click", function() {
    const gallery = document.getElementById("gallery");
    const items = gallery.querySelectorAll(".gallery-item");
  
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateGallery();
    }
  });
  