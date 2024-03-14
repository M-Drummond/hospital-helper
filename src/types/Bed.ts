import type {Patient} from "../types/Patient"

export default interface Bed  {
  id: number,
  patient: Patient,
}