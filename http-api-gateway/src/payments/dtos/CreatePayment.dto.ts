import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsPositive()
  amount: number;
  @IsNotEmpty()
  userId: number;
}
