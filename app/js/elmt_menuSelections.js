// ~ Menu selections

get_contact.addEventListener("click", () => {
  get_contact.innerHTML = "julian.c.dev@gmail.com";
});

get_color.addEventListener("input", () => {
  const get_color_value = get_color.value;
  console.log(get_color_value);
  root.style.setProperty("--primary", get_color_value);
  if (get_color.value === "#ffffff") {
    root.style.setProperty("--primary", "black");
  }
});

get_size.addEventListener("input", () => {
  if (get_size.value === "S") {
    screenChrono.style.fontSize = "8rem";
  }
  if (get_size.value === "M") {
    screenChrono.style.fontSize = "10rem";
  }
  if (get_size.value === "L") {
    screenChrono.style.fontSize = "12rem";
    addEventListener("resize", () => {
      if (window.innerWidth < 600) screenChrono.style.fontSize = "8rem";
    });
  }

  if (get_size.value === "XL") {
    screenChrono.style.fontSize = "14rem";
    addEventListener("resize", () => {
      if (window.innerWidth < 700) screenChrono.style.fontSize = "8rem";
    });
  }
});
