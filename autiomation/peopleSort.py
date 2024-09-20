people= [{'name': 'bob', 'age': 20},
        {'name': 'carry', 'age': 38},
        {'name': 'john', 'age': 7}
        
        ]
people.sort(key=lambda x:x['age'])
print(people)