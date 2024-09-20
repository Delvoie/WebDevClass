exp_file= open("NewFile", "r")
print(exp_file.read())

with open("NewFile", "r") as file:
    print(exp_file.read())