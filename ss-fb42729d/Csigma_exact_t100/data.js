const MODE="Exact";
const arr_factors=[];
const T_TOP_CELL = 8;
const gen_names = [
 "\\rho_0",
 "\\rho_1",
 "\\rho_2",
 "\\rho_3",
 "\\rho_4",
 "\\rho_5",
 "\\rho_6",
 "\\rho_7",
 "\\rho_8",
 "\\rho_9",
 "\\rho_{10}",
 "\\rho_{11}",
 "\\rho_{12}",
 "\\rho_{13}",
 "\\rho_{14}",
 "\\rho_{15}",
 "\\rho_{16}",
 "\\rho_{17}",
 "\\rho_{18}",
 "\\rho_{19}",
 "\\rho_{20}",
 "\\rho_{21}",
 "\\rho_{22}",
 "\\rho_{23}",
 "\\rho_{24}",
 "\\rho_{25}",
 "\\rho_{26}",
 "\\rho_{27}",
 "\\rho_{28}",
 "\\rho_{29}",
 "\\rho_{30}",
 "\\rho_{31}",
 "\\rho_{32}",
 "\\rho_{33}",
 "\\rho_{34}",
 "\\rho_{35}",
 "\\rho_{36}",
 "\\rho_{37}",
 "\\rho_{38}",
 "\\rho_{39}",
 "\\rho_{40}",
 "\\rho_{41}",
 "\\rho_{42}",
 "\\rho_{43}",
 "\\rho_{44}",
 "\\rho_{45}",
 "\\rho_{46}",
 "\\rho_{47}",
 "\\rho_{48}",
 "\\rho_{49}",
 "\\rho_{50}",
 "\\rho_{51}",
 "\\rho_{52}",
 "\\rho_{53}",
 "\\rho_{54}",
 "\\rho_{55}",
 "\\rho_{56}",
 "\\rho_{57}",
 "\\rho_{58}",
 "\\rho_{59}",
 "\\rho_{60}",
 "\\rho_{61}",
 "\\rho_{62}",
 "\\rho_{63}",
 "\\rho_{64}",
 "\\rho_{65}",
 "\\rho_{66}",
 "\\rho_{67}",
 "\\rho_{68}",
 "\\rho_{69}",
 "\\rho_{70}",
 "\\rho_{71}",
 "\\rho_{72}",
 "\\rho_{73}",
 "\\rho_{74}",
 "\\rho_{75}",
 "\\rho_{76}",
 "\\rho_{77}",
 "\\rho_{78}",
 "\\rho_{79}",
 "\\rho_{80}",
 "\\rho_{81}",
 "\\rho_{82}",
 "\\rho_{83}",
 "\\rho_{84}",
 "\\rho_{85}",
 "\\rho_{86}",
 "\\rho_{87}",
 "\\rho_{88}",
 "\\rho_{89}",
 "\\rho_{90}",

 "\\iota_0",
 "\\iota_1",
 "\\iota_2",
 "\\iota_3",
 "\\iota_4",
 "\\iota_5",
 "\\iota_6",
 "\\iota_7",
 "\\iota_8",
 "\\iota_9",
 "\\iota_{10}",
 "\\iota_{11}",
 "\\iota_{12}",
 "\\iota_{13}",
 "\\iota_{14}",
 "\\iota_{15}",
 "\\iota_{16}",
 "\\iota_{17}",
 "\\iota_{18}",
 "\\iota_{19}",
 "\\iota_{20}",
 "\\iota_{21}",
 "\\iota_{22}",
 "\\iota_{23}",
 "\\iota_{24}",
 "\\iota_{25}",
 "\\iota_{26}",
 "\\iota_{27}",
 "\\iota_{28}",
 "\\iota_{29}",
 "\\iota_{30}",
 "\\iota_{31}",
 "\\iota_{32}",
 "\\iota_{33}",
 "\\iota_{34}",
 "\\iota_{35}",
 "\\iota_{36}",
 "\\iota_{37}",
 "\\iota_{38}",
 "\\iota_{39}",
 "\\iota_{40}",
 "\\iota_{41}",
 "\\iota_{42}",
 "\\iota_{43}",
 "\\iota_{44}",
 "\\iota_{45}",
 "\\iota_{46}",
 "\\iota_{47}",
 "\\iota_{48}",
 "\\iota_{49}",
 "\\iota_{50}",
 "\\iota_{51}",
 "\\iota_{52}",

];

