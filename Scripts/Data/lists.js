/**@type {Array<Participant>}*/ let free = [new Participant("Pietro", "Del Luca", new Date(91, 1, 28), 'https://img.a.transfermarkt.technology/portrait/header/229414-1551622697.jpg?lm=1', [], [], "D", 5),
                                            new Participant("Keba", "Coly", new Date(98, 1, 20), 'https://img.a.transfermarkt.technology/portrait/header/415454-1598617096.jpg?lm=1', [], [],  "C", 7),
                                            new Participant("Matteo", "Picardo", new Date("01/07/2000"), 'https://img.a.transfermarkt.technology/portrait/header/400576-1522154031.png?lm=1', [], [], "D", 23),
                                            new Participant("Alessio", "Militari", new Date("15/01/1999"), 'https://img.a.transfermarkt.technology/portrait/header/315863-1495124471.jpg?lm=1', [], [], "D", 22),
                                            new Participant("Belmin", "Ridzal", new Date("03/06/2001"), 'https://img.a.transfermarkt.technology/portrait/header/563367-1630771307.jpg?lm=1', [], [], "A", 9)];

/**@type {Array<Person>}*/ let freeManagers = [new Participant("Graham", "Potter", new Date("20/05/1975"), 'https://img.a.transfermarkt.technology/portrait/header/23954-1662574188.jpg?lm=1'),
                    new Participant("Antonio", "Conte", new Date("31/07/1969"), 'https://img.a.transfermarkt.technology/portrait/header/3517-1502879329.jpg?lm=1'),
                    new Participant("Zinedine", "Zidane", new Date("23/06/1972"), 'https://img.a.transfermarkt.technology/portrait/header/21284-1502960718.jpg?lm=1')];

let catanzaroPlayers = [
    new Participant("Andrea", "Fuglinati", new Date(94, 9, 31), 'https://img.a.transfermarkt.technology/portrait/header/231381-1632464555.jpg?lm=1', [], [], "P", 1),
    new Participant("Andrea", "Sala", new Date(93, 8, 16), 'https://img.a.transfermarkt.technology/portrait/header/120347-1569399150.png?lm=1', [], [], "P", 16),
    
    new Participant("Nicolo'", "Brighenti", new Date(89, 7,1),'https://img.a.transfermarkt.technology/portrait/header/109110-1535012546.jpg?lm=1', [], [], "D", 23),
    new Participant("Luca", "Martinelli", new Date(88, 11, 20), 'https://img.a.transfermarkt.technology/portrait/header/84751-1613240463.png?lm=1', [], [], "D", 5),
    new Participant("Alberto", "Tentardini", new Date(96, 9, 21), 'https://img.a.transfermarkt.technology/portrait/header/281633-1543916354.jpg?lm=1', [], [], "D", 3),
    new Participant("Stefano", "Scognamillo", new Date(94, 4, 4), 'https://img.a.transfermarkt.technology/portrait/header/142990-1613242254.png?lm=1', [], [], "D", 14),
    new Participant("Pasquale", "Fazio", new Date(89, 5, 10), 'https://img.a.transfermarkt.technology/portrait/header/123641-1613241133.png?lm=1', [], [], "D", 13),

    new Participant("Luca", "Verna", new Date(92, 2, 6), 'https://img.a.transfermarkt.technology/portrait/header/167826-1613240789.png?lm=1', [], [], "C", 8),
    new Participant("Dimitrios", "Sounas", new Date(94, 7, 12), 'https://img.a.transfermarkt.technology/portrait/header/234137-1632465819.jpg?lm=1', [], [], "C", 24),
    new Participant("Gabriele", "Rolando", new Date(95, 3, 2), 'https://img.a.transfermarkt.technology/portrait/header/249068-1535016423.jpg?lm=1', [], [], "C", 7),
    new Participant("Andrea", "Ghion", new Date(2000, 1, 23), 'https://img.a.transfermarkt.technology/portrait/header/390163-1563276341.jpg?lm=1', [], [], "C", 18),

    new Participant("Tommaso", "Biasci", new Date(94, 10, 10), 'https://img.a.transfermarkt.technology/portrait/header/240129-1545917661.jpg?lm=1', [], [], "A", 28),
    new Participant("Pietro", "Iemello", new Date(92, 2, 6), 'https://img.a.transfermarkt.technology/portrait/header/62735-1613461376.jpg?lm=1', [], [], "A", 9),
    new Participant("Alessio", "Curcio", new Date(90, 2, 12), 'https://img.a.transfermarkt.technology/portrait/header/138816-1567152182.jpg?lm=1', [], [], "A", 21),
    new Participant("Enrico", "Brignola", new Date(99, 6, 8), 'https://img.a.transfermarkt.technology/portrait/header/323147-1596116722.jpg?lm=1', [], [], "A", 17)
];

