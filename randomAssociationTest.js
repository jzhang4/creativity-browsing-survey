'use strict';

/*
 * Load the model data of the problem 2 of cs142's project4.
 * We load into the property cs142models.statesModel a function that returns  an array of
 * strings with the names of the states.
 *
 * See README.md for more details
 */

var RATmodels;

if (!RATmodels) {
   RATmodels = {};
}

// first three words followed by answer
//36 questions

//{"first":"","second":"","third":"","answer":""},
RATmodels.RATList = function () {
   return [
  {
    "items": [
      "cottage",
      "swiss",
      "cake"
    ],
    "answer": "cheese",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "cream",
      "skate",
      "water"
    ],
    "answer": "ice",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "loser",
      "throat",
      "spot"
    ],
    "answer": "sore",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "show",
      "life",
      "row"
    ],
    "answer": "boat",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "night",
      "wrist",
      "stop"
    ],
    "answer": "watch",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "duck",
      "fold",
      "dollar"
    ],
    "answer": "bill",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "rocking",
      "wheel",
      "high"
    ],
    "answer": "chair",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "dew",
      "comb",
      "bee"
    ],
    "answer": "honey",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "fountain",
      "baking",
      "pop"
    ],
    "answer": "soda",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "preserve",
      "ranger",
      "tropical"
    ],
    "answer": "forest",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "aid",
      "rubber",
      "wagon"
    ],
    "answer": "band",
    "difficulty": "Easy"
  },
  {
    "items": [
      "flake",
      "mobile",
      "cone"
    ],
    "answer": "snow",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cracker",
      "fly",
      "fighter"
    ],
    "answer": "fire",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "safety",
      "cushion",
      "point"
    ],
    "answer": "pin",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cane",
      "daddy",
      "plum"
    ],
    "answer": "sugar",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "dream",
      "break",
      "light"
    ],
    "answer": "day",
    "difficulty": "Easy"
  },
  {
    "items": [
      "fish",
      "mine",
      "rush"
    ],
    "answer": "gold",
    "difficulty": "Easy"
  },
  {
    "items": [
      "political",
      "surprise",
      "line"
    ],
    "answer": "party",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "measure",
      "worm",
      "video"
    ],
    "answer": "tape",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "high",
      "district",
      "house"
    ],
    "answer": "school/court",
    "difficulty": "Easy"
  },
  {
    "items": [
      "sense",
      "courtesy",
      "place"
    ],
    "answer": "common",
    "difficulty": "Medium"
  },
  {
    "items": [
      "worm",
      "shelf",
      "end"
    ],
    "answer": "book",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "piece",
      "mind",
      "dating"
    ],
    "answer": "game",
    "difficulty": "Hard"
  },
  {
    "items": [
      "flower",
      "friend",
      "scout"
    ],
    "answer": "girl",
    "difficulty": "Medium"
  },
  {
    "items": [
      "river",
      "note",
      "account"
    ],
    "answer": "bank",
    "difficulty": "Easy"
  },
  {
    "items": [
      "print",
      "berry",
      "bird"
    ],
    "answer": "blue",
    "difficulty": "Easy"
  },
  {
    "items": [
      "pie",
      "luck",
      "belly"
    ],
    "answer": "pot",
    "difficulty": "Medium"
  },
  {
    "items": [
      "date",
      "alley",
      "fold"
    ],
    "answer": "blind",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "opera",
      "hand",
      "dish"
    ],
    "answer": "soap",
    "difficulty": "Medium"
  },
  {
    "items": [
      "cadet",
      "capsule",
      "ship"
    ],
    "answer": "space",
    "difficulty": "Easy"
  },
  {
    "items": [
      "fur",
      "rack",
      "tail"
    ],
    "answer": "coat",
    "difficulty": "Easy"
  },
  {
    "items": [
      "stick",
      "maker",
      "point"
    ],
    "answer": "match",
    "difficulty": "Hard"
  },
  {
    "items": [
      "hound",
      "pressure",
      "shot"
    ],
    "answer": "blood",
    "difficulty": "Easy"
  },
  {
    "items": [
      "fox",
      "man",
      "peep"
    ],
    "answer": "hole",
    "difficulty": "Medium"
  },
  {
    "items": [
      "sleeping",
      "bean",
      "trash"
    ],
    "answer": "bag",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "dust",
      "cereal",
      "fish"
    ],
    "answer": "bowl",
    "difficulty": "Hard"
  },
  {
    "items": [
      "light",
      "birthday",
      "stick"
    ],
    "answer": "candle",
    "difficulty": "Medium"
  },
  {
    "items": [
      "food",
      "forward",
      "break"
    ],
    "answer": "fast",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "shine",
      "beam",
      "struck"
    ],
    "answer": "moon",
    "difficulty": "Medium"
  },
  {
    "items": [
      "peach",
      "arm",
      "tar"
    ],
    "answer": "pit",
    "difficulty": "Medium"
  },
  {
    "items": [
      "water",
      "mine",
      "shaker"
    ],
    "answer": "salt",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "palm",
      "shoe",
      "house"
    ],
    "answer": "tree",
    "difficulty": "Medium"
  },
  {
    "items": [
      "basket",
      "eight",
      "snow"
    ],
    "answer": "ball",
    "difficulty": "Easy"
  },
  {
    "items": [
      "wheel",
      "hand",
      "shopping"
    ],
    "answer": "cart",
    "difficulty": "Medium"
  },
  {
    "items": [
      "right",
      "cat",
      "carbon"
    ],
    "answer": "copy",
    "difficulty": "Hard"
  },
  {
    "items": [
      "home",
      "sea",
      "bed"
    ],
    "answer": "sick",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "nuclear",
      "feud",
      "album"
    ],
    "answer": "family",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "sandwich",
      "house",
      "golf"
    ],
    "answer": "club",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "cross",
      "rain",
      "tie"
    ],
    "answer": "bow",
    "difficulty": "Hard"
  },
  {
    "items": [
      "sage",
      "paint",
      "hair"
    ],
    "answer": "brush",
    "difficulty": "Medium"
  },
  {
    "items": [
      "french",
      "car",
      "shoe"
    ],
    "answer": "horn",
    "difficulty": "Medium"
  },
  {
    "items": [
      "boot",
      "summer",
      "ground"
    ],
    "answer": "camp",
    "difficulty": "Medium"
  },
  {
    "items": [
      "chamber",
      "mask",
      "natural"
    ],
    "answer": "gas",
    "difficulty": "Hard"
  },
  {
    "items": [
      "mill",
      "tooth",
      "dust"
    ],
    "answer": "saw",
    "difficulty": "Medium"
  },
  {
    "items": [
      "main",
      "sweeper",
      "light"
    ],
    "answer": "street",
    "difficulty": "Medium"
  },
  {
    "items": [
      "pike",
      "coat",
      "signal"
    ],
    "answer": "turn",
    "difficulty": "Medium"
  },
  {
    "items": [
      "office",
      "mail",
      "hat"
    ],
    "answer": "box",
    "difficulty": "Hard"
  },
  {
    "items": [
      "fly",
      "clip",
      "wall"
    ],
    "answer": "paper",
    "difficulty": "Medium"
  },
  {
    "items": [
      "age",
      "mile",
      "sand"
    ],
    "answer": "stone",
    "difficulty": "Hard"
  },
  {
    "items": [
      "catcher",
      "food",
      "hot"
    ],
    "answer": "dog",
    "difficulty": "Hard"
  },
  {
    "items": [
      "wagon",
      "break",
      "radio"
    ],
    "answer": "station",
    "difficulty": "Medium"
  },
  {
    "items": [
      "tank",
      "hill",
      "secret"
    ],
    "answer": "top",
    "difficulty": "Hard"
  },
  {
    "items": [
      "health",
      "taker",
      "less"
    ],
    "answer": "care",
    "difficulty": "Hard"
  },
  {
    "items": [
      "lift",
      "card",
      "mask"
    ],
    "answer": "face",
    "difficulty": "Hard"
  },
  {
    "items": [
      "dress",
      "dial",
      "flower"
    ],
    "answer": "sun",
    "difficulty": "Medium"
  },
  {
    "items": [
      "force",
      "line",
      "mail"
    ],
    "answer": "air",
    "difficulty": "Hard"
  },
  {
    "items": [
      "guy",
      "rain",
      "down"
    ],
    "answer": "fall",
    "difficulty": "Hard"
  },
  {
    "items": [
      "eight",
      "skate",
      "stick"
    ],
    "answer": "figure",
    "difficulty": "Medium"
  },
  {
    "items": [
      "down",
      "question",
      "check"
    ],
    "answer": "mark",
    "difficulty": "Medium"
  },
  {
    "items": [
      "animal",
      "back",
      "rat"
    ],
    "answer": "pack",
    "difficulty": "Hard"
  },
  {
    "items": [
      "officer",
      "cash",
      "larceny"
    ],
    "answer": "petty",
    "difficulty": "Hard"
  },
  {
    "items": [
      "pine",
      "crab",
      "sauce"
    ],
    "answer": "apple",
    "difficulty": "Hard"
  },
  {
    "items": [
      "house",
      "thumb",
      "pepper"
    ],
    "answer": "green",
    "difficulty": "Hard"
  },
  {
    "items": [
      "carpet",
      "alert",
      "ink"
    ],
    "answer": "red",
    "difficulty": "Medium"
  },
  {
    "items": [
      "master",
      "toss",
      "finger"
    ],
    "answer": "ring",
    "difficulty": "Medium"
  },
  {
    "items": [
      "hammer",
      "gear",
      "hunter"
    ],
    "answer": "head",
    "difficulty": "Medium"
  },
  {
    "items": [
      "knife",
      "light",
      "pal"
    ],
    "answer": "pen",
    "difficulty": "Medium"
  },
  {
    "items": [
      "foul",
      "ground",
      "mate"
    ],
    "answer": "play",
    "difficulty": "Hard"
  },
  {
    "items": [
      "change",
      "circuit",
      "cake"
    ],
    "answer": "short",
    "difficulty": "Hard"
  },
  {
    "items": [
      "way",
      "board",
      "sleep"
    ],
    "answer": "walk",
    "difficulty": "Medium"
  },
  {
    "items": [
      "blank",
      "list",
      "mate"
    ],
    "answer": "check",
    "difficulty": "Medium"
  },
  {
    "items": [
      "tail",
      "water",
      "flood"
    ],
    "answer": "gate",
    "difficulty": "Hard"
  },
  {
    "items": [
      "marshal",
      "child",
      "piano"
    ],
    "answer": "grand",
    "difficulty": "Hard"
  },
  {
    "items": [
      "cover",
      "arm",
      "wear"
    ],
    "answer": "under",
    "difficulty": "Hard"
  },
  {
    "items": [
      "rain",
      "test",
      "stomach"
    ],
    "answer": "acid",
    "difficulty": "Hard"
  },
  {
    "items": [
      "time",
      "blown",
      "nelson"
    ],
    "answer": "full",
    "difficulty": "Hard"
  },
  {
    "items": [
      "pile",
      "market",
      "room"
    ],
    "answer": "stock",
    "difficulty": "Hard"
  },
  {
    "items": [
      "mouse",
      "bear",
      "sand"
    ],
    "answer": "trap",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cat",
      "number",
      "phone"
    ],
    "answer": "call",
    "difficulty": "Medium"
  },
  {
    "items": [
      "keg",
      "puff",
      "room"
    ],
    "answer": "powder",
    "difficulty": "Medium"
  },
  {
    "items": [
      "trip",
      "house",
      "goal"
    ],
    "answer": "field",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "fork",
      "dark",
      "man"
    ],
    "answer": "pitch",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "fence",
      "card",
      "master"
    ],
    "answer": "post",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "test",
      "runner",
      "map"
    ],
    "answer": "road",
    "difficulty": "Hard"
  },
  {
    "items": [
      "dive",
      "light",
      "rocket"
    ],
    "answer": "sky",
    "difficulty": "Hard"
  },
  {
    "items": [
      "man",
      "glue",
      "star"
    ],
    "answer": "super",
    "difficulty": "Hard"
  },
  {
    "items": [
      "tooth",
      "potato",
      "heart"
    ],
    "answer": "sweet",
    "difficulty": "Hard"
  },
  {
    "items": [
      "illness",
      "bus",
      "computer"
    ],
    "answer": "terminal",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "type",
      "ghost",
      "screen"
    ],
    "answer": "writer",
    "difficulty": "Medium"
  },
  {
    "items": [
      "mail",
      "board",
      "lung"
    ],
    "answer": "black",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "teeth",
      "arrest",
      "start"
    ],
    "answer": "false",
    "difficulty": "Hard"
  },
  {
    "items": [
      "iron",
      "shovel",
      "engine"
    ],
    "answer": "steam",
    "difficulty": "Hard"
  },
  {
    "items": [
      "wet",
      "law",
      "business"
    ],
    "answer": "suit",
    "difficulty": "Medium"
  },
  {
    "items": [
      "rope",
      "truck",
      "line"
    ],
    "answer": "tow",
    "difficulty": "Hard"
  },
  {
    "items": [
      "off",
      "military",
      "first"
    ],
    "answer": "base",
    "difficulty": "Hard"
  },
  {
    "items": [
      "spoon",
      "cloth",
      "card"
    ],
    "answer": "table",
    "difficulty": "Hard"
  },
  {
    "items": [
      "cut",
      "cream",
      "war"
    ],
    "answer": "cold",
    "difficulty": "Hard"
  },
  {
    "items": [
      "note",
      "chain",
      "master"
    ],
    "answer": "key",
    "difficulty": "Hard"
  },
  {
    "items": [
      "shock",
      "shave",
      "taste"
    ],
    "answer": "after",
    "difficulty": "Hard"
  },
  {
    "items": [
      "wise",
      "work",
      "tower"
    ],
    "answer": "clock",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "grass",
      "king",
      "meat"
    ],
    "answer": "crab",
    "difficulty": "Hard"
  },
  {
    "items": [
      "baby",
      "spring",
      "cap"
    ],
    "answer": "shower",
    "difficulty": "Hard"
  },
  {
    "items": [
      "break",
      "bean",
      "cake"
    ],
    "answer": "coffee",
    "difficulty": "Hard"
  },
  {
    "items": [
      "cry",
      "front",
      "ship"
    ],
    "answer": "battle",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "hold",
      "print",
      "stool"
    ],
    "answer": "foot",
    "difficulty": "Hard"
  },
  {
    "items": [
      "roll",
      "bean",
      "fish"
    ],
    "answer": "jelly",
    "difficulty": "Hard"
  },
  {
    "items": [
      "horse",
      "human",
      "drag"
    ],
    "answer": "race",
    "difficulty": "Medium"
  },
  {
    "items": [
      "oil",
      "bar",
      "tuna"
    ],
    "answer": "salad",
    "difficulty": "Hard"
  },
  {
    "items": [
      "bottom",
      "curve",
      "hop"
    ],
    "answer": "bell",
    "difficulty": "Hard"
  },
  {
    "items": [
      "tomato",
      "bomb",
      "picker"
    ],
    "answer": "cherry",
    "difficulty": "Hard"
  },
  {
    "items": [
      "pea",
      "shell",
      "chest"
    ],
    "answer": "nut",
    "difficulty": "Hard"
  },
  {
    "items": [
      "line",
      "fruit",
      "drunk"
    ],
    "answer": "punch",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "bump",
      "egg",
      "step"
    ],
    "answer": "goose",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "fight",
      "control",
      "machine"
    ],
    "answer": "gun",
    "difficulty": "Hard"
  },
  {
    "items": [
      "home",
      "arm",
      "room"
    ],
    "answer": "rest",
    "difficulty": "Hard"
  },
  {
    "items": [
      "child",
      "scan",
      "wash"
    ],
    "answer": "brain",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "nose",
      "stone",
      "bear"
    ],
    "answer": "brown",
    "difficulty": "Hard"
  },
  {
    "items": [
      "end",
      "line",
      "lock"
    ],
    "answer": "dead",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "control",
      "place",
      "rate"
    ],
    "answer": "birth",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "lounge",
      "hour",
      "napkin"
    ],
    "answer": "cocktail",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "artist",
      "hatch",
      "route"
    ],
    "answer": "escape",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "pet",
      "bottom",
      "garden"
    ],
    "answer": "rock",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "mate",
      "shoes",
      "total"
    ],
    "answer": "running",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "self",
      "attorney",
      "spending"
    ],
    "answer": "defense",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "board",
      "blade",
      "back"
    ],
    "answer": "switch",
    "difficulty": "Hard"
  },
  {
    "items": [
      "land",
      "hand",
      "house"
    ],
    "answer": "farm",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "hungry",
      "order",
      "belt"
    ],
    "answer": "money",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "forward",
      "flush",
      "razor"
    ],
    "answer": "straight",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "shadow",
      "chart",
      "drop"
    ],
    "answer": "eye",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "way",
      "ground",
      "weather"
    ],
    "answer": "fair",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "cast",
      "side",
      "jump"
    ],
    "answer": "broad",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "back",
      "step",
      "screen"
    ],
    "answer": "door",
    "difficulty": "Hard"
  },
  {
    "items": [
      "reading",
      "service",
      "stick"
    ],
    "answer": "lip",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "over",
      "plant",
      "horse"
    ],
    "answer": "power",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "falling",
      "actor",
      "dust"
    ],
    "answer": "star",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "broken",
      "clear",
      "eye"
    ],
    "answer": "glass",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "skunk",
      "kings",
      "boiled"
    ],
    "answer": "cabbage",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "widow",
      "bite",
      "monkey"
    ],
    "answer": "spider",
    "difficulty": "Easy"
  },
  {
    "items": [
      "bass",
      "complex",
      "sleep"
    ],
    "answer": "deep",
    "difficulty": "Easy"
  },
  {
    "items": [
      "coin",
      "quick",
      "spoon"
    ],
    "answer": "silver",
    "difficulty": "Easy"
  },
  {
    "items": [
      "gold",
      "stool",
      "tender"
    ],
    "answer": "bar",
    "difficulty": "Easy"
  },
  {
    "items": [
      "time",
      "hair",
      "stretch"
    ],
    "answer": "long",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cracker",
      "union",
      "rabbit"
    ],
    "answer": "jack",
    "difficulty": "Medium"
  },
  {
    "items": [
      "bald",
      "screech",
      "emblem"
    ],
    "answer": "eagle",
    "difficulty": "Medium"
  },
  {
    "items": [
      "blood",
      "music",
      "cheese"
    ],
    "answer": "blue",
    "difficulty": "Medium"
  },
  {
    "items": [
      "manners",
      "round",
      "tennis"
    ],
    "answer": "table",
    "difficulty": "Medium"
  },
  {
    "items": [
      "off",
      "trumpet",
      "atomic"
    ],
    "answer": "blast",
    "difficulty": "Medium"
  },
  {
    "items": [
      "playing",
      "credit",
      "report"
    ],
    "answer": "card",
    "difficulty": "Medium"
  },
  {
    "items": [
      "rabbit",
      "cloud",
      "house"
    ],
    "answer": "white",
    "difficulty": "Medium"
  },
  {
    "items": [
      "room",
      "blood",
      "salts"
    ],
    "answer": "bath",
    "difficulty": "Medium"
  },
  {
    "items": [
      "salt",
      "deep",
      "foam"
    ],
    "answer": "sea",
    "difficulty": "Medium"
  },
  {
    "items": [
      "square",
      "cardboard",
      "open"
    ],
    "answer": "box",
    "difficulty": "Medium"
  },
  {
    "items": [
      "water",
      "tobacco",
      "stove"
    ],
    "answer": "pipe",
    "difficulty": "Medium"
  },
  {
    "items": [
      "ache",
      "hunter",
      "cabbage"
    ],
    "answer": "head",
    "difficulty": "Medium"
  },
  {
    "items": [
      "chamber",
      "staff",
      "box"
    ],
    "answer": "music",
    "difficulty": "Medium"
  },
  {
    "items": [
      "high",
      "book",
      "sour"
    ],
    "answer": "note",
    "difficulty": "Medium"
  },
  {
    "items": [
      "lick",
      "sprinkle",
      "mines"
    ],
    "answer": "salt",
    "difficulty": "Medium"
  },
  {
    "items": [
      "pure",
      "blue",
      "fall"
    ],
    "answer": "water",
    "difficulty": "Medium"
  },
  {
    "items": [
      "snack",
      "line",
      "birthday"
    ],
    "answer": "party",
    "difficulty": "Medium"
  },
  {
    "items": [
      "square",
      "telephone",
      "club"
    ],
    "answer": "book",
    "difficulty": "Medium"
  },
  {
    "items": [
      "surprise",
      "wrap",
      "care"
    ],
    "answer": "gift",
    "difficulty": "Medium"
  },
  {
    "items": [
      "ticket",
      "shop",
      "broker"
    ],
    "answer": "pawn",
    "difficulty": "Medium"
  },
  {
    "items": [
      "barrel",
      "root",
      "belly"
    ],
    "answer": "beer",
    "difficulty": "Medium"
  },
  {
    "items": [
      "blade",
      "witted",
      "weary"
    ],
    "answer": "dull",
    "difficulty": "Medium"
  },
  {
    "items": [
      "cherry",
      "time",
      "smell"
    ],
    "answer": "blossom",
    "difficulty": "Medium"
  },
  {
    "items": [
      "notch",
      "flight",
      "spin"
    ],
    "answer": "top",
    "difficulty": "Medium"
  },
  {
    "items": [
      "strap",
      "pocket",
      "time"
    ],
    "answer": "watch",
    "difficulty": "Medium"
  },
  {
    "items": [
      "walker",
      "main",
      "sweeper"
    ],
    "answer": "street",
    "difficulty": "Medium"
  },
  {
    "items": [
      "wicked",
      "bustle",
      "slicker"
    ],
    "answer": "city",
    "difficulty": "Medium"
  },
  {
    "items": [
      "chocolate",
      "fortune",
      "tin"
    ],
    "answer": "cookie",
    "difficulty": "Hard"
  },
  {
    "items": [
      "color",
      "numbers",
      "oil"
    ],
    "answer": "paint",
    "difficulty": "Hard"
  },
  {
    "items": [
      "mouse",
      "sharp",
      "blue"
    ],
    "answer": "cheese",
    "difficulty": "Hard"
  },
  {
    "items": [
      "sandwich",
      "golf",
      "foot"
    ],
    "answer": "club",
    "difficulty": "Hard"
  },
  {
    "items": [
      "silk",
      "cream",
      "even"
    ],
    "answer": "smooth",
    "difficulty": "Hard"
  },
  {
    "items": [
      "speak",
      "money",
      "street"
    ],
    "answer": "easy",
    "difficulty": "Hard"
  },
  {
    "items": [
      "big",
      "leaf",
      "shade"
    ],
    "answer": "tree",
    "difficulty": "Hard"
  },
  {
    "items": [
      "envy",
      "golf",
      "beans"
    ],
    "answer": "green",
    "difficulty": "Hard"
  },
  {
    "items": [
      "hall",
      "car",
      "swimming"
    ],
    "answer": "pool",
    "difficulty": "Hard"
  },
  {
    "items": [
      "ink",
      "herring",
      "neck"
    ],
    "answer": "red",
    "difficulty": "Hard"
  },
  {
    "items": [
      "measure",
      "desk",
      "scotch"
    ],
    "answer": "tape",
    "difficulty": "Hard"
  },
  {
    "items": [
      "strike",
      "same",
      "tennis"
    ],
    "answer": "match",
    "difficulty": "Hard"
  },
  {
    "items": [
      "athletes",
      "web",
      "rabbit"
    ],
    "answer": "foot",
    "difficulty": "Hard"
  },
  {
    "items": [
      "board",
      "magic",
      "death"
    ],
    "answer": "black",
    "difficulty": "Hard"
  },
  {
    "items": [
      "lapse",
      "vivid",
      "elephant"
    ],
    "answer": "memory",
    "difficulty": "Hard"
  },
  {
    "items": [
      "puss",
      "tart",
      "spoiled"
    ],
    "answer": "sour",
    "difficulty": "Hard"
  },
  {
    "items": [
      "rock",
      "times",
      "steel"
    ],
    "answer": "hard",
    "difficulty": "Hard"
  },
  {
    "items": [
      "stop",
      "petty",
      "sneak"
    ],
    "answer": "thief",
    "difficulty": "Hard"
  },
  {
    "items": [
      "thread",
      "pine",
      "pain"
    ],
    "answer": "needle",
    "difficulty": "Hard"
  },
  {
    "items": [
      "zone",
      "still",
      "noise"
    ],
    "answer": "quiet",
    "difficulty": "Hard"
  },
  {
    "items": [
      "cloth",
      "sad",
      "out"
    ],
    "answer": "sack",
    "difficulty": "Hard"
  },
  {
    "items": [
      "cotton",
      "bathtub",
      "tonic"
    ],
    "answer": "gin",
    "difficulty": "Hard"
  },
  {
    "items": [
      "foot",
      "collection",
      "out"
    ],
    "answer": "stamp",
    "difficulty": "Hard"
  },
  {
    "items": [
      "inch",
      "deal",
      "peg"
    ],
    "answer": "square",
    "difficulty": "Hard"
  },
  {
    "items": [
      "jump",
      "kill",
      "bliss"
    ],
    "answer": "joy",
    "difficulty": "Hard"
  },
  {
    "items": [
      "magic",
      "plush",
      "floor"
    ],
    "answer": "carpet",
    "difficulty": "Hard"
  },
  {
    "items": [
      "note",
      "dive",
      "chair"
    ],
    "answer": "high",
    "difficulty": "Hard"
  },
  {
    "items": [
      "stalk",
      "trainer",
      "king"
    ],
    "answer": "lion",
    "difficulty": "Hard"
  },
  {
    "items": [
      "bump",
      "throat",
      "sum"
    ],
    "answer": "lump",
    "difficulty": "Hard"
  },
  {
    "items": [
      "shopping",
      "washer",
      "picture"
    ],
    "answer": "window",
    "difficulty": "Hard"
  },
  {
    "items": [
      "blank",
      "white",
      "lines"
    ],
    "answer": "paper",
    "difficulty": "Hard"
  },
  {
    "items": [
      "stick",
      "light",
      "birthday"
    ],
    "answer": "candle",
    "difficulty": "Hard"
  },
  {
    "items": [
      "sore",
      "shoulder",
      "sweat"
    ],
    "answer": "cold",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "call",
      "pay",
      "line"
    ],
    "answer": "phone",
    "difficulty": ""
  },
  {
    "items": [
      "end",
      "burning",
      "blue"
    ],
    "answer": "book",
    "difficulty": ""
  },
  {
    "items": [
      "man",
      "hot",
      "sure"
    ],
    "answer": "fire",
    "difficulty": ""
  },
  {
    "items": [
      "stick",
      "pal",
      "ball"
    ],
    "answer": "pin",
    "difficulty": ""
  },
  {
    "items": [
      "blue",
      "cake",
      "cottage"
    ],
    "answer": "cheese",
    "difficulty": ""
  },
  {
    "items": [
      "man",
      "wheel",
      "high"
    ],
    "answer": "chair",
    "difficulty": ""
  },
  {
    "items": [
      "motion",
      "poke",
      "down"
    ],
    "answer": "slow",
    "difficulty": ""
  },
  {
    "items": [
      "line",
      "birthday",
      "surprise"
    ],
    "answer": "party",
    "difficulty": ""
  },
  {
    "items": [
      "wood",
      "liquor",
      "luck"
    ],
    "answer": "hard",
    "difficulty": ""
  },
  {
    "items": [
      "house",
      "village",
      "golf"
    ],
    "answer": "green",
    "difficulty": ""
  },
  {
    "items": [
      "plan",
      "show",
      "walker"
    ],
    "answer": "floor",
    "difficulty": ""
  },
  {
    "items": [
      "key",
      "wall",
      "previous"
    ],
    "answer": "stone",
    "difficulty": ""
  },
  {
    "items": [
      "bell",
      "iron",
      "tender"
    ],
    "answer": "bar",
    "difficulty": ""
  },
  {
    "items": [
      "water",
      "youth",
      "soda"
    ],
    "answer": "fountain",
    "difficulty": ""
  },
  {
    "items": [
      "base",
      "snow",
      "dance"
    ],
    "answer": "ball",
    "difficulty": ""
  },
  {
    "items": [
      "stop",
      "kart",
      "slow"
    ],
    "answer": "go",
    "difficulty": ""
  },
  {
    "items": [
      "up",
      "book",
      "charge"
    ],
    "answer": "cover",
    "difficulty": ""
  },
  {
    "items": [
      "tin",
      "writer",
      "my"
    ],
    "answer": "type",
    "difficulty": ""
  },
  {
    "items": [
      "leg",
      "arm",
      "person"
    ],
    "answer": "chair",
    "difficulty": ""
  },
  {
    "items": [
      "weight",
      "out",
      "pencil"
    ],
    "answer": "lead",
    "difficulty": ""
  },
  {
    "items": [
      "spin",
      "tip",
      "shape"
    ],
    "answer": "top",
    "difficulty": ""
  },
  {
    "items": [
      "sharp",
      "tick",
      "tie"
    ],
    "answer": "tack",
    "difficulty": ""
  },
  {
    "items": [
      "out",
      "band",
      "night"
    ],
    "answer": "watch",
    "difficulty": ""
  },
  {
    "items": [
      "cool",
      "house",
      "fat"
    ],
    "answer": "cat",
    "difficulty": ""
  },
  {
    "items": [
      "back",
      "go",
      "light"
    ],
    "answer": "stop",
    "difficulty": ""
  },
  {
    "items": [
      "man",
      "order",
      "air"
    ],
    "answer": "mail",
    "difficulty": ""
  },
  {
    "items": [
      "bath",
      "up",
      "burst"
    ],
    "answer": "bubble",
    "difficulty": ""
  },
  {
    "items": [
      "ball",
      "out",
      "blue"
    ],
    "answer": "black",
    "difficulty": ""
  },
  {
    "items": [
      "up",
      "around",
      "rear"
    ],
    "answer": "end",
    "difficulty": ""
  },
  {
    "items": [
      "house",
      "blanket",
      "ball"
    ],
    "answer": "beach",
    "difficulty": "Hard"
  },
  {
    "items": [
      "trap",
      "polar",
      "claw"
    ],
    "answer": "bear",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "cinder",
      "building",
      "buster"
    ],
    "answer": "block",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "line",
      "patrol",
      "town"
    ],
    "answer": "border",
    "difficulty": "Hard"
  },
  {
    "items": [
      "thorn",
      "whack",
      "rose"
    ],
    "answer": "bush",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "garbage",
      "beer",
      "paint"
    ],
    "answer": "can",
    "difficulty": "Easy"
  },
  {
    "items": [
      "scan",
      "nap",
      "burglar"
    ],
    "answer": "cat",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "trap",
      "back",
      "screen"
    ],
    "answer": "door",
    "difficulty": "Easy"
  },
  {
    "items": [
      "through",
      "disk",
      "way"
    ],
    "answer": "drive",
    "difficulty": "Hard"
  },
  {
    "items": [
      "tax",
      "real",
      "fourth"
    ],
    "answer": "estate",
    "difficulty": "Hard"
  },
  {
    "items": [
      "life",
      "color",
      "coast"
    ],
    "answer": "guard",
    "difficulty": "Hard"
  },
  {
    "items": [
      "wave",
      "lamp",
      "dry"
    ],
    "answer": "heat",
    "difficulty": "Hard"
  },
  {
    "items": [
      "glass",
      "rush",
      "happy"
    ],
    "answer": "hour",
    "difficulty": "Easy"
  },
  {
    "items": [
      "waffle",
      "lung",
      "tire"
    ],
    "answer": "iron",
    "difficulty": "Medium"
  },
  {
    "items": [
      "poison",
      "league",
      "creeping"
    ],
    "answer": "ivy",
    "difficulty": "Medium"
  },
  {
    "items": [
      "pain",
      "serial",
      "whale"
    ],
    "answer": "killer",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "floor",
      "shade",
      "heat"
    ],
    "answer": "lamp",
    "difficulty": "Easy"
  },
  {
    "items": [
      "puppy",
      "TRUE",
      "letter"
    ],
    "answer": "love",
    "difficulty": "Easy"
  },
  {
    "items": [
      "bedroom",
      "plan",
      "brew"
    ],
    "answer": "master",
    "difficulty": "Hard"
  },
  {
    "items": [
      "mouth",
      "bike",
      "oil"
    ],
    "answer": "motor",
    "difficulty": "Hard"
  },
  {
    "items": [
      "polish",
      "finger",
      "down"
    ],
    "answer": "nail",
    "difficulty": "Easy"
  },
  {
    "items": [
      "sake",
      "pet",
      "nick"
    ],
    "answer": "name",
    "difficulty": "Hard"
  },
  {
    "items": [
      "computer",
      "cable",
      "broadcast"
    ],
    "answer": "network",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "skirts",
      "take",
      "put"
    ],
    "answer": "out",
    "difficulty": "Medium"
  },
  {
    "items": [
      "jury",
      "door",
      "side"
    ],
    "answer": "panel",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "due",
      "life",
      "tense"
    ],
    "answer": "past",
    "difficulty": "Hard"
  },
  {
    "items": [
      "tomato",
      "cement",
      "tooth"
    ],
    "answer": "paste",
    "difficulty": "Hard"
  },
  {
    "items": [
      "flag",
      "vault",
      "fishing"
    ],
    "answer": "pole",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "release",
      "french",
      "secretary"
    ],
    "answer": "press",
    "difficulty": "Hard"
  },
  {
    "items": [
      "dollar",
      "stop",
      "language"
    ],
    "answer": "sign",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "quick",
      "spoon",
      "screen"
    ],
    "answer": "silver",
    "difficulty": "Medium"
  },
  {
    "items": [
      "grand",
      "door",
      "bang"
    ],
    "answer": "slam",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "dash",
      "happy",
      "stick"
    ],
    "answer": "slap",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "ruby",
      "glass",
      "bunny"
    ],
    "answer": "slipper",
    "difficulty": "Medium"
  },
  {
    "items": [
      "demon",
      "limit",
      "way"
    ],
    "answer": "speed",
    "difficulty": "Medium"
  },
  {
    "items": [
      "gap",
      "door",
      "sign"
    ],
    "answer": "stop",
    "difficulty": "Hard"
  },
  {
    "items": [
      "food",
      "front",
      "drug"
    ],
    "answer": "store",
    "difficulty": "Medium"
  },
  {
    "items": [
      "set",
      "program",
      "cable"
    ],
    "answer": "television",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "chest",
      "car",
      "store"
    ],
    "answer": "toy",
    "difficulty": "Very Hard"
  },
  {
    "items": [
      "property",
      "moral",
      "price"
    ],
    "answer": "value",
    "difficulty": "Hard"
  },
  {
    "items": [
      "rag",
      "milk",
      "out"
    ],
    "answer": "weed",
    "difficulty": "Hard"
  },
  {
    "items": [
      "noise",
      "collar",
      "wash"
    ],
    "answer": "white",
    "difficulty": "Medium"
  },
  {
    "items": [
      "bay",
      "picture",
      "washer"
    ],
    "answer": "window",
    "difficulty": "Medium"
  },
  {
    "items": [
      "hard",
      "drift",
      "cutter"
    ],
    "answer": "wood",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cottage",
      "brick",
      "cake"
    ],
    "answer": "cheese",
    "difficulty": "Very Easy"
  },
  {
    "items": [
      "stick",
      "hair",
      "ball"
    ],
    "answer": "pin",
    "difficulty": ""
  },
  {
    "items": [
      "stool",
      "powder",
      "ball"
    ],
    "answer": "foot",
    "difficulty": ""
  },
  {
    "items": [
      "key",
      "wall",
      "precious"
    ],
    "answer": "stone",
    "difficulty": ""
  },
  {
    "items": [
      "water",
      "pen",
      "soda"
    ],
    "answer": "fountain",
    "difficulty": ""
  },
  {
    "items": [
      "steady",
      "cart",
      "slow"
    ],
    "answer": "go",
    "difficulty": ""
  },
  {
    "items": [
      "tin",
      "write",
      "my"
    ],
    "answer": "type",
    "difficulty": ""
  },
  {
    "items": [
      "weight",
      "pipe",
      "pencil"
    ],
    "answer": "lead",
    "difficulty": ""
  },
  {
    "items": [
      "sharp",
      "thumb",
      "tie"
    ],
    "answer": "tack",
    "difficulty": ""
  },
  {
    "items": [
      "back",
      "short",
      "light"
    ],
    "answer": "stop",
    "difficulty": ""
  },
  {
    "items": [
      "bath",
      "up",
      "gum"
    ],
    "answer": "bubble",
    "difficulty": ""
  },
  {
    "items": [
      "ball",
      "out",
      "jack"
    ],
    "answer": "black",
    "difficulty": ""
  },
  {
    "items": [
      "up",
      "deep",
      "rear"
    ],
    "answer": "end",
    "difficulty": ""
  },
  {
    "items": [
      "shelf",
      "read",
      "end"
    ],
    "answer": "book",
    "difficulty": "Easy"
  },
  {
    "items": [
      "sea",
      "home",
      "stomach"
    ],
    "answer": "sick",
    "difficulty": "Easy"
  },
  {
    "items": [
      "car",
      "swimming",
      "cue"
    ],
    "answer": "pool",
    "difficulty": "Easy"
  },
  {
    "items": [
      "cookies",
      "sixteen",
      "heart"
    ],
    "answer": "sweet",
    "difficulty": "Easy"
  },
  {
    "items": [
      "lounge",
      "hour",
      "drink"
    ],
    "answer": "cocktail",
    "difficulty": "Easy"
  },
  {
    "items": [
      "keel",
      "show",
      "row"
    ],
    "answer": "boat",
    "difficulty": "Easy"
  },
  {
    "items": [
      "desert",
      "ice",
      "spell"
    ],
    "answer": "dry",
    "difficulty": "Hard"
  },
  {
    "items": [
      "base",
      "show",
      "dance"
    ],
    "answer": "ball",
    "difficulty": "Hard"
  },
  {
    "items": [
      "soap",
      "shoe",
      "tissue"
    ],
    "answer": "box",
    "difficulty": "Hard"
  },
  {
    "items": [
      "hot",
      "butterflies",
      "pump"
    ],
    "answer": "stomach",
    "difficulty": "Hard"
  },
  {
    "items": [
      "head",
      "street",
      "dark"
    ],
    "answer": "light",
    "difficulty": "Easy"
  },
  {
    "items": [
      "room",
      "saturday",
      "salts"
    ],
    "answer": "bath",
    "difficulty": "Hard"
  },
  {
    "items": [
      "surprise",
      "line",
      "birthday"
    ],
    "answer": "party",
    "difficulty": "Easy"
  },
  {
    "items": [
      "red",
      "go",
      "car"
    ],
    "answer": "stop",
    "difficulty": "Easy"
  }
];
};

