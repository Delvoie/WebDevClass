"""people= [{'name': 'bob', 'age': 20},
        {'name': 'carry', 'age': 38},
        {'name': 'john', 'age': 7}
        
        ]
people.sort(key=lambda x:x['age'])



print(people)"""""

"""add= lambda x,y,z: x+y+z

result = add(1,2,3)

print(result)"""


students = [ {"name": "Hannah", "grade_average": 83},
 {"name": "Charlie", "grade_average": 91},
 {"name": "Peter", "grade_average": 85},
 {"name": "Rachel", "grade_average": 79},
 {"name": "Lauren", "grade_average": 92} ]

students.sort(key=lambda student: student["grade_average"])

print(students)