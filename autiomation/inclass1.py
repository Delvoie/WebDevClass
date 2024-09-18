movies = [
    ("Eternal Sunshine of the Spotless Mind", 20000000),
    ("Memento", 9000000),
    ("Requiem for a Dream", 4500000),
    ("Pirates of the Caribbean: On Stranger Tides", 379000000),
    ("Avengers: Age of Ultron", 365000000),
    ("Avengers: Endgame", 356000000),
    ("Incredibles 2", 200000000)
]
addmovie = int(input("How many movies do you wish to add? "))

for mov in range(addmovie):
    movie_name = input("Enter movie name: ")
    movie_budget = float(input("Enter movie budget: "))
    movies.append((movie_name, movie_budget))

totalbudget = 0
for mov in movies:
    totalbudget += mov[1]

avg = totalbudget / len(movies)

print("Average Budget:", avg)

for mov in movies:
    if mov[1] > avg:
        Overbudget = mov[1] - avg
        print(f"{mov[0]} has a budget greater than the average: ${Overbudget:.2f} more than the average")
overAvg = 0
for mov in movies:
    if mov[1] > avg:
        overAvg += 1
print(f"{overAvg} movies spent more than the average")
