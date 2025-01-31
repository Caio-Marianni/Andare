import { StaticImageData } from 'next/image';

export default interface TravelPackage {
  id: number,
  image: StaticImageData,
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