let crotonePlayers = [
    new Participant("Paolo", "Branduani", new Date(89, 2, 9), 'https://img.a.transfermarkt.technology/portrait/header/119086-1666297561.jpg?lm=1', [], [], "P", 22),
    new Participant("Andrea", "Dini", new Date(96, 1, 20), 'https://img.a.transfermarkt.technology/portrait/header/355444-1666297647.jpg?lm=1', [], [], "P", 1),

    new Participant("Giuseppe", "Cuomo", new Date(98, 1, 2), 'https://img.a.transfermarkt.technology/portrait/header/365565-1666297851.jpg?lm=1', [], [], "D", 3),
    new Participant("Vladimir", "Golemic", new Date(91, 5, 28), 'https://img.a.transfermarkt.technology/portrait/header/169841-1666298018.jpg?lm=1', [], [], "D", 5),
    new Participant("Vasile", "Mogos", new Date(92, 9, 31), 'https://img.a.transfermarkt.technology/portrait/header/324214-1666298200.jpg?lm=1', [], [], "D", 14),
    new Participant("Carlo", "Crialese", new Date(92, 10, 14), 'https://img.a.transfermarkt.technology/portrait/header/280832-1666298099.jpg?lm=1', [], [], "D", 23),
    new Participant("Luca", "Calapai", new Date(93, 4, 20), 'https://img.a.transfermarkt.technology/portrait/header/168189-1666298155.jpg?lm=1', [], [], "D", 26),

    new Participant("Jacopo", "Petriccione", new Date(95, 1, 22), 'https://img.a.transfermarkt.technology/portrait/header/218067-1666298551.jpg?lm=1', [], [], "C", 10),
    new Participant("Marco", "Carraro", new Date(98, 0, 9), 'https://img.a.transfermarkt.technology/portrait/header/297630-1666298500.jpg?lm=1', [], [], "C", 21),
    new Participant("Theophilus", "Awua", new Date(98, 3, 24), 'https://img.a.transfermarkt.technology/portrait/header/427576-1666298604.jpg?lm=1', [], [], "C", 86),
    new Participant("Alessio", "Tribuzzi", new Date(98, 10, 19), 'https://img.a.transfermarkt.technology/portrait/header/395546-1666298428.jpg?lm=1', [], [], "C", 19),

    new Participant("Augustus", "Kargbo", new Date(99, 7, 24), 'https://img.a.transfermarkt.technology/portrait/header/549791-1666298996.jpg?lm=1', [], [], "A", 24),
    new Participant("Eugenio", "D'Ursi", new Date(95, 4, 7), 'https://img.a.transfermarkt.technology/portrait/header/341498-1675769170.jpg?lm=1', [], [], "A", 7),
    new Participant("Cosimo", "Chiricò", new Date(91, 9, 5), 'https://img.a.transfermarkt.technology/portrait/header/165852-1666298809.jpg?lm=1', [], [], "A", 32),
    new Participant("Guido", "Gomez", new Date(94, 4, 19), 'https://img.a.transfermarkt.technology/portrait/header/183969-1666298943.jpg?lm=1', [], [], "A", 9)

];

