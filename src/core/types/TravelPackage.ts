export default interface TravelPackage {
  id: number,
  image: string,
  title: string,
  location: string,	
  departureLocation: string,
  days: number,
  taxes?: string[],
  fullPrice: number,
  parcelPrice: number,
  parcelTimes: number,
  description?: string[],
  type?: string,
}