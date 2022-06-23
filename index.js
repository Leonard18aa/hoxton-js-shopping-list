// Description
// We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// Tips
// - Pay attention to your data types, and what can you do with them


let shoppingList = [
    ['MILK', 1.2],
    ['Cocoa', 2], 
    ['Salad', 2],
    ['Carrots', 2],
    ['Tomatoes', 2.5],
    ['Ready Meals', 5],
  ]

  let userWantsToAddItem = confirm('Add an item?')

  while (userWantsToAddItem) {


    let itemName = String(prompt('The name of the item you want to add?'))
    let itemPrice = Number(prompt('The price of the item you want to add?'))


    shoppingList.push([itemName, itemPrice])
    userWantsToAddItem = confirm('Add more item?')
  }
  
  let total = 0

  for (let item of shoppingList) {
    let name = item[0]
    let price = item[1]
    total += price
    console.log(`${name}: $${price.toFixed(2)}`);
  }
  
  console.log(`Total: $${total.toFixed(2)}`)