let pescaraPlayers = [
    new Participant("Alessandro", "Plizzari", new Date(2000, 2, 12), 'https://img.a.transfermarkt.technology/portrait/header/357991-1613573476.jpg?lm=1', [], [], "P", 22),
    new Participant("Andrea", "D'Aniello", new Date(2003, 4, 8), 'https://img.a.transfermarkt.technology/portrait/header/640544-1544983378.jpg?lm=1', [], [], "P", 31),
    
    new Participant("Paolo", "Gozzi", new Date(200, 3, 25), 'https://img.a.transfermarkt.technology/portrait/header/487333-1606986634.jpg?lm=1', [], [], "D", 32),
    new Participant("Riccardo", "Brosco", new Date(91, 1, 3), 'https://img.a.transfermarkt.technology/portrait/header/89034-1632462918.png?lm=1', [], [], "D", 13),
    new Participant("Matija", "Boben", new Date(94, 1, 26), 'https://img.a.transfermarkt.technology/portrait/header/149810-1570170608.jpg?lm=1', [], [], "D", 18),
    new Participant("Lorenzo", "Milani", new Date(2001, 4, 22), 'https://img.a.transfermarkt.technology/portrait/header/500274-1617954590.jpg?lm=1', [], [], "D", 2),
    new Participant("Filippo", "Pellecani", new Date(98, 1, 26), 'https://img.a.transfermarkt.technology/portrait/header/389841-1574411181.jpg?lm=1', [], [], "D", 23),

    new Participant("Luca", "Palmiero", new Date(96, 4, 1), 'https://img.a.transfermarkt.technology/portrait/header/240357-1598857316.jpg?lm=1', [], [], "C", 5),
    new Participant("Emmanuel", "Gyabuaa", new Date(2001, 8, 21), 'https://img.a.transfermarkt.technology/portrait/header/432089-1591368162.jpg?lm=1', [], [], "C", 6),
    new Participant("Salvatore", "Aloi", new Date(96, 10, 11), 'https://img.a.transfermarkt.technology/portrait/header/265967-1613237989.jpg?lm=1', [], [], "C", 8),
    new Participant("Luca", "Mora", new Date(88, 4, 10), 'https://img.a.transfermarkt.technology/portrait/header/110338-1602506652.jpg?lm=1', [], [], "C", 19),

    new Participant("Marco", "Delle Monache", new Date(2005, 1, 3), 'https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1', [], [], "A", 11),
    new Participant("Jacopo", "Desogus", new Date(2002, 9, 1), 'https://img.a.transfermarkt.technology/portrait/header/610878-1654778065.jpg?lm=1', [], [], "A", 21),
    new Participant("Edoardo", "Vergani", new Date(2001, 1, 6), 'https://img.a.transfermarkt.technology/portrait/header/421780-1602060277.jpg?lm=1', [], [], "A", 9),
    new Participant("Luigi", "Cuppone", new Date(97, 7, 6), 'https://img.a.transfermarkt.technology/portrait/header/352704-1632458734.jpg?lm=1', [], [], "A", 27)
];

let reggianaPlayers = [
    new Participant("Giacomo", "Venturi", new Date(92, 0, 2), 'https://img.a.transfermarkt.technology/portrait/header/120236-1581069881.jpg?lm=1', [], [], "P", 22),
    new Participant("Matteo", "Voltolini", new Date(96, 6, 30), 'https://img.a.transfermarkt.technology/portrait/header/341389-1581069912.jpg?lm=1', [], [], "P", 1),
    
    new Participant("Paolo", "Rozzio", new Date(92, 6, 22), 'https://img.a.transfermarkt.technology/portrait/header/61617-1583401500.jpg?lm=1', [], [], "D", 4),
    new Participant("Andrea", "Hristov", new Date(99, 2, 1), 'https://img.a.transfermarkt.technology/portrait/header/415520-1614147356.png?lm=1', [], [], "D", 55),
    new Participant("Michele", "Cremonesi", new Date(88, 3, 15), 'https://img.a.transfermarkt.technology/portrait/header/83409-1608093870.png?lm=1', [], [], "D", 26),
    new Participant("Riccardo", "Fiamozzi", new Date(93, 4, 18), 'https://img.a.transfermarkt.technology/portrait/header/197745-1634293761.jpg?lm=1', [], [], "D", 15),
    new Participant("Cristian", "Cauz", new Date(96, 7, 15), 'https://img.a.transfermarkt.technology/portrait/header/283421-1541912986.jpg?lm=1', [], [], "D", 3),

    new Participant("Luca", "Cigarini", new Date(86, 5, 20), 'https://img.a.transfermarkt.technology/portrait/header/33218-1449134033.jpg?lm=1', [], [], "C", 8),
    new Participant("Fausto", "Rossi", new Date(90, 11,3), 'https://img.a.transfermarkt.technology/portrait/header/81743-1464189918.jpg?lm=1', [], [], "C", 5),
    new Participant("Filippo", "Nardi", new Date(98, 2, 3), 'https://img.a.transfermarkt.technology/portrait/header/404969-1656687005.jpg?lm=1', [], [], "C", 24),
    new Participant("Abdoul", "Guiebre", new Date(97, 6, 17), 'https://img.a.transfermarkt.technology/portrait/header/507351-1636065800.jpg?lm=1', [], [], "C", 19),

    new Participant("Christian", "Capone", new Date(99, 3, 28), 'https://img.a.transfermarkt.technology/portrait/header/315856-1656582107.jpg?lm=1', [], [], "A", 28),
    new Participant("Marco", "Rosafio", new Date(94, 2, 19), 'https://img.a.transfermarkt.technology/portrait/header/199722-1602876876.jpg?lm=1', [], [], "A", 7),
    new Participant("Eric", "Lanini", new Date(94, 1, 25), 'https://img.a.transfermarkt.technology/portrait/header/199635-1558538346.JPG?lm=1', [], [], "A", 10),
    new Participant("Adriano", "Montalto", new Date(88, 3, 6), 'https://img.a.transfermarkt.technology/portrait/header/84763-1632469322.jpg?lm=1', [], [], "A", 32)
];

