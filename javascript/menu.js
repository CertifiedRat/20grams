const menuVaelger = document.getElementById("menu-dropdown");
const menuKort = document.querySelectorAll(".menukort");

// Lyt efter ændringer i dropdown-menuen
menuVaelger.addEventListener("change", function () {
  // Hent værdien (value) fra det valgte punkt (f.eks. 'breakfast')
  const selectedMenu = this.value;

  // Gå igennem alle menukort
  menuKort.forEach((card) => {
    // Hvis menukortets ID matcher det valgte, giv det klassen 'active' (bliver synlig)
    if (card.id === selectedMenu) {
      card.classList.add("active");
    } else {
      // Ellers fjern 'active' (skjul det)
      card.classList.remove("active");
    }
  });
});

// Menu-punkterne i desktop
const menuPunkter = document.querySelectorAll(".menu-valg-desktop");

menuPunkter.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMenu = button.getAttribute("data-menu");
    menuKort.forEach((card) => {
      if (card.id === selectedMenu) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
});
