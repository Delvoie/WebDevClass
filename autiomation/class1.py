'''employes = [
    ("Rolf Smith", 35, 8.75),
    ("Anne Pun", 30, 12.50),
    ("Charlie Lee", 50, 15.50),
    ("Bob Smith", 20, 7.00)
]

total = 0
for emp in employes:
    total += emp[2]  # Add the pay to the total

avg = total / len(employes)  # Calculate the average pay

print("Total Pay:", total)
print("Average Pay:", avg)

for emp in employes:
    if emp[2] > avg:
        print(f"{emp[0]} is more than average")'''

''''
project_authors=["Mike", "Sofia", "Helen"]
project_authors= ", ".join(project_authors)
print(f"project authors workers: {project_authors}")'''

""""
original_string = "Python"
sliced_string = original_string[0:2]
print(sliced_string)"""



name = input("please enter your name").split()
givenName=name[0] 
lastName= name[1]
print("given name is : ", givenName)
print("lastName is: ", lastName)