let cesenaPlayers = [
    new Participant("Andrea", "Tozzo", new Date(92, 7, 30), 'https://img.a.transfermarkt.technology/portrait/header/57657-1468935284.jpg?lm=1', [], [], "P", 1),
    new Participant("Luca", "Lewis", new Date(2001, 1, 22), 'https://img.a.transfermarkt.technology/portrait/header/534107-1618764135.jpg?lm=1', [], [], "P", 44),
    
    new Participant("Giuseppe", "Prestia", new Date(93, 10, 13), 'https://img.a.transfermarkt.technology/portrait/header/163187-1632459745.jpg?lm=1', [], [], "D", 19),
    new Participant("Andrea", "Ciofi", new Date(99, 5, 28), 'https://img.a.transfermarkt.technology/portrait/header/392524-1604742983.JPG?lm=1', [], [], "D", 15),
    new Participant("Mario", "Mercadante", new Date(95, 1, 27), 'https://img.a.transfermarkt.technology/portrait/header/208077-1636064488.jpg?lm=1', [], [], "D", 3),
    new Participant("Marco", "Calderoni", new Date(89, 1, 18), 'https://img.a.transfermarkt.technology/portrait/header/75327-1595943106.jpg?lm=1', [], [], "D", 27),
    new Participant("Alessandro", "Albertini", new Date(94, 3, 25), 'https://img.a.transfermarkt.technology/portrait/header/16043-1560051179.png?lm=1', [], [], "D", 16),

    new Participant("Francesco", "De Rose", new Date(87, 5, 21), 'https://img.a.transfermarkt.technology/portrait/header/124932-1608098068.jpg?lm=1', [], [], "C", 20),
    new Participant("Alessio", "Brambilla", new Date(2001, 5, 16), 'https://img.a.transfermarkt.technology/portrait/header/539131-1641380670.jpg?lm=1', [], [], "C", 77),
    new Participant("Saber", "Hraiech", new Date(95, 6, 30), 'https://img.a.transfermarkt.technology/portrait/header/256118-1604827087.jpg?lm=1', [], [], "C", 8),
    new Participant("Riccardo", "Chiarello", new Date(93, 9, 9), 'https://img.a.transfermarkt.technology/portrait/header/167810-1632460113.jpg?lm=1', [], [], "C", 10),

    new Participant("Mattia", "Mustacchio", new Date(89, 4, 17), 'https://img.a.transfermarkt.technology/portrait/header/56803-1632460256.jpg?lm=1', [], [], "A", 23),
    new Participant("Simone", "Corazza", new Date(91, 2, 22), 'https://img.a.transfermarkt.technology/portrait/header/155036-1632460470.jpg?lm=1', [], [], "A", 18),
    new Participant("Alexis", "Ferrante", new Date(95, 5, 27), 'https://img.a.transfermarkt.technology/portrait/header/176023-1410342148.jpg?lm=1', [], [], "A", 9),
    new Participant("Stiven", "Shpendi", new Date(2003, 4, 19), 'https://img.a.transfermarkt.technology/portrait/header/931567-1641380765.jpg?lm=1', [], [], "A", 11)
];

