const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".hero_title h1", {
    ...scrollRevealOption,
  });
//   form container
  ScrollReveal().reveal(".hero_bcg", {
    ...scrollRevealOption,
    delay:500
  });
  ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    interval:500
  }); 
  ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval:500
  }); 
  ScrollReveal().reveal(".seller_card", {
    ...scrollRevealOption,
    interval:500
  }); 
 
 
  