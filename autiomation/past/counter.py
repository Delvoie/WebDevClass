        try:
            numberinput = input("Enter numbers separated by a space (1-300): ")
            numbers = [int(num) for num in numberinput.split()]
            
            if all(1 <= num <= 300 for num in numbers):
                return numbers
            else:
                print("Please enter numbers between 1 and 300")
        except ValueError:
            print("Error Message (Exception Handling). Must be a numbers.")

numbers = get_numbers()
max_number = max(numbers)
print(f"The greatest value is {max_number}")