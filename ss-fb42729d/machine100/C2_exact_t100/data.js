const MODE="Exact";
const arr_factors=[];
const T_TOP_CELL = 1;
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
 [0, 1, 8, 1],
 [9, 1],
 [0, 20],
 [0, 2, 8, 1],
 [1, 1, 8, 1],
 [0, 1, 9, 1],
 [1, 1, 7, 1],
 [0, 21],
 [0, 2, 9, 1],
 [0, 22],
 [0, 3, 9, 1],
 [1, 2, 8, 1],
 [2, 1, 8, 1],
 [1, 2, 7, 1],
 [10, 1],
 [0, 23],
 [0, 4, 9, 1],
 [11, 1],
 [0, 1, 2, 1, 8, 1],
 [0, 24],
 [0, 2, 2, 1, 8, 1],
 [12, 1],
 [3, 3],
 [0, 25],
 [1, 1, 11, 1],
 [0, 1, 12, 1],
 [0, 26],
 [13, 1],
 [0, 2, 12, 1],
 [1, 1, 12, 1],
 [2, 1, 10, 1],
 [0, 27],
 [14, 1],
 [0, 28],
 [1, 1, 13, 1],
 [15, 1],
 [2, 1, 12, 1],
 [0, 29],
 [0, 1, 15, 1],
 [0, 1, 2, 1, 12, 1],
 [1, 1, 14, 1],
 [0, 30],
 [0, 2, 15, 1],
 [16, 1],
 [0, 31],
 [0, 1, 16, 1],
 [0, 32],
 [0, 2, 16, 1],
 [17, 1],
 [1, 1, 16, 1],
 [2, 2, 12, 1],
 [0, 33],
 [0, 1, 17, 1],
 [18, 1],
 [0, 34],
 [0, 2, 17, 1],
 [1, 2, 16, 1],
 [2, 1, 16, 1],
 [0, 1, 18, 1],
 [0, 35],
 [0, 3, 17, 1],
 [19, 1],
 [0, 1, 2, 1, 16, 1],
 [0, 2, 18, 1],
 [0, 36],
 [0, 2, 2, 1, 16, 1],
 [8, 2],
 [0, 37],
 [1, 1, 19, 1],
 [0, 1, 8, 2],
 [20, 1],
 [0, 38],
 [21, 1],
 [0, 2, 8, 2],
 [1, 1, 8, 2],
 [0, 1, 20, 1],
 [0, 39],
 [0, 2, 20, 1],
 [0, 40],
 [1, 1, 21, 1],
 [22, 1],
 [0, 3, 20, 1],
 [2, 1, 8, 2],
 [0, 41],
 [0, 1, 22, 1],
 [0, 4, 20, 1],
 [0, 1, 2, 1, 8, 2],
 [0, 42],
 [0, 2, 22, 1],
 [25, 1],
 [24, 1],
 [8, 1, 12, 1],
 [23, 1],
 [0, 43],
 [0, 1, 25, 1],
 [0, 1, 24, 1],
 [0, 1, 8, 1, 12, 1],
 [0, 44],
 [0, 2, 25, 1],
 [1, 1, 25, 1],
 [0, 2, 24, 1],
 [0, 2, 8, 1, 12, 1],
 [1, 1, 8, 1, 12, 1],
 [1, 1, 23, 1],
 [10, 2],
 [0, 45],
 [0, 3, 24, 1],
 [3, 1, 20, 1],
 [0, 46],
 [0, 4, 24, 1],
 [1, 2, 25, 1],
 [2, 1, 25, 1],
 [0, 1, 3, 1, 20, 1],
 [2, 1, 23, 1],
 [0, 47],
 [0, 5, 24, 1],
 [26, 1],
 [0, 1, 2, 1, 25, 1],
 [0, 2, 3, 1, 20, 1],
 [0, 48],
 [0, 2, 2, 1, 25, 1],
 [8, 1, 16, 1],
 [12, 2],
 [0, 49],
 [1, 1, 26, 1],
 [0, 1, 8, 1, 16, 1],
 [0, 50],
 [27, 1],
 [0, 2, 8, 1, 16, 1],
 [1, 1, 8, 1, 16, 1],
 [0, 51],
 [0, 52],
 [1, 1, 27, 1],
 [28, 1],
 [2, 1, 8, 1, 16, 1],
 [0, 53],
 [0, 1, 28, 1],
 [0, 1, 2, 1, 8, 1, 16, 1],
 [0, 54],
 [0, 2, 28, 1],
 [29, 1],
 [8, 3],
 [0, 55],
 [0, 1, 29, 1],
 [0, 1, 8, 3],
 [0, 56],
 [0, 2, 29, 1],
 [30, 1],
 [1, 1, 29, 1],
 [0, 2, 8, 3],
 [1, 1, 8, 3],
 [0, 57],
 [0, 1, 30, 1],
 [0, 58],
 [0, 2, 30, 1],
 [1, 2, 29, 1],
 [2, 1, 29, 1],
 [0, 59],
 [0, 3, 30, 1],
 [31, 1],
 [0, 1, 2, 1, 29, 1],
 [0, 60],
 [0, 2, 2, 1, 29, 1],
 [8, 1, 25, 1],
 [8, 2, 12, 1],
 [0, 61],
 [1, 1, 31, 1],
 [0, 1, 8, 1, 25, 1],
 [32, 1],
 [0, 62],
 [33, 1],
 [0, 2, 8, 1, 25, 1],
 [1, 1, 8, 1, 25, 1],
 [0, 1, 32, 1],
 [0, 63],
 [0, 2, 32, 1],
 [0, 64],
 [1, 1, 33, 1],
 [34, 1],
 [0, 3, 32, 1],
 [2, 1, 8, 1, 25, 1],
 [0, 65],
 [0, 1, 34, 1],
 [0, 1, 2, 1, 8, 1, 25, 1],
 [0, 66],
 [0, 2, 34, 1],
 [35, 1],
 [8, 2, 16, 1],
 [8, 1, 12, 2],
 [12, 1, 23, 1],
 [0, 67],
 [0, 1, 35, 1],
 [37, 1],
 [0, 1, 8, 2, 16, 1],
 [36, 1],
 [0, 68],
 [0, 2, 35, 1],
 [1, 1, 35, 1],
 [0, 1, 37, 1],
 [0, 2, 8, 2, 16, 1],
 [1, 1, 8, 2, 16, 1],
 [0, 1, 36, 1],
 [0, 69],
 [0, 2, 37, 1],
 [0, 2, 36, 1],
 [0, 70],
 [0, 3, 37, 1],
 [1, 2, 35, 1],
 [2, 1, 35, 1],
 [0, 3, 36, 1],
 [0, 71],
 [0, 4, 37, 1],
 [38, 1],
 [0, 1, 2, 1, 35, 1],
 [0, 4, 36, 1],
 [0, 72],
 [0, 2, 2, 1, 35, 1],
 [8, 1, 29, 1],
 [8, 4],
 [12, 3],
 [0, 73],
 [1, 1, 38, 1],
 [0, 1, 8, 1, 29, 1],
 [0, 74],
 [39, 1],
 [0, 2, 8, 1, 29, 1],
 [1, 1, 8, 1, 29, 1],
 [20, 2],
 [0, 75],
 [0, 76],
 [1, 1, 39, 1],
 [40, 1],
 [2, 1, 8, 1, 29, 1],
 [0, 77],
 [0, 1, 40, 1],
 [0, 1, 2, 1, 8, 1, 29, 1],
 [0, 78],
 [0, 2, 40, 1],
 [42, 1],
 [8, 2, 25, 1],
 [41, 1],
 [8, 3, 12, 1],
 [0, 79],
 [0, 1, 42, 1],
 [0, 1, 8, 2, 25, 1],
 [0, 1, 41, 1],
 [0, 80],
 [0, 2, 42, 1],
 [43, 1],
 [1, 1, 42, 1],
 [0, 2, 8, 2, 25, 1],
 [1, 1, 8, 2, 25, 1],
 [0, 2, 41, 1],
 [0, 81],
 [0, 1, 43, 1],
 [0, 3, 41, 1],
 [0, 82],
 [0, 2, 43, 1],
 [1, 2, 42, 1],
 [2, 1, 42, 1],
 [0, 4, 41, 1],
 [0, 83],
 [0, 3, 43, 1],
 [44, 1],
 [0, 1, 2, 1, 42, 1],
 [0, 5, 41, 1],
 [0, 84],
 [0, 2, 2, 1, 42, 1],
 [8, 1, 35, 1],
 [8, 3, 16, 1],
 [8, 2, 12, 2],
 [23, 2],
 [0, 85],
 [1, 1, 44, 1],
 [0, 1, 8, 1, 35, 1],
 [45, 1],
 [0, 86],
 [46, 1],
 [0, 2, 8, 1, 35, 1],
 [1, 1, 8, 1, 35, 1],
 [0, 1, 45, 1],
 [0, 87],
 [0, 2, 45, 1],
 [0, 88],
 [1, 1, 46, 1],
 [47, 1],
 [0, 3, 45, 1],
 [2, 1, 8, 1, 35, 1],
 [0, 89],
 [0, 1, 47, 1],
 [0, 4, 45, 1],
 [48, 1],
 [0, 1, 2, 1, 8, 1, 35, 1],
 [0, 90],
 [0, 2, 47, 1],
 [49, 1],
 [0, 1, 48, 1],
 [8, 2, 29, 1],
 [8, 5],
 [8, 1, 12, 3],
 [12, 2, 23, 1],
 [0, 91],
 [0, 1, 49, 1],
 [0, 2, 48, 1],
 [0, 1, 8, 2, 29, 1],
 [0, 92],
 [0, 2, 49, 1],
 [1, 1, 49, 1],
 [0, 3, 48, 1],
 [0, 2, 8, 2, 29, 1],
 [1, 1, 8, 2, 29, 1],
 [0, 93],
 [0, 4, 48, 1],
 [3, 1, 45, 1],
 [0, 94],
 [0, 5, 48, 1],
 [1, 2, 49, 1],
 [2, 1, 49, 1],
 [0, 1, 3, 1, 45, 1],
 [0, 95],
 [0, 6, 48, 1],
 [50, 1],
 [0, 1, 2, 1, 49, 1],
 [0, 2, 3, 1, 45, 1],
 [0, 96],
 [0, 2, 2, 1, 49, 1],
 [8, 1, 42, 1],
 [8, 3, 25, 1],
 [8, 4, 12, 1],
 [12, 4],
 [0, 97],
 [1, 1, 50, 1],
 [0, 1, 8, 1, 42, 1],
 [0, 98],
 [51, 1],
 [0, 2, 8, 1, 42, 1],
 [1, 1, 8, 1, 42, 1],
 [20, 1, 32, 1],
 [0, 99],
 [0, 100],
 [1, 1, 51, 1],
 [52, 1],
 [2, 1, 8, 1, 42, 1],

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
 [0, 1, 8, 1],
 [9, 1],
 [0, 20],
 [0, 2, 8, 1],
 [1, 1, 8, 1],
 [0, 1, 9, 1],
 [1, 1, 7, 1],
 [0, 21],
 [0, 2, 9, 1],
 [0, 22],
 [0, 3, 9, 1],
 [1, 2, 8, 1],
 [2, 1, 8, 1],
 [1, 2, 7, 1],
 [10, 1],
 [0, 23],
 [0, 4, 9, 1],
 [11, 1],
 [0, 1, 2, 1, 8, 1],
 [0, 24],
 [0, 2, 2, 1, 8, 1],
 [12, 1],
 [3, 3],
 [0, 25],
 [1, 1, 11, 1],
 [0, 1, 12, 1],
 [0, 26],
 [13, 1],
 [0, 2, 12, 1],
 [1, 1, 12, 1],
 [2, 1, 10, 1],
 [0, 27],
 [14, 1],
 [0, 28],
 [1, 1, 13, 1],
 [15, 1],
 [2, 1, 12, 1],
 [0, 29],
 [0, 1, 15, 1],
 [0, 1, 2, 1, 12, 1],
 [1, 1, 14, 1],
 [0, 30],
 [0, 2, 15, 1],
 [16, 1],
 [0, 31],
 [0, 1, 16, 1],
 [0, 32],
 [0, 2, 16, 1],
 [17, 1],
 [1, 1, 16, 1],
 [2, 2, 12, 1],
 [0, 33],
 [0, 1, 17, 1],
 [18, 1],
 [0, 34],
 [0, 2, 17, 1],
 [1, 2, 16, 1],
 [2, 1, 16, 1],
 [0, 1, 18, 1],
 [0, 35],
 [0, 3, 17, 1],
 [19, 1],
 [0, 1, 2, 1, 16, 1],
 [0, 2, 18, 1],
 [0, 36],
 [0, 2, 2, 1, 16, 1],
 [8, 2],
 [0, 37],
 [1, 1, 19, 1],
 [0, 1, 8, 2],
 [20, 1],
 [0, 38],
 [21, 1],
 [0, 2, 8, 2],
 [1, 1, 8, 2],
 [0, 1, 20, 1],
 [0, 39],
 [0, 2, 20, 1],
 [0, 40],
 [1, 1, 21, 1],
 [22, 1],
 [0, 3, 20, 1],
 [2, 1, 8, 2],
 [0, 41],
 [0, 1, 22, 1],
 [0, 4, 20, 1],
 [0, 1, 2, 1, 8, 2],
 [0, 42],
 [0, 2, 22, 1],
 [25, 1],
 [24, 1],
 [8, 1, 12, 1],
 [23, 1],
 [0, 43],
 [0, 1, 25, 1],
 [0, 1, 24, 1],
 [0, 1, 8, 1, 12, 1],
 [0, 44],
 [0, 2, 25, 1],
 [1, 1, 25, 1],
 [0, 2, 24, 1],
 [0, 2, 8, 1, 12, 1],
 [1, 1, 8, 1, 12, 1],
 [1, 1, 23, 1],
 [10, 2],
 [0, 45],
 [0, 3, 24, 1],
 [3, 1, 20, 1],
 [0, 46],
 [0, 4, 24, 1],
 [1, 2, 25, 1],
 [2, 1, 25, 1],
 [0, 1, 3, 1, 20, 1],
 [2, 1, 23, 1],
 [0, 47],
 [0, 5, 24, 1],
 [26, 1],
 [0, 1, 2, 1, 25, 1],
 [0, 2, 3, 1, 20, 1],
 [0, 48],
 [0, 2, 2, 1, 25, 1],
 [8, 1, 16, 1],
 [12, 2],
 [0, 49],
 [1, 1, 26, 1],
 [0, 1, 8, 1, 16, 1],
 [0, 50],
 [27, 1],
 [0, 2, 8, 1, 16, 1],
 [1, 1, 8, 1, 16, 1],
 [0, 51],
 [0, 52],
 [1, 1, 27, 1],
 [28, 1],
 [2, 1, 8, 1, 16, 1],
 [0, 53],
 [0, 1, 28, 1],
 [0, 1, 2, 1, 8, 1, 16, 1],
 [0, 54],
 [0, 2, 28, 1],
 [29, 1],
 [8, 3],
 [0, 55],
 [0, 1, 29, 1],
 [0, 1, 8, 3],
 [0, 56],
 [0, 2, 29, 1],
 [30, 1],
 [1, 1, 29, 1],
 [0, 2, 8, 3],
 [1, 1, 8, 3],
 [0, 57],
 [0, 1, 30, 1],
 [0, 58],
 [0, 2, 30, 1],
 [1, 2, 29, 1],
 [2, 1, 29, 1],
 [0, 59],
 [0, 3, 30, 1],
 [31, 1],
 [0, 1, 2, 1, 29, 1],
 [0, 60],
 [0, 2, 2, 1, 29, 1],
 [8, 1, 25, 1],
 [8, 2, 12, 1],
 [0, 61],
 [1, 1, 31, 1],
 [0, 1, 8, 1, 25, 1],
 [32, 1],
 [0, 62],
 [33, 1],
 [0, 2, 8, 1, 25, 1],
 [1, 1, 8, 1, 25, 1],
 [0, 1, 32, 1],
 [0, 63],
 [0, 2, 32, 1],
 [0, 64],
 [1, 1, 33, 1],
 [34, 1],
 [0, 3, 32, 1],
 [2, 1, 8, 1, 25, 1],
 [0, 65],
 [0, 1, 34, 1],
 [0, 1, 2, 1, 8, 1, 25, 1],
 [0, 66],
 [0, 2, 34, 1],
 [35, 1],
 [8, 2, 16, 1],
 [8, 1, 12, 2],
 [12, 1, 23, 1],
 [0, 67],
 [0, 1, 35, 1],
 [37, 1],
 [0, 1, 8, 2, 16, 1],
 [36, 1],
 [0, 68],
 [0, 2, 35, 1],
 [1, 1, 35, 1],
 [0, 1, 37, 1],
 [0, 2, 8, 2, 16, 1],
 [1, 1, 8, 2, 16, 1],
 [0, 1, 36, 1],
 [0, 69],
 [0, 2, 37, 1],
 [0, 2, 36, 1],
 [0, 70],
 [0, 3, 37, 1],
 [1, 2, 35, 1],
 [2, 1, 35, 1],
 [0, 3, 36, 1],
 [0, 71],
 [0, 4, 37, 1],
 [38, 1],
 [0, 1, 2, 1, 35, 1],
 [0, 4, 36, 1],
 [0, 72],
 [0, 2, 2, 1, 35, 1],
 [8, 1, 29, 1],
 [8, 4],
 [12, 3],
 [0, 73],
 [1, 1, 38, 1],
 [0, 1, 8, 1, 29, 1],
 [0, 74],
 [39, 1],
 [0, 2, 8, 1, 29, 1],
 [1, 1, 8, 1, 29, 1],
 [20, 2],
 [0, 75],
 [0, 76],
 [1, 1, 39, 1],
 [40, 1],
 [2, 1, 8, 1, 29, 1],
 [0, 77],
 [0, 1, 40, 1],
 [0, 1, 2, 1, 8, 1, 29, 1],
 [0, 78],
 [0, 2, 40, 1],
 [42, 1],
 [8, 2, 25, 1],
 [41, 1],
 [8, 3, 12, 1],
 [0, 79],
 [0, 1, 42, 1],
 [0, 1, 8, 2, 25, 1],
 [0, 1, 41, 1],
 [0, 80],
 [0, 2, 42, 1],
 [43, 1],
 [1, 1, 42, 1],
 [0, 2, 8, 2, 25, 1],
 [1, 1, 8, 2, 25, 1],
 [0, 2, 41, 1],
 [0, 81],
 [0, 1, 43, 1],
 [0, 3, 41, 1],
 [0, 82],
 [0, 2, 43, 1],
 [1, 2, 42, 1],
 [2, 1, 42, 1],
 [0, 4, 41, 1],
 [0, 83],
 [0, 3, 43, 1],
 [44, 1],
 [0, 1, 2, 1, 42, 1],
 [0, 5, 41, 1],
 [0, 84],
 [0, 2, 2, 1, 42, 1],
 [8, 1, 35, 1],
 [8, 3, 16, 1],
 [8, 2, 12, 2],
 [23, 2],
 [0, 85],
 [1, 1, 44, 1],
 [0, 1, 8, 1, 35, 1],
 [45, 1],
 [0, 86],
 [46, 1],
 [0, 2, 8, 1, 35, 1],
 [1, 1, 8, 1, 35, 1],
 [0, 1, 45, 1],
 [0, 87],
 [0, 2, 45, 1],
 [0, 88],
 [1, 1, 46, 1],
 [47, 1],
 [0, 3, 45, 1],
 [2, 1, 8, 1, 35, 1],
 [0, 89],
 [0, 1, 47, 1],
 [0, 4, 45, 1],
 [48, 1],
 [0, 1, 2, 1, 8, 1, 35, 1],
 [0, 90],
 [0, 2, 47, 1],
 [49, 1],
 [0, 1, 48, 1],
 [8, 2, 29, 1],
 [8, 5],
 [8, 1, 12, 3],
 [12, 2, 23, 1],
 [0, 91],
 [0, 1, 49, 1],
 [0, 2, 48, 1],
 [0, 1, 8, 2, 29, 1],
 [0, 92],
 [0, 2, 49, 1],
 [1, 1, 49, 1],
 [0, 3, 48, 1],
 [0, 2, 8, 2, 29, 1],
 [1, 1, 8, 2, 29, 1],
 [0, 93],
 [0, 4, 48, 1],
 [3, 1, 45, 1],
 [0, 94],
 [0, 5, 48, 1],
 [1, 2, 49, 1],
 [2, 1, 49, 1],
 [0, 1, 3, 1, 45, 1],
 [0, 95],
 [0, 6, 48, 1],
 [50, 1],
 [0, 1, 2, 1, 49, 1],
 [0, 2, 3, 1, 45, 1],
 [0, 96],
 [0, 2, 2, 1, 49, 1],
 [8, 1, 42, 1],
 [8, 3, 25, 1],
 [8, 4, 12, 1],
 [12, 4],
 [0, 97],
 [1, 1, 50, 1],
 [0, 1, 8, 1, 42, 1],
 [0, 98],
 [51, 1],
 [0, 2, 8, 1, 42, 1],
 [1, 1, 8, 1, 42, 1],
 [20, 1, 32, 1],
 [0, 99],
 [0, 100],
 [1, 1, 51, 1],
 [52, 1],
 [2, 1, 8, 1, 42, 1],

 [53, 1],
 [1, 1, 53, 1],
 [54, 1],
 [1, 2, 53, 1],
 [2, 1, 53, 1],
 [1, 1, 54, 1],
 [1, 2, 54, 1],
 [2, 2, 53, 1],
 [3, 1, 53, 1],
 [55, 1],
 [1, 1, 3, 1, 53, 1],
 [4, 1, 53, 1],
 [3, 1, 54, 1],
 [57, 1],
 [56, 1],
 [1, 2, 3, 1, 53, 1],
 [1, 1, 4, 1, 53, 1],
 [1, 1, 3, 1, 54, 1],
 [5, 1, 53, 1],
 [4, 1, 54, 1],
 [58, 1],
 [1, 1, 5, 1, 53, 1],
 [6, 1, 53, 1],
 [3, 2, 53, 1],
 [59, 1],
 [5, 1, 54, 1],
 [8, 1, 53, 1],
 [60, 1],
 [7, 1, 53, 1],
 [1, 1, 5, 1, 54, 1],
 [1, 1, 8, 1, 53, 1],
 [1, 1, 7, 1, 53, 1],
 [2, 1, 59, 1],
 [61, 1],
 [8, 1, 54, 1],
 [7, 1, 54, 1],
 [1, 2, 8, 1, 53, 1],
 [2, 1, 60, 1],
 [10, 1, 53, 1],
 [11, 1, 53, 1],
 [1, 1, 8, 1, 54, 1],
 [1, 1, 7, 1, 54, 1],
 [63, 1],
 [62, 1],
 [12, 1, 53, 1],
 [3, 3, 53, 1],
 [1, 1, 11, 1, 53, 1],
 [1, 2, 8, 1, 54, 1],
 [13, 1, 53, 1],
 [11, 1, 54, 1],
 [1, 1, 12, 1, 53, 1],
 [2, 1, 10, 1, 53, 1],
 [65, 1],
 [8, 1, 55, 1],
 [12, 1, 54, 1],
 [64, 1],
 [14, 1, 53, 1],
 [1, 1, 13, 1, 53, 1],
 [15, 1, 53, 1],
 [2, 1, 12, 1, 53, 1],
 [13, 1, 54, 1],
 [1, 1, 14, 1, 53, 1],
 [16, 1, 53, 1],
 [8, 1, 56, 1],
 [14, 1, 54, 1],
 [1, 1, 13, 1, 54, 1],
 [1, 1, 16, 1, 53, 1],
 [2, 2, 12, 1, 53, 1],
 [66, 1],
 [16, 1, 54, 1],
 [12, 1, 55, 1],
 [1, 2, 16, 1, 53, 1],
 [7, 1, 59, 1],
 [19, 1, 53, 1],
 [1, 1, 16, 1, 54, 1],
 [68, 1],
 [67, 1],
 [8, 2, 53, 1],
 [12, 1, 56, 1],
 [1, 1, 19, 1, 53, 1],
 [1, 2, 16, 1, 54, 1],
 [21, 1, 53, 1],
 [19, 1, 54, 1],
 [69, 1],
 [16, 1, 55, 1],
 [8, 2, 54, 1],
 [1, 1, 21, 1, 53, 1],
 [22, 1, 53, 1],
 [10, 1, 60, 1],
 [12, 1, 59, 1],
 [21, 1, 54, 1],
 [25, 1, 53, 1],
 [16, 1, 56, 1],
 [8, 1, 12, 1, 53, 1],
 [12, 1, 60, 1],
 [23, 1, 53, 1],
 [1, 1, 21, 1, 54, 1],
 [1, 1, 25, 1, 53, 1],
 [1, 1, 23, 1, 53, 1],
 [10, 2, 53, 1],
 [70, 1],
 [25, 1, 54, 1],
 [8, 2, 55, 1],
 [8, 1, 12, 1, 54, 1],
 [23, 1, 54, 1],
 [1, 2, 25, 1, 53, 1],
 [2, 1, 23, 1, 53, 1],
 [26, 1, 53, 1],
 [1, 1, 25, 1, 54, 1],
 [72, 1],
 [71, 1],
 [8, 1, 16, 1, 53, 1],
 [8, 2, 56, 1],
 [12, 2, 53, 1],
 [1, 1, 26, 1, 53, 1],
 [1, 2, 25, 1, 54, 1],
 [27, 1, 53, 1],
 [26, 1, 54, 1],
 [73, 1],
 [25, 1, 55, 1],
 [8, 1, 16, 1, 54, 1],
 [8, 1, 12, 1, 55, 1],
 [12, 2, 54, 1],
 [1, 1, 27, 1, 53, 1],
 [28, 1, 53, 1],
 [27, 1, 54, 1],
 [29, 1, 53, 1],
 [25, 1, 56, 1],
 [8, 3, 53, 1],
 [8, 1, 12, 1, 56, 1],
 [1, 1, 27, 1, 54, 1],
 [1, 1, 29, 1, 53, 1],
 [74, 1],
 [29, 1, 54, 1],
 [8, 1, 16, 1, 55, 1],
 [8, 3, 54, 1],
 [12, 2, 55, 1],
 [1, 2, 29, 1, 53, 1],
 [31, 1, 53, 1],
 [1, 1, 29, 1, 54, 1],
 [76, 1],
 [75, 1],
 [8, 1, 25, 1, 53, 1],
 [8, 1, 16, 1, 56, 1],
 [8, 2, 12, 1, 53, 1],
 [12, 2, 56, 1],
 [23, 1, 60, 1],
 [1, 1, 31, 1, 53, 1],
 [1, 2, 29, 1, 54, 1],
 [33, 1, 53, 1],
 [31, 1, 54, 1],
 [77, 1],
 [29, 1, 55, 1],
 [8, 1, 25, 1, 54, 1],
 [8, 3, 55, 1],
 [8, 2, 12, 1, 54, 1],
 [1, 1, 33, 1, 53, 1],
 [34, 1, 53, 1],
 [33, 1, 54, 1],
 [35, 1, 53, 1],
 [29, 1, 56, 1],
 [8, 2, 16, 1, 53, 1],
 [8, 3, 56, 1],
 [8, 1, 12, 2, 53, 1],
 [12, 2, 60, 1],
 [12, 1, 23, 1, 53, 1],
 [1, 1, 33, 1, 54, 1],
 [1, 1, 35, 1, 53, 1],
 [78, 1],
 [35, 1, 54, 1],
 [8, 1, 25, 1, 55, 1],
 [8, 2, 16, 1, 54, 1],
 [8, 2, 12, 1, 55, 1],
 [8, 1, 12, 2, 54, 1],
 [1, 2, 35, 1, 53, 1],
 [38, 1, 53, 1],
 [1, 1, 35, 1, 54, 1],
 [80, 1],
 [79, 1],
 [8, 1, 29, 1, 53, 1],
 [8, 1, 25, 1, 56, 1],
 [8, 4, 53, 1],
 [8, 2, 12, 1, 56, 1],
 [12, 3, 53, 1],
 [1, 1, 38, 1, 53, 1],
 [1, 2, 35, 1, 54, 1],
 [39, 1, 53, 1],
 [38, 1, 54, 1],
 [81, 1],
 [35, 1, 55, 1],
 [8, 1, 29, 1, 54, 1],
 [8, 2, 16, 1, 55, 1],
 [8, 4, 54, 1],
 [8, 1, 12, 2, 55, 1],
 [12, 3, 54, 1],
 [1, 1, 39, 1, 53, 1],
 [40, 1, 53, 1],
 [39, 1, 54, 1],
 [42, 1, 53, 1],
 [35, 1, 56, 1],
 [8, 2, 25, 1, 53, 1],
 [8, 2, 16, 1, 56, 1],
 [8, 3, 12, 1, 53, 1],
 [8, 1, 12, 2, 56, 1],
 [1, 1, 39, 1, 54, 1],
 [1, 1, 42, 1, 53, 1],
 [82, 1],
 [42, 1, 54, 1],
 [8, 1, 29, 1, 55, 1],
 [8, 2, 25, 1, 54, 1],
 [8, 4, 55, 1],
 [8, 3, 12, 1, 54, 1],
 [12, 3, 55, 1],
 [1, 2, 42, 1, 53, 1],
 [44, 1, 53, 1],
 [1, 1, 42, 1, 54, 1],
 [84, 1],
 [83, 1],
 [8, 1, 35, 1, 53, 1],
 [8, 1, 29, 1, 56, 1],
 [8, 3, 16, 1, 53, 1],
 [8, 4, 56, 1],
 [8, 2, 12, 2, 53, 1],
 [12, 3, 56, 1],
 [12, 1, 23, 1, 60, 1],
 [1, 1, 44, 1, 53, 1],
 [1, 2, 42, 1, 54, 1],
 [46, 1, 53, 1],
 [44, 1, 54, 1],
 [85, 1],
 [42, 1, 55, 1],
 [8, 1, 35, 1, 54, 1],
 [8, 2, 25, 1, 55, 1],
 [8, 3, 16, 1, 54, 1],
 [8, 3, 12, 1, 55, 1],
 [8, 2, 12, 2, 54, 1],
 [1, 1, 46, 1, 53, 1],
 [47, 1, 53, 1],
 [46, 1, 54, 1],
 [49, 1, 53, 1],
 [42, 1, 56, 1],
 [8, 2, 29, 1, 53, 1],
 [8, 2, 25, 1, 56, 1],
 [8, 5, 53, 1],
 [8, 3, 12, 1, 56, 1],
 [8, 1, 12, 3, 53, 1],
 [12, 3, 60, 1],
 [12, 2, 23, 1, 53, 1],
 [1, 1, 46, 1, 54, 1],
 [1, 1, 49, 1, 53, 1],
 [86, 1],
 [49, 1, 54, 1],
 [8, 1, 35, 1, 55, 1],
 [8, 2, 29, 1, 54, 1],
 [8, 3, 16, 1, 55, 1],
 [8, 5, 54, 1],
 [8, 2, 12, 2, 55, 1],
 [8, 1, 12, 3, 54, 1],
 [1, 2, 49, 1, 53, 1],
 [50, 1, 53, 1],
 [1, 1, 49, 1, 54, 1],
 [88, 1],
 [87, 1],
 [8, 1, 42, 1, 53, 1],
 [8, 1, 35, 1, 56, 1],
 [8, 3, 25, 1, 53, 1],
 [8, 3, 16, 1, 56, 1],
 [8, 4, 12, 1, 53, 1],
 [8, 2, 12, 2, 56, 1],
 [12, 4, 53, 1],
 [1, 1, 50, 1, 53, 1],
 [1, 2, 49, 1, 54, 1],
 [51, 1, 53, 1],
 [50, 1, 54, 1],
 [89, 1],
 [49, 1, 55, 1],
 [8, 1, 42, 1, 54, 1],
 [8, 2, 29, 1, 55, 1],
 [8, 3, 25, 1, 54, 1],
 [8, 5, 55, 1],
 [8, 4, 12, 1, 54, 1],
 [8, 1, 12, 3, 55, 1],
 [12, 4, 54, 1],
 [1, 1, 51, 1, 53, 1],
 [52, 1, 53, 1],

];