let virtusEntellaPlayers = [
    new Participant("Victor", "De Lucia", new Date("28/05/1996"), 'https://img.a.transfermarkt.technology/portrait/header/287752-1662934444.jpg?lm=1', [], [], "P", ),
    new Participant("Daniel", "Borra", new Date("28/07/1995"), 'https://img.a.transfermarkt.technology/portrait/header/240799-1662934609.jpg?lm=1', [], [], "P", ),
    
    new Participant("Andrea", "Paroni", new Date("14/10/1989"), 'https://img.a.transfermarkt.technology/portrait/header/57272-1662935162.jpg?lm=1', [], [], "D", ),
    new Participant("Marco", "Chiosa", new Date("19/11/1993"), 'https://img.a.transfermarkt.technology/portrait/header/163549-1662935829.jpg?lm=1', [], [], "D", ),
    new Participant("Stefano", "Reali", new Date("01/04/2003"), 'https://img.a.transfermarkt.technology/portrait/header/704459-1662935443.jpg?lm=1', [], [], "D", ),
    new Participant("Michele", "Pellizzer", new Date("22/05/1989"), 'https://img.a.transfermarkt.technology/portrait/header/104746-1662936251.jpg?lm=1', [], [], "D", ),
    new Participant("Claudio", "Manzi", new Date("21/06/2000"), 'https://img.a.transfermarkt.technology/portrait/header/390154-1675772636.jpg?lm=1', [], [], "D", ),

    new Participant("Kosovar", "Sadiki", new Date("27/08/1998"), 'https://img.a.transfermarkt.technology/portrait/header/429245-1662936154.jpg?lm=1', [], [], "C", ),
    new Participant("Giulio", "Favale", new Date("25/01/1998"), 'https://img.a.transfermarkt.technology/portrait/header/448395-1662936309.jpg?lm=1', [], [], "C", ),
    new Participant("Luca", "Barlocco", new Date("20/02/1995"), 'https://img.a.transfermarkt.technology/portrait/header/197741-1662936362.jpg?lm=1', [], [], "C", ),
    new Participant("Luca", "Parodi", new Date("06/04/1995"), 'https://img.a.transfermarkt.technology/portrait/header/256688-1662936082.jpg?lm=1', [], [], "C", ),

    new Participant("Davide", "Zappella", new Date("29/04/1998"), 'https://img.a.transfermarkt.technology/portrait/header/390120-1662935650.jpg?lm=1', [], [], "A", ),
    new Participant("Antonis", "Siatounis", new Date("26/08/2002"), 'https://img.a.transfermarkt.technology/portrait/header/554397-1663659613.jpg?lm=1', [], [], "A", ),
    new Participant("Armand", "Rada", new Date("10/01/1999"), 'https://img.a.transfermarkt.technology/portrait/header/408333-1662937297.jpg?lm=1', [], [], "A", ),
    new Participant("Andrea", "Paolucci", new Date("23/02/1986"), 'https://img.a.transfermarkt.technology/portrait/header/44540-1662937064.jpg?lm=1', [], [], "A", )
];

