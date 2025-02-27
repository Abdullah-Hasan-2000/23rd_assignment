// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var numbers_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// 3. Write a program to print numeric counting from 1 to 10.

for (i=1; i<=10; i++) {
    document.write(i,'<br>');
};
document.write('<br>');

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var table_no = +prompt("Enter table number: ");
var range = +prompt("Enter range for the table: ");

document.write('Multiplication table of ',table_no,'<br>Length ',range,'<br><br>');
for (i=1; i<=range; i++) {
    document.write(table_no,' x ',i,' = ',table_no*i,'<br>');
};
document.write('<br>');

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ['apple','banana','mango','orange','strawberry'];

for (i=0; i<= fruits.length-1; i++) {
    document.write('Element at index ',i,' is ',fruits[i],'<br>');
};
document.write('<br><b>Counting:</b><br><br>');

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (i=1; i<=15; i++) {
    document.write(i,' ')
}
document.write('<br>');

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write('<br><b>Reverse Counting:</b><br><br>');

for (i=10; i>=1; i--) {
    document.write(i,' ')
}
document.write('<br>');

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write('<br><b>Even:</b><br><br>');

for (i=0; i<=20; i++) {
    if (i%2 === 0){
        document.write(i,' ');
    }
};
document.write('<br>');
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write('<br><b>Odd:</b><br><br>');

for (i=0; i<=20; i++) {
    if (i%2 === 1){
        document.write(i,' ');
    }
};
document.write('<br>');
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write('<br><b>Series:</b><br><br>');

for (i=2; i<=20; i++) {
    if (i%2 === 0){
        document.write(i,'k ');
    }
};
document.write('<br><br>');

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ['cake','apple pie','cookie','chips','patties'];

var search = prompt("Welcome to ABC Bakery. What do you want to order? ");

var index;

for (i=0; i<=A.length; i++) {
    if (search === A[i]) {
        index = i;
    }
};

if (index != undefined) {
    document.write(search,' is available at index ',index,' in our bakery')
} else {
    document.write('We are sorry. ',search,' is not Available in our bakery')
};

document.write('<br><br>');

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

A = [24,53,78,91,12];
document.write('Array items: ')
var max = 0;

for (i=0; i<=A.length-1; i++) {
    document.write(A[i],',')
    if (A[i] > max) {
        max = A[i]
    }
};

document.write('<br>The Largest Number is ',max);
document.write('<br><br>');

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

A = [24,53,78,91,12];
document.write('Array items: ')
var max = 100;

for (i=0; i<=A.length-1; i++) {
    document.write(A[i],',')
    if (A[i] < max) {
        max = A[i]
    }
};

document.write('<br>The Smallest Number is ',max);
document.write('<br><br>');

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (i = 5; i <= 100; i++) {
    if (i%5 === 0) {
        document.write(i,', ');
    };
};