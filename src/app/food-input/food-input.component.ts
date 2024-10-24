import { Component } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';

@Component({
  selector: 'app-food-input',
  standalone: true,
  imports: [FoodListComponent],
  templateUrl: './food-input.component.html',
  styleUrl: './food-input.component.css'
})
export class FoodInputComponent {
  AddItem(){

    const foodName = document.querySelector('.Textinput') as HTMLInputElement;
    const foodId = document.querySelector('.Idinput') as HTMLInputElement;

    if (foodName.value === '' || foodId.value === '') {
      alert('Please enter a valid name or id');
    } else {
      addToList();
    }


  }


}
function addToList() {

  const List = document.querySelector('.ulList') as HTMLDivElement;
  const foodName = document.querySelector('.Textinput') as HTMLInputElement;
  const foodId = document.querySelector('.Idinput') as HTMLInputElement;
  
  
  
  const newFoodItem =document.createElement('li')
  newFoodItem.className = 'food-item';
  newFoodItem.textContent = foodId.value + " " + foodName.value;



  
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'Delete';
          
  removeButton.addEventListener('click', () => {
  newFoodItem.remove();
  
          });
  
        newFoodItem.appendChild(removeButton);
        
       
        List.appendChild(newFoodItem);

        const listItems = List.children;
        const sortedListItems = Array.from(listItems).sort((a, b) => {
          const foodIdA = parseInt(a.textContent!.split(' ')[0]);
          const foodIdB = parseInt(b.textContent!.split(' ')[0]);
          return foodIdA - foodIdB;
        });

        List.innerHTML = '';
        sortedListItems.forEach(item => List.appendChild(item));

        foodName.value = '';
        foodId.value = '';

        

}

