def get_numbers():
    try:
        number_input = input("Enter numbers separated by a space (1-300): ")
        numbers1 = [int(num) for num in number_input.split()]
        
        if (num <= 300 for num in numbers1):
            return numbers1
        else:
            print("Please enter numbers between 1 and 300")
            return get_numbers()
    except ValueError:
        print("Error Message (Exception Handling)")
        return get_numbers()

numbers = get_numbers()
max_number = max(numbers)
print(f"{max_number}")

if __name__ == "__main__":
    get_numbers()