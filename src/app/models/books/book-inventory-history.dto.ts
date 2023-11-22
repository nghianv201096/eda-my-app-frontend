export class BookInventoryHistoryDto {
    id!: number;
    quantity!: number;
    direction!: number;
    bookId!: number;
    createdDate!: Date;
    note!: string;
}