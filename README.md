# normal-case-generator

# Description

This package is used to help capitalize select parts of a string, the first letter of a string or all first letters in the string

# Usage

```js
import normalCaseGenerator from 'normal-case-generator'

const output = normalCaseGenerator(value, options)

output: This contains the returned text value based on {value, options} that are passed into the normalCaseGenerator fn

value* - required | string
options* - optional | {
    filter: 'first' or 'all' or 'single',
    textToCapitalize: required when filter === 'single'
}

```

# Code Demonstration

```js live=true
//without option

const output = normalCaseGenerator('this');

console.log(output); // Outputs 'This'

//with option

const output = normalCaseGenerator('this is a test', {
  filter: 'all',
});

console.log(output); // Outputs 'This Is A Test'

//with option

const output = normalCaseGenerator('this is a test', {
  filter: 'first',
});

console.log(output); // Outputs 'This is a test'

//with option

const output = normalCaseGenerator('this is a test', {
  filter: 'single',
  textToCapitalize: 'test',
});

console.log(output); // Outputs 'this is a Test'
```

Thank you
