let sidebar = document.querySelector(".sidebar");
      let btn = document.querySelector(".bx-menu");
      console.log(btn);
      btn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
      });