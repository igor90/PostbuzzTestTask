export interface IAirport {
    name: string,
    iataCode: string
}
  
export interface IResultParams {
    departureCode: string;
    arriveCode: string;
    startDate: string;
    endDate: string;
}

export interface IFlightInfo {
    departure: string;
    arrive: string;
    startDate: string;
    endDate: string;
}