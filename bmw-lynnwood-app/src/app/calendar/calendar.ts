import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
    selector: 'calendar',
    imports: [DatePipe],
    templateUrl: './calendar.html',
    styleUrl: './calendar.scss',
})
export class Calendar {

    public selectedDay = new Date();
    public selectedMonth: String = "";
    public selectedYear: String = "";

    constructor() {}

    ngOnInit() {
        this.playWithStrings();
        console.debug(this.listEvenNumbers([1,2,3,4,5,6,7]));
        console.debug(this.hasColorInList(["red", "blue", "purple", "white", "yellow"], "purple"));
        this.getCurrentDate();
    }

    public getCurrentDateOLD() {
        // 1. Get Today
        const today = new Date();
        
        // 2. Get Day Number and Month Number for Today
        const dayNumber = today.getDate();
        const monthNumber = today.getMonth() + 1; // returns month number

        // 3. Set SelectedMonth based on Today
        const monthName = today.toLocaleString('default', { month: 'long'});
        this.selectedMonth = monthName;

        // 4. Set selectedYear based on Today
        const year = today.getFullYear();
        this.selectedYear = `${year}`;  

        // 5. Return Today in MM/DD/YYYY format
        const dateString = `${monthNumber}/${dayNumber}/${year}`;
        console.debug("today's date is: ", dateString);
    }

    public getCurrentDate() {
        // 1. Get Today
        const today = this.getToday();

        // 2. Set selectedMonth to Today
        this.selectedMonth = this.getMonthNameByDate(today);

        // 3. Set selectedYear to Today
        this.selectedYear = this.getYearByDate(today);
                
        // 4. Log Today's Formatted Date
        const dateString = this.getFormattedDate(today);
        console.debug("today's date is: ", dateString);

        // BONUS: Log Tomorrow's Formatted Date
        const tomorrowDate = new Date();
        tomorrowDate.setDate(today.getDate() + 1);
        const tomorrowFormattedDate = this.getFormattedDate(tomorrowDate);
        console.debug("tomorrow is:", tomorrowFormattedDate);
    }
    
    private getMonthNameByDate(date: Date) {
        const monthName = date.toLocaleString('default', { month: 'long'});
        return monthName;
    }

    private getToday() {
        return new Date();
    }

    private getYearByDate(date: Date) {
        const year = date.getFullYear();
        return `${year}`;  
    }

    private getFormattedDate(date: Date) {
        const dayNumber = date.getDate();
        const monthNumber = date.getMonth() + 1; // returns month number
        const year = this.getYearByDate(date);
        const dateString = `${monthNumber}/${dayNumber}/${year}`;
        console.debug("today's date is: ", dateString);
        return dateString;
    }

    private listEvenNumbers(numbers: Number[]): Number[] {
        // numbers = [1, 2, 3, 4];
        let theBestNumber = 7;
        theBestNumber.toFixed(2);
        console.debug("what is best number: ", theBestNumber.toFixed(2)); 
        let evenNumbers: Number[] = [];
        let oddNumbers: Number[] = [];
        let isLastNumberEven = false;
        numbers.forEach((number: any, index) => {
            // if even, add to our list
            if (number % 2 === 0) {
                evenNumbers.push(number);
                // if last number is even, set isLastNumberEven = true;
                if (index === numbers.length - 1) {
                    isLastNumberEven = true;
                }
                
            } else {
                // evenNumbers.push(number);
                oddNumbers.push(number);
            }
            // otherwise, ignore
        });
        return evenNumbers;        

    }

    private hasColorInList(colors: String[], colorToFind: string){
        let hasColor = false;
        console.debug(colors.length -1);
        // colors = ["red, blue, purple, white"];
        
        // colorToFind = "purple";
        
        // check if color is in our list
        colors.forEach((color, index) => {
            const isLastInList = index === colors.length - 1;
            // console.debug(colors.length -1); 
            if (isLastInList) { // same as if (index === colors.length - 1);
            // console.debug(color.name);
                console.debug(color);
            }
            if (color == colorToFind) {
                hasColor = true;
            }
        });

        // return first color
        return colors[0];
        // colors = ["red", "blue", "purple", "white"];
        // colors =
        const colorMap: Record<string, string> = {
            purple: "purple",
            red: "red",
            white: "white",
            blue: "blue"
        };
        return colorMap[colorToFind]; // returns purple

        

        return hasColor;
    }

    // public getCalendarEventForToday() {
    //     // List Today's Calendar Event
    //     const calendarData = 
    // }

