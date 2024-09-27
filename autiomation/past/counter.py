def get_numbers():
    while True:
        try:
            number_input = input("Enter numbers separated by a space (1-300): ")
            numbers1 = [int(num) for num in number_input.split()]
            
            if (1 <= num <= 300 for num in numbers1):
                return numbers1
            else:
                print("Please enter numbers between 1 and 300")
        except ValueError:
            print("Error Message (Exception Handling). Must be a numbers.")

numbers = get_numbers()
max_number = max(numbers)
print(f"{max_number}")