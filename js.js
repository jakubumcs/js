// =============================================================
// ZAD 3 - printNumbers
// Funkcja przyjmuje liczbę i zwraca tekst z kolejnymi liczbami
// oddzielonymi przecinkami, np. printNumbers(5) => "1, 2, 3, 4, 5"
// =============================================================

function printNumbers(number) {
    let result = "";

    for (let i = 1; i <= number; i++) {
        result += i;

        // dodajemy przecinek po każdej liczbie oprócz ostatniej
        if (i < number) result += ", ";
    }

    return result;
}

console.log(printNumbers(5)); // "1, 2, 3, 4, 5"


// =============================================================
// ZAD 4 - generateRandom
// Funkcja zwraca losową liczbę całkowitą z przedziału [min, max]
// Następnie generujemy 10 liczb i sprawdzamy,
// czy więcej niż połowa jest większa od 10
// =============================================================

function generateRandom(min, max) {
    // wzór zapewniający równomierne losowanie z pełnego przedziału
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let countGreaterThan10 = 0;

for (let i = 0; i < 10; i++) {
    let number = generateRandom(0, 20);

    if (number > 10) {
        countGreaterThan10++;
    }
}

// sprawdzamy czy co najmniej 5 z 10 liczb było > 10
if (countGreaterThan10 >= 5) {
    console.log("udało się");
} else {
    console.log("niestety nie");
}

console.log(generateRandom(1, 10));


// =============================================================
// ZAD 5 - checkPalindrom
// Palindrom - słowo brzmiące tak samo od przodu i od tyłu
// np. "racecar", "level", "kajak"
// Porównujemy znaki od zewnątrz do środka (i z j-i)
// =============================================================

function checkPalindrome(str) {
    let j = str.length - 1;

    // iterujemy tylko do połowy słowa
    for (let i = 0; i < j / 2; i++) {
        let forward  = str[i];      // znak od przodu
        let backward = str[j - i];  // odpowiadający znak od tyłu

        if (forward !== backward) {
            return false;
        }
    }

    return true;
}

function isPalindrome(str) {
    if (checkPalindrome(str)) {
        console.log(`"${str}" jest palindromem`);
    } else {
        console.log(`"${str}" nie jest palindromem`);
    }
}

isPalindrome("racecar"); // palindrom
isPalindrome("hello");   // nie palindrom


// =============================================================
// ZAD 6 - random + operacje na tablicy
// Generujemy 20-elementową tablicę losowych liczb 0-100,
// sortujemy ją, a następnie liczymy sumę i średnią
// =============================================================

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

let numbers = [];

// wypełniamy tablicę 20 losowymi liczbami z zakresu 0-100
for (let i = 0; i < 20; i++) {
    numbers.push(random(100));
}

// sort domyślnie sortuje leksykograficznie, dlatego podajemy komparator (a - b)
numbers.sort((a, b) => a - b);

console.log("Posortowana tablica:");
console.log(numbers);

// sumujemy wszystkie elementy tablicy
let sum = 0;
for (let number of numbers) {
    sum += number;
}

let average = sum / numbers.length;

console.log("Suma:", sum);
console.log("Średnia:", average);


// =============================================================
// ZAD 7 - removeDuplicates
// Usuwamy duplikaty z posortowanej tablicy "w miejscu"
// (bez tworzenia nowej tablicy)
// Używamy wskaźnika k, który wskazuje gdzie wpisać kolejny unikalny element
// Działa tylko dla tablic posortowanych - duplikaty zawsze sąsiadują
// =============================================================

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // k zaczyna od 1 - pierwszy element zawsze jest unikalny
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        // skoro tablica jest posortowana, wystarczy porównać z poprzednim
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // wpisujemy unikalny element na pozycję k
            k++;
        }
    }

    // k to liczba unikalnych elementów
    return k;
}


// =============================================================
// ZAD 8 - longestCommonPrefix
// Szukamy najdłuższego wspólnego prefiksu w tablicy słów
// Strategia: bierzemy pierwsze słowo jako kandydata,
// potem skracamy go aż każde słowo będzie się od niego zaczynać
// =============================================================

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]; // punkt wyjścia - pierwsze słowo

    for (let i = 1; i < strs.length; i++) {
        // przycinamy prefix dopóki bieżące słowo nie zaczyna się od niego
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // usuwamy ostatni znak

            if (prefix === "") return ""; // brak wspólnego prefiksu
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""


// =============================================================
// ZAD 9 - romanToInt
// Konwertujemy liczbę rzymską na całkowitą
// Kluczowa zasada: jeśli mniejszy symbol stoi PRZED większym (np. IV),
// to go odejmujemy zamiast dodawać (IV = 5 - 1 = 4)
// =============================================================

function romanToInt(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next    = values[s[i + 1]];

        // zapis odejmujący: IV, IX, XL, XC, CD, CM
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994


// =============================================================
// ZAD 10 - decode
// Poruszamy się po siatce liczb zgodnie z instrukcją kierunków
// r = prawo, l = lewo, d = dół, u = góra
// Na każdej odwiedzonej pozycji pobieramy liczbę i zamieniamy ją
// na znak ASCII za pomocą String.fromCharCode()
// =============================================================

const arr = [
    [ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20 ],
    [ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0 ],
    [  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67 ],
    [ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34 ],
    [  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10 ],
    [ 20, 110, 121,  32, 107,  55,  50,  99, 110, 105,   8 ],
    [ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110 ],
    [ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10 ],
];

const str = "rrrdddllddrrruuuurrddrruurddddlld";

function decode(arr, str) {
    let row = 0;
    let col = 0;
    let result = "";

    // zaczynamy od lewego górnego rogu [0][0]
    result += String.fromCharCode(arr[row][col]);

    for (const dir of str) {
        // przesuwamy pozycję zgodnie z kierunkiem
        if (dir === "r") col++;
        if (dir === "l") col--;
        if (dir === "d") row++;
        if (dir === "u") row--;

        // odczytujemy wartość i zamieniamy na znak
        result += String.fromCharCode(arr[row][col]);
    }

    return result;
}

console.log(decode(arr, str));


// =============================================================
// ZAD 11 - lengthOfLastWord
// Zwracamy długość ostatniego słowa w ciągu znaków
// trim() usuwa spacje z początku i końca
// split(" ") dzieli po spacjach
// filter() usuwa puste elementy powstałe z wielu spacji obok siebie
// =============================================================

function lengthOfLastWord(s) {
    const words    = s.trim().split(" ");
    const filtered = words.filter(w => w !== "");

    return filtered[filtered.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));                   // 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));   // 4


// =============================================================
// ZAD 12 - climbStairs
// Liczba sposobów wejścia na n stopni to ciąg Fibonacciego
// Dlaczego? Na stopień n można wejść tylko z n-1 (1 krok)
// lub z n-2 (2 kroki) - więc liczba sposobów = f(n-1) + f(n-2)
// Zamiast rekurencji używamy dwóch zmiennych (oszczędność pamięci)
// =============================================================

function climbStairs(n) {
    if (n <= 2) return n;

    let prev2 = 1; // liczba sposobów na 1 stopień
    let prev1 = 2; // liczba sposobów na 2 stopnie

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8