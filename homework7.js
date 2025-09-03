// שיעורי בית שיעור 7 - מערכים

// פונקציה 1: מיון מערך מהגדול לקטן
function sortDescending(arr) {
    // יצירת עותק של המערך כדי לא לשנות את המקורי
    let sortedArr = [...arr];
    
    // מיון בועות מהגדול לקטן
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            if (sortedArr[j] < sortedArr[j + 1]) {
                // החלפת ערכים
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    
    return sortedArr;
}

// פונקציה 2: מציאת ערכים משותפים בין 2 מערכים
function findCommonValues(arr1, arr2) {
    let commonValues = [];
    
    // בדיקה של כל ערך במערך הראשון
    for (let i = 0; i < arr1.length; i++) {
        let currentValue = arr1[i];
        let isCommon = false;
        
        // בדיקה אם הערך קיים במערך השני
        for (let j = 0; j < arr2.length; j++) {
            if (currentValue === arr2[j]) {
                isCommon = true;
                break;
            }
        }
        
        // בדיקה אם הערך כבר קיים במערך המשותף (למנוע כפילויות)
        if (isCommon) {
            let alreadyExists = false;
            for (let k = 0; k < commonValues.length; k++) {
                if (commonValues[k] === currentValue) {
                    alreadyExists = true;
                    break;
                }
            }
            
            if (!alreadyExists) {
                commonValues.push(currentValue);
            }
        }
    }
    
    return commonValues;
}

// פונקציה 3: חישוב ממוצע של מטריצה
function calculateMatrixAverage(matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }
    
    let totalSum = 0;
    let totalElements = 0;
    
    // מעבר על כל השורות במטריצה
    for (let i = 0; i < matrix.length; i++) {
        // בדיקה שהשורה היא מערך
        if (Array.isArray(matrix[i])) {
            // מעבר על כל העמודות בשורה
            for (let j = 0; j < matrix[i].length; j++) {
                // בדיקה שהערך הוא מספר
                if (typeof matrix[i][j] === 'number' && !isNaN(matrix[i][j])) {
                    totalSum += matrix[i][j];
                    totalElements++;
                }
            }
        }
    }
    
    // חישוב הממוצע
    return totalElements > 0 ? totalSum / totalElements : 0;
}

// פונקציה 4: ספירה והסרה של מספר באמצעות pop()
function countAndRemoveWithPop(arr, targetNumber) {
    let count = 0;
    let tempArray = [];
    
    // מעבר על המערך מהסוף להתחלה כדי להשתמש ב-pop()
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === targetNumber) {
            // אם זה המספר המבוקש, נסיר אותו עם pop()
            arr.pop();
            count++;
        } else {
            // אם זה לא המספר המבוקש, נשמור אותו במערך זמני
            tempArray.unshift(arr.pop());
        }
    }
    
    // החזרת המספרים שלא היו המספר המבוקש
    for (let i = 0; i < tempArray.length; i++) {
        arr.push(tempArray[i]);
    }
    
    return count;
}

// דוגמאות לשימוש בפונקציות
console.log("=== בדיקת הפונקציות ===");

// בדיקת פונקציה 1 - מיון מהגדול לקטן
console.log("\n1. מיון מהגדול לקטן:");
let numbers1 = [5, 2, 8, 1, 9, 3];
console.log("מערך מקורי:", numbers1);
console.log("מערך ממוין:", sortDescending(numbers1));

// בדיקת פונקציה 2 - ערכים משותפים
console.log("\n2. ערכים משותפים:");
let arr1 = [1, 2, 1, 2, 1];
let arr2 = [2, 2, 2, 1, 3, 1, 2];
console.log("מערך 1:", arr1);
console.log("מערך 2:", arr2);
console.log("ערכים משותפים:", findCommonValues(arr1, arr2));

// בדיקת פונקציה 3 - ממוצע מטריצה
console.log("\n3. ממוצע מטריצה:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("מטריצה:", matrix);
console.log("ממוצע:", calculateMatrixAverage(matrix));

// בדיקת פונקציה 4 - ספירה והסרה עם pop()
console.log("\n4. ספירה והסרה עם pop():");
let numbers2 = [1, 2, 3, 2, 4, 2, 5];
let targetNum = 2;
console.log("מערך מקורי:", numbers2);
console.log("מספר להסרה:", targetNum);
let removedCount = countAndRemoveWithPop(numbers2, targetNum);
console.log("כמות המספרים שהוסרו:", removedCount);
console.log("מערך אחרי הסרה:", numbers2);
