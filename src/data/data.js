import coffeMilk from '../images/coffeMilk.jpg'
import americanCoffe from '../images/AmericanCoffe.jpg'
import hamCheese from '../images/hamCheese.jpg'
import fruitJuice from '../images/fruitJuice.jpg'
import simpleBurger from '../images/simpleBurger.jpg'
import doubleBurger from '../images/doubleBurger.jpg'
import frenchFries from '../images/frenchFries.jpg'
import onionRings from '../images/onionRings.jpg'
import water from '../images/water.jpg'
import soda from '../images/soda.jpg'

const menu = [
    { id: 1, 
      category: 'breakfast',
      name: 'Café con Leche', 
      price: 700, 
      image:coffeMilk, 
      options:[] 
    },
    { id: 2, 
      category: 'breakfast',
      name: 'Café Americano', 
      price: 500, 
      image:americanCoffe, 
      options:[] 
    },
    { id: 3, 
      category: 'breakfast',
      name: 'Sandwich de jamón y queso', 
      price: 1000, 
      image:hamCheese, 
      options:[] 
    },
    { id: 4, 
      category: 'breakfast',
      name: 'Jugo de Frutas Natural', 
      price: 700, 
      image:fruitJuice, 
      options:['piña','naranja','frutilla'] 
    },
    { id: 5, 
      category: 'lunch',
      name: 'Hamburguesa simple', 
      price: 1000, 
      image:simpleBurger, 
      options:['res','pollo','vegetariana'] 
    },
    { id: 6, 
      category: 'lunch',
      name: 'Hamburguesa doble', 
      price: 1500, 
      image:doubleBurger, 
      options:['res','pollo','vegetariana'] 
    },
    { id: 7, 
      category: 'lunch',
      name: 'Papas fritas', 
      price: 500, 
      image: frenchFries, 
      options:[] 
    },
    { id: 8, 
      category: 'lunch',
      name: 'Aros de cebolla', 
      price: 500, 
      image: onionRings, 
      options:[] 
    },
    { id: 9, 
      category: 'lunch',
      name: 'Agua', 
      price: 500, 
      image: water, 
      options:['500ml', '750ml'] 
    },
    { id: 10, 
      category: 'lunch',
      name: 'Bebida/Gaseosa', 
      price: 700, 
      image: soda, 
      options:['500ml', '750ml'] 
    },
  ];

export default menu;