def get_numbers():
    global counter
    while True:
        try:
            numberinput = input("Enter numbers separated by spaces (1-301): ")
            numbers = [int(num) for num in numberinput.split()]
            
            if (1 <= num <= 301 for num in numbers):
                return numbers
                max_number = max(numbers)
                print(f"The greatest value is {max_number}")
            else:
                print("Please enter numbers between 1 and 300")
        except ValueError:
            print("Invalid input. Please enter valid numbers.")