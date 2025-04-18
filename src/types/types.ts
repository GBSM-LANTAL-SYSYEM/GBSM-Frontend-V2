export interface Lab {
    userId: number;
    rentalDate: string;
    rentalStartTime: string;
    rentalUser: string;
    rentalUsers: string;
    rentalPurpose: string;
    deletionRental: boolean;
    labName: string;
};

export type RentalFormData = {
    rentalDate: string;
    rentalUser: string;
    rentalUsers: string;
    rentalPurpose: string;
    rentalStartTime: string;
    labName: string;
};