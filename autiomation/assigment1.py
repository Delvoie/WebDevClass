# Lucas Delvoie
# 09/12/2024
# In class exercise 1

#print("My age is 21")
#print (21*365)
#print (21*52)
#print (21*12)

#area of a circle

#radius = 5
#area = 3.14 * radius**2
#print (area)

#a= 9
#a=10
#print(a)

#hourly_wage = input("Please enter your hourly wage: ")
#print("Hourly wage: ")
#print(hourly_wage)

#hours_worked= input("Hours worked: ")
#print(hours_worked)
#hours_worked = input("How many hours did you work this week? ")

#salary = hourly_wage* hours_worked

#print("Your salary is: ", salary)


#part 2


#a= "{name} is {age} years old, and {name} works as a {jpb}."
#print(a.format(name="John", age=32, jpb="Engineer"))


#name = "lucas"
#a="lucas".strip().title()
#age= 21
#print(f"{a} is {age} years old")

#print("Hello, World!".lower()) # "hello, world!"
#print("Hello, World!".upper()) # "HELLO, WORLD!"
#print("Hello, World!".capitalize()) # "Hello, world!"
#print("hello, world!".title()) # "Hello, World!"

#List=["john", "lucas","ludwig", "ethan"]
#List.insert(3,"kelab")
#print(List)
#List.pop()
#print(List)

#movie= [("RRR", "martin scorsece", "2024", '200000000')]
#print(f"{movie [0]}")

#title= input("enter a title: ")
#director= input("enter director name: ")
#year= input("enter year: ")
#budget= input("enter budget: ")

#newMovie= (title, director, year, budget)
#print(f"{newMovie[0]} {newMovie[1]} {newMovie[2]} {newMovie[3]}")

#movie.append(newMovie)
#print(movie[0])
#print(movie[1])

#movie.remove(movie[0])
#print(movie)

empName = input("Please enter your name: ")
hourly_wage = float(input(f"Please enter your hourly wage for {empName} : "))

hours_worked = float(input(f"How many hours did {empName} work this week? "))

if hours_worked>40:
    regularPay= hourly_wage*40
    overtimePay= (hours_worked-40)* hourly_wage*1.1
    owedPay=regularPay+overtimePay
    print(owedPay)

else:
    regularPay= hourly_wage*40
    print(regularPay)
    
    
    
    
    
movies = [
("Eternal Sunshine of the Spotless Mind", "Michel Gondry", 2004),
("Memento","Christopher Nolan",2000),
("Requiem for a Dream", "Darren Aronofsky",2000)
]
for movie in movies:
 print(f"{movie[0]} was directed in this ({movie[2]}), by {movie[1]}")