    // Begins the shopping adventure
    public beginShoppingAdventure() {
        // Start in first section

        // Add items to cart for each shopper

        // Go to next section

        // Crash out on Justin for getting distracted

        // Add Justin's stupid Pistachios

        // Add items to cart

        // Handle yogurt price increase and recalculate budget

        // Finish adding list ite ms

        // Handle Justin's extra items

        // Separate the cart and Crash out again

        // Walk to checkout line

        // Put Items on Belt

        // awkward silence between cashier and myself

        // pay for items

        // pick paper or plastic bag

        // bag items with bag of choice

        // walk out with items

        // rip the pen, you earned it!

    }

    private playWithStrings() {
        let song ="Uptown got it's hustlers"; 
        song = song.concat("\n The Bowery got it's bums");
        song = song.concat("\n 42nd street got big Jim Walker");
        song = song.concat("\n He's a pool shootin' son of a gun");
        song = song.concat("\n Yeah, he's big and dumb as a man can come");
        song = song.concat("\n But he's stronger than a country hoss");
        song = song.concat("\n And when the bad folks all get together at night");
        song = song.concat("\n You know they all call big Jim \"Boss, \" just because");
        song = song.concat("\n And they say \"You don't tug on Superman's cape\"");
        song = song.concat("\n You don't spit into the wind You don't pull the mask off that old lone ranger And you don't mess around with Jim\"");
        song = song.concat("\n No blacks\"");
        song = song.concat("\n after dusk!\"");
        console.debug(song);

        

        // split
        const lines: String[] = song.split("\n");
        console.debug("lines: ", lines);

        // slice
        const startPosLine1 = 0;
        const endPosLine1 = lines[0].length;
        const endPosLine2 = lines[1].length;
        

        //sliced = "Uptown got it's hustlers\n The Bowery got it's bums"
        const sliced = song.slice(startPosLine1, endPosLine2);
        console.debug("endPosLine2: ", endPosLine2);
        // const secondLine =  song.slice(startPosLine1, endPosLine2);
        console.debug("sliced: ", sliced);

        // toUpperCase
        const UpperCase = (song.toUpperCase);
        console.debug("song.toUpperCase", song.toUpperCase());
        
        // toLowerCase
        const LowerCase = (song.toLowerCase);
        console.debug("song.toLowerCase", song.toLowerCase());
        // trim
        const trimmed = song.trim();
        console.debug("trimmed: ", trimmed);

        // replace
        const endPosline = lines.length;
        for (let index = 0; index < lines.length; index++) {
            song = song.replace("\n ", "\n- ");
        }

        console.debug("song: ", song);

        // log last word in song
        
        const firstLine = lines[0];
        const lastLine = lines[lines.length - 1];
        console.debug("lastLine", lastLine);
        const words = song.split(" ");
        const numberOfWords = words.length;
        const lastWord = words[words.length -1]
        console.debug("lastWord ", lastWord);

        this.playWithArrays(lines, words);        
    }

    private playWithArrays(lines: String[], words: String[]) {
        console.debug("before push: ", lines);
        // push (add)
        // lines.push("Up the nose bitch");
        // console.debug("after push: ", lines);

        // pop (removes)
        const popped = lines.pop();
        console.debug("really this nigga: ", popped, "remaining niggas are: ", lines);
        
        // indexOf
        // for (let index = 0; index < array.length; index++)
        let isJimStillHard = words.indexOf("Jim") !== 0;
        console.debug("isJimStillHard: ", isJimStillHard);
        
        // while (isJimStillHard) {
        //     words.pop(); // popped us another nigga
        //     if (words.indexOf("Jim") === 0) {
        //         // we done got him
        //         isJimStillHard = false;
        //         break;
        //     }
        // }

        console.debug("Jim aint hard no more");
        
        const mods = [
            {
                name: "Better Builder Charges"
            },
            {
                name: "Better Lenses"
            },
            {
                name: "Cheat Menu Panel"   
            },
            {
                name: "Cheat menu Hotseat Patch"
            },
            {
                name: "Enslave African Civs"
            }      
        ]
        // console.debug("mods", mods);
        // mods.push({ name: "Enslave African Civs Updated Edition"});
        // console.debug("afteradd", mods)
        const popped2 = mods.pop();
        console.debug("Cheat menu Hotseat Patch", "Enslave African Civs", popped2, "Enslave African Civs", lines);
    }   



}


// do TS for shopping app tomorrow