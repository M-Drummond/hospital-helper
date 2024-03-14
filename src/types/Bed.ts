import type {Patient} from "../types/Patient"

export default interface Bed  {
  id: number,
  index: number,
  patient: Patient,
}