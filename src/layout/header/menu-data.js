const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    
    link: "",
    active: "",
    sub_menus: [
      { link: "/shop/sulphites-chloride-sulphates", title: "Sulphites, Chloride & Sulphates" },
      { link: "/shop/quaternary-ammonium-compounds", title: "Quaternary Ammonium Compounds" },
      { link: "/shop/nitrocompound", title: "Nitrocompound" },
      { link: "/shop/stearate", title: "Stearate" },
      { link: "/shop/solvents", title: "Solvents" },
      { link: "/shop/cleaning_essentials", title: "Cleaning Essentials" },
      { link: "/shop", title: "All Products" }
    ]
  }
];

export default menu_data;
