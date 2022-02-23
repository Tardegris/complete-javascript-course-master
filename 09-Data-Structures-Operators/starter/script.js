'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex,mainIndex,time,address}) {

    console.log(`Order received! ${address} ${this.starterMenu[starterIndex]}`);

  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Op      en 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sol',
  mainIndex: 2,
  starterIndex: 2
})



let [main,,secondary] = restaurant.categories;

[main, secondary] = [secondary,main] 

//console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0); 

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(tags);


const arr = [7,8,9];

const badnewArray = [1,2,arr];

const  newArr = [1,2,...arr];
console.log(...arr);