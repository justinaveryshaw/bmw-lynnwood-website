import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { APIService } from '../api.service';
import { SeriesSelection } from '../interfaces';

@Component({
    selector: 'app-home',
    imports: [CommonModule, FormsModule],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home implements OnInit {

    public isLoading = true;

    public selectedSearchType = "VEHICLE"; // TODO use enum instead
    public searchTypes = ["VEHICLE", "KEYWORD", "BUDGET"]; // TODO use in template
    
    // define visible carousel image
    public shownImageIndex = 0;

    // define all carousel images
    public carouselImages = [
        "images/carousel-offer--bmw-x5.jpg",
        "images/carousel-offer--bmw-x3.jpg",
        "images/carousel-offer--bmw-x1.jpg",
        "images/carousel-offer--bmw-x7.jpg",
        "images/carousel-offer--bmw-m5.jpg"
    ];

    // TODO fetch data model
    public vehicleTypes = [
        {
            name: 'All',
            isSelected: true
        },
        {
            name: 'New',
            isSelected: false
        },
        {
            name: 'Certified',
            isSelected: false
        }
    ];

    public vehicleMakes = [
        {
            name: 'BMW',
            isSelected: true
        }
    ];

    public vehicleModels = [
        {
            name: 'Any Model',
            isSelected: true
        },
        {
            name: '230i xDrive',
            isSelected: false
        },
        {
            name: '235i',
            isSelected: false
        },
        {
            name: '330i NA xDrive',
            isSelected: false
        },
        {
            name: '430i xDrive',
            isSelected: false
        },
        {
            name: '540i xDrive',
            isSelected: false
        },
        {
            name: '740i',
            isSelected: false
        },
        {
            name: '740i xDrive',
            isSelected: false
        }
    ];

    // TODO make this better
    public searchInputSelection = {
        vehicleType: 'All',
        vehicleMake: 'BMW',
        vehicleModel: 'Any Model'
    };
    
    // TODO fetch this dynamically
    public selectedSeries: SeriesSelection = {
        name: "X3",
        imageSrcPath: "images/landing-series-img--x3.png"
    };

    public seriesSelectionList: SeriesSelection[] = [];

    // private workoutSchedule = {
    //     sunday: "CHEST",
    //     monday: "BACK",
    //     tuesday: "LEG",
    //     wednesday: "CHEST",
    //     thursday: "BACK",
    //     friday: "LEG",
    //     saturday: "REST"
    // };

    constructor(private api: APIService) {}

    async ngOnInit() { // called when home initalizes
        // this.listNumbers();
        
        // this.benchPress(8);
        // this.benchPress(7);

        // call entire bench workout
        // this.benchWorkout();

        // get workout for today
        // this.getDailyWorkoutType();
        // console.debug(`sunday is ${this.workoutSchedule.sunday} day`);


        // initialize the carousel timer
        this.initializeCarouselTimer();

        let seriesData;
        this.isLoading = true;
        try {
            seriesData = await firstValueFrom(this.api.getSeriesSelectionList());
            this.seriesSelectionList = seriesData.series;
            console.debug("series: ", this.seriesSelectionList);
            this.isLoading = false;

        } catch (error) {
            // this.isLoading = false;
        }
        // console.debug('series data: ', menuData);
        
    }

    public selectSeries(seriesSelection: SeriesSelection) {
        this.selectedSeries = seriesSelection;
    }

    // define next image function
    public nextImage() {
        console.debug("button clicked, index: ", this.shownImageIndex);
        const isLastImage = this.shownImageIndex ===  this.carouselImages.length - 1; 
        // if on last image, back to beginning 
        if (isLastImage){
            console.debug("last one! staring over.");
            this.shownImageIndex = 0;
        } else {  // otherwise, next in list  
            console.debug("not last! moving on.");
            this.shownImageIndex++; 
        }
            console.debug("current index now: ", this.shownImageIndex);
    }
    
    // define previous image function
    public previousImage() {
        console.debug("previous clicked, index: ", this.shownImageIndex);
        const isFirstImage = this.shownImageIndex === 0;
        // if on first image, go to last
        if (isFirstImage){
            console.debug("First one!, Going back.");
            this.shownImageIndex = this.carouselImages.length - 1; 
        } else {
            console.debug("Not First! Moving on.");
            this.shownImageIndex--;

        }

            console.debug("current index now: ", this.shownImageIndex);
    }

    // TODO use enum instead
    public selectSearchType(searchType: string) { // VEHICLE || KEYWORD || BUDGET
        this.selectedSearchType = searchType;
    }

    // LATER: ADVANCE IMAGES AUTOMATICALLY 

    // public getDailyWorkoutType() {
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     const today = new Date(); // Get the current date
    //     const dayName = days[today.getDay()]; // Map the day number to its name
    //     // const dayName = "thursday";
    //     const daysOfWeek = this.typedKeys(this.workoutSchedule);
    //     const currentDay = dayName.toLowerCase();
    //     // debugger;
    //     let currentWorkout;
    //     // let runCount = 0;
    //     for(let i = 0; i < daysOfWeek.length; i++) {
    //         // runCount++;
    //         // debugger;            
    //         if (currentDay === daysOfWeek[i]) {
    //             currentWorkout = this.workoutSchedule[currentDay];                
    //             break;
    //         }
    //     }
        
    //     if(!currentWorkout){
    //         console.debug(`Nice Week! Go Get a Massage ;)`);
    //     } else {
    //         console.debug(`Today is ${currentDay} and the workout is ${currentWorkout}`);
    //     }

    //     // console.debug(`Weekday loop ran ${runCount} times`);
    // }

    // private typedKeys<T extends object>(o: T): (keyof T)[] {
    //     // type cast should be safe because that's what really Object.keys() does
    //     return Object.keys(o) as (keyof T)[];
    // }


    // public listNumbers() { // Print all numbers 1-11 from an array
    //     const numbersToList = [1,2,3,4,5,6,7,8,9,10,11];
    //     console.log('length:', numbersToList.length);
    //     console.log(numbersToList);
    //     console.log(numbersToList[0]); // first in array
    //     console.log(numbersToList[11]); // undefined
    //     console.log(numbersToList[numbersToList.length - 1]); // last in array
    //     for (let index = 0; index < numbersToList.length; index++) { //start at 0, continue
    //         console.log(numbersToList[0]);
    //     }
    // }

    // // Perform Entire Bench Workout
    // public benchWorkout() { 
    //     const setAmount = 4; 
    //     for(let currentSet = 0; currentSet< setAmount ; currentSet++) {
    //          this.benchPress(8);
    //     }
    // }



    // public benchPress(setLength: number) { // One Set Bench Press
    //     // position bench flat
    //     const benchPosition = "flat";
        
    //     // lay down back flat
    //     const bodyPosition = "prone";

    //     // grab bar with ring finger positioned on gap
    //     const ringFingerPosition = "line";

    //     // position hands with knuckles facing ceiling and wrist locked vertically
    //     const handPosition = "vertical";
    //     const wristsLocked = true;

    //     let isBarInMotion = false; // in rack start position
        
    //     // push bar into air
    //     isBarInMotion = true;

    //     // in air, align bar above nipples with elbows locked
    //     let barPosition = "highest";

    //     // repeat next 2 steps until end of set length (8 per set)
    //     console.debug(`beginning reps`);
    //     for(let repNumber = 0; repNumber< setLength ; repNumber++) {
    //         // lower bar to touch below nipples
    //         barPosition = "lowest";
    //         console.debug(`barPosition is ${barPosition} for repNumber ${repNumber+1}`);
    //         // push bar up
    //         barPosition = "highest";  
    //         console.debug(`barPosition is ${barPosition} for repNumber ${repNumber+1}`);
    //     }
    //     console.debug(`reps finished`);
    //     // lower bar onto rack
    //     isBarInMotion = false;
    // }

    // starts the carousel timer
    private initializeCarouselTimer() {
        const intervaId = setInterval(() => {
            // Go to next image 
            this.nextImage()
        }, 5000);
    }

}
