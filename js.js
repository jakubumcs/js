// =============================================================
// ZAD 3 - printNumbers
//
// Napisz funkcję printNumbers(nr), która wymagać będzie liczby.
// Funkcja powinna zwrócić tekst, który będzie składał się
// z kolejnych liczb, np. printNumbers(5) => "1, 2, 3, 4, 5"
//
// Czym jest funkcja?
// Funkcja to blok kodu, który możemy "odpalić" podając jej nazwę.
// Możemy przekazać do niej wartości (parametry), np. printNumbers(5)
// - tutaj 5 to parametr, który wewnątrz funkcji jest dostępny jako "number".
//
// "return" kończy działanie funkcji i oddaje wynik do miejsca wywołania.
// Bez "return" funkcja zwróci "undefined".
// =============================================================

function printNumbers(number) {
    // zaczynamy od pustego tekstu - będziemy do niego doklejać liczby
    let result = "";

    // pętla for: zaczynamy od 1 i idziemy aż do "number" włącznie (<=)
    // i++ oznacza: po każdym obrocie zwiększ i o 1
    for (let i = 1; i <= number; i++) {
        result += i; // += to skrót od result = result + i

        // dodajemy przecinek i spację po każdej liczbie oprócz ostatniej
        // gdy i === number, jesteśmy na ostatniej liczbie - nie dodajemy przecinka
        if (i < number) result += ", ";
    }

    // zwracamy gotowy tekst np. "1, 2, 3, 4, 5"
    return result;
}

console.log(printNumbers(5)); // "1, 2, 3, 4, 5"


// =============================================================
// ZAD 4 - generateRandom
//
// Stwórz funkcję generateRandom(min, max), która będzie przyjmować
// dwie wartości - min i max. Funkcja powinna zwrócić losową liczbę
// z podanego przedziału.
// Następnie wygeneruj 10 liczb z przedziału 1-20. Jeżeli połowa
// z nich będzie większa od 10, wypisz "udało się", w przeciwnym razie
// wypisz "niestety nie".
//
// Math.random() zwraca losową liczbę z zakresu [0, 1) np. 0.7312...
// Math.floor() zaokrągla w dół do liczby całkowitej, np. Math.floor(3.9) = 3
// Wzór Math.floor(Math.random()*(max-min+1)+min) przeskalowuje wynik
// do wybranego przez nas przedziału [min, max].
// =============================================================

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// zmienna do zliczania ile liczb było większych od 10
let countGreaterThan10 = 0;

// generujemy 10 losowych liczb i sprawdzamy każdą
for (let i = 0; i < 10; i++) {
    let number = generateRandom(0, 20);

    // jeśli liczba jest większa od 10, zwiększamy licznik
    if (number > 10) {
        countGreaterThan10++;
    }
}

// >= 5 oznacza "co najmniej połowa" (5 z 10) była większa od 10
if (countGreaterThan10 >= 5) {
    console.log("udało się");
} else {
    console.log("niestety nie");
}

console.log(generateRandom(1, 10)); // przykładowe losowanie


// =============================================================
// ZAD 5 - checkPalindrom
//
// Napisz funkcję checkPalindrom(txt), która zwróci true/false
// w zależności od tego, czy przekazane słowo jest palindromem.
//
// Palindrom to słowo, które brzmi tak samo czytane od przodu i od tyłu,
// np. "racecar", "level", "kajak", "anna".
//
// Strategia: porównujemy pierwszy znak z ostatnim, drugi z przedostatnim itd.
// Jeśli któraś para się nie zgadza - to nie palindrom.
// Wystarczy sprawdzić tylko połowę znaków (środek nie ma pary).
//
// str[i] - dostęp do znaku na pozycji i (jak tablica, ale dla tekstu)
// str.length - długość tekstu (liczba znaków)
// =============================================================

