import Separator from "./Separator";

const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Espresso",
    description: "Rich and bold shot of coffee",
    price: 3.5,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Capuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Americano",
    description: "Espresso with hot water",
    price: 3.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Macchiato",
    description: "Espresso with a dollop of foam",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Flat Whiet",
    description: "Espresso with microfoam milk",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Iced Coffee",
    description: "Espresso with chocolate and steamed milk",
    price: 4,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Affogato",
    description: "Espresso shot over vanilla ice cream",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Tongkat Ali Coffee",
    description: "Coffee with traditional herb",
    price: 4,
  },
];

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            quasi deleniti explicabo facere aliquam. Tempore sint veniam sunt
            illo! Iste, obcaecati. Quidem fugit repudiandae voluptatem
            praesentium voluptatibus modi eveniet tempora?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
