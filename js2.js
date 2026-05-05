// =============================================================
// ZAD 1 - Obiekt currentUser
//
// Stwórz obiekt currentUser. Obiekt niech ma właściwości:
// name, surname, email, www, userType, isActive
// oraz metodę show(), która wypisze wszystkie te właściwości w konsoli.
// Dodatkowo stwórz metodę setActive(active), która przestawi
// właściwość isActive na przekazaną wartość (true/false).
//
// Obiekt to struktura przechowująca powiązane dane i funkcje w jednym miejscu.
// Tworzymy go za pomocą nawiasów klamrowych {}.
// Właściwości to dane (klucz: wartość), metody to funkcje wewnątrz obiektu.
// Żeby odwołać się do innych właściwości obiektu wewnątrz metody,
// używamy słowa kluczowego "this" - oznacza "ten obiekt".
// =============================================================

const currentUser = {
    name:     "Jan",
    surname:  "Kowalski",
    email:    "jan@example.com",
    www:      "https://jankowalski.pl",
    userType: "admin",
    isActive: true,

    // metoda show() wypisuje wszystkie dane użytkownika
    // "this" odnosi się do obiektu currentUser
    show() {
        console.log("Imię:",      this.name);
        console.log("Nazwisko:",  this.surname);
        console.log("Email:",     this.email);
        console.log("WWW:",       this.www);
        console.log("Typ:",       this.userType);
        console.log("Aktywny:",   this.isActive);
    },

    // metoda setActive() przyjmuje wartość true/false
    // i przypisuje ją do właściwości isActive
    setActive(active) {
        this.isActive = active;
    },
};

currentUser.show();
currentUser.setActive(false);
console.log("Po setActive(false):", currentUser.isActive); // false


// =============================================================
// ZAD 2 - Klasa Book
//
// Stwórz klasę Book, która będzie miała:
// - właściwość users (pusta tablica na start)
// - metodę addUser(name, age, phone) - dodaje użytkownika do tablicy
// - metodę showUsers() - wypisuje wszystkich użytkowników
// - metodę findByName(name) - szuka użytkownika po imieniu
// - metodę findByPhone(phone) - szuka użytkownika po telefonie
// - metodę getCount() - zwraca liczbę użytkowników
//
// Klasa to "przepis" na tworzenie obiektów tego samego rodzaju.
// constructor() to specjalna metoda wywoływana automatycznie przy "new Book()"
// - to tutaj ustawiamy startowe wartości właściwości.
// Każda instancja klasy (np. const b = new Book()) ma swoje własne dane.
// =============================================================

class Book {
    constructor() {
        // każda instancja klasy zaczyna z pustą tablicą użytkowników
        this.users = [];
    }

    // dodaje nowego użytkownika jako obiekt do tablicy users
    addUser(name, age, phone) {
        this.users.push({ name, age, phone });
        // { name, age, phone } to skrót od { name: name, age: age, phone: phone }
    }

    // wypisuje wszystkich użytkowników w pętli
    showUsers() {
        console.log("Wszyscy użytkownicy w książce:");

        for (const user of this.users) {
            console.log(user);
        }
    }

    // find() zwraca pierwszy element spełniający warunek, lub undefined
    findByName(name) {
        const found = this.users.find(user => user.name === name);
        console.log(found || false);
    }

    findByPhone(phone) {
        const found = this.users.find(user => user.phone === phone);
        console.log(found || false);
    }

    // zwraca liczbę elementów w tablicy users
    getCount() {
        console.log("Liczba użytkowników:", this.users.length);
    }
}

const book = new Book();
book.addUser("Anna", 25, "111-222-333");
book.addUser("Piotr", 30, "444-555-666");
book.addUser("Anna", 22, "777-888-999");

book.showUsers();
book.findByName("Anna");     // pierwszy użytkownik o imieniu Anna
book.findByName("Marek");    // false - nie istnieje
book.findByPhone("444-555-666");
book.getCount();             // 3


// =============================================================
// ZAD 3 - Obiekt text z metodami do przetwarzania tekstu
//
// Stwórz obiekt text z metodami:
// check(txt, word)       - czy słowo word znajduje się w tekście txt
// getCount(txt)          - liczba liter (znaków) w tekście
// getWordsCount(txt)     - liczba słów w tekście
// setCapitalize(txt)     - każde słowo zaczyna się z wielkiej litery
// setMix(txt)            - naprzemiennie duże/małe litery (ze spacjami)
// generateRandom(lng)    - losowy ciąg znaków o długości lng
// =============================================================