let feralpisaloPlayers = [
    new Participant("Andrea", "Corbari", new Date("26/04/1994"), 'https://img.a.transfermarkt.technology/portrait/header/598098-1662936863.jpg?lm=1', [], [], "P", ),
    new Participant("Simone", "Tascone", new Date("18/12/1998"), 'https://img.a.transfermarkt.technology/portrait/header/527180-1662936454.jpg?lm=1', [], [], "P", ),
    
    new Participant("Joshua", "Tenkorang", new Date("26/05/2000"), 'https://img.a.transfermarkt.technology/portrait/header/527180-1662936454.jpg?lm=1', [], [], "D", ),
    new Participant("Giacomo", "Tomaselli", new Date("25/07/1999"), 'https://img.a.transfermarkt.technology/portrait/header/418035-1675771061.jpg?lm=1', [], [], "D", ),
    new Participant("Gastòn", "Ramìrez", new Date("02/12/1990"), 'https://img.a.transfermarkt.technology/portrait/header/123742-1596030737.jpg?lm=1', [], [], "D", ),
    new Participant("Lorenzo", "Meazzi", new Date("28/05/2001"), 'https://img.a.transfermarkt.technology/portrait/medium/534166-1662938062.jpg?lm=1', [], [], "D", ),
    new Participant("Luca", "Clemenza", new Date("09/07/1997"), 'https://img.a.transfermarkt.technology/portrait/medium/291520-1662936705.jpg?lm=1', [], [], "D", ),

    new Participant("Leonardo", "Morosini", new Date("13/10/1995"), 'https://img.a.transfermarkt.technology/portrait/medium/240415-1662936641.jpg?lm=1', [], [], "C", ),
    new Participant("Luca", "Zamparo", new Date("19/09/1994"), 'https://img.a.transfermarkt.technology/portrait/medium/102413-1662934917.jpg?lm=1', [], [], "C", ),
    new Participant("Silvio", "merkaj", new Date("04/12/1997"), 'https://img.a.transfermarkt.technology/portrait/medium/460842-1662935067.jpg?lm=1', [], [], "C", ),
    new Participant("Alessandro", "Faggioli", new Date("02/02/2000"), 'https://img.a.transfermarkt.technology/portrait/medium/488515-1662935296.jpg?lm=1', [], [], "C", ),

    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", )
];

let pordenonePlayers = [
    new Participant("", "", new Date(), '', [], [], "P", ),
    new Participant("", "", new Date(), '', [], [], "P", ),
    
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),

    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),

    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", )
];

let leccoPlayers = [
    new Participant("", "", new Date(), '', [], [], "P", ),
    new Participant("", "", new Date(), '', [], [], "P", ),
    
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),
    new Participant("", "", new Date(), '', [], [], "D", ),

    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),
    new Participant("", "", new Date(), '', [], [], "C", ),

    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", ),
    new Participant("", "", new Date(), '', [], [], "A", )
];

let catanzaro = new Team("U.S. Catanzaro",
                new Address("Via Francesco Paglia", 1), 
                'https://upload.wikimedia.org/wikipedia/it/3/3f/US_CATANZARO_1929.png', 
                [], [], catanzaroPlayers, 
                new Participant("Vincenzo", "Vivarini", new Date("2/01/1966")))

 const teamList = [ catanzaro,
                    new Team("F.C. Crotone", 
                    new Address("Via Giovanni Paolo II", 1),
                    'https://upload.wikimedia.org/wikipedia/it/a/a3/FC_Crotone_Logo.svg',
                    [], [], crotonePlayers, 
                    new Participant("Lamberto", "Zauli", new Date("19/07/1971"))),

                    new Team("Delfino Pescara 1936", 
                    new Address("Viale V. Pepe", 1),
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Araldico_Citt%C3%A0_di_Pescara.svg/80px-Araldico_Citt%C3%A0_di_Pescara.svg.png',
                    [], [], pescaraPlayers, 
                    new Participant("Luciano", "Zauri", new Date("20/01/1978"))),

                    new Team("A.C. Reggiana 1919", 
                    new Address("Piazzale Atleti Azzuri D'Italia", 1),
                    'https://upload.wikimedia.org/wikipedia/it/thumb/2/2a/Reggianacalcio-stemma.png/140px-Reggianacalcio-stemma.png',
                    [], [], reggianaPlayers, 
                    new Participant("Aimo", "Diana", new Date("2/01/1978"))),

                    new Team("Cesena F.C.", 
                    new Address("Via Giovanni Spadolini", 110),
                    'https://upload.wikimedia.org/wikipedia/it/thumb/3/36/Cesena_FC.svg/140px-Cesena_FC.svg.png',
                    [], [], cesenaPlayers, 
                    new Participant("Domenico", "Toscano", new Date("4/08/1971"))),
                                    
                    new Team("Virtus Entella", 
                    new Address("Via Aldo Gastaldi", 22),
                    'https://upload.wikimedia.org/wikipedia/it/thumb/b/b2/Stemma_Virtus_Entella.png/140px-Stemma_Virtus_Entella.png',
                    [], [], virtusEntellaPlayers, 
                    new Participant("Gennaro", "Volpe", new Date("17/02/1981"))),

                    new Team("Feralpisalo'", 
                    new Address("Via Valle", 1),
                    'https://upload.wikimedia.org/wikipedia/it/thumb/3/32/Feralpi_Sal%C3%B2_AC_2019.png/140px-Feralpi_Sal%C3%B2_AC_2019.png',
                    [], [], feralpisaloPlayers, 
                    new Participant("Stefano", "Vecchi", new Date("20/07/1971"))),

                    new Team("Pordenone Calcio", 
                    new Address("Via dello Stadio", 6),
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_Pordenone_Calcio_2018_hq.png/140px-Logo_Pordenone_Calcio_2018_hq.png',
                    [], [], pordenonePlayers, 
                    new Participant("Domenico", "Di Carlo", new Date("23/03/1964"))),

                    new Team("Calcio Lecco 1912", 
                    new Address("Via Don Giuseppe Pozzi", 6),
                    'https://upload.wikimedia.org/wikipedia/it/thumb/1/1b/Calcio_Lecco_1912.svg/140px-Calcio_Lecco_1912.svg.png',
                    [], [], leccoPlayers, 
                    new Participant("Luciano", "Foschi", new Date("3/07/1967")))
                    ];

