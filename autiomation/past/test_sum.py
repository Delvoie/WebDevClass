import unittest
import sumFile

class test_add(self):
    

    def add(x,y):
        return x+y
    
    def  multiplication(x,y):
        return x*y
    
    def subtraction(x,y):
        return x-y
    def division(x,y):
        if y==0:
            return ValueError
        return x//y
    



with slef.assertRaises(ValueError):
    sumfile.division(5,0)
    