const text = {
    // includes() sprawdza czy podany ciąg znaków znajduje się w tekście
    check(txt, word) {
        return txt.includes(word);
    },

    // length zwraca liczbę znaków w stringu (łącznie ze spacjami)
    getCount(txt) {
        return txt.length;
    },

    // trim() usuwa spacje z brzegów, split(" ") dzieli po spacjach,
    // filter() usuwa puste elementy powstałe z wielu spacji
    getWordsCount(txt) {
        return txt.trim().split(" ").filter(w => w !== "").length;
    },

    // split(" ") rozbija tekst na słowa,
    // map() przetwarza każde słowo: pierwsza litera duża + reszta bez zmian
    // join(" ") skleja słowa z powrotem w jeden tekst
    setCapitalize(txt) {
        return txt
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    },

    // iterujemy po każdym znaku i co drugi robimy wielką literą
    // liczymy tylko litery (nie resetujemy licznika na spacji/znakach)
    setMix(txt) {
        let result  = "";
        let counter = 0; // osobny licznik - spacje też liczą się jako "slot"

        for (const char of txt) {
            // parzyste pozycje = mała litera, nieparzyste = duża litera
            if (counter % 2 === 0) {
                result += char.toLowerCase();
            } else {
                result += char.toUpperCase();
            }
            counter++;
        }

        return result;
    },

    // generujemy losowy ciąg liter a-z o zadanej długości
    generateRandom(lng) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";

        for (let i = 0; i < lng; i++) {
            // losujemy indeks od 0 do 25 i bierzemy odpowiednią literę
            const index = Math.floor(Math.random() * letters.length);
            result += letters[index];
        }

        return result;
    },
};

console.log(text.check("ala ma kota", "kota"));        // true
console.log(text.getCount("ala ma kota"));              // 11
console.log(text.getWordsCount("Ala ma kota"));         // 3
console.log(text.setCapitalize("ala ma kota"));         // "Ala Ma Kota"
console.log(text.setMix("ala ma kota"));                // "aLa mA KoTa"
console.log(text.generateRandom(10));                   // np. "dkjiuhtjox"


// =============================================================
// ZAD 4 - Dziedziczenie prototypowe + rozszerzenie String
//
// a) Jak działa prototypowe dziedziczenie i czemu klasy to "syntax sugar"?
//
// W JavaScript każdy obiekt ma ukryty link do innego obiektu - swojego
// "prototypu". Gdy odwołujemy się do właściwości lub metody obiektu,
// JS najpierw szuka jej bezpośrednio w obiekcie, a jeśli nie znajdzie -
// sięga do jego prototypu, potem do prototypu prototypu itd.
// Tworzy to tzw. "łańcuch prototypów" (prototype chain).
//
// Klasy (class, constructor, extends) wyglądają jak klasy z Javy czy C#,
// ale pod spodem JS nadal używa prototypów - klasy to tylko ładniejsza
// składnia (syntax sugar) na to samo. Możemy to sprawdzić:
//
//   class Animal {}
//   class Dog extends Animal {}
//   console.log(typeof Animal); // "function" - klasa to nadal funkcja!
//
// Mechanizm: gdy piszemy "new Dog()", JS tworzy obiekt i ustawia jego
// prototyp na Dog.prototype, który z kolei dziedziczy z Animal.prototype.
//
// b) Dodajemy metodę mirror() do wszystkich stringów przez String.prototype
//
// String.prototype to obiekt, od którego dziedziczą WSZYSTKIE stringi.
// Dodając do niego metodę, staje się ona dostępna dla każdego stringa.
// =============================================================

// split("") rozbija string na tablicę znaków
// reverse() odwraca kolejność tablicy
// join("") skleja z powrotem w string
String.prototype.mirror = function () {
    return this.split("").reverse().join("");
    // "this" tutaj to string, na którym wywołano metodę
};

console.log("Ala ma kota".mirror()); // "atok am alA"
console.log("hello".mirror());       // "olleh"


// =============================================================
// ZAD 5 - Domknięcia (closures) + createCounter
//
// a) Czym jest domknięcie?
//
// Domknięcie to funkcja, która "pamięta" zmienne ze swojego zewnętrznego
// zakresu (scope) nawet po tym, jak ten zakres przestał być aktywny.
//
// Normalnie zmienne lokalne znikają po zakończeniu funkcji.
// Ale jeśli funkcja wewnętrzna odwołuje się do zmiennej zewnętrznej,
// JS zachowuje tę zmienną w pamięci tak długo, jak istnieje odniesienie
// do funkcji wewnętrznej. To właśnie jest domknięcie.
//
// b) createCounter - każde wywołanie tworzy NIEZALEŻNY licznik
//
// Dlaczego liczniki są niezależne?
// Bo każde wywołanie createCounter() tworzy nową zmienną "count"
// w osobnym zakresie. Zwrócona funkcja domyka się nad TĄ konkretną
// zmienną - counter1 i counter2 mają swoje własne "count".
// =============================================================

function createCounter() {
    // "count" to zmienna prywatna - niedostępna z zewnątrz
    // każde wywołanie createCounter() tworzy osobną zmienną count
    let count = 0;

    // zwracamy funkcję, która "pamięta" zmienną count z zewnątrz
    // to właśnie jest domknięcie - funkcja + jej środowisko
    return function () {
        count++;      // zwiększamy count z zewnętrznego zakresu
        return count; // i zwracamy aktualną wartość
    };
}

const counter1 = createCounter(); // counter1 ma swój własny count = 0
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter(); // counter2 ma SWÓJ WŁASNY count = 0
console.log(counter2()); // 1  <-- zaczyna od nowa, niezależnie od counter1
console.log(counter2()); // 2