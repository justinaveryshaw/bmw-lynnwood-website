export interface InventoryCardData {
    imageSource: String;
    vin: String;
    stockNumber: String;
    price: Number;
    make: String;
    model: String;
    trim: String;
    year: Number;
    featureSummaryInfo: Object;
    status: String;
    location: String;
    color: VehicleColor;
}

interface VehicleColor {
    exterior: String;
    interior: String;
}