import type { note } from "./Note"

export interface Patient  {
    id: number
    name: String
    notes: note[]
}
