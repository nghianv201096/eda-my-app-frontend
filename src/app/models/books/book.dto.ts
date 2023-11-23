import { BookInventoryHistoryDto } from "./book-inventory-history.dto";

export class BookDto {
    id!: string;
    type!: string;
    author!: string;
    name!: string;
    locked!: boolean;
    quantity!: number;
    inventoryHistories!: BookInventoryHistoryDto[];
}