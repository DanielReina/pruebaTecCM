let obj = {
  1: {
    id_table: 1,
    name_table: "Mesa1",
    id_zone: "370",
    x: "31",
    y: "30",
  },
  2: {
    id_table: 2,
    name_table: "Mesa2",
    id_zone: "370",
    x: "133",
    y: "32",
  },
  3: {
    id_table: 3,
    name_table: "Mesa3",
    max: "2",
    min: "1",
    id_zone: "370",
    x: "88",
    y: "105",
  },
  4: {
    id_table: 4,
    name_table: "Mesa4",
    id_zone: "370",
    x: "203",
    y: "107",
  },
  5: {
    id_table: 5,
    name_table: "Mesa5",
    id_zone: "371",
    x: "63",
    y: "38",
  },
  6: {
    id_table: 6,
    name_table: "Mesa6",
    id_zone: "371",
    x: "63",
    y: "109",
  },
  7: {
    id_table: 7,
    name_table: "Mesa7",
    id_zone: "372",
    x: "32",
    y: "93",
  },
  8: {
    id_table: 8,
    name_table: "Mesa8",
    id_zone: "372",
    x: "111",
    y: "95",
  },
};

let arr=[]
for (const property in obj) {
    arr.push(obj[property])    
}
console.log(arr[0].x)