function checkPalindrome(str) {
    // j to indeks ostatniego znaku
    let j = str.length - 1;

    // sprawdzamy tylko do połowy - i to znak od przodu, j-i to jego para od tyłu
    for (let i = 0; i < j / 2; i++) {
        let forward  = str[i];     // znak od przodu (0, 1, 2...)
        let backward = str[j - i]; // odpowiadający znak od tyłu (ostatni, przedostatni...)

        // jeśli znaki nie są takie same - nie jest palindromem, przerywamy
        if (forward !== backward) {
            return false; // return wewnątrz funkcji natychmiast kończy jej działanie
        }
    }

    // jeśli pętla przeszła przez wszystkie pary bez zwrócenia false - to palindrom
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
//
// Stwórz funkcję random(max), która będzie zwracać losową liczbę
// z zakresu 0 - max. Wygeneruj 20-elementową tablicę, posortuj ją,
// a następnie wypisz sumę oraz średnią wszystkich liczb.
//
// Tablica (Array) to lista wartości przechowywana w jednej zmiennej.
// Dostęp po indeksie: numbers[0] to pierwszy element (indeksy od 0).
// numbers.push(x) dodaje element na koniec tablicy.
// numbers.length to liczba elementów tablicy.
//
// Pętla "for...of" to wygodny sposób na przejście przez każdy element tablicy:
//   for (let number of numbers) { ... }
// - przy każdym obrocie "number" przyjmuje wartość kolejnego elementu.
// =============================================================

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

// tworzymy pustą tablicę - będziemy do niej dodawać liczby
let numbers = [];

// generujemy 20 losowych liczb z zakresu 0-100 i dodajemy do tablicy
for (let i = 0; i < 20; i++) {
    numbers.push(random(100));
}

// sort() bez argumentu sortuje jak tekst ("10" < "9"), co daje błędny wynik dla liczb!
// dlatego podajemy funkcję porównującą (a, b) => a - b:
// jeśli wynik jest ujemny: a idzie przed b (rosnąco)
// jeśli wynik jest dodatni: b idzie przed a
numbers.sort((a, b) => a - b);

console.log("Posortowana tablica:");
console.log(numbers);

// sumujemy wszystkie elementy tablicy
let sum = 0;
for (let number of numbers) {
    sum += number; // dodajemy każdy element do sumy
}

// średnia = suma podzielona przez liczbę elementów
let average = sum / numbers.length;

console.log("Suma:", sum);
console.log("Średnia:", average);


// =============================================================
// ZAD 7 - removeDuplicates
//
// Biorąc pod uwagę tablicę liczb posortowaną niemalejąco, usuń duplikaty
// "w miejscu" (bez tworzenia nowej tablicy), tak aby każdy element
// pojawił się tylko raz. Zwróć liczbę unikalnych elementów k.
// Przykład: [1,1,2] => k=2, tablica: [1,2,_]
//
// Dlaczego działa tylko dla posortowanych tablic?
// Bo duplikaty zawsze sąsiadują ze sobą w posortowanej tablicy.
// Wystarczy porównać element z poprzednim - jeśli są różne, to jest unikalny.
//
// Wskaźnik k śledzi pozycję, na którą wpisujemy kolejny unikalny element.
// Nadpisujemy tablicę "w miejscu" - nie tworzymy nowej, tylko przestawiamy wartości.
// =============================================================

function removeDuplicates(nums) {
    // edge case - pusta tablica nie ma żadnych elementów
    if (nums.length === 0) return 0;

    // k = 1, bo pierwszy element zawsze jest unikalny (nie ma przed nim nic)
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        // porównujemy bieżący element z poprzednim
        // w posortowanej tablicy duplikaty zawsze sąsiadują
        if (nums[i] !== nums[i - 1]) {
            // znaleźliśmy nową unikalną wartość - wpisujemy ją na pozycję k
            nums[k] = nums[i];
            k++; // przesuwamy wskaźnik do następnej wolnej pozycji
        }
        // jeśli nums[i] === nums[i-1], pomijamy - to duplikat
    }

    // k to teraz liczba unikalnych elementów
    return k;
}


