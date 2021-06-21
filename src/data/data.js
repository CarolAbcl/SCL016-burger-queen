import coffeMilk from '../images/coffeMilk.jpg'
import americanCoffe from '../images/AmericanCoffe.jpg'
import hamCheese from '../images/hamCheese.jpg'
import fruitJuice from '../images/fruitJuice.jpg'

const menuBreakfast = {
  items: [
    { id: 1, name: 'Café con Leche', price: 700, image:coffeMilk, options:[] },
    { id: 2, name: 'Café Americano', price: 500, image:americanCoffe, options:[] },
    { id: 3, name: 'Sandwich de jamón y queso', price: 1000, image:hamCheese, options:[] },
    { id: 4, name: 'Jugo de Frutas Natural', price: 700, image:fruitJuice, options:['piña','naranja','frutilla'] },
  ],
}

export default menuBreakfast;
  