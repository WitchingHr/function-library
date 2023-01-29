import pubsub from './pubsub';

const functions = [
  {
    name: 'Random Int',
    fn:
      function getRandInt(max) {
        return Math.floor(Math.random() * max);
      },
  },

  {
    name: 'Factorial (Iterative)',
    fn:
      function factorial(num) {
        if (num < 0) return undefined;
        if (num === 0) return 1;
        let number = num;
        for (let i = num - 1; i > 1; i--) {
          number *= i;
        }
        return number;
      },
  },

  {
    name: 'Factorial (Recursive)',
    fn:
      function factorial(n) {
        return (n === 0) ? 1 : n * factorial(n - 1);
      },
  },

  {
    name: 'Capitalize First Letter',
    fn:
      function capitalize(text) {
        let x = text.substring(0, 1);
        const y = text.substring(1, Infinity);
        x = x.toUpperCase();
        return x + y;
      },
  },

  {
    name: 'Get Primes Between 1 and a Number',
    fn:
      function getPrimes(n) {
        const primes = [];
        outer:
          for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
              if (i % j == 0) continue outer;
            }
            primes.push(i);
          }
          return primes;
      },
  },

  {
    name: 'Reverse String',
    fn:
      function reverse(string) {
        const array = string.split('');
        return array.reverse().join('');
      },
  },

  {
    name: 'Get Date Locale',
    fn:
      function getLocalDate() {
        const offset = (new Date()).getTimezoneOffset() * 60000;
        const today = (new Date(Date.now() - offset)).toISOString().split('T')[0];
        return today;
      },
  },

  {
    name: 'Evaluate String Mathematically',
    fn:
      function parse(str) {
        return Function(`'use strict'; return (${str})`)();
      },
  },

  {
    name: 'Fibonacci',
    fn:
      function fibsRec(n) {
        if (n < 1 || Number.isNaN(n)) return 'Invalid';
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
      },
  },

  {
    name: 'MergeSort Array of Numbers',
    fn:
      function mergeSort(array) {
        if (array.length === 1) {
          return array;
        }
        if (array.length !== 2) {
          const a = mergeSort(array.slice(0, Math.floor(array.length / 2)));
          const b = mergeSort(array.slice(Math.floor(array.length / 2)));
          const sorted = [];
          for (const number of array) {
            if (a.length === 0) {
              sorted.push(b.shift());
              continue;
            }
            if (b.length === 0) {
              sorted.push(a.shift());
              continue;
            }
            if (b[0] < a[0]) {
              sorted.push(b.shift());
            } else {
              sorted.push(a.shift());
            }
          }
          return sorted;
        }
        if (array[0] < array[1]) {
          return array;
        } else {
          array.push(array.shift());
          return array;
        }
      },
  },

];
