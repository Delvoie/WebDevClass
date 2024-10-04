import unittest
def add(x,y):
    return x+y
class TestAdd(unittest.TestCase):
    def setup(self):
        print("hello")
        result=add(self.a,self.b)
        self.assertEqual(result, (self.a+self.b))


class tardown:
    def teardown_method(self):
        print("bye")


if __name__ == '__main__':
    unittest.main()
    