const basis = [
 [],
 [0, 1],
 [0, 2],
 [1, 1],
 [0, 3],
 [0, 4],
 [1, 2],
 [2, 1],
 [0, 5],
 [0, 1, 2, 1],
 [0, 6],
 [0, 2, 2, 1],
 [0, 7],
 [0, 8],
 [2, 2],
 [3, 1],
 [0, 9],
 [0, 1, 3, 1],
 [0, 10],
 [0, 2, 3, 1],
 [1, 1, 3, 1],
 [0, 11],
 [0, 3, 3, 1],
 [4, 1],
 [0, 12],
 [1, 2, 3, 1],
 [0, 13],
 [1, 1, 4, 1],
 [0, 14],
 [5, 1],
 [0, 15],
 [0, 16],
 [1, 1, 5, 1],
 [6, 1],
 [3, 2],
 [0, 17],
 [0, 1, 6, 1],
 [0, 18],
 [0, 2, 6, 1],
 [8, 1],
 [7, 1],
 [0, 19],
 [9, 1],
 [0, 20],
 [1, 1, 8, 1],
 [0, 1, 9, 1],
 [1, 1, 7, 1],
 [10, 1],
 [0, 21],
 [0, 2, 9, 1],
 [0, 1, 10, 1],
 [0, 22],
 [0, 3, 9, 1],
 [2, 1, 8, 1],
 [0, 2, 10, 1],
 [11, 1],
 [0, 23],
 [0, 4, 9, 1],
 [12, 1],
 [0, 24],
 [13, 1],
 [2, 1, 10, 1],
 [0, 25],
 [1, 1, 12, 1],
 [0, 1, 13, 1],
 [0, 26],
 [14, 1],
 [0, 2, 13, 1],
 [1, 1, 13, 1],
 [2, 1, 11, 1],
 [0, 27],
 [15, 1],
 [0, 28],
 [1, 1, 14, 1],
 [16, 1],
 [2, 1, 13, 1],
 [0, 29],
 [0, 1, 16, 1],
 [0, 1, 2, 1, 13, 1],
 [1, 1, 15, 1],
 [0, 30],
 [0, 2, 16, 1],
 [17, 1],
 [0, 31],
 [0, 32],
 [19, 1],
 [1, 1, 17, 1],
 [2, 2, 13, 1],
 [18, 1],
 [0, 33],
 [0, 1, 19, 1],
 [0, 34],
 [0, 2, 19, 1],
 [1, 1, 18, 1],
 [20, 1],
 [0, 35],
 [0, 3, 19, 1],
 [21, 1],
 [0, 36],
 [8, 2],
 [23, 1],
 [22, 1],
 [1, 1, 20, 1],
 [0, 37],
 [1, 1, 21, 1],
 [25, 1],
 [24, 1],
 [0, 38],
 [27, 1],
 [26, 1],
 [0, 1, 24, 1],
 [0, 39],
 [0, 40],
 [1, 1, 27, 1],
 [29, 1],
 [1, 1, 26, 1],
 [2, 1, 23, 1],
 [2, 1, 22, 1],
 [28, 1],
 [0, 41],
 [0, 1, 29, 1],
 [0, 42],
 [0, 2, 29, 1],
 [33, 1],
 [8, 1, 13, 1],
 [32, 1],
 [31, 1],
 [30, 1],
 [3, 1, 20, 1],
 [0, 43],
 [0, 1, 33, 1],
 [0, 1, 31, 1],
 [0, 1, 30, 1],
 [34, 1],
 [0, 44],
 [0, 2, 33, 1],
 [1, 1, 8, 1, 13, 1],
 [1, 1, 32, 1],
 [0, 2, 31, 1],
 [1, 1, 31, 1],
 [3, 1, 22, 1],
 [35, 1],
 [1, 1, 3, 1, 20, 1],
 [0, 45],
 [0, 3, 33, 1],
 [1, 1, 34, 1],
 [0, 46],
 [0, 4, 33, 1],
 [2, 1, 32, 1],
 [36, 1],
 [1, 1, 35, 1],
 [0, 47],
 [0, 5, 33, 1],
 [37, 1],
 [0, 48],
 [41, 1],
 [13, 2],
 [1, 1, 36, 1],
 [40, 1],
 [39, 1],
 [38, 1],
 [0, 49],
 [1, 1, 37, 1],
 [0, 1, 40, 1],
 [0, 1, 39, 1],
 [0, 1, 38, 1],
 [0, 50],
 [43, 1],
 [1, 1, 41, 1],
 [0, 2, 40, 1],
 [0, 2, 39, 1],
 [42, 1],
 [1, 1, 39, 1],
 [0, 51],
 [44, 1],
 [0, 1, 42, 1],
 [0, 52],
 [1, 1, 43, 1],
 [45, 1],
 [0, 2, 42, 1],
 [1, 1, 42, 1],
 [2, 1, 39, 1],
 [0, 53],
 [0, 1, 45, 1],
 [46, 1],
 [0, 54],
 [0, 2, 45, 1],
 [8, 3],
 [49, 1],
 [48, 1],
 [2, 1, 42, 1],
 [47, 1],
 [0, 55],
 [51, 1],
 [1, 1, 46, 1],
 [50, 1],
 [0, 56],
 [53, 1],
 [0, 1, 50, 1],
 [52, 1],
 [3, 1, 39, 1],
 [0, 57],
 [0, 1, 53, 1],
 [55, 1],
 [54, 1],
 [1, 1, 51, 1],
 [0, 2, 50, 1],
 [0, 1, 3, 1, 39, 1],
 [0, 58],
 [0, 2, 53, 1],
 [0, 2, 3, 1, 39, 1],
 [1, 1, 3, 1, 39, 1],
 [2, 1, 47, 1],
 [0, 59],
 [0, 3, 53, 1],
 [56, 1],
 [2, 1, 50, 1],
 [0, 60],
 [57, 1],
 [8, 2, 13, 1],
 [13, 1, 23, 1],
 [13, 1, 22, 1],
 [2, 1, 52, 1],
 [0, 61],
 [1, 1, 56, 1],
 [0, 62],
 [58, 1],
 [0, 63],
 [61, 1],
 [60, 1],
 [59, 1],
 [0, 64],
 [1, 1, 58, 1],
 [62, 1],
 [0, 65],
 [0, 1, 62, 1],
 [1, 1, 60, 1],
 [0, 66],
 [0, 2, 62, 1],
 [8, 1, 41, 1],
 [8, 1, 13, 2],
 [13, 1, 32, 1],
 [63, 1],
 [0, 67],
 [64, 1],
 [2, 1, 59, 1],
 [0, 68],
 [0, 1, 64, 1],
 [20, 2],
 [0, 69],
 [0, 2, 64, 1],
 [8, 1, 44, 1],
 [66, 1],
 [65, 1],
 [0, 70],
 [0, 3, 64, 1],
 [0, 71],
 [0, 4, 64, 1],
 [68, 1],
 [1, 1, 66, 1],
 [67, 1],
 [0, 72],
 [8, 1, 49, 1],
 [13, 3],
 [73, 1],
 [72, 1],
 [71, 1],
 [70, 1],
 [69, 1],
 [0, 73],
 [1, 1, 68, 1],
 [2, 1, 66, 1],
 [0, 1, 72, 1],
 [0, 74],
 [76, 1],
 [4, 1, 60, 1],
 [0, 2, 72, 1],
 [75, 1],
 [74, 1],
 [1, 1, 71, 1],
 [0, 75],
 [8, 1, 55, 1],
 [0, 3, 72, 1],
 [77, 1],
 [2, 1, 67, 1],
 [0, 76],
 [1, 1, 76, 1],
 [79, 1],
 [0, 4, 72, 1],
 [1, 1, 75, 1],
 [0, 1, 77, 1],
 [78, 1],
 [0, 77],
 [0, 1, 79, 1],
 [0, 5, 72, 1],
 [80, 1],
 [1, 1, 77, 1],
 [0, 1, 78, 1],
 [20, 1, 34, 1],
 [0, 78],
 [0, 2, 79, 1],
 [0, 6, 72, 1],
 [13, 1, 49, 1],
 [13, 1, 48, 1],
 [0, 2, 78, 1],
 [11, 1, 52, 1],
 [0, 79],
 [0, 7, 72, 1],
 [2, 1, 77, 1],
 [0, 80],
 [81, 1],
 [0, 8, 72, 1],
 [2, 1, 78, 1],
 [13, 1, 52, 1],
 [3, 1, 71, 1],
 [0, 81],
 [0, 1, 81, 1],
 [0, 9, 72, 1],
 [8, 1, 61, 1],
 [13, 1, 54, 1],
 [8, 1, 60, 1],
 [2, 1, 80, 1],
 [0, 82],
 [0, 2, 81, 1],
 [0, 10, 72, 1],
 [0, 83],
 [0, 3, 81, 1],
 [82, 1],
 [0, 11, 72, 1],
 [0, 84],
 [13, 2, 23, 1],
 [8, 1, 63, 1],
 [31, 2],
 [22, 1, 39, 1],
 [0, 85],
 [1, 1, 82, 1],
 [83, 1],
 [4, 1, 75, 1],
 [18, 1, 46, 1],
 [0, 86],
 [84, 1],
 [0, 1, 83, 1],
 [26, 1, 41, 1],
 [26, 1, 39, 1],
 [0, 87],
 [0, 2, 83, 1],
 [13, 1, 61, 1],
 [8, 1, 66, 1],
 [0, 88],
 [1, 1, 84, 1],
 [85, 1],
 [0, 3, 83, 1],
 [0, 89],
 [0, 1, 85, 1],
 [86, 1],
 [14, 1, 60, 1],
 [1, 1, 8, 1, 66, 1],
 [0, 90],
 [0, 2, 85, 1],
 [87, 1],
 [0, 1, 86, 1],
 [8, 2, 49, 1],
 [8, 1, 13, 3],
 [13, 2, 32, 1],
 [31, 1, 39, 1],
 [0, 91],
 [0, 1, 87, 1],
 [0, 2, 86, 1],
 [9, 1, 72, 1],
 [26, 1, 46, 1],
 [0, 1, 31, 1, 39, 1],
 [0, 92],
 [0, 2, 87, 1],
 [0, 3, 86, 1],
 [0, 93],
 [0, 4, 86, 1],
 [8, 1, 77, 1],
 [11, 1, 67, 1],
 [0, 94],
 [0, 5, 86, 1],
 [0, 95],
 [0, 6, 86, 1],
 [88, 1],
 [1, 1, 8, 1, 77, 1],
 [0, 96],
 [8, 1, 13, 1, 49, 1],
 [13, 4],
 [13, 1, 73, 1],
 [39, 2],
 [0, 97],
 [1, 1, 88, 1],
 [0, 1, 39, 2],
 [0, 98],
 [89, 1],
 [0, 99],
 [8, 2, 61, 1],
 [13, 1, 77, 1],
 [0, 100],
 [1, 1, 89, 1],
 [90, 1],
 [13, 1, 78, 1],

 [],
 [0, 1],
 [0, 2],
 [1, 1],
 [0, 3],
 [0, 4],
 [1, 2],
 [2, 1],
 [0, 5],
 [0, 1, 2, 1],
 [0, 6],
 [0, 2, 2, 1],
 [0, 7],
 [0, 8],
 [2, 2],
 [3, 1],
 [0, 9],
 [0, 1, 3, 1],
 [0, 10],
 [0, 2, 3, 1],
 [1, 1, 3, 1],
 [0, 11],
 [0, 3, 3, 1],
 [4, 1],
 [0, 12],
 [1, 2, 3, 1],
 [0, 13],
 [1, 1, 4, 1],
 [0, 14],
 [5, 1],
 [0, 15],
 [0, 16],
 [1, 1, 5, 1],
 [6, 1],
 [3, 2],
 [0, 17],
 [0, 1, 6, 1],
 [0, 18],
 [0, 2, 6, 1],
 [8, 1],
 [7, 1],
 [0, 19],
 [9, 1],
 [0, 20],
 [1, 1, 8, 1],
 [0, 1, 9, 1],
 [1, 1, 7, 1],
 [10, 1],
 [0, 21],
 [0, 2, 9, 1],
 [0, 1, 10, 1],
 [0, 22],
 [0, 3, 9, 1],
 [2, 1, 8, 1],
 [0, 2, 10, 1],
 [11, 1],
 [0, 23],
 [0, 4, 9, 1],
 [12, 1],
 [0, 24],
 [13, 1],
 [2, 1, 10, 1],
 [0, 25],
 [1, 1, 12, 1],
 [0, 1, 13, 1],
 [0, 26],
 [14, 1],
 [0, 2, 13, 1],
 [1, 1, 13, 1],
 [2, 1, 11, 1],
 [0, 27],
 [15, 1],
 [0, 28],
 [1, 1, 14, 1],
 [16, 1],
 [2, 1, 13, 1],
 [0, 29],
 [0, 1, 16, 1],
 [0, 1, 2, 1, 13, 1],
 [1, 1, 15, 1],
 [0, 30],
 [0, 2, 16, 1],
 [17, 1],
 [0, 31],
 [0, 32],
 [19, 1],
 [1, 1, 17, 1],
 [2, 2, 13, 1],
 [18, 1],
 [0, 33],
 [0, 1, 19, 1],
 [0, 34],
 [0, 2, 19, 1],
 [1, 1, 18, 1],
 [20, 1],
 [0, 35],
 [0, 3, 19, 1],
 [21, 1],
 [0, 36],
 [8, 2],
 [23, 1],
 [22, 1],
 [1, 1, 20, 1],
 [0, 37],
 [1, 1, 21, 1],
 [25, 1],
 [24, 1],
 [0, 38],
 [27, 1],
 [26, 1],
 [0, 1, 24, 1],
 [0, 39],
 [0, 40],
 [1, 1, 27, 1],
 [29, 1],
 [1, 1, 26, 1],
 [2, 1, 23, 1],
 [2, 1, 22, 1],
 [28, 1],
 [0, 41],
 [0, 1, 29, 1],
 [0, 42],
 [0, 2, 29, 1],
 [33, 1],
 [8, 1, 13, 1],
 [32, 1],
 [31, 1],
 [30, 1],
 [3, 1, 20, 1],
 [0, 43],
 [0, 1, 33, 1],
 [0, 1, 31, 1],
 [0, 1, 30, 1],
 [34, 1],
 [0, 44],
 [0, 2, 33, 1],
 [1, 1, 8, 1, 13, 1],
 [1, 1, 32, 1],
 [0, 2, 31, 1],
 [1, 1, 31, 1],
 [3, 1, 22, 1],
 [35, 1],
 [1, 1, 3, 1, 20, 1],
 [0, 45],
 [0, 3, 33, 1],
 [1, 1, 34, 1],
 [0, 46],
 [0, 4, 33, 1],
 [2, 1, 32, 1],
 [36, 1],
 [1, 1, 35, 1],
 [0, 47],
 [0, 5, 33, 1],
 [37, 1],
 [0, 48],
 [41, 1],
 [13, 2],
 [1, 1, 36, 1],
 [40, 1],
 [39, 1],
 [38, 1],
 [0, 49],
 [1, 1, 37, 1],
 [0, 1, 40, 1],
 [0, 1, 39, 1],
 [0, 1, 38, 1],
 [0, 50],
 [43, 1],
 [1, 1, 41, 1],
 [0, 2, 40, 1],
 [0, 2, 39, 1],
 [42, 1],
 [1, 1, 39, 1],
 [0, 51],
 [44, 1],
 [0, 1, 42, 1],
 [0, 52],
 [1, 1, 43, 1],
 [45, 1],
 [0, 2, 42, 1],
 [1, 1, 42, 1],
 [2, 1, 39, 1],
 [0, 53],
 [0, 1, 45, 1],
 [46, 1],
 [0, 54],
 [0, 2, 45, 1],
 [8, 3],
 [49, 1],
 [48, 1],
 [2, 1, 42, 1],
 [47, 1],
 [0, 55],
 [51, 1],
 [1, 1, 46, 1],
 [50, 1],
 [0, 56],
 [53, 1],
 [0, 1, 50, 1],
 [52, 1],
 [3, 1, 39, 1],
 [0, 57],
 [0, 1, 53, 1],
 [55, 1],
 [54, 1],
 [1, 1, 51, 1],
 [0, 2, 50, 1],
 [0, 1, 3, 1, 39, 1],
 [0, 58],
 [0, 2, 53, 1],
 [0, 2, 3, 1, 39, 1],
 [1, 1, 3, 1, 39, 1],
 [2, 1, 47, 1],
 [0, 59],
 [0, 3, 53, 1],
 [56, 1],
 [2, 1, 50, 1],
 [0, 60],
 [57, 1],
 [8, 2, 13, 1],
 [13, 1, 23, 1],
 [13, 1, 22, 1],
 [2, 1, 52, 1],
 [0, 61],
 [1, 1, 56, 1],
 [0, 62],
 [58, 1],
 [0, 63],
 [61, 1],
 [60, 1],
 [59, 1],
 [0, 64],
 [1, 1, 58, 1],
 [62, 1],
 [0, 65],
 [0, 1, 62, 1],
 [1, 1, 60, 1],
 [0, 66],
 [0, 2, 62, 1],
 [8, 1, 41, 1],
 [8, 1, 13, 2],
 [13, 1, 32, 1],
 [63, 1],
 [0, 67],
 [64, 1],
 [2, 1, 59, 1],
 [0, 68],
 [0, 1, 64, 1],
 [20, 2],
 [0, 69],
 [0, 2, 64, 1],
 [8, 1, 44, 1],
 [66, 1],
 [65, 1],
 [0, 70],
 [0, 3, 64, 1],
 [0, 71],
 [0, 4, 64, 1],
 [68, 1],
 [1, 1, 66, 1],
 [67, 1],
 [0, 72],
 [8, 1, 49, 1],
 [13, 3],
 [73, 1],
 [72, 1],
 [71, 1],
 [70, 1],
 [69, 1],
 [0, 73],
 [1, 1, 68, 1],
 [2, 1, 66, 1],
 [0, 1, 72, 1],
 [0, 74],
 [76, 1],
 [4, 1, 60, 1],
 [0, 2, 72, 1],
 [75, 1],
 [74, 1],
 [1, 1, 71, 1],
 [0, 75],
 [8, 1, 55, 1],
 [0, 3, 72, 1],
 [77, 1],
 [2, 1, 67, 1],
 [0, 76],
 [1, 1, 76, 1],
 [79, 1],
 [0, 4, 72, 1],
 [1, 1, 75, 1],
 [0, 1, 77, 1],
 [78, 1],
 [0, 77],
 [0, 1, 79, 1],
 [0, 5, 72, 1],
 [80, 1],
 [1, 1, 77, 1],
 [0, 1, 78, 1],
 [20, 1, 34, 1],
 [0, 78],
 [0, 2, 79, 1],
 [0, 6, 72, 1],
 [13, 1, 49, 1],
 [13, 1, 48, 1],
 [0, 2, 78, 1],
 [11, 1, 52, 1],
 [0, 79],
 [0, 7, 72, 1],
 [2, 1, 77, 1],
 [0, 80],
 [81, 1],
 [0, 8, 72, 1],
 [2, 1, 78, 1],
 [13, 1, 52, 1],
 [3, 1, 71, 1],
 [0, 81],
 [0, 1, 81, 1],
 [0, 9, 72, 1],
 [8, 1, 61, 1],
 [13, 1, 54, 1],
 [8, 1, 60, 1],
 [2, 1, 80, 1],
 [0, 82],
 [0, 2, 81, 1],
 [0, 10, 72, 1],
 [0, 83],
 [0, 3, 81, 1],
 [82, 1],
 [0, 11, 72, 1],
 [0, 84],
 [13, 2, 23, 1],
 [8, 1, 63, 1],
 [31, 2],
 [22, 1, 39, 1],
 [0, 85],
 [1, 1, 82, 1],
 [83, 1],
 [4, 1, 75, 1],
 [18, 1, 46, 1],
 [0, 86],
 [84, 1],
 [0, 1, 83, 1],
 [26, 1, 41, 1],
 [26, 1, 39, 1],
 [0, 87],
 [0, 2, 83, 1],
 [13, 1, 61, 1],
 [8, 1, 66, 1],
 [0, 88],
 [1, 1, 84, 1],
 [85, 1],
 [0, 3, 83, 1],
 [0, 89],
 [0, 1, 85, 1],
 [86, 1],
 [14, 1, 60, 1],
 [1, 1, 8, 1, 66, 1],
 [0, 90],
 [0, 2, 85, 1],
 [87, 1],
 [0, 1, 86, 1],
 [8, 2, 49, 1],
 [8, 1, 13, 3],
 [13, 2, 32, 1],
 [31, 1, 39, 1],
 [0, 91],
 [0, 1, 87, 1],
 [0, 2, 86, 1],
 [9, 1, 72, 1],
 [26, 1, 46, 1],
 [0, 1, 31, 1, 39, 1],
 [0, 92],
 [0, 2, 87, 1],
 [0, 3, 86, 1],
 [0, 93],
 [0, 4, 86, 1],
 [8, 1, 77, 1],
 [11, 1, 67, 1],
 [0, 94],
 [0, 5, 86, 1],
 [0, 95],
 [0, 6, 86, 1],
 [88, 1],
 [1, 1, 8, 1, 77, 1],
 [0, 96],
 [8, 1, 13, 1, 49, 1],
 [13, 4],
 [13, 1, 73, 1],
 [39, 2],
 [0, 97],
 [1, 1, 88, 1],
 [0, 1, 39, 2],
 [0, 98],
 [89, 1],
 [0, 99],
 [8, 2, 61, 1],
 [13, 1, 77, 1],
 [0, 100],
 [1, 1, 89, 1],
 [90, 1],
 [13, 1, 78, 1],

 [91, 1],
 [0, 1, 91, 1],
 [0, 2, 91, 1],
 [1, 1, 91, 1],
 [0, 3, 91, 1],
 [0, 4, 91, 1],
 [1, 2, 91, 1],
 [2, 1, 91, 1],
 [0, 5, 91, 1],
 [0, 1, 2, 1, 91, 1],
 [0, 6, 91, 1],
 [0, 2, 2, 1, 91, 1],
 [0, 7, 91, 1],
 [0, 8, 91, 1],
 [2, 2, 91, 1],
 [0, 9, 91, 1],
 [0, 10, 91, 1],
 [0, 11, 91, 1],
 [4, 1, 91, 1],
 [0, 12, 91, 1],
 [93, 1],
 [92, 1],
 [0, 13, 91, 1],
 [0, 1, 93, 1],
 [1, 1, 4, 1, 91, 1],
 [0, 1, 92, 1],
 [0, 14, 91, 1],
 [0, 2, 93, 1],
 [5, 1, 91, 1],
 [0, 2, 92, 1],
 [0, 15, 91, 1],
 [0, 3, 93, 1],
 [0, 16, 91, 1],
 [0, 4, 93, 1],
 [1, 1, 5, 1, 91, 1],
 [6, 1, 91, 1],
 [2, 1, 92, 1],
 [94, 1],
 [0, 17, 91, 1],
 [0, 5, 93, 1],
 [0, 1, 6, 1, 91, 1],
 [0, 1, 94, 1],
 [0, 18, 91, 1],
 [0, 6, 93, 1],
 [0, 2, 6, 1, 91, 1],
 [8, 1, 91, 1],
 [0, 2, 94, 1],
 [95, 1],
 [7, 1, 91, 1],
 [0, 19, 91, 1],
 [0, 7, 93, 1],
 [9, 1, 91, 1],
 [96, 1],
 [0, 20, 91, 1],
 [0, 8, 93, 1],
 [1, 1, 8, 1, 91, 1],
 [0, 1, 9, 1, 91, 1],
 [2, 2, 92, 1],
 [1, 1, 7, 1, 91, 1],
 [10, 1, 91, 1],
 [0, 21, 91, 1],
 [0, 9, 93, 1],
 [0, 2, 9, 1, 91, 1],
 [1, 1, 96, 1],
 [0, 1, 10, 1, 91, 1],
 [0, 22, 91, 1],
 [0, 10, 93, 1],
 [0, 3, 9, 1, 91, 1],
 [2, 1, 8, 1, 91, 1],
 [0, 2, 10, 1, 91, 1],
 [11, 1, 91, 1],
 [0, 23, 91, 1],
 [0, 11, 93, 1],
 [0, 4, 9, 1, 91, 1],
 [0, 24, 91, 1],
 [0, 12, 93, 1],
 [97, 1],
 [13, 1, 91, 1],
 [0, 25, 91, 1],
 [0, 13, 93, 1],
 [0, 1, 97, 1],
 [0, 1, 13, 1, 91, 1],
 [0, 26, 91, 1],
 [0, 14, 93, 1],
 [14, 1, 91, 1],
 [0, 2, 97, 1],
 [0, 2, 13, 1, 91, 1],
 [1, 1, 13, 1, 91, 1],
 [98, 1],
 [0, 27, 91, 1],
 [0, 15, 93, 1],
 [0, 1, 98, 1],
 [99, 1],
 [0, 28, 91, 1],
 [0, 16, 93, 1],
 [1, 1, 14, 1, 91, 1],
 [16, 1, 91, 1],
 [0, 1, 99, 1],
 [1, 1, 98, 1],
 [2, 1, 13, 1, 91, 1],
 [100, 1],
 [0, 29, 91, 1],
 [0, 17, 93, 1],
 [0, 1, 16, 1, 91, 1],
 [0, 2, 99, 1],
 [0, 1, 2, 1, 13, 1, 91, 1],
 [0, 1, 100, 1],
 [0, 30, 91, 1],
 [0, 18, 93, 1],
 [0, 2, 16, 1, 91, 1],
 [17, 1, 91, 1],
 [0, 3, 99, 1],
 [8, 1, 92, 1],
 [0, 2, 100, 1],
 [101, 1],
 [0, 31, 91, 1],
 [0, 19, 93, 1],
 [9, 1, 93, 1],
 [102, 1],
 [0, 32, 91, 1],
 [0, 20, 93, 1],
 [19, 1, 91, 1],
 [1, 1, 17, 1, 91, 1],
 [2, 2, 13, 1, 91, 1],
 [103, 1],
 [10, 1, 92, 1],
 [18, 1, 91, 1],
 [0, 33, 91, 1],
 [0, 21, 93, 1],
 [0, 1, 19, 1, 91, 1],
 [5, 1, 96, 1],
 [0, 1, 103, 1],
 [0, 34, 91, 1],
 [0, 22, 93, 1],
 [0, 2, 19, 1, 91, 1],
 [2, 1, 8, 1, 92, 1],
 [1, 1, 103, 1],
 [11, 1, 92, 1],
 [1, 1, 18, 1, 91, 1],
 [20, 1, 91, 1],
 [0, 35, 91, 1],
 [0, 23, 93, 1],
 [0, 3, 19, 1, 91, 1],
 [0, 36, 91, 1],
 [0, 24, 93, 1],
 [104, 1],
 [8, 2, 91, 1],
 [13, 1, 92, 1],
 [23, 1, 91, 1],
 [22, 1, 91, 1],
 [1, 1, 20, 1, 91, 1],
 [0, 37, 91, 1],
 [0, 25, 93, 1],
 [0, 1, 104, 1],
 [0, 1, 13, 1, 92, 1],
 [7, 1, 96, 1],
 [25, 1, 91, 1],
 [24, 1, 91, 1],
 [0, 38, 91, 1],
 [0, 26, 93, 1],
 [27, 1, 91, 1],
 [0, 2, 104, 1],
 [106, 1],
 [105, 1],
 [26, 1, 91, 1],
 [0, 1, 24, 1, 91, 1],
 [0, 39, 91, 1],
 [0, 27, 93, 1],
 [0, 1, 105, 1],
 [0, 40, 91, 1],
 [0, 28, 93, 1],
 [1, 1, 27, 1, 91, 1],
 [29, 1, 91, 1],
 [0, 2, 105, 1],
 [5, 1, 98, 1],
 [1, 1, 26, 1, 91, 1],
 [2, 1, 13, 1, 92, 1],
 [2, 1, 23, 1, 91, 1],
 [2, 1, 22, 1, 91, 1],
 [28, 1, 91, 1],
 [0, 41, 91, 1],
 [0, 29, 93, 1],
 [0, 1, 29, 1, 91, 1],
 [0, 3, 105, 1],
 [0, 42, 91, 1],
 [0, 30, 93, 1],
 [0, 2, 29, 1, 91, 1],
 [33, 1, 91, 1],
 [8, 1, 13, 1, 91, 1],
 [32, 1, 91, 1],
 [31, 1, 91, 1],
 [107, 1],
 [0, 43, 91, 1],
 [0, 31, 93, 1],
 [0, 1, 33, 1, 91, 1],
 [109, 1],
 [0, 1, 31, 1, 91, 1],
 [108, 1],
 [34, 1, 91, 1],
 [0, 44, 91, 1],
 [0, 32, 93, 1],
 [0, 2, 33, 1, 91, 1],
 [1, 1, 8, 1, 13, 1, 91, 1],
 [8, 1, 98, 1],
 [0, 2, 31, 1, 91, 1],
 [18, 1, 93, 1],
 [35, 1, 91, 1],
 [18, 1, 92, 1],
 [0, 45, 91, 1],
 [0, 33, 93, 1],
 [0, 3, 33, 1, 91, 1],
 [14, 1, 96, 1],
 [1, 1, 34, 1, 91, 1],
 [0, 46, 91, 1],
 [0, 34, 93, 1],
 [0, 4, 33, 1, 91, 1],
 [1, 1, 8, 1, 98, 1],
 [36, 1, 91, 1],
 [110, 1],
 [0, 47, 91, 1],
 [0, 35, 93, 1],
 [0, 5, 33, 1, 91, 1],
 [0, 48, 91, 1],
 [0, 36, 93, 1],
 [113, 1],
 [41, 1, 91, 1],
 [13, 2, 91, 1],
 [112, 1],
 [1, 1, 36, 1, 91, 1],
 [23, 1, 92, 1],
 [40, 1, 91, 1],
 [22, 1, 92, 1],
 [39, 1, 91, 1],
 [111, 1],
 [0, 49, 91, 1],
 [0, 37, 93, 1],
 [0, 1, 113, 1],
 [0, 1, 40, 1, 91, 1],
 [0, 1, 39, 1, 91, 1],
 [0, 50, 91, 1],
 [0, 38, 93, 1],
 [43, 1, 91, 1],
 [0, 2, 113, 1],
 [114, 1],
 [1, 1, 41, 1, 91, 1],
 [13, 1, 98, 1],
 [0, 2, 40, 1, 91, 1],
 [42, 1, 91, 1],
 [0, 51, 91, 1],
 [0, 39, 93, 1],
 [0, 1, 114, 1],
 [44, 1, 91, 1],
 [115, 1],
 [0, 52, 91, 1],
 [0, 40, 93, 1],
 [1, 1, 43, 1, 91, 1],
 [45, 1, 91, 1],
 [0, 2, 114, 1],
 [1, 1, 13, 1, 98, 1],
 [0, 1, 115, 1],
 [2, 1, 23, 1, 92, 1],
 [2, 1, 22, 1, 92, 1],
 [1, 1, 42, 1, 91, 1],
 [28, 1, 92, 1],
 [0, 53, 91, 1],
 [0, 41, 93, 1],
 [0, 1, 45, 1, 91, 1],
 [0, 3, 114, 1],
 [0, 2, 115, 1],
 [46, 1, 91, 1],
 [20, 1, 96, 1],
 [0, 54, 91, 1],
 [0, 42, 93, 1],
 [0, 2, 45, 1, 91, 1],
 [33, 1, 93, 1],
 [8, 3, 91, 1],
 [49, 1, 91, 1],
 [48, 1, 91, 1],
 [32, 1, 92, 1],
 [2, 1, 42, 1, 91, 1],
 [47, 1, 91, 1],
 [0, 55, 91, 1],
 [0, 43, 93, 1],
 [0, 1, 33, 1, 93, 1],
 [116, 1],
 [1, 1, 46, 1, 91, 1],
 [50, 1, 91, 1],
 [0, 56, 91, 1],
 [0, 44, 93, 1],
 [53, 1, 91, 1],
 [118, 1],
 [13, 1, 103, 1],
 [0, 1, 50, 1, 91, 1],
 [117, 1],
 [52, 1, 91, 1],
 [0, 57, 91, 1],
 [0, 45, 93, 1],
 [0, 1, 53, 1, 91, 1],
 [27, 1, 96, 1],
 [55, 1, 91, 1],
 [54, 1, 91, 1],
 [0, 2, 50, 1, 91, 1],
 [0, 1, 117, 1],
 [0, 58, 91, 1],
 [0, 46, 93, 1],
 [0, 2, 53, 1, 91, 1],
 [1, 1, 118, 1],
 [0, 2, 117, 1],
 [2, 1, 47, 1, 91, 1],
 [0, 59, 91, 1],
 [0, 47, 93, 1],
 [0, 3, 53, 1, 91, 1],
 [120, 1],
 [2, 1, 50, 1, 91, 1],
 [119, 1],
 [0, 60, 91, 1],
 [0, 48, 93, 1],
 [121, 1],
 [57, 1, 91, 1],
 [8, 2, 13, 1, 91, 1],
 [13, 1, 23, 1, 91, 1],
 [13, 1, 22, 1, 91, 1],
 [40, 1, 92, 1],
 [2, 1, 52, 1, 91, 1],
 [20, 1, 98, 1],
 [39, 1, 92, 1],
 [0, 61, 91, 1],
 [0, 49, 93, 1],
 [0, 1, 121, 1],
 [0, 62, 91, 1],
 [0, 50, 93, 1],
 [58, 1, 91, 1],
 [0, 2, 121, 1],
 [8, 2, 98, 1],
 [123, 1],
 [122, 1],
 [42, 1, 92, 1],
 [0, 63, 91, 1],
 [0, 51, 93, 1],
 [125, 1],
 [61, 1, 91, 1],
 [60, 1, 91, 1],
 [59, 1, 91, 1],
 [124, 1],
 [0, 64, 91, 1],
 [0, 52, 93, 1],
 [1, 1, 58, 1, 91, 1],
 [62, 1, 91, 1],
 [0, 1, 125, 1],
 [0, 65, 91, 1],
 [0, 53, 93, 1],
 [0, 1, 62, 1, 91, 1],
 [0, 2, 125, 1],
 [128, 1],
 [1, 1, 60, 1, 91, 1],
 [127, 1],
 [36, 1, 96, 1],
 [126, 1],
 [0, 66, 91, 1],
 [0, 54, 93, 1],
 [0, 2, 62, 1, 91, 1],
 [0, 3, 125, 1],
 [8, 1, 41, 1, 91, 1],
 [8, 1, 13, 2, 91, 1],
 [13, 1, 32, 1, 91, 1],
 [63, 1, 91, 1],
 [2, 1, 42, 1, 92, 1],
 [39, 1, 95, 1],
 [47, 1, 92, 1],
 [0, 67, 91, 1],
 [0, 55, 93, 1],
 [64, 1, 91, 1],
 [129, 1],
 [2, 1, 59, 1, 91, 1],
 [50, 1, 92, 1],
 [0, 68, 91, 1],
 [0, 56, 93, 1],
 [0, 1, 64, 1, 91, 1],
 [131, 1],
 [8, 1, 13, 1, 98, 1],
 [23, 1, 103, 1],
 [22, 1, 103, 1],
 [52, 1, 92, 1],
 [20, 2, 91, 1],
 [130, 1],
 [0, 69, 91, 1],
 [0, 57, 93, 1],
 [0, 2, 64, 1, 91, 1],
 [43, 1, 96, 1],
 [8, 1, 44, 1, 91, 1],
 [66, 1, 91, 1],
 [65, 1, 91, 1],
 [0, 70, 91, 1],
 [0, 58, 93, 1],
 [0, 3, 64, 1, 91, 1],
 [132, 1],
 [0, 71, 91, 1],
 [0, 59, 93, 1],
 [0, 4, 64, 1, 91, 1],
 [1, 1, 66, 1, 91, 1],
 [134, 1],
 [133, 1],
 [67, 1, 91, 1],
 [0, 72, 91, 1],
 [0, 60, 93, 1],
 [135, 1],
 [8, 1, 49, 1, 91, 1],
 [13, 3, 91, 1],
 [73, 1, 91, 1],
 [36, 1, 98, 1],
 [46, 1, 96, 1],
 [72, 1, 91, 1],
 [13, 1, 22, 1, 92, 1],
 [70, 1, 91, 1],
 [69, 1, 91, 1],
 [0, 73, 91, 1],
 [0, 61, 93, 1],
 [0, 1, 135, 1],
 [2, 1, 66, 1, 91, 1],
 [0, 1, 72, 1, 91, 1],
 [0, 74, 91, 1],
 [0, 62, 93, 1],
 [76, 1, 91, 1],
 [0, 2, 135, 1],
 [41, 1, 98, 1],
 [13, 2, 98, 1],
 [0, 2, 72, 1, 91, 1],
 [32, 1, 103, 1],
 [75, 1, 91, 1],
 [52, 1, 95, 1],
 [0, 75, 91, 1],
 [0, 63, 93, 1],
 [136, 1],
 [8, 1, 55, 1, 91, 1],
 [0, 3, 72, 1, 91, 1],
 [59, 1, 92, 1],
 [77, 1, 91, 1],
 [2, 1, 67, 1, 91, 1],
 [0, 76, 91, 1],
 [0, 64, 93, 1],
 [1, 1, 76, 1, 91, 1],
 [79, 1, 91, 1],
 [0, 1, 136, 1],
 [0, 4, 72, 1, 91, 1],
 [1, 1, 75, 1, 91, 1],
 [0, 1, 77, 1, 91, 1],
 [78, 1, 91, 1],
 [42, 1, 98, 1],
 [0, 77, 91, 1],
 [0, 65, 93, 1],
 [0, 1, 79, 1, 91, 1],
 [0, 2, 136, 1],
 [137, 1],
 [0, 5, 72, 1, 91, 1],
 [44, 1, 98, 1],
 [80, 1, 91, 1],
 [1, 1, 77, 1, 91, 1],
 [0, 1, 78, 1, 91, 1],
 [0, 78, 91, 1],
 [0, 66, 93, 1],
 [0, 2, 79, 1, 91, 1],
 [0, 3, 136, 1],
 [0, 6, 72, 1, 91, 1],
 [13, 1, 49, 1, 91, 1],
 [13, 1, 48, 1, 91, 1],
 [0, 2, 78, 1, 91, 1],
 [0, 79, 91, 1],
 [0, 67, 93, 1],
 [64, 1, 93, 1],
 [138, 1],
 [0, 7, 72, 1, 91, 1],
 [46, 1, 98, 1],
 [2, 1, 77, 1, 91, 1],
 [0, 80, 91, 1],
 [0, 68, 93, 1],
 [81, 1, 91, 1],
 [0, 8, 72, 1, 91, 1],
 [49, 1, 98, 1],
 [13, 2, 103, 1],
 [0, 81, 91, 1],
 [0, 69, 93, 1],
 [0, 1, 81, 1, 91, 1],
 [58, 1, 96, 1],
 [0, 9, 72, 1, 91, 1],
 [8, 1, 61, 1, 91, 1],
 [8, 1, 60, 1, 91, 1],
 [66, 1, 92, 1],
 [0, 82, 91, 1],
 [0, 70, 93, 1],
 [0, 2, 81, 1, 91, 1],
 [0, 10, 72, 1, 91, 1],
 [60, 1, 96, 1],
 [63, 1, 94, 1],
 [0, 83, 91, 1],
 [0, 71, 93, 1],
 [0, 3, 81, 1, 91, 1],
 [0, 11, 72, 1, 91, 1],
 [55, 1, 98, 1],
 [67, 1, 92, 1],
 [0, 84, 91, 1],
 [0, 72, 93, 1],
 [139, 1],
 [1, 1, 60, 1, 96, 1],
 [72, 1, 93, 1],
 [13, 2, 23, 1, 91, 1],
 [8, 1, 63, 1, 91, 1],
 [22, 1, 39, 1, 91, 1],
 [0, 85, 91, 1],
 [0, 73, 93, 1],
 [0, 1, 139, 1],
 [140, 1],
 [0, 1, 72, 1, 93, 1],
 [4, 1, 75, 1, 91, 1],
 [46, 1, 103, 1],
 [0, 86, 91, 1],
 [0, 74, 93, 1],
 [84, 1, 91, 1],
 [0, 2, 139, 1],
 [141, 1],
 [0, 1, 140, 1],
 [0, 2, 72, 1, 93, 1],
 [49, 1, 103, 1],
 [48, 1, 103, 1],
 [52, 1, 101, 1],
 [0, 87, 91, 1],
 [0, 75, 93, 1],
 [0, 1, 141, 1],
 [0, 2, 140, 1],
 [0, 3, 72, 1, 93, 1],
 [60, 1, 97, 1],
 [13, 1, 61, 1, 91, 1],
 [8, 1, 66, 1, 91, 1],
 [77, 1, 92, 1],
 [0, 88, 91, 1],
 [0, 76, 93, 1],
 [1, 1, 84, 1, 91, 1],
 [85, 1, 91, 1],
 [79, 1, 92, 1],
 [0, 3, 140, 1],
 [0, 4, 72, 1, 93, 1],
 [78, 1, 93, 1],
 [72, 1, 94, 1],
 [78, 1, 92, 1],
 [52, 1, 103, 1],
 [0, 89, 91, 1],
 [0, 77, 93, 1],
 [0, 1, 85, 1, 91, 1],
 [86, 1, 91, 1],
 [0, 5, 72, 1, 93, 1],
 [61, 1, 98, 1],
 [54, 1, 103, 1],
 [60, 1, 98, 1],
 [80, 1, 92, 1],
 [26, 1, 115, 1],
 [0, 1, 72, 1, 94, 1],
 [67, 1, 95, 1],
 [0, 90, 91, 1],
 [0, 78, 93, 1],
 [0, 2, 85, 1, 91, 1],
 [0, 1, 86, 1, 91, 1],
 [0, 6, 72, 1, 93, 1],
 [8, 2, 49, 1, 91, 1],
 [8, 1, 13, 3, 91, 1],
 [13, 2, 32, 1, 91, 1],
 [0, 2, 72, 1, 94, 1],
 [75, 1, 94, 1],
 [0, 91, 91, 1],
 [0, 79, 93, 1],
 [0, 2, 86, 1, 91, 1],
 [142, 1],
 [0, 7, 72, 1, 93, 1],
 [1, 1, 60, 1, 98, 1],
 [9, 1, 72, 1, 91, 1],
 [26, 1, 46, 1, 91, 1],
 [0, 92, 91, 1],
 [0, 80, 93, 1],
 [0, 3, 86, 1, 91, 1],
 [0, 8, 72, 1, 93, 1],
 [8, 1, 41, 1, 98, 1],
 [8, 1, 13, 2, 98, 1],
 [13, 1, 23, 1, 103, 1],
 [63, 1, 98, 1],
 [0, 93, 91, 1],
 [0, 81, 93, 1],
 [0, 4, 86, 1, 91, 1],
 [76, 1, 96, 1],
 [0, 9, 72, 1, 93, 1],
 [8, 1, 77, 1, 91, 1],
 [75, 1, 96, 1],
 [0, 94, 91, 1],
 [0, 82, 93, 1],
 [0, 5, 86, 1, 91, 1],
 [0, 10, 72, 1, 93, 1],
 [60, 1, 102, 1],
 [26, 1, 118, 1],
 [0, 95, 91, 1],
 [0, 83, 93, 1],
 [0, 6, 86, 1, 91, 1],
 [0, 11, 72, 1, 93, 1],
 [61, 1, 103, 1],
 [1, 1, 8, 1, 77, 1, 91, 1],
 [66, 1, 98, 1],
 [0, 96, 91, 1],
 [0, 84, 93, 1],
 [8, 1, 13, 1, 49, 1, 91, 1],
 [13, 4, 91, 1],
 [13, 1, 73, 1, 91, 1],
 [39, 2, 91, 1],
 [0, 97, 91, 1],
 [0, 85, 93, 1],
 [143, 1],
 [1, 1, 66, 1, 98, 1],
 [0, 98, 91, 1],
 [0, 86, 93, 1],
 [89, 1, 91, 1],
 [0, 1, 143, 1],
 [8, 1, 49, 1, 98, 1],
 [13, 3, 98, 1],
 [13, 1, 32, 1, 103, 1],
 [0, 99, 91, 1],
 [0, 87, 93, 1],
 [60, 1, 104, 1],
 [8, 2, 61, 1, 91, 1],
 [41, 1, 115, 1],
 [72, 1, 99, 1],
 [13, 1, 77, 1, 91, 1],
 [39, 1, 115, 1],
 [0, 100, 91, 1],
 [0, 88, 93, 1],
 [1, 1, 89, 1, 91, 1],
 [90, 1, 91, 1],
 [85, 1, 92, 1],
 [0, 1, 72, 1, 99, 1],
 [78, 1, 97, 1],

];
