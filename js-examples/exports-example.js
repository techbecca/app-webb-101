/**
* NAMED EXPORTS
**/
// exportera en tidigare deklarerad funktion
export { myFunction };
// exportera en konstant
export const foo = "bar";
// exportera en funktion
export const add = (num1, num2) => {
	return num1+num2;
}

/**
* DEFAULT EXPORTS
**/
// Export default av en function
export default () => {/*...*/}
// Export default av en klass
export default class {/*...*/}