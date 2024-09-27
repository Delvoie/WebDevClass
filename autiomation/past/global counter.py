global counter

def get_number():
    while True:
        try:
            n = int(input(f"Enter number {counter}: "))
            if 1 <= n <= 300:
                return n
            else:
                print("Please enter a number between 1 and 300")
        except ValueError:
            print("Invalid input. Please enter a valid number.")

counter = 1
x = get_number()
counter += 1
y = get_number()
counter += 1
z = get_number()

if x > y and x > z:
    print("The largest number is x", x)
elif y > x and y > z:
    print("The largest number is y", y)
else:
    print("The largest number is z", z)