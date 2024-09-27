def get_numbers():
    global counter
    counter = 0
    while True:
        try:
            input_string = input("Enter numbers separated by spaces (1-300): ")
            numbers = [int(num) for num in input_string.split()]