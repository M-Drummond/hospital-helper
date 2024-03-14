import type { Note } from "./Note"

export interface Patient  {
    id: number
    name: String
    notes: Note[]
}