// Arbitri
const refImage = "https://cdn-icons-png.flaticon.com/512/26/26288.png";
/**@type {Array<Referee>}*/const referees=[new Referee("Maurizio", "Ciampi", new Date("24/11/1972"), refImage, []),
                new Referee("Daniele", "Perenzoni", new Date("16/08/1988"), refImage, []),
                new Referee("Maria", "Marotta", new Date("23/02/1984"), refImage, [])];


// Giornate del Girone A
let GroupDay1Amatches = [ new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 10), teamList[0], teamList[1], referees[0]),
                    new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 15), teamList[1], teamList[2], referees[1]),
                    new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 17), teamList[2], teamList[0], referees[2])], day1A = new Day(GroupDay1Amatches);
let GroupDay2Amatches= [new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 19), teamList[0], teamList[2], referees[0]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 21), teamList[1], teamList[0], referees[1]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 23), teamList[2], teamList[1], referees[2])], day2A = new Day(GroupDay2Amatches);
let groupAdays = [day1A, day2A];
let groupA = new Group([teamList[0], teamList[1], teamList[2]], groupAdays);
teamList[0].matches = GroupDay1Amatches.filter(x => x.isHomeTeam(teamList[0]) || x.isAwayTeam(teamList[0])).concat(GroupDay2Amatches.filter(x => x.isHomeTeam(teamList[0]) || x.isAwayTeam(teamList[0])));
teamList[1].matches = GroupDay1Amatches.filter(x => x.isHomeTeam(teamList[1]) || x.isAwayTeam(teamList[1])).concat(GroupDay2Amatches.filter(x => x.isHomeTeam(teamList[1]) || x.isAwayTeam(teamList[1])));
teamList[2].matches = GroupDay1Amatches.filter(x => x.isHomeTeam(teamList[2]) || x.isAwayTeam(teamList[2])).concat(GroupDay2Amatches.filter(x => x.isHomeTeam(teamList[2]) || x.isAwayTeam(teamList[2])));

// Giornate del Girone B
let GroupDay1Bmatches= [new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 10), teamList[3], teamList[4], referees[0]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 15), teamList[4], teamList[5], referees[1]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 17), teamList[5], teamList[3], referees[2])], day1B = new Day(GroupDay1Bmatches);
let GroupDay2Bmatches= [new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 19), teamList[3], teamList[4], referees[0]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 21), teamList[5], teamList[3], referees[1]),
                        new Match(new Date(new Date().getFullYear(), new Date().getMonth(), 23), teamList[4], teamList[5], referees[2])], day2B = new Day(GroupDay2Bmatches);
let groupBdays = [day1B, day2B];
let groupB = new Group([teamList[3], teamList[4], teamList[5]], groupBdays);
                

let groups = [groupA, groupB];
let season = new Season(groups, 1);
