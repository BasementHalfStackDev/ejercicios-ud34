import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicios-ud34';

  // Adds pressed key to calculator screen
  appendToResult = (value: any): void => {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
  }

  // Clears calculator screen
  clearResult = (): void => {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
  }

  // Function to calculate inserted string
  calculate = (): void => {
    // Get the input string from the calculator screen
    const inputString = (document.getElementById("result") as HTMLInputElement).value;

    // Split the string into an array of tokens
    let tokens = inputString.split(/([-+*/%])/);

    // Remove any empty tokens
    tokens = tokens.filter(token => token.trim() !== "");

    // Initialize variables for the calculation
    let result: number;
    let operator: string;

    // Check if the first token is a negative sign
    if (tokens[0] === "-") {
      // If so, concatenate it with the next token to form a negative number
      result = -parseFloat(tokens[1]);
      tokens = tokens.slice(2);
    } else {
      // Otherwise, set the first token as the initial result value
      result = parseFloat(tokens[0]);
      tokens = tokens.slice(1);
    }

    // Loop through the remaining tokens and perform the calculations depending on the operator
    for (let i = 0; i < tokens.length; i += 2) {
      operator = tokens[i];
      switch (operator) {
        case "+":
          result += parseFloat(tokens[i + 1]);
          break;
        case "-":
          result -= parseFloat(tokens[i + 1]);
          break;
        case "*":
          result *= parseFloat(tokens[i + 1]);
          break;
        case "/":
          result /= parseFloat(tokens[i + 1]);
          break;
        case "%":
          result *= parseFloat(tokens[i + 1]) / 100;
          break;
      }
    }

    // Set the result
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = result.toString();
  }

}
