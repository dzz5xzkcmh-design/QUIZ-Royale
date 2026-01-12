// WWM Battle Royale - Fragendatenbank

// Original questions pool
const QUESTIONS_POOL = [
    // Multiple Choice Fragen
    {
        type: 'multiple',
        question: 'Welches ist das größte Säugetier der Welt?',
        answers: ['Elefant', 'Blauwal', 'Giraffe', 'Hai'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'In welchem Jahr fiel die Berliner Mauer?',
        answers: ['1987', '1989', '1991', '1985'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Welche Programmiersprache wird hauptsächlich für Webseiten verwendet?',
        answers: ['Python', 'JavaScript', 'C++', 'Ruby'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Herzen hat ein Oktopus?',
        answers: ['1', '2', '3', '4'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welcher Planet ist der Sonne am nächsten?',
        answers: ['Venus', 'Mars', 'Merkur', 'Erde'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches ist das schnellste Landtier?',
        answers: ['Gepard', 'Löwe', 'Antilope', 'Strauß'],
        correct: 0
    },
    {
        type: 'multiple',
        question: 'Wie viele Spieler hat ein Fußballteam auf dem Feld?',
        answers: ['9', '10', '11', '12'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welche Farbe hat ein Smaragd?',
        answers: ['Rot', 'Blau', 'Grün', 'Gelb'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'In welchem Land befindet sich der Eiffelturm?',
        answers: ['Italien', 'Spanien', 'Frankreich', 'Deutschland'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Wie viele Kontinente gibt es?',
        answers: ['5', '6', '7', '8'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches ist das kleinste Land der Welt?',
        answers: ['Monaco', 'Vatikanstadt', 'San Marino', 'Liechtenstein'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie heißt der längste Fluss der Welt?',
        answers: ['Nil', 'Amazonas', 'Jangtse', 'Mississippi'],
        correct: 0
    },
    {
        type: 'multiple',
        question: 'Welches Gas atmen Menschen hauptsächlich ein?',
        answers: ['Sauerstoff', 'Stickstoff', 'Kohlendioxid', 'Helium'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?',
        answers: ['28', '30', '32', '34'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches ist das meistgesprochene Sprache der Welt?',
        answers: ['Englisch', 'Spanisch', 'Mandarin', 'Hindi'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'In welchem Jahr landeten Menschen zum ersten Mal auf dem Mond?',
        answers: ['1967', '1969', '1971', '1973'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Welches Tier ist das Symbol von WWF?',
        answers: ['Tiger', 'Panda', 'Elefant', 'Eisbär'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Sekunden hat eine Stunde?',
        answers: ['3000', '3600', '4000', '4200'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Welches ist das größte Organ des menschlichen Körpers?',
        answers: ['Herz', 'Lunge', 'Leber', 'Haut'],
        correct: 3
    },
    {
        type: 'multiple',
        question: 'In welcher Stadt steht die Freiheitsstatue?',
        answers: ['Los Angeles', 'New York', 'Miami', 'Chicago'],
        correct: 1
    },
    
    // 20 neue Multiple Choice Fragen
    {
        type: 'multiple',
        question: 'Wie viele Knochen hat ein erwachsener Mensch?',
        answers: ['186', '206', '226', '246'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Welche Farbe erhält man wenn man Gelb und Blau mischt?',
        answers: ['Orange', 'Grün', 'Violett', 'Braun'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'In welchem Land wurde Pizza erfunden?',
        answers: ['Spanien', 'Griechenland', 'Italien', 'Frankreich'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Wie heißt die Hauptstadt von Australien?',
        answers: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welcher Planet ist als "Roter Planet" bekannt?',
        answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Saiten hat eine Standard-Gitarre?',
        answers: ['4', '5', '6', '7'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches Element hat das chemische Symbol "Au"?',
        answers: ['Silber', 'Gold', 'Aluminium', 'Kupfer'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'In welchem Jahr begann der Zweite Weltkrieg?',
        answers: ['1937', '1939', '1941', '1943'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Olympische Ringe gibt es?',
        answers: ['3', '4', '5', '6'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches ist das schnellste Tier im Wasser?',
        answers: ['Hai', 'Delfin', 'Schwertfisch', 'Thunfisch'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Wie heißt der höchste Berg der Erde?',
        answers: ['K2', 'Mount Everest', 'Kilimandscharo', 'Mont Blanc'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Welches Tier kann sein Gehirn regenerieren?',
        answers: ['Delfin', 'Krake', 'Elefant', 'Rabe'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie viele Minuten hat ein Tag?',
        answers: ['1200', '1380', '1440', '1500'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welche Farbe hat das "Black Box" Flugschreiber?',
        answers: ['Schwarz', 'Orange', 'Rot', 'Gelb'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'In welchem Kontinent liegt Ägypten?',
        answers: ['Asien', 'Europa', 'Afrika', 'Australien'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Wie viele Herzkammern hat ein Mensch?',
        answers: ['2', '3', '4', '5'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches Gas ist am häufigsten in der Erdatmosphäre?',
        answers: ['Sauerstoff', 'Stickstoff', 'Kohlendioxid', 'Argon'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Wie heißt der größte Ozean der Welt?',
        answers: ['Atlantik', 'Indischer Ozean', 'Pazifik', 'Arktischer Ozean'],
        correct: 2
    },
    {
        type: 'multiple',
        question: 'Welches Tier hat den längsten Hals?',
        answers: ['Elefant', 'Giraffe', 'Kamel', 'Strauß'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'In welchem Jahr endete der Erste Weltkrieg?',
        answers: ['1916', '1917', '1918', '1919'],
        correct: 2
    }
];

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle questions on load
const QUESTIONS = shuffleArray(QUESTIONS_POOL);

console.log('📝 Fragen wurden gemischt! Erste Frage:', QUESTIONS[0].question);
console.log('📊 Gesamt Fragen:', QUESTIONS.length, '(Alle Multiple Choice)');