// =============================================================
// ZAD 8 - longestCommonPrefix
//
// Napisz funkcję znajdującą najdłuższy wspólny prefiks w tablicy ciągów.
// Jeśli nie ma wspólnego prefiksu, zwróć pusty ciąg "".
// Przykład: ["flower","flow","flight"] => "fl"
//
// Prefiks to początek słowa, np. "fl" jest prefiksem "flower" i "flight".
//
// Strategia:
// 1. Bierzemy pierwsze słowo jako kandydata na prefiks.
// 2. Dla każdego kolejnego słowa: skracamy prefiks o ostatni znak,
//    dopóki słowo nie zaczyna się od naszego prefiksu.
// 3. Jeśli prefiks stanie się pusty - brak wspólnego prefiksu.
//
// startsWith(prefix) - metoda stringa, zwraca true jeśli zaczyna się od prefix
// slice(0, -1) - zwraca tekst bez ostatniego znaku ("hello" => "hell")
// =============================================================

function longestCommonPrefix(strs) {
    // jeśli tablica jest pusta, nie ma czego porównywać
    if (strs.length === 0) return "";

    // zaczynamy od pierwszego słowa jako kandydata na prefiks
    let prefix = strs[0];

    // porównujemy prefiks z każdym kolejnym słowem
    for (let i = 1; i < strs.length; i++) {
        // skracamy prefiks tak długo, aż słowo zaczyna się od niego
        // np. prefix="flower", słowo="flow" -> "flower" nie pasuje -> "flowe" nie pasuje
        //     -> "flow" pasuje - zatrzymujemy się
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // usuwamy ostatni znak

            // jeśli doszliśmy do pustego stringa - brak wspólnego prefiksu
            if (prefix === "") return "";
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""


// =============================================================
// ZAD 9 - romanToInt
//
// Cyfry rzymskie: I=1, V=5, X=10, L=50, C=100, D=500, M=1000
// Podając liczbę rzymską jako tekst, przekonwertuj ją na liczbę całkowitą.
// Przykład: "MCMXCIV" => 1994
//
// Kluczowa zasada cyfr rzymskich:
// Normalnie dodajemy wartości symboli: VII = 5 + 1 + 1 = 7
// Ale gdy mniejszy symbol stoi PRZED większym, ODEJMUJEMY go:
//   IV = 5 - 1 = 4  (a nie 1 + 5 = 6)
//   IX = 10 - 1 = 9
//   XL = 50 - 10 = 40
//   CM = 1000 - 100 = 900
//
// Obiekt (mapa) values przechowuje wartości dla każdego symbolu.
// values[s[i]] to wartość symbolu na pozycji i w tekście.
// =============================================================

function romanToInt(s) {
    // obiekt jako słownik: klucz (symbol) => wartość (liczba)
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
        const current = values[s[i]];     // wartość bieżącego symbolu
        const next    = values[s[i + 1]]; // wartość następnego symbolu (może być undefined)

        // jeśli bieżący jest mniejszy od następnego - zapis odejmujący (np. IV, IX)
        // undefined porównane z liczbą daje false, więc ostatni symbol zawsze się doda
        if (current < next) {
            result -= current; // odejmujemy
        } else {
            result += current; // dodajemy
        }
    }

    return result;
}

console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994


// =============================================================
// ZAD 10 - decode
//
// Masz siatkę liczb (tablica tablic - tzw. tablica dwuwymiarowa).
// Masz ciąg kierunków: r=prawo, l=lewo, d=dół, u=góra.
// Zaczynasz w lewym górnym rogu [0][0] i poruszasz się zgodnie
// z kierunkami. Na każdej pozycji pobierasz liczbę i zamieniasz ją
// na znak za pomocą String.fromCharCode() (kody ASCII).
//
// Tablica dwuwymiarowa to "tabela": arr[row][col]
// arr[0][0] = lewy górny róg, arr[0][1] = drugi element pierwszego wiersza
// row (wiersz) zmienia się przy ruchu d/u
// col (kolumna) zmienia się przy ruchu r/l
//
// String.fromCharCode(66) => "B" (kod ASCII litery B to 66)
// "for...of" przechodzi przez każdy znak ciągu str po kolei
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
    let row = 0;    // numer wiersza (0 = pierwszy wiersz, czyli góra)
    let col = 0;    // numer kolumny (0 = pierwsza kolumna, czyli lewo)
    let result = "";

    // pobieramy pierwszy znak z pozycji startowej [0][0]
    result += String.fromCharCode(arr[row][col]);

    // przechodzimy przez każdy kierunek w ciągu
    for (const dir of str) {
        // przesuwamy pozycję zgodnie z kierunkiem
        if (dir === "r") col++; // prawo = zwiększamy kolumnę
        if (dir === "l") col--; // lewo  = zmniejszamy kolumnę
        if (dir === "d") row++; // dół   = zwiększamy wiersz
        if (dir === "u") row--; // góra  = zmniejszamy wiersz

        // pobieramy liczbę z nowej pozycji i zamieniamy na znak
        result += String.fromCharCode(arr[row][col]);
    }

    return result;
}

console.log(decode(arr, str));


// =============================================================
// ZAD 11 - lengthOfLastWord
//
// Biorąc pod uwagę ciąg znaków s składający się ze słów i spacji,
// zwróć długość ostatniego słowa w ciągu.
// Przykład: "Hello World" => 5, "   fly me   to   the moon  " => 4
//
// Problem: tekst może mieć spacje na początku, końcu i wielokrotne
// spacje między słowami - musimy je wszystkie obsłużyć.
//
// trim()       - usuwa spacje z początku i końca tekstu
// split(" ")   - dzieli tekst na tablicę po spacjach
//                "a  b" => ["a", "", "b"] (podwójna spacja = pusty element!)
// filter()     - przechodzi przez tablicę i zostawia tylko elementy
//                spełniające warunek. w => w !== "" zostawia niepuste słowa.
// .length      - dla tablicy: liczba elementów, dla tekstu: liczba znaków
// =============================================================

function lengthOfLastWord(s) {
    // usuwamy zbędne spacje z brzegów
    const words = s.trim().split(" ");

    // usuwamy puste stringi powstałe z wielu spacji obok siebie
    const filtered = words.filter(w => w !== "");

    // ostatni element tablicy to ostatnie słowo
    // filtered.length - 1 to indeks ostatniego elementu
    return filtered[filtered.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));                   // 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));   // 4


// =============================================================
// ZAD 12 - climbStairs
//
// Dotarcie na szczyt zajmuje n kroków. Za każdym razem można pokonać
// 1 lub 2 stopnie. Na ile różnych sposobów można wspiąć się na szczyt?
// Przykład: n=2 => 2 sposoby, n=3 => 3 sposoby
//
// Dlaczego to jest ciąg Fibonacciego?
// Na stopień n można wejść TYLKO z:
//   - stopnia n-1 (robimy 1 krok)
//   - stopnia n-2 (robimy 2 kroki)
// Więc: liczba sposobów na n = sposoby(n-1) + sposoby(n-2)
// To dokładnie definicja ciągu Fibonacciego!
//
// Zamiast rekurencji (która liczyłaby te same wartości wielokrotnie)
// używamy dwóch zmiennych i aktualizujemy je w pętli - to szybsze.
// prev2 = wynik dla n-2, prev1 = wynik dla n-1
// =============================================================

function climbStairs(n) {
    // przypadki bazowe - dla 1 i 2 stopni odpowiedź jest prosta
    if (n <= 2) return n;
    // n=1: tylko jeden sposób (1 krok)
    // n=2: dwa sposoby (1+1 lub 2)

    let prev2 = 1; // liczba sposobów dla 1 stopnia
    let prev1 = 2; // liczba sposobów dla 2 stopni

    // liczymy od 3 do n, za każdym razem przesuwamy "okno" o jeden
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2; // f(n) = f(n-1) + f(n-2)
        prev2 = prev1;                 // poprzedni staje się poprzednim poprzedniego
        prev1 = current;               // aktualny staje się poprzednim
    }

    // prev1 to teraz wynik dla n
    return prev1;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
