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


'''''
name = input("please enter your name").split()
givenName=name[0] 
lastName= name[1]
print("given name is : ", givenName)
print("lastName is: ", lastName)'''

'''''
numbers = [1, 2, 3, 4, 5]
num = []

for n in numbers:
    num.append(str(n))

print(" | ".join(num))'''
'''''
user_number = input("Please enter a number: ")
while float(user_number) < 10:
 print("Your number was less than 10.")
 user_number = input("Please select another number: ")
print("Your number was at least 10.")
'''



totalbudget = 0
for emp in Mmvies:
    totalbudget += emp[2]  # Add the pay to the total

avg = totalbudget / len(employes)  # Calculate the average pay

print("Total Pay:", totalbudget)
print("Average